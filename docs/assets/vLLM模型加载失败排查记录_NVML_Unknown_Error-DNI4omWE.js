const n=`---\r
title: vLLM 模型加载失败排查记录：Failed to infer device type 与 NVML Unknown Error\r
date: 2026-07-17\r
summary: 使用 vLLM 部署开源大模型时，Docker 容器无法初始化 NVML 导致启动失败的完整排查过程与解决方案。\r
tags: vLLM, Docker, GPU, NVIDIA, 故障排查\r
cover: app-blue\r
readingTime: 8 分钟\r
featured: false\r
---\r
\r
## 背景\r
\r
使用 vLLM 部署 Qwen2.5-7B-Instruct 开源大模型时，启动容器失败。\r
\r
环境：\r
\r
| 项目 | 信息 |\r
|------|------|\r
| GPU | NVIDIA GeForce RTX 3090 × 3 |\r
| 显存 | 24GB × 3 |\r
| Driver | 575.51.03 |\r
| CUDA | 12.9 |\r
| vLLM | v0.12.0 |\r
| Docker | NVIDIA Container Runtime |\r
\r
目标：通过 vLLM 提供 OpenAI 兼容接口 \`/v1/chat/completions\`。\r
\r
## 一、故障现象\r
\r
启动 vLLM：\r
\r
\`\`\`bash\r
docker run -d \\\r
  --name qwen25-7b \\\r
  --gpus all \\\r
  vllm/vllm-openai:v0.12.0 \\\r
  --model /models/Qwen2.5-7B-Instruct\r
\`\`\`\r
\r
报错：\r
\r
\`\`\`text\r
Can't initialize NVML\r
\r
Triton is installed but no active driver(s) found\r
\r
RuntimeError:\r
Failed to infer device type\r
\`\`\`\r
\r
## 二、排查过程\r
\r
### 1. 检查宿主机 GPU\r
\r
\`\`\`bash\r
nvidia-smi\r
\`\`\`\r
\r
结果：\r
\r
\`\`\`text\r
Driver Version: 575.51.03\r
CUDA Version: 12.9\r
\r
GPU 0  NVIDIA GeForce RTX 3090\r
GPU 1  NVIDIA GeForce RTX 3090\r
GPU 2  NVIDIA GeForce RTX 3090\r
\`\`\`\r
\r
**结论：** GPU 正常，NVIDIA 驱动正常。\r
\r
### 2. 检查 NVIDIA Container Toolkit\r
\r
\`\`\`bash\r
nvidia-container-cli info\r
\`\`\`\r
\r
可以识别：\r
\r
\`\`\`text\r
Device Index: 0\r
Model: NVIDIA GeForce RTX 3090\r
\r
Device Index: 1\r
Model: NVIDIA GeForce RTX 3090\r
\r
Device Index: 2\r
Model: NVIDIA GeForce RTX 3090\r
\`\`\`\r
\r
**结论：** NVIDIA Container Toolkit 正常，容器工具链可以发现 GPU。\r
\r
### 3. Docker 容器测试 GPU\r
\r
\`\`\`bash\r
docker run --rm \\\r
  --gpus all \\\r
  nvidia/cuda:12.4.1-base-ubuntu22.04 \\\r
  nvidia-smi\r
\`\`\`\r
\r
结果：\r
\r
\`\`\`text\r
Failed to initialize NVML: Unknown Error\r
\`\`\`\r
\r
**结论：** 宿主机 GPU 正常，但 Docker 容器无法初始化 NVML。\r
\r
## 三、进一步定位\r
\r
检查容器中的 NVIDIA 驱动库：\r
\r
\`\`\`bash\r
docker run --rm \\\r
  --runtime=nvidia \\\r
  ubuntu:22.04 \\\r
  ls /usr/lib/x86_64-linux-gnu/libnvidia*\r
\`\`\`\r
\r
发现：\r
\r
\`\`\`text\r
No such file or directory\r
\`\`\`\r
\r
缺少 \`libnvidia-ml.so\` 和 \`libcuda.so\`。而 \`nvidia-smi\` 依赖 \`libnvidia-ml.so\`，调用链如下：\r
\r
\`\`\`text\r
nvidia-smi\r
    │\r
    ▼\r
libnvidia-ml.so\r
    │\r
    ✗（缺失）\r
\`\`\`\r
\r
## 四、根因分析\r
\r
检查 NVIDIA Container Runtime 配置：\r
\r
\`\`\`bash\r
cat /etc/nvidia-container-runtime/config.toml\r
\`\`\`\r
\r
发现：\r
\r
\`\`\`toml\r
[nvidia-container-cli]\r
no-cgroups = true\r
\`\`\`\r
\r
\`no-cgroups = true\` 适用于 LXC、rootless 环境或特殊 Kubernetes 环境，普通 Docker GPU 环境不应该开启。\r
\r
**根因：** 该配置导致 NVIDIA Container Runtime 没有正确向 Docker 容器注入 NVIDIA 驱动库，从而 NVML 初始化失败。\r
\r
## 五、解决方案\r
\r
修改配置文件：\r
\r
\`\`\`bash\r
vim /etc/nvidia-container-runtime/config.toml\r
\`\`\`\r
\r
将：\r
\r
\`\`\`toml\r
no-cgroups = true\r
\`\`\`\r
\r
改为：\r
\r
\`\`\`toml\r
no-cgroups = false\r
\`\`\`\r
\r
或者直接注释掉：\r
\r
\`\`\`toml\r
# no-cgroups = true\r
\`\`\`\r
\r
重新生成 Docker runtime 并重启 Docker：\r
\r
\`\`\`bash\r
nvidia-ctk runtime configure --runtime=docker\r
systemctl restart docker\r
\`\`\`\r
\r
## 六、验证\r
\r
\`\`\`bash\r
docker run --rm \\\r
  --runtime=nvidia \\\r
  --gpus all \\\r
  nvidia/cuda:12.4.1-base-ubuntu22.04 \\\r
  nvidia-smi\r
\`\`\`\r
\r
正常输出：\r
\r
\`\`\`text\r
NVIDIA-SMI 575.51.03\r
\r
GPU 0  RTX 3090\r
GPU 1  RTX 3090\r
GPU 2  RTX 3090\r
\`\`\`\r
\r
## 七、最终 vLLM 启动命令\r
\r
\`\`\`bash\r
docker run -d \\\r
  --name qwen25-7b \\\r
  --runtime=nvidia \\\r
  --gpus '"device=0"' \\\r
  -p 8000:8000 \\\r
  -v ./models/Qwen2.5-7B-Instruct:/models/Qwen2.5-7B-Instruct:ro \\\r
  vllm/vllm-openai:v0.12.0 \\\r
  --model /models/Qwen2.5-7B-Instruct \\\r
  --host 0.0.0.0 \\\r
  --port 8000 \\\r
  --served-model-name Qwen2.5-7B-Instruct \\\r
  --tensor-parallel-size 1 \\\r
  --gpu-memory-utilization 0.5 \\\r
  --max-model-len 32768\r
\`\`\`\r
\r
## 八、经验总结\r
\r
### 不要优先怀疑 CUDA 版本\r
\r
\`Failed to infer device type\` 不是典型 CUDA 版本错误。CUDA 不匹配通常会提示：\r
\r
\`\`\`text\r
CUDA driver version is insufficient\r
\`\`\`\r
\r
### 推荐排查顺序\r
\r
\`\`\`text\r
1. nvidia-smi\r
        │\r
        ▼\r
2. nvidia-container-cli info\r
        │\r
        ▼\r
3. docker run nvidia-smi\r
        │\r
        ▼\r
4. 检查 NVIDIA Runtime 注入\r
\`\`\`\r
\r
> **最终根因：** NVIDIA Container Runtime 未正确向 Docker 容器注入 NVIDIA 驱动库，导致 NVML 初始化失败。\r
>\r
> **解决方案：** 修复 \`nvidia-container-runtime\` 配置，使容器能够正常加载 NVIDIA 驱动库。\r
`;export{n as default};
