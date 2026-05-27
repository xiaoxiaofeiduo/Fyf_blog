import { Link, useParams } from 'react-router-dom';
import { Button, Card, Divider } from 'animal-island-ui';
import { formatDate, getPostBySlug, postAssetMap } from '../lib/posts';
import { renderMarkdown } from '../lib/markdown';

export function PostDetailPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="page-section">
        <Card className="empty-state">
          <h1>没有找到这篇文章</h1>
          <p>它可能已经被移动，或者链接里有一个拼写错误。</p>
          <Link to="/posts">
            <Button type="primary">返回文章列表</Button>
          </Link>
        </Card>
      </section>
    );
  }

  const postDir = post.sourcePath.slice(0, post.sourcePath.lastIndexOf('/'));
  const resolvePostAsset = (url: string) => {
    if (/^(https?:|data:|\/)/.test(url)) return url;
    const normalized = url.replace(/^\.\//, '');
    return postAssetMap[`${postDir}/${normalized}`];
  };

  return (
    <article className="article-page">
      <header className="article-hero">
        <Link to="/posts" className="back-link">返回文章</Link>
        <div className="article-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div className="tag-row">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <Divider />

      <Card className="article-card">
        <div className="article-content">{renderMarkdown(post.content, resolvePostAsset)}</div>
      </Card>
    </article>
  );
}
