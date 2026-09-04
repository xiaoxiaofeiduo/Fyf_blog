import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="reading-progress" aria-label={`阅读进度 ${Math.round(progress)}%`}>
      <span style={{ width: `${progress}%` }} />
      <i className="reading-sword" style={{ left: `${progress}%` }} aria-hidden="true" />
      <code>MASTER SWORD / {String(Math.round(progress)).padStart(3, '0')}%</code>
    </div>
  );
}
