# Engineering Student Personal Site

一个适合理工科学生长期维护的个人网站：个人技术名片、项目作品集、科研兴趣页、技术笔记和在线简历。

## Tech Stack

- Astro
- TypeScript
- Markdown / MDX
- Astro Content Collections
- Plain CSS

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev
```

默认访问 `http://localhost:4321`。

## Build

```bash
npm run build
npm run preview
```

## Add a Blog Note

在 `src/content/blog/` 下新增 `.md` 或 `.mdx` 文件，并使用以下 frontmatter：

```yaml
---
title: "Your Note Title"
description: "Short description."
date: 2026-05-08
tags: ["Tag A", "Tag B"]
category: "Machine Learning"
draft: false
---
```

文件名会成为路由 slug，例如 `my-note.md` 对应 `/blog/my-note`。

## Add a Project

在 `src/content/projects/` 下新增 `.md` 或 `.mdx` 文件：

```yaml
---
title: "Project Title"
description: "Short project summary."
date: 2026-05-08
tags: ["Astro", "TypeScript"]
category: "Web Tools"
status: "In Progress"
github: "https://github.com/yourname/project"
demo: "https://example.com"
cover: "/images/project-cover.jpg"
featured: true
---
```

`featured: true` 的项目会显示在首页 Featured Projects 区域。

## Deploy to Vercel

Vercel 对 Astro 基本零配置：

1. 将仓库推送到 GitHub。
2. 在 Vercel 新建项目并导入仓库。
3. Framework Preset 选择 Astro。
4. Build command 使用 `npm run build`。
5. Output directory 使用 `dist`。

## Deploy to GitHub Pages

本项目包含 `.github/workflows/deploy.yml`。推送到 `main` 后，GitHub Actions 会构建并发布 `dist`。

如果你的站点部署在用户或组织根域名仓库，例如 `yourname.github.io`，通常无需设置 `base`。

如果你的站点部署在项目仓库，例如 `https://yourname.github.io/my-site/`，请在 `astro.config.mjs` 中改成：

```js
export default defineConfig({
  site: 'https://yourname.github.io',
  base: '/my-site',
  integrations: [mdx()]
});
```

同时注意站内链接和静态资源会由 Astro 自动加上 base 路径。

## Content Editing Map

- 首页：`src/pages/index.astro`
- 关于页：`src/pages/about.astro`
- 科研页：`src/pages/research.astro`
- 简历页：`src/pages/cv.astro`
- 联系页：`src/pages/contact.astro`
- 博客内容：`src/content/blog/`
- 项目内容：`src/content/projects/`
- 全局样式：`src/styles/global.css`
- 内容模型：`src/content/config.ts`
