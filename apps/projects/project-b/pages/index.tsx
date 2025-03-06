import { Button, Card } from '@monorepo/ui';
import { formatDate } from '@monorepo/utils';

export default function Home() {
  const today = new Date();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Project B</h1>

      <Card title="Project B Details">
        <p>Today is {formatDate(today)}</p>
        <p>This is Project B, another sub-project in our monorepo.</p>
        <div className="mt-4">
          <Button>Explore</Button>
        </div>
      </Card>

      <div className="mt-8">
        <a href="http://localhost:3000">
          <Button variant="secondary">Back to Main Blog</Button>
        </a>
      </div>
    </main>
  );
}
