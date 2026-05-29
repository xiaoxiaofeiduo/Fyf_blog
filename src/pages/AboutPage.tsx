import { useEffect, useRef, useState } from 'react';
import { Button, Card, Collapse, Divider, Icon } from 'animal-island-ui';

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

      <section className="ip-lookup-section">
        <Card className="ip-lookup-panel">
          <div className="ip-lookup-heading">
            <div>
              <span className="eyebrow">IP Lookup</span>
              <h2>IP地址</h2>
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
    </section>
  );
}
