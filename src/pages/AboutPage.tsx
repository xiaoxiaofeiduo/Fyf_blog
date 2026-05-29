import { Card, Collapse, Divider, Icon } from 'animal-island-ui';

const focusAreas = [
  {
    icon: 'icon-diy',
    title: '安全测试',
    text: '从风险识别、漏洞验证到防护回归，把安全问题拆成可复现、可验证、可跟踪的测试场景。',
  },
  {
    icon: 'icon-camera',
    title: '大模型安全',
    text: '关注提示注入、越权调用、敏感信息泄露和模型输出安全，持续整理智能体应用的测试方法。',
  },
  {
    icon: 'icon-helicopter',
    title: '系统运维',
    text: '记录服务器、网络、监控、部署和性能排查经验，让问题定位过程留下清晰路径。',
  },
  {
    icon: 'icon-critterpedia',
    title: '知识沉淀',
    text: '把项目中的零散经验写成结构化 Markdown，方便复盘、分享和长期维护。',
  },
];

const methods = ['先复现，再判断', '先证据，再结论', '先可读，再完整', '先实践，再抽象'];

const timeline = [
  {
    label: '发现问题',
    text: '从测试现象、告警、性能异常或安全风险开始，保留原始上下文。',
  },
  {
    label: '拆解路径',
    text: '用命令、日志、抓包、用例和对比实验逐步缩小范围。',
  },
  {
    label: '验证结果',
    text: '确认修复、防护或配置是否真的生效，避免只停留在猜测。',
  },
  {
    label: '写成文章',
    text: '把判断依据、操作步骤、踩坑点和结论整理成后续能复用的笔记。',
  },
];

export function AboutPage() {
  return (
    <section className="page-section about-layout">
      <div className="about-hero">
        <div className="page-title">
          <span className="eyebrow">About</span>
          <h1>关于云飞</h1>
          <p>
            这里是云飞的技术创作空间，聚焦 Web 应用安全防护、大模型安全防护、系统运维和软件测试工程实践。
            我会把真实项目里的排查过程、验证方法和复盘结论整理成长期可读的测试日志。
          </p>
        </div>
        <Card className="about-profile-card" color="app-yellow">
          <Icon name="icon-miles" size={48} bounce />
          <strong>软件测试工程师</strong>
          <span>关注风险识别、防护验证、质量体系与工程效率</span>
        </Card>
      </div>

      <div className="about-grid about-focus-grid">
        {focusAreas.map((area, index) => (
          <Card
            key={area.title}
            className="about-card"
            color={index % 2 === 0 ? 'app-teal' : 'app-blue'}
          >
            <Icon name={area.icon as never} size={42} bounce />
            <h2>{area.title}</h2>
            <p>{area.text}</p>
          </Card>
        ))}
      </div>

      <section className="about-method-section">
        <Card className="about-method-card">
          <span className="eyebrow">Method</span>
          <h2>我的工作方法</h2>
          <p>
            测试不是简单地执行用例，而是把不确定的问题变成可以解释、可以验证、可以复用的证据链。
          </p>
          <div className="method-list">
            {methods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </div>
        </Card>

        <div className="about-timeline">
          {timeline.map((item) => (
            <Card key={item.label} className="timeline-item">
              <strong>{item.label}</strong>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <Divider />

      <div className="faq-list">
        <Collapse
          defaultExpanded
          question="这个博客主要写什么？"
          answer="主要记录安全测试、防护验证、大模型安全、系统运维和测试工程实践，内容尽量来自真实问题和可复用经验。"
        />
        <Collapse
          question="为什么叫测试日志？"
          answer="因为这里更像一份持续更新的工程记录：保留现象、命令、判断依据、验证过程和结论，方便之后复盘。"
        />
        <Collapse
          question="这个博客如何新增文章？"
          answer="可以在 src/content/posts 下新增单个 Markdown，也可以新建一个文件夹，在文件夹内放 Markdown 和图片资源。"
        />
      </div>
    </section>
  );
}
