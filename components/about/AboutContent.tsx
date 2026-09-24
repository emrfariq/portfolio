'use client';

import { motion } from 'framer-motion';

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
    period: '2023 — PRESENT [ACTIVE]',
    periodBg: 'bg-electric-mint',
    company: 'HYPERCORE LABS',
    role: 'LEAD SYSTEM ANALYST & FULLSTACK ENGINEER',
    roleColor: 'text-primary',
    description: 'Spearheading architectural transformations from monolithic web apps to distributed micro-frontend fabrics. Orchestrating event-driven Kafka meshes supporting 400,000+ real-time QPS with zero telemetry blind spots. Engineering proprietary brutalist design token engines deployed across 14 enterprise edge services.',
    cluster: 'CLUSTER: ASIA-PACIFIC-01',
    clusterIcon: 'dns',
    tags: [
      { text: 'APACHE KAFKA', plain: true },
      { text: 'RUST / ACTIX', plain: true },
      { text: 'NEXT.JS 15', plain: true },
      { text: 'KUBERNETES', plain: true },
      { text: 'CQRS ENGINES', highlight: 'bg-bubblegum-pink' },
    ],
  },
  {
    period: '2021 — 2023 [COMPLETED]',
    periodBg: 'bg-soft-lavender',
    company: 'FINTECH SCALER',
    role: 'DISTRIBUTED SYSTEMS DEVELOPER',
    roleColor: 'text-tertiary',
    description: 'Designed and scaled sub-millisecond payment ingestion pipelines with double-entry idempotency guarantees. Architected automated zero-downtime Blue/Green rollout controllers on AWS EKS, dropping transactional checkout drop-off rates by 34% across 8 million monthly active consumer wallets.',
    cluster: 'PIPELINE: PROD-FIN-SEC',
    clusterIcon: 'account_tree',
    tags: [
      { text: 'GO (FIBER)', plain: true },
      { text: 'POSTGRES HYPERTABLE', plain: true },
      { text: 'REDIS CLUSTER', plain: true },
      { text: 'TERRAFORM', plain: true },
      { text: 'ZERO-LOSS AUDIT', highlight: 'bg-cyber-cyan' },
    ],
  },
  {
    period: '2019 — 2021 [COMPLETED]',
    periodBg: 'bg-acid-yellow',
    company: 'STUDIO GLITCH',
    role: 'CREATIVE FRONTEND ARCHITECT',
    roleColor: 'text-on-surface-variant',
    description: 'Constructed award-winning kinetic campaigns, audio-reactive 3D web environments, and bespoke e-commerce experiences for streetwear drops and festival activations. Authored custom fragment shaders and Web Audio DSP synthesizers embedded directly in consumer web browsers.',
    cluster: 'CANVAS: WEBGL_SHADER_LAB',
    clusterIcon: 'brush',
    tags: [
      { text: 'THREE.JS', plain: true },
      { text: 'GLSL SHADERS', plain: true },
      { text: 'WEB AUDIO API', plain: true },
      { text: 'TYPESCRIPT', plain: true },
      { text: 'FWA OF THE DAY x3', highlight: 'bg-acid-yellow' },
    ],
  },
];

