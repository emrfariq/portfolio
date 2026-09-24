import Link from 'next/link';

const footerLinks = [
  { label: 'GITHUB', href: 'https://github.com/emrfariq', hoverColor: 'hover:bg-electric-mint' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/emirmuhammadal-fariq/', hoverColor: 'hover:bg-cyber-cyan' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/emrfariq_/', hoverColor: 'hover:bg-bubblegum-pink' },
  { label: 'WHATSAPP', href: 'https://wa.me/6289644583316', hoverColor: 'hover:bg-electric-mint' },
];

const marqueeItems = [
  '/// ARCHITECTURE FIRST',
  '/// FULLSTACK TELEMETRY',
  '/// HIGH VELOCITY RUNTIMES',
  '/// BRUTALIST PRECISION',
  '/// K8S & DISTRIBUTED SYSTEMS',
  '/// ARCHITECTURE FIRST',
  '/// FULLSTACK TELEMETRY',
  '/// HIGH VELOCITY RUNTIMES',
];

export default function Footer() {
  return (
    <footer className="w-full bg-canvas-cream text-on-surface shadow-[0_-4px_0px_#0E0E12]">
      {/* Marquee strip */}
      <div className="w-full overflow-hidden bg-acid-yellow py-space-xs shadow-[0_2px_0px_#0E0E12]">
        <div className="flex whitespace-nowrap gap-space-xl font-label-md text-label-md text-brutal-black tracking-widest font-bold animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="w-full px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md text-brutal-black tracking-normal">PORTO_EMIR</span>
              <span className="bg-bubblegum-pink text-brutal-black font-label-sm text-label-sm px-space-xs py-0.5 shadow-[2px_2px_0px_#0E0E12]">v4.0.2</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Synthesizing deep system architecture, reactive micro-frontends, and high-contrast creative code. Built without sanitization.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-on-surface tracking-wider">CONNECTED NODES</span>
            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-surface-container px-space-sm py-1 font-label-sm text-label-sm text-on-surface ${link.hoverColor} hover:text-brutal-black shadow-[2px_2px_0px_#0E0E12] transition-all`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="md:col-span-3 flex flex-col md:items-end gap-space-xs">
            <div className="bg-brutal-black text-terminal-green px-space-md py-space-sm shadow-[3px_3px_0px_#FFE600] w-full md:w-auto">
              <span className="font-label-sm text-label-sm block text-terminal-dim-green">HACKER_CODE_CLUE:</span>
              <span className="font-label-sm text-label-sm text-terminal-green">↑ ↑ ↓ ↓ ← → ← → B A</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant pt-space-xs">
              © 2026 PORTO_EMIR.EXE // ALL CHIPS RESERVED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
