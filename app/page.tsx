import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ProjectShowcase from '@/components/home/ProjectShowcase';
import SkillsSection from '@/components/home/SkillsSection';
import BentoGrid from '@/components/home/BentoGrid';

export const metadata: Metadata = {
  title: 'PORTO_EMIR.EXE — Fullstack Architect & System Analyst',
  description:
    'Portfolio of Emir Muhammad Al Fariq — Fullstack Architect & System Analyst based in Jakarta. Building scalable distributed systems and unapologetic pop experiences.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative overflow-x-hidden selection:bg-bubblegum-pink selection:text-brutal-black">
      <HeroSection />
      <ProjectShowcase />
      <SkillsSection />
      <BentoGrid />
    </div>
  );
}
