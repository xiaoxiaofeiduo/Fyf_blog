import { Link } from 'react-router-dom';
import { Card, Icon } from 'animal-island-ui';
import { BlogPost, formatDate } from '../lib/posts';

interface PostCardProps {
  post: BlogPost;
  compact?: boolean;
}

export function PostCard({ post, compact = false }: PostCardProps) {
  return (
    <Link to={`/posts/${post.slug}`} className="post-card-link">
      <Card className={`post-card ${compact ? 'post-card-compact' : ''}`} color={post.cover as never}>
        <div className="post-card-topline">
          <span>{formatDate(post.date)}</span>
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
          阅读全文 <Icon name="icon-chat" size={18} />
        </span>
      </Card>
    </Link>
  );
}
