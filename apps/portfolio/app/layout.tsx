import './globals.css';
import { Navigation } from '@monorepo/ui';

export const metadata = {
  title: '个人主页',
  description: '我的个人主页和作品展示',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Navigation currentPath="home" />
        <main>{children}</main>
      </body>
    </html>
  );
}
