# 🚀 快速部署到 GitHub Pages

## 只需 4 步，让您的学术简历上线！

---

### 第 1 步：创建 GitHub 仓库

1. 访问 [GitHub New Repository](https://github.com/new)
2. 填写信息：
   - **Repository name**: `academic-resume`（或您喜欢的名字）
   - **Description**: Academic Resume Website
   - **Public**: ✅ 选择 Public（GitHub Pages 免费版需要公开仓库）
3. 点击 **Create repository**

---

### 第 2 步：推送代码到 GitHub

在项目目录下执行以下命令（**请替换您的 GitHub 用户名和仓库名**）：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Academic resume website"

# 设置远程仓库（替换 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

**示例**（假设您的 GitHub 用户名是 `johnsmith`，仓库名是 `academic-resume`）：
```bash
git remote add origin https://github.com/johnsmith/academic-resume.git
git push -u origin main
```

---

### 第 3 步：启用 GitHub Pages

1. 打开您的 GitHub 仓库
2. 点击 **Settings** 标签
3. 在左侧菜单找到 **Pages**（在 "Code and automation" 下）
4. 在 "Build and deployment" 部分：
   - **Source**: 选择 **GitHub Actions**
5. 点击 **Save**

---

### 第 4 步：等待部署完成

1. 点击仓库的 **Actions** 标签
2. 等待工作流运行完成（通常 1-3 分钟）✅
3. 部署完成后，点击仓库的 **Settings** > **Pages**
4. 您会看到网站地址，例如：
   ```
   https://johnsmith.github.io/academic-resume
   ```

---

## 🎉 完成！

您的学术简历网站已经上线了！🎊

---

## 📱 更新网站

当您修改内容后：

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub 会自动重新部署，1-3 分钟后更新生效！

---

## 🔧 自定义域名（可选）

如果您有自己的域名：

1. 在 GitHub 仓库的 **Settings** > **Pages**
2. 在 "Custom domain" 输入您的域名（如 `resume.yourdomain.com`）
3. 按照提示配置 DNS 记录：
   - 类型：`CNAME`
   - 名称：`resume`（或您想要的子域名）
   - 值：`YOUR_USERNAME.github.io`

---

## 📝 访问地址格式

您的网站地址将是：
```
https://YOUR_USERNAME.github.io/REPO_NAME
```

**示例**：
- GitHub 用户名：`johnsmith`
- 仓库名：`academic-resume`
- 网站地址：`https://johnsmith.github.io/academic-resume`

---

## ✅ 当前配置说明

您的项目已经配置好了：

✅ **静态导出**: `next.config.ts` 已配置 `output: 'export'`
✅ **自动部署**: `.github/workflows/deploy.yml` 已配置
✅ **图片优化**: 已禁用（静态部署要求）
✅ **构建测试**: 已成功构建

您只需要按照上面的步骤操作即可！

---

## ❓ 常见问题

### Q: 推送失败，提示 "Authentication failed"
A: 需要配置 GitHub 凭证。使用 SSH 或 Personal Access Token：
- SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/REPO_NAME.git`
- PAT: 在 Settings > Developer settings > Personal access tokens 创建 token，然后使用 `https://YOUR_TOKEN@github.com/...`

### Q: Actions 构建失败
A: 检查 Actions 标签页的错误日志，常见原因：
- 代码未推送到 main 分支
- package.json 配置错误
- Node.js 版本问题

### Q: 网站显示 404
A: 检查：
1. GitHub Pages 是否已启用
2. Actions 是否成功运行
3. 仓库名是否正确

### Q: 图片不显示
A: 确保：
1. 图片文件在 `public/` 目录
2. 文件名大小写正确
3. 图片已推送到 GitHub

---

## 🎨 个性化您的网站

### 修改个人信息
编辑 `src/app/page.tsx` 文件的 Header 部分

### 修改教育背景
编辑 `src/components/education-tabs.tsx` 文件

### 修改其他内容
编辑 `src/app/page.tsx` 文件对应的部分

详细编辑指南请查看 [EDITING_GUIDE.md](EDITING_GUIDE.md)

---

## 📚 相关文档

- [详细部署指南](DEPLOYMENT.md)
- [内容编辑指南](EDITING_GUIDE.md)

---

## 🌟 开始部署吧！

现在就按照上面的步骤操作，几分钟内让您的学术简历网站上线！🚀
