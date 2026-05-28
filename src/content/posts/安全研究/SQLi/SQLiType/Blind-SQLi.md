---
title: SQL盲注
date: 2026-05-05
summary: `盲SQL注入`是`SQL注入`的一种，攻击者不会收到来自被攻击数据库的明显响应，而是通过观察数据库服务器和应用程序的行为逐步重建数据库结构。 `SQL盲注`也称为`推理SQL注入`。
tags: 漏洞库, Web安全, SQL注入
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# SQL盲注

### 什么是SQL盲注

`盲SQL注入`是`SQL注入`的一种，攻击者不会收到来自被攻击数据库的明显响应，而是通过观察数据库服务器和应用程序的行为逐步重建数据库结构。 `SQL盲注`也称为`推理SQL注入`。

`SQL盲注`有两种类型：基于`布尔值`和基于`时间`。

<br>

### SQL盲注的后果

使用盲 SQL 注入执行攻击比使用带内 SQL 注入要花费更长的时间，但可以产生相同的结果。 根据数据库服务器和应用程序的行为，攻击者可能会执行以下操作：

* 检查是否可以进行其他类型的 SQL 注入
* 获取有关数据库结构的信息
* 从数据库中取出数据

<br>

### 什么是基于布尔的SQL盲注

`基于布尔的SQL盲注`是`SQL盲注`的一种子类型，攻击者在使用布尔运算符将合法查询与恶意数据结合后观察数据库服务器和应用程序的行为。

<br>

### 基于布尔值的SQL盲注示例

例如，假设以下查询旨在显示数据库中产品的详细信息：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id = product_id

<br>

首先，恶意攻击者以合法的方式使用应用程序来发现一个现有存在的产品`ID`--在这个例子中，它是产品 `42`。然后，他们可以为 product_id 提供以下两个值：

<font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">1</font>
<br>
<font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">0</font>
<br>

如果使用简单的字符串连接在应用程序中执行此查询，则查询分别变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id <font color="#a67f59">=</font> <font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">1</font>
<br>
<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id <font color="#a67f59">=</font> <font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">0</font>
<br>

如果应用程序在每种情况下的响应行为都不同，则它很容易受到基于布尔值的盲 SQL 注入。

<br>

如果数据库服务器是 Microsoft SQL Server，攻击者现在可以为 product_id 提供以下值：

42 <font color="#a67f59">AND</font> (<font color="#00dddd">SELECT TOP</font> 1 substring(name, 1, 1)<br>
&nbsp;<font color="#00dddd">FROM</font> sysobjects<br>
&nbsp;<font color="#00dddd">WHERE</font> id=(<font color="#00dddd">SELECT TOP</font>  1 id<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font>  (SELECT TOP 1 id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font>  sysobjects<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id)<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">AS</font> subq<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id <font color="#00dddd">DESC</font>)) = 'a'<br>

因此，`42 AND` 后括号中的子查询检查数据库中第一个表的名称是否以字母 `a` 开头。 如果为true，则应用程序的响应行为将与负载 `42 AND 1=1` 相同。 如果为false，应用程序的行为将与负载 `42 AND 1=0` 相同。

<br>

攻击者可以遍历所有字母，然后继续遍历第二个字母、第三个字母等。结果，攻击者可以发现数据库结构中第一个表的全名。 然后，他们可以尝试获取有关该表结构的更多数据，最后从表中提取数据。 虽然此示例特定于 MS SQL，但其他数据库类型也存在类似的技术。

<br>

### 什么是基于时间的 SQL 盲注

`基于时间的SQL盲注`是`SQL盲注`的一种子类型，攻击者在将合法查询与导致时间延迟的SQL命令组合后观察数据库服务器和应用程序的响应行为。

<br>

### 基于时间的SQL盲注示例

假设我们有与上面示例相同的查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id = product_id

<br>

恶意攻击者可能会提供以下 `product_id` 值：

<font color="#c92c2c">42</font>; <font color="#00dddd">WAITFOR</font> DELAY <font color="#00dd00">'0:0:10'</font>

<br>

结果，查询变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id = <font color="#c92c2c">42</font>; <font color="#00dddd">WAITFOR</font> DELAY <font color="#00dd00">'0:0:10'</font>

<br>

如果数据库服务器是 `Microsoft SQL Server`，并且应用程序容易受到基于时间的SQL盲注攻击，攻击者将在应用程序中看到 `10秒`的延迟。

<br>

现在攻击者知道基于时间的SQL盲注是`可能`的，他们可以提供以下 `product_id`：

<font color="#c92c2c">42</font>; <font color="#00dddd">IF</font>(<font color="#00dddd">EXISTS</font>(<font color="#00dddd">SELECT TOP</font> <font color="#c92c2c">1</font> *<br>
&nbsp;<font color="#00dddd">FROM</font> sysobjects<br>
&nbsp;<font color="#00dddd">FROM</font> id=(<font color="#00dddd">SELECT TOP</font> 1 id<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font> (<font color="#00dddd">SELECT TOP</font> 1 id <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font> sysobjects<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id)<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">AS</font> subq<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id <font color="#00dddd">DESC</font>)<br>
&nbsp;<font color="#a67f59">AND</font> ascii(lower(substring(name, <font color="#c92c2c">1</font>, <font color="#c92c2c">1</font>))) = 'a'))<br>
&nbsp;<font color="#00dddd">WAITFOR</font> DELAY <font color="#00dd00">'0:0:10'</font><br>

如果数据库结构中第一个表的名称以字母`a`开头，则此查询的第二部分将为`真`，应用程序将延迟`10秒`做出反应。 就像上面的基于布尔的盲SQL注入一样，攻击者可以重复使用这种方法来发现数据库结构中第一个表的名称，然后尝试获取有关该表的表结构的更多数据，最后从表中提取数据。

