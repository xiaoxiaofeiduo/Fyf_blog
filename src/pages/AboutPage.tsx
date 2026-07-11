import { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'animal-island-ui';
import {
  ChevronsDown,
  Cpu,
  Crosshair,
  DatabaseZap,
  SatelliteDish,
  type LucideIcon,
} from 'lucide-react';
import { HudDivider } from '../components/HudDivider';
import { SignalMarquee } from '../components/SignalMarquee';

interface IpInfo {
  ip?: string;
  country?: string;
  country_code?: string;
  continent_code?: string;
  province?: string;
  region?: string;
  city?: string;
  district?: string;
  isp?: string;
  organization?: string;
  asn_organization?: string;
  asn?: string | number;
  timezone?: string;
  offset?: number;
  latitude?: number;
  longitude?: number;
  adcode?: string;
  rawLocation?: string;
}

interface IpLookupState {
  loading: boolean;
  ipv4: IpInfo | null;
  ipv6: IpInfo | null;
  ipv4Error: string | null;
  ipv6Error: string | null;
}

const focusAreas: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Crosshair,
    title: '安全测试',
    text: '从风险识别、漏洞验证到防护回归，把安全问题拆成可复现、可验证、可跟踪的测试场景。',
  },
  {
    icon: Cpu,
    title: '大模型安全',
    text: '关注提示注入、越权调用、敏感信息泄露和模型输出安全，持续整理智能体应用的测试方法。',
  },
  {
    icon: SatelliteDish,
    title: '系统运维',
    text: '记录服务器、网络、监控、部署和性能排查经验，让问题定位过程留下清晰路径。',
  },
  {
    icon: DatabaseZap,
    title: '知识沉淀',
    text: '把项目中的零散经验写成结构化 Markdown，方便复盘、分享和长期维护。',
  },
];

const methods = ['先复现，再判断', '先证据，再结论', '先可读，再完整', '先实践，再抽象'];

const profileFacts = [
  { label: 'ROLE', value: '测试与安全工程' },
  { label: 'FOCUS', value: '质量 · 安全 · AI' },
  { label: 'OUTPUT', value: '验证方案与工程笔记' },
];

const pilotAvatarUrl = `${import.meta.env.BASE_URL}pilot-avatar.png?v=gn00-pilot-2`;

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

const faqItems = [
  {
    question: '这个博客主要写什么？',
    answer: '围绕安全测试、大模型安全、系统运维和质量工程，记录真实问题的现象、定位路径、验证方法与最终结论。',
  },
  {
    question: '为什么叫测试日志？',
    answer: '这里不是知识点的简单集合，而是一份持续更新的工程记录。每篇文章尽量保留上下文、证据与判断过程，方便复盘和复用。',
  },
  {
    question: '这个博客如何新增文章？',
    answer: '文章采用 Markdown 管理，按安全研究、AI 实践、系统运维、功能测试和性能测试分类，配套图片与资料和正文放在一起。',
  },
];

const ipEndpoints = {
  ipv4: 'https://api-ipv4.ip.sb/geoip',
  ipv6: 'https://api-ipv6.ip.sb/geoip',
};

const emptyIpState: IpLookupState = {
  loading: true,
  ipv4: null,
  ipv6: null,
  ipv4Error: null,
  ipv6Error: null,
};

function displayValue(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === '') return '--';
  return String(value);
}

function locationText(info: IpInfo) {
  return [info.country, info.region ?? info.province, info.city, info.district].filter(Boolean).join(' / ') || info.rawLocation || '--';
}

function coordinatesText(info: IpInfo) {
  if (info.latitude === undefined || info.longitude === undefined) return '--';
  return `${info.latitude}, ${info.longitude}`;
}

function IpInfoCard({
  title,
  info,
  error,
  loading,
}: {
  title: string;
  info: IpInfo | null;
  error: string | null;
  loading: boolean;
}) {
  if (loading) {
    return (
      <Card className="ip-result-card">
        <strong>{title}</strong>
        <p className="ip-loading">正在检测网络出口...</p>
      </Card>
    );
  }

  if (error || !info) {
    return (
      <Card className="ip-result-card ip-result-card-error">
        <strong>{title}</strong>
        <p>{error ?? 'IP 信息暂不可用'}</p>
      </Card>
    );
  }

  return (
    <Card className="ip-result-card">
      <div className="ip-result-header">
        <strong>{title}</strong>
        <span>{displayValue(info.country_code ?? info.continent_code)}</span>
      </div>
      <dl className="ip-info-list">
        <div>
          <dt>IP</dt>
          <dd>{displayValue(info.ip)}</dd>
        </div>
        <div>
          <dt>位置</dt>
          <dd>{locationText(info)}</dd>
        </div>
        <div>
          <dt>运营商</dt>
          <dd>{displayValue(info.isp ?? info.organization ?? info.asn_organization)}</dd>
        </div>
        <div>
          <dt>国家</dt>
          <dd>{displayValue(info.country)}</dd>
        </div>
        <div>
          <dt>地区</dt>
          <dd>{displayValue(info.region ?? info.province)}</dd>
        </div>
        <div>
          <dt>城市</dt>
          <dd>{displayValue(info.city)}</dd>
        </div>
        <div>
          <dt>ASN</dt>
          <dd>{displayValue(info.asn)}</dd>
        </div>
        <div>
          <dt>组织</dt>
          <dd>{displayValue(info.organization ?? info.asn_organization)}</dd>
        </div>
        <div>
          <dt>时区</dt>
          <dd>{displayValue(info.timezone)}</dd>
        </div>
        <div>
          <dt>经纬度</dt>
          <dd>{coordinatesText(info)}</dd>
        </div>
      </dl>
    </Card>
  );
}

