---
title: 盲跨站脚本
date: 2026-04-30
summary: 盲跨站点脚本是存储/持久跨站点脚本的一种子类型，其中 Web 应用程序存储攻击者发送的有效负载并仅在稍后执行（在不同时间或在不同地点，甚至可能在另一个 Web 中）。
tags: 漏洞库, Web安全, XSS
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 盲跨站脚本

### 什么是盲跨站脚本

盲跨站点脚本是存储/持久跨站点脚本的一种子类型，其中 Web 应用程序存储攻击者发送的有效负载并仅在稍后执行（在不同时间或在不同地点，甚至可能在另一个 Web 中）。

### 盲跨站脚本示例

在此示例中，开发人员允许用户通过选择任意用户名在 Web 应用程序中注册。 应用程序的register.php页面包含以下表单：

```
<form action="/registered.php" method="post" id="comment">
  <label for="username">Choose a username:</label>
  <input type="text" id="username" name="username">
  <label for "password">Choose a password:</label>
  <input type="password" id="password" name="password">
  <button type="submit" form="register" value="register">Register</button>
</form>
```

registered.php 文件包含以下代码：

```
// 使用 PDO 将新用户添加到数据库以避免 SQL 注入
(...)
$username=$_POST["username"];
$password=password_hash($_POST["password"], PASSWORD_DEFAULT);
$sql = "INSERT INTO users (username, password) VALUES (?,?)";
$statement = $pdo->prepare($sql);
$statement->execute([$username, $password]);
(...)
```
正如您所看到的，应用程序将用户名插入数据库而不进行任何验证或清理。

与此同时，另一位开发人员创建了一个不同的应用程序，允许经过身份验证的管理员显示 50 个最新用户的列表。 newusers.php 页面将它们显示在表格中：

```
(...)
$sql = "SELECT * FROM users ORDER BY id DESC LIMIT 50";
$statement = $pdo->query($sql);
while ($row = $statement->fetch()) {
    echo "<tr><td>".$row['id']."</td><td>".$row['username']."</td></tr>";
}
(...)
```
正如您所看到的，此应用程序假设数据库中的数据是安全的，并且在显示数据之前不会执行任何验证或清理。

#### 盲跨站脚本攻击

击者在表单中输入以下用户名：

    <script>alert("YOUR ADMINISTRATIVE INTERFACE IS HACKED!");</script>

攻击者单击“注册”按钮后，此攻击负载将作为新用户名保存在数据库中。

一周后，管理员打开管理应用程序并调用列出通过公共应用程序注册的最新 50 个用户的函数（newusers.php 页面）。 如果恶意用户也在其中，浏览器遇到恶意用户名时会接收并解释以下代码：

    <td><script>alert("YOUR ADMINISTRATIVE INTERFACE IS HACKED!");</script></td>

浏览器找到一个 \<script> 标签并执行其中的 JavaScript 代码。 结果，它会向管理员显示一个弹出窗口。

#### 修复

得知该漏洞后，开发人员决定使用 HTMLPurifier 过滤来保护代码，并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 Registered.php 文件：

```
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
```

### 盲跨站脚本攻击的后果

盲跨站脚本与存储型 XSS 的其他变体一样危险，甚至更危险，因为它的影响不是立竿见影的，而且检测起来也更加困难。

以下是黑帽黑客只能根据前面介绍的简单示例执行的一些操作：

* 他们可以将管理员重定向到模仿原始应用程序的恶意页面并要求他们登录，从而窃取他们的凭据。
他们可以窃取管理员的会话 cookie 来冒充特权用户。

* 他们可能会诱骗管理员在其计算机上下载并安装恶意软件，例如木马、加密货币挖掘程序或勒索软件。

任何这些攻击都可能让攻击者升级并可能获得对组织中其他计算机系统的访问权限。
