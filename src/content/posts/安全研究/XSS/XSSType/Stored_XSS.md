---
title: 存储的/持久的跨站点脚本
date: 2026-04-27
summary: 存储型跨站点脚本是一种跨站点脚本 (XSS)，攻击者首先将负载发送到 Web 应用程序，然后应用程序保存（即存储/持久化）负载（例如，在数据库或服务器中） 侧文本文件），最后，应用程序无意中为每个访问其网页的受害者执行有效负载。 存储型跨站
tags: 漏洞库, Web安全, XSS
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 存储的/持久的跨站点脚本

### 什么是存储/持久跨站点脚本

存储型跨站点脚本是一种跨站点脚本 (XSS)，攻击者首先将负载发送到 Web 应用程序，然后应用程序保存（即存储/持久化）负载（例如，在数据库或服务器中） 侧文本文件），最后，应用程序无意中为每个访问其网页的受害者执行有效负载。 存储型跨站脚本也称为持久型跨站脚本。

### 存储/持久跨站点脚本示例

在此示例中，开发人员希望在他们的其中一个页面 (page.php) 中包含一个简单的评论部分，而无需部署完整的 CMS，例如 WordPress。 它们在 page.php 网页上包含以下表格：

\<<font color="red">form</font> <font color="#00dd00">action</font>="<font color="#00dddd">/page.php</font>" <font color="#00dd00">method</font>="<font color="#00dddd">post</font>" <font color="#00dd00">id</font>="<font color="#00dddd">comment</font>"\>
  \<<font color="red">label</font>  <font color="#00dd00">for</font>="<font color="#00dddd">name</font>">Your name:\</<font color="red">label</font>>
  \<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">text</font>" <font color="#00dd00">id</font>="<font color="#00dddd">name</font>" <font color="#00dd00">name</font>="<font color="#00dddd">name</font>">
  \<<font color="red">label</font> <font color="#00dd00">for "comment"</font>>Your comment:\</<font color="red">label</font>>
  \<<font color="red">textarea</font> <font color="#00dd00">type</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">id</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">name</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">rows</font>="<font color="#00dddd">5</font>" <font color="#00dd00">cols</font>="<font color="#00dddd">30</font>"\>\</<font color="red">textarea</font>>
  \<<font color="red">button</font> <font color="#00dd00">type</font>="<font color="#00dddd">submit</font>" <font color="#00dd00">form</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">value</font>="<font color="#00dddd">comment</font>>Add a comment\</<font color="red">button</font>>
\</<font color="red">form</font>>

page.php 文件包含以下代码：

// Add a new comment into the database using PDO to avoid SQL injection
(<font color="#a67f59">...</font>)
<font color="#a67f59">\$name=\$_POST</font>[<font color="#00dd00">"name"</font>];
<font color="#a67f59">\$comment=\$_POST</font>[<font color="#00dd00">"comment"</font>];
<font color="#a67f59">\$sql =</font> <font color="#00dd00">"INSERT INTO comments (name, comment) VALUES (?,?)"</font>;
<font color="#a67f59">\$statement = \$pdo-></font><font color="#00dd00">prepare</font>(<font color="#a67f59">\$sql</font>);
<font color="#a67f59">\$statement-></font><font color="#00dd00">execute</font>([<font color="#a67f59">\$name</font>, <font color="#a67f59">\$comment</font>]);
(<font color="#a67f59">...</font>)
// Display existing comments
<font color="#a67f59">\$comments = \$db-></font><font color="#00dd00">query</font>(<font color="#00dd00">'SELECT * FROM comments'</font>)<font color="#a67f59">-></font><font color="#00dd00">fetchAll</font>();
<font color="#00dddd">foreach</font>(<font color="#a67f59">\$comments</font> <font color="#00dddd">as</font> <font color="#a67f59">\$comment</font>) {
    <font color="#00dddd">echo</font> <font color="#00dd00">"\<tr>\<td>"</font>.<font color="#a67f59">\$comment</font>[<font color="#00dd00">'name'</font>]<font color="#a67f59">.</font><font color="#00dd00">"\</td>"</font>;
    <font color="#00dddd">echo</font> <font color="#00dd00">"\<td>"</font>.<font color="#a67f59">\$comment</font>[<font color="#00dd00">'comment'</font>]<font color="#a67f59">.</font><font color="#00dd00">"\</td>\</tr>"</font>;
}
(<font color="#a67f59">...</font>)

