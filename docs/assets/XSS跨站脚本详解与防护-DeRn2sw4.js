const o=`---
title: XSS 跨站脚本详解与防护实践
date: 2026-06-12
summary: 系统梳理XSS的漏洞原理、常见攻击方式、风险影响、测试关注点和工程防护手段。
tags: 漏洞库, Web安全, XSS, 安全防护, 安全测试
cover: app-yellow
readingTime: 24 分钟
featured: false
---
# XSS 跨站脚本详解与防护实践

XSS 是 Web 安全测试和安全防护中常见的一类风险。它通常出现在应用处理用户输入、服务端资源、浏览器行为、数据库查询或系统边界时。本文将原有漏洞条目内容整合为一篇独立文章，覆盖漏洞原理、攻击方式、潜在影响、测试关注点和防护实践。

## XSS

### 什么是跨站点脚本
跨站点脚本 (XSS) 是一种 Web 漏洞，它允许恶意黑客将不需要的命令引入（注入）到浏览器代表 Web 应用程序执行的合法客户端代码（通常是 JavaScript）中。

### 跨站点脚本是如何工作的

大多数网站和 Web 应用程序使用某种动态脚本语言在 Web 浏览器中运行客户端代码。 在绝大多数情况下，这种语言是 JavaScript。 纯 HTML 网站和 Web 应用程序仍然存在，但它们很少见，因为客户端脚本极大地增强了网站或 Web 应用程序的用户界面和功能。 您可以放心地假设，您遇到的 99% 以上的网站和 Web 应用程序都包含客户端 JavaScript 代码。 反过来，这意味着用户浏览器必须能够代表 Web 应用程序解释任何 JavaScript 代码。

大多数 Web 应用程序和网站也以某种方式与用户交互，即使它们不使用 JavaScript。 交互需要某种形式的用户输入。 例如，用户可能需要键入他们的用户名才能登录 Web 应用程序，应用程序稍后可能会在用户界面中显示该用户名。 这意味着应用程序处理用户输入，然后将其输出到 Web 浏览器中。

结合起来，这两个条件为最常见的 Web 安全漏洞——跨站点脚本编写奠定了基础，这是一种注入攻击。 如果攻击者能够在用户输入参数中包含 JavaScript 代码，并且应用程序直接在其 HTML 输出中返回该代码并将其发送到客户端浏览器，则浏览器将执行恶意 JavaScript。 每当网页直接响应用户输入时，攻击者就能够在客户端浏览器中运行恶意脚本，即使该页面本身仅使用静态 HTML 标记构建且不包含 JavaScript。

与大多数其他 Web 应用程序漏洞不同，这个漏洞不会直接影响应用程序的后端（Web 服务器）。 它会影响 Web 应用程序的普通用户或受骗访问它的受害者。 对于某些允许使用 JavaScript 的 API，XSS 也是可能的，例如，API 可能会向用户显示一条错误消息，其中包含攻击者先前注入的 JavaScript。

多年来，跨站点脚本在 OWASP 前 10 名中都有自己单独的类别。但是，在 2021 年，OWASP决定将其与 SQL 注入、RCE 等一起并入注入类别。

### 跨站点脚本漏洞的类型

有两种非常常见的跨站点脚本技术：

- 反射 XSS（非持久性 XSS）

- 存储型 XSS（持久型 XSS）

此外，还有 2 种其他跨站点脚本技术比上述两种技术更少见：

- 基于 DOM 的 XSS
- 盲存储型 XSS

## 反射/非持久性跨站点脚本

### 什么是反射/非持久性跨站点脚本

反射型跨站脚本是一种跨站脚本 (XSS)，攻击者不会将负载发送到 Web 应用程序； 相反，他们以包含有效负载（通常经过混淆）的 URL 形式将其发送给受害者。 受害者单击 URL 并打开易受攻击的 Web 应用程序，无意中执行了有效负载。 反映的跨站点脚本也称为非持久性跨站点脚本。

### 反射/非持久性跨站点脚本示例
在此示例中，开发人员希望在欢迎屏幕 (welcome.php) 上显示当前经过身份验证的用户的名称。 它们包括 login.php 网页上的以下登录表单：

\\<<font color="red">form</font> <font color="#00dd00">action</font>="<font color="#00dddd">/welcome.php</font>" <font color="#00dd00">method</font>="<font color="#00dddd">get</font>" <font color="#00dd00">id</font>="<font color="#00dddd">login</font>"\\>
  \\<<font color="red">label</font>  <font color="#00dd00">for</font>="<font color="#00dddd">name</font>">Your name:\\</<font color="red">label</font>>
  \\<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">text</font>" <font color="#00dd00">id</font>="<font color="#00dddd">name</font>" <font color="#00dd00">name</font>="<font color="#00dddd">name</font>">
  \\<<font color="red">label</font> <font color="#00dd00">for "password"</font>>Your password:\\</<font color="red">label</font>>
  \\<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">password</font>" <font color="#00dd00">id</font>="<font color="#00dddd">password</font>" <font color="#00dd00">name</font>="<font color="#00dddd">password</font>"\\>
  \\<<font color="red">button</font> <font color="#00dd00">type</font>="<font color="#00dddd">submit</font>" <font color="#00dd00">form</font>="<font color="#00dddd">login</font>" <font color="#00dd00">value</font>="<font color="#00dddd">login</font>">Log in\\</<font color="red">button</font>>
\\</<font color="red">form</font>>

welcome.php 文件包含以下代码：

// Display the name of the user
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$name=\\$_GET</font>[<font color="#00dd00">"name"</font>];
<font color="#00dddd">echo</font> <font color="#00dd00">"\\<strong>Hello, "</font><font color="#a67f59">.\\$name.</font><font color="#00dd00">"!\\</strong>"</font>;
(<font color="#a67f59">...</font>)

如您所见，应用程序使用 GET 方法发送名称和密码，然后在没有任何验证或清理的情况下在 welcome.php 页面上显示名称。

#### 反射型跨站脚本攻击

攻击者创建以下 URL：
    \`http://www.example.com/welcome.php?name=%3c%73%63%72%69%70%74%3e%61%6c%65%72%74%28%22%4c%45%41%56%45%20%54%48%49%53%20%50%41%47%45%21%20%59%4f%55%20%41%52%45%20%42%45%49%4e%47%20%48%41%43%4b%45%44%21%22%29%3b%3c%2f%73%63%72%69%70%74%3e\`

此负载中的一长串十六进制代码是以下内容的 URL 编码形式：

\\<script><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\<\/script>

然后，攻击者将 URL 发送给受害者，例如，通过电子邮件或即时消息。 受害者单击该 URL，打开 welcome.php 页面，他们的浏览器会解释以下代码：

\\<<font color="red">strong</font>>Hello, \\<<font color="red">script</font>><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\</<font color="red">script</font>>!\\</<font color="red">strong</font>>

浏览器找到一个 \\<script> 标签并执行其中的 JavaScript 代码。 结果，它会显示一个弹出窗口，敦促用户离开该页面。 结果是目标用户担心自己的安全将停止访问 Web 应用程序。

### 修复

获悉此漏洞后，开发人员决定使用 HTMLPurifier 过滤来保护代码并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 welcome.php 文件：

// Display the name of the user
// Use HTMLPurifier with HTML escaping to avoid XSS
<font color="#a67f59">\\$name=\\$_GET</font>[<font color="#00dd00">"name"</font>];
// Purify user data using HTMLPurifier
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$purifier</font> = <font color="#00dddd">new HTMLPurifier</font>(<font color="#a67f59">\\$config</font>);
<font color="#a67f59">\\$purified_name</font> = <font color="#a67f59">\\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\\$name</font>);
// Just to be sure, HTML-escape special characters
<font color="#a67f59">\\$safe_name</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\\$purified_name</font>, <font color="red">ENT_QUOTES</font>);
// Display the safe name
<font color="#00dddd">echo</font> <font color="#00dd00">"\\<strong>Hello, "</font><font color="#a67f59">.\\$name.</font><font color="#00dd00">"!\\</strong>"</font>;
(<font color="#a67f59">...</font>)

### 反射/非持久性跨站点脚本攻击的后果
反射型跨站点脚本被认为比存储型/持久型 XSS 危险性更小，但后果也可能很可怕。 反射 XSS 攻击更难执行，因为它需要的不仅仅是创建和交付单个有效负载。 攻击者还需要使用社会工程技术来针对特定的受害者或受害者群体。

以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

- 他们可以发起网络钓鱼活动，并发送数百万封包含恶意链接的电子邮件，其中的有效负载会将用户重定向到旨在模仿您的 Web 应用程序的网络钓鱼页面。 因此，数百万用户的凭据可能会被盗并归咎于您的 Web 应用程序，这会严重损害您的声誉。
- 他们可以创建一个有效负载，将用户发送到模仿您应用程序登录页面的恶意页面。 然后，他们可以将此恶意 URL 发送给您的内部用户，甚至是您的 CEO。 即使您的一个用户上当受骗，攻击者也将获得他们的凭据以升级攻击。 最终，这可能会让恶意行为者获得对您组织中其他计算机系统的访问权限。

## 存储的/持久的跨站点脚本

### 什么是存储/持久跨站点脚本

存储型跨站点脚本是一种跨站点脚本 (XSS)，攻击者首先将负载发送到 Web 应用程序，然后应用程序保存（即存储/持久化）负载（例如，在数据库或服务器中） 侧文本文件），最后，应用程序无意中为每个访问其网页的受害者执行有效负载。 存储型跨站脚本也称为持久型跨站脚本。

### 存储/持久跨站点脚本示例

在此示例中，开发人员希望在他们的其中一个页面 (page.php) 中包含一个简单的评论部分，而无需部署完整的 CMS，例如 WordPress。 它们在 page.php 网页上包含以下表格：

\\<<font color="red">form</font> <font color="#00dd00">action</font>="<font color="#00dddd">/page.php</font>" <font color="#00dd00">method</font>="<font color="#00dddd">post</font>" <font color="#00dd00">id</font>="<font color="#00dddd">comment</font>"\\>
  \\<<font color="red">label</font>  <font color="#00dd00">for</font>="<font color="#00dddd">name</font>">Your name:\\</<font color="red">label</font>>
  \\<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">text</font>" <font color="#00dd00">id</font>="<font color="#00dddd">name</font>" <font color="#00dd00">name</font>="<font color="#00dddd">name</font>">
  \\<<font color="red">label</font> <font color="#00dd00">for "comment"</font>>Your comment:\\</<font color="red">label</font>>
  \\<<font color="red">textarea</font> <font color="#00dd00">type</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">id</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">name</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">rows</font>="<font color="#00dddd">5</font>" <font color="#00dd00">cols</font>="<font color="#00dddd">30</font>"\\>\\</<font color="red">textarea</font>>
  \\<<font color="red">button</font> <font color="#00dd00">type</font>="<font color="#00dddd">submit</font>" <font color="#00dd00">form</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">value</font>="<font color="#00dddd">comment</font>>Add a comment\\</<font color="red">button</font>>
\\</<font color="red">form</font>>

page.php 文件包含以下代码：

// Add a new comment into the database using PDO to avoid SQL injection
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$name=\\$_POST</font>[<font color="#00dd00">"name"</font>];
<font color="#a67f59">\\$comment=\\$_POST</font>[<font color="#00dd00">"comment"</font>];
<font color="#a67f59">\\$sql =</font> <font color="#00dd00">"INSERT INTO comments (name, comment) VALUES (?,?)"</font>;
<font color="#a67f59">\\$statement = \\$pdo-></font><font color="#00dd00">prepare</font>(<font color="#a67f59">\\$sql</font>);
<font color="#a67f59">\\$statement-></font><font color="#00dd00">execute</font>([<font color="#a67f59">\\$name</font>, <font color="#a67f59">\\$comment</font>]);
(<font color="#a67f59">...</font>)
// Display existing comments
<font color="#a67f59">\\$comments = \\$db-></font><font color="#00dd00">query</font>(<font color="#00dd00">'SELECT * FROM comments'</font>)<font color="#a67f59">-></font><font color="#00dd00">fetchAll</font>();
<font color="#00dddd">foreach</font>(<font color="#a67f59">\\$comments</font> <font color="#00dddd">as</font> <font color="#a67f59">\\$comment</font>) {
    <font color="#00dddd">echo</font> <font color="#00dd00">"\\<tr>\\<td>"</font>.<font color="#a67f59">\\$comment</font>[<font color="#00dd00">'name'</font>]<font color="#a67f59">.</font><font color="#00dd00">"\\</td>"</font>;
    <font color="#00dddd">echo</font> <font color="#00dd00">"\\<td>"</font>.<font color="#a67f59">\\$comment</font>[<font color="#00dd00">'comment'</font>]<font color="#a67f59">.</font><font color="#00dd00">"\\</td>\\</tr>"</font>;
}
(<font color="#a67f59">...</font>)

如您所见，应用程序未经任何验证或清理就将评论插入数据库，随后将其显示在同一页面上供其他用户使用，同样也没有经过验证或清理。

#### 存储型跨站脚本攻击
攻击者在表单中输入以下注释，将名称留空：

\\<script><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\<\/script>

评论被保存到数据库中。 从现在开始，当任何用户访问该页面时，他们的浏览器都会解释以下代码：

\\<<font color="red">tr</font>>\\<<font color="red">td</font>>\\</<font color="red">td</font>>\\<<font color="red">td</font>>\\<<font color="red">script</font>><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\</<font color="red">script</font>>\\</<font color="red">td</font>>\\</<font color="red">tr</font>>

浏览器找到一个 <font color="red">\\<script></font> 标签并执行其中的 JavaScript 代码。 结果，它会为用户显示一个弹出窗口，敦促他们离开该页面。

在这个相当无辜的例子中，用户担心他们的安全，将停止访问该页面，直到管理员收到通知并从数据库中删除恶意内容。

### 修复
获悉该漏洞的开发人员决定使用 HTMLPurifier 过滤来保护代码并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 page.php 文件：

// Add a new comment into the database using PDO to avoid SQL injection
// and HTMLPurifier with HTML escaping to avoid XSS
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$name=\\$_POST</font>[<font color="#00dd00">"name"</font>];
<font color="#a67f59">\\$comment=\\$_POST</font>[<font color="#00dd00">"comment"</font>];
// Purify user data using HTMLPurifier
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$purifier</font> = <font color="#00dddd">new HTMLPurifier</font>(<font color="#a67f59">\\$config</font>);
<font color="#a67f59">\\$purified_name = \\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\\$name</font>);
<font color="#a67f59">\\$purified_comment = \\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\\$comment</font>);
// Just to be sure, HTML-escape special characters
<font color="#a67f59">\\$safe_name</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\\$purified_name</font>, <font color="red">ENT_QUOTES</font>);
<font color="#a67f59">\\$safe_comment</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\\$purified_comment</font>, <font color="red">ENT_QUOTES</font>);
// Save safe data in the database
<font color="#a67f59">\\$sql</font> = <font color="#00dd00">"INSERT INTO comments (name, comment) VALUES (?,?)"</font>;
<font color="#a67f59">\\$statement</font> = <font color="#a67f59">\\$pdo-></font><font color="#00dd00">prepare</font>(<font color="#a67f59">$sql</font>);
<font color="#a67f59">\\$statement-></font><font color="#00dd00">execute</font>([<font color="#a67f59">\\$safe_name</font>, <font color="#a67f59">\\$safe_comment</font>]);
(<font color="#a67f59">...</font>)

### 存储/持久跨站点脚本攻击的后果
存储型跨站点脚本是所有 XSS 类型中最危险的，因为它触及的用户数量最多。 这种攻击可能会产生我们在专门介绍跨站点脚本的一般部分中列出的所有后果。

以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

他们可以将用户重定向到模仿原始应用程序的恶意页面并要求他们登录，从而窃取他们的凭据。
他们可以窃取用户的会话 cookie，并使用它们在原始 Web 应用程序中冒充用户。
他们可能会诱骗用户在他们的计算机上下载和安装恶意软件，例如木马、加密货币矿工或勒索软件。
请注意，如果您的 Web 应用程序为内部用户（例如公司员工）提供服务，则成功的攻击可能会让恶意行为者升级并可能获得对您组织中其他计算机系统的访问权限。

## 基于 DOM 的跨站脚本

### 什么是基于 DOM 的跨站脚本
基于 DOM 的跨站点脚本是一种跨站点脚本 (XSS)，这种攻击利用了文档对象模型 (DOM)。

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

\`\`\`
<html>
(...)
Dashboard for
<script>
   var pos=document.URL.indexOf("context=")+8;
   document.write(decodeURIComponent(document.URL.substring(pos)));
<\/script>
(...)
</html>
\`\`\`

内镶脚本在 URL 中查找 context= (document.URL.indexOf("context="))，获取其右侧的所有文本（+8 表示 context= 开头右侧的 8 个字符）， 并使用 document.write 将该文本直接插入到 HTML 中以供浏览器显示。

如果您访问以下网址：

    http://www.example.com/dashboard.html?context=Thomas

该页面会显示：

    Dashboard for Thomas

### 基于DOM的跨站脚本攻击

攻击者创建以下 URL：

    http://www.example.com/dashboard.html?context=%3c%73%63%72%69%70%74%3e%61%6c%65%72%74%28%22%4c%45%41%56%45%20%54%48%49%53%20%50%41%47%45%21%20%59%4f%55%20%41%52%45%20%42%45%49%4e%47%20%48%41%43%4b%45%44%21%22%29%3b%3c%2f%73%63%72%69%70%74%3e

此有效负载中的长十六进制代码字符串是以下内容的 URL 编码形式：

    <script>alert("LEAVE THIS PAGE! YOU ARE BEING HACKED!");<\/script>

然后，攻击者将 URL 发送给受害者，例如通过电子邮件或即时消息。 受害者单击该 URL，导致其浏览器打开dashboard.html页面并运行恶意脚本。 这将重写文档内容并将以下标记插入到浏览器解释的 HTML 中：

    Dashboard for <script>alert("LEAVE THIS PAGE! YOU ARE BEING HACKED!");<\/script>

结果，浏览器会显示一个弹出窗口，敦促用户离开页面。 其后果是目标用户将停止访问该网络应用程序，因为担心自己的信息安全。

### 修复

得知该漏洞后，开发人员使用安全接收器重写了代码。 因此，来自源的不受信任的内容将始终被解释为文本，而不是代码：

\`\`\`
<html>
(...)
Dashboard for <span id="contentholder"></span>
<script>
   var pos=document.URL.indexOf("context=")+8;
   document.getElementById("contentholder").textContent = 
       document.URL.substring(pos,document.URL.length);
<\/script>
(...)
</html>
\`\`\`

开发人员创建一个占位符对象，并将用户名不直接写入 HTML，而是写入占位符对象的 textContent 属性（使用安全接收器）。 这保证了浏览器不会将此内容解释为代码，而只会将其显示为文本。

### 基于 DOM 的跨站脚本攻击的后果

基于 DOM 的跨站点脚本漏洞并不常见，但成功攻击的后果可能与其他反射型 XSS 攻击一样可怕。 以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

* 他们可以创建网络钓鱼活动，并发送数百万封包含恶意链接的电子邮件，其有效负载会将用户重定向到旨在模仿您的 Web 应用程序的网络钓鱼页面。 因此，数百万用户的凭据可能会被盗，并归咎于您的 Web 应用程序，这将严重损害您的声誉。

* 他们可以创建一个有效负载，将用户发送到模仿您应用程序登录页面的恶意页面。 然后，他们可以将此恶意 URL 发送给您的内部用户，甚至是您的CEO。如果您的一名用户上当，攻击者就会获取他们的凭据来升级攻击。 最终，这可能会让恶意行为者获得对组织中其他计算机系统的访问权限。

### 如何防止基于 DOM 的跨站脚本漏洞

完全避免 JavaScript 代码中基于 DOM 的 XSS 漏洞的最佳方法是使用正确的输出方法（安全接收器）。 例如，如果您想写入 \\<div> 元素，请不要使用innerHtml。 请使用innerText 或textContent。

请注意，并非所有 DOM 元素都有安全的输出方法。 在某些情况下，您必须避免使用不受信任的数据。 例如，您绝不能将任何不受信任的数据写入 eval 或 execScript 等接收器。

## 盲跨站脚本

### 什么是盲跨站脚本

盲跨站点脚本是存储/持久跨站点脚本的一种子类型，其中 Web 应用程序存储攻击者发送的有效负载并仅在稍后执行（在不同时间或在不同地点，甚至可能在另一个 Web 中）。

### 盲跨站脚本示例

在此示例中，开发人员允许用户通过选择任意用户名在 Web 应用程序中注册。 应用程序的register.php页面包含以下表单：

\`\`\`
<form action="/registered.php" method="post" id="comment">
  <label for="username">Choose a username:</label>
  <input type="text" id="username" name="username">
  <label for "password">Choose a password:</label>
  <input type="password" id="password" name="password">
  <button type="submit" form="register" value="register">Register</button>
</form>
\`\`\`

registered.php 文件包含以下代码：

\`\`\`
// 使用 PDO 将新用户添加到数据库以避免 SQL 注入
(...)
$username=$_POST["username"];
$password=password_hash($_POST["password"], PASSWORD_DEFAULT);
$sql = "INSERT INTO users (username, password) VALUES (?,?)";
$statement = $pdo->prepare($sql);
$statement->execute([$username, $password]);
(...)
\`\`\`
正如您所看到的，应用程序将用户名插入数据库而不进行任何验证或清理。

与此同时，另一位开发人员创建了一个不同的应用程序，允许经过身份验证的管理员显示 50 个最新用户的列表。 newusers.php 页面将它们显示在表格中：

\`\`\`
(...)
$sql = "SELECT * FROM users ORDER BY id DESC LIMIT 50";
$statement = $pdo->query($sql);
while ($row = $statement->fetch()) {
    echo "<tr><td>".$row['id']."</td><td>".$row['username']."</td></tr>";
}
(...)
\`\`\`
正如您所看到的，此应用程序假设数据库中的数据是安全的，并且在显示数据之前不会执行任何验证或清理。

#### 盲跨站脚本攻击

击者在表单中输入以下用户名：

    <script>alert("YOUR ADMINISTRATIVE INTERFACE IS HACKED!");<\/script>

攻击者单击“注册”按钮后，此攻击负载将作为新用户名保存在数据库中。

一周后，管理员打开管理应用程序并调用列出通过公共应用程序注册的最新 50 个用户的函数（newusers.php 页面）。 如果恶意用户也在其中，浏览器遇到恶意用户名时会接收并解释以下代码：

    <td><script>alert("YOUR ADMINISTRATIVE INTERFACE IS HACKED!");<\/script></td>

浏览器找到一个 \\<script> 标签并执行其中的 JavaScript 代码。 结果，它会向管理员显示一个弹出窗口。

#### 修复

得知该漏洞后，开发人员决定使用 HTMLPurifier 过滤来保护代码，并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 Registered.php 文件：

\`\`\`
// 使用 PDO 将新用户添加到数据库以避免 SQL 注入
// HTMLPurifier 进行 HTML 转义以避免 XSS
(...)
$username=$_POST["username"];
$password=password_hash($_POST["password"], PASSWORD_DEFAULT);
// Purify user data using HTMLPurifier
(...)
$purifier = new HTMLPurifier($config);
$purified_username = $purifier->purify($username);
// Just to be sure, HTML-escape special characters
$safe_username = htmlspecialchars($purified_username, ENT_QUOTES);
// Save safe data in the database
$sql = "INSERT INTO users (username, password) VALUES (?,?)";
$statement = $pdo->prepare($sql);
$statement->execute([$safe_username, $password]);
(...)
\`\`\`

### 盲跨站脚本攻击的后果

盲跨站脚本与存储型 XSS 的其他变体一样危险，甚至更危险，因为它的影响不是立竿见影的，而且检测起来也更加困难。

以下是黑帽黑客只能根据前面介绍的简单示例执行的一些操作：

* 他们可以将管理员重定向到模仿原始应用程序的恶意页面并要求他们登录，从而窃取他们的凭据。
他们可以窃取管理员的会话 cookie 来冒充特权用户。

* 他们可能会诱骗管理员在其计算机上下载并安装恶意软件，例如木马、加密货币挖掘程序或勒索软件。

任何这些攻击都可能让攻击者升级并可能获得对组织中其他计算机系统的访问权限。

## 防护实践

XSS 的防护不应只依赖单点过滤，而应从输入校验、上下文处理、权限边界、运行环境和监控审计多个层面收敛风险。

- 按输出上下文进行编码，包括 HTML 文本、HTML 属性、JavaScript、CSS、URL。
- 富文本使用白名单 Sanitizer，拒绝危险标签、事件属性和危险协议。
- 前端避免 innerHTML、document.write、eval 等危险 sink。
- 开启合理 CSP，降低注入后的执行能力。
- Cookie 使用 HttpOnly、Secure、SameSite，降低会话窃取风险。

## 安全测试检查清单

- 是否存在用户可控输入直接进入危险上下文。
- 是否覆盖编码、绕过、边界值和异常格式测试。
- 是否对认证、授权、批量接口、导入导出、回调和管理接口进行专项验证。
- 是否有清晰的错误处理，避免敏感信息直接暴露。
- 是否记录关键安全日志，便于发现攻击尝试和误用行为。
`;export{o as default};
