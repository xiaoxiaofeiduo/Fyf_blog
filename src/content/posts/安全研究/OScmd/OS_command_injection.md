---
title: 操作系统命令注入
date: 2026-05-09
summary: 操作系统命令注入是一种漏洞，可让恶意攻击者诱骗应用程序执行操作系统 (OS) 命令。 OS 命令注入也称为命令注入或 shell 注入。
tags: 漏洞库, Web安全, 命令注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 操作系统命令注入

### 什么是操作系统命令注入

操作系统命令注入是一种漏洞，可让恶意攻击者诱骗应用程序执行操作系统 (OS) 命令。 OS 命令注入也称为命令注入或 shell 注入。

### OS 命令注入如何工作

大多数编程语言都包含让开发人员调用操作系统命令的函数。 调用操作系统命令的原因多种多样，例如调用以其他语言编写的脚本等。

操作系统命令注入漏洞是在输入验证不充分的情况下使用此类操作系统调用函数的结果。 缺乏验证使攻击者能够将恶意命令注入用户输入，然后在主机操作系统上执行这些恶意命令。

命令注入漏洞是一种应用安全问题，可能出现在任何类型的计算机软件、几乎所有编程语言和任何平台上。 例如，您可以在路由器的嵌入式软件、用 PHP 编写的 Web 应用程序和 API、用 Python 编写的服务器端脚本、用 Java 编写的移动应用程序，甚至核心操作系统软件中发现获取命令注入漏洞。

请注意，OS 命令注入经常与远程代码执行 (RCE) 混淆，也被称为代码注入。 在 RCE 的情况下，攻击者在应用程序的语言和应用程序上下文中执行恶意代码。 在OS 系统命令注入的情况下，攻击者是在系统 shell 中执行恶意命令。 然而，一些业内人士认为操作系统命令注入是代码注入的一种。

### OS 命令注入攻击示例

下面是一个简单的 PHP 源代码示例，其中包含操作系统命令注入漏洞和包含此代码的应用程序的命令注入攻击媒介。

易受攻击的代码：
PHP 应用程序的开发人员希望用户能够在 Web 应用程序中看到 Windows ping 命令的输出。 用户需要输入 IP 地址，应用程序会向该地址发送 ICMP ping。 开发人员使用 HTTP GET 参数传递 IP 地址，然后在命令行中使用它。 不幸的是，开发人员过于信任用户并且不进行输入验证。

