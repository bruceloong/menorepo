/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@monorepo/ui', '@monorepo/utils'],
  output: 'export',
  // 如果不是部署在根域名，取消下面的注释并设置正确的basePath
  // basePath: '/portfolio',
  images: {
    unoptimized: true, // GitHub Pages不支持Next.js的图像优化
  },
  // 确保导出的静态文件包含.nojekyll文件，避免GitHub Pages的Jekyll处理
  // 这需要在导出后手动添加，或通过自定义脚本
};

module.exports = nextConfig;
