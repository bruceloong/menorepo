import { Button, Card, Navigation } from '@monorepo/ui';
import { formatDate, truncateText } from '@monorepo/utils';
import './App.css';

function App() {
  const today = new Date();
  const sampleText = 'This is a very long text that will be truncated for demonstration purposes.';

  return (
    <div>
      <Navigation currentPath="project-a" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">作品 A</h1>

        <Card title="欢迎访问作品 A">
          <p>今天是 {formatDate(today)}</p>
          <p>{truncateText(sampleText, 30)}</p>
          <div className="mt-4">
            <Button>查看更多</Button>
          </div>
        </Card>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">项目描述</h2>
          <p>这是我的作品 A 展示页面，展示了我的技能和创意。</p>
          <p>使用 Vite 构建，部署在 GitHub Pages 上。</p>
        </div>
      </main>
    </div>
  );
}

export default App;
