import './globals.css';

export const metadata = {
  title: 'Blog - Main Site',
  description: 'Main blog site using Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
