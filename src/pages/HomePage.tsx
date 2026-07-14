import { Link } from 'react-router-dom';
import { ArrowDown, BookOpen, Compass, Sparkles } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { KorokSpot } from '../components/KorokSpot';
import { posts } from '../lib/posts';

const latestPosts = posts.slice(0, 4);
const regions = [
  { code: '01', name: '阿卡莱', category: '安全研究', hint: '识别攻击面，守住王国边界。' },
  { code: '02', name: '拉聂尔', category: 'AI 实践', hint: '沿智慧之泉探索模型边界。' },
  { code: '03', name: '海布拉', category: '系统运维', hint: '在风雪中维持系统的火种。' },
  { code: '04', name: '费罗尼', category: '功能测试', hint: '穿过密林，验证每条隐秘路径。' },
  { code: '05', name: '格鲁德', category: '性能测试', hint: '在极端环境中证明系统韧性。' },
];

export function HomePage() {
  return (
    <>
      <section className="sky-awakening" role="img" aria-label="林克站在空岛边缘眺望海拉鲁">
        <div className="sky-copy">
          <span className="world-kicker">THE SKY IS CALLING · 2026</span>
          <h1>从天空坠落<br /><em>向知识而生</em></h1>
          <p>跟随林克越过空岛与遗迹，在塞尔达留下的光芒中，把每次测试、攻防和故障定位写成可以再次抵达的坐标。</p>
          <div className="sky-actions">
            <Link to="/posts" className="adventure-button"><Compass size={17} />展开海拉鲁地图</Link>
            <Link to="/about" className="quiet-link">查看旅人档案</Link>
          </div>
        </div>
        <div className="sky-coordinate" aria-hidden="true"><span>SKY ISLAND 03</span><strong>0412 · 1735 · 2280</strong></div>
        <button
          type="button"
          className="dive-cue"
          onClick={() => document.getElementById('fall-memory')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>从空岛跃下</span><ArrowDown size={18} />
        </button>
      </section>

      <section className="fall-memory" id="fall-memory" aria-label="林克与塞尔达的坠落记忆">
        <div className="fall-sticky">
          <div className="fall-art" role="img" aria-label="林克伸手追向坠落的塞尔达" />
          <div className="memory-copy memory-copy-courage"><span>勇气 / COURAGE</span><h2>伸出手，<br />即使答案仍在坠落。</h2></div>
          <div className="memory-copy memory-copy-wisdom"><span>智慧 / WISDOM</span><p>问题不是终点。记录证据、验证假设、复盘路径，让每一次坠落都成为下一次上升的能力。</p></div>
          <div className="memory-rune" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <section className="map-journey">
        <header className="journey-heading">
          <span className="world-kicker">PURAH PAD · REGIONAL MAP</span>
          <h2>选择下一片探索区域</h2>
          <p>知识不按卡片排列，它散落在海拉鲁的山谷、雪原与遗迹之中。</p>
        </header>

        <div className="region-map">
          <div className="route-line" aria-hidden="true" />
          {regions.map((region, index) => {
            const count = posts.filter((post) => post.category === region.category).length;
            return (
              <Link
                className={`region-marker region-marker-${index + 1}`}
                key={region.name}
                to={`/posts?tag=${encodeURIComponent(region.category)}`}
              >
                <span className="marker-orbit" aria-hidden="true"><i /></span>
                <small>REGION {region.code}</small>
                <strong>{region.name}</strong>
                <em>{region.category} · {count} 篇</em>
                <p>{region.hint}</p>
              </Link>
            );
          })}
          <KorokSpot id="map-korok" label="检查地图边缘的树叶" />
        </div>
      </section>

      <section className="sword-memories">
        <header className="sword-heading">
          <span className="world-kicker">MASTER SWORD · RESTORED MEMORIES</span>
          <h2>大师之剑铭刻的最近记忆</h2>
          <Link to="/posts">查看全部日志 <BookOpen size={16} /></Link>
        </header>
        <div className="memory-timeline">
          <div className="memory-posts">
            {latestPosts.map((post, index) => <PostCard key={post.slug} post={post} compact={index > 1} />)}
          </div>
        </div>
      </section>

      <section className="forest-callout">
        <div><Sparkles size={20} /><span>YAHAHA FOREST</span></div>
        <h2>旅途中似乎有树叶在动。</h2>
        <p>四只呀哈哈藏在天空、地图、档案与营火附近。找到它们，留下属于你的探索记录。</p>
      </section>
    </>
  );
}
