import { Children, isValidElement, type ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { MermaidDiagram } from '../components/MermaidDiagram';
import { headingId } from './headings';

type HastNode = {
  type?: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function normalizeUrl(value: string) {
  return value.trim().replace(/^<(.+)>$/, '$1');
}

function hastText(node: HastNode): string {
  if (node.type === 'text') return node.value ?? '';
  return node.children?.map(hastText).join('') ?? '';
}

function rehypeHeadingIds() {
  return (tree: HastNode) => {
    const ids = new Map<string, number>();
    const visit = (node: HastNode) => {
      if (node.type === 'element' && (node.tagName === 'h2' || node.tagName === 'h3')) {
        const baseId = headingId(hastText(node));
        const count = ids.get(baseId) ?? 0;
        ids.set(baseId, count + 1);
        node.properties = {
          ...node.properties,
          id: count ? `${baseId}-${count + 1}` : baseId,
          tabIndex: -1,
        };
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

export function renderMarkdown(
  markdown: string,
  resolveAsset: (url: string) => string | undefined = () => undefined,
  resolveLink: (url: string) => string | undefined = () => undefined
) {
  let imageIndex = 0;

  const components: Components = {
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
      const child = Children.count(children) === 1 ? Children.only(children) : null;

      if (isValidElement<{ className?: string; children?: ReactNode }>(child)) {
        const languageClasses = child.props.className?.split(/\s+/) ?? [];

        if (languageClasses.includes('language-mermaid')) {
          const source = Children.toArray(child.props.children).join('').replace(/\n$/, '');
          return <MermaidDiagram source={source} />;
        }
      }

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
      rehypePlugins={[rehypeRaw, rehypeHeadingIds]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
}
