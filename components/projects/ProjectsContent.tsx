'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCard {
  id: string;
  statusBadge: { text: string; bg: string };
  statusRight: { text: string; bg: string };
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  imgOverlay: { text: string; bg: string };
  tags: string[];
  ticketNo: string;
  ticketBg: string;
  release: string;
  runBg: string;
  runText: string;
  runShadow: string;
  srcHover: string;
  href: string;
}

const allProjects: ProjectCard[] = [
  {
    id: 'public-transport-clustering',
    statusBadge: { text: 'DATA ANALYTICS // RESEARCH', bg: 'bg-terminal-black text-terminal-green shadow-[2px_2px_0px_#00FF41]' },
    statusRight: { text: 'BOGOR REGENCY', bg: 'text-terminal-green bg-terminal-black px-2 py-0.5' },
    title: 'PUBLIC TRANSPORT CLUSTERING',
    desc: 'Conducted a comprehensive data analytics research project to cluster public transportation data. Cleaned, processed, and analyzed complex datasets to provide data-driven insights.',
    imgSrc: '/projects/public-transport-clustering.webp',
    imgAlt: 'Public Transportation Data Clustering Analysis',
    imgOverlay: { text: 'PYTHON // NUMPY', bg: 'bg-brutal-black text-terminal-green' },
    tags: ['PYTHON', 'PANDAS', 'NUMPY'],
    ticketNo: '#001', ticketBg: 'bg-soft-lavender',
    release: '2024.01',
    runBg: 'bg-brutal-black', runText: 'text-terminal-green', runShadow: 'shadow-[2px_2px_0px_#00FF41]',
    srcHover: 'hover:bg-acid-yellow', href: 'https://researchhub.id/index.php/jitek/article/view/8417',
  },
  {
    id: 'member-management',
    statusBadge: { text: 'FULLSTACK // RBAC', bg: 'bg-bubblegum-pink text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'REACT + VITE', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'MEMBER MANAGEMENT SYSTEM',
    desc: 'Scalable web application featuring multi-tier Role-Based Access Control and advanced hierarchical data filtering across national, provincial, municipal, and district levels.',
    imgSrc: '/projects/member-management-system.webp',
    imgAlt: 'Member Management System Interface',
    imgOverlay: { text: 'HIERARCHICAL FILTERING', bg: 'bg-acid-yellow text-brutal-black font-bold' },
    tags: ['REACT', 'TYPESCRIPT', 'TAILWIND', 'TANSTACK QUERY', 'ZUSTAND'],
    ticketNo: '#002', ticketBg: 'bg-electric-mint',
    release: '2024.02',
    runBg: 'bg-brutal-black', runText: 'text-electric-mint', runShadow: 'shadow-[2px_2px_0px_#00F5A0]',
    srcHover: 'hover:bg-soft-lavender', href: '#',
  },
  {
    id: 'mansafara',
    statusBadge: { text: 'FRONTEND // COMPANY_PROFILE', bg: 'bg-cyber-cyan text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'RESPONSIVE', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'MANSAFARA',
    desc: 'Modern and responsive company profile website to effectively showcase business information, portfolio, and professional services.',
    imgSrc: '/projects/mansafara.webp',
    imgAlt: 'Mansafara Company Profile',
    imgOverlay: { text: 'UI/UX OPTIMIZED', bg: 'bg-brutal-black text-cyber-cyan' },
    tags: ['REACT', 'JAVASCRIPT', 'TAILWIND CSS'],
    ticketNo: '#003', ticketBg: 'bg-acid-yellow',
    release: '2024.03',
    runBg: 'bg-brutal-black', runText: 'text-acid-yellow', runShadow: 'shadow-[2px_2px_0px_#FFE600]',
    srcHover: 'hover:bg-bubblegum-pink', href: 'http://mansafara.id',
  },
  {
    id: 'english-everywhere',
    statusBadge: { text: 'FULLSTACK // EDUTECH', bg: 'bg-error text-on-error shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'NEXT.JS', bg: 'text-terminal-green bg-brutal-black px-2 py-0.5' },
    title: 'ENGLISH EVERYWHERE',
    desc: 'Responsive web-based platform designed to present educational content, class schedules, and interactive learning materials through an accessible UI.',
    imgSrc: '/projects/english-everywhere.webp',
    imgAlt: 'English Everywhere Educational Platform',
    imgOverlay: { text: 'SUPABASE INTEGRATED', bg: 'bg-error text-on-error' },
    tags: ['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'EXPRESS.JS', 'SUPABASE'],
    ticketNo: '#004', ticketBg: 'bg-primary-fixed',
    release: '2024.04',
    runBg: 'bg-brutal-black', runText: 'text-bubblegum-pink', runShadow: 'shadow-[2px_2px_0px_#FF5E97]',
    srcHover: 'hover:bg-electric-mint', href: 'http://englisheverywhere.id',
  },
  {
    id: 'angkasa-laundry',
    statusBadge: { text: 'CMS // B2B', bg: 'bg-soft-lavender text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'WORDPRESS', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'ANGKASA MESIN LAUNDRY',
    desc: 'Business website to effectively display laundry machine products and company information for prospective B2B clients.',
    imgSrc: '/projects/angkasa-mesin-laundry.webp',
    imgAlt: 'Angkasa Mesin Laundry Store',
    imgOverlay: { text: 'SEO OPTIMIZED', bg: 'bg-brutal-black text-terminal-green' },
    tags: ['WORDPRESS', 'YOAST SEO', 'B2B_COMMERCE'],
    ticketNo: '#005', ticketBg: 'bg-cyber-cyan',
    release: '2024.05',
    runBg: 'bg-brutal-black', runText: 'text-cyber-cyan', runShadow: 'shadow-[2px_2px_0px_#00E5FF]',
    srcHover: 'hover:bg-acid-yellow', href: 'http://angkasamesinlaundrystore.com',
  },
  {
    id: 'makeover-laundry',
    statusBadge: { text: 'CMS // BUSINESS_OPS', bg: 'bg-terminal-dim-green text-on-primary shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'DIGITAL VISIBILITY', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'MAKEOVER LAUNDRY ID',
    desc: 'Responsive business website designed to support laundry service operations, providing service details and improving digital visibility.',
    imgSrc: '/projects/makeover-laundry.webp',
    imgAlt: 'Makeover Laundry Indonesia',
    imgOverlay: { text: 'SERVICE SHOWCASE', bg: 'bg-terminal-black text-terminal-green' },
    tags: ['WORDPRESS', 'YOAST SEO'],
    ticketNo: '#006', ticketBg: 'bg-canvas-cream',
    release: '2024.06',
    runBg: 'bg-brutal-black', runText: 'text-terminal-green', runShadow: 'shadow-[2px_2px_0px_#00FF41]',
    srcHover: 'hover:bg-soft-lavender', href: 'http://makeoverlaundryindonesia.com',
  },
  {
    id: 'senyawa-living',
    statusBadge: { text: 'CMS // PORTFOLIO', bg: 'bg-bubblegum-pink text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'BRAND SHOWCASE', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'SENYAWA LIVING',
    desc: 'Professional website to showcase the brand\'s portfolio, utilizing a CMS for seamless content updates and management.',
    imgSrc: '/projects/senyawa-living.webp',
    imgAlt: 'Senyawa Living',
    imgOverlay: { text: 'DYNAMIC CONTENT', bg: 'bg-acid-yellow text-brutal-black font-bold' },
    tags: ['WORDPRESS', 'YOAST SEO'],
    ticketNo: '#007', ticketBg: 'bg-soft-lavender',
    release: '2024.07',
    runBg: 'bg-brutal-black', runText: 'text-bubblegum-pink', runShadow: 'shadow-[2px_2px_0px_#FF5E97]',
    srcHover: 'hover:bg-electric-mint', href: 'http://senyawaliving.com',
  },
];

function ProjectTicketCard({ project, index }: { project: ProjectCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: (index % 4) * 0.08 }}
      className="project-card flex flex-col md:flex-row bg-canvas-cream shadow-[6px_6px_0px_#0E0E12] transition-transform hover:-translate-y-1"
    >
      {/* Main Poster Stub */}
      <div className="flex-1 p-space-md flex flex-col justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className={`font-label-sm text-label-sm px-2 py-0.5 ${project.statusBadge.bg}`}>
              {project.statusBadge.text}
            </span>
            <span className={`font-label-sm text-label-sm ${project.statusRight.bg}`}>
              {project.statusRight.text}
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase">{project.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{project.desc}</p>
        </div>

        <div className="relative w-full h-40 bg-surface-container overflow-hidden shadow-[2px_2px_0px_#0E0E12]">
          <Image 
            src={project.imgSrc} 
            alt={project.imgAlt} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover" 
          />
          <div className={`absolute bottom-2 left-2 px-2 py-0.5 font-label-sm text-label-sm ${project.imgOverlay.bg}`}>
            {project.imgOverlay.text}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-brutal-black">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tear-off Stub */}
      <div className={`md:w-48 ${project.ticketBg} p-space-md flex flex-col justify-between items-center text-center shadow-[inset_4px_0px_0px_#0E0E12]`}>
        <div className="flex flex-col items-center gap-1 w-full">
          <span className="font-label-sm text-label-sm text-brutal-black uppercase tracking-wider font-bold">ADM_TICKET</span>
          <span className="font-headline-md text-headline-md text-brutal-black">{project.ticketNo}</span>
          <div className="w-full bg-brutal-black text-on-primary py-1 font-label-sm text-label-sm">RELEASE: {project.release}</div>
        </div>

        {/* Barcode */}
        <div className="w-full py-space-sm flex justify-center items-center">
          <div className="h-10 flex items-center gap-1">
            {[1, 2, 0.5, 1.5, 1, 3, 0.5, 2].map((w, i) => (
              <span key={i} className="bg-brutal-black h-full inline-block" style={{ width: `${w * 4}px` }} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-space-xs w-full">
          <a
            href={project.href}
            id={`project-run-${project.id}`}
            className={`${project.runBg} ${project.runText} font-label-sm text-label-sm py-2 px-2 ${project.runShadow} hover:opacity-80 flex items-center justify-center gap-1 transition-all`}
          >
            [RUN ⚡]
          </a>
          <a
            href={project.href}
            id={`project-src-${project.id}`}
            className={`bg-canvas-cream text-brutal-black font-label-sm text-label-sm py-2 px-2 shadow-[2px_2px_0px_#0E0E12] ${project.srcHover} flex items-center justify-center gap-1 transition-all`}
          >
            [SRC ↗]
          </a>
        </div>
      </div>
    </motion.article>
  );
}

const marqueeItems = [
  '■ INDEXING 7 PRODUCTION RUNTIMES',
  '■ FULLSTACK // WEB // DATA ANALYTICS',
  '■ HIGH-PERFORMANCE REACT & NEXT.JS APPS',
  '■ SEAMLESS CMS INTEGRATIONS',
];

export default function ProjectsContent() {
  return (
    <div className="flex flex-col w-full">
      {/* Marquee Runner */}
      <div className="w-full bg-electric-mint overflow-hidden py-1 shadow-[0_3px_0px_#0E0E12]">
        <div className="flex whitespace-nowrap gap-space-xl font-label-md text-label-md text-brutal-black tracking-widest font-bold animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-2">{item}</span>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-space-xl">
        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-space-lg"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="bg-brutal-black text-terminal-green px-space-xs py-0.5 font-label-sm text-label-sm shadow-[2px_2px_0px_#00FF41]">
                  DB_ROUTER: /VAR/RUN/PROJECTS
                </span>
                <span className="bg-acid-yellow text-brutal-black px-space-xs py-0.5 font-label-sm text-label-sm shadow-[2px_2px_0px_#0E0E12] font-bold">
                  LIVE TELEMETRY
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-brutal-black uppercase tracking-tight">
                ALL PROJECTS // ARCHIVE DIRECTORY [V4.02]
              </h1>
            </div>
            <div className="flex items-center gap-space-xs bg-canvas-cream p-space-sm shadow-[4px_4px_0px_#0E0E12]">
              <span className="material-symbols-outlined text-primary text-2xl">memory</span>
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block">TOTAL COMPUTES</span>
                <span className="font-label-lg text-label-lg text-brutal-black">7 SHIPPED REPOS</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container p-space-md shadow-[4px_4px_0px_#0E0E12]">
            <p className="font-body-md text-body-md text-on-surface uppercase tracking-wide">
              <span className="font-bold text-primary">// QUERY RESULT:</span> 7 ENTRIES FOUND. MODERN WEB ARCHITECTURES, DATA ANALYTICS, AND SEAMLESS CONTENT SYSTEMS. ZERO ARTIFICIAL FLUFF.
            </p>
          </div>
        </motion.header>

        {/* Project Grid (2-col, no filter) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-stretch" id="projects-grid">
          {allProjects.map((project, i) => (
            <ProjectTicketCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Pagination placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-canvas-cream p-space-md shadow-[6px_6px_0px_#0E0E12] flex flex-col md:flex-row items-center justify-between gap-space-md"
        >
          <div className="flex items-center gap-space-sm">
            <button
              id="projects-prev-page"
              className="bg-surface-container p-2 shadow-[3px_3px_0px_#0E0E12] hover:bg-bubblegum-pink transition-colors active:translate-x-0.5 active:translate-y-0.5"
              title="Previous Page"
            >
              <span className="material-symbols-outlined text-brutal-black">arrow_back</span>
            </button>
            <span className="font-label-lg text-label-lg text-brutal-black bg-surface-container px-4 py-2 shadow-[3px_3px_0px_#0E0E12]">
              PAGE [ 01 ] OF 01
            </span>
            <button
              id="projects-next-page"
              className="bg-surface-container p-2 shadow-[3px_3px_0px_#0E0E12] hover:bg-electric-mint transition-colors active:translate-x-0.5 active:translate-y-0.5"
              title="Next Page"
            >
              <span className="material-symbols-outlined text-brutal-black">arrow_forward</span>
            </button>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant">
            SHOWING 7 OF 7 TOTAL REPOSITORIES
          </div>
        </motion.div>
      </div>
    </div>
  );
}