如您所见，应用程序未经任何验证或清理就将评论插入数据库，随后将其显示在同一页面上供其他用户使用，同样也没有经过验证或清理。

#### 存储型跨站脚本攻击
攻击者在表单中输入以下注释，将名称留空：

\<script><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\</script>

评论被保存到数据库中。 从现在开始，当任何用户访问该页面时，他们的浏览器都会解释以下代码：

\<<font color="red">tr</font>>\<<font color="red">td</font>>\</<font color="red">td</font>>\<<font color="red">td</font>>\<<font color="red">script</font>><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\</<font color="red">script</font>>\</<font color="red">td</font>>\</<font color="red">tr</font>>

浏览器找到一个 <font color="red">\<script></font> 标签并执行其中的 JavaScript 代码。 结果，它会为用户显示一个弹出窗口，敦促他们离开该页面。

在这个相当无辜的例子中，用户担心他们的安全，将停止访问该页面，直到管理员收到通知并从数据库中删除恶意内容。

<br>

### 修复
获悉该漏洞的开发人员决定使用 HTMLPurifier 过滤来保护代码并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 page.php 文件：

// Add a new comment into the database using PDO to avoid SQL injection
// and HTMLPurifier with HTML escaping to avoid XSS
(<font color="#a67f59">...</font>)
<font color="#a67f59">\$name=\$_POST</font>[<font color="#00dd00">"name"</font>];
<font color="#a67f59">\$comment=\$_POST</font>[<font color="#00dd00">"comment"</font>];
// Purify user data using HTMLPurifier
(<font color="#a67f59">...</font>)
<font color="#a67f59">\$purifier</font> = <font color="#00dddd">new HTMLPurifier</font>(<font color="#a67f59">\$config</font>);
<font color="#a67f59">\$purified_name = \$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\$name</font>);
<font color="#a67f59">\$purified_comment = \$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\$comment</font>);
// Just to be sure, HTML-escape special characters
<font color="#a67f59">\$safe_name</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\$purified_name</font>, <font color="red">ENT_QUOTES</font>);
<font color="#a67f59">\$safe_comment</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\$purified_comment</font>, <font color="red">ENT_QUOTES</font>);
// Save safe data in the database
<font color="#a67f59">\$sql</font> = <font color="#00dd00">"INSERT INTO comments (name, comment) VALUES (?,?)"</font>;
<font color="#a67f59">\$statement</font> = <font color="#a67f59">\$pdo-></font><font color="#00dd00">prepare</font>(<font color="#a67f59">$sql</font>);
<font color="#a67f59">\$statement-></font><font color="#00dd00">execute</font>([<font color="#a67f59">\$safe_name</font>, <font color="#a67f59">\$safe_comment</font>]);
(<font color="#a67f59">...</font>)

### 存储/持久跨站点脚本攻击的后果
存储型跨站点脚本是所有 XSS 类型中最危险的，因为它触及的用户数量最多。 这种攻击可能会产生我们在专门介绍跨站点脚本的一般部分中列出的所有后果。

以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

他们可以将用户重定向到模仿原始应用程序的恶意页面并要求他们登录，从而窃取他们的凭据。
他们可以窃取用户的会话 cookie，并使用它们在原始 Web 应用程序中冒充用户。
他们可能会诱骗用户在他们的计算机上下载和安装恶意软件，例如木马、加密货币矿工或勒索软件。
请注意，如果您的 Web 应用程序为内部用户（例如公司员工）提供服务，则成功的攻击可能会让恶意行为者升级并可能获得对您组织中其他计算机系统的访问权限。