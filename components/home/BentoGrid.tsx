'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface DiagramData {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  releaseBadge: string;
  releaseBadgeBg: string;
  stubNo: string;
  tags: string[];
  admitText: string;
  passText: string;
  arrowBg: string;
  ticketRotate?: string;
}

// TODO: Replace imgSrc with actual WebP diagram images from /public/diagrams
const diagrams: DiagramData[] = [
  {
    id: 'flow-diagram',
    title: 'BUSINESS FLOW DIAGRAM',
    description: 'End-to-end business process mapping integrating multi-stakeholder interactions with automated system handoffs.',
    imgSrc: '/diagrams/flow-diagram.webp', // TODO: Add flow-diagram.webp to /public/diagrams
    imgAlt: 'Flow Diagram',
    releaseBadge: 'UML: ACTIVITY',
    releaseBadgeBg: 'bg-bubblegum-pink text-brutal-black',
    stubNo: 'SYS-01',
    tags: ['DRAW.IO', 'BPMN 2.0', 'LUCIDCHART'],
    admitText: 'PROCESS_MAP',
    passText: 'FLOW: OPTIMIZED',
    arrowBg: 'bg-electric-mint',
  },
  {
    id: 'sequence-diagram',
    title: 'SYSTEM SEQUENCE DIAGRAM',
    description: 'Detailed chronological interaction mapping between microservices, APIs, and databases during complex transactional flows.',
    imgSrc: '/diagrams/sequence-diagram.webp', // TODO: Add sequence-diagram.webp to /public/diagrams
    imgAlt: 'Sequence Diagram',
    releaseBadge: 'UML: SEQUENCE',
    releaseBadgeBg: 'bg-acid-yellow text-brutal-black',
    stubNo: 'SYS-02',
    tags: ['MERMAID.JS', 'SYSTEM_DESIGN', 'PLANTUML'],
    admitText: 'API_INTERACTION',
    passText: 'LATENCY: MAPPED',
    arrowBg: 'bg-bubblegum-pink',
    ticketRotate: 'lg:-rotate-1',
  },
  {
    id: 'erd',
    title: 'ENTITY RELATIONSHIP DIAGRAM',
    description: 'Relational database schema architecture emphasizing normalization, foreign key constraints, and indexing for high-scale queries.',
    imgSrc: '/diagrams/erd.webp', // TODO: Add erd.webp to /public/diagrams
    imgAlt: 'ERD',
    releaseBadge: 'DATA_MODEL',
    releaseBadgeBg: 'bg-soft-lavender text-brutal-black',
    stubNo: 'SYS-03',
    tags: ['POSTGRESQL', 'SCHEMA_DESIGN', 'DB_DIAGRAM'],
    admitText: 'DB_ARCHITECTURE',
    passText: 'SCHEMA: NORMALIZED',
    arrowBg: 'bg-acid-yellow',
    ticketRotate: 'lg:rotate-1',
  },
];

function DiagramCard({ diagram }: { diagram: DiagramData }) {
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
      className={`project-ticket flex flex-col bg-canvas-cream shadow-[8px_8px_0px_#0E0E12] relative group ${diagram.ticketRotate || ''}`}
    >
      {/* Punch hole top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] z-30" />
      {/* Punch hole bottom */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-surface shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)] z-30" />

      {/* Main poster stub */}
      <div className="p-space-md flex flex-col flex-1 bg-surface-container-low">
        {/* Header meta */}
        <div className="flex items-center justify-between pb-space-xs mb-space-sm border-b-2 border-dashed border-brutal-black/40">
          <span className={`font-label-sm text-label-sm px-space-xs py-0.5 font-bold ${diagram.releaseBadgeBg}`}>
            {diagram.releaseBadge}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
            {diagram.stubNo}
          </span>
        </div>

        {/* Project image */}
        <div className="relative overflow-hidden mb-space-sm shadow-[3px_3px_0px_#0E0E12] bg-brutal-black h-48">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={diagram.imgSrc}
            alt={diagram.imgAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback if image not found
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%230E0E12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FF5E97" font-family="monospace" font-size="8">TODO: Add Image</text></svg>';
            }}
          />
        </div>

        <h3 className="font-headline-md text-headline-md text-brutal-black uppercase tracking-tight mb-space-xs">
          {diagram.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
          {diagram.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1 mb-space-sm">
          {diagram.tags.map((tag) => (
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
            {diagram.admitText}
          </span>
          <span className="font-headline-md text-[20px] leading-tight text-brutal-black uppercase">
            {diagram.passText}
          </span>
        </div>
        <div
          className={`${diagram.arrowBg} text-brutal-black p-space-xs shadow-[3px_3px_0px_#0E0E12] flex items-center justify-center`}
        >
          <span className="material-symbols-outlined text-[24px]">architecture</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl relative z-20" id="system-analyst-diagrams">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl bg-canvas-cream p-space-md shadow-[6px_6px_0px_#0E0E12]"
      >
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="bg-terminal-black text-terminal-green px-space-sm py-0.5 font-label-sm text-label-sm uppercase">
              UML &amp; ARCH DIAGRAMS
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">
              SCHEMA: PRODUCTION
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight">
            SYSTEM ANALYST // ARCHITECTURE MODELS
          </h2>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm text-right">
          Translating complex business rules into robust, scalable, and fully documented system topologies.
        </p>
      </motion.div>

      {/* 3 Diagram Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
        {diagrams.map((diagram) => (
          <DiagramCard key={diagram.id} diagram={diagram} />
        ))}
      </div>
    </section>
  );
}
