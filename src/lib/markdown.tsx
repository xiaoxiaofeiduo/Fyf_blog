import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { isValidElement, type ReactNode } from 'react';
import { headingId } from './headings';

function normalizeUrl(value: string) {
  return value.trim().replace(/^<(.+)>$/, '$1');
}

function nodeText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeText(node.props.children);
  return '';
}

export function renderMarkdown(
  markdown: string,
  resolveAsset: (url: string) => string | undefined = () => undefined,
  resolveLink: (url: string) => string | undefined = () => undefined
) {
  let imageIndex = 0;
  const headingIds = new Map<string, number>();
  const uniqueHeadingId = (text: string) => {
    const baseId = headingId(text);
    const count = headingIds.get(baseId) ?? 0;
    headingIds.set(baseId, count + 1);
    return count ? `${baseId}-${count + 1}` : baseId;
  };

  const components: Components = {
    h2({ children, ...props }) {
      return <h2 {...props} id={uniqueHeadingId(nodeText(children))}>{children}</h2>;
    },
    h3({ children, ...props }) {
      return <h3 {...props} id={uniqueHeadingId(nodeText(children))}>{children}</h3>;
    },
    a({ href, children, ...props }) {
      const normalizedHref = href ? normalizeUrl(href) : undefined;
      const resolvedHref = normalizedHref ? (resolveLink(normalizedHref) ?? normalizedHref) : undefined;
      const isExternal = resolvedHref ? /^(https?:)?\/\//.test(resolvedHref) : false;

      return (
        <a
          {...props}
          href={resolvedHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
    img({ src, alt, ...props }) {
      const normalizedSrc = src ? normalizeUrl(src) : '';
      const isFirstImage = imageIndex === 0;
      imageIndex += 1;

      return (
        <img
          {...props}
          src={resolveAsset(normalizedSrc) ?? normalizedSrc}
          alt={alt ?? ''}
          loading={isFirstImage ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={isFirstImage ? 'high' : 'auto'}
        />
      );
    },
    pre({ children, ...props }) {
      return (
        <pre {...props} className="article-code">
          {children}
        </pre>
      );
    },
    table({ children, ...props }) {
      return (
        <div className="article-table-scroll">
          <table {...props}>{children}</table>
        </div>
      );
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
}