<font color="#e90">\<?PHP</font> <br>
&nbsp;&nbsp;<font color="#a67f59">\$address = \$_GET</font>[<font color="#00dd00">"address"</font>]; <br>
&nbsp;&nbsp;<font color="#a67f59">\$output</font> = <font color="#00dd00">shell_exec</font>(<font color="#00dd00">"ping -n 3</font> <font color="#a67f59">\$address</font>");<br>
&nbsp;&nbsp;<font color="#00dddd">echo</font> "<font color="#00dd00">\<pre\></font><font color="#a67f59">$output</font><font color="#00dd00">\</pre\>"</font>;<br>
<font color="#e90">?\></font>

攻击向量：
恶意攻击者通过使用以下负载操纵 GET 请求来滥用此脚本：

    http://example.com/ping.php?address=8.8.8.8%26dir

Windows 中的 & 符号是用来分隔操作系统命令。 结果，易受攻击的应用程序执行了附加命令 (dir) 并显示命令输出（目录列表）：<font color="red">ping -n 3 8.8.8.8&dir</font>

    ���� Ping 8.8.8.8 ���� 32 �ֽڵ�����:
    ����ʱ��
    ���� 8.8.8.8 �Ļظ�: �ֽ�=32 ʱ��=34ms TTL=110
    ����ʱ��
    ����ʱ��

    8.8.8.8 �� Ping ͳ����Ϣ:
        ���ݰ�: �ѷ��� = 4���ѽ��� = 1����ʧ = 3 (75% ��ʧ)��
    �����г̵Ĺ���ʱ��(�Ժ���Ϊ��λ):
        ��� = 34ms��� = 34ms��ƽ�� = 34ms
    ������ C �еľ�û�б�ǩ��
    �������к��� AAF6-8F65

    C:\phpstudy_pro\WWW\DVWA-master\vulnerabilities\exec ��Ŀ¼

    2022/10/12  05:31    
              .
    2022/10/12  05:31    
              ..
    2022/10/12  05:31    
              help
    2022/10/12  05:31             1,839 index.php
    2022/10/12  05:31    
              source
                   1 ���ļ�          1,839 �ֽ�
                  4 ��Ŀ¼ 26,274,267,136 �����ֽ�

<br>

### OS 命令注入攻击的潜在后果

在操作系统命令注入漏洞的情况下，攻击者能够以应用程序的权限执行操作系统命令。 例如，攻击者可以安装反向 shell 并获得具有此类特权的 cmd 访问权限。 然后，他们可能能够通过使用其他漏洞来升级攻击（提高权限），这可能最终导致获得根访问权限，从而完全控制 Web 服务器操作系统。

如果成功，攻击者可能会进行以下常见攻击类型之一：

* 勒索软件或者其他恶意软件：攻击者可能会在机器上安装勒索软件，然后使用其他方法传播到受害者拥有的其他资产上。

* 窃取敏感数据：攻击者可能会使用权限提升来访问包含信用卡号等敏感数据的 SQL 数据库服务器。

* 加密货币挖掘：攻击者经常在受感染的机器上安装加密货币挖掘器。 挖矿会消耗您的计算资源，为网络犯罪分子提供进行更多恶意活动的资金。

<br>

### 如何防止Web应用中的 OS 命令注入漏洞

可以通过多种方法防止 OS 命令注入攻击来提高应用程序安全性。 最简单和最安全的方法是永远不要在 PHP 中使用 shell_exec 等调用来执行主机操作系统命令，而是使用编程语言中的等效命令。 例如，如果开发人员想在 Linux/UNIX 上使用 PHP 发送邮件，他们可能会想使用操作系统中可用的邮件命令。 实际，他们应该使用 PHP 中的 mail() 函数。

<br>

#### 禁用危险函数

Web 服务器管理员可以通过禁用潜在的危险功能（例如导致操作系统调用的功能）来提高应用程序安全性。 例如，对于 PHP，您可以通过添加以下行来配置 php.ini 文件以阻止危险函数：

    disable_functions=exec,passthru,shell_exec,system

<br>

#### 使用白名单校验来提高安全性

如果编程语言中没有等效的命令，上面的方法可能会很困难。 例如，没有直接的方法从 PHP 发送 ICMP ping 数据包。 在这种情况下，您需要在将值传递给 shell 命令之前应进行输入校验，最安全的方法是使用白名单校验。 例如，在上面显示的易受攻击的代码中，您可以检查地址变量是否为 IP 地址。 更正后的代码应该为：

<font color="#e90">\<?PHP</font> <br>
&nbsp;&nbsp;<font color="#a67f59">\$address = <font color="#00dd00">filter_var</font>(\$_GET</font>[<font color="#00dd00">"address"</font>], <font color="red">FILTER_VALIDATE_IP</font>); <br>
&nbsp;&nbsp;<font color="#a67f59">\$output</font> = <font color="#00dd00">shell_exec</font>(<font color="#00dd00">"ping -n 3</font> <font color="#a67f59">\$address</font>");<br>
&nbsp;&nbsp;<font color="#00dddd">echo</font> "<font color="#00dd00">\<pre\></font><font color="#a67f59">$output</font><font color="#00dd00">\</pre\>"</font>;<br>
<font color="#e90">?\></font>

检验时，请记住危险的用户输入可能来自很多地方，而不仅仅是来自 GET 和 POST 参数。 它还可以出现在 HTTP 标头、JSON 或 XML 数据以及 HTTP 请求的任何其他部分中。

<br>

#### 使用字符转义来防止 OS 命令注入

在某些语言中，您可以使用字符转义来防止命令注入攻击。 这意味着在您将用户输入发送到 OS 命令之前，内置的编程语言功能会确保转义所有潜在危险的字符。

例如，在 PHP 中，您可以使用 escapeshellarg 和 escapeshellcmd 函数进行转义。 下面是修改后的安全代码：

<font color="#e90">\<?PHP</font> <br>
&nbsp;&nbsp;<font color="#a67f59">\$address = \$_GET</font>[<font color="#00dd00">"address"</font>]; <br>
&nbsp;&nbsp;<font color="#a67f59">\$output</font> = <font color="#00dd00">shell_exec</font>(<font color="#00dd00">escapeshellcmd</font>(<font color="#00dd00">"ping -n 3</font> <font color="#a67f59">\$address</font>"));<br>
&nbsp;&nbsp;<font color="#00dddd">echo</font> "<font color="#00dd00">\<pre\></font><font color="#a67f59">$output</font><font color="#00dd00">\</pre\>"</font>;<br>
<font color="#e90">?\></font>


####  使用黑名单校验来提高安全性

事实上，不建议使用黑名单，因为攻击者有很多方法可以绕过它们。 但是，如果您决定使用黑名单，则必须意识到攻击者可以使用各种特殊字符来注入任意命令。 最简单和最常见的是用于 Linux 的分号 (;) 和用于 Windows 的 & 符号 (&)。 但是，上面举例的易受攻击代码，以下有效负载都可以正常工作并显示 whoami 命令的结果：

* <font color="red">address=8.8.8.8%3Bwhoami</font> (; 字符，仅限 Linux)
* <font color="red">address=8.8.8.8&26whoami</font> (& 字符，仅限 Windows)
* <font color="red">address=8.8.8.8%7Cwhoami</font> (| 字符)
* <font color="red">address=invalid%7C%7Cwhoami</font> (|| 字符, 仅当第一个命令失败时才执行第二个命令)
* <font color="red">address=8.8.8.8&26&26whoami</font> (&& 字符)
* <font color="red">%3E(whoami)</font> (> 字符, 仅限Linux)
* <font color="red">%60whoami%60</font> (` 字符, 仅限Linux, 结果是 ping 命令报告为错误)

因此，如果确实需要使用黑名单，则必须对以下特殊字符进行过滤或转义：

* Windows:  <font color="red">( ) < > & * ‘ | = ? ; [ ] ^ ~ ! . ” % @ / \ : + , `</font>
* Linux: <font color="red">{ } ( ) < > & * ‘ | = ? ; [ ] $ – # ~ ! . ” % / \ : + , `</font>

