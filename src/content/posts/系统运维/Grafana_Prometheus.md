---
title: Grafana + Prometheus 实战
date: 2026-05-28
summary: Grafana + Prometheus 实战监控部署指南
tags: Grafana, Prometheus, Linux
cover: app-orange
readingTime: 8 分钟
featured: false
---


# Grafana + Prometheus 实战监控部署指南

## 1. 背景

在日常服务器运维、WAF 测试、大模型推理服务运行过程中，我们需要实时观察：

* CPU 使用率
* 内存占用
* 磁盘 IO
* 网络流量
* GPU 服务器负载
* vLLM 推理服务状态
* Docker 容器资源消耗

为了实现统一监控，我们使用：

* Prometheus 负责采集指标
* Grafana 负责可视化展示

形成一套轻量、稳定、易扩展的监控体系。

---

# 2. 架构说明

整体架构如下：

```text
node_exporter --> Prometheus --> Grafana
```

其中：

| 组件            | 作用            |
| ------------- | ------------- |
| node_exporter | 采集 Linux 主机指标 |
| Prometheus    | 拉取并存储指标       |
| Grafana       | 展示监控图表        |

---

# 3. 环境信息

## Prometheus

Web 管理界面：

```text
http://10.10.121.34:9090
```

Prometheus 安装目录：

```bash
/home/riversec/prometheus-2.45.0-rc.0.linux-amd64
```

---

## Grafana

Web 管理界面：

```text
http://10.10.121.34:3000
```

默认账号：

```text
admin@localhost
```

默认密码：

```text
Admin123
```

Grafana 启动命令：

```bash
sudo systemctl start grafana-server
```

---

# 4. Prometheus 配置

## 4.1 编辑 Prometheus 配置

登录 Prometheus 宿主机：

```bash
ssh riversec@10.10.121.34
```

进入目录：

```bash
cd /home/riversec/prometheus-2.45.0-rc.0.linux-amd64
```

编辑配置文件：

```bash
sudo vi prometheus.yml
```

添加被监控服务器：

```yaml
- job_name: "waf_server"
  static_configs:
    - targets:
      - 10.10.121.37:9100
      - 10.10.121.18:9100
      - 10.10.121.17:9100
      - 10.10.121.15:9100
      - 10.10.121.19:9100
```

新增节点时：

```yaml
- 10.10.121.20:9100
```

即可。

---

# 5. 重载 Prometheus 配置

查看 Prometheus 进程：

```bash
ps aux | grep prometheus
```

找到 PID 后：

```bash
kill -HUP <PID>
```

Prometheus 会重新加载配置。

如果服务未启动：

```bash
nohup ./prometheus > node.log 2>&1 &
```

---

# 6. 部署 node_exporter

登录被监控服务器：

```bash
ssh root@10.10.121.20
```

下载 exporter：

```bash
wget http://10.10.8.250/temp/Safeplus/prometheus/node_exporter-1.6.0.linux-amd64.tar.gz
```

解压：

```bash
tar -zxvf node_exporter-1.6.0.linux-amd64.tar.gz
```

进入目录：

```bash
cd node_exporter-1.6.0.linux-amd64
```

启动 exporter：

```bash
nohup ./node_exporter > node.log 2>&1 &
```

默认监听端口：

```text
9100
```

---

# 7. 验证监控状态

打开：

```text
http://10.10.121.34:9090/targets
```

查看：

```text
State = UP
```

说明采集成功。

如果状态为 DOWN：

需要检查：

* 9100 端口是否开放
* 防火墙
* exporter 是否启动
* 网络连通性

---

# 8. Grafana 可视化

Grafana：

```text
http://10.10.121.34:3000
```

登录后：

## 添加数据源

选择：

```text
Prometheus
```

数据源地址：

```text
http://10.10.121.34:9090
```

保存即可。

---

# 9. 推荐监控面板

推荐导入：

## Node Exporter Full

Grafana Dashboard ID：

```text
1860
```

包含：

* CPU
* Load
* Memory
* Disk
* Network
* Filesystem
* TCP

等完整监控。

---

# 10. GPU / AI 服务监控建议

对于：

* vLLM
* GPU 推理
* embedding 服务

建议额外监控：

## GPU 指标

例如：

* GPU Utilization
* VRAM
* 温度
* 功耗

国产 GPU 环境：

可以结合：

```bash
hy-smi
```

或者：

```bash
rocm-smi
```

进行指标采集。

---


# 11. 告警建议

Prometheus 可结合 Alertmanager：

实现：

* CPU 高负载告警
* 内存不足
* GPU OOM
* 服务 DOWN
* 磁盘满

并推送：

* Slack
* 企业微信
* 飞书
* 邮件

---

# 12. 实际应用场景

目前该监控体系已用于：

* WAF 服务监控
* GPU 推理集群
* vLLM 服务
* embedding 模型
* Docker 容器
* OpenResty 网关
* AI 安全平台

能够快速发现：

* 服务异常
* GPU 负载过高
* 内存泄漏
* 网络异常
* 模型服务崩溃

---

# 13. 总结

Prometheus + Grafana 是目前最主流的开源监控方案之一。

优点：

* 部署简单
* 扩展性强
* 可视化优秀
* 云原生友好
* 适合 AI/GPU 场景

对于：

* AI 平台
* GPU 推理
* 大模型服务
* Docker 集群

都非常适合。
