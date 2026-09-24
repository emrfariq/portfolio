'use client';

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

// TODO: Replace imgSrc with real WebP images from /public/projects
// TODO: Replace href with real project/GitHub URLs
const allProjects: ProjectCard[] = [
  {
    id: 'cyberpunk-telemetry',
    statusBadge: { text: 'ID: HUB_9000 // PROD', bg: 'bg-terminal-black text-terminal-green shadow-[2px_2px_0px_#00FF41]' },
    statusRight: { text: '180K/SEC', bg: 'text-terminal-green bg-terminal-black px-2 py-0.5' },
    title: 'CYBERPUNK TELEMETRY HUB',
    desc: 'Real-time metric ingestion engine handling high-concurrency socket events with microsecond persistence pipelines and instant multi-node sync.',
    imgSrc: '/projects/project-1.webp',
    imgAlt: 'Cyberpunk terminal telemetry visualization',
    imgOverlay: { text: 'LATENCY: 1.2ms // P99', bg: 'bg-brutal-black text-terminal-green' },
    tags: ['RUST', 'WEBSOCKETS', 'TIMESCALE_DB', 'GRAFANA'],
    ticketNo: '#001', ticketBg: 'bg-soft-lavender',
    release: '2025.01',
    runBg: 'bg-brutal-black', runText: 'text-terminal-green', runShadow: 'shadow-[2px_2px_0px_#00FF41]',
    srcHover: 'hover:bg-acid-yellow', href: '#',
  },
  {
    id: 'neo-vapor-commerce',
    statusBadge: { text: 'ECOMM_CORE // V3.2', bg: 'bg-bubblegum-pink text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'REDIS CLUSTER', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'NEO-VAPOR COMMERCE',
    desc: 'Distributed checkout surge engine with zero double-spends and distributed locks over Redis cluster. Handles 10k items/second drops.',
    imgSrc: '/projects/project-2.webp',
    imgAlt: 'Vaporwave 3D streetwear checkout interface',
    imgOverlay: { text: 'SURGE RESISTANT: 100K RPS', bg: 'bg-acid-yellow text-brutal-black font-bold' },
    tags: ['NEXT.JS 15', 'POSTGRESQL', 'REDIS_REDLOCK', 'STRIPE_V3'],
    ticketNo: '#002', ticketBg: 'bg-electric-mint',
    release: '2024.11',
    runBg: 'bg-brutal-black', runText: 'text-electric-mint', runShadow: 'shadow-[2px_2px_0px_#00F5A0]',
    srcHover: 'hover:bg-soft-lavender', href: '#',
  },
  {
    id: 'synth-soundscape-ai',
    statusBadge: { text: 'DSP // AUDIO_LAB', bg: 'bg-cyber-cyan text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'WEBRTC_MESH', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'SYNTH SOUNDSCAPE AI',
    desc: 'Browser-native neural audio synthesis with multi-user cursor resonance. Generates algorithmic ambient sound fields through mouse coordinate telemetry.',
    imgSrc: '/projects/project-3.webp',
    imgAlt: 'Audio DSP frequency synthesizer visualization',
    imgOverlay: { text: 'SAMPLE: 96KHZ / 32BIT FLOAT', bg: 'bg-brutal-black text-cyber-cyan' },
    tags: ['PYTHON', 'WEBAUDIO_API', 'WEBRTC', 'TENSORFLOW_JS'],
    ticketNo: '#003', ticketBg: 'bg-acid-yellow',
    release: '2024.08',
    runBg: 'bg-brutal-black', runText: 'text-acid-yellow', runShadow: 'shadow-[2px_2px_0px_#FFE600]',
    srcHover: 'hover:bg-bubblegum-pink', href: '#',
  },
  {
    id: 'chaos-monkey',
    statusBadge: { text: 'INFRA // RESILIENCE', bg: 'bg-error text-on-error shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'K8S CRD', bg: 'text-terminal-green bg-brutal-black px-2 py-0.5' },
    title: 'CHAOS MONKEY ORCHESTRATOR',
    desc: 'Automated Kubernetes pod assassination framework with real-time cluster health topology, simulated network partitions, and auto-remediation audits.',
    imgSrc: '/projects/project-4.webp',
    imgAlt: 'Kubernetes cluster topology with chaos indicators',
    imgOverlay: { text: 'PODS TERMINATED: 48,204', bg: 'bg-error text-on-error' },
    tags: ['GO (GOLANG)', 'CLIENT-GO', 'GRPC', 'DOCKER'],
    ticketNo: '#004', ticketBg: 'bg-primary-fixed',
    release: '2024.06',
    runBg: 'bg-brutal-black', runText: 'text-bubblegum-pink', runShadow: 'shadow-[2px_2px_0px_#FF5E97]',
    srcHover: 'hover:bg-electric-mint', href: '#',
  },
  {
    id: 'chroma-gl',
    statusBadge: { text: 'GRAPHICS // SHADER_AST', bg: 'bg-soft-lavender text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: '60 FPS LOCKED', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'CHROMA_GL: SHADER CANVAS',
    desc: 'WebGL 2.0 raymarched Signed Distance Fields playground with live AST tokenization parser and reactive microphone FFT input integration.',
    imgSrc: '/projects/project-5.webp',
    imgAlt: 'Raymarched geometric fractal forms with chromatic aberration',
    imgOverlay: { text: 'RENDER: 120 DRAW CALLS', bg: 'bg-brutal-black text-terminal-green' },
    tags: ['WEBGL 2.0', 'GLSL', 'THREE.JS', 'TYPESCRIPT'],
    ticketNo: '#005', ticketBg: 'bg-cyber-cyan',
    release: '2024.03',
    runBg: 'bg-brutal-black', runText: 'text-cyber-cyan', runShadow: 'shadow-[2px_2px_0px_#00E5FF]',
    srcHover: 'hover:bg-acid-yellow', href: '#',
  },
  {
    id: 'hyper-ledger',
    statusBadge: { text: 'CRYPTO // ROLLUP_ZK', bg: 'bg-terminal-dim-green text-on-primary shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: '<50MS VALIDATION', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'HYPER-LEDGER WALLET DAEMON',
    desc: 'Sub-50ms cryptographic signature validator for EVM layer-2 state rollups with batch proof aggregation and gas fee forecasting.',
    imgSrc: '/projects/project-6.webp',
    imgAlt: 'Zero-knowledge cryptographic network map',
    imgOverlay: { text: 'ZERO-KNOWLEDGE BATCH: 2048 TX', bg: 'bg-terminal-black text-terminal-green' },
    tags: ['SOLIDITY', 'RUST', 'ACTIX-WEB', 'ZK-SNARKS'],
    ticketNo: '#006', ticketBg: 'bg-canvas-cream',
    release: '2024.01',
    runBg: 'bg-brutal-black', runText: 'text-terminal-green', runShadow: 'shadow-[2px_2px_0px_#00FF41]',
    srcHover: 'hover:bg-soft-lavender', href: '#',
  },
  {
    id: 'neural-subtitler',
    statusBadge: { text: 'EDGE // WASM_AI', bg: 'bg-bubblegum-pink text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'LOCAL ZERO-CLOUD', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'NEURAL SUBTITLER REALTIME',
    desc: 'Edge WASM pipeline transcribing low-latency voice streams with custom phoneme alignment and offline word boundary extraction.',
    imgSrc: '/projects/project-7.webp',
    imgAlt: 'Microphone waveform with speech recognition text',
    imgOverlay: { text: 'INFERENCE: 38MS / CHUNK', bg: 'bg-acid-yellow text-brutal-black font-bold' },
    tags: ['RUST', 'WEB_WORKERS', 'WASM_BINDGEN', 'WHISPER_TINY'],
    ticketNo: '#007', ticketBg: 'bg-soft-lavender',
    release: '2023.10',
    runBg: 'bg-brutal-black', runText: 'text-bubblegum-pink', runShadow: 'shadow-[2px_2px_0px_#FF5E97]',
    srcHover: 'hover:bg-electric-mint', href: '#',
  },
  {
    id: 'kawaii-cluster',
    statusBadge: { text: 'SYSTEMS // DESKTOP_GUI', bg: 'bg-electric-mint text-brutal-black shadow-[2px_2px_0px_#0E0E12]' },
    statusRight: { text: 'PROMETHEUS SYNC', bg: 'text-on-surface-variant bg-surface-container px-2 py-0.5' },
    title: 'KAWAII CLUSTER MONITOR',
    desc: 'Desktop Menubar utility translating live Prometheus cluster health into Tamagotchi-style virtual pet moods and animated behavioral states.',
    imgSrc: '/projects/project-8.webp',
    imgAlt: 'Retro 8-bit virtual pet cluster monitor dashboard',
    imgOverlay: { text: 'PET MOOD: HAPPY (HEALTH 99%)', bg: 'bg-brutal-black text-electric-mint' },
    tags: ['TAURI', 'SVELTE 5', 'PROMETHEUS', 'RUST'],
    ticketNo: '#008', ticketBg: 'bg-acid-yellow',
    release: '2023.07',
    runBg: 'bg-brutal-black', runText: 'text-acid-yellow', runShadow: 'shadow-[2px_2px_0px_#FFE600]',
    srcHover: 'hover:bg-bubblegum-pink', href: '#',
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.imgSrc} 
            alt={project.imgAlt} 
            className="w-full h-full object-cover" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="%230E0E12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23FF5E97" font-family="monospace" font-size="8">TODO: Add Image</text></svg>';
            }}
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
  '■ INDEXING 24 PRODUCTION RUNTIMES',
  '■ 99.98% P99 INGEST LATENCY',
  '■ K8S READY // ZERO-DEPENDENCY WASM ENGINES',
  '■ GLSL RAYMARCH LAB ONLINE',
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
                <span className="font-label-lg text-label-lg text-brutal-black">24 SHIPPED REPOS</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container p-space-md shadow-[4px_4px_0px_#0E0E12]">
            <p className="font-body-md text-body-md text-on-surface uppercase tracking-wide">
              <span className="font-bold text-primary">// QUERY RESULT:</span> 24 ENTRIES FOUND. HARDCORE DISTRIBUTED ARCHITECTURES, AUDIO DSP, WEBGL SHADERS &amp; BOOTLEG EXPERIMENTS. ZERO ARTIFICIAL FLUFF.
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
              PAGE [ 01 ] OF 03
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
            SHOWING 8 OF 24 TOTAL REPOSITORIES
          </div>
        </motion.div>
      </div>
    </div>
  );
}
