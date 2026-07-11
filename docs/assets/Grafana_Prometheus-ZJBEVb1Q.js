const r=`---\r
title: Grafana + Prometheus 实战\r
date: 2026-05-28\r
summary: Grafana + Prometheus 实战监控部署指南\r
tags: Grafana, Prometheus, Linux\r
cover: app-orange\r
readingTime: 8 分钟\r
featured: false\r
---\r
\r
\r
# Grafana + Prometheus 实战监控部署指南\r
\r
## 1. 背景\r
\r
在日常服务器运维、WAF 测试、大模型推理服务运行过程中，我们需要实时观察：\r
\r
* CPU 使用率\r
* 内存占用\r
* 磁盘 IO\r
* 网络流量\r
* GPU 服务器负载\r
* vLLM 推理服务状态\r
* Docker 容器资源消耗\r
\r
为了实现统一监控，我们使用：\r
\r
* Prometheus 负责采集指标\r
* Grafana 负责可视化展示\r
\r
形成一套轻量、稳定、易扩展的监控体系。\r
\r
---\r
\r
# 2. 架构说明\r
\r
整体架构如下：\r
\r
\`\`\`text\r
node_exporter --> Prometheus --> Grafana\r
\`\`\`\r
\r
其中：\r
\r
| 组件            | 作用            |\r
| ------------- | ------------- |\r
| node_exporter | 采集 Linux 主机指标 |\r
| Prometheus    | 拉取并存储指标       |\r
| Grafana       | 展示监控图表        |\r
\r
---\r
\r
# 3. 环境信息\r
\r
## Prometheus\r
\r
Web 管理界面：\r
\r
\`\`\`text\r
http://10.10.121.34:9090\r
\`\`\`\r
\r
Prometheus 安装目录：\r
\r
\`\`\`bash\r
/home/riversec/prometheus-2.45.0-rc.0.linux-amd64\r
\`\`\`\r
\r
---\r
\r
## Grafana\r
\r
Web 管理界面：\r
\r
\`\`\`text\r
http://10.10.121.34:3000\r
\`\`\`\r
\r
默认账号：\r
\r
\`\`\`text\r
admin@localhost\r
\`\`\`\r
\r
默认密码：\r
\r
\`\`\`text\r
Admin123\r
\`\`\`\r
\r
Grafana 启动命令：\r
\r
\`\`\`bash\r
sudo systemctl start grafana-server\r
\`\`\`\r
\r
---\r
\r
# 4. Prometheus 配置\r
\r
## 4.1 编辑 Prometheus 配置\r
\r
登录 Prometheus 宿主机：\r
\r
\`\`\`bash\r
ssh riversec@10.10.121.34\r
\`\`\`\r
\r
进入目录：\r
\r
\`\`\`bash\r
cd /home/riversec/prometheus-2.45.0-rc.0.linux-amd64\r
\`\`\`\r
\r
编辑配置文件：\r
\r
\`\`\`bash\r
sudo vi prometheus.yml\r
\`\`\`\r
\r
添加被监控服务器：\r
\r
\`\`\`yaml\r
- job_name: "waf_server"\r
  static_configs:\r
    - targets:\r
      - 10.10.121.37:9100\r
      - 10.10.121.18:9100\r
      - 10.10.121.17:9100\r
      - 10.10.121.15:9100\r
      - 10.10.121.19:9100\r
\`\`\`\r
\r
新增节点时：\r
\r
\`\`\`yaml\r
- 10.10.121.20:9100\r
\`\`\`\r
\r
即可。\r
\r
---\r
\r
# 5. 重载 Prometheus 配置\r
\r
查看 Prometheus 进程：\r
\r
\`\`\`bash\r
ps aux | grep prometheus\r
\`\`\`\r
\r
找到 PID 后：\r
\r
\`\`\`bash\r
kill -HUP <PID>\r
\`\`\`\r
\r
Prometheus 会重新加载配置。\r
\r
如果服务未启动：\r
\r
\`\`\`bash\r
nohup ./prometheus > node.log 2>&1 &\r
\`\`\`\r
\r
---\r
\r
# 6. 部署 node_exporter\r
\r
登录被监控服务器：\r
\r
\`\`\`bash\r
ssh root@10.10.121.20\r
\`\`\`\r
\r
下载 exporter：\r
\r
\`\`\`bash\r
wget http://10.10.8.250/temp/Safeplus/prometheus/node_exporter-1.6.0.linux-amd64.tar.gz\r
\`\`\`\r
\r
解压：\r
\r
\`\`\`bash\r
tar -zxvf node_exporter-1.6.0.linux-amd64.tar.gz\r
\`\`\`\r
\r
进入目录：\r
\r
\`\`\`bash\r
cd node_exporter-1.6.0.linux-amd64\r
\`\`\`\r
\r
启动 exporter：\r
\r
\`\`\`bash\r
nohup ./node_exporter > node.log 2>&1 &\r
\`\`\`\r
\r
默认监听端口：\r
\r
\`\`\`text\r
9100\r
\`\`\`\r
\r
---\r
\r
# 7. 验证监控状态\r
\r
打开：\r
\r
\`\`\`text\r
http://10.10.121.34:9090/targets\r
\`\`\`\r
\r
查看：\r
\r
\`\`\`text\r
State = UP\r
\`\`\`\r
\r
说明采集成功。\r
\r
如果状态为 DOWN：\r
\r
需要检查：\r
\r
* 9100 端口是否开放\r
* 防火墙\r
* exporter 是否启动\r
* 网络连通性\r
\r
---\r
\r
# 8. Grafana 可视化\r
\r
Grafana：\r
\r
\`\`\`text\r
http://10.10.121.34:3000\r
\`\`\`\r
\r
登录后：\r
\r
## 添加数据源\r
\r
选择：\r
\r
\`\`\`text\r
Prometheus\r
\`\`\`\r
\r
数据源地址：\r
\r
\`\`\`text\r
http://10.10.121.34:9090\r
\`\`\`\r
\r
保存即可。\r
\r
---\r
\r
# 9. 推荐监控面板\r
\r
推荐导入：\r
\r
## Node Exporter Full\r
\r
Grafana Dashboard ID：\r
\r
\`\`\`text\r
1860\r
\`\`\`\r
\r
包含：\r
\r
* CPU\r
* Load\r
* Memory\r
* Disk\r
* Network\r
* Filesystem\r
* TCP\r
\r
等完整监控。\r
\r
---\r
\r
# 10. GPU / AI 服务监控建议\r
\r
对于：\r
\r
* vLLM\r
* GPU 推理\r
* embedding 服务\r
\r
建议额外监控：\r
\r
## GPU 指标\r
\r
例如：\r
\r
* GPU Utilization\r
* VRAM\r
* 温度\r
* 功耗\r
\r
国产 GPU 环境：\r
\r
可以结合：\r
\r
\`\`\`bash\r
hy-smi\r
\`\`\`\r
\r
或者：\r
\r
\`\`\`bash\r
rocm-smi\r
\`\`\`\r
\r
进行指标采集。\r
\r
---\r
\r
\r
# 11. 告警建议\r
\r
Prometheus 可结合 Alertmanager：\r
\r
实现：\r
\r
* CPU 高负载告警\r
* 内存不足\r
* GPU OOM\r
* 服务 DOWN\r
* 磁盘满\r
\r
并推送：\r
\r
* Slack\r
* 企业微信\r
* 飞书\r
* 邮件\r
\r
---\r
\r
# 12. 实际应用场景\r
\r
目前该监控体系已用于：\r
\r
* WAF 服务监控\r
* GPU 推理集群\r
* vLLM 服务\r
* embedding 模型\r
* Docker 容器\r
* OpenResty 网关\r
* AI 安全平台\r
\r
能够快速发现：\r
\r
* 服务异常\r
* GPU 负载过高\r
* 内存泄漏\r
* 网络异常\r
* 模型服务崩溃\r
\r
---\r
\r
# 13. 总结\r
\r
Prometheus + Grafana 是目前最主流的开源监控方案之一。\r
\r
优点：\r
\r
* 部署简单\r
* 扩展性强\r
* 可视化优秀\r
* 云原生友好\r
* 适合 AI/GPU 场景\r
\r
对于：\r
\r
* AI 平台\r
* GPU 推理\r
* 大模型服务\r
* Docker 集群\r
\r
都非常适合。\r
`;export{r as default};
