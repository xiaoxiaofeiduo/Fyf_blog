import { Card, Divider } from 'animal-island-ui';
import { PostCard } from '../components/PostCard';
import { posts } from '../lib/posts';

const tags = Array.from(new Set(posts.flatMap((post) => post.tags)));

export function PostsPage() {
  return (
    <section className="page-section">
      <div className="page-title">
        <span className="eyebrow">Archive</span>
        <h1>文章</h1>
        <p>按时间整理的安全测试与防护实践记录，所有文章都来自本地 Markdown 文件。</p>
      </div>

      <Card className="tag-panel">
        <strong>主题标签</strong>
        <div className="tag-row">
          {tags.map((tag) => (
            <span key={tag} className="tag tag-soft">
              {tag}
            </span>
          ))}
        </div>
      </Card>

      <Divider />

      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} compact />
        ))}
      </div>
    </section>
  );
}
