'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  release: string;
  stubNo: string;
  releaseBadge: string;
  releaseBadgeBg: string;
  statusBadge?: { text: string; bg: string };
  tags: string[];
  admitText: string;
  passText: string;
  arrowBg: string;
  ticketRotate?: string;
  href: string;
}

// TODO: Replace imgSrc with actual WebP images from /public/projects once you add them
// TODO: Replace href with real project URLs
const projects: ProjectData[] = [
  {
    id: 'cyberpunk-telemetry',
    title: 'CYBERPUNK TELEMETRY HUB',
    description: 'Real-time metric telemetry ingestion engine consuming 180,000 socket events/sec. Custom WebGL topology visualizer and low-latency anomaly detector.',
    imgSrc: '/projects/project-1.webp',
    imgAlt: 'High-density retro cyberpunk terminal telemetry screen',
    release: 'RELEASE: 2024.11',
    releaseBadge: 'RELEASE: 2024.11',
    releaseBadgeBg: 'bg-bubblegum-pink text-brutal-black',
    stubNo: 'STUB_NO: #01994',
    statusBadge: { text: 'SYS::STABLE', bg: 'absolute top-2 right-2 bg-acid-yellow text-brutal-black' },
    tags: ['RUST', 'WEBSOCKET', 'GRAFANA', 'TIMESCALEDB'],
    admitText: 'ADMIT ONE // ARCHITECT',
    passText: 'PASS: VIP TIER',
    arrowBg: 'bg-electric-mint',
    href: '#',
  },
  {
    id: 'neo-vapor-commerce',
    title: 'NEO-VAPOR COMMERCE',
    description: 'Headless hyper-scalable transaction layer handling surge inventory drops. Distributed locks over Redis cluster with zero double-spends recorded across 1.2M checkout attempts.',
    imgSrc: '/projects/project-2.webp',
    imgAlt: 'Retro Japanese bootleg style poster aesthetic with neon purple and mint',
    release: 'RELEASE: 2024.08',
    releaseBadge: 'RELEASE: 2024.08',
    releaseBadgeBg: 'bg-acid-yellow text-brutal-black',
    stubNo: 'RATED R // 100K RPS',
    statusBadge: { text: 'BOOTLEG EDITION', bg: 'absolute bottom-2 left-2 bg-bubblegum-pink text-brutal-black' },
    tags: ['NEXT.JS 15', 'POSTGRESQL', 'REDIS', 'STRIPE ENGINE'],
    admitText: 'SECTOR // AUDIT_PASS',
    passText: 'ROW 04 :: SEAT A1',
    arrowBg: 'bg-bubblegum-pink',
    ticketRotate: 'lg:-rotate-1',
    href: '#',
  },
  {
    id: 'synth-soundscape-ai',
    title: 'SYNTH SOUNDSCAPE AI',
    description: 'Browser-native neural audio synthesis platform generating dynamic ambient soundtrack stems based on real-time multiplayer cursor velocity & viewport telemetry.',
    imgSrc: '/projects/project-3.webp',
    imgAlt: 'Vinyl LP record art cover with neon magenta geometric prisms',
    release: 'RELEASE: 2024.03',
    releaseBadge: 'RELEASE: 2024.03',
    releaseBadgeBg: 'bg-soft-lavender text-brutal-black',
    stubNo: 'SERIAL: #008492-X',
    statusBadge: { text: 'AUDIO_DSP // 48kHz', bg: 'absolute top-2 left-2 bg-cyber-cyan text-brutal-black' },
    tags: ['PYTHON', 'WEBRTC', 'TENSORFLOW', 'WEB AUDIO API'],
    admitText: 'VINYL ADMIT // SIDE B',
    passText: 'PRESSING 001/500',
    arrowBg: 'bg-acid-yellow',
    ticketRotate: 'lg:rotate-1',
    href: '#',
  },
];

