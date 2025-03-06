import { Button, Card } from '@monorepo/ui';
import { formatDate, truncateText } from '@monorepo/utils';
import './App.css';

function App() {
  const today = new Date();
  const sampleText = 'This is a very long text that will be truncated for demonstration purposes.';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Project B</h1>

      <Card title="Welcome to Project B">
        <p>Today is {formatDate(today)}</p>
        <p>{truncateText(sampleText, 30)}</p>
        <div className="mt-4">
          <Button>Read More</Button>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Other Projects</h2>
        <div className="flex gap-4">
          <a href="http://localhost:3000">
            <Button variant="secondary">Main Blog</Button>
          </a>
          <a href="http://localhost:3001">
            <Button variant="secondary">Project A</Button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
