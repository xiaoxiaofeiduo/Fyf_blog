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
  const missionId = [...post.slug].reduce((total, char) => total + char.charCodeAt(0), 0) % 1000;
  const accessLevel = post.category === '安全研究' ? 'LEVEL A' : post.category === 'AI 实践' ? 'LEVEL B' : 'LEVEL C';

  return (
    <Link
      to={`/posts/${post.slug}`}
      className="post-card-link"
      state={isFromPostsPage ? { fromPostsList: true } : undefined}
    >
      <article className={`post-card ${compact ? 'post-card-compact' : ''}`}>
        <span className="post-card-beam" aria-hidden="true" />
        <div className="post-card-classification">
          {post.category && <span className="post-card-category">{post.category}</span>}
          <code>FILE-{String(missionId).padStart(3, '0')} / {accessLevel}</code>
        </div>
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
