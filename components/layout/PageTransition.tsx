'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col w-full"
    >
      {children}
    </motion.div>
  );
}
