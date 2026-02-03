# 网站内容编辑指南

本文档将指导您如何修改学术简历网站的常见信息。

## 📁 主要文件结构

```
src/
├── app/
│   ├── page.tsx              # 主页面（大部分内容在这里）
│   └── robots.ts             # 搜索引擎配置（通常不需要修改）
├── components/
│   ├── navigation.tsx        # 导航栏（一般不需要修改）
│   └── education-tabs.tsx    # 教育背景标签页组件
public/
├── photo.jpg                 # 个人头像
└── project-image.png         # 项目图片
```

---

## 1️⃣ 编辑个人信息（姓名、联系方式）

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<header>` 标签内，大约第 17-35 行

```tsx
<header className="mb-16 text-center">
  <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
    FUKUAN HU  {/* 👈 在这里修改姓名 */}
  </h1>
  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
    <span className="flex items-center gap-2">
      <svg>...</svg>
      (+86) 16635424707  {/* 👈 在这里修改电话 */}
    </span>
    <span className="flex items-center gap-2">
      <svg>...</svg>
      hufukuan@bjfu.edu.cn  {/* 👈 在这里修改邮箱 */}
    </span>
  </div>
</header>
```

**修改内容**:
- `FUKUAN HU` → 您的姓名
- `(+86) 16635424707` → 您的电话号码
- `hufukuan@bjfu.edu.cn` → 您的邮箱地址

---

## 2️⃣ 编辑教育背景

**文件位置**: `src/components/education-tabs.tsx`

**查找位置**: 在 `educationData` 数组中（第 6-38 行）

```tsx
const educationData = [
  {
    id: 'bfu',
    school: 'Beijing Forestry University',  // 👈 学校名称
    degree: 'M.S in Forest Science',        // 👈 学位
    direction: 'Direction: Quantitative Remote Sensing of Vegetation',  // 👈 方向（可选）
    location: 'China',                       // 👈 地点
    period: 'Sep 2024 - Present',            // 👈 时间段
    gpa: '89.76/100',                        // 👈 GPA
    courses: [                               // 👈 课程列表
      { name: 'Forestry Planning and Design', score: 92 },
      // ... 更多课程
    ],
  },
  {
    id: 'sxau',
    school: 'Shanxi Agricultural University',
    degree: 'B.S in Geographic Information Science',
    direction: null,                         // 👈 如果没有方向，设为 null
    location: 'China',
    period: 'Sep 2020 - Jun 2024',
    gpa: '4.09/5.0',
    courses: [
      // ... 课程列表
    ],
  },
];
```

**修改内容**:
- `school`: 学校名称
- `degree`: 学位名称
- `direction`: 研究方向（如没有可删除此行或设为 null）
- `location`: 地点
- `period`: 就读时间段
- `gpa`: GPA 成绩
- `courses`: 课程列表，添加或修改课程

**添加新的教育经历**:
在 `educationData` 数组中添加新对象：
```tsx
{
  id: 'unique-id',  // 唯一标识
  school: 'Your University',
  degree: 'Your Degree',
  direction: null,
  location: 'Your Location',
  period: 'Your Period',
  gpa: 'Your GPA',
  courses: [
    { name: 'Course Name', score: 95 },
  ],
},
```

---

## 3️⃣ 编辑研究经历

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<section id="research">` 中（大约第 55-95 行）

每个项目都是一个独立的卡片：

```tsx
<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
  <div className="mb-2 flex items-start justify-between">
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
        Differentiable Inversion Based on 3D Radiative Transfer Acceleration Model  {/* 👈 项目标题 */}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">Advisor: Jingyi Jiang & Jianbo Qi</p>  {/* 👈 导师信息 */}
      <p className="text-sm text-emerald-600 dark:text-emerald-400">Fund by National Natural Science Foundation</p>  {/* 👈 资助信息 */}
    </div>
    <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
      Sep 2024 - Present  {/* 👈 项目时间 */}
    </span>
  </div>
</div>
```

**修改内容**:
- 项目标题
- 导师信息（可选）
- 资助信息（可选，删除不需要的行）
- 项目时间

**添加新的研究项目**:
复制一个完整的 `<div>` 块，然后修改内容。

**添加项目图片**:
像 "Remote Sensing Cloud Platform Development Project" 那样，在项目卡片中添加：
```tsx
<div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
  <img
    src="/your-image.png"  {/* 👈 图片文件名 */}
    alt="Project Description"
    className="w-full object-cover"
  />
</div>
```

注意：图片需要先放到 `public/` 目录。

---

## 4️⃣ 编辑发表论文

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<section id="publications">` 中（大约第 98-110 行）

```tsx
<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
  <p className="text-slate-700 dark:text-slate-300">
    Hu F & Xing S. <span className="font-semibold">"Abandoned Farmland Monitoring Platform V1.0"</span>, 2023SR0382179, Authorized.  {/* 👈 论文信息 */}
  </p>
</div>
```

**添加新的论文**:
复制整个 `<div>` 块，然后修改论文信息。

---

## 5️⃣ 编辑获奖荣誉

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<section id="awards">` 中（大约第 113-145 行）

```tsx
{[
  { award: 'Third Prize in the Esri Cup Chinese Universities GIS Software Development Contest', year: '2025' },
  { award: 'First-Class Academic Scholarship in Beijing Forestry University', year: '2025' },
  // ... 更多奖项
].map((item, index) => (
  <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.award}</p>  {/* 👈 奖项名称 */}
    <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
      {item.year}  {/* 👈 获奖年份 */}
    </span>
  </div>
))}
```

**修改内容**:
- `award`: 奖项名称
- `year`: 获奖年份

