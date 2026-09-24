'use client';

import { motion } from 'framer-motion';

const skillsData = [
  {
    id: 'analysis',
    category: 'System & Business Analysis',
    icon: 'account_tree',
    bg: 'bg-bubblegum-pink',
    shadow: 'hover:shadow-[6px_6px_0px_#FF5E97]',
    items: ['Requirements Gathering', 'Business Process Mapping', 'System Modeling', 'Database Design'],
  },
  {
    id: 'frontend',
    category: 'Frontend Development',
    icon: 'web',
    bg: 'bg-acid-yellow',
    shadow: 'hover:shadow-[6px_6px_0px_#FFE600]',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    category: 'Backend Development',
    icon: 'dns',
    bg: 'bg-electric-mint',
    shadow: 'hover:shadow-[6px_6px_0px_#00F5A0]',
    items: ['Node.js', 'Express.js', 'Laravel', 'Python', 'REST API'],
  },
  {
    id: 'tools',
    category: 'Tools & Platforms',
    icon: 'build',
    bg: 'bg-cyber-cyan',
    shadow: 'hover:shadow-[6px_6px_0px_#00E5FF]',
    items: ['Git', 'Github', 'Vercel', 'Draw.io', 'Mermaid', 'Power BI', 'Tableau', 'WordPress', 'yoastSEO'],
  },
  {
    id: 'database',
    category: 'Database & Cloud',
    icon: 'database',
    bg: 'bg-soft-lavender',
    shadow: 'hover:shadow-[6px_6px_0px_#D6BCFA]',
    items: ['SQL', 'PostgreSQL', 'Supabase', 'Auth.js'],
  },
  {
    id: 'languages',
    category: 'Languages',
    icon: 'translate',
    bg: 'bg-primary-container',
    shadow: 'hover:shadow-[6px_6px_0px_#FF5E97]',
    items: ['Indonesian (Native)', 'English (Intermediate)'],
  }
];

export default function SkillsSection() {
  return (
    <section className="w-full px-margin-mobile lg:px-margin py-space-xl bg-background flex flex-col gap-space-lg relative z-10 border-t-4 border-brutal-black">
      {/* Tape decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-acid-yellow text-brutal-black px-space-md py-1 font-label-md text-label-md shadow-[3px_3px_0px_#0E0E12] border-2 border-brutal-black -rotate-2">
        // CAPABILITIES_MATRIX
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="bg-brutal-black text-terminal-green px-space-xs py-0.5 font-label-sm text-label-sm shadow-[2px_2px_0px_#00FF41]">
              MODULE: SKILLS_SET
            </span>
            <span className="material-symbols-outlined text-primary text-xl">
              memory
            </span>
          </div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-brutal-black uppercase tracking-tight">
            TECHNICAL SKILLS
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm uppercase tracking-wider bg-canvas-cream p-space-sm shadow-[4px_4px_0px_#0E0E12] border-2 border-brutal-black">
          <span className="font-bold text-primary">Loaded tools:</span> Multidisciplinary stack for architecting end-to-end digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mt-space-md">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`bg-canvas-cream border-4 border-brutal-black p-space-md flex flex-col gap-space-md transition-all duration-300 shadow-[4px_4px_0px_#0E0E12] ${skill.shadow} hover:-translate-y-1 group`}
          >
            <div className="flex items-center gap-space-sm border-b-2 border-brutal-black pb-space-xs">
              <div className={`w-10 h-10 flex items-center justify-center border-2 border-brutal-black ${skill.bg} shadow-[2px_2px_0px_#0E0E12] group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-brutal-black">{skill.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-brutal-black leading-tight flex-1">
                {skill.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="bg-surface-container border border-brutal-black px-2 py-1 font-label-sm text-label-sm text-brutal-black uppercase shadow-[1px_1px_0px_#0E0E12]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
