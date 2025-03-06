# 个人主页与项目展示 Monorepo

一个使用Turborepo和pnpm管理的现代化个人主页和项目展示平台，专为GitHub Pages部署优化。

## 项目概述

这个monorepo包含一个个人主页应用和多个项目展示应用，使用共享组件和工具库来保持一致性和提高开发效率。主站使用Next.js构建并静态导出，子项目使用Vite构建，全部通过GitHub Pages部署。

## 技术栈

- **构建工具**: Turborepo
- **包管理器**: pnpm
- **前端框架**: Next.js (主站), Vite (子项目)
- **语言**: TypeScript
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions

## 项目结构

```
monorepo/
├── apps/
│   ├── portfolio/          # 个人主页 (Next.js)
│   └── projects/
│       ├── project-a/      # 作品展示 A (Vite)
│       └── project-b/      # 作品展示 B (Vite)
├── packages/               # 共享包
│   ├── config/             # 配置包
│   ├── ui/                 # UI组件库
│   └── utils/              # 工具函数库
├── .github/workflows/      # GitHub Actions工作流
├── turbo.json              # Turborepo配置
├── package.json            # 根项目配置
└── pnpm-workspace.yaml     # pnpm工作区配置
```

## 安装

确保你已安装Node.js (>=18.0.0)和pnpm (8.6.0)。

```bash
# 克隆仓库
git clone <repository-url>
cd monorepo

# 安装依赖
pnpm install
```

## 开发

### 启动所有应用

```bash
pnpm dev
```

### 启动特定应用

```bash
# 启动个人主页
pnpm dev:portfolio

# 启动作品A
pnpm dev:project-a

# 启动作品B
pnpm dev:project-b
```

## 构建

```bash
# 构建所有应用
pnpm build

# 构建个人主页静态文件
pnpm build:static

# 构建所有并生成静态文件
pnpm build:all
```

## GitHub Pages 部署

本项目配置了GitHub Actions自动部署到GitHub Pages。

### 部署配置

1. 在GitHub仓库设置中创建一个名为`GH_PAGES_TOKEN`的密钥，值为具有仓库写入权限的个人访问令牌
2. 修改`.github/workflows/`目录下的工作流文件，将`YOUR_GITHUB_USERNAME`替换为你的GitHub用户名
3. 修改`packages/ui/src/Navigation.tsx`文件中的URL，将`YOUR_GITHUB_USERNAME`替换为你的GitHub用户名

### 部署架构

- **个人主页**: 部署到 `username.github.io`
- **作品A**: 部署到 `username.github.io/project-a`
- **作品B**: 部署到 `username.github.io/project-b`

### 手动部署

也可以手动构建并部署：

```bash
# 构建个人主页静态文件
pnpm build:static

# 将out目录内容推送到你的username.github.io仓库
```

## 自定义域名

如果你有自己的域名，可以按照以下步骤配置：

1. 在DNS提供商处添加适当的记录
2. 取消注释`apps/portfolio/scripts/post-export.js`中的CNAME生成代码
3. 在GitHub仓库设置中配置自定义域名

## 共享组件

- **Navigation**: 统一的导航组件，在所有项目中保持一致的导航体验
- **UI**: 包含可重用的UI组件，确保所有应用的视觉一致性
- **Utils**: 提供通用工具函数和辅助方法

## 贡献指南

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证

MIT
