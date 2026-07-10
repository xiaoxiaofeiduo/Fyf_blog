import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { posts } from '../lib/posts';

const heroHighlights = ['WEB SECURITY', 'LLM SAFETY', 'DEVOPS', 'TEST ENGINEERING'];
const latestPosts = posts.slice(0, 3);
const categories = new Set(posts.map((post) => post.category).filter(Boolean)).size;

const focusAreas = [
  {
    index: '01',
    title: 'Web 安全防护',
    text: '从漏洞复现到防护回归，把风险拆成可验证、可追踪的测试场景。',
    signal: 'ATTACK SURFACE',
  },
  {
    index: '02',
    title: '大模型安全',
    text: '关注提示注入、越权调用、数据泄露与智能体应用安全边界。',
    signal: 'MODEL GUARD',
  },
  {
    index: '03',
    title: '测试工程',
    text: '沉淀自动化验证、风险评估、质量度量和复杂问题定位方法。',
    signal: 'QUALITY OPS',
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow"><i /> SYSTEM ONLINE · 2026</span>
          <h1>构建可信的<br /><span>数字防线</span></h1>
          <p>
            云飞的技术实验场。记录 Web 攻防验证、大模型安全测试、系统运维与质量工程实践，
            把每一次排查变成可复用的工程资产。
          </p>
          <div className="hero-highlights" aria-label="博客关注方向">
            {heroHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="tech-button tech-button-primary" to="/posts">
              探索知识库 <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
            <Link className="tech-button" to="/about">
              了解实验室 <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="安全测试终端状态面板">
          <div className="radar-orbit radar-orbit-one" />
          <div className="radar-orbit radar-orbit-two" />
          <div className="hero-avatar" aria-label="云飞头像" />
          <div className="terminal-panel">
            <div className="terminal-bar">
              <span /><span /><span />
              <code>yf@security-lab:~</code>
            </div>
            <div className="terminal-body">
              <p><b>$</b> ./scan --target knowledge-base</p>
              <p><em>✓</em> web_security ........ armed</p>
              <p><em>✓</em> llm_guard ........... active</p>
              <p><em>✓</em> quality_pipeline .... stable</p>
              <p className="terminal-cursor"><b>$</b> monitoring<span>_</span></p>
            </div>
          </div>
          <span className="status-chip status-chip-top">THREAT MONITOR</span>
          <span className="status-chip status-chip-bottom">ALL SYSTEMS NOMINAL</span>
        </div>
      </section>

      <section className="metrics-strip" aria-label="博客数据">
        <div><strong>{String(posts.length).padStart(2, '0')}</strong><span>技术文章</span></div>
        <div><strong>{String(categories).padStart(2, '0')}</strong><span>知识领域</span></div>
        <div><strong>100%</strong><span>实践驱动</span></div>
        <div className="metrics-line"><span>LIVE FEED</span><i /></div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><i /> LATEST INTELLIGENCE</span>
            <h2>最新技术情报</h2>
          </div>
          <Link className="section-link" to="/posts">
            查看全部文章 <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
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
          <span className="eyebrow"><i /> CORE DOMAINS</span>
          <h2>持续探索的<br />三个方向</h2>
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
        <div>SECURITY TESTING <span>◆</span> LLM SAFETY <span>◆</span> SYSTEM OPERATIONS <span>◆</span> QUALITY ENGINEERING <span>◆</span> SECURITY TESTING <span>◆</span> LLM SAFETY <span>◆</span> SYSTEM OPERATIONS <span>◆</span> QUALITY ENGINEERING <span>◆</span></div>
      </div>
    </>
  );
}
