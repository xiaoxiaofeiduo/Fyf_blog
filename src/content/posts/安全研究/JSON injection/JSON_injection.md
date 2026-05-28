---
title: JSON注入
date: 2026-05-12
summary: JSON 注入是一个漏洞，可让恶意黑客将恶意数据注入 JSON 流或使用恶意 JSON 流来修改应用程序行为。 JSON 注入有两种类型，服务器端和客户端：
tags: 漏洞库, Web安全, JSON注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# JSON注入

### 什么是JSON注入

JSON 注入是一个漏洞，可让恶意黑客将恶意数据注入 JSON 流或使用恶意 JSON 流来修改应用程序行为。 JSON 注入有两种类型，服务器端和客户端：

* 当来自不可信源的数据未经服务器清理并直接写入 JSON 流时，就会发生服务器端 JSON 注入。

* 当来自不受信任的 JSON 源的数据未经清理并直接使用 JavaScript eval 函数进行解析时，就会发生客户端 JSON 注入。

### 什么是JSON

JSON（JavaScript 对象表示法）是一种轻量级数据交换格式，用于应用程序之间的通信。 它的作用与 XML 类似，但更简单并且更适合在 JavaScript 中进行处理。

许多 Web 应用程序使用这种格式来通信和序列化/反序列化数据。 一些 Web 应用程序还使用 JSON 来存储重要信息，例如用户数据。 JSON 常用于 RESTful API 和 AJAX 应用程序。

### 什么是JSON劫持

虽然 JSON 劫持（跨站点脚本包含的子集 - XSSI）也涉及 JSON 格式，但它是一种略有不同的攻击，在某些方面类似于跨站点请求伪造 (CSRF)。 攻击者可以使用 JSON 劫持来拦截从 Web 服务器发送到 Web 应用程序的 JSON 数据。 典型的 JSON 劫持攻击可能如下所示：

1. 攻击者创建一个包含脚本标记的恶意网站，该脚本标记引用受攻击的 Web 应用程序的 JSON 数据 URL，并包含劫持 JSON 数据的代码。
2. 登录目标 Web 应用程序的用户会被诱骗访问恶意网站（通常使用社交工程）。
3. 由于同源策略 (SOP) 允许在任何其他网站的上下文中包含和执行来自任何网站的 JavaScript，因此用户的 Web 浏览器会在恶意网站的上下文中加载 JSON 数据。
4. 恶意网站劫持JSON数据。

### 服务器端 JSON 注入攻击示例
可以在 PHP 中执行简单的服务器端 JSON 注入，如下所示：

1. 服务器将用户数据存储为 JSON 字符串，包括帐户类型。
2. 用户名和密码值直接从用户输入参数中获取，未验证或清理。
3. JSON 字符串是使用简单的串联构建的：

```
$json_string = '{"accountType":"user","userName":"'.$_GET['userName'].'","pass":"'.$_GET['pass'].'"}';
```
4. 恶意用户将数据附加到输入表单中或在 HTTP 标头中传递的用户名中。 该数据未经处理就发送到后端：

    john%22,%22accountType%22:%22administrator%22

5. 应用程序后端存储的结果 JSON 字符串为：

```
{
  "accountType":"user",
  "userName":"john",
  "accountType":"administrator",
  "pass":"password"
}
```

6. 读取存储的字符串时，JSON 解析器 (json_decode) 遇到两个 accountType 条目并接受最后一个，无需任何身份验证即可授予 john 管理员权限。 请注意，严格来说，json_decode 的行为并不不正确 - JSON 格式的 RFC-7159 规定“对象内的名称应该是唯一的”，但并不是说它们必须是唯一的，从而留下了一些解释空间。

### 客户端 JSON 注入攻击示例
一个简单的客户端 JSON 注入可以执行如下：

1. 初始 JSON 字符串与前面的示例中的相同。
2. 服务器从不受信任的来源获取 JSON 数据（包括恶意负载），并且不会对其进行清理。
3. 客户端使用 eval 解析 JSON 字符串：

```
var result = eval("(" + json_string + ")");
document.getElementById("#accountType").innerText = result.account;
document.getElementById("#userName").innerText = result.name; 
document.getElementById("#pass").innerText = result.pass;
```

4. 攻击者注入的accountType值为：

```
user"});alert(document.cookie);({"accountType":"user
```

5. eval 函数执行弹窗调用。

6. 解析恶意字符串会导致跨站脚本 (XSS) 攻击（document.cookie 被泄露）。

### JSON 注入攻击的潜在后果
JSON 注入的后果很大程度上取决于 Web 应用程序使用 JSON 数据的方式。 然而，在某些情况下，它们可能非常严重：

* 如果 JSON 用于存储身份验证数据，并且应用程序容易受到服务器端 JSON 注入的影响，则攻击者可能会获得对应用程序中管理帐户的访问权限。 根据该管理帐户的权限，他们可以获取高度敏感的数据或执行恶意操作。
* 如果 Web 应用程序容易受到客户端 JSON 注入的攻击，则它可能会被用于涉及反射型 XSS 的攻击，例如网络钓鱼或垃圾邮件活动。

虽然 JSON 注入本身看起来并不是很危险，但它通常只是较长攻击链中的一步，因此在某些情况下，它可能会产生严重后果，甚至包括整个系统受到损害。

