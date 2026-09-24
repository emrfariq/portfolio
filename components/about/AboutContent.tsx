'use client';

import { motion } from 'framer-motion';
import SkillsSection from '@/components/home/SkillsSection';
import Image from 'next/image';

const glitchTicker = [
  '/// SECURITY LEVEL: VIP CLEARANCE 04',
  '/// TELEMETRY: 99.999% SLA CERTIFIED',
  '/// ENTITY: SYS_ANALYST.EXE [VERIFIED CARBON-BASED]',
  '/// PROTOCOL: GLITCH_POP_V4',
  '/// COGNITIVE LOAD: OPTIMAL',
  '/// EVENT: LIVE_DOSSIER_FETCH',
];

const timeline = [
  {
    period: 'OCT 2025 — JAN 2026 [COMPLETED]',
    periodBg: 'bg-electric-mint',
    company: 'PT. INDEKSTAT KONSULTAN INDONESIA',
    role: 'SYSTEM ANALYST',
    roleColor: 'text-primary',
    description: 'Collaborated in the full development lifecycle of the Tangerang City Investment Potential Map, successfully translating 100% of government requirements into technical specifications for the engineering team. Optimized the front-end architecture for the company website, ensuring 100% mobile responsiveness and improving estimated page load speed. Executed comprehensive system testing (QA) and UI/UX audits, resolving over 40 visual inconsistencies.',
    cluster: 'SECTOR: GOV-TECH',
    clusterIcon: 'account_tree',
    tags: [
      { text: 'SYSTEM ANALYSIS', plain: true },
      { text: 'QA & AUDIT', plain: true },
      { text: 'REQUIREMENTS GATHERING', plain: true },
      { text: '100% MOBILE RESPONSIVE', highlight: 'bg-bubblegum-pink' },
    ],
  },
  {
    period: 'JAN 2025 — JUN 2025 [COMPLETED]',
    periodBg: 'bg-soft-lavender',
    company: 'PT. JAYA TEKNIK INDONESIA',
    role: 'SYSTEM ANALYST',
    roleColor: 'text-tertiary',
    description: 'Analyzed and mapped over 10 core business processes within the Human Capital division for Odoo ERP implementation. Identified and reported bugs in Odoo 17 modules, contributing to the system go-live. Supported an ERP system optimization projected to reduce manual data entry time for the HR team.',
    cluster: 'SECTOR: ENTERPRISE ERP',
    clusterIcon: 'dns',
    tags: [
      { text: 'ODOO 17', plain: true },
      { text: 'BUSINESS PROCESS MAPPING', plain: true },
      { text: 'ERP IMPLEMENTATION', plain: true },
      { text: 'HR OPTIMIZATION', highlight: 'bg-cyber-cyan' },
    ],
  },
  {
    period: 'SEPT 2024 — JAN 2025 [COMPLETED]',
    periodBg: 'bg-acid-yellow',
    company: 'BEM UNIVERSITAS PEMBANGUNAN JAYA',
    role: 'MINISTRY OF RESEARCH, ACTION AND ADVOCACY',
    roleColor: 'text-on-surface-variant',
    description: 'Actively participated in organizational leadership, coordinating research initiatives, advocacy programs, and student actions to foster an engaged and critically aware university environment.',
    cluster: 'SECTOR: ORGANIZATION',
    clusterIcon: 'groups',
    tags: [
      { text: 'LEADERSHIP', plain: true },
      { text: 'ADVOCACY', plain: true },
      { text: 'RESEARCH INITIATIVES', plain: true },
    ],
  },
  {
    period: 'AUG 2022 — FEB 2026 [COMPLETED]',
    periodBg: 'bg-cyber-cyan',
    company: 'UNIVERSITAS PEMBANGUNAN JAYA',
    role: 'BACHELOR OF INFORMATION SYSTEM',
    roleColor: 'text-primary',
    description: 'Accelerated 3.5-year degree program as a full scholarship awardee. Serving as a Lecture Assistant for Basic Mathematical Logic and Information System, providing consultation sessions, assisting in grading, and offering constructive feedback to students.',
    cluster: 'SECTOR: EDUCATION',
    clusterIcon: 'school',
    tags: [
      { text: 'GPA: 3.71 / 4.00', highlight: 'bg-acid-yellow' },
      { text: 'FULL SCHOLARSHIP', plain: true },
      { text: 'LECTURE ASSISTANT', plain: true },
    ],
  },
];


