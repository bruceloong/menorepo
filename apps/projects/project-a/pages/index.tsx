import { Button, Card } from '@monorepo/ui';
import { truncateText } from '@monorepo/utils';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-8">Project A</h1>

            <Card title="Project A Details">
                <p>{truncateText("This is Project A, a sub-project in our monorepo structure.", 20)}</p>
                <div className="mt-4">
                    <Button>Learn More</Button>
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