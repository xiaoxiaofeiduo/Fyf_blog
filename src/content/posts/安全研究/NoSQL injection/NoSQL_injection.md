---
title: NoSQL 注入
date: 2026-05-10
summary: NoSQL 注入是一个漏洞，可让恶意黑客将不需要的代码引入（注入）到 NoSQL 数据库执行的数据库查询中。
tags: 漏洞库, Web安全, NoSQL注入
cover: app-teal
readingTime: 6 分钟
featured: false
---
# NoSQL 注入

### 什么是 NoSQL注入

NoSQL 注入是一个漏洞，可让恶意黑客将不需要的代码引入（注入）到 NoSQL 数据库执行的数据库查询中。

### 什么是NoSQL

NoSQL（非SQL或不仅仅是SQL）通常用于描述非关系数据库，可能指许多不同类型的数据库和数据模型，包括键值、键文档、列族和图 数据库。 NoSQL数据库近年来迅速普及，主流产品有MongoDB、Apache Cassandra、Apache HBase、Apache CouchDB、Neo4j、RavenDB、Redis、OrientDB、DynamoDB、HyperTable、Google Cloud Datastore等。

NoSQL 数据库引擎使用与关系数据库不同的数据结构，虽然它们通常不支持 SQL 语句或 SQL 查询，但它们都为用户提供执行查询的方法。 与 SQL 数据库不同，它没有通用的查询语言或语法，因此查询格式取决于特定的数据库产品以及 Web 应用程序或 API 的实现细节。 这意味着您的查询不仅取决于数据库，还取决于编程语言（例如 Python、PHP、Node.js 等）和框架（例如 Spring）。 即便如此，大多数 NoSQL 查询都基于 JSON，并且通常包含用户输入。 这意味着，与未经处理的用户输入一样，NoSQL 数据库也容易受到注入攻击。

### NoSQL 注入是如何工作的

NoSQL 注入不依赖于通用查询语言，因此给定的注入漏洞仅影响一种特定的 NoSQL 数据库类型。 除此之外，NoSQL 注入攻击与传统的 SQL 注入攻击类似——攻击者在用户输入中提供恶意负载，例如表单或 HTTP 请求，如果该输入未经清理就传递到 NoSQL 数据库，则可能会导致数据库崩溃 执行攻击者提供的命令。

### NoSQL 注入示例
为了了解 NoSQL 查询是如何构建的以及它在哪里可能容易受到注入攻击，我们将重点关注 MongoDB（当下最流行的 NoSQL 数据库），并使用 PHP 访问它。 下面是一个访问 MongoDB 数据库进行身份验证的简单示例：

```
$username = $_POST['username'];
$password = $_POST['password'];
$connection = new MongoDB\Client('mongodb://localhost:27017');
if($connection) {
	$db = $connection->test;
	$users = $db->users;
	$query = array(
		"user" => $username,
		"password" => $password
	);
	$req = $users->findOne($query);
}

```

正如您所看到的，用于身份验证的用户名和密码参数取自 POST 请求，然后直接插入到查询中。 与其他类型的注入类似，这允许恶意用户输入提供未经身份验证的访问的 NoSQL 注入负载。

要成功执行 MongoDB 注入，在 POST 请求中提供以下恶意输入数据就足够了：

    username[$eq]=admin&password[$ne]=foo

[$ne] 查询运算符表示不等于，因此结果查询将找到用户名是 admin 且密码不是 foo 的第一条记录。 如果此类代码用于身份验证并且管理员用户存在，则攻击者将以该用户身份登录。

其他 MongoDB 运算符也可能以类似的方式被滥用，例如 [$lt] 和 [$gt] 以及 [$regex]。 在上述场景中使用正则表达式，攻击者甚至可以通过按顺序尝试各种组合并评估结果来枚举所有用户。

#### 高级攻击和 JavaScript 注入
MongoDB 查询通常包含 $where 运算符，这可能会导致包括 JavaScript 对象在内的严重 NoSQL 攻击。 例如，开发人员可能希望按以下方式使用 $where 运算符来访问特定用户的记录：

    $query = array('$where' => 'this.name === \''.$name.'\'');

在这种情况下，攻击者可以通过注入 $name 来使用以下空字符串比较技巧：

    '; return '' == '

结果，查询将变为：

    "$where": "this.name === ''; return '' == ''"

由于结果始终为真，因此攻击者将收到整个用户列表。

$where 运算符实际上被评估为 JavaScript 代码，因此攻击者还可以传递包含任意 JavaScript 的恶意字符串的参数，例如：

    '; while(true){}'

此示例创建了一个无限循环，导致拒绝服务攻击。


### NoSQL 注入攻击的潜在后果

NoSQL 注入攻击的后果取决于数据库类型和数据库通信的实现方式。 攻击者可能绕过身份验证、提取数据、修改数据，甚至获得对 Web 应用程序的完全控制。 因此，他们甚至可以访问底层操作系统并获得对 Web 服务器的控制。



