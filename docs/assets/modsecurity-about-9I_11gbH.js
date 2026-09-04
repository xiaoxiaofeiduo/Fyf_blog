const r=`---\r
title: 什么是 ModSecurity\r
date: 2026-05-23\r
summary: ModSecurity 是适用于 Apache、IIS 和 Nginx 的开源跨平台 Web 应用防火墙引擎。\r
tags: ModSecurity, WAF, Web 安全防护\r
cover: app-green\r
readingTime: 3 分钟\r
featured: true\r
---\r
\r
# 简介\r
\r
## ModSecurity\r
\r
ModSecurity，在其官网的介绍是：用于 Apache、IIS 和 Nginx 的开源、跨平台 Web 应用程序防火墙（WAF）引擎。ModSecurity 在加载\`规则文件\`后能为你的 Web 应用网站阻拦来自应用层的攻击，如 SQL 注入、XSS 攻击、PHP 代码注入、命令注入等。\r
\r
[link](https://github.com/SpiderLabs/ModSecurity)\r
\r
## 规则文件\r
\r
规则文件指的是 ModSecurity 的核心规则集（CRS），该规则集目前由 OWASP 开源基金会维护。\r
\r
[link](https://github.com/coreruleset/coreruleset)\r
`;export{r as default};
