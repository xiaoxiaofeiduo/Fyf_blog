import { Link } from 'react-router-dom';
import { Button, Card, Divider, Phone, Tabs, Typewriter, Icon } from 'animal-island-ui';
import { PostCard } from '../components/PostCard';
import { featuredPosts } from '../lib/posts';

const focusTabs = [
  {
    key: 'web-security',
    label: 'Web 安全防护',
    children: (
      <p>
        记录 Web 应用安全测试、防护策略、漏洞验证、攻防链路复盘和安全质量体系建设。
      </p>
    ),
  },
  {
    key: 'llm-security',
    label: '大模型安全',
    children: (
      <p>
        关注提示注入、越权调用、数据泄露、模型输出安全和智能体应用的安全测试方法。
      </p>
    ),
  },
  {
    key: 'test-engineering',
    label: '测试工程',
    children: (
      <p>
        以软件测试工程师视角沉淀用例设计、自动化验证、风险评估和质量度量实践。
      </p>
    ),
  },
];

const heroHighlights = ['安全测试', '大模型安全', '系统运维', '测试工程'];

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-avatar" aria-label="云飞头像" />

        <div className="hero-copy">
          <span className="eyebrow">Software Test Engineer / Security Defense</span>
          <h1>云飞的测试日志</h1>
          <div className="hero-type">
            <Typewriter speed={70}>记录 Web 应用安全防护、大模型安全防护与测试工程实践。</Typewriter>
          </div>
          <p>
            一个面向安全测试与防护实践的个人博客，用轻松的岛屿界面承载严肃的安全工程思考。
            这里会持续整理 Web 攻防验证、大模型安全测试、风险评估和质量防护体系。
          </p>
          <div className="hero-highlights" aria-label="博客关注方向">
            {heroHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link to="/posts">
              <Button type="primary" size="large">阅读文章</Button>
            </Link>
            <Link to="/about">
              <Button type="dashed" size="large">关于云飞</Button>
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="岛屿手机视觉组件">
          <Phone />
        </div>
      </section>

      <Divider />

      <section className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Featured Posts</span>
          <h2>近期精选</h2>
          <p>把最近沉淀的排查过程、部署经验和安全验证方法整理成可复用的测试笔记。</p>
        </div>
        <div className="post-grid">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="focus-section">
        <Card className="focus-card">
          <div className="section-heading">
            <span className="eyebrow">Topics</span>
            <h2>写作主题</h2>
            <p>围绕真实项目里的测试问题展开，记录从发现风险到验证防护的完整思路。</p>
          </div>
          <Tabs items={focusTabs} defaultActiveKey="web-security" />
        </Card>

        <div className="stats-grid">
          <Card color="app-yellow" className="stat-card">
            <Icon name="icon-diy" size={34} bounce />
            <strong>安全测试</strong>
            <span>把真实风险拆成可验证场景</span>
          </Card>
          <Card color="app-teal" className="stat-card">
            <Icon name="icon-camera" size={34} bounce />
            <strong>防护验证</strong>
            <span>关注漏洞复现与防护有效性</span>
          </Card>
          <Card color="app-blue" className="stat-card">
            <Icon name="icon-variant" size={34} bounce />
            <strong>安全沉淀</strong>
            <span>用 Markdown 维护长期知识库</span>
          </Card>
        </div>
      </section>

      <section className="section-block journey-strip">
        <div>
          <span className="eyebrow">Workflow</span>
          <h2>从问题到笔记</h2>
        </div>
        <div className="journey-steps">
          <span>定位现象</span>
          <span>复现实验</span>
          <span>验证防护</span>
          <span>沉淀方法</span>
        </div>
      </section>
    </>
  );
}
