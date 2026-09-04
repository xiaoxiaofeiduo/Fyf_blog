import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { KorokSpot } from '../components/KorokSpot';
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

export function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag') ?? '';
  const requestedPage = Number(searchParams.get('page') ?? '1');
  const filteredPosts = selectedTag ? posts.filter((post) => post.tags.includes(selectedTag)) : posts;
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const currentPage = clampPage(requestedPage, totalPages);
  const currentPosts = filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const updateFilter = (tag: string) => {
    const next = new URLSearchParams();
    if (tag) next.set('tag', tag);
    setSearchParams(next);
  };

  const updatePage = (page: number) => {
    const next = new URLSearchParams();
    if (selectedTag) next.set('tag', selectedTag);
    const safePage = clampPage(page, totalPages);
    if (safePage > 1) next.set('page', String(safePage));
    setSearchParams(next);
  };

  return (
    <section className="purah-archive">
      <aside className="map-console">
        <div className="console-eye" aria-hidden="true"><i /><i /></div>
        <span className="world-kicker">PURAH PAD / MAP DATA</span>
        <h1>冒险日志</h1>
        <p>选择一个区域，调取旅途中留下的技术坐标。</p>

        <div className="region-selector" aria-label="文章区域筛选">
          <button className={!selectedTag ? 'is-selected' : ''} type="button" onClick={() => updateFilter('')}>
            <MapPin size={15} />全部区域 <span>{posts.length}</span>
          </button>
          {categoryTags.map((tag, index) => (
            <button key={tag} className={selectedTag === tag ? 'is-selected' : ''} type="button" onClick={() => updateFilter(tag)}>
              <i>{String(index + 1).padStart(2, '0')}</i>{tag}<span>{posts.filter((post) => post.category === tag).length}</span>
            </button>
          ))}
        </div>

        <details className="all-tags">
          <summary>展开全部地图标记</summary>
          <div>{tags.map((tag) => <button type="button" key={tag} onClick={() => updateFilter(tag)}>{tag}</button>)}</div>
        </details>

        <div className="map-readout"><span>ACTIVE REGION</span><strong>{selectedTag || 'HYRULE'}</strong><small>{filteredPosts.length} LOGS FOUND</small></div>
      </aside>

      <div className="archive-ledger">
        <header>
          <div><span>ADVENTURE LOG / {String(currentPage).padStart(2, '0')}</span><h2>{selectedTag || '全部探索记录'}</h2></div>
          <p>第 {currentPage} / {totalPages} 页</p>
        </header>

        <div className="ledger-list">
          {currentPosts.length ? currentPosts.map((post) => <PostCard key={post.slug} post={post} />) : (
            <div className="empty-ledger"><h2>这里还没有留下足迹</h2><button type="button" onClick={() => updateFilter('')}>返回完整地图</button></div>
          )}
        </div>

        {totalPages > 1 && (
          <nav className="ledger-pagination" aria-label="文章分页">
            <button type="button" disabled={currentPage === 1} onClick={() => updatePage(currentPage - 1)}><ChevronLeft size={17} />上一段旅程</button>
            <span>{String(currentPage).padStart(2, '0')} <i /> {String(totalPages).padStart(2, '0')}</span>
            <button type="button" disabled={currentPage === totalPages} onClick={() => updatePage(currentPage + 1)}>下一段旅程<ChevronRight size={17} /></button>
          </nav>
        )}
        <KorokSpot id="archive-korok" label="检查日志边缘的树叶" />
      </div>
    </section>
  );
}