const polaroids = [
  {
    imgSrc: '/about/music.webp',
    imgAlt: 'Listening to music',
    badgeBg: 'bg-acid-yellow',
    badgeText: 'AUDIO IMMERSION',
    title: 'LISTENING TO MUSIC',
    desc: 'Music is the primary fuel for deep work and relaxation. Always exploring new genres, curating playlists, and discovering sounds that match the energy of the day—whether it\'s lo-fi beats for coding or energetic tracks for a boost.',
    footerLeft: 'CURRENT STATUS:',
    footerRight: 'ON REPEAT',
    footerRightBg: 'bg-bubblegum-pink text-canvas-cream',
    rotate: '-rotate-1',
  },
  {
    imgSrc: '/about/movies.webp',
    imgAlt: 'Watching movies',
    badgeBg: 'bg-bubblegum-pink',
    badgeText: 'CINEMATIC JOURNEYS',
    title: 'WATCHING MOVIES',
    desc: 'Passionate about storytelling through film. From blockbuster sci-fi epics to indie dramas, movies provide a great escape and a source of creative inspiration. Constantly analyzing cinematography and plot structures.',
    footerLeft: 'GENRE PREFERENCE:',
    footerRight: 'SCI-FI & THRILLER',
    footerRightBg: 'bg-electric-mint text-brutal-black',
    rotate: 'rotate-1',
  },
  {
    imgSrc: '/about/games.webp',
    imgAlt: 'Playing games',
    badgeBg: 'bg-cyber-cyan',
    badgeText: 'INTERACTIVE WORLDS',
    title: 'PLAYING GAMES',
    desc: 'Gaming is both a hobby and a way to study interactive design. Immersing in strategy games, RPGs, and fast-paced multiplayer arenas to unwind and appreciate complex game mechanics and world-building.',
    footerLeft: 'PLATFORM:',
    footerRight: 'PC & CONSOLE',
    footerRightBg: 'bg-acid-yellow text-brutal-black',
    rotate: '-rotate-1',
  },
];

