import type { Metadata } from 'next';
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Classified Personnel Dossier — Emir Muhammad Al Fariq. Fullstack Architect & System Analyst based in Jakarta. Engineering distributed systems with Gen-Z creative energy.',
};

export default function AboutPage() {
  return <AboutContent />;
}
