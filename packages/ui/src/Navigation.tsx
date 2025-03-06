import React from 'react';

interface NavigationProps {
  currentPath?: string;
}

export function Navigation({ currentPath = '' }: NavigationProps) {
  // 根据当前环境确定基础URL
  // 在本地开发时使用相对路径，在生产环境使用绝对URL
  const isProduction = process.env.NODE_ENV === 'production';

  // GitHub Pages URLs
  const portfolioUrl = isProduction ? 'https://YOUR_GITHUB_USERNAME.github.io' : '/';
  const projectAUrl = isProduction ? 'https://YOUR_GITHUB_USERNAME.github.io/project-a' : 'http://localhost:3001';
  const projectBUrl = isProduction ? 'https://YOUR_GITHUB_USERNAME.github.io/project-b' : 'http://localhost:3002';

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className={currentPath === 'home' ? 'active' : ''}>
          <a href={portfolioUrl}>首页</a>
        </li>
        <li className={currentPath === 'project-a' ? 'active' : ''}>
          <a href={projectAUrl}>作品 A</a>
        </li>
        <li className={currentPath === 'project-b' ? 'active' : ''}>
          <a href={projectBUrl}>作品 B</a>
        </li>
      </ul>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .navigation {
            padding: 1rem;
            background-color: #f5f5f5;
            border-bottom: 1px solid #e0e0e0;
          }
          .nav-list {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 2rem;
          }
          .nav-list li {
            margin: 0;
          }
          .nav-list li a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.2s;
          }
          .nav-list li a:hover {
            color: #0070f3;
          }
          .nav-list li.active a {
            color: #0070f3;
          }
        `,
        }}
      />
    </nav>
  );
}
