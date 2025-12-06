import type { Metadata } from 'next';
import './globals.css';
import { siteMetadata } from '@/data/navigation';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: siteMetadata.author }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
