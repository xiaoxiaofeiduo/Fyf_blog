import { Card, Collapse, Divider, Icon } from 'animal-island-ui';

export function AboutPage() {
  return (
    <section className="page-section about-layout">
      <div className="page-title">
        <span className="eyebrow">About</span>
        <h1>关于这座岛</h1>
        <p>
          这里是云飞的技术创作空间，聚焦 Web 应用安全防护、大模型安全防护和软件测试工程实践。
        </p>
      </div>

      <div className="about-grid">
        <Card className="about-card">
          <Icon name="icon-miles" size={44} bounce />
          <h2>软件测试工程师</h2>
          <p>
            关注安全测试、风险识别、防护验证和质量体系建设。希望把项目中的真实问题沉淀成清晰、可复用的经验。
          </p>
        </Card>
        <Card className="about-card" color="app-teal">
          <Icon name="icon-map" size={44} bounce />
          <h2>写作地图</h2>
          <p>
            目前内容以 Web 应用安全防护、大模型安全防护、测试策略、用例设计和安全质量度量为主。
          </p>
        </Card>
      </div>

      <Divider />

      <div className="faq-list">
        <Collapse
          defaultExpanded
          question="这个博客如何新增文章？"
          answer="在 src/content/posts 中新增 Markdown 文件，并在 src/lib/posts.ts 中导入即可。"
        />
        <Collapse
          question="个人资料在哪里修改？"
          answer="首页、关于页和 index.html 中已经写入云飞的软件测试工程师身份，可继续补充头像、社交链接和项目经历。"
        />
        <Collapse
          question="为什么使用 animal-island-ui？"
          answer="它提供了统一的圆润卡片、按钮、手机、页脚和光标风格，很适合做一个轻松但完整的个人博客界面。"
        />
      </div>
    </section>
  );
}