**添加新的奖项**:
在数组中添加新对象：
```tsx
{ award: 'Your Award Name', year: '2026' },
```

---

## 6️⃣ 编辑服务经历

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<section id="service">` 中（大约第 148-175 行）

```tsx
<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
  <div className="flex items-start justify-between">
    <div>
      <h3 className="font-semibold text-slate-900 dark:text-slate-50">
        Member / Academic Center, School of Forestry, BFU  {/* 👈 服务经历 */}
      </h3>
    </div>
    <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
      Sep 2025 - Sep 2025  {/* 👈 时间段 */}
    </span>
  </div>
</div>
```

**添加新的服务经历**:
复制整个 `<div>` 块，然后修改内容。

---

## 7️⃣ 编辑技能与兴趣

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<section id="skills">` 中（大约第 178-205 行）

```tsx
<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
  <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Technical</h3>  {/* 👈 技能类别 */}
  <div className="flex flex-wrap gap-2">
    {['MATLAB', 'Python', 'DART', 'LESS', 'ArcGIS', 'ENVI', 'AutoCAD', 'JavaScript', 'English (IELTS 7.0)'].map((skill) => (
      <span key={skill} className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
        {skill}  {/* 👈 技能标签 */}
      </span>
    ))}
  </div>
</div>
```

**修改内容**:
- `Technical`: 技能类别名称（如"编程语言"、"工具软件"等）
- 数组中的技能列表：添加、删除或修改技能

---

## 8️⃣ 添加/更换图片

**图片位置**: `public/` 目录

**步骤**:
1. 将图片文件复制到 `public/` 目录
2. 在代码中引用图片（使用 `/filename.ext` 格式）

**示例**:
```tsx
<img src="/photo.jpg" alt="Description" />
```

**更换个人头像**:
1. 将新照片命名为 `photo.jpg`
2. 覆盖 `public/photo.jpg` 文件

**更换项目图片**:
1. 将新图片放到 `public/` 目录
2. 在 `src/app/page.tsx` 中修改图片路径：
```tsx
<img src="/your-new-image.png" alt="Description" />
```

---

## 9️⃣ 编辑 Blog 部分

**文件位置**: `src/app/page.tsx`

**查找位置**: 在 `<section id="blog">` 中（大约第 208-220 行）

目前是占位设计，您可以将其替换为文章列表：

```tsx
<div className="space-y-4">
  {/* 文章 1 */}
  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
    <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
      Your Article Title
    </h3>
    <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
      Article summary or preview...
    </p>
    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
      <span>January 2025</span>
      <span>•</span>
      <span>5 min read</span>
    </div>
  </div>

  {/* 文章 2 */}
  {/* ... 更多文章 */}
</div>
```

---

## 🔟 修改网站标题和描述

**文件位置**: `src/app/page.tsx`

**查找位置**: 在文件最开头的 metadata 部分（第 1-6 行）

```tsx
export const metadata: Metadata = {
  title: 'Fukuan Hu - Academic Resume',  // 👈 网站标题
  description: 'Academic resume of Fukuan Hu',  // 👈 网站描述
};
```

---

## 🎨 修改颜色主题（可选）

如果您想更改各部分的颜色主题，可以在 `src/app/page.tsx` 中找到各部分的标题：

```tsx
<span className="h-8 w-1 rounded-full bg-blue-600 dark:bg-blue-500" />  {/* 👈 蓝色 */}
<span className="h-8 w-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />  {/* 👈 绿色 */}
<span className="h-8 w-1 rounded-full bg-purple-600 dark:bg-purple-500" />  {/* 👈 紫色 */}
```

Tailwind CSS 颜色选项：
- `blue`, `green`, `purple`, `amber`, `rose`, `cyan`, `orange`, `red`, `yellow`, `indigo`, `pink`, `teal` 等

---

## 💡 编辑技巧

1. **保存后自动更新**: 修改文件后，页面会自动刷新，无需手动刷新浏览器
2. **使用代码编辑器**: 推荐使用 VS Code，支持语法高亮和智能提示
3. **备份修改**: 修改前可以复制原文件作为备份
4. **测试预览**: 修改后查看 `http://localhost:5000` 确认效果

---

## ❓ 常见问题

**Q: 修改后页面没有变化？**
A: 检查文件是否保存，等待 1-2 秒让热更新生效

**Q: 代码出现语法错误？**
A: 检查引号、括号是否配对，确保复制完整的代码块

**Q: 图片不显示？**
A: 确保图片在 `public/` 目录，路径以 `/` 开头

**Q: 如何添加新的章节？**
A: 复制现有的 `<section>` 块，修改 ID 和内容，然后在 `src/components/navigation.tsx` 中添加导航项

---

## 📝 快速参考

| 内容类型 | 文件位置 | 说明 |
|---------|---------|------|
| 个人信息 | `src/app/page.tsx` | Header 部分 |
| 教育背景 | `src/components/education-tabs.tsx` | educationData 数组 |
| 研究经历 | `src/app/page.tsx` | Research Experiences section |
| 发表论文 | `src/app/page.tsx` | Publications section |
| 获奖荣誉 | `src/app/page.tsx` | Awards section（数组） |
| 服务经历 | `src/app/page.tsx` | Service section |
| 技能兴趣 | `src/app/page.tsx` | Skills section |
| Blog | `src/app/page.tsx` | Blog section |
| 图片 | `public/` 目录 | 所有图片文件 |
| 导航栏 | `src/components/navigation.tsx` | 一般不需要修改 |

祝您编辑愉快！如有问题，欢迎随时询问。 🎉