export function AboutPage() {
  const [ipState, setIpState] = useState<IpLookupState>(emptyIpState);
  const didFetchIpRef = useRef(false);

  const fetchIpInfo = async () => {
    setIpState(emptyIpState);

    const [ipv4Result, ipv6Result] = await Promise.allSettled([
      fetch(ipEndpoints.ipv4).then((response) => {
        if (!response.ok) throw new Error(`IPv4 查询失败：${response.status}`);
        return response.json() as Promise<IpInfo>;
      }),
      fetch(ipEndpoints.ipv6).then((response) => {
        if (!response.ok) throw new Error(`IPv6 查询失败：${response.status}`);
        return response.json() as Promise<IpInfo>;
      }),
    ]);

    setIpState({
      loading: false,
      ipv4: ipv4Result.status === 'fulfilled' ? ipv4Result.value : null,
      ipv6: ipv6Result.status === 'fulfilled' ? ipv6Result.value : null,
      ipv4Error: ipv4Result.status === 'rejected' ? 'IPv4 信息暂不可用，请稍后重新检测。' : null,
      ipv6Error: ipv6Result.status === 'rejected' ? 'IPv6 信息暂不可用，请确认当前网络支持 IPv6。' : null,
    });
  };

  useEffect(() => {
    if (didFetchIpRef.current) return;
    didFetchIpRef.current = true;
    void fetchIpInfo();
  }, []);

  return (
    <section className="page-section about-layout mission-page-background about-page-background">
      <div className="about-hero">
        <div className="page-title">
          <span className="eyebrow">About</span>
          <h1>关于云飞</h1>
          <p>
            我是一名关注质量、安全与工程效率的软件测试工程师。这里记录真实项目中遇到的问题，
            以及我如何复现现象、寻找证据、验证方案并沉淀结论。
          </p>
          <div className="about-intro-tags" aria-label="关注方向">
            <span>Web 安全</span><span>大模型安全</span><span>测试工程</span><span>系统可靠性</span>
          </div>
        </div>
        <Card className="about-profile-card" color="app-yellow">
          <div className="about-profile-main">
            <span className="profile-avatar-shell" aria-hidden="true">
              <img src={pilotAvatarUrl} alt="" />
            </span>
            <div>
              <span className="about-profile-status"><i /> GN SYSTEM ONLINE</span>
              <strong>云飞</strong>
              <p>软件测试工程师</p>
            </div>
          </div>
          <dl className="about-profile-meta">
            {profileFacts.map((fact) => (
              <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
            ))}
          </dl>
        </Card>
      </div>

      <div className="about-section-heading">
        <span className="eyebrow">01 / Capabilities</span>
        <div><h2>关注领域</h2><p>围绕风险、质量和效率建立可执行的验证能力。</p></div>
      </div>
      <div className="about-grid about-focus-grid">
        {focusAreas.map((area, index) => {
          const AreaIcon = area.icon;
          return (
            <Card
              key={area.title}
              className="about-card"
              color={index % 2 === 0 ? 'app-teal' : 'app-blue'}
            >
              <span className="tech-icon-shell" aria-hidden="true">
                <AreaIcon size={24} strokeWidth={1.5} />
              </span>
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </Card>
          );
        })}
      </div>

      <div className="about-section-heading">
        <span className="eyebrow">02 / Workflow</span>
        <div><h2>工作方法</h2><p>从问题现场出发，形成有证据、能复现、可复用的完整闭环。</p></div>
      </div>
      <section className="about-method-section">
        <Card className="about-method-card">
          <span className="eyebrow">Method</span>
          <h2>把不确定变成证据链</h2>
          <p>
            测试不只是执行用例。更重要的是理解系统、提出假设，并用可重复的实验确认风险和改进是否真实有效。
          </p>
          <div className="method-list">
            {methods.map((method) => (
              <span key={method}>{method}</span>
            ))}
          </div>
        </Card>

        <div className="about-timeline">
          {timeline.map((item, index) => (
            <Card key={item.label} className="timeline-item">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><strong>{item.label}</strong><p>{item.text}</p></div>
            </Card>
          ))}
        </div>
      </section>

      <HudDivider />

      <div className="about-section-heading about-section-heading-compact">
        <span className="eyebrow">03 / Notes</span>
        <div><h2>关于这份日志</h2><p>它如何组织内容，以及为什么持续记录。</p></div>
      </div>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <details className="faq-hud-item" key={item.question} open={index === 0}>
            <summary>
              <span className="faq-hud-code">Q-{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.question}</strong>
              <span className="hud-action-icon" aria-hidden="true">
                <ChevronsDown size={14} strokeWidth={1.7} />
              </span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>

      <section className="ip-lookup-section">
        <Card className="ip-lookup-panel">
          <div className="ip-lookup-heading">
            <div>
              <span className="eyebrow">IP Lookup</span>
              <h2>网络出口检测</h2>
              <p>查看当前网络公开可见的 IPv4 / IPv6 出口信息，仅在浏览器中实时查询。</p>
            </div>
            <Button type="primary" onClick={() => void fetchIpInfo()} loading={ipState.loading}>
              重新检测
            </Button>
          </div>

          <div className="ip-result-grid">
            <IpInfoCard
              title="IPv4"
              info={ipState.ipv4}
              error={ipState.ipv4Error}
              loading={ipState.loading}
            />
            <IpInfoCard
              title="IPv6"
              info={ipState.ipv6}
              error={ipState.ipv6Error}
              loading={ipState.loading}
            />
          </div>
        </Card>
      </section>

      <SignalMarquee
        variant="about"
        fullBleed
        items={['PILOT PROFILE', 'CELESTIAL TEST LAB', 'SYSTEM ONLINE', 'VEDA LINK']}
      />
    </section>
  );
}