const techStack = [
  {
    id: '01',
    title: 'BACKEND & DISTRIBUTED',
    icon: 'terminal',
    desc: 'Engineered for deterministic throughput, strict idempotency, and concurrent fault tolerance.',
    footerBg: 'bg-electric-mint',
    footerLabel: 'TIER: CORE ENGINE',
    items: [
      { name: 'Rust / Actix-Web', tag: 'PRIMARY', tagColor: 'text-terminal-dim-green' },
      { name: 'Go (Fiber / gRPC)', tag: 'HIGH-IO', tagColor: 'text-on-surface-variant' },
      { name: 'Apache Kafka / Redpanda', tag: '400k QPS', tagColor: 'text-bubblegum-pink' },
      { name: 'Postgres Hypertable', tag: 'TIME-SERIES', tagColor: 'text-on-surface-variant' },
      { name: 'Redis Cluster / Dragonfly', tag: 'P99: 0.8ms', tagColor: 'text-terminal-dim-green' },
    ],
  },
  {
    id: '02',
    title: 'FRONTEND & CREATIVE',
    icon: 'palette',
    desc: 'High-contrast kinetic interfaces, generative graphics, and sub-60fps fluid browser runtimes.',
    footerBg: 'bg-bubblegum-pink',
    footerLabel: 'TIER: USER INTERACTION',
    items: [
      { name: 'TypeScript / React 19', tag: 'RSC READY', tagColor: 'text-bubblegum-pink' },
      { name: 'Next.js App Router', tag: 'EDGE SSR', tagColor: 'text-on-surface-variant' },
      { name: 'Three.js / WebGL / GLSL', tag: 'CUSTOM RAW', tagColor: 'text-cyber-cyan' },
      { name: 'TailwindCSS / Neo-Brutalist', tag: 'TOKEN ARCH', tagColor: 'text-on-surface-variant' },
      { name: 'Web Audio API & DSP', tag: 'SYNTHESIS', tagColor: 'text-acid-yellow' },
    ],
  },
  {
    id: '03',
    title: 'DEVOPS & CHAOS',
    icon: 'bolt',
    desc: 'Reproducible declarative orchestration, automated rollbacks, and proactive observability.',
    footerBg: 'bg-acid-yellow',
    footerLabel: 'TIER: RESILIENCE',
    items: [
      { name: 'Kubernetes (k8s) & Helm', tag: 'AUTOSCALING', tagColor: 'text-terminal-dim-green' },
      { name: 'Docker Containers', tag: 'MULTI-ARCH', tagColor: 'text-on-surface-variant' },
      { name: 'Terraform (IaC)', tag: 'AWS + OCI', tagColor: 'text-on-surface-variant' },
      { name: 'Prometheus + Grafana', tag: 'OPENMETRICS', tagColor: 'text-acid-yellow' },
      { name: 'Chaos Mesh / Litmus', tag: 'FAILURE DRILL', tagColor: 'text-error' },
    ],
  },
  {
    id: '04',
    title: 'ARCH PARADIGMS',
    icon: 'hub',
    desc: 'Conceptual frameworks powering resilient, self-healing system lifecycles.',
    footerBg: 'bg-soft-lavender',
    footerLabel: 'TIER: MENTAL MODEL',
    items: [
      { name: 'Event-Driven CQRS', tag: 'ASYNC CORE', tagColor: 'text-bubblegum-pink' },
      { name: 'Domain-Driven (DDD)', tag: 'BOUNDED', tagColor: 'text-on-surface-variant' },
      { name: 'Micro-Frontends', tag: 'FEDERATION', tagColor: 'text-on-surface-variant' },
      { name: 'Zero-Trust Enclaves', tag: 'mTLS 1.3', tagColor: 'text-terminal-dim-green' },
      { name: 'Twelve-Factor Native', tag: 'STATELESS', tagColor: 'text-cyber-cyan' },
    ],
  },
];

