---
title: Ubuntu 配置 x11VNC
date: 2026-05-21
summary: 迁移旧博客中 Ubuntu 安装、启动 x11VNC 并配置 systemd 自动启动的步骤。
tags: Ubuntu, x11VNC, 远程桌面
cover: app-pink
readingTime: 6 分钟
featured: false
---

# 简介

x11VNC 是一个 VNC 服务器，它允许人们使用任何 VNC viewer 远程查看并控制真实的 X 显示器（即与物理显示器、键盘和鼠标相对应的显示器）。

## Ubuntu&x11VNC

* 更新源

    sudo apt-get update

* 修改显示器管理器为 lightdm

    sudo apt-get install lightdm

* 重启系统

    sudo reboot

* 安装 x11VNC

    sudo apt-get install x11vnc

* 设置密码（x11vnc）密码默认保存在 /home/\<username\>/.vnc/passwd 文件中

    x11vnc -storepasswd （根据提示输入密码，保存密码至默认文件选择“Y”）

* 启动 x11vnc

    x11vnc -forever -shared -rfbauth ~/.vnc/passwd

## 配置 x11vnc 开启自动启动

* 创建 /lib/systemd/system/x11vnc.service 文件并加入下列内容

    sudo gedit /lib/systemd/system/x11vnc.service

文件内容如下：

```
[Unit]
Description=Start x11vnc.
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/bin/x11vnc -auth guess -forever -loop -noxdamage -repeat -rfbauth /home/<username>/.vnc/passwd -rfbport 5900 -shared

[Install]
WantedBy=multi-user.target
```

* 启动服务（之后每次启动登录后，x11vnc 就会自动运行了）

    sudo systemctl daemon-reload

    sudo systemctl enable x11vnc.service

    sudo systemctl start x11vnc.service
