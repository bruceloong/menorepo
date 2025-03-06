import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// 获取仓库名称，用于GitHub Pages部署
// 如果是自定义域名或根域名部署，可以设置为''
const base = '/project-b/';

export default defineConfig({
  plugins: [react()],
  base, // 设置基础路径
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3002,
  },
  build: {
    outDir: 'dist',
    // 生成.nojekyll文件，避免GitHub Pages的Jekyll处理
    emptyOutDir: true,
  },
});
