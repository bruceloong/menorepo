# Monorepo Blog

一个使用Turborepo和pnpm管理的现代化博客和项目展示平台。

## 项目概述

这个monorepo包含一个博客应用和多个项目展示应用，使用共享组件和工具库来保持一致性和提高开发效率。项目使用Next.js构建，通过Turborepo实现高效的构建和依赖管理。

## 技术栈

- **构建工具**: Turborepo
- **包管理器**: pnpm
- **前端框架**: Next.js, React
- **语言**: TypeScript
- **代码规范**: ESLint, Prettier

## 项目结构

```
monorepo-blog/
├── apps/                  # 应用程序
│   ├── blog/              # 博客应用
│   └── projects/          # 项目展示应用
│       ├── project-a/     # 项目A
│       └── project-b/     # 项目B
├── packages/              # 共享包
│   ├── config/            # 配置包
│   ├── ui/                # UI组件库
│   └── utils/             # 工具函数库
├── turbo.json             # Turborepo配置
├── package.json           # 根项目配置
└── pnpm-workspace.yaml    # pnpm工作区配置
```

## 安装

确保你已安装Node.js (>=18.0.0)和pnpm (8.6.0)。

```bash
# 克隆仓库
git clone <repository-url>
cd monorepo-blog

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
# 启动博客应用
pnpm dev:blog

# 启动项目A
pnpm dev:project-a

# 启动项目B
pnpm dev:project-b
```

## 构建

```bash
# 构建所有应用
pnpm build

# 构建特定应用
pnpm build --filter=blog
```

## 代码规范

```bash
# 运行lint
pnpm lint

# 格式化代码
pnpm format
```

## 项目应用

### 博客应用

博客应用是一个使用Next.js构建的现代化博客平台，支持文章发布、分类和评论等功能。

### 项目展示

- **项目A**: [项目A的简短描述]
- **项目B**: [项目B的简短描述]

## 共享包

- **UI**: 包含可重用的UI组件，确保所有应用的视觉一致性
- **Utils**: 提供通用工具函数和辅助方法
- **Config**: 包含共享配置，如ESLint、TypeScript配置等

## 贡献指南

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证
