# 部署到 GitHub Pages 指南

本文档将指导您如何将学术简历网站部署到 GitHub Pages。

## 前置要求

1. 一个 GitHub 账户
2. 本地安装了 Git
3. 项目代码已准备好

## 步骤 1: 创建 GitHub 仓库

1. 登录到 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: 例如 `academic-resume`（或其他您喜欢的名称）
   - **Description**: Academic Resume Website
   - **Public/Private**: 选择 Public（推荐，因为 GitHub Pages 免费版仅支持公开仓库）
4. 点击 "Create repository"

## 步骤 2: 初始化本地 Git 并推送到 GitHub

在项目根目录下执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit: Academic resume website"

# 重命名主分支为 main（如果还不是）
git branch -M main

# 添加远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

**注意**: 将 `YOUR_USERNAME` 和 `REPO_NAME` 替换为您的 GitHub 用户名和仓库名称。

例如：
```bash
git remote add origin https://github.com/yourname/academic-resume.git
git push -u origin main
```

## 步骤 3: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings** 标签
2. 在左侧菜单中找到 **Pages**（在 "Code and automation" 部分下）
3. 在 "Build and deployment" 部分：
   - **Source**: 选择 **GitHub Actions**
4. 点击 **Save**

## 步骤 4: 自动部署

当您推送代码到 `main` 分支时，GitHub Actions 会自动：
1. 构建项目（使用 Next.js 静态导出）
2. 将构建结果部署到 GitHub Pages

您可以在仓库的 **Actions** 标签页查看部署进度。

## 步骤 5: 访问您的网站

部署完成后（通常需要 1-3 分钟），您的网站将可以通过以下地址访问：

```
https://YOUR_USERNAME.github.io/REPO_NAME
```

例如：
```
https://yourname.github.io/academic-resume
```

## 更新网站

当您修改代码后，只需：

```bash
git add .
git commit -m "Update resume"
git push origin main
```

GitHub Actions 会自动重新构建和部署。

## 常见问题

### 1. 构建失败

- 检查 GitHub Actions 日志（Actions 标签页）
- 确保 `package.json` 中的脚本正确
- 确保 Node.js 版本兼容（工作流中使用的是 Node.js 20）

### 2. 图片不显示

- 确保图片文件已推送到 `public/` 目录
- 确保图片文件名大小写正确（Linux 区分大小写）

### 3. 路由不工作

- 由于使用了静态导出，确保所有链接都使用锚点跳转
- 如果使用自定义域名，可能需要修改 `next.config.ts` 中的 `basePath`

### 4. 自定义域名（可选）

如果您想使用自定义域名：

1. 在 GitHub 仓库的 Settings > Pages 中
2. 在 "Custom domain" 中输入您的域名
3. 按照提示配置 DNS 记录
4. 等待 DNS 生效

## 本地测试部署

在部署前，您可以在本地测试静态导出：

```bash
# 构建静态网站
pnpm run build

# 本地预览（需要安装 serve）
npx serve out
```

然后在浏览器访问 `http://localhost:3000` 查看效果。

## 技术说明

本项目已配置为：
- **静态导出**: 使用 `output: 'export'` 配置
- **图片优化**: 已禁用 Next.js 图片优化（`unoptimized: true`）
- **GitHub Actions**: 自动构建和部署流程

## 需要帮助？

如果遇到问题，请检查：
1. GitHub Actions 日志
2. 仓库的 Pages 设置
3. 代码是否正确推送到 main 分支
