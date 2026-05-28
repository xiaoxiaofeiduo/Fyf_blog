---
title: SQL注入
date: 2026-05-06
summary: * SQL 注入 （SQLi） 是一种漏洞，它允许恶意黑客将不需要的 SQL 代码引入（注入）到软件执行的 SQL 查询中。
tags: 漏洞库, Web安全, SQL注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# SQL注入

### 什么SQL注入？

<br>

* SQL 注入 （SQLi） 是一种漏洞，它允许恶意黑客将不需要的 SQL 代码引入（注入）到软件执行的 SQL 查询中。

<br>

### SQL注入是如何工作的？

<br>

如果我们的WEB应用程序使用外部数据库，它需要创建对该数据的查询并检索结果。大多数应用程序使用支持SQL（结构化查询语句）的关系数据库，这是一种旨在简单易懂的文本语言。比较流行的SQL数据库包括Oracle、Microsoft SQL Server (MSSQL)、 MySQL、 PostgreSQL等。

<br>

对数据库的查询很少是静态的--应用程序需要从数据库中获取或存储的信息通常取决于用户提供的数据。用户输入通常采用简单文本的形式，就像SQL语法本身一样，因此开发人员通常通过将用户提供的数据与SQL语句直接拼接来创建查询。例如，根据用户提供的ID返回用户的姓名。`SELECT user_name FROM users WHERE user_id = 'id_supplied_by_the_user'`

<br>

如果没有输入验证，恶意攻击者可能会在网页输入表单提交或者直接发送HTTP请求来提供SQL语句的负载。如果应用程序简单地将此类用户数据与静态命令拼接起来，攻击者通常能够完全改变语法和原始查询。攻击者可能使用特殊字符（如单引号、分号）来添加命令和/或忽略静态命令。由此产生的恶意代码甚至可能允许攻击者执行DROP（删除数据库表甚至整个数据库）等命令。这种攻击行为称为SQL注入。

<br>

SQL注入可能发生在任何与SQL数据库交互的软件中，而在Web应用程序中最容易出现安全问题，因为Web应用程序经常使用后端SQL服务器。当然，SQL注入也可能出现在其他类型的应用程序和系统中。

<br>

SQL注入被认为是最古老的已知漏洞之一--它们于1998年首次被记录。SQL注入被归类为[CWE-89: Improper neutralization of special elements used in an SQL command](https://cwe.mitre.org/data/definitions/89.html)（即SQL命令中使用的特殊元素的不正确中和），并且包含在[OWASP Top 10 A3:2021 category](https://owasp.org/Top10/A03_2021-Injection/)(即注入)。

<br>

### 一个SQL注入的简单例子

让我们看看攻击者可以使用下面简单的身份验证示例做什么:

<font color="#00dddd">SELECT</font> * <font color="00dddd">FROM</font> users <font color="#00dddd"> WHERE</font>  user_id = <font color="#00dd00">'id_supplied_by_the_user'</font> <font color="#00dddd">AND</font> password = <font color="#00dd00">'password_supplied_by_the_user'</font>

<br>

如果数据库中有匹配的 `ID` 和 `密码` 记录，这个简单的 SELECT 语句将返回所有相关的用户数据。 这意味着如果用户提供了有效的 `ID` 和 `密码`，查询可能会返回用户的姓名和年龄（取决于用户表的架构）。 如果用户提供了无效的 `ID` 和/或 `密码` ，查询将返回一个空数据集。 开发人员可能会使用这个简单的查询来检查用户是否可以登录。

<br>

恶意攻击者可能会提供以下 `id_supplied_by_the_user` 值：

admin'--

<br>

结果，发送到数据库的查询字符串将变为：

<font color="#00dddd">SELECT</font> * <font color="00dddd">FROM</font> users <font color="#00dddd"> WHERE</font>  user_id =  <font color="#00dd00">'admin'</font><font color="#6b7782">--' AND password = ''</font>

<br>

单引号完成了 `user_id` 的配对，双破折号 (`--`) 导致 SQL 语句的其余部分（即密码检查）被视为注释。 因此，应用程序执行以下查询：

<font color="#00dddd">SELECT</font> * <font color="00dddd">FROM</font> users <font color="#00dddd"> WHERE</font>  user_id =  <font color="#00dd00">'admin'</font>

<br>

如果执行，此查询就会造成成功的 SQL 注入。 它返回管理员的所有用户数据，可能允许恶意攻击者以管理员身份获得对应用程序的未授权访问。

<br>

### SQL注入漏洞的类型

目前主要有以下几种 SQL 注入技术：

* [带内（In-band）SQLi（基于错误和基于联合选择）](./SQLiType/In-band-SQLi.md)
* [推理/盲 SQLi（基于布尔值和基于时间）](./SQLiType/Blind-SQLi.md)
* [带外 SQLi](./SQLiType/Out-of-band-SQLi.md)

<br>

### SQL 注入攻击的潜在后果

SQL 注入是最严重的漏洞之一，原因有二。 

首先，Web 应用程序访问的数据库通常包含对攻击者具有最高价值的高度敏感信息。 因此，攻击者对获取这些数据非常感兴趣。

其次，结合其他常见漏洞利用 SQL 注入可能会产生严重后果。 甚至可以通过 SQL 注入获取操作系统访问权限，从而为完全接管系统开辟道路。

SQL 注入的典型后果包括：

* 访问存储在数据库中的敏感数据，例如密码和/或信用卡号
* 访问有关数据库和操作系统的信息以帮助进一步攻击
* 如果攻击者能够使用权限提升（privilege elevation）获得操作系统访问权限，然后获得 root 访问权限

<br>

### 如何防止 Web 应用程序中的 SQL 注入漏洞

在 Web 应用程序中防止 SQLi 漏洞的唯一完全有效的方法是使用参数化查询（也称为准备语句）访问 SQL 数据库。 几乎所有常见的编程语言都提供参数化查询。 它们让您避免字符串连接，将参数安全地传递给 SQL 查询。如果您的编程语言不支持参数化查询，但您的数据库引擎支持存储过程，则您可以使用带有准备好的语句的存储过程。

不建议纯粹依赖其他预防方法，例如白名单、黑名单或输入过滤/转义。 恶意攻击可能会找到绕过这种检查的方法。 随着参数化查询在编程语言和应用程序框架中的广泛应用，没有理由再使用自定义方法。 仅当参数化查询和存储过程不可用时，此类方法才可能是后备方法。

此外，您应该将您的环境配置为不显示数据库错误——这有助于缓解甚至未发现的基于错误的 SQL 注入漏洞。