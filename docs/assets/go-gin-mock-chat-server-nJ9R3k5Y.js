const n=`---\r
title: 用 Go + Gin 搭一个本地 AI 流式响应 Mock 服务\r
date: 2026-06-24\r
summary: 为了让前端可以稳定复现各种 AI 聊天场景，用 Go + Gin 搭建了一个轻量本地 Mock 服务，模拟 OpenAI 风格和自定义协议的流式聊天接口。\r
tags: Go, Gin, Mock服务, SSE, 流式响应, 前端调试, AI接口\r
cover: app-teal\r
readingTime: 10 分钟\r
featured: false\r
---\r
\r
# 用 Go + Gin 搭一个本地 AI 流式响应 Mock 服务\r
\r
在做 AI 聊天类产品的前端开发时，经常会遇到一个问题：真实模型接口不稳定、成本高、响应内容不可控，而且流式响应的调试链路很长。为了让前端可以稳定复现各种场景，我做了一个轻量的本地 Mock 服务，用 Go + Gin 模拟 OpenAI 风格和自定义协议的聊天接口。\r
\r
这个项目不是为了替代真实大模型，而是为了让开发和测试更可控。\r
\r
## 解决什么问题\r
\r
前端调试 AI 聊天页面时，通常需要验证这些能力：\r
\r
- 普通 JSON 响应是否能正确展示\r
- SSE 流式响应是否能逐字追加\r
- 结束标记是否能被正确识别\r
- 多轮消息结构是否能正常提交\r
- 异常参数是否会返回合理错误\r
- UI 在长文本、多分片场景下是否稳定\r
\r
如果每次都依赖真实模型，就会引入网络、鉴权、费用、模型随机性等额外变量。Mock 服务的价值就是把这些变量收敛掉。\r
\r
## 项目整体设计\r
\r
项目非常简单，核心代码都在 \`main.go\` 中：\r
\r
\`\`\`text\r
main.go\r
static/\r
  main.html\r
  simulate_chat_ai.html\r
  simulate_customize_chat.html\r
  app.css\r
\`\`\`\r
\r
服务启动后访问：\r
\r
\`\`\`text\r
http://127.0.0.1:8080/\r
\`\`\`\r
\r
根路径是一个导航页，可以进入两个测试页面：\r
\r
- OpenAI 兼容接口测试页\r
- 自定义协议接口测试页\r
\r
前端页面不依赖构建工具，都是原生 HTML、CSS 和 JavaScript，适合快速打开、快速修改、快速验证。\r
\r
## OpenAI 风格接口\r
\r
第一个接口是：\r
\r
\`\`\`text\r
POST /v1/chat/completions\r
\`\`\`\r
\r
请求结构接近 OpenAI Chat Completions：\r
\r
\`\`\`json\r
{\r
  "model": "deepseek-r1:1.5b",\r
  "messages": [\r
    {"role": "system", "content": "这是一个模拟回复。"},\r
    {"role": "user", "content": "你好"}\r
  ],\r
  "stream": true\r
}\r
\`\`\`\r
\r
这里有一个有意设计的规则：服务端会把所有 \`role = "system"\` 的内容拼接起来，作为模型要返回的内容。这样前端测试时可以完全控制模型回复，不需要等待真实模型生成。\r
\r
当 \`stream\` 为 \`false\` 时，接口返回普通 JSON。当 \`stream\` 为 \`true\` 时，接口返回 SSE：\r
\r
\`\`\`text\r
data: {"id":"chatcmpl-68","object":"chat.completion.chunk",...}\r
\r
data: [DONE]\r
\`\`\`\r
\r
这和真实流式接口的消费方式很接近，前端可以直接用 \`ReadableStream\`、\`TextDecoder\` 或 EventSource 风格的解析逻辑进行调试。\r
\r
## 自定义协议接口\r
\r
第二个接口是：\r
\r
\`\`\`text\r
POST /v1/custom/chat\r
\`\`\`\r
\r
请求体使用自定义字段：\r
\r
\`\`\`json\r
{\r
  "model": "deepseek-r1:1.5b",\r
  "prompt_id": "demo-001",\r
  "prompt": [\r
    {"role": "system", "content": "这是一个自定义协议回复。"},\r
    {"role": "user", "content": "你好"}\r
  ],\r
  "is_stream": true\r
}\r
\`\`\`\r
\r
流式响应中会携带：\r
\r
- \`prompt_id\`\r
- \`reply\`\r
- \`model\`\r
- \`response_uuid\`\r
- \`response_timestamp\`\r
- \`is_stop\`\r
\r
结束标记是：\r
\r
\`\`\`text\r
data: [FINISH]\r
\`\`\`\r
\r
这个接口适合模拟企业内部自定义 AI 网关或业务后端协议。\r
\r
## 如何模拟"流式"\r
\r
项目通过 \`token_length\` 查询参数控制分片长度：\r
\r
\`\`\`text\r
/v1/chat/completions?token_length=3\r
\`\`\`\r
\r
服务端会按 rune 切分字符串，避免中文被字节切坏。例如：\r
\r
\`\`\`text\r
这是一个模拟回复\r
\`\`\`\r
\r
当 \`token_length = 3\` 时，会被切成：\r
\r
\`\`\`text\r
这是一\r
个模拟\r
回复\r
\`\`\`\r
\r
每个片段都会被包装成 JSON，再通过 SSE 的格式写出：\r
\r
\`\`\`go\r
line := "data: " + string(respBytes) + "\\n\\n"\r
c.Writer.WriteString(line)\r
c.Writer.(http.Flusher).Flush()\r
\`\`\`\r
\r
关键点是每次写完都要 \`Flush()\`，否则浏览器可能等缓冲区满了才收到内容，前端看起来就不像流式。\r
\r
## 前端测试页面的作用\r
\r
项目内置的测试页面不是装饰，而是联调工具。\r
\r
页面支持：\r
\r
- 添加多条用户消息\r
- 添加多条模型答复片段\r
- 删除动态新增的消息\r
- 设置模型名称\r
- 设置分片长度\r
- 切换流式和非流式\r
- 设置可选的 \`X-Real-IP\`\r
- 在右侧实时查看响应内容\r
\r
这让前端同学不需要写 curl，也可以直接构造复杂场景。\r
\r
## 适合哪些场景\r
\r
这个 Mock 服务适合：\r
\r
- AI 聊天页面开发\r
- SSE 解析逻辑验证\r
- 打字机效果调试\r
- 接口协议联调\r
- 自动化测试前的行为固定\r
- 演示环境中的稳定假数据\r
\r
尤其是在 UI 还没接入真实模型前，它可以让页面交互、滚动、分片追加、结束状态先跑通。\r
\r
## 后续可以怎么扩展\r
\r
当前实现刻意保持简单，后续可以按需要扩展：\r
\r
- 增加错误响应模拟\r
- 增加延迟参数，例如 \`delay_ms\`\r
- 支持从文件读取预设回复\r
- 增加更多 OpenAI 响应字段\r
- 增加并发安全处理\r
- 抽离 handler，补充单元测试\r
- 支持 Docker 启动\r
\r
## 总结\r
\r
这个项目的核心思路是：用最小成本构造一个可控的 AI 接口环境。\r
\r
真实模型适合验证最终效果，Mock 服务适合日常开发联调。把模型回复、分片长度、协议格式都固定下来后，前端就能更专注地处理页面体验和边界情况。\r
\r
对于任何需要调试 AI 流式响应的项目，一个本地 Mock 服务都值得提前准备。\r
\r
> 项目地址：[mock_openai_interface](https://github.com/xiaoxiaofeiduo/mock_openai_interface)\r
`;export{n as default};
