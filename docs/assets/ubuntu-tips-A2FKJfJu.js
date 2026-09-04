const n=`---\r
title: Ubuntu 使用小技巧\r
date: 2026-05-22\r
summary: 迁移旧博客中 Ubuntu 使用过程中积累的小技巧，包括 vi 输入异常、root SSH 登录和 IP 配置。\r
tags: Ubuntu, Linux, 运维基础\r
cover: app-orange\r
readingTime: 6 分钟\r
featured: false\r
---\r
\r
# 简介\r
\r
一些使用 Ubuntu 过程中积累的小技巧。\r
\r
## ubuntu（desktop）使用 vi 编辑器时输入异常且按方向键乱码\r
\r
* 卸载\r
\r
    sudo apt-get remove vim-common\r
\r
* 安装\r
\r
    sudo apt-get install vim\r
\r
## 开启 root 登录 ssh 的方式（实践版本为 20.04）\r
\r
* 设置 root 密码\r
\r
    sudo passwd root\r
\r
* 修改 ssh 配置\r
\r
    sudo vim /etc/ssh/sshd_config\r
\r
\`\`\`\r
PermitRootLogin without-password\r
修改为\r
PermitRootLogin yes\r
\`\`\`\r
\r
* 重启 sshd 服务\r
\r
    sudo systemctl restart sshd\r
\r
## 修改 IP 地址\r
\r
ubuntu18 以后的 IP 配置文件一般存放在 /etc/netplan/****.yaml 文件中，所以修改 IP 相关信息得修改该文件。\r
\r
* sudo vi /etc/netplan/****.yaml\r
\r
文件示例：\r
\r
\`\`\`\r
network:\r
  ethernets:\r
    ens233:     #配置的网卡的名称\r
      addresses: [192.168.2.2/24]    #配置的静态ip地址和掩码\r
      dhcp4: no    #关闭DHCP，需要打开DHCP则写yes\r
      optional: true\r
      gateway4: 192.168.2.254    #网关地址\r
      nameservers:\r
         addresses: [192.168.31.1,114.114.114.114]    #DNS服务器地址，多个DNS服务器地址需要用英文逗号分隔开\r
  version: 2\r
  renderer: networkd    #指定后端采用systemd-networkd或者Network Manager，可不填写则默认使用systemd-workd\r
\`\`\`\r
\r
* 重新应用 yaml 配置文件\r
\r
    sudo netplan apply\r
`;export{n as default};
