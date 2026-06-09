import { useEffect, useState } from 'react';

const REPO = 'xiaoxiaofeiduo/Fyf_blog';
const API_URL = `https://api.github.com/repos/${REPO}`;
const CACHE_KEY = `gh-stars-${REPO}`;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes to avoid rate limiting

interface CacheEntry {
  count: number;
  ts: number;
}

function readCache(): number | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) return null;
    return entry.count;
  } catch {
    return null;
  }
}

function writeCache(count: number) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ count, ts: Date.now() }));
  } catch {
    // localStorage may be full or disabled
  }
}

export function GitHubStar() {
  const [stars, setStars] = useState<number | null>(() => readCache());

  useEffect(() => {
    if (stars !== null) return;

    let cancelled = false;
    fetch(API_URL, { headers: { Accept: 'application/vnd.github.v3+json' } })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data: { stargazers_count?: number }) => {
        if (cancelled) return;
        const count = data.stargazers_count ?? 0;
        setStars(count);
        writeCache(count);
      })
      .catch(() => {
        // Silently fail — the button still links to the repo
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="github-star-wrap">
      <a
        className="github-star-btn"
        href={`https://github.com/${REPO}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Star on GitHub"
      >
        <svg
          className="github-star-icon"
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
        </svg>
        <span>Star</span>
        {stars !== null && (
          <span className="github-star-count">{formatStarCount(stars)}</span>
        )}
      </a>
      <span className="github-star-hint">喜欢的话点个 Star 支持一下吧</span>
    </span>
  );
}

function formatStarCount(n: number): string {
  if (n >= 1000) {
    return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return String(n);
}
