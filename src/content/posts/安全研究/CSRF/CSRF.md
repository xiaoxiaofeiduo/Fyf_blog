---
title: CSRF
date: 2026-05-18
summary: 跨站点请求伪造 (CSRF) 是一种 Web 漏洞，恶意黑客可以利用该漏洞诱骗受害者提交请求，从而允许攻击者代表受害者执行状态更改操作。
tags: 漏洞库, Web安全, CSRF
cover: app-blue
readingTime: 6 分钟
featured: false
---
# CSRF

### 什么是跨站请求伪造（CSRF）

跨站点请求伪造 (CSRF) 是一种 Web 漏洞，恶意黑客可以利用该漏洞诱骗受害者提交请求，从而允许攻击者代表受害者执行状态更改操作。 

### 跨站请求伪造是如何工作的

大多数 Web 应用程序都需要身份验证，经过身份验证的用户才能够执行非常敏感的操作。 Web 应用程序中的身份验证通常基于用户会话来执行。 进行身份验证后，您的浏览器会在您的计算机上存储一个会话 cookie，并随您向该 Web 应用程序发出的每个请求一起发送该 cookie。 不太常见的是，应用程序还可以使用 NTLM 或基本身份验证来代替会话 cookie 进行身份验证，甚至可以根据 IP 地址识别用户。

当您使用应用程序时，从浏览器发送到应用程序的许多 HTTP 请求都是您显式操作的结果，例如，当您在地址栏中键入 URL 或单击链接时。 但是，其他 HTTP 请求是由浏览器在处理当前网页上包含的代码时隐式发送的。 例如，如果页面包含图像，则将通过单独的 HTTP 请求获取该图像。

此类隐式请求也可以定向到与您正在查看的页面位置无关的域。 例如，test.com 上显示的图像实际上可能来自 example.com。 在这种情况下，最重要的是，对两个位置的请求来自同一浏览器，因此您当前的身份验证方法（无论是会话 cookie 还是其他方法）适用于这两个位置。 因此，如果您的浏览器打开 test.com 并从 example.com 获取图像，从而在 example.com 创建用户会话，则 example.com Web 应用程序会将您视为经过身份验证的用户（即使您最初打开 test.com， 不是 example.com）。

结合起来，可以利用这两种行为通过以下方式执行跨站点请求伪造攻击：

1. 受害者在目标 Web 应用程序（例如 example.com）中进行身份验证。

2. 攻击者使用社交工程诱骗受害者访问恶意网站（例如 test.com）。

3. 恶意网页包含导致受害者浏览器向目标（例如 example.com）发送隐式请求的代码（例如图像标签）。

4. 恶意请求会导致目标执行用户无意的操作。 后果将根据应用程序而有所不同。


### 跨站请求伪造漏洞的类型

CSRF 漏洞可能基于 GET 或 POST 请求。

对于基于 GET 请求的 CSRF，攻击者可以简单地在恶意页面上使用图像标签（或任何其他允许跨站点请求的标签）：

    <img src="http://example.com/bank.php/?action=transfer&target=attacker_account">

当用户访问带有上述图像标签的页面时（例如，点击恶意链接后），用户的浏览器会尝试打开该图像，但却向目标站点发出 GET 请求，从而在登录时使用用户的帐户执行恶意操作。 假设用户在 example.com 上经过身份验证，Web 应用程序将无法区分合法用户请求和恶意请求，因为它们都是从同一浏览器发送的。

对于基于 POST 请求的 CSRF，攻击者需要付出更多的努力。 执行此类攻击的最简单方法是使用 JavaScript 强制用户的浏览器自动提交表单：

```
<body onload="document.csrf.submit()">
<form action="http://example.com/bank.php" method="POST" name="csrf">
    <input type="hidden" name="action" value="transfer">
    <input type="hidden" name="target" value="attacker_account">
</form>
```
\<body> 中的 onload 参数将导致浏览器在用户打开恶意页面后立即提交表单。

### 跨站点请求伪造攻击示例

金融业务应用程序的开发人员创建了一个功能，允许用户设置他们想要用于从应用程序获取每日财务报告的电子邮件地址。 要设置或更改电子邮件地址，经过身份验证的用户必须在 http://example.com/set_email.php 页面上填写 HTML 表单：

```
<form action="/set_email.php" method="post" id="set_email">
    <label for="email">Enter the email address to receive reports:</label>
    <input type="email" id="email" name="email">
    <button type="submit" form="submit" value="submit">Set email</button>    
</form>
```

攻击者创建一个恶意页面http://example.attacker/exploit.html，内容如下：

```
<body onload=document.email.submit()>
    <form action="http://example.com/set_email.php" method="post" name="email">
        <input type="hidden" id="email" value="attacker@example.attacker">
    </form>
</body>
```

然后，攻击者创建一封钓鱼电子邮件并将其发送给金融应用程序的用户，诱骗用户访问http://example.attacker/set_email.html。 假设用户已经通过 example.com 登录到应用程序，则应用程序将收到伪造的请求，并将报告电子邮件更改为attacker@example.attacker。 因此，攻击者将每天收到有关公司财务运营的敏感报告。

### 跨站点请求伪造攻击的潜在后果

跨站点请求伪造漏洞被视为中等严重程度，原因如下：

* 在此类攻击中，攻击者永远不会收到 HTTP 响应，因此无法使用此技术直接读取/访问敏感信息。 他们甚至无权访问随恶意请求发送的会话 cookie 值。

* 攻击受到 Web 应用程序功能的限制，或者更准确地说，受到应用程序允许当前用户使用状态更改请求执行的操作的限制。 例如，如果您有一个票证系统，并且当前用户只能创建和解决问题，那么攻击者通过 CSRF 最多只能清除票证队列。 例如，他们将无法获得管理员的凭据。

* 当针对特定个人或一小群拥有高权限的人时，这种类型的攻击最为有效。 与跨站脚本 (XSS) 不同，向大量随机受害者发送恶意 CSRF 有效负载通常没有任何意义。 CSRF 通常是精心准备的，以利用业务中的特定用户，例如 CEO、管理员或财务部门员工。



