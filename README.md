# 云飞的安全测试日志

一个使用 Vite、React 和 `animal-island-ui` 构建的个人博客，内容聚焦 Web 应用安全防护、大模型安全防护和软件测试工程实践。

线上地址：

```text
https://xiaoxiaofeiduo.github.io/Fyf_blog/
```

## 技术栈

- Vite
- React
- TypeScript
- React Router HashRouter
- animal-island-ui
- Markdown 内容文件
- GitHub Pages，发布源为 `main` 分支的 `/docs` 目录

## 目录说明

```text
.
├── docs/                  # 编译后的 GitHub Pages 发布产物，需要提交
├── public/                # 静态资源，例如头像 avatar.jpg
├── src/
│   ├── content/posts/     # 博客 Markdown 文章，按一级目录分类
│   ├── lib/posts.ts       # 文章扫描、frontmatter 解析、排序逻辑
│   ├── lib/markdown.tsx   # Markdown 渲染逻辑
│   ├── pages/             # 页面组件
│   └── styles.css         # 全站样式
├── package.json
└── vite.config.ts
```

## 本地维护

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run dev
```

本地预览生产构建：

```bash
npm run build
npm run preview
```

如果使用本地软链接版本的 `animal-island-ui`，当前 Vite 配置已允许读取：

```text
/Users/fanyunfei/Documents/GitHub/animal-island-ui
```

同时配置了 `resolve.dedupe`，避免生产构建中出现多份 React 导致页面空白。

## 新增博客

所有文章放在：

```text
src/content/posts/
```

当前使用三个一级分类目录。一级目录名称会直接作为文章页的过滤标签：

```text
src/content/posts/
├── 安全研究/
├── AI 实践/
└── 系统运维/
```

新增文章时，先选择对应分类目录，再放入 Markdown 文件或文件夹式文章。

### 单文件文章

直接新增 Markdown：

```text
src/content/posts/系统运维/my-new-post.md
```

访问路径会是：

```text
#/posts/系统运维-my-new-post
```

### 文件夹式文章

适合文章带图片资源的情况：

```text
src/content/posts/AI 实践/my-topic/
├── index.md
├── image.png
└── demo.jpg
```

访问路径会是：

```text
#/posts/AI-实践-my-topic
```

目前 `index.md`、`README.md`、`分享.md` 会使用所在文件夹名作为文章 slug。例如：

```text
src/content/posts/AI 实践/skills_experience/分享.md
```

访问路径是：

```text
#/posts/AI-实践-skills_experience
```

## 文章 Frontmatter

建议每篇文章顶部配置：

```md
---
title: 文章标题
date: 2026-05-28
summary: 文章摘要，会展示在文章列表中。
tags: Web安全, 测试工程, 大模型安全
cover: app-teal
readingTime: 5 分钟
featured: true
---

# 正文标题

正文内容。
```

字段说明：

- `title`：文章标题
- `date`：发布时间，格式建议使用 `YYYY-MM-DD`，系统会按这个字段倒序排序
- `summary`：文章摘要
- `tags`：标签，使用英文逗号分隔
- `cover`：文章卡片配色标识
- `readingTime`：阅读时间
- `featured`：是否展示在首页精选文章中，`true` 或 `false`

文章所属的一级目录会自动加入标签列表，不需要在 `tags` 中重复填写 `安全研究`、`AI 实践` 或 `系统运维`。

如果没有配置 `title`，系统会读取正文第一个一级标题。如果没有配置 `summary`，系统会读取正文中第一行有效文本。

## 文章图片

文件夹式文章可以使用相对路径引用同目录图片：

```md
![截图](image.png)
![带空格的图片](<Pasted Graphic 2.png>)
```

图片会在构建时被 Vite 收集到 `docs/assets/`，不需要手动复制。

## 编译最新 docs

GitHub Pages 使用 `main` 分支的 `/docs` 目录作为发布源，所以每次修改源码或文章后，需要重新生成并提交 `docs`。

```bash
npm run build
```

构建完成后检查变更：

```bash
git status --short
```

提交源码和最新 `docs`：

```bash
git add -A
git commit -m "Update blog content"
git push origin main
```

## GitHub Pages 设置

仓库 Pages 设置应保持为：

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

如果线上页面空白，优先检查：

- 是否执行过 `npm run build`
- `docs/index.html` 是否引用最新的 `docs/assets/index-*.js`
- 是否把 `docs/` 一起提交到了 `main`
- 浏览器控制台是否有 JavaScript 运行时报错
