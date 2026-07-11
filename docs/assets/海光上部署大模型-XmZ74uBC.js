const r=`---\r
title: 在海光 DCU 服务器上部署 Qwen3Guard-Gen-8B、bge-m3 与 Qwen\r
date: 2026-05-28\r
summary: 记录在海光 DCU 环境中使用 Docker 和 vLLM 部署内容安全模型、Embedding 模型和通用大模型的实践，并整理日常巡检、接口验证和常见故障处理方法。\r
tags: 海光DCU, 大模型部署, Qwen3Guard, vLLM, bge-m3\r
cover: app-blue\r
readingTime: 10 分钟\r
featured: true\r
---\r
\r
# 在海光 DCU 服务器上部署 Qwen3Guard-Gen-8B、bge-m3 与 Qwen\r
\r
这篇文章整理一次在海光 DCU 服务器上部署大模型服务的实践。目标是把内容安全审核、文本向量化和通用问答能力分别部署成 OpenAI 兼容接口，方便业务系统通过统一协议调用。\r
\r
其中需要特别说明的是：本文中的 \`rsguard_v1\` 是本地服务别名，它对应的实际开源模型是 \`Qwen3Guard-Gen-8B\`。\r
\r
也就是说：\r
\r
- 模型能力：\`Qwen3Guard-Gen-8B\`\r
- 本地模型目录：\`/home/ubuntu/models/rsguard_v1\`\r
- 容器内模型路径：\`/data/rsguard_v1/rsguard_v1\`\r
- vLLM 暴露的服务名：\`rsguard:v1\`\r
- 接口类型：OpenAI Chat Completions\r
\r
这里保留 \`rsguard:v1\` 作为请求体中的 \`model\` 名，是为了让业务侧使用稳定的服务名。底层模型可以明确记录为 \`Qwen3Guard-Gen-8B\`，但调用方不必直接感知模型文件目录和模型来源。\r
\r
## 设备概览\r
\r
本次部署环境如下：\r
\r
| 项目 | 配置 |\r
| --- | --- |\r
| 设备 IP | \`10.6.69.241\` |\r
| 操作系统 | Ubuntu Linux |\r
| 内核版本 | \`5.15.0-177-generic\` |\r
| CPU 架构 | \`x86_64\` |\r
| CPU 型号 | Hygon C86 7390 32-core Processor |\r
| CPU 规格 | 2 Socket，每 Socket 32 Core，每 Core 2 Thread，共 128 逻辑 CPU |\r
| NUMA 节点 | 8 个 NUMA 节点 |\r
| 内存 | 251 GiB |\r
| Swap | 8 GiB |\r
| DCU 数量 | 2 张 |\r
\r
查看 CPU 信息：\r
\r
\`\`\`bash\r
lscpu\r
\`\`\`\r
\r
查看内存：\r
\r
\`\`\`bash\r
free -h\r
\`\`\`\r
\r
查看 DCU：\r
\r
\`\`\`bash\r
hy-smi\r
\`\`\`\r
\r
日常重点关注 \`Temp\`、\`VRAM%\`、\`DCU%\` 和设备状态。如果显存长期接近 100%，后续启动新模型或提高上下文长度时很容易触发 OOM。\r
\r
## 模型与服务规划\r
\r
本次服务器上维护三个服务：\r
\r
| 服务 | 容器名 | 模型能力 | 服务模型名 | 端口 | 接口 |\r
| --- | --- | --- | --- | --- | --- |\r
| bge-m3 向量模型 | \`bge-m3\` | Embedding | \`bge-m3\` | \`20195\` | \`/v1/embeddings\` |\r
| 内容安全模型 | \`rsguard-v1\` | Qwen3Guard-Gen-8B | \`rsguard:v1\` | \`20197\` | \`/v1/chat/completions\` |\r
| Qwen 通用大模型 | \`qwen3.5-4B\` | Qwen 通用问答 | \`Qwen3_6:35BA3B\` | \`20198\` | \`/v1/chat/completions\` |\r
\r
访问地址：\r
\r
\`\`\`text\r
http://10.6.69.241:20195/v1/embeddings\r
http://10.6.69.241:20197/v1/chat/completions\r
http://10.6.69.241:20198/v1/chat/completions\r
\`\`\`\r
\r
模型目录：\r
\r
| 模型 | 存储路径 |\r
| --- | --- |\r
| bge-m3 | \`/home/ubuntu/models/bge-m3\` |\r
| Qwen3Guard-Gen-8B | \`/home/ubuntu/models/rsguard_v1\` |\r
| Qwen 系列 | \`/home/ubuntu/.cache/modelscope/hub/models/Qwen/\` |\r
\r
## 日常巡检\r
\r
### 系统状态\r
\r
\`\`\`bash\r
uname -a\r
uptime\r
free -h\r
df -h\r
\`\`\`\r
\r
重点看三类问题：\r
\r
- 内存可用量是否充足。\r
- 根分区、模型目录所在分区是否接近写满。\r
- 系统负载是否长期高于 CPU 核数。\r
\r
### DCU 状态\r
\r
\`\`\`bash\r
hy-smi\r
\`\`\`\r
\r
关注项：\r
\r
- \`Temp\` 温度是否异常升高。\r
- \`VRAM%\` 是否长期接近 100%。\r
- \`DCU%\` 是否符合业务调用情况。\r
- 设备状态是否为 \`Normal\`。\r
\r
### 容器状态\r
\r
\`\`\`bash\r
docker ps\r
docker stats\r
\`\`\`\r
\r
查看日志：\r
\r
\`\`\`bash\r
docker logs --tail 200 bge-m3\r
docker logs --tail 200 rsguard-v1\r
docker logs --tail 200 qwen3.5-4B\r
\`\`\`\r
\r
持续观察：\r
\r
\`\`\`bash\r
docker logs -f bge-m3\r
docker logs -f rsguard-v1\r
docker logs -f qwen3.5-4B\r
\`\`\`\r
\r
### 端口监听\r
\r
\`\`\`bash\r
ss -lntp | grep -E '20195|20197|20198'\r
\`\`\`\r
\r
## 启动 bge-m3 Embedding 服务\r
\r
\`bge-m3\` 使用 DCU 0，提供 OpenAI Embeddings 接口。\r
\r
\`\`\`bash\r
docker run -d \\\r
  --shm-size 20g \\\r
  --network=host \\\r
  --name bge-m3 \\\r
  --privileged \\\r
  --device=/dev/kfd \\\r
  --device=/dev/dri \\\r
  --device=/dev/mkfd \\\r
  --group-add video \\\r
  --cap-add=SYS_PTRACE \\\r
  --security-opt seccomp=unconfined \\\r
  -v /opt/hyhal/:/opt/hyhal \\\r
  -v /home/ubuntu/models/:/data \\\r
  -e HIP_VISIBLE_DEVICES=0 \\\r
  -e ROCR_VISIBLE_DEVICES=0 \\\r
  image.sourcefind.cn:5000/dcu/admin/base/vllm:0.8.5-ubuntu22.04-dtk25.04.1-py3.10 \\\r
  python3 -m vllm.entrypoints.openai.api_server \\\r
  --model /data/bge-m3 \\\r
  --host 0.0.0.0 \\\r
  --port 20195 \\\r
  --served-model-name bge-m3 \\\r
  --tensor-parallel-size 1 \\\r
  --dtype half \\\r
  --task embedding \\\r
  --gpu-memory-utilization 0.2\r
\`\`\`\r
\r
验证：\r
\r
\`\`\`bash\r
curl http://10.6.69.241:20195/v1/embeddings \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "bge-m3",\r
    "input": "测试文本"\r
  }'\r
\`\`\`\r
\r
## 启动 Qwen3Guard-Gen-8B 内容安全服务\r
\r
\`rsguard_v1\` 服务使用 DCU 1，底层模型为 \`Qwen3Guard-Gen-8B\`。这里通过 \`--served-model-name rsguard:v1\` 暴露一个业务侧服务名。\r
\r
\`\`\`bash\r
docker run -d \\\r
  --shm-size 20g \\\r
  --network=host \\\r
  --name rsguard-v1 \\\r
  --privileged \\\r
  --device=/dev/kfd \\\r
  --device=/dev/dri \\\r
  --device=/dev/mkfd \\\r
  --group-add video \\\r
  --cap-add=SYS_PTRACE \\\r
  --security-opt seccomp=unconfined \\\r
  -v /opt/hyhal/:/opt/hyhal \\\r
  -v /home/ubuntu/models/:/data \\\r
  -e HIP_VISIBLE_DEVICES=1 \\\r
  image.sourcefind.cn:5000/dcu/admin/base/vllm:0.8.5-ubuntu22.04-dtk25.04.1-py3.10 \\\r
  vllm serve /data/rsguard_v1/rsguard_v1 \\\r
  --served-model-name rsguard:v1 \\\r
  --gpu-memory-utilization 0.2 \\\r
  --port 20197 \\\r
  --host 0.0.0.0\r
\`\`\`\r
\r
验证：\r
\r
\`\`\`bash\r
curl http://10.6.69.241:20197/v1/chat/completions \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "rsguard:v1",\r
    "messages": [\r
      {\r
        "role": "user",\r
        "content": "你好"\r
      }\r
    ]\r
  }'\r
\`\`\`\r
\r
如果希望接口层直接暴露 \`Qwen3Guard-Gen-8B\` 作为模型名，需要把启动参数改为：\r
\r
\`\`\`bash\r
--served-model-name Qwen3Guard-Gen-8B\r
\`\`\`\r
\r
同时调用方请求体也要改成：\r
\r
\`\`\`json\r
{"model": "Qwen3Guard-Gen-8B"}\r
\`\`\`\r
\r
已经接入业务后不建议随意改这个字段，因为它会影响所有调用方。\r
\r
## 启动 Qwen 通用大模型服务\r
\r
Qwen 通用大模型使用 2 张 DCU，容器启动后需要进入容器内启动 vLLM。\r
\r
创建容器：\r
\r
\`\`\`bash\r
docker run -it -d \\\r
  --shm-size 200g \\\r
  --network=host \\\r
  --name qwen3.5-4B \\\r
  --privileged \\\r
  --device=/dev/kfd \\\r
  --device=/dev/dri \\\r
  --device=/dev/mkfd \\\r
  --group-add video \\\r
  --cap-add=SYS_PTRACE \\\r
  --security-opt seccomp=unconfined \\\r
  -v /opt/hyhal/:/opt/hyhal \\\r
  -v /home/ubuntu/.cache/modelscope/hub/models/Qwen/:/data \\\r
  harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm018-ubuntu22.04-dtk26.04-gemma4-0413 bash\r
\`\`\`\r
\r
进入容器：\r
\r
\`\`\`bash\r
docker exec -it qwen3.5-4B bash\r
\`\`\`\r
\r
容器内启动：\r
\r
\`\`\`bash\r
#!/usr/bin/env bash\r
set -e\r
\r
MODEL_PATH="/data/Qwen3___6-35B-A3B/"\r
MODEL_NAME="Qwen3_6:35BA3B"\r
PORT=20198\r
GPU_NUM=2\r
\r
pkill -f "vllm serve" || true\r
\r
export PYTORCH_HIP_ALLOC_CONF=expandable_segments:True\r
export VLLM_USE_TRITON_FLASH_ATTN=1\r
\r
vllm serve \\\r
  "$MODEL_PATH" \\\r
  --served-model-name "$MODEL_NAME" \\\r
  --port "$PORT" \\\r
  --trust-remote-code \\\r
  --dtype bfloat16 \\\r
  --max-model-len 100000 \\\r
  --tensor-parallel-size "$GPU_NUM" \\\r
  --gpu-memory-utilization 0.75 \\\r
  --block-size 64 \\\r
  --reasoning-parser qwen3 \\\r
  --enable-auto-tool-choice \\\r
  --tool-call-parser qwen3_coder \\\r
  --default-chat-template-kwargs '{"enable_thinking": false}'\r
\`\`\`\r
\r
验证：\r
\r
\`\`\`bash\r
curl http://10.6.69.241:20198/v1/chat/completions \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "Qwen3_6:35BA3B",\r
    "messages": [\r
      {\r
        "role": "user",\r
        "content": "你好"\r
      }\r
    ]\r
  }'\r
\`\`\`\r
\r
## 停止与重启\r
\r
停止服务：\r
\r
\`\`\`bash\r
docker stop bge-m3\r
docker stop rsguard-v1\r
docker stop qwen3.5-4B\r
\`\`\`\r
\r
删除已停止容器：\r
\r
\`\`\`bash\r
docker rm bge-m3\r
docker rm rsguard-v1\r
docker rm qwen3.5-4B\r
\`\`\`\r
\r
重启服务：\r
\r
\`\`\`bash\r
docker restart bge-m3\r
docker restart rsguard-v1\r
docker restart qwen3.5-4B\r
\`\`\`\r
\r
如果需要修改启动参数，建议停止并删除旧容器后重新执行 \`docker run\`。尤其是 \`model\` 名、端口、模型路径、显存占用比例等参数，修改后都需要重新验证调用方。\r
\r
## 常见故障处理\r
\r
### 容器名称冲突\r
\r
现象：\r
\r
\`\`\`text\r
Conflict. The container name is already in use\r
\`\`\`\r
\r
处理：\r
\r
\`\`\`bash\r
docker ps -a | grep -E 'bge-m3|rsguard-v1|qwen3.5-4B'\r
docker stop <container_name>\r
docker rm <container_name>\r
\`\`\`\r
\r
然后重新执行启动命令。\r
\r
### 端口被占用\r
\r
检查：\r
\r
\`\`\`bash\r
ss -lntp | grep -E '20195|20197|20198'\r
\`\`\`\r
\r
处理思路：\r
\r
- 确认占用端口的进程是否为目标模型服务。\r
- 如果是旧服务进程，先停止旧容器或在容器内执行 \`pkill -f "vllm serve"\`。\r
- 如果需要更换端口，同步修改启动参数和调用方配置。\r
\r
### DCU 显存不足\r
\r
常见现象：\r
\r
- vLLM 启动失败。\r
- 日志出现 out of memory 或显存分配失败。\r
\r
检查：\r
\r
\`\`\`bash\r
hy-smi\r
docker ps\r
docker logs --tail 200 <container_name>\r
\`\`\`\r
\r
处理：\r
\r
- 降低 \`--gpu-memory-utilization\`。\r
- 降低 \`--max-model-len\`。\r
- 确认同一张 DCU 上没有其他高显存进程。\r
- 对多卡模型确认 \`--tensor-parallel-size\` 与可用 DCU 数量匹配。\r
\r
### 模型路径错误\r
\r
检查模型目录：\r
\r
\`\`\`bash\r
ls -lh /home/ubuntu/models/\r
ls -lh /home/ubuntu/.cache/modelscope/hub/models/Qwen/\r
\`\`\`\r
\r
处理：\r
\r
- 确认宿主机目录存在。\r
- 确认 Docker \`-v\` 挂载路径正确。\r
- 确认容器内模型路径与启动参数一致。\r
\r
### DCU 设备不可见\r
\r
检查设备：\r
\r
\`\`\`bash\r
ls -l /dev/kfd /dev/dri /dev/mkfd\r
hy-smi\r
\`\`\`\r
\r
处理：\r
\r
- 确认容器启动参数包含 \`--device=/dev/kfd\`、\`--device=/dev/dri\`、\`--device=/dev/mkfd\`。\r
- 确认容器启动参数包含 \`--group-add video\` 和 \`--privileged\`。\r
- 确认环境变量 \`HIP_VISIBLE_DEVICES\` 或 \`ROCR_VISIBLE_DEVICES\` 指向正确 DCU。\r
\r
### model 字段不匹配\r
\r
请求体中的 \`model\` 必须与服务启动时的 \`--served-model-name\` 一致。\r
\r
当前服务对应关系：\r
\r
\`\`\`text\r
bge-m3      -> model: bge-m3\r
rsguard_v1  -> model: rsguard:v1\r
Qwen        -> model: Qwen3_6:35BA3B\r
\`\`\`\r
\r
其中 \`rsguard_v1\` 的底层开源模型是 \`Qwen3Guard-Gen-8B\`，但接口层模型名是 \`rsguard:v1\`。如果调用时传 \`Qwen3Guard-Gen-8B\`，而服务启动参数没有同步修改，就会出现模型名不匹配。\r
\r
## 变更注意事项\r
\r
- 修改模型端口后，需要同步更新调用方地址。\r
- 修改模型名称后，需要同步更新请求体中的 \`model\` 字段。\r
- 修改模型目录后，需要同步检查 Docker 挂载路径和容器内路径。\r
- Qwen 服务在容器内启动 vLLM，重启容器后需确认容器内服务进程是否已重新拉起。\r
- bge-m3 使用 DCU 0，\`rsguard_v1\` 使用 DCU 1，Qwen 服务使用 2 张 DCU，启动前需确认显存资源是否足够。\r
\r
## 小结\r
\r
海光 DCU 上的大模型部署主要难点不在命令本身，而在资源绑定、模型命名和接口约定的一致性。\r
\r
\`rsguard_v1\` 是服务层命名，背后的实际模型是 \`Qwen3Guard-Gen-8B\`。在文档中把服务名、模型名、目录路径和请求体 \`model\` 字段拆清楚，可以减少后续排障成本，也能避免调用方在模型升级时频繁变更接口。\r
\r
`;export{r as default};
