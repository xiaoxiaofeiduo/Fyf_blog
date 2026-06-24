# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

云飞的测试日志 — 基于 Vite + React + TypeScript 的个人博客，使用 `animal-island-ui` 组件库，内容聚焦 Web 应用安全防护、大模型安全防护和软件测试工程实践。通过 GitHub Pages 部署，发布源为 `main` 分支的 `/docs` 目录。

## 常用命令

```bash
npm install              # 安装依赖
npm run dev              # 启动开发服务器（自动先执行 prepare:assets）
npm run build            # 生产构建：tsc 类型检查 + vite build，输出到 docs/
npm run preview          # 本地预览生产构建
npm run prepare:assets   # 手动运行：扫描文章生成索引 + 处理 UI CSS
```

新增或修改文章后，**务必运行 `npm run build`** 重新生成 `docs/`，然后将 `docs/` 一起提交。

## 核心架构

### 文章系统

所有博客文章放在 `src/content/posts/`，按一级分类目录组织（当前有 `安全研究`、`AI 实践`、`系统运维`、`功能测试`、`性能测试`）。

**文章索引是自动生成的，不要手动编辑：**
- `scripts/generate-post-index.mjs` 扫描 `src/content/posts/**/*.md`，解析 frontmatter，按日期倒序排列，输出到 `src/lib/generated-posts.ts`
- `npm run dev` 和 `npm run build` 都会自动执行这个脚本（通过 `predev`/`prebuild` hook）
- 新增文章后重启 dev server 或重新 build 即可生效

**文章支持两种形式：**
- 单文件：`src/content/posts/分类/文章名.md` → slug 为 `分类-文章名`
- 文件夹式：`src/content/posts/分类/文件夹/index.md`（或 `README.md`、`分享.md`）→ slug 为 `分类-文件夹名`，文件夹内可放置图片等资源

**Frontmatter 字段：** `title`、`date`、`summary`、`tags`（逗号分隔）、`cover`（卡片配色标识）、`readingTime`、`featured`（是否在首页展示）。文章所属一级目录会自动加入 tags。

### 关键文件

| 文件 | 作用 |
|------|------|
| `src/lib/posts.ts` | `BlogPost` 类型定义、从 `generated-posts.ts` 导出文章列表、`loadPostContent()`（通过 `import.meta.glob` 动态加载 markdown）、`formatDate()` |
| `src/lib/markdown.tsx` | `renderMarkdown()` — 用 react-markdown + rehype-raw + remark-gfm 渲染，自定义 `<a>`（外部链接新窗口）、`<img>`（首图 eager 加载）、`<pre>`、`<table>` |
| `src/lib/post-assets.ts` | 通过 `import.meta.glob` 预加载所有文章图片，用于文章内相对路径图片的运行时解析 |
| `src/App.tsx` | 路由入口：`/`（HomePage）、`/posts`（PostsPage）、`/posts/:slug`（PostDetailPage，lazy）、`/about`（AboutPage，lazy） |
| `scripts/prepare-ui-css.mjs` | 从 `node_modules/animal-island-ui/dist/index.css` 复制并处理 CSS（移除字体声明、修正资源路径），输出到 `src/vendor/animal-island-ui.css` |

### 路由与数据流

- 使用 **HashRouter**（适配 GitHub Pages 静态托管）
- `PostsPage` 通过 URL search params（`?tag=xxx&page=n`）实现标签过滤和分页，每页 8 篇
- `PostDetailPage` 通过 `location.state.fromPostsList` 判断返回行为：从文章列表进入则 `navigate(-1)`，否则跳转到 `/posts`
- 首页展示最近 3 篇文章（`posts.slice(0, 3)`）

### 部署

- Vite 构建输出到 `docs/`（`vite.config.ts` 中 `build.outDir: 'docs'`）
- `base: '/Fyf_blog/'` 确保 GitHub Pages 路径正确
- GitHub Pages 设置：Source → Deploy from a branch，Branch → main，Folder → `/docs`
- `resolve.dedupe: ['react', 'react-dom', 'react/jsx-runtime']` 防止 animal-island-ui 的 React 副本导致页面空白

### 注意事项

- `src/lib/generated-posts.ts` 和 `src/vendor/animal-island-ui.css` 是自动生成的，**不要手动编辑**
- `assets-originals/` 是原始素材归档目录，不参与构建，文章不要引用这里的内容
- `public/` 会原样复制到 `docs/`，适合放 favicon、头像等静态资源
- 文章图片应使用相对路径引用同目录下的文件，构建时 Vite 会自动收集
