import { useEffect, useState } from 'react';
import type { ArticleHeading } from '../lib/headings';

export function ArticleToc({ headings }: { headings: ArticleHeading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    const elements = headings.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    setActive(elements[0].id);
    let frame = 0;
    const updateActiveHeading = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = 145;
        const current = elements.reduce((selected, element) => (
          element.getBoundingClientRect().top <= marker ? element : selected
        ), elements[0]);
        setActive(current.id);
      });
    };

    updateActiveHeading();
    window.addEventListener('scroll', updateActiveHeading, { passive: true });
    window.addEventListener('resize', updateActiveHeading);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActiveHeading);
      window.removeEventListener('resize', updateActiveHeading);
    };
  }, [headings]);

  const navigateToHeading = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    setActive(id);

    let scrollParent: HTMLElement | null = target.parentElement;
    while (scrollParent && scrollParent !== document.body) {
      const style = window.getComputedStyle(scrollParent);
      const canScroll = /(auto|scroll|overlay)/.test(style.overflowY)
        && scrollParent.scrollHeight > scrollParent.clientHeight;
      if (canScroll) break;
      scrollParent = scrollParent.parentElement;
    }

    const htmlBehavior = document.documentElement.style.scrollBehavior;
    const bodyBehavior = document.body.style.scrollBehavior;
    const parentBehavior = scrollParent?.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    if (scrollParent) scrollParent.style.scrollBehavior = 'auto';

    target.scrollIntoView({ behavior: 'auto', block: 'start' });
    target.focus({ preventScroll: true });

    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = htmlBehavior;
      document.body.style.scrollBehavior = bodyBehavior;
      if (scrollParent) scrollParent.style.scrollBehavior = parentBehavior ?? '';
    });
  };

  if (headings.length < 2) return null;

  return (
    <aside className="article-toc" aria-label="文章目录">
      <small>MISSION PHASE</small>
      <strong>章节导航</strong>
      <nav>
        {headings.map((item, index) => (
          <button
            key={`${item.id}-${index}`}
            type="button"
            className={`${item.level === 3 ? 'toc-sub' : ''} ${active === item.id ? 'toc-active' : ''}`}
            aria-current={active === item.id ? 'location' : undefined}
            onClick={() => navigateToHeading(item.id)}
          >
            <i aria-hidden="true" />
            <span>{item.text}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
