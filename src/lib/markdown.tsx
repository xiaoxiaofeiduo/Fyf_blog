import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

function normalizeUrl(value: string) {
  return value.trim().replace(/^<(.+)>$/, '$1');
}

export function renderMarkdown(
  markdown: string,
  resolveAsset: (url: string) => string | undefined = () => undefined
) {
  const components: Components = {
    a({ href, children, ...props }) {
      const normalizedHref = href ? normalizeUrl(href) : undefined;
      const isExternal = normalizedHref ? /^(https?:)?\/\//.test(normalizedHref) : false;

      return (
        <a
          {...props}
          href={normalizedHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
    img({ src, alt, ...props }) {
      const normalizedSrc = src ? normalizeUrl(src) : '';

      return (
        <img
          {...props}
          src={resolveAsset(normalizedSrc) ?? normalizedSrc}
          alt={alt ?? ''}
          loading="lazy"
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