const kpis = [
  { value: '400K+', label: 'Peak QPS Sustained', valueColor: 'text-brutal-black' },
  { value: '<14ms', label: 'P99 Edge Latency', valueColor: 'text-primary' },
  { value: '0.00%', label: 'Downtime Tolerated', valueColor: 'text-secondary' },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col w-full selection:bg-bubblegum-pink selection:text-brutal-black">
      {/* Glitch Ticker */}
      <div className="w-full bg-acid-yellow text-brutal-black py-space-xs shadow-[0_4px_0px_#0E0E12] overflow-hidden z-20">
        <div className="flex whitespace-nowrap gap-space-xl font-label-md text-label-md tracking-widest font-bold animate-marquee">
          {[...glitchTicker, ...glitchTicker].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Hero: Dossier Header */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none ambient-grid-dark" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col gap-space-sm mb-space-xl"
        >
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="bg-bubblegum-pink text-brutal-black px-space-md py-space-xs font-label-md text-label-md shadow-[3px_3px_0px_#0E0E12] uppercase tracking-wider">
              CLASSIFIED PERSONNEL DOSSIER // REF: #9901-ALPHA
            </span>
            <span className="bg-electric-mint text-brutal-black px-space-sm py-space-xs font-label-sm text-label-sm shadow-[2px_2px_0px_#0E0E12]">
              CLEARANCE: TIER-4 ARCHITECT
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile lg:text-display-xl text-brutal-black uppercase tracking-tight leading-none drop-shadow-[4px_4px_0px_#FF5E97]">
            EMIR MUHAMMAD AL-FARIQ
          </h1>
          <div className="inline-block self-start bg-brutal-black text-terminal-green px-space-md py-space-xs font-label-lg text-label-lg shadow-[4px_4px_0px_#00E5FF] -rotate-1">
            ⚡ HE CAN BE FULLSTACK PROGRAMMER, IT BUSINESS ANALYST, SYSTEM ANALYST // HE CAN BE ANYTHING
          </div>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10 items-start">
          {/* LEFT: VIP Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative group"
          >
            <div className="w-20 h-5 bg-brutal-black mx-auto mb-[-10px] rounded-full shadow-[2px_2px_0px_#FF5E97] z-30 relative flex items-center justify-center">
              <div className="w-12 h-2 bg-canvas-cream rounded-full" />
            </div>
            <div className="bg-canvas-cream p-space-lg shadow-[8px_8px_0px_#0E0E12] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between pb-space-sm bg-surface-container px-space-sm py-space-xs shadow-[2px_2px_0px_#0E0E12] mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
                  <span className="font-label-md text-label-md text-brutal-black">METROPOLIS CORE NET</span>
                </div>
                <span className="bg-acid-yellow font-label-sm text-label-sm text-brutal-black px-1.5 py-0.5 font-bold">SYS-VIP-04</span>
              </div>

              {/* Developer Photo */}
              {/* TODO: Replace with actual photo — place WebP at /public/profile.webp */}
              <div className="relative overflow-hidden bg-brutal-black shadow-[4px_4px_0px_#0E0E12] mb-space-md aspect-[4/5]">
                <Image
                  src="/profile/profile.webp"
                  alt="Emir Muhammad Al Fariq"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 bg-bubblegum-pink text-brutal-black px-space-sm py-1 font-label-sm text-label-sm shadow-[3px_3px_0px_#0E0E12] rotate-6">
                  ★ NON-SYNTHETIC
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-terminal-black/90 p-space-xs font-label-sm text-label-sm text-terminal-green flex justify-between items-center">
                  <span>SCAN_ID: // 0x48FA9</span>
                  <span className="animate-pulse">● 24 FPS ACTIVE</span>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-space-xs font-body-sm text-body-sm text-brutal-black">
                {[
                  { label: 'SPECIFICATION:', value: 'HUMAN / DISTRIBUTED ARCHITECT' },
                  { label: 'ORIGIN NODE:', value: 'JAKARTA, ID [LATENCY: 12ms]' },
                  { label: 'UPTIME INDEX:', value: '99.998% GLOBAL', valueClass: 'text-terminal-dim-green' },
                  { label: 'PRIMARY DRIVER:', value: 'ETHIOPIAN ROAST + SUB-BASS' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center bg-surface-container-low p-space-xs shadow-[2px_2px_0px_#0E0E12]">
                    <span className="text-on-surface-variant font-label-sm text-label-sm">{item.label}</span>
                    <span className={`font-bold ${item.valueClass || ''}`}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Barcode */}
              <div className="mt-space-md pt-space-sm bg-surface-container-high p-space-sm flex flex-col items-center justify-center gap-1 shadow-[3px_3px_0px_#0E0E12]">
                <div className="flex items-center gap-1 h-8 w-full justify-center opacity-85">
                  {[4, 8, 2, 12, 6, 2, 8, 4, 12, 2, 8, 4, 12, 6].map((w, i) => (
                    <span key={i} className="bg-brutal-black h-full" style={{ width: `${w * 0.5}px` }} />
                  ))}
                </div>
                <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant">SERIAL: 8841-9042-3329-EXEC</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col gap-space-lg"
          >
            <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl shadow-[8px_8px_0px_#0E0E12] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-soft-lavender rounded-full opacity-60 pointer-events-none" />
              <div className="flex items-center gap-space-sm mb-space-md">
                <span className="bg-cyber-cyan text-brutal-black px-space-sm py-0.5 font-label-md text-label-md font-bold shadow-[2px_2px_0px_#0E0E12]">
                  SECTION_01 // THE MANIFESTO
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">SYSTEMS PHILOSOPHY</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight mb-space-md">
                &quot;SOFTWARE SHOULD MAKE PEOPLE{' '}
                <span className="bg-bubblegum-pink text-canvas-cream px-2">FEEL SOMETHING</span>{' '}
                WHEN THEY CLICK.&quot;
              </h2>
              <div className="space-y-space-md font-body-lg text-body-lg text-brutal-black leading-relaxed">
                <p>I bridge the chasm between bulletproof backend systems and hyper-expressive, unapologetic web craft.</p>
                <p>I am an Information Systems graduate from Universitas Pembangunan Jaya. I proved my chops by completing my studies in an accelerated{' '}
                  <span className="bg-acid-yellow px-1 font-bold">3.5 years</span>as a full scholarship awardee with a <span className="bg-acid-yellow px-1 font-bold">3.71 GPA</span> Whether working as a System Analyst or a Fullstack Developer, I refuse to build sanitized grey rectangles. I’m the most laid-back person in the room, but make no mistake, I absolutely murder deadlines and always ship on time.
                </p>
              </div>

              {/* KPI Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm mt-space-lg pt-space-md bg-surface-container p-space-sm shadow-[4px_4px_0px_#0E0E12]">
                {kpis.map((kpi, i) => (
                  <div key={i} className={`p-space-xs ${i === 1 ? 'bg-surface-container-lowest shadow-[2px_2px_0px_#0E0E12]' : ''} ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                    <div className={`font-display-lg text-headline-lg leading-none ${kpi.valueColor}`}>{kpi.value}</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal callout */}
            <div className="bg-brutal-black p-space-md text-terminal-green shadow-[6px_6px_0px_#FF5E97] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs text-cyber-cyan font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  <span>QUERY CURRENT RUNTIME ENVIRONMENT</span>
                </div>
                <p className="font-body-sm text-body-sm text-canvas-cream">
                  $ sysctl -a | grep -E &quot;(philosophy|latency|creativity)&quot;
                </p>
              </div>
              <button
                id="about-execute-dump"
                className="bg-terminal-green text-brutal-black px-space-md py-space-xs font-label-md text-label-md font-bold shadow-[3px_3px_0px_#00E5FF] hover:bg-cyber-cyan transition-transform active:translate-x-0.5 active:translate-y-0.5 whitespace-nowrap"
              >
                EXECUTE DUMP
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="w-full bg-brutal-black text-terminal-green py-space-xs shadow-[0_4px_0px_#FF5E97] overflow-hidden -rotate-1 my-space-md">
        <div className="flex whitespace-nowrap gap-space-xl font-label-lg text-label-lg tracking-widest font-bold animate-marquee">
          {['/// EVENT STREAMS', '/// DISTRIBUTED STATE MACHINES', '/// MICRO-FRONTEND COMPOSITION', '/// ZERO-TRUST ENCLAVES', '/// REACT 19 CONCURRENCY',
            '/// EVENT STREAMS', '/// DISTRIBUTED STATE MACHINES'].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
        </div>
      </div>

      {/* Timeline */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 bg-bubblegum-pink shadow-[1px_1px_0px_#0E0E12]" />
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">EXECUTION TRACE // HISTORY</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight">SYSLOG::JOURNAL & TIMELINE</h2>
          </div>
          <div className="bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-brutal-black shadow-[2px_2px_0px_#0E0E12]">
            SORT: TIMESTAMP_DESC // RECORD COUNT: 03
          </div>
        </div>

        <div className="space-y-space-lg relative">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-lowest p-space-lg shadow-[8px_8px_0px_#0E0E12] transition-transform hover:-translate-y-1"
            >
              <div className="md:col-span-4 flex flex-col justify-between">
                <div className="space-y-space-xs">
                  <span className={`inline-block ${item.periodBg} text-brutal-black px-space-sm py-0.5 font-label-sm text-label-sm shadow-[2px_2px_0px_#0E0E12] font-bold`}>
                    {item.period}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-brutal-black uppercase mt-1">{item.company}</h3>
                  <p className={`font-label-md text-label-md ${item.roleColor}`}>{item.role}</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm pt-space-md">
                  <span className="material-symbols-outlined text-[18px]">{item.clusterIcon}</span>
                  <span>{item.cluster}</span>
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col justify-between space-y-space-md">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description.replace('400,000+', '<strong class="bg-acid-yellow text-brutal-black px-1">400,000+ real-time QPS</strong>') }}
                />
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {item.tags.map((tag) => (
                    <span
                      key={tag.text}
                      className={`px-space-sm py-1 font-label-sm text-label-sm text-brutal-black shadow-[2px_2px_0px_#0E0E12] font-bold ${tag.highlight || 'bg-surface-container'}`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Arsenal */}
      <SkillsSection />

      {/* Outside The Terminal — Polaroids */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 bg-acid-yellow shadow-[1px_1px_0px_#0E0E12]" />
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">ANALOG HARDWARE & CULTURE</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight">OUTSIDE THE TERMINAL</h2>
          </div>
          <span className="bg-brutal-black text-terminal-green px-space-sm py-1 font-label-sm text-label-sm shadow-[3px_3px_0px_#00FF41]">
            IRL_STATUS: ONLINE &amp; HYPERFOCUSED
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
          {polaroids.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: p.rotate === '-rotate-1' ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-canvas-cream p-space-md shadow-[8px_8px_0px_#0E0E12] flex flex-col justify-between ${p.rotate} hover:rotate-0 transition-transform`}
            >
              <div>
                <div className="relative bg-brutal-black mb-space-md aspect-[4/3] overflow-hidden shadow-[3px_3px_0px_#0E0E12]">
                  <Image
                    src={p.imgSrc}
                    alt={p.imgAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                  />
                  <div className={`absolute top-2 left-2 ${p.badgeBg} text-brutal-black px-space-xs py-0.5 font-label-sm text-label-sm font-bold shadow-[2px_2px_0px_#0E0E12]`}>
                    {p.badgeText}
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-brutal-black uppercase mb-1">{p.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container p-space-xs flex items-center justify-between shadow-[2px_2px_0px_#0E0E12]">
                <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">{p.footerLeft}</span>
                <span className={`px-1 font-label-sm text-label-sm font-bold ${p.footerRightBg}`}>{p.footerRight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bubblegum-pink p-space-lg lg:p-space-xl shadow-[10px_10px_0px_#0E0E12] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg"
        >
          <div className="absolute -right-10 -bottom-10 font-display-xl text-canvas-cream/20 pointer-events-none select-none">
            CONNECT
          </div>
          <div className="relative z-10 space-y-space-xs max-w-xl">
            <span className="bg-brutal-black text-terminal-green px-space-sm py-1 font-label-sm text-label-sm shadow-[2px_2px_0px_#FFE600] inline-block mb-1">
              INITIATE CONTACT PROTOCOL // READY FOR WORK
            </span>
            <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight">
              READY TO BUILD SOMETHING UNREASONABLY GOOD?
            </h2>
          </div>
          <a
            href="/contact"
            id="about-contact-cta"
            className="relative z-10 flex-shrink-0 bg-brutal-black text-canvas-cream px-space-xl py-space-md font-label-lg text-label-lg tracking-wider uppercase shadow-[6px_6px_0px_#0E0E12] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_#0E0E12] transition-all flex items-center gap-space-xs"
          >
            OPEN CHANNEL
            <span className="material-symbols-outlined text-[20px]">north_east</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
