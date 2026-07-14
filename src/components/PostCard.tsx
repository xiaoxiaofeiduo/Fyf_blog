import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { type BlogPost, formatDate } from '../lib/posts';

interface PostCardProps {
  post: BlogPost;
  compact?: boolean;
}

export function PostCard({ post, compact = false }: PostCardProps) {
  const location = useLocation();
  const isFromPostsPage = location.pathname === '/posts';
  const logId = [...post.slug].reduce((total, char) => total + char.charCodeAt(0), 0) % 1000;

  return (
    <Link
      to={`/posts/${post.slug}`}
      className={`log-plaque ${compact ? 'log-plaque-compact' : ''}`}
      state={isFromPostsPage ? { fromPostsList: true } : undefined}
    >
      <span className="plaque-index">{String(logId).padStart(3, '0')}</span>
      <div className="plaque-main">
        <div className="plaque-meta">
          <span>{post.category || '海拉鲁'}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <em>{post.readingTime}</em>
        </div>
        <h3>{post.title}</h3>
        {!compact && <p>{post.summary}</p>}
        <div className="plaque-tags">{post.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <span className="plaque-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
    </Link>
  );
}
