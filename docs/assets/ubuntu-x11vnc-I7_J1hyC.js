const n=`---\r
title: Ubuntu 配置 x11VNC\r
date: 2026-05-21\r
summary: 迁移旧博客中 Ubuntu 安装、启动 x11VNC 并配置 systemd 自动启动的步骤。\r
tags: Ubuntu, x11VNC, 远程桌面\r
cover: app-pink\r
readingTime: 6 分钟\r
featured: false\r
---\r
\r
# 简介\r
\r
x11VNC 是一个 VNC 服务器，它允许人们使用任何 VNC viewer 远程查看并控制真实的 X 显示器（即与物理显示器、键盘和鼠标相对应的显示器）。\r
\r
## Ubuntu&x11VNC\r
\r
* 更新源\r
\r
    sudo apt-get update\r
\r
* 修改显示器管理器为 lightdm\r
\r
    sudo apt-get install lightdm\r
\r
* 重启系统\r
\r
    sudo reboot\r
\r
* 安装 x11VNC\r
\r
    sudo apt-get install x11vnc\r
\r
* 设置密码（x11vnc）密码默认保存在 /home/\\<username\\>/.vnc/passwd 文件中\r
\r
    x11vnc -storepasswd （根据提示输入密码，保存密码至默认文件选择“Y”）\r
\r
* 启动 x11vnc\r
\r
    x11vnc -forever -shared -rfbauth ~/.vnc/passwd\r
\r
## 配置 x11vnc 开启自动启动\r
\r
* 创建 /lib/systemd/system/x11vnc.service 文件并加入下列内容\r
\r
    sudo gedit /lib/systemd/system/x11vnc.service\r
\r
文件内容如下：\r
\r
\`\`\`\r
[Unit]\r
Description=Start x11vnc.\r
After=multi-user.target\r
\r
[Service]\r
Type=simple\r
ExecStart=/usr/bin/x11vnc -auth guess -forever -loop -noxdamage -repeat -rfbauth /home/<username>/.vnc/passwd -rfbport 5900 -shared\r
\r
[Install]\r
WantedBy=multi-user.target\r
\`\`\`\r
\r
* 启动服务（之后每次启动登录后，x11vnc 就会自动运行了）\r
\r
    sudo systemctl daemon-reload\r
\r
    sudo systemctl enable x11vnc.service\r
\r
    sudo systemctl start x11vnc.service\r
`;export{n as default};