function TicketCard({ project }: { project: ProjectData }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`project-ticket flex flex-col bg-canvas-cream shadow-[8px_8px_0px_#0E0E12] relative group ${project.ticketRotate || ''}`}
    >
      {/* Punch hole top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] z-30" />
      {/* Punch hole bottom */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-surface shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)] z-30" />

      {/* Main poster stub */}
      <div className="p-space-md flex flex-col flex-1 bg-surface-container-low">
        {/* Header meta */}
        <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b-2 border-dashed border-brutal-black/40">
          <span className={`font-label-sm text-label-sm px-space-xs py-0.5 font-bold ${project.releaseBadgeBg}`}>
            {project.releaseBadge}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
            {project.stubNo}
          </span>
        </div>

        {/* Project image */}
        <div className="relative overflow-hidden mb-space-sm shadow-[3px_3px_0px_#0E0E12] bg-brutal-black h-48">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imgSrc}
            alt={project.imgAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image not found
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%230E0E12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FF5E97" font-family="monospace" font-size="8">TODO: Add Image</text></svg>';
            }}
          />
          {project.statusBadge && (
            <div className={`${project.statusBadge.bg} font-label-sm text-label-sm px-1.5 py-0.5 font-bold`}>
              {project.statusBadge.text}
            </div>
          )}
        </div>

        <h3 className="font-headline-md text-headline-md text-brutal-black uppercase tracking-tight mb-space-xs">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1 mb-space-sm">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-canvas-cream text-brutal-black font-label-sm text-label-sm px-space-xs py-0.5 shadow-[2px_2px_0px_#0E0E12]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Perforated tear-off stub */}
      <div className="bg-surface-container p-space-md border-t-2 border-dashed border-brutal-black flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase">
            {project.admitText}
          </span>
          <span className="font-headline-md text-[20px] leading-tight text-brutal-black uppercase">
            {project.passText}
          </span>
        </div>
        <a
          href={project.href}
          id={`project-link-${project.id}`}
          className={`${project.arrowBg} text-brutal-black p-space-xs shadow-[3px_3px_0px_#0E0E12] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center`}
          aria-label={`View ${project.title}`}
        >
          <span className="material-symbols-outlined text-[24px]">arrow_outward</span>
        </a>
      </div>
    </motion.div>
  );
}

const marqueeItems = [
  '★ DISTRIBUTED SYSTEMS',
  '★ HIGH CONCURRENCY',
  '★ ZERO COMPROMISE UX',
  '★ KAFKA / GO / REACT / THREEJS',
  '★ ARCHITECTING THE WEIRD WEB',
];

export default function ProjectShowcase() {
  return (
    <>
      {/* Infinite Marquee Banner */}
      <section className="w-full overflow-hidden bg-bubblegum-pink py-space-sm shadow-[0_4px_0px_#0E0E12] rotate-[-1deg] my-space-lg scale-105">
        <div className="flex whitespace-nowrap gap-space-xl font-headline-md text-headline-md text-brutal-black uppercase tracking-wider animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </section>

      {/* Project Showcase */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl relative z-20" id="projects">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl bg-canvas-cream p-space-md shadow-[6px_6px_0px_#0E0E12]"
        >
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="bg-brutal-black text-terminal-green px-space-sm py-0.5 font-label-sm text-label-sm uppercase">
                TABLE: REPOSITORIES
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
                ROW COUNT: 03 SELECTED
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight">
              FEATURED ARCHIVES // SELECT * FROM WORK
            </h2>
          </div>

          {/* Barcode */}
          <div className="flex flex-col items-end">
            <div className="font-label-sm text-label-sm text-on-surface mb-1 font-bold tracking-widest">
              TICKET_ID: #SYS-2025-V4
            </div>
            <div className="h-8 flex items-stretch gap-[2px] bg-canvas-cream p-1 shadow-[2px_2px_0px_#0E0E12]">
              {[3, 1, 4, 2, 6, 1, 3, 2, 5, 1, 4, 2, 6].map((w, i) => (
                <span key={i} className="bg-brutal-black" style={{ width: `${w * 2}px` }} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3 Ticket Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
          {projects.map((project) => (
            <TicketCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-space-xl"
        >
          <Link
            href="/projects"
            id="view-all-projects"
            className="group block w-full bg-brutal-black text-canvas-cream p-space-md shadow-[8px_8px_0px_#FF5E97] hover:bg-bubblegum-pink hover:text-brutal-black hover:shadow-[8px_8px_0px_#0E0E12] transition-all overflow-hidden"
          >
            <div className="flex items-center justify-between gap-space-md">
              <span className="font-headline-md text-headline-md uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                VIEW ALL 24+ PROJECTS &amp; EXPERIMENTS
              </span>
              <span className="font-headline-md text-headline-md tracking-widest text-electric-mint group-hover:text-brutal-black">
                ➔ ➔ ➔
              </span>
            </div>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
