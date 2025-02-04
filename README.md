# 自动滚动照片墙 (Auto-scrolling Photo Wall)

一个使用 Vue 3 和 Tailwind CSS 构建的现代照片墙组件，支持自动横向滚动和照片详情查看功能。适合用于展示摄影作品、产品图片或任何图片集合。

## 预览效果

- 照片自动横向滚动
- 无缝循环播放
- 响应式网格布局
- 点击查看大图
- 平滑动画过渡

## 功能特点

- 📱 响应式设计，完美适配各种屏幕尺寸
- 🔄 照片自动横向滚动，无限循环播放
- 🖼️ 自适应网格布局，支持自定义行列数
- 🔍 点击照片查看大图和详细描述
- ✨ 流畅的动画效果和交互体验
- 🎯 图片懒加载，优化性能
- 🛠️ 简单易用的配置选项

## 使用方法

### 1. 基础安装

```bash
# 下载项目文件
git clone [your-repository-url]
cd photo-wall

# 使用 VS Code Live Server 运行（推荐）
1. 安装 Live Server 插件
2. 右键 index.html
3. 选择 "Open with Live Server"
```

### 2. 添加你的照片

在 `components/PhotoWall.js` 中修改 photos 数组：

```javascript
photos: [
  {
    url: "你的照片URL",
    description: "照片描述",
  },
  // 添加更多照片...
];
```

### 3. 自定义配置

#### 调整布局

```javascript
// 在 PhotoWall.js 中修改
photosPerRow: 4,    // 每行照片数量
photosPerColumn: 3  // 每列照片数量
```

#### 修改动画

```css
/* 在 styles.css 中修改 */
.animate-slide {
  animation: slideLeft 30s linear infinite; /* 调整滚动速度 */
}
```

#### 调整间距

```css
/* 在 styles.css 中修改 */
.photo-container {
  gap: 10px; /* 照片间距 */
  padding: 10px; /* 容器内边距 */
}
```

## 项目结构

```
photo-wall/
├── index.html          # 主页面
├── app.js             # Vue 应用入口
├── styles.css         # 样式文件
├── components/        # 组件目录
│   └── PhotoWall.js  # 照片墙组件
└── README.md         # 说明文档
```

## 开发环境要求

- 现代浏览器（Chrome、Firefox、Safari、Edge 等）
- 支持 ES6+ 语法
- 支持 CSS Grid 和 Flexbox

## 技术栈

- Vue 3 - 响应式框架
- Tailwind CSS - 样式框架
- ES6+ - 现代 JavaScript
- CSS3 Animations - 动画效果

## 常见问题

1. **照片不显示？**

   - 检查照片 URL 是否正确
   - 确保照片允许跨域访问
   - 使用 HTTP 服务器运行项目

2. **动画不流畅？**

   - 减少同时显示的照片数量
   - 压缩图片大小
   - 调整动画速度

3. **布局混乱？**
   - 确保照片尺寸合适
   - 检查 CSS 样式是否正确加载
   - 调整 grid 布局参数

## 性能优化建议

1. 使用适当大小的图片
2. 启用图片懒加载
3. 合理设置照片数量
4. 使用图片 CDN

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 推送到分支
5. 提交 Pull Request

## 许可证

[MIT License](LICENSE)

## 联系方式

- 项目作者：[W1ndys]
- Email：[w1ndys@outlook.com]
- GitHub：[https://github.com/W1ndys]

## 更新日志

### v1.0.0

- 初始版本发布
- 基础功能实现
- 响应式布局支持
