# 📝 如何修改网站内容

所有内容都在 **数据文件** 中修改，非常简单！

## 📁 文件结构

```
src/data/
├── profile.ts         # 个人信息（姓名、电话、邮箱）
├── education.ts       # 教育背景
├── research.ts        # 研究经历
├── publications.ts    # 发表论文
├── awards.ts          # 获奖荣誉
├── service.ts         # 服务经历
└── skills.ts          # 技能兴趣
```

---

## 1️⃣ 修改个人信息

**文件**: `src/data/profile.ts`

```typescript
export const profile = {
  name: 'FUKUAN HU',           // 👈 修改姓名
  phone: '(+86) 16635424707',  // 👈 修改电话
  email: 'hufukuan@bjfu.edu.cn', // 👈 修改邮箱
  photo: '/photo.jpg',         // 👈 修改头像文件名
};
```

**更换头像**：
1. 将新照片放到 `public/` 目录
2. 命名为 `photo.jpg`（或修改上面的 `photo` 字段）

---

## 2️⃣ 修改教育背景

**文件**: `src/data/education.ts`

```typescript
export const educations = [
  {
    id: 'bfu',           // 唯一标识（不能重复）
    school: 'Beijing Forestry University',  // 👈 学校名称
    degree: 'M.S in Forest Science',        // 👈 学位
    direction: 'Direction: Quantitative Remote Sensing of Vegetation',  // 👈 研究方向（如没有设为 null）
    location: 'China',    // 👈 地点
    period: 'Sep 2024 - Present',  // 👈 时间段
    gpa: '89.76/100',     // 👈 GPA
    courses: [            // 👈 课程列表
      { name: 'Forestry Planning and Design', score: 92 },
      { name: 'Scientific Writing', score: 97 },
      // ... 添加更多课程
    ],
  },
  {
    id: 'sxau',
    school: 'Shanxi Agricultural University',
    degree: 'B.S in Geographic Information Science',
    direction: null,  // 👈 没有研究方向就设为 null
    location: 'China',
    period: 'Sep 2020 - Jun 2024',
    gpa: '4.09/5.0',
    courses: [
      { name: 'Geographic Information System', score: 96.4 },
      // ...
    ],
  },
];
```

**添加新的教育经历**：
```typescript
{
  id: 'your-id',           // 必须唯一
  school: 'Your School',
  degree: 'Your Degree',
  direction: null,
  location: 'Your Location',
  period: 'Your Period',
  gpa: 'Your GPA',
  courses: [
    { name: 'Course 1', score: 90 },
    { name: 'Course 2', score: 85 },
  ],
},
```

**删除教育经历**：直接删除对应的整个对象即可。

---

## 3️⃣ 修改研究经历

**文件**: `src/data/research.ts`

```typescript
export const researches = [
  {
    title: 'Differentiable Inversion Based on 3D Radiative Transfer Acceleration Model',  // 👈 项目标题
    advisor: 'Jingyi Jiang & Jianbo Qi',  // 👈 导师（如没有可删除此行）
    fund: 'National Natural Science Foundation',  // 👈 资助机构
    period: 'Sep 2024 - Present',  // 👈 时间段
    image: null,  // 👈 项目图片（如没有设为 null）
  },
  {
    title: 'Remote Sensing Cloud Platform Development Project',
    role: 'Project Leader',  // 👈 角色（如没有可删除此行）
    fund: 'Prof. Mingxing Qin',
    period: 'Feb 2022 - Sep 2023',
    image: '/project-image.png',  // 👈 图片路径
  },
];
```

**添加项目图片**：
1. 将图片放到 `public/` 目录
2. 在 `image` 字段填写图片文件名，如 `/my-image.png`

**添加新的研究项目**：
```typescript
{
  title: 'Your Project Title',
  advisor: 'Your Advisor',  // 可选
  role: 'Your Role',        // 可选
  fund: 'Your Fund',
  period: 'Your Period',
  image: '/your-image.png', // 可选，没有则设为 null
},
```

