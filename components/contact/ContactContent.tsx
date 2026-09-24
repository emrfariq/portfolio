'use client';

import { motion } from 'framer-motion';

const channels = [
  {
    id: 'whatsapp',
    num: '01',
    icon: 'chat',
    iconBg: 'bg-electric-mint',
    label: 'WHATSAPP',
    badge: 'FASTEST_RESPONSE',
    badgeBg: 'bg-electric-mint',
    title: 'QUICK CHAT & INSTANT PING',
    desc: 'Direct priority mobile messaging. Best for urgent collaborations or quick calls.',
    // TODO: Replace with your real WhatsApp number
    contact: '+62 896-4458-3316',
    contactTag: '< 1 HR REPLY',
    contactTagColor: 'text-terminal-dim-green',
    btnText: 'OPEN WHATSAPP [ CHAT NOW ]',
    // TODO: Replace with your real WhatsApp number URL
    href: 'https://wa.me/6289644583316',
    btnBg: 'bg-electric-mint hover:bg-terminal-green',
    hoverShadow: 'hover:shadow-[10px_10px_0px_#00F5A0]',
  },
  {
    id: 'instagram',
    num: '02',
    icon: 'photo_camera',
    iconBg: 'bg-bubblegum-pink',
    label: 'INSTAGRAM',
    badge: 'CASUAL_LOGS',
    badgeBg: 'bg-bubblegum-pink',
    title: 'VISUAL LOGS & STORIES',
    desc: 'Daily development snippets, creative explorations, setup gears, and behind the scenes.',
    // TODO: Replace with your real Instagram handle
    contact: '@emrfariq_',
    contactTag: 'DM OPEN',
    contactTagColor: 'text-primary',
    btnText: 'VISIT INSTAGRAM [ VIEW FEED ]',
    // TODO: Replace with your real Instagram URL
    href: 'https://www.instagram.com/emrfariq_/',
    btnBg: 'bg-bubblegum-pink hover:bg-primary hover:text-white',
    hoverShadow: 'hover:shadow-[10px_10px_0px_#FF5E97]',
  },
  {
    id: 'github',
    num: '03',
    icon: 'terminal',
    iconBg: 'bg-acid-yellow',
    label: 'GITHUB',
    badge: 'OPEN_SOURCE',
    badgeBg: 'bg-acid-yellow',
    title: 'REPOSITORIES & CODEBASE',
    desc: 'Open source libraries, public architectural proofs-of-concept, and starred tools.',
    // TODO: Replace with your real GitHub URL
    contact: 'github.com/emrfariq',
    contactTag: 'ACTIVE REPOS',
    contactTagColor: 'text-on-surface-variant',
    btnText: 'EXPLORE REPOS [ FORK & STAR ]',
    // TODO: Replace with your real GitHub URL
    href: 'https://github.com/emrfariq',
    btnBg: 'bg-acid-yellow hover:bg-brutal-black hover:text-acid-yellow',
    hoverShadow: 'hover:shadow-[10px_10px_0px_#FFE600]',
  },
  {
    id: 'linkedin',
    num: '04',
    icon: 'badge',
    iconBg: 'bg-cyber-cyan',
    label: 'LINKEDIN',
    badge: 'CAREER_LOG',
    badgeBg: 'bg-cyber-cyan',
    title: 'CAREER & PROFESSIONAL NETWORK',
    desc: 'Formal background, enterprise system leadership, client references, and direct messages.',
    // TODO: Replace with your real LinkedIn URL
    contact: 'linkedin.com/in/emirmuhammadal-fariq',
    contactTag: 'ENDORSED',
    contactTagColor: 'text-tertiary',
    btnText: 'CONNECT ON LINKEDIN [ EXPAND NETWORK ]',
    // TODO: Replace with your real LinkedIn URL
    href: 'https://www.linkedin.com/in/emirmuhammadal-fariq/',
    btnBg: 'bg-cyber-cyan hover:bg-brutal-black hover:text-cyber-cyan',
    hoverShadow: 'hover:shadow-[10px_10px_0px_#00E5FF]',
  },
];

export default function ContactContent() {
  return (
    <div className="w-full px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl max-w-7xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-space-md mb-space-xl"
      >
        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="bg-bubblegum-pink text-brutal-black px-space-md py-1 shadow-[3px_3px_0px_#0E0E12] font-label-md text-label-md flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-sm">bolt</span>
            <span>INSTANT_CONNECTION</span>
          </div>
          <div className="bg-terminal-black text-terminal-green px-space-md py-1 shadow-[3px_3px_0px_#00FF41] font-label-md text-label-md flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-ping" />
            <span>ONLINE: READY_TO_CHAT</span>
          </div>
        </div>

        <div className="relative pt-space-xs">
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-lg lg:text-display-xl text-brutal-black tracking-tight uppercase leading-none">
            GET IN TOUCH
            <br />
            <span className="text-primary-container bg-brutal-black px-space-md shadow-[6px_6px_0px_#FF5E97] inline-block -rotate-1 mt-space-xs">
              // DIRECT CHANNELS
            </span>
          </h1>
        </div>

        <p className="font-body-md text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
          Direct frequencies — no long forms or automated queues. Reach me across any of these 4 primary channels:
        </p>
      </motion.div>

      {/* 4 Channel Cards (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {channels.map((ch, i) => (
          <motion.div
            key={ch.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-canvas-cream border-4 border-brutal-black p-space-lg shadow-[8px_8px_0px_#0E0E12] flex flex-col justify-between gap-space-md group hover:-translate-y-1 ${ch.hoverShadow} transition-all`}
          >
            <div className="flex flex-col gap-space-sm">
              {/* Header */}
              <div className="flex items-center justify-between pb-space-xs border-b-2 border-brutal-black">
                <div className="flex items-center gap-space-xs">
                  <div className={`w-8 h-8 ${ch.iconBg} text-brutal-black border-2 border-brutal-black flex items-center justify-center font-bold`}>
                    <span className="material-symbols-outlined text-[20px]">{ch.icon}</span>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-brutal-black">{ch.num} // {ch.label}</span>
                </div>
                <span className={`${ch.badgeBg} text-brutal-black px-2 py-0.5 font-label-sm text-label-sm font-bold border-2 border-brutal-black shadow-[2px_2px_0px_#0E0E12]`}>
                  {ch.badge}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-headline-md text-headline-md text-brutal-black leading-tight">{ch.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{ch.desc}</p>
              </div>

              {/* Contact display */}
              <div className="bg-surface-container-lowest p-space-sm border-2 border-brutal-black font-body-lg text-body-lg font-bold text-brutal-black flex items-center justify-between">
                <span className="tracking-wide text-sm md:text-base break-all">{ch.contact}</span>
                <span className={`font-label-sm text-label-sm flex-shrink-0 ml-2 ${ch.contactTagColor}`}>{ch.contactTag}</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              id={`contact-${ch.id}`}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ch.btnBg} text-brutal-black px-space-md py-space-sm font-label-md text-label-md font-bold border-2 border-brutal-black shadow-[4px_4px_0px_#0E0E12] transition-all flex items-center justify-center gap-space-xs active:translate-x-0.5 active:translate-y-0.5`}
            >
              <span className="text-center leading-tight">{ch.btnText}</span>
              <span className="material-symbols-outlined text-[18px] flex-shrink-0">north_east</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
