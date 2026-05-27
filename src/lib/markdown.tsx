import React from 'react';

function normalizeUrl(value: string) {
  return value.trim().replace(/^<(.+)>$/, '$1');
}

function inline(
  text: string,
  resolveAsset: (url: string) => string | undefined = () => undefined
) {
  const parts = text.split(/(!\[[^\]]*\]\((?:<[^>]+>|[^)]+)\)|\[[^\]]+\]\((?:<[^>]+>|[^)]+)\)|`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const imageMatch = part.match(/^!\[([^\]]*)\]\((<[^>]+>|[^)]+)\)$/);
    if (imageMatch) {
      const src = normalizeUrl(imageMatch[2]);
      return (
        <img
          key={index}
          src={resolveAsset(src) ?? src}
          alt={imageMatch[1]}
          loading="lazy"
        />
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const href = normalizeUrl(linkMatch[2]);
      return (
        <a key={index} href={href} target="_blank" rel="noreferrer">
          {linkMatch[1]}
        </a>
      );
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function renderMarkdown(
  markdown: string,
  resolveAsset: (url: string) => string | undefined = () => undefined
) {
  const lines = markdown.split('\n');
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    const commentLine = line.match(/^<!--[\s\S]*-->$/);
    if (commentLine) {
      i += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith('```')) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      nodes.push(
        <pre key={nodes.length} className="article-code">
          <code data-language={language}>{code.join('\n')}</code>
        </pre>
      );
      continue;
    }

    if (line.startsWith('    ')) {
      const code: string[] = [];
      while (i < lines.length && (lines[i].startsWith('    ') || !lines[i].trim())) {
        code.push(lines[i].startsWith('    ') ? lines[i].slice(4) : '');
        i += 1;
      }
      nodes.push(
        <pre key={nodes.length} className="article-code">
          <code>{code.join('\n').trimEnd()}</code>
        </pre>
      );
      continue;
    }

    const imageOnly = line.match(/^!\[([^\]]*)\]\((<[^>]+>|[^)]+)\)$/);
    if (imageOnly) {
      const src = normalizeUrl(imageOnly[2]);
      nodes.push(
        <figure key={nodes.length} className="article-image">
          <img src={resolveAsset(src) ?? src} alt={imageOnly[1]} loading="lazy" />
          {imageOnly[1] && <figcaption>{imageOnly[1]}</figcaption>}
        </figure>
      );
      i += 1;
      continue;
    }

    if (line.startsWith('# ')) {
      nodes.push(<h1 key={nodes.length}>{inline(line.slice(2), resolveAsset)}</h1>);
      i += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      nodes.push(<h2 key={nodes.length}>{inline(line.slice(3), resolveAsset)}</h2>);
      i += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      nodes.push(<h3 key={nodes.length}>{inline(line.slice(4), resolveAsset)}</h3>);
      i += 1;
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      nodes.push(
        <ul key={nodes.length}>
          {items.map((item, index) => (
            <li key={index}>{inline(item, resolveAsset)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i += 1;
      }
      nodes.push(
        <ol key={nodes.length}>
          {items.map((item, index) => (
            <li key={index}>{inline(item, resolveAsset)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const paragraph = [line.trim()];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('#') &&
      !lines[i].startsWith('- ') &&
      !lines[i].startsWith('* ') &&
      !lines[i].startsWith('    ') &&
      !lines[i].startsWith('![') &&
      !lines[i].startsWith('<!--') &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].startsWith('```')
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }

    nodes.push(<p key={nodes.length}>{inline(paragraph.join(' '), resolveAsset)}</p>);
  }

  return nodes;
}
