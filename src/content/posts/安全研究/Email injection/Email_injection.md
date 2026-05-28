---
title: Email injection
date: 2026-05-15
summary: 电子邮件注入是一个漏洞，恶意黑客可以利用该漏洞滥用电子邮件相关功能（例如网页上的电子邮件联系表单），将恶意电子邮件内容发送给任意收件人。 由于电子邮件注入基于注入行尾字符，因此有时被视为一种 CRLF 注入攻击。 电子邮件注入也称为电子邮件
tags: 漏洞库, Web安全, Email注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# Email injection

### 什么是 email injection

电子邮件注入是一个漏洞，恶意黑客可以利用该漏洞滥用电子邮件相关功能（例如网页上的电子邮件联系表单），将恶意电子邮件内容发送给任意收件人。 由于电子邮件注入基于注入行尾字符，因此有时被视为一种 CRLF 注入攻击。 电子邮件注入也称为电子邮件标头注入、SMTP 标头注入或邮件命令注入。

### SMTP 的工作原理

要了解 SMTP 标头注入，我们需要首先了解 SMTP（简单邮件传输协议）。

SMTP 是互联网最古老的协议之一，于 1981 年在 RFC 788 中首次定义。最初，它接受一小组声明电子邮件发件人和收件人的命令。 随着时间的推移，电子邮件通信变得越来越复杂，因此添加了额外的标头。

第一个重要的 SMTP 概念是信封和电子邮件正文之间的区别。 信封是通信的初始部分，由 SMTP 协议本身定义。 以下命令构成信封：

* MAIL FROM：设置信封发件人。
* RCPT TO：设置信封收件人。 如果您要将消息发送到多个地址，则可以多次使用此命令。
* DATA：开始电子邮件有效负载，其中包含电子邮件标头和消息正文，并以单个空行分隔。 该消息通过发送仅包含句点 (.) 的行来终止。

电子邮件标头不是 SMTP 协议的一部分。 它们由邮件客户端（以正确显示电子邮件）和各种编程语言中可用的专用电子邮件库进行解释。 两个最常见的标头是：

* From：此标头设置可见发件人，该发件人可以是与使用 MAIL FROM 命令设置的地址不同的地址。 在大多数电子邮件客户端中，从 MAIL FROM 命令获取的发件人信息放置在 Return-Path 标头中，默认情况下对用户隐藏。

* To：此标头设置可见收件人，该收件人可能与使用 RCPT TO 设置的地址不同。 在大多数电子邮件客户端中，来自 RCPT TO 命令的收件人信息放置在“Delivered-To”标头中，默认情况下对用户隐藏该标头。

#### 以下是简单 SMTP 对话的示例 (> = sent, < = received)：

```
> MAIL FROM:<postmaster@invicti.com>
  < 250 OK
> RCPT TO:<anna@example.com>
  < 250 OK
> RCPT TO:<barbara@example.com>
  < 250 OK
> DATA
  < 354 Send message content; end with <CRLF>.<CRLF>
> Content-Type: text/html
> Date: Wed, 25 Dec 2019 00:00:01
> From: Santa Claus <santaclaus@invicti.com>
> Subject: Your Gifts Are Here
> To: Not Naughty <notnaughty@example.com>
>
> Hello!
> Your gifts are here, <a href="https://malicioushackersdomain.com/">come to the tree</a>!
> --
> Santa
> .
  < 250 OK
```
上述来自 postmaster@invicti.com 的电子邮件将由 anna@example.com 和 barbara@example.com 收到。 然而，对于用户来说，该邮件似乎是由圣诞老人<santaclaus@invicti.com>（而不是postmaster@invicti.com）发送的。 他们还会看到收件人是 Not Naughty <notnaughty@example.com>，而不是他们自己的地址。 除非安娜和芭芭拉在电子邮件客户端中手动打开电子邮件标头，否则他们根本看不到真正的发件人。

### 电子邮件注入的工作原理

电子邮件注入的工作原理是在用户输入中插入换行符。 如果输入未经净化，恶意黑客可以添加电子邮件标头或修改消息正文。 通过以仅包含句点的行结束恶意负载，攻击者可以发出消息结束信号，欺骗电子邮件服务器忽略后端脚本要发送的任何合法内容。

大多数网络编程语言中的电子邮件库不允许您直接添加信封命令。 相反，它们会获取您提供的电子邮件标头，并通常将其转换为等效的 SMTP 命令。 例如，如果您添加 BCC 标头，您的电子邮件库可能会采用标头内容并创建其他 RCPT TO 命令。 如果攻击者能够使用该特定库添加电子邮件标头，标头将被转换为等效的 SMTP 命令。

### 电子邮件注入攻击示例
以下 PHP 示例是一个典型的联系表单 (contact.php)，容易受到电子邮件标头注入的攻击。 它直接从输入字段获取姓名和电子邮件地址，并准备电子邮件的标题列表。

```
<?php
if(isset($_POST['name'])) {
$name = $_POST['name'];
$replyto = $_POST['replyTo'];
$message = $_POST['message'];
$to = 'root@localhost';
$subject = 'My Subject';
// Set SMTP headers
$headers = "From: $name \n" .
"Reply-To: $replyto";
mail($to, $subject, $message, $headers);
}
?>
```

用户提交的非恶意POST请求如下：

```
POST /contact.php HTTP/1.1
Host: www.example2.com
name=Anna Smith&replyTo=anna@example.com&message=Hello
```

攻击者可以滥用此联系表单并通过发送以下 POST 请求注入电子邮件数据：

```
POST /contact.php HTTP/1.1
Host: www.example2.com
name=Best Product\r\nbcc: everyone@example3.com&replyTo=blame_anna@example.com&message=Buy my product!
```

攻击者插入换行符（\r\n – 回车和换行，CRLF）并附加包含其他电子邮件地址的 BCC 标头。 电子邮件库将这些地址转换为 RCPT TO 命令，并将邮件不仅传递给预期收件人，而且传递给这些额外的地址。 此攻击还涉及欺骗replyTo标头，使收件人相信电子邮件来自其他人（blame_anna@example.com）。

### 电子邮件注入攻击的潜在后果
电子邮件注入漏洞被认为是一个严重的网络安全问题。 虽然电子邮件注入不会对存在安全漏洞的 Web 应用程序或其 Web 服务器产生直接危害，但电子邮件注入可以允许攻击者在各种攻击中向任意收件人发送包含任意内容的电子邮件。

最常见的电子邮件注入攻击媒介包括：

* 垃圾邮件：恶意用户可以使用电子邮件注入来发送垃圾邮件。 成功进行电子邮件注入的一行代码可以让他们强制受害者的电子邮件服务器向许多收件人发送多封内容相同的电子邮件。

* 网络钓鱼：攻击者可能会发送看似源自受害者的邮件服务器、域和 IP 的网络钓鱼电子邮件。 因此，攻击者将无法追踪，责任将由受害者承担。 如果受害者的应用程序也存在跨站脚本 (XSS) 漏洞，并且网络钓鱼电子邮件中的链接指向此易受攻击的应用程序，则该电子邮件看起来更加合法。

* 鱼叉式网络钓鱼：更进一步，攻击者可以向运行易受攻击的应用程序的公司中选定的员工发送看似合法的鱼叉式网络钓鱼电子邮件。 例如，他们可以向财务部门发送一封看似来自首席财务官的令人信服的电子邮件，并紧急要求向攻击者的账户进行大额银行转账。
