import { useEffect, useRef, useState } from 'react';

let initialized = false;
let diagramId = 0;
let renderQueue = Promise.resolve();

async function renderMermaid(source: string) {
  const task = renderQueue.then(async () => {
    const { default: mermaid } = await import('mermaid');

    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: '#e8dfc4',
          primaryTextColor: '#16352b',
          primaryBorderColor: '#4d8f7b',
          lineColor: '#397663',
          secondaryColor: '#d7e8dc',
          tertiaryColor: '#f5efd9',
          edgeLabelBackground: '#f1e9d1',
          fontFamily: 'Inter, "Noto Sans SC", sans-serif',
        },
        flowchart: {
          curve: 'basis',
          htmlLabels: false,
          useMaxWidth: true,
        },
      });
      initialized = true;
    }

    return mermaid.render(`article-mermaid-${++diagramId}`, source);
  });

  renderQueue = task.then(
    () => undefined,
    () => undefined,
  );

  return task;
}

type MermaidDiagramProps = {
  source: string;
};

export function MermaidDiagram({ source }: MermaidDiagramProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setError('');
    setLoading(true);

    renderMermaid(source)
      .then(({ svg }) => {
        if (cancelled || !canvasRef.current) return;
        canvasRef.current.innerHTML = svg;
        setLoading(false);
      })
      .catch((reason: unknown) => {
        if (cancelled) return;
        setError(reason instanceof Error ? reason.message : '未知错误');
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [source]);

  return (
    <figure className="mermaid-diagram" aria-label="文章流程图">
      {loading && <div className="mermaid-loading">正在绘制流程图…</div>}
      {error ? (
        <div className="mermaid-error">
          <strong>流程图渲染失败</strong>
          <span>{error}</span>
        </div>
      ) : (
        <div ref={canvasRef} className="mermaid-canvas" />
      )}
    </figure>
  );
}
