---
title: Ubuntu 使用小技巧
date: 2026-05-22
summary: 迁移旧博客中 Ubuntu 使用过程中积累的小技巧，包括 vi 输入异常、root SSH 登录和 IP 配置。
tags: Ubuntu, Linux, 运维基础
cover: app-orange
readingTime: 6 分钟
featured: false
---

# 简介

一些使用 Ubuntu 过程中积累的小技巧。

## ubuntu（desktop）使用 vi 编辑器时输入异常且按方向键乱码

* 卸载

    sudo apt-get remove vim-common

* 安装

    sudo apt-get install vim

## 开启 root 登录 ssh 的方式（实践版本为 20.04）

* 设置 root 密码

    sudo passwd root

* 修改 ssh 配置

    sudo vim /etc/ssh/sshd_config

```
PermitRootLogin without-password
修改为
PermitRootLogin yes
```

* 重启 sshd 服务

    sudo systemctl restart sshd

## 修改 IP 地址

ubuntu18 以后的 IP 配置文件一般存放在 /etc/netplan/****.yaml 文件中，所以修改 IP 相关信息得修改该文件。

* sudo vi /etc/netplan/****.yaml

文件示例：

```
network:
  ethernets:
    ens233:     #配置的网卡的名称
      addresses: [192.168.2.2/24]    #配置的静态ip地址和掩码
      dhcp4: no    #关闭DHCP，需要打开DHCP则写yes
      optional: true
      gateway4: 192.168.2.254    #网关地址
      nameservers:
         addresses: [192.168.31.1,114.114.114.114]    #DNS服务器地址，多个DNS服务器地址需要用英文逗号分隔开
  version: 2
  renderer: networkd    #指定后端采用systemd-networkd或者Network Manager，可不填写则默认使用systemd-workd
```

* 重新应用 yaml 配置文件

    sudo netplan apply