---

## 4️⃣ 修改发表论文

**文件**: `src/data/publications.ts`

```typescript
export const publications = [
  {
    authors: 'Hu F & Xing S.',  // 👈 作者
    title: 'Abandoned Farmland Monitoring Platform V1.0',  // 👈 论文标题
    info: '2023SR0382179, Authorized.',  // 👈 其他信息
  },
];
```

**添加新论文**：
```typescript
{
  authors: 'Author1 & Author2',
  title: 'Paper Title',
  info: 'Conference Name, Year.',
},
```

---

## 5️⃣ 修改获奖荣誉

**文件**: `src/data/awards.ts`

```typescript
export const awards = [
  { name: 'Award Name 1', year: '2025' },
  { name: 'Award Name 2', year: '2024' },
];
```

**添加新奖项**：
```typescript
{ name: 'Your Award Name', year: '2026' },
```

---

## 6️⃣ 修改服务经历

**文件**: `src/data/service.ts`

```typescript
export const services = [
  { title: 'Service Title 1', period: 'Sep 2025 - Present' },
  { title: 'Service Title 2', period: 'Jul 2024 - Aug 2024' },
];
```

**添加新经历**：
```typescript
{ title: 'Your Service Title', period: 'Your Period' },
```

---

## 7️⃣ 修改技能与兴趣

**文件**: `src/data/skills.ts`

```typescript
export const skills = {
  technical: ['MATLAB', 'Python', 'DART'],  // 👈 技术技能
  interests: ['Table Tennis', 'Reading'],   // 👈 兴趣爱好
};
```

**添加技能**：
```typescript
technical: ['Skill1', 'Skill2', 'Skill3'],
```

**删除技能**：直接从数组中删除对应的字符串即可。

---

## 🎨 修改样式（可选）

如果需要修改颜色或其他样式，编辑 `src/app/page.tsx` 文件。

**修改标题颜色**：
找到 `<span className="h-8 w-1 rounded-full bg-blue-600 ...">`，将 `bg-blue-600` 改为其他颜色：
- `bg-red-600` (红色)
- `bg-green-600` (绿色)
- `bg-purple-600` (紫色)
- `bg-amber-600` (橙色)
- 等

---

## 💡 编辑技巧

1. **保存自动更新**：修改文件后，浏览器会自动刷新，无需手动刷新
2. **备份**：修改前可以复制原文件作为备份
3. **使用 VS Code**：推荐使用 VS Code 编辑，支持语法高亮
4. **检查语法**：确保所有括号、引号配对

---

## ❓ 常见问题

**Q: 修改后页面没有变化？**
A: 检查文件是否保存，等待 1-2 秒让热更新生效

**Q: 代码出现错误？**
A: 检查：
  - 所有对象后面有逗号（最后一个除外）
  - 所有字符串用单引号或双引号包裹
  - 数组使用方括号 `[]`，对象使用花括号 `{}`

**Q: 图片不显示？**
A: 确保：
  - 图片在 `public/` 目录
  - 路径以 `/` 开头
  - 文件名大小写正确

---

## 📝 快速参考

| 想修改的内容 | 文件位置 |
|-------------|---------|
| 姓名、电话、邮箱 | `src/data/profile.ts` |
| 教育背景 | `src/data/education.ts` |
| 研究经历 | `src/data/research.ts` |
| 发表论文 | `src/data/publications.ts` |
| 获奖荣誉 | `src/data/awards.ts` |
| 服务经历 | `src/data/service.ts` |
| 技能兴趣 | `src/data/skills.ts` |
| 图片文件 | `public/` 目录 |

---

## 🚀 修改完成后的操作

**本地预览**：
```bash
# 网站会自动刷新，无需重启
```

**部署到 GitHub**：
```bash
git add .
git commit -m "Update content"
git push origin main
```

等待 1-3 分钟，您的网站就会自动更新！

---

**就这么简单！** 🎉 所有内容都在数据文件中，修改后自动生效，无需接触复杂的代码！
