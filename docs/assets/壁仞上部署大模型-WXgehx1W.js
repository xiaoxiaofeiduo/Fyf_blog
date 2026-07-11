const r=`---\r
title: 在壁仞服务器上部署 Qwen3Guard-Gen-8B 与 bge-m3\r
date: 2026-05-28\r
summary: 记录在壁仞 8 卡服务器上使用 Docker 和 vLLM 部署 Qwen3Guard-Gen-8B 内容安全模型与 bge-m3 Embedding 模型，并通过 Nginx 暴露 OpenAI 兼容接口的实践过程。\r
tags: 壁仞服务器, 大模型部署, Qwen3Guard, vLLM, bge-m3\r
cover: app-teal\r
readingTime: 12 分钟\r
featured: true\r
---\r
\r
# 在壁仞服务器上部署 Qwen3Guard-Gen-8B 与 bge-m3\r
\r
这篇文章记录一次在壁仞服务器上部署大模型服务的实践。目标是把内容安全审核模型和 Embedding 模型部署成 OpenAI 兼容接口，并用 Nginx 做统一入口和负载均衡。\r
\r
本文中的 \`rsguard_v1\` 是本地服务别名，对应的实际开源模型是 \`Qwen3Guard-Gen-8B\`。也就是说：\r
\r
- 模型能力：\`Qwen3Guard-Gen-8B\`\r
- 本地模型目录：\`/data/models/rsguard_v1\`\r
- 容器内模型路径：\`/models/rsguard_v1\`\r
- vLLM 暴露的服务名：\`rsguard_v1\`\r
- 对外接口路径：\`/rsguard/v1/chat/completions\`\r
\r
这样做的好处是可以保持业务侧接口名称稳定，即使后续替换底层 Guard 模型，调用方也不需要频繁改接口路径。\r
\r
## 部署目标\r
\r
本次只部署两个模型：\r
\r
- \`rsguard_v1\`：内容安全 Guard 服务，底层模型为 \`Qwen3Guard-Gen-8B\`，提供 OpenAI Chat Completions 接口。\r
- \`bge-m3\`：Embedding 服务，提供 OpenAI Embeddings 接口。\r
\r
基础约定如下：\r
\r
\`\`\`text\r
模型根目录：/data/models\r
容器内模型目录：/models\r
vLLM 镜像 ID：237020763da3\r
Qwen3Guard-Gen-8B 本地目录：/data/models/rsguard_v1\r
bge-m3 本地目录：/data/models/bge-m3\r
Nginx 对外端口：12002\r
\`\`\`\r
\r
最终接口：\r
\r
\`\`\`text\r
Qwen3Guard-Gen-8B:\r
  http://<host>:12002/rsguard/v1/chat/completions\r
\r
bge-m3:\r
  http://<host>:12002/bge/v1/embeddings\r
\`\`\`\r
\r
## 整体架构\r
\r
\`\`\`text\r
Host OS\r
  -> 安装 BIRENSUPA Driver\r
  -> 安装 biren-container-toolkit\r
  -> 加载 vLLM 推理镜像\r
  -> Docker 容器绑定壁仞设备\r
  -> 容器内启动 vLLM 服务\r
  -> Nginx 按路径转发到后端实例\r
\`\`\`\r
\r
在 8 卡机器上可以采用两种部署方式：\r
\r
- \`7 + 1\`：7 个 \`Qwen3Guard-Gen-8B\` 实例，1 个 \`bge-m3\` 实例。\r
- \`8 + 0\`：8 个 \`Qwen3Guard-Gen-8B\` 实例，不部署 Embedding。\r
\r
## 环境准备\r
\r
### 安装驱动\r
\r
先做安装前检查：\r
\r
\`\`\`bash\r
sudo bash biren-driver_<version>.run --check\r
sudo bash biren-driver_<version>.run --pre-check\r
\`\`\`\r
\r
安装驱动：\r
\r
\`\`\`bash\r
sudo bash biren-driver_<version>.run\r
\`\`\`\r
\r
如果使用当前目录中的安装包，命令示例：\r
\r
\`\`\`bash\r
sudo bash biren-driver_br1xx_1.10.1.0.rc1_linux-x86_64.man --check\r
sudo bash biren-driver_br1xx_1.10.1.0.rc1_linux-x86_64.man --pre-check\r
sudo bash biren-driver_br1xx_1.10.1.0.rc1_linux-x86_64.man\r
\`\`\`\r
\r
### 安装容器工具包\r
\r
\`\`\`bash\r
sudo bash biren-container-toolkit_<version>.run --check\r
sudo bash biren-container-toolkit_<version>.run --pre-check\r
sudo bash biren-container-toolkit_<version>.run\r
\`\`\`\r
\r
如果使用当前目录中的安装包：\r
\r
\`\`\`bash\r
sudo bash biren-container-toolkit_br1xx_0.4.0.1.rc1_linux-x86_64.man --check\r
sudo bash biren-container-toolkit_br1xx_0.4.0.1.rc1_linux-x86_64.man --pre-check\r
sudo bash biren-container-toolkit_br1xx_0.4.0.1.rc1_linux-x86_64.man\r
\`\`\`\r
\r
### 加载 vLLM 镜像\r
\r
\`\`\`bash\r
sudo docker load -i birensupa-smartinfer-vllm_<version>.tar\r
sudo docker images\r
\`\`\`\r
\r
确认镜像：\r
\r
\`\`\`bash\r
sudo docker images | grep -i vllm\r
\`\`\`\r
\r
本文使用镜像 ID：\r
\r
\`\`\`text\r
237020763da3\r
\`\`\`\r
\r
### 准备模型目录\r
\r
\`\`\`bash\r
sudo mkdir -p /data/models\r
\`\`\`\r
\r
模型目录建议保持如下结构：\r
\r
\`\`\`text\r
/data/models\r
├── rsguard_v1   # Qwen3Guard-Gen-8B\r
└── bge-m3\r
\`\`\`\r
\r
检查目录：\r
\r
\`\`\`bash\r
ls -lh /data/models/rsguard_v1\r
ls -lh /data/models/bge-m3\r
\`\`\`\r
\r
## Host 侧检查\r
\r
检查设备节点：\r
\r
\`\`\`bash\r
ls -l /dev/biren*\r
ls -l /dev/biren/\r
\`\`\`\r
\r
多卡环境应能看到：\r
\r
\`\`\`text\r
/dev/biren-m\r
/dev/biren/card_0\r
/dev/biren/card_1\r
...\r
\`\`\`\r
\r
查看设备状态：\r
\r
\`\`\`bash\r
brsmi\r
\`\`\`\r
\r
如果这里看不到卡，优先排查驱动、设备权限和容器工具包，不要直接进入模型启动阶段。\r
\r
## 单实例部署\r
\r
单实例适合先验证模型、镜像、设备映射和 vLLM 参数是否可用。\r
\r
### 启动 Qwen3Guard-Gen-8B 服务\r
\r
创建容器：\r
\r
\`\`\`bash\r
sudo docker run -itd \\\r
  --name rsguard \\\r
  --device /dev/biren-m \\\r
  --device /dev/biren/card_0:/dev/biren/card_0 \\\r
  -v /data/models:/models \\\r
  --net host \\\r
  --shm-size 64gb \\\r
  --ulimit memlock=-1 \\\r
  --ulimit nofile=1048576 \\\r
  --cap-add=SYSLOG \\\r
  --cap-add=IPC_LOCK \\\r
  237020763da3 \\\r
  /bin/bash\r
\`\`\`\r
\r
进入容器：\r
\r
\`\`\`bash\r
sudo docker exec -it rsguard bash\r
\`\`\`\r
\r
容器内启动 vLLM：\r
\r
\`\`\`bash\r
VLLM_USE_V1=1 \\\r
VLLM_WORKER_MULTIPROC_METHOD=spawn \\\r
VLLM_BR_WEIGHT_TYPE=NUMA \\\r
nohup vllm serve /models/rsguard_v1 \\\r
  --host 0.0.0.0 \\\r
  --port 28900 \\\r
  --trust-remote-code \\\r
  --dtype auto \\\r
  --served-model-name rsguard_v1 \\\r
  --kv-cache-dtype auto \\\r
  --distributed-executor-backend mp \\\r
  --tensor-parallel-size 1 \\\r
  --pipeline-parallel-size 1 \\\r
  --data-parallel-size 1 \\\r
  --max-model-len 32768 \\\r
  --gpu-memory-utilization 0.75 \\\r
  --max-num-seqs 32 \\\r
  --enable-chunked-prefill \\\r
  --compilation-config '{"cudagraph_mode": "FULL_DECODE_ONLY"}' \\\r
  > rsguard.log 2>&1 &\r
\`\`\`\r
\r
这里的 \`--served-model-name rsguard_v1\` 是接口侧看到的模型名。虽然底层模型是 \`Qwen3Guard-Gen-8B\`，但请求体仍然使用：\r
\r
\`\`\`json\r
{"model": "rsguard_v1"}\r
\`\`\`\r
\r
验证接口：\r
\r
\`\`\`bash\r
curl http://127.0.0.1:28900/v1/chat/completions \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "rsguard_v1",\r
    "messages": [{"role": "user", "content": "你好"}],\r
    "max_tokens": 128,\r
    "temperature": 0\r
  }'\r
\`\`\`\r
\r
### 启动 bge-m3 服务\r
\r
创建容器：\r
\r
\`\`\`bash\r
sudo docker run -itd \\\r
  --name bge \\\r
  --device /dev/biren-m \\\r
  --device /dev/biren/card_1:/dev/biren/card_0 \\\r
  -v /data/models:/models \\\r
  --net host \\\r
  --shm-size 64gb \\\r
  --ulimit memlock=-1 \\\r
  --ulimit nofile=1048576 \\\r
  --cap-add=SYSLOG \\\r
  --cap-add=IPC_LOCK \\\r
  237020763da3 \\\r
  /bin/bash\r
\`\`\`\r
\r
进入容器：\r
\r
\`\`\`bash\r
sudo docker exec -it bge bash\r
\`\`\`\r
\r
容器内启动 vLLM：\r
\r
\`\`\`bash\r
VLLM_USE_V1=1 \\\r
VLLM_WORKER_MULTIPROC_METHOD=spawn \\\r
VLLM_USE_TRITON_FLASH_ATTN=0 \\\r
BRTB_ENABLE_NUMA_SPLIT=1 \\\r
BRTB_ENABLE_NUMA_ALIGN_4K=1 \\\r
nohup vllm serve /models/bge-m3 \\\r
  --host 0.0.0.0 \\\r
  --port 28910 \\\r
  --task embed \\\r
  --trust-remote-code \\\r
  --dtype bfloat16 \\\r
  --max-model-len 8192 \\\r
  --served-model-name bge-m3 \\\r
  --enforce-eager \\\r
  --pipeline-parallel-size 1 \\\r
  --tensor-parallel-size 1 \\\r
  --data-parallel-size 1 \\\r
  --gpu-memory-utilization 0.75 \\\r
  --kv-cache-dtype auto \\\r
  --max-num-seqs 32 \\\r
  > bge.log 2>&1 &\r
\`\`\`\r
\r
验证接口：\r
\r
\`\`\`bash\r
curl http://127.0.0.1:28910/v1/embeddings \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "bge-m3",\r
    "input": "hello"\r
  }'\r
\`\`\`\r
\r
## 多实例部署\r
\r
### 7 个 Qwen3Guard-Gen-8B + 1 个 bge-m3\r
\r
这个方案适合需要 Guard 服务高并发，同时保留一个 Embedding 服务的场景：\r
\r
- \`card_0\` 到 \`card_6\`：部署 7 个 \`Qwen3Guard-Gen-8B\` 实例。\r
- \`card_7\`：部署 1 个 \`bge-m3\` 实例。\r
- Guard 后端端口：\`28900-28906\`。\r
- Embedding 后端端口：\`28910\`。\r
\r
启动脚本：\r
\r
\`\`\`bash\r
bash 7_1.sh\r
\`\`\`\r
\r
脚本核心逻辑是循环绑定不同壁仞卡，并在每个容器内启动一个 vLLM 实例：\r
\r
\`\`\`bash\r
MODEL_DIR="/data/models"\r
IMAGE="237020763da3"\r
\r
for i in 0 1 2 3 4 5 6\r
do\r
  PORT=$((28900 + i))\r
  NAME="rsguard-\${i}"\r
\r
  sudo docker run -itd \\\r
    --name \${NAME} \\\r
    --device /dev/biren-m \\\r
    --device /dev/biren/card_\${i}:/dev/biren/card_0 \\\r
    -v \${MODEL_DIR}:/models \\\r
    --net host \\\r
    --shm-size 64gb \\\r
    --ulimit memlock=-1 \\\r
    --ulimit nofile=1048576 \\\r
    --cap-add=SYSLOG \\\r
    --cap-add=IPC_LOCK \\\r
    \${IMAGE} \\\r
    /bin/bash -lc "\r
      VLLM_USE_V1=1 \\\r
      VLLM_WORKER_MULTIPROC_METHOD=spawn \\\r
      VLLM_BR_WEIGHT_TYPE=NUMA \\\r
      nohup vllm serve /models/rsguard_v1 \\\r
        --host 0.0.0.0 \\\r
        --port \${PORT} \\\r
        --trust-remote-code \\\r
        --dtype auto \\\r
        --served-model-name rsguard_v1 \\\r
        --max-model-len 16384 \\\r
        --gpu-memory-utilization 0.85 \\\r
        --max-num-seqs 32 \\\r
        --enable-chunked-prefill \\\r
        --compilation-config '{\\"cudagraph_mode\\": \\"FULL_DECODE_ONLY\\"}' \\\r
        > /workspace/rsguard_\${PORT}.log 2>&1 &\r
\r
      tail -f /dev/null\r
    "\r
done\r
\`\`\`\r
\r
### 8 个 Qwen3Guard-Gen-8B\r
\r
如果只需要内容安全审核能力，可以 8 张卡全部部署 Guard 模型：\r
\r
- \`card_0\` 到 \`card_7\`：部署 8 个 \`Qwen3Guard-Gen-8B\` 实例。\r
- 后端端口：\`28900-28907\`。\r
- 不部署 \`bge-m3\`。\r
\r
启动脚本：\r
\r
\`\`\`bash\r
bash 8_vllm.sh\r
\`\`\`\r
\r
这种模式下，Nginx 中需要删除或注释 \`bge_backend\` 和 \`/bge/\` location，避免暴露不可用接口。\r
\r
## Nginx 统一入口\r
\r
Nginx 使用一个对外端口 \`12002\`，通过路径前缀区分模型服务：\r
\r
\`\`\`text\r
/rsguard/ -> Qwen3Guard-Gen-8B 后端池\r
/bge/     -> bge-m3 后端池\r
\`\`\`\r
\r
关键点是通过 \`rewrite\` 去掉路径前缀，再转发给 vLLM 的原生 OpenAI 兼容路径。\r
\r
### 完整配置示例\r
\r
编辑配置：\r
\r
\`\`\`bash\r
sudo vi /etc/nginx/nginx.conf\r
\`\`\`\r
\r
示例配置：\r
\r
\`\`\`nginx\r
worker_processes auto;\r
\r
events {\r
    worker_connections 10240;\r
}\r
\r
http {\r
    upstream rsguard_backend {\r
        server 127.0.0.1:28900;\r
        server 127.0.0.1:28901;\r
        server 127.0.0.1:28902;\r
        server 127.0.0.1:28903;\r
        server 127.0.0.1:28904;\r
        server 127.0.0.1:28905;\r
        server 127.0.0.1:28906;\r
        server 127.0.0.1:28907;\r
\r
        keepalive 128;\r
    }\r
\r
    upstream bge_backend {\r
        least_conn;\r
\r
        server 127.0.0.1:28910;\r
        server 127.0.0.1:28911;\r
        server 127.0.0.1:28912;\r
\r
        keepalive 64;\r
    }\r
\r
    server {\r
        listen 12002;\r
\r
        client_max_body_size 100m;\r
\r
        proxy_connect_timeout 600s;\r
        proxy_send_timeout 600s;\r
        proxy_read_timeout 600s;\r
\r
        location /rsguard/ {\r
            rewrite ^/rsguard/(.*)$ /$1 break;\r
            proxy_pass http://rsguard_backend;\r
            proxy_http_version 1.1;\r
            proxy_set_header Host $host;\r
            proxy_set_header Connection "";\r
            proxy_buffering off;\r
        }\r
\r
        location /bge/ {\r
            rewrite ^/bge/(.*)$ /$1 break;\r
            proxy_pass http://bge_backend;\r
            proxy_http_version 1.1;\r
            proxy_set_header Host $host;\r
            proxy_set_header Connection "";\r
            proxy_buffering off;\r
        }\r
    }\r
}\r
\`\`\`\r
\r
检查并重载：\r
\r
\`\`\`bash\r
sudo nginx -t\r
sudo systemctl reload nginx\r
\`\`\`\r
\r
### 按实际实例裁剪 upstream\r
\r
如果运行的是 \`7 + 1\` 方案，Guard 只保留 \`28900-28906\`，bge 只保留 \`28910\`：\r
\r
\`\`\`nginx\r
upstream rsguard_backend {\r
    server 127.0.0.1:28900;\r
    server 127.0.0.1:28901;\r
    server 127.0.0.1:28902;\r
    server 127.0.0.1:28903;\r
    server 127.0.0.1:28904;\r
    server 127.0.0.1:28905;\r
    server 127.0.0.1:28906;\r
    keepalive 128;\r
}\r
\r
upstream bge_backend {\r
    server 127.0.0.1:28910;\r
    keepalive 64;\r
}\r
\`\`\`\r
\r
如果运行的是 \`8 + 0\` 方案，只保留 Guard 后端，删除 bge 相关配置：\r
\r
\`\`\`nginx\r
upstream rsguard_backend {\r
    server 127.0.0.1:28900;\r
    server 127.0.0.1:28901;\r
    server 127.0.0.1:28902;\r
    server 127.0.0.1:28903;\r
    server 127.0.0.1:28904;\r
    server 127.0.0.1:28905;\r
    server 127.0.0.1:28906;\r
    server 127.0.0.1:28907;\r
    keepalive 128;\r
}\r
\`\`\`\r
\r
## 接口验证\r
\r
### 验证 Qwen3Guard-Gen-8B\r
\r
\`\`\`bash\r
curl http://127.0.0.1:12002/rsguard/v1/chat/completions \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "rsguard_v1",\r
    "messages": [{"role": "user", "content": "你好"}],\r
    "max_tokens": 128,\r
    "temperature": 0\r
  }'\r
\`\`\`\r
\r
### 验证 bge-m3\r
\r
\`\`\`bash\r
curl http://127.0.0.1:12002/bge/v1/embeddings \\\r
  -H "Content-Type: application/json" \\\r
  -d '{\r
    "model": "bge-m3",\r
    "input": "hello"\r
  }'\r
\`\`\`\r
\r
### 查看模型列表\r
\r
\`\`\`bash\r
curl http://127.0.0.1:12002/rsguard/v1/models\r
curl http://127.0.0.1:12002/bge/v1/models\r
\`\`\`\r
\r
如果模型列表返回的模型名是 \`rsguard_v1\`，说明 \`--served-model-name\` 生效。业务请求中的 \`model\` 字段也要保持一致。\r
\r
## 运维操作\r
\r
### 查看容器\r
\r
\`\`\`bash\r
docker ps\r
\`\`\`\r
\r
### 查看容器日志\r
\r
\`\`\`bash\r
docker logs rsguard-0 --tail 100\r
docker logs bge-0 --tail 100\r
\`\`\`\r
\r
进入容器查看 vLLM 日志：\r
\r
\`\`\`bash\r
docker exec -it rsguard-0 bash\r
tail -f /workspace/rsguard_28900.log\r
\r
docker exec -it bge-0 bash\r
tail -f /workspace/bge_28910.log\r
\`\`\`\r
\r
### 查看 Nginx 日志\r
\r
\`\`\`bash\r
sudo tail -f /var/log/nginx/access.log\r
sudo tail -f /var/log/nginx/error.log\r
\`\`\`\r
\r
### 检查端口\r
\r
\`\`\`bash\r
ss -lntp | grep 28900\r
ss -lntp | grep 28910\r
ss -lntp | grep 12002\r
\`\`\`\r
\r
### 清理容器\r
\r
下面命令会删除匹配名称的容器，执行前确认没有误删：\r
\r
\`\`\`bash\r
docker ps -a --format '{{.Names}}' | grep -E 'rsguard|bge' | xargs -r docker rm -f\r
\`\`\`\r
\r
### 重启服务\r
\r
\`\`\`bash\r
bash 7_1.sh\r
# 或\r
bash 8_vllm.sh\r
\r
sudo nginx -t\r
sudo systemctl reload nginx\r
\`\`\`\r
\r
## 常见问题\r
\r
### 容器内看不到设备\r
\r
重点检查：\r
\r
- Host 侧驱动是否安装成功。\r
- \`/dev/biren-m\` 和 \`/dev/biren/card_<N>\` 是否存在。\r
- \`docker run\` 是否添加了正确的 \`--device\`。\r
- 容器工具包是否安装成功。\r
\r
### vLLM 服务启动后接口不通\r
\r
重点检查：\r
\r
- \`--host\` 是否为 \`0.0.0.0\`。\r
- \`--port\` 是否和 curl 端口一致。\r
- Docker 是否使用 \`--net host\`。\r
- 日志中是否有模型加载失败、显存不足或端口占用。\r
\r
### Nginx 返回 502\r
\r
常见原因：\r
\r
- 后端 vLLM 端口未监听。\r
- 容器已经退出。\r
- Nginx upstream 中配置了未启动的端口。\r
- \`7 + 1\` 场景下未删除 \`28907\`、\`28911\`、\`28912\` 等不存在的后端。\r
\r
### Nginx 返回 504\r
\r
模型推理时间超过 Nginx 超时配置。可以先确认：\r
\r
\`\`\`nginx\r
proxy_connect_timeout 600s;\r
proxy_send_timeout 600s;\r
proxy_read_timeout 600s;\r
\`\`\`\r
\r
如果仍然超时，需要降低请求长度、降低并发或增加后端实例。\r
\r
### bge-m3 启动异常\r
\r
确认是否设置了 Embedding 相关参数：\r
\r
\`\`\`bash\r
VLLM_USE_TRITON_FLASH_ATTN=0\r
BRTB_ENABLE_NUMA_SPLIT=1\r
BRTB_ENABLE_NUMA_ALIGN_4K=1\r
--task embed\r
--dtype bfloat16\r
--enforce-eager\r
\`\`\`\r
\r
### model 字段不匹配\r
\r
请求体中的 \`model\` 字段必须与服务端 \`--served-model-name\` 一致。\r
\r
Guard 服务应使用：\r
\r
\`\`\`json\r
{"model": "rsguard_v1"}\r
\`\`\`\r
\r
Embedding 服务应使用：\r
\r
\`\`\`json\r
{"model": "bge-m3"}\r
\`\`\`\r
\r
如果你希望外部直接使用 \`Qwen3Guard-Gen-8B\` 作为 model 名，需要同步修改 vLLM 启动参数：\r
\r
\`\`\`bash\r
--served-model-name Qwen3Guard-Gen-8B\r
\`\`\`\r
\r
同时所有调用方也要把请求体中的 \`model\` 改成 \`Qwen3Guard-Gen-8B\`。不建议在已经接入业务后随意变更。\r
\r
## 上线检查清单\r
\r
1. 驱动和容器工具包安装成功。\r
2. \`brsmi\` 可正常查看设备。\r
3. \`/data/models/rsguard_v1\` 路径存在，内容为 \`Qwen3Guard-Gen-8B\` 模型文件。\r
4. \`/data/models/bge-m3\` 路径存在。\r
5. Docker 镜像 \`237020763da3\` 可用。\r
6. Guard 后端端口可访问。\r
7. bge-m3 后端端口可访问。\r
8. Nginx \`12002\` 端口可访问。\r
9. Nginx upstream 只保留实际启动的后端端口。\r
10. \`/rsguard/v1/chat/completions\` 验证通过。\r
11. \`/bge/v1/embeddings\` 验证通过。\r
\r
## 小结\r
\r
这次部署的核心不是单纯把模型跑起来，而是把模型、服务别名、接口路径和负载均衡关系整理清楚。\r
\r
\`rsguard_v1\` 在这套系统中是一个稳定服务名，背后实际承载的是 \`Qwen3Guard-Gen-8B\`。对外保持 \`rsguard_v1\`，可以降低业务侧改造成本；在文档中明确它和开源模型的对应关系，则能避免后续维护时把服务名和模型名混淆。\r
\r
`;export{r as default};
