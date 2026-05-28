---
title: 基于 DOM 的跨站脚本
date: 2026-04-29
summary: 基于 DOM 的跨站点脚本是一种跨站点脚本 (XSS)，这种攻击利用了文档对象模型 (DOM)。
tags: 漏洞库, Web安全, XSS
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# 基于 DOM 的跨站脚本

### 什么是基于 DOM 的跨站脚本
基于 DOM 的跨站点脚本是一种跨站点脚本 (XSS)，这种攻击利用了文档对象模型 (DOM)。

<br>

### 基于 DOM 的跨站点脚本是如何工作的
DOM 是一种内部数据结构，用于存储网页的所有对象和属性。 例如，HTML 代码中使用的每个标记都表示一个 DOM 对象。 此外，网页的 DOM 包含有关页面 URL 和元信息等属性的信息。 开发人员可以使用 JavaScript 引用这些对象和属性并动态更改它们。

文档对象模型使动态的单页应用程序成为可能。 然而，它也是使基于 DOM 的跨站点脚本成为可能的原因。

与所有其他类型的跨站点脚本不同，基于 DOM 的 XSS 纯粹是客户端漏洞。 这意味着在基于 DOM 的 XSS 攻击期间，有效负载永远不会到达服务器。 整个攻击发生在网络浏览器中。

基于 DOM 的 XSS 与反射型 XSS 类似，因为在攻击过程中不存储任何信息。 基于 DOM 的 XSS 攻击也是通过诱骗受害者点击恶意 URL 来进行的。

### 基于DOM的跨站脚本中的源和接收器
每个基于 DOM 的 XSS 漏洞都有两个元素：用户输入的源和写入用户输入的目标（称为接收器）。攻击者可以操纵的流行源包括 <font color="red">document.URL</font>、<font color="red">document.documentURI</font>、<font color="red">location.href</font>、<font color="red">location.search</font>、<font color="red">location.*</font>、<font color="red">window.name</font>和 <font color="red">document.referrer</font>。 流行的接收器有 <font color="red">document.write</font>、<font color="red">(element).innerHTML</font>、<font color="red">eval</font>、<font color="red">setTimeout</font>、<font color="red">setInterval</font> 和 <font color="red">execScript</font>。 请注意，此列表并不详尽，还存在许多其他源和接收器。

为了使 JavaScript 代码容易受到基于 DOM 的 XSS 攻击，它必须从攻击者可以控制的源获取信息，然后将此信息传递到接收器。

### 基于DOM的跨站脚本示例

在此示例中，开发人员希望在仪表板页面 (dashboard.html) 上显示用户的名称。 用户名作为 URL 中的参数传递给应用程序：

```
<html>
(...)
Dashboard for
<script>
   var pos=document.URL.indexOf("context=")+8;
   document.write(decodeURIComponent(document.URL.substring(pos)));
</script>
(...)
</html>
```

内镶脚本在 URL 中查找 context= (document.URL.indexOf("context="))，获取其右侧的所有文本（+8 表示 context= 开头右侧的 8 个字符）， 并使用 document.write 将该文本直接插入到 HTML 中以供浏览器显示。

如果您访问以下网址：

    http://www.example.com/dashboard.html?context=Thomas

该页面会显示：

    Dashboard for Thomas

### 基于DOM的跨站脚本攻击

攻击者创建以下 URL：

    http://www.example.com/dashboard.html?context=
%3c%73%63%72%69%70%74%3e%61%6c%65%72%74%28%22%4c%45
%41%56%45%20%54%48%49%53%20%50%41%47%45%21%20%59%4f
%55%20%41%52%45%20%42%45%49%4e%47%20%48%41%43%4b%45
%44%21%22%29%3b%3c%2f%73%63%72%69%70%74%3e

此有效负载中的长十六进制代码字符串是以下内容的 URL 编码形式：

    <script>alert("LEAVE THIS PAGE! YOU ARE BEING HACKED!");</script>

然后，攻击者将 URL 发送给受害者，例如通过电子邮件或即时消息。 受害者单击该 URL，导致其浏览器打开dashboard.html页面并运行恶意脚本。 这将重写文档内容并将以下标记插入到浏览器解释的 HTML 中：

    Dashboard for <script>alert("LEAVE THIS PAGE! YOU ARE BEING HACKED!");</script>

结果，浏览器会显示一个弹出窗口，敦促用户离开页面。 其后果是目标用户将停止访问该网络应用程序，因为担心自己的信息安全。

### 修复

得知该漏洞后，开发人员使用安全接收器重写了代码。 因此，来自源的不受信任的内容将始终被解释为文本，而不是代码：

```
<html>
(...)
Dashboard for <span id="contentholder"></span>
<script>
   var pos=document.URL.indexOf("context=")+8;
   document.getElementById("contentholder").textContent = 
       document.URL.substring(pos,document.URL.length);
</script>
(...)
</html>
```

开发人员创建一个占位符对象，并将用户名不直接写入 HTML，而是写入占位符对象的 textContent 属性（使用安全接收器）。 这保证了浏览器不会将此内容解释为代码，而只会将其显示为文本。

### 基于 DOM 的跨站脚本攻击的后果

基于 DOM 的跨站点脚本漏洞并不常见，但成功攻击的后果可能与其他反射型 XSS 攻击一样可怕。 以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

* 他们可以创建网络钓鱼活动，并发送数百万封包含恶意链接的电子邮件，其有效负载会将用户重定向到旨在模仿您的 Web 应用程序的网络钓鱼页面。 因此，数百万用户的凭据可能会被盗，并归咎于您的 Web 应用程序，这将严重损害您的声誉。

* 他们可以创建一个有效负载，将用户发送到模仿您应用程序登录页面的恶意页面。 然后，他们可以将此恶意 URL 发送给您的内部用户，甚至是您的CEO。如果您的一名用户上当，攻击者就会获取他们的凭据来升级攻击。 最终，这可能会让恶意行为者获得对组织中其他计算机系统的访问权限。

### 如何防止基于 DOM 的跨站脚本漏洞

完全避免 JavaScript 代码中基于 DOM 的 XSS 漏洞的最佳方法是使用正确的输出方法（安全接收器）。 例如，如果您想写入 \<div> 元素，请不要使用innerHtml。 请使用innerText 或textContent。

请注意，并非所有 DOM 元素都有安全的输出方法。 在某些情况下，您必须避免使用不受信任的数据。 例如，您绝不能将任何不受信任的数据写入 eval 或 execScript 等接收器。