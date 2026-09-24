'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'HOME', href: '/', path: 'home' },
  { label: 'PROJECTS', href: '/projects', path: 'projects' },
  { label: 'ABOUT', href: '/about', path: 'about' },
  { label: 'CONTACT', href: '/contact', path: 'contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { isMobileMenuOpen, setMobileMenuOpen } = useAppStore();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-cream/95 backdrop-blur-md shadow-[4px_4px_0px_#0E0E12]">
        <div className="h-20 w-full px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
          {/* Logo */}
          <div className="flex items-center gap-space-md">
            <Link
              href="/"
              className="flex items-center gap-space-xs bg-brutal-black text-terminal-green px-space-md py-space-xs shadow-[3px_3px_0px_#FF5E97] transition-transform active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-terminal-green text-[18px]">terminal</span>
              <span className="font-label-lg text-label-lg tracking-wider">PORTO_EMIR.EXE</span>
            </Link>

            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-space-xs bg-surface-container px-space-sm py-1 shadow-[2px_2px_0px_#0E0E12]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terminal-green" />
              </span>
              <span className="font-label-sm text-label-sm text-on-surface">STATUS: AVAILABLE FOR WORK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-sm bg-surface-container-low p-1 shadow-[3px_3px_0px_#0E0E12]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.href}
                className={`px-space-md py-space-xs transition-all font-label-md text-label-md ${
                  isActive(link.href)
                    ? 'bg-bubblegum-pink text-brutal-black shadow-[2px_2px_0px_#0E0E12]'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-space-xs bg-brutal-black shadow-[3px_3px_0px_#FF5E97] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-terminal-green"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-terminal-green"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-terminal-green"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-canvas-cream shadow-[-8px_0_0px_#0E0E12] pt-20"
          >
            <nav className="flex flex-col p-space-lg gap-space-sm">
              <div className="bg-brutal-black text-terminal-green px-space-md py-space-xs font-label-sm text-label-sm mb-space-md shadow-[4px_4px_0px_#FF5E97]">
                NAV_MENU :: OPEN
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full px-space-md py-space-md font-headline-md text-headline-md uppercase transition-all ${
                      isActive(link.href)
                        ? 'bg-bubblegum-pink text-brutal-black shadow-[4px_4px_0px_#0E0E12]'
                        : 'text-brutal-black hover:bg-surface-container-high hover:pl-8 border-2 border-brutal-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-auto pt-space-xl border-t-2 border-brutal-black">
                <div className="flex items-center gap-space-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terminal-green" />
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface">STATUS: AVAILABLE FOR WORK</span>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-brutal-black/60 xl:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
