import { Link } from 'react-router-dom';
import { DatabaseZap, RadioTower, ScanFace } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { posts } from '../lib/posts';

const heroHighlights = ['GN SECURITY', 'LLM INTERCEPT', 'SYSTEM CONTROL', 'QUALITY DRIVE'];
const latestPosts = posts.slice(0, 3);
const categories = new Set(posts.map((post) => post.category).filter(Boolean)).size;

const focusAreas = [
  {
    index: 'GN-01',
    title: 'Web 安全防护',
    text: '从漏洞复现到防护回归，把风险拆成可验证、可追踪的测试场景。',
    signal: 'EXIA / ATTACK SURFACE',
  },
  {
    index: 'GN-02',
    title: '大模型安全',
    text: '关注提示注入、越权调用、数据泄露与智能体应用安全边界。',
    signal: 'DYNAMES / MODEL GUARD',
  },
  {
    index: 'GN-03',
    title: '测试工程',
    text: '沉淀自动化验证、风险评估、质量度量和复杂问题定位方法。',
    signal: 'KYRIOS / QUALITY OPS',
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-cockpit-frame" aria-hidden="true">
          <span className="cockpit-corner cockpit-corner-one" />
          <span className="cockpit-corner cockpit-corner-two" />
          <div className="gn-reticle"><i /><i /><i /></div>
          <div className="gn-particles"><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="hero-copy">
          <span className="eyebrow"><i /> GN-00 // SYSTEM LINK ESTABLISHED</span>
          <h1>连接工程真相<br /><span>改变既定未来</span></h1>
          <p>
            以测试为观测系统，以证据为推进器。记录 Web 攻防、大模型安全、系统运维与质量工程，
            将每一次问题定位转化为可复用的技术坐标。
          </p>
          <div className="hero-highlights" aria-label="博客关注方向">
            {heroHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="tech-button tech-button-primary" to="/posts">
              GN 数据库
              <span className="hud-action-icon" aria-hidden="true">
                <DatabaseZap size={15} strokeWidth={1.7} />
              </span>
            </Link>
            <Link className="tech-button" to="/about">
              驾驶员档案
              <span className="hud-action-icon" aria-hidden="true">
                <ScanFace size={15} strokeWidth={1.7} />
              </span>
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="GN 驱动机甲状态面板">
          <div className="unit-status-panel">
            <div><span>UNIT</span><strong>GN-00 / YF</strong></div>
            <div><span>GN DRIVE</span><strong className="status-ready">STABLE</strong></div>
            <div><span>MISSION</span><strong>QUALITY INTERVENTION</strong></div>
            <div className="trans-am-line"><span>TRANS-AM</span><strong>STANDBY</strong></div>
          </div>
          <span className="status-chip status-chip-top">TARGET / KNOWLEDGE</span>
          <span className="status-chip status-chip-bottom">GN PARTICLES / 97.4%</span>
        </div>
      </section>

      <section className="metrics-strip" aria-label="博客数据">
        <div><strong>{String(posts.length).padStart(2, '0')}</strong><span>技术文章</span></div>
        <div><strong>{String(categories).padStart(2, '0')}</strong><span>知识领域</span></div>
        <div><strong>97.4%</strong><span>GN 粒子浓度</span></div>
        <div className="metrics-line"><span>VEDA LINK</span><i /></div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i /> VEDA / LATEST RECORDS</span>
            <h2>最新任务记录</h2>
          </div>
          <Link className="section-link" to="/posts">
            查看全部文章
            <span className="hud-action-icon" aria-hidden="true">
              <RadioTower size={13} strokeWidth={1.7} />
            </span>
          </Link>
        </div>
        <div className="post-grid">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="focus-section">
        <div className="focus-intro">
          <span className="eyebrow"><i /> TACTICAL CONFIGURATION</span>
          <h2>三套核心<br />作战模块</h2>
          <p>从攻击面到质量体系，关注问题如何发生，更关注防线如何被证明确实有效。</p>
          <div className="focus-scan" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.index}>
              <div className="focus-card-top"><span>{area.index}</span><code>{area.signal}</code></div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <div className="focus-card-signal"><i /><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </section>

      <div className="signal-marquee" aria-hidden="true">
        <div>GN DRIVE <span>◆</span> SECURITY INTERVENTION <span>◆</span> TRANS-AM <span>◆</span> QUALITY ENGINEERING <span>◆</span> GN DRIVE <span>◆</span> SECURITY INTERVENTION <span>◆</span> TRANS-AM <span>◆</span> QUALITY ENGINEERING <span>◆</span></div>
      </div>
    </>
  );
}
