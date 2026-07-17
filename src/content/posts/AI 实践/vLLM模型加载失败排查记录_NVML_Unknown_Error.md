---
title: vLLM 模型加载失败排查记录：Failed to infer device type 与 NVML Unknown Error
date: 2026-07-17
summary: 使用 vLLM 部署开源大模型时，Docker 容器无法初始化 NVML 导致启动失败的完整排查过程与解决方案。
tags: vLLM, Docker, GPU, NVIDIA, 故障排查
cover: app-blue
readingTime: 8 分钟
featured: false
---

## 背景

使用 vLLM 部署 Qwen2.5-7B-Instruct 开源大模型时，启动容器失败。

环境：

| 项目 | 信息 |
|------|------|
| GPU | NVIDIA GeForce RTX 3090 × 3 |
| 显存 | 24GB × 3 |
| Driver | 575.51.03 |
| CUDA | 12.9 |
| vLLM | v0.12.0 |
| Docker | NVIDIA Container Runtime |

目标：通过 vLLM 提供 OpenAI 兼容接口 `/v1/chat/completions`。

## 一、故障现象

启动 vLLM：

```bash
docker run -d \
  --name qwen25-7b \
  --gpus all \
  vllm/vllm-openai:v0.12.0 \
  --model /models/Qwen2.5-7B-Instruct
```

报错：

```text
Can't initialize NVML

Triton is installed but no active driver(s) found

RuntimeError:
Failed to infer device type
```

## 二、排查过程

### 1. 检查宿主机 GPU

```bash
nvidia-smi
```

结果：

```text
Driver Version: 575.51.03
CUDA Version: 12.9

GPU 0  NVIDIA GeForce RTX 3090
GPU 1  NVIDIA GeForce RTX 3090
GPU 2  NVIDIA GeForce RTX 3090
```

**结论：** GPU 正常，NVIDIA 驱动正常。

### 2. 检查 NVIDIA Container Toolkit

```bash
nvidia-container-cli info
```

可以识别：

```text
Device Index: 0
Model: NVIDIA GeForce RTX 3090

Device Index: 1
Model: NVIDIA GeForce RTX 3090

Device Index: 2
Model: NVIDIA GeForce RTX 3090
```

**结论：** NVIDIA Container Toolkit 正常，容器工具链可以发现 GPU。

### 3. Docker 容器测试 GPU

```bash
docker run --rm \
  --gpus all \
  nvidia/cuda:12.4.1-base-ubuntu22.04 \
  nvidia-smi
```

结果：

```text
Failed to initialize NVML: Unknown Error
```

**结论：** 宿主机 GPU 正常，但 Docker 容器无法初始化 NVML。

## 三、进一步定位

检查容器中的 NVIDIA 驱动库：

```bash
docker run --rm \
  --runtime=nvidia \
  ubuntu:22.04 \
  ls /usr/lib/x86_64-linux-gnu/libnvidia*
```

发现：

```text
No such file or directory
```

缺少 `libnvidia-ml.so` 和 `libcuda.so`。而 `nvidia-smi` 依赖 `libnvidia-ml.so`，调用链如下：

```text
nvidia-smi
    │
    ▼
libnvidia-ml.so
    │
    ✗（缺失）
```

## 四、根因分析

检查 NVIDIA Container Runtime 配置：

```bash
cat /etc/nvidia-container-runtime/config.toml
```

发现：

```toml
[nvidia-container-cli]
no-cgroups = true
```

`no-cgroups = true` 适用于 LXC、rootless 环境或特殊 Kubernetes 环境，普通 Docker GPU 环境不应该开启。

**根因：** 该配置导致 NVIDIA Container Runtime 没有正确向 Docker 容器注入 NVIDIA 驱动库，从而 NVML 初始化失败。

## 五、解决方案

修改配置文件：

```bash
vim /etc/nvidia-container-runtime/config.toml
```

将：

```toml
no-cgroups = true
```

改为：

```toml
no-cgroups = false
```

或者直接注释掉：

```toml
# no-cgroups = true
```

重新生成 Docker runtime 并重启 Docker：

```bash
nvidia-ctk runtime configure --runtime=docker
systemctl restart docker
```

## 六、验证

```bash
docker run --rm \
  --runtime=nvidia \
  --gpus all \
  nvidia/cuda:12.4.1-base-ubuntu22.04 \
  nvidia-smi
```

正常输出：

```text
NVIDIA-SMI 575.51.03

GPU 0  RTX 3090
GPU 1  RTX 3090
GPU 2  RTX 3090
```

## 七、最终 vLLM 启动命令

```bash
docker run -d \
  --name qwen25-7b \
  --runtime=nvidia \
  --gpus '"device=0"' \
  -p 8000:8000 \
  -v ./models/Qwen2.5-7B-Instruct:/models/Qwen2.5-7B-Instruct:ro \
  vllm/vllm-openai:v0.12.0 \
  --model /models/Qwen2.5-7B-Instruct \
  --host 0.0.0.0 \
  --port 8000 \
  --served-model-name Qwen2.5-7B-Instruct \
  --tensor-parallel-size 1 \
  --gpu-memory-utilization 0.5 \
  --max-model-len 32768
```

## 八、经验总结

### 不要优先怀疑 CUDA 版本

`Failed to infer device type` 不是典型 CUDA 版本错误。CUDA 不匹配通常会提示：

```text
CUDA driver version is insufficient
```

### 推荐排查顺序

```text
1. nvidia-smi
        │
        ▼
2. nvidia-container-cli info
        │
        ▼
3. docker run nvidia-smi
        │
        ▼
4. 检查 NVIDIA Runtime 注入
```

> **最终根因：** NVIDIA Container Runtime 未正确向 Docker 容器注入 NVIDIA 驱动库，导致 NVML 初始化失败。
>
> **解决方案：** 修复 `nvidia-container-runtime` 配置，使容器能够正常加载 NVIDIA 驱动库。