const polaroids = [
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnm4ZiSPlNskuP2PbE5yL0wVuNko8mq6Z1PyioxkJsynIvOTQBDtpsAlYfpQdf6f2ILC9_rYQGPkXMx0HcI-7k-UfaUbiXKZMHKwH6pzWeCKhB4rNFIbT89cbjzqSq6hccewxIu5zCsBmozhiWwE4OSEg-MOj9Kc66CyXF9LlhYlurYybm5ZstDtkaeeLObwOhCZfuvLSl94T9Ms4M6qbFm-DrbxubnQQ8Euc9TojkxR6-1Qhouv45',
    imgAlt: 'Custom mechanical keyboard build with pastel keycaps',
    badgeBg: 'bg-acid-yellow',
    badgeText: 'HARDWARE OBSESSION',
    title: 'CUSTOM KEYBOARDS',
    desc: 'Lubed linear switches (Krytox 205g0), custom gasket-mounted polycarbonate plates, and programmed QMK/VIAL rotary dials with mini OLED system readouts. If typing doesn\'t sound like raindrops on marble, rewrite the board.',
    footerLeft: 'SWITCH: GATERON OIL KING',
    footerRight: '62g SPRING',
    footerRightBg: 'bg-bubblegum-pink text-canvas-cream',
    rotate: '-rotate-1',
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhVWRZXtoLbnhiBxW8f0M6U20z-_fw57bkGUTxYXhrryzP3wSiNkuEZOnwETnM2PcLNspuohDWSlVSNREh1Uz1nOIhEU_Zx9UGORSWPD4PAVqOYNg9gk8K83lrD3omJDP8NXo2LNdVm2vtZG5oBcFco2JNXuujczxqd5_WxhXq7KAHmX3_MfAjCMwoMSbu7Ck5tXxgS-JyrGe0N_NBQCTan2WEOsijCbnlU4y1E-C2wwCruOm8Sd8j',
    imgAlt: 'Vinyl LP records and vintage Technics turntable',
    badgeBg: 'bg-bubblegum-pink',
    badgeText: 'HEAVY ROTATION',
    title: 'CITY POP & HYPERPOP',
    desc: 'Deep appreciation for analog warm master pressings paired with blisteringly fast 160 BPM electronic synthesis. Heavy rotation includes Tatsuro Yamashita, Lamp, NewJeans, Charli XCX, and obscure Japanese cassette tapes from 1984.',
    footerLeft: 'RPM: 33 ⅓ & 45',
    footerRight: 'AUDIO ANALOG',
    footerRightBg: 'bg-electric-mint text-brutal-black',
    rotate: 'rotate-1',
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgIPWYrNkkxFcACdm5WpsOua4xfF10bABmg5r52G6FpXJaAAYhROZvAJh3whDHi-t1ggG5i-4bMo22tKqFx6V_pT6TqEAZAvxlRbEkIIyhWPioL7WGzRawf4T9WpQRB1xcxOagnjpiDS5DGYJC-dL9PlZwblGW812JguSLAWYd8l6RA-FB_YFG3mNMnEOuuA5sJify7eDrhZZWbHwqxyIaD8iTmVUgDwrCDFcdqXAJQOeuTxv0kBGf',
    imgAlt: 'Artisanal pour-over coffee setup and arcade rhythm controller',
    badgeBg: 'bg-cyber-cyan',
    badgeText: 'KINETIC RITUALS',
    title: 'COFFEE & RHYTHM SPEEDRUNS',
    desc: 'Manual pour-over calibration dialed to 93°C with a 1:16.2 brew ratio for washed Yirgacheffe beans. When the IDE closes, reaction times are tested on arcade rhythm cabinets (Chunithm & SDVX) at 12.8 speed multipliers.',
    footerLeft: 'TDS YIELD: 21.4%',
    footerRight: 'MAX PERFECT',
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
            PORTO_EMIR.EXE
          </h1>
          <div className="inline-block self-start bg-brutal-black text-terminal-green px-space-md py-space-xs font-label-lg text-label-lg shadow-[4px_4px_0px_#00E5FF] -rotate-1">
            ⚡ FULLSTACK ARCHITECT BY DAY // POP CULTURE &amp; CREATIVE ENGINEER BY NIGHT
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/profile/profile.webp" 
                  alt="Emir Muhammad Al Fariq" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
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
                <p>I bridge the friction-filled chasm between bulletproof, high-concurrency backend distributed systems and hyper-expressive, unapologetic Gen-Z frontend web craft.</p>
                <p>Modern enterprise computing has neutered the web into sanitized grey rectangles and timid design systems. We were promised a neon-soaked virtual frontier; instead, we got endless bland corporate dashboards. I engineer high-velocity software architectures with{' '}
                  <span className="bg-acid-yellow px-1 font-bold">99.999% SLA reliability</span>, wrapped in an aggressive aesthetic identity that commands attention.
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
      <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-surface-container-low shadow-[inset_0_4px_0px_#0E0E12]">
        <div className="mb-space-lg">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 bg-cyber-cyan shadow-[1px_1px_0px_#0E0E12]" />
            <span className="font-label-md text-label-md text-on-surface-variant uppercase">EQUIPMENT & STACK READOUT</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-brutal-black uppercase tracking-tight">COMPLETE TECHNICAL ARSENAL</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
            Zero hype-driven technology choices. Every token and service is battle-tested in high-throughput production environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {techStack.map((stack, i) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-canvas-cream p-space-md shadow-[6px_6px_0px_#0E0E12] flex flex-col justify-between hover:translate-y-[-2px] transition-transform"
            >
              <div>
                <div className="flex items-center justify-between pb-space-sm bg-surface-container px-space-xs py-1 shadow-[2px_2px_0px_#0E0E12] mb-space-md">
                  <span className="font-label-md text-label-md text-brutal-black font-bold">{stack.id} // {stack.title}</span>
                  <span className="material-symbols-outlined text-[18px]">{stack.icon}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{stack.desc}</p>
                <div className="space-y-space-xs">
                  {stack.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-space-xs bg-surface-container-lowest shadow-[2px_2px_0px_#0E0E12]">
                      <span className="font-label-sm text-label-sm font-bold">{item.name}</span>
                      <span className={`font-label-sm text-label-sm ${item.tagColor}`}>{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`mt-space-md pt-space-xs ${stack.footerBg} p-1 text-center font-label-sm text-label-sm text-brutal-black font-bold shadow-[2px_2px_0px_#0E0E12]`}>
                {stack.footerLabel}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imgSrc}
                    alt={p.imgAlt}
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
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
