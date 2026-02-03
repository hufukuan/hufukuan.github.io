# Fukuan Hu - Academic Resume

简约现代的学术简历网站，基于 Next.js 16 构建。

## ✨ 特性

- 📱 响应式设计
- 🌙 深色模式支持
- 🎯 导航栏快速跳转
- 📚 教育背景标签页
- 🖼️ 图片展示支持
- ⚡ 静态部署

## 🚀 快速开始

### 本地开发

```bash
pnpm install
pnpm run dev
```

访问 http://localhost:5000

### 部署到 GitHub Pages

```bash
# 1. 创建 GitHub 仓库
# 2. 推送代码
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main

# 3. 在仓库 Settings > Pages 启用 GitHub Actions
# 4. 等待部署完成，访问 https://YOUR_USERNAME.github.io/REPO_NAME
```

详见 [QUICK_DEPLOY.md](QUICK_DEPLOY.md)

## 📝 修改内容

**所有内容都在数据文件中修改！**

| 内容 | 文件 |
|------|------|
| 个人信息 | `src/data/profile.ts` |
| 教育背景 | `src/data/education.ts` |
| 研究经历 | `src/data/research.ts` |
| 发表论文 | `src/data/publications.ts` |
| 获奖荣誉 | `src/data/awards.ts` |
| 服务经历 | `src/data/service.ts` |
| 技能兴趣 | `src/data/skills.ts` |

详细说明请查看 [HOW_TO_EDIT.md](HOW_TO_EDIT.md)

## 📦 项目结构

```
src/
├── data/              # 所有数据文件（在这里修改内容）
│   ├── profile.ts
│   ├── education.ts
│   ├── research.ts
│   ├── publications.ts
│   ├── awards.ts
│   ├── service.ts
│   └── skills.ts
├── components/        # 组件
│   ├── navigation.tsx
│   ├── education-tabs.tsx
│   ├── research-section.tsx
│   ├── publications-section.tsx
│   ├── awards-section.tsx
│   ├── service-section.tsx
│   └── skills-section.tsx
└── app/
    └── page.tsx       # 主页面
public/                # 图片文件
├── photo.jpg
└── project-image.png
```

## 📚 文档

- [HOW_TO_EDIT.md](HOW_TO_EDIT.md) - 如何修改网站内容
- [QUICK_DEPLOY.md](QUICK_DEPLOY.md) - 快速部署指南

## 🛠️ 技术栈

- Next.js 16
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui

## 📄 许可证

MIT
