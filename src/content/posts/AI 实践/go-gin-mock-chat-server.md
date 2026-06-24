---
title: 用 Go + Gin 搭一个本地 AI 流式响应 Mock 服务
date: 2026-06-24
summary: 为了让前端可以稳定复现各种 AI 聊天场景，用 Go + Gin 搭建了一个轻量本地 Mock 服务，模拟 OpenAI 风格和自定义协议的流式聊天接口。
tags: Go, Gin, Mock服务, SSE, 流式响应, 前端调试, AI接口
cover: app-teal
readingTime: 10 分钟
featured: false
---

# 用 Go + Gin 搭一个本地 AI 流式响应 Mock 服务

在做 AI 聊天类产品的前端开发时，经常会遇到一个问题：真实模型接口不稳定、成本高、响应内容不可控，而且流式响应的调试链路很长。为了让前端可以稳定复现各种场景，我做了一个轻量的本地 Mock 服务，用 Go + Gin 模拟 OpenAI 风格和自定义协议的聊天接口。

这个项目不是为了替代真实大模型，而是为了让开发和测试更可控。

## 解决什么问题

前端调试 AI 聊天页面时，通常需要验证这些能力：

- 普通 JSON 响应是否能正确展示
- SSE 流式响应是否能逐字追加
- 结束标记是否能被正确识别
- 多轮消息结构是否能正常提交
- 异常参数是否会返回合理错误
- UI 在长文本、多分片场景下是否稳定

如果每次都依赖真实模型，就会引入网络、鉴权、费用、模型随机性等额外变量。Mock 服务的价值就是把这些变量收敛掉。

## 项目整体设计

项目非常简单，核心代码都在 `main.go` 中：

```text
main.go
static/
  main.html
  simulate_chat_ai.html
  simulate_customize_chat.html
  app.css
```

服务启动后访问：

```text
http://127.0.0.1:8080/
```

根路径是一个导航页，可以进入两个测试页面：

- OpenAI 兼容接口测试页
- 自定义协议接口测试页

前端页面不依赖构建工具，都是原生 HTML、CSS 和 JavaScript，适合快速打开、快速修改、快速验证。

## OpenAI 风格接口

第一个接口是：

```text
POST /v1/chat/completions
```

请求结构接近 OpenAI Chat Completions：

```json
{
  "model": "deepseek-r1:1.5b",
  "messages": [
    {"role": "system", "content": "这是一个模拟回复。"},
    {"role": "user", "content": "你好"}
  ],
  "stream": true
}
```

这里有一个有意设计的规则：服务端会把所有 `role = "system"` 的内容拼接起来，作为模型要返回的内容。这样前端测试时可以完全控制模型回复，不需要等待真实模型生成。

当 `stream` 为 `false` 时，接口返回普通 JSON。当 `stream` 为 `true` 时，接口返回 SSE：

```text
data: {"id":"chatcmpl-68","object":"chat.completion.chunk",...}

data: [DONE]
```

这和真实流式接口的消费方式很接近，前端可以直接用 `ReadableStream`、`TextDecoder` 或 EventSource 风格的解析逻辑进行调试。

## 自定义协议接口

第二个接口是：

```text
POST /v1/custom/chat
```

请求体使用自定义字段：

```json
{
  "model": "deepseek-r1:1.5b",
  "prompt_id": "demo-001",
  "prompt": [
    {"role": "system", "content": "这是一个自定义协议回复。"},
    {"role": "user", "content": "你好"}
  ],
  "is_stream": true
}
```

流式响应中会携带：

- `prompt_id`
- `reply`
- `model`
- `response_uuid`
- `response_timestamp`
- `is_stop`

结束标记是：

```text
data: [FINISH]
```

这个接口适合模拟企业内部自定义 AI 网关或业务后端协议。

## 如何模拟"流式"

项目通过 `token_length` 查询参数控制分片长度：

```text
/v1/chat/completions?token_length=3
```

服务端会按 rune 切分字符串，避免中文被字节切坏。例如：

```text
这是一个模拟回复
```

当 `token_length = 3` 时，会被切成：

```text
这是一
个模拟
回复
```

每个片段都会被包装成 JSON，再通过 SSE 的格式写出：

```go
line := "data: " + string(respBytes) + "\n\n"
c.Writer.WriteString(line)
c.Writer.(http.Flusher).Flush()
```

关键点是每次写完都要 `Flush()`，否则浏览器可能等缓冲区满了才收到内容，前端看起来就不像流式。

## 前端测试页面的作用

项目内置的测试页面不是装饰，而是联调工具。

页面支持：

- 添加多条用户消息
- 添加多条模型答复片段
- 删除动态新增的消息
- 设置模型名称
- 设置分片长度
- 切换流式和非流式
- 设置可选的 `X-Real-IP`
- 在右侧实时查看响应内容

这让前端同学不需要写 curl，也可以直接构造复杂场景。

## 适合哪些场景

这个 Mock 服务适合：

- AI 聊天页面开发
- SSE 解析逻辑验证
- 打字机效果调试
- 接口协议联调
- 自动化测试前的行为固定
- 演示环境中的稳定假数据

尤其是在 UI 还没接入真实模型前，它可以让页面交互、滚动、分片追加、结束状态先跑通。

## 后续可以怎么扩展

当前实现刻意保持简单，后续可以按需要扩展：

- 增加错误响应模拟
- 增加延迟参数，例如 `delay_ms`
- 支持从文件读取预设回复
- 增加更多 OpenAI 响应字段
- 增加并发安全处理
- 抽离 handler，补充单元测试
- 支持 Docker 启动

## 总结

这个项目的核心思路是：用最小成本构造一个可控的 AI 接口环境。

真实模型适合验证最终效果，Mock 服务适合日常开发联调。把模型回复、分片长度、协议格式都固定下来后，前端就能更专注地处理页面体验和边界情况。

对于任何需要调试 AI 流式响应的项目，一个本地 Mock 服务都值得提前准备。

> 项目地址：[mock_openai_interface](https://github.com/xiaoxiaofeiduo/mock_openai_interface)
