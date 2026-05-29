import { Card, Divider } from 'animal-island-ui';
import { useSearchParams } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { posts } from '../lib/posts';

const categoryTags = Array.from(new Set(posts.map((post) => post.category).filter((tag): tag is string => Boolean(tag))));
const tags = [
  ...categoryTags,
  ...Array.from(new Set(posts.flatMap((post) => post.tags).filter((tag) => !categoryTags.includes(tag)))),
];
const pageSize = 8;

function clampPage(page: number, totalPages: number) {
  if (!Number.isFinite(page) || page < 1) return 1;
  return Math.min(page, totalPages);
}

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  return Array.from({ length: 5 }, (_, index) => start + index);
}

export function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag') ?? '';
  const requestedPage = Number(searchParams.get('page') ?? '1');
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const currentPage = clampPage(requestedPage, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const currentPosts = filteredPosts.slice(pageStart, pageStart + pageSize);
  const visiblePages = getVisiblePages(currentPage, totalPages);

  const updateFilter = (tag: string) => {
    const nextParams = new URLSearchParams();
    if (tag) nextParams.set('tag', tag);
    setSearchParams(nextParams);
  };

  const updatePage = (page: number) => {
    const nextPage = clampPage(page, totalPages);
    const nextParams = new URLSearchParams();
    if (selectedTag) nextParams.set('tag', selectedTag);
    if (nextPage > 1) nextParams.set('page', String(nextPage));
    setSearchParams(nextParams);
  };

  return (
    <section className="page-section">
      <div className="page-title">
        <span className="eyebrow">Archive</span>
        <h1>文章</h1>
        <p>按时间整理安全测试、防护验证、系统运维和大模型实践记录。用标签快速筛选主题，用文章复盘真实问题。</p>
      </div>

      <Card className="tag-panel">
        <div className="tag-panel-title">
          <strong>主题标签</strong>
          <span>选择一个方向继续阅读</span>
        </div>
        <div className="tag-row">
          <button
            className={`tag tag-button ${selectedTag ? '' : 'tag-active'}`}
            type="button"
            onClick={() => updateFilter('')}
          >
            全部
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag tag-button ${selectedTag === tag ? 'tag-active' : 'tag-soft'}`}
              type="button"
              onClick={() => updateFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </Card>

      <Divider />

      <div className="archive-summary">
        <strong>{selectedTag || '全部文章'}</strong>
        <span>共 {filteredPosts.length} 篇，第 {currentPage} / {totalPages} 页</span>
      </div>

      {currentPosts.length > 0 ? (
        <div className="post-list">
          {currentPosts.map((post) => (
            <PostCard key={post.slug} post={post} compact />
          ))}
        </div>
      ) : (
        <Card className="empty-state">
          <h2>没有匹配的文章</h2>
          <p>当前标签下还没有内容，可以回到全部文章继续浏览。</p>
          <button className="pagination-button pagination-button-primary" type="button" onClick={() => updateFilter('')}>
            查看全部文章
          </button>
        </Card>
      )}

      {filteredPosts.length > pageSize && (
        <nav className="pagination" aria-label="文章分页">
          <button
            className="pagination-button"
            type="button"
            disabled={currentPage === 1}
            onClick={() => updatePage(1)}
          >
            首页
          </button>
          <button
            className="pagination-button"
            type="button"
            disabled={currentPage === 1}
            onClick={() => updatePage(currentPage - 1)}
          >
            上一页
          </button>
          {visiblePages.map((page) => (
            <button
              key={page}
              className={`pagination-button ${currentPage === page ? 'pagination-button-primary' : ''}`}
              type="button"
              aria-current={currentPage === page ? 'page' : undefined}
              onClick={() => updatePage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-button"
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => updatePage(currentPage + 1)}
          >
            下一页
          </button>
          <button
            className="pagination-button"
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => updatePage(totalPages)}
          >
            末页
          </button>
        </nav>
      )}
    </section>
  );
}
