---
title: 带内SQL注入
date: 2026-05-04
summary: `带内SQL注入`是SQL注入的一种，攻击者使用相同的通信通道接收结果作为直接响应。 例如，如果攻击者使用网络浏览器手动执行攻击，则攻击结果将显示在同一个网络浏览器中。 `带内SQL注入`也称为`经典SQL注入`。
tags: 漏洞库, Web安全, SQL注入
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 带内SQL注入

### 什么是带内SQL注入

`带内SQL注入`是SQL注入的一种，攻击者使用相同的通信通道接收结果作为直接响应。 例如，如果攻击者使用网络浏览器手动执行攻击，则攻击结果将显示在同一个网络浏览器中。 `带内SQL注入`也称为`经典SQL注入`。

<br>

### 带内SQL注入示例

最简单的`带内SQL注入`类型是攻击者能够修改原始查询并接收修改后的查询的直接结果。 例如，假设以下查询旨在返回当前用户的个人数据并将其返回在响应上。

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id <font color="#00dddd">LIKE</font> <font color="#00dd00">'current_user'</font>

<br>

如果使用简单的字符串连接在应用程序中执行此查询，则恶意攻击者可以提供以下 `current_user`：

%'--

<br>

结果，发送到数据库的查询字符串将变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id <font color="#00dddd">LIKE</font> <font color="#00dd00">'%'</font><font color="#6b7782">--'</font>

<br>

单引号补全 SQL 语句，双破折号 (--) 表示该行的其余部分被视为注释。 因此，应用程序执行以下查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id <font color="#00dddd">LIKE</font> <font color="#00dd00">'%'</font>

<br>

SQL 中的`%`是一个通配符，因此攻击的结果：应用程序将显示整个用户表（个人数据）的内容，而不仅仅是单个用户记录。

<br>

### 什么是基于错误的SQL注入

`基于错误的SQL注入`是`带内SQL注入`的一种子类型，其中返回给攻击者的结果是数据库错误字符串。

### 基于错误的SQL注入的后果

向攻击者返回错误字符串似乎无害。 但是，根据应用程序的结构和数据库的类型，攻击者可能会使用收到的错误字符串来：

* 获取有关数据库类型和版本的信息，以便针对特定数据库类型/版本使用不同的攻击技术。
* 获取有关数据库结构的信息，以便在知道结构后尝试更具体的 SQL 注入。
* 从数据库中获取数据。 虽然该过程比直接显示查询结果要长得多且复杂得多，但攻击者可能能够操纵错误以从数据库中窃取数据。

<br>

### 基于错误的SQL注入示例

假设我们有下面的查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'current_user'</font>

<br>

恶意攻击者可能会提供以下 `current_user` 值：

1'

<br>

结果，查询变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'1'</font>'

<br>

查询末尾的双单引号导致数据库报错。 如果 Web 服务器配置为在响应上显示错误，攻击者可能会看到如下消息：

   You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''1''' at line 1

<br>

结果，攻击者发现该应用程序正在使用 MySQL 数据库，就可以专注于针对 MySQL 的攻击。

<br>

### 什么是基于联合的SQL注入

`基于联合的SQL注入`是`带内SQL注入`的一种子类型，攻击者使用 UNION SQL 子句将合法信息与敏感数据组合在一起进行注入查询的结果。

<br>

### 基于联合的SQL注入的后果

`基于联合的SQL注入`是`最危险`的 SQL 注入类型，因为它可以让攻击者直接从数据库中获取几乎所有信息。

<br>

### 基于联合的SQL注入示例

假设我们有下面的查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'current_user'</font>

<br>

恶意攻击者可能会提供以下 `current_user`：

-1' UNION SELECT version(),current_user()--'

<br>

结果，查询变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'-1'</font> <font color="#00dddd">UNION SELECT</font> version(),<font color="#00dddd">current_user</font>()--'

<br>

MySQL 中的 version 和 current_user 函数返回数据库版本和当前操作系统用户的名称。 结果，攻击者收到以下信息：

    5.5.54-0+deb8u1-log
    mysql@localhost

<br>

攻击者立即知道该应用程序在操作系统 debian 8 上使用 MySQL 5.5.54 数据库，并且使用操作系统用户帐户 mysql 访问该数据库。





