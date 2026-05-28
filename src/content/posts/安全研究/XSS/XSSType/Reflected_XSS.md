---
title: 反射/非持久性跨站点脚本
date: 2026-04-28
summary: 反射型跨站脚本是一种跨站脚本 (XSS)，攻击者不会将负载发送到 Web 应用程序； 相反，他们以包含有效负载（通常经过混淆）的 URL 形式将其发送给受害者。 受害者单击 URL 并打开易受攻击的 Web 应用程序，无意中执行了有效负载。
tags: 漏洞库, Web安全, XSS
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 反射/非持久性跨站点脚本

### 什么是反射/非持久性跨站点脚本

反射型跨站脚本是一种跨站脚本 (XSS)，攻击者不会将负载发送到 Web 应用程序； 相反，他们以包含有效负载（通常经过混淆）的 URL 形式将其发送给受害者。 受害者单击 URL 并打开易受攻击的 Web 应用程序，无意中执行了有效负载。 反映的跨站点脚本也称为非持久性跨站点脚本。

### 反射/非持久性跨站点脚本示例
在此示例中，开发人员希望在欢迎屏幕 (welcome.php) 上显示当前经过身份验证的用户的名称。 它们包括 login.php 网页上的以下登录表单：

\<<font color="red">form</font> <font color="#00dd00">action</font>="<font color="#00dddd">/welcome.php</font>" <font color="#00dd00">method</font>="<font color="#00dddd">get</font>" <font color="#00dd00">id</font>="<font color="#00dddd">login</font>"\>
  \<<font color="red">label</font>  <font color="#00dd00">for</font>="<font color="#00dddd">name</font>">Your name:\</<font color="red">label</font>>
  \<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">text</font>" <font color="#00dd00">id</font>="<font color="#00dddd">name</font>" <font color="#00dd00">name</font>="<font color="#00dddd">name</font>">
  \<<font color="red">label</font> <font color="#00dd00">for "password"</font>>Your password:\</<font color="red">label</font>>
  \<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">password</font>" <font color="#00dd00">id</font>="<font color="#00dddd">password</font>" <font color="#00dd00">name</font>="<font color="#00dddd">password</font>"\>
  \<<font color="red">button</font> <font color="#00dd00">type</font>="<font color="#00dddd">submit</font>" <font color="#00dd00">form</font>="<font color="#00dddd">login</font>" <font color="#00dd00">value</font>="<font color="#00dddd">login</font>">Log in\</<font color="red">button</font>>
\</<font color="red">form</font>>

<br>

welcome.php 文件包含以下代码：

// Display the name of the user
(<font color="#a67f59">...</font>)
<font color="#a67f59">\$name=\$_GET</font>[<font color="#00dd00">"name"</font>];
<font color="#00dddd">echo</font> <font color="#00dd00">"\<strong>Hello, "</font><font color="#a67f59">.\$name.</font><font color="#00dd00">"!\</strong>"</font>;
(<font color="#a67f59">...</font>)

如您所见，应用程序使用 GET 方法发送名称和密码，然后在没有任何验证或清理的情况下在 welcome.php 页面上显示名称。

#### 反射型跨站脚本攻击

攻击者创建以下 URL：
    `http://www.example.com/welcome.php?name=%3c%73%63%72%69%70%74%3e%61%6c%65%72%74%28%22%4c%45%41%56%45%20%54%48%49%53%20%50%41%47%45%21%20%59%4f%55%20%41%52%45%20%42%45%49%4e%47%20%48%41%43%4b%45%44%21%22%29%3b%3c%2f%73%63%72%69%70%74%3e`

此负载中的一长串十六进制代码是以下内容的 URL 编码形式：

\<script><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\</script>

然后，攻击者将 URL 发送给受害者，例如，通过电子邮件或即时消息。 受害者单击该 URL，打开 welcome.php 页面，他们的浏览器会解释以下代码：

\<<font color="red">strong</font>>Hello, \<<font color="red">script</font>><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\</<font color="red">script</font>>!\</<font color="red">strong</font>>

浏览器找到一个 \<script> 标签并执行其中的 JavaScript 代码。 结果，它会显示一个弹出窗口，敦促用户离开该页面。 结果是目标用户担心自己的安全将停止访问 Web 应用程序。

### 修复

获悉此漏洞后，开发人员决定使用 HTMLPurifier 过滤来保护代码并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 welcome.php 文件：

// Display the name of the user
// Use HTMLPurifier with HTML escaping to avoid XSS
<font color="#a67f59">\$name=\$_GET</font>[<font color="#00dd00">"name"</font>];
// Purify user data using HTMLPurifier
(<font color="#a67f59">...</font>)
<font color="#a67f59">\$purifier</font> = <font color="#00dddd">new HTMLPurifier</font>(<font color="#a67f59">\$config</font>);
<font color="#a67f59">\$purified_name</font> = <font color="#a67f59">\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\$name</font>);
// Just to be sure, HTML-escape special characters
<font color="#a67f59">\$safe_name</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\$purified_name</font>, <font color="red">ENT_QUOTES</font>);
// Display the safe name
<font color="#00dddd">echo</font> <font color="#00dd00">"\<strong>Hello, "</font><font color="#a67f59">.\$name.</font><font color="#00dd00">"!\</strong>"</font>;
(<font color="#a67f59">...</font>)

### 反射/非持久性跨站点脚本攻击的后果
反射型跨站点脚本被认为比存储型/持久型 XSS 危险性更小，但后果也可能很可怕。 反射 XSS 攻击更难执行，因为它需要的不仅仅是创建和交付单个有效负载。 攻击者还需要使用社会工程技术来针对特定的受害者或受害者群体。

以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

- 他们可以发起网络钓鱼活动，并发送数百万封包含恶意链接的电子邮件，其中的有效负载会将用户重定向到旨在模仿您的 Web 应用程序的网络钓鱼页面。 因此，数百万用户的凭据可能会被盗并归咎于您的 Web 应用程序，这会严重损害您的声誉。
- 他们可以创建一个有效负载，将用户发送到模仿您应用程序登录页面的恶意页面。 然后，他们可以将此恶意 URL 发送给您的内部用户，甚至是您的 CEO。 即使您的一个用户上当受骗，攻击者也将获得他们的凭据以升级攻击。 最终，这可能会让恶意行为者获得对您组织中其他计算机系统的访问权限。