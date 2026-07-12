import { useEffect, useState } from 'react';
import type { ArticleHeading } from '../lib/headings';

export function ArticleToc({ headings }: { headings: ArticleHeading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? '');
  useEffect(() => {
    const elements = headings.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-18% 0px -68% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);
  if (headings.length < 2) return null;
  return <aside className="article-toc" aria-label="文章目录"><small>MISSION PHASE</small><strong>章节导航</strong><nav>{headings.map((item, index) => <a key={`${item.id}-${index}`} className={`${item.level === 3 ? 'toc-sub' : ''} ${active === item.id ? 'toc-active' : ''}`} href={`#${item.id}`}><i />{item.text}</a>)}</nav></aside>;
}
