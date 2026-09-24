import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CursorTrail from '@/components/global/CursorTrail';
import HackerModeManager from '@/components/global/HackerModeManager';
import SpotifyWidget from '@/components/global/SpotifyWidget';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: {
    template: '%s | PORTO_EMIR.EXE — Emir Muhammad Al Fariq',
    default: 'PORTO_EMIR.EXE — Fullstack Architect & System Analyst',
  },
  description:
    'Portfolio of Emir Muhammad Al Fariq — Fullstack Architect & System Analyst. Building scalable distributed systems and unapologetic pop experiences. Jakarta, ID.',
  keywords: [
    'fullstack developer',
    'system analyst',
    'distributed systems',
    'Next.js',
    'TypeScript',
    'portfolio',
    'Jakarta',
  ],
  authors: [{ name: 'Emir Muhammad Al Fariq' }],
  openGraph: {
    title: 'SYS_ANALYST.EXE — Fullstack Architect & System Analyst',
    description: 'Building scalable distributed systems and unapologetic pop experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=JetBrains+Mono:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased">
        <HackerModeManager />
        <CursorTrail />
        <Header />
        <main className="w-full pt-20 bg-surface min-h-[calc(100vh-200px)]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <SpotifyWidget />
      </body>
    </html>
  );
}
