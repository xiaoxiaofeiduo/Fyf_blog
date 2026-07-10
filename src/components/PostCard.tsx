import { Link, useLocation } from 'react-router-dom';
import { ScanSearch } from 'lucide-react';
import { BlogPost, formatDate } from '../lib/posts';

interface PostCardProps {
  post: BlogPost;
  compact?: boolean;
}

export function PostCard({ post, compact = false }: PostCardProps) {
  const location = useLocation();
  const isFromPostsPage = location.pathname === '/posts';

  return (
    <Link
      to={`/posts/${post.slug}`}
      className="post-card-link"
      state={isFromPostsPage ? { fromPostsList: true } : undefined}
    >
      <article className={`post-card ${compact ? 'post-card-compact' : ''}`}>
        <span className="post-card-beam" aria-hidden="true" />
        {post.category && <span className="post-card-category">{post.category}</span>}
        <div className="post-card-topline">
          <time
            className="post-published-at"
            dateTime={post.date}
          >
            {formatDate(post.date)}
          </time>
          <span>{post.readingTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.summary}</p>
        <div className="tag-row">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="post-card-more">
          阅读全文
          <span className="hud-action-icon" aria-hidden="true">
            <ScanSearch size={14} strokeWidth={1.7} />
          </span>
        </span>
      </article>
    </Link>
  );
}
