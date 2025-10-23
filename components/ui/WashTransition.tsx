'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface WashTransitionProps {
  children: ReactNode;
}

export default function WashTransition({ children }: WashTransitionProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Page content with fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Wash effect overlays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`wash-${pathname}`}
          className="fixed inset-0 pointer-events-none z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
        >
          {/* First wash wave - Lavender Mist */}
          <motion.div
            className="absolute inset-0 bg-lavender-mist origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1], // Smooth wash curve
            }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            }}
          />

          {/* Second wash wave - Mauve Elegant (delayed) */}
          <motion.div
            className="absolute inset-0 bg-mauve-elegant origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            }}
          />

          {/* Third wash wave - Perle Purple (most delayed) */}
          <motion.div
            className="absolute inset-0 bg-perle-purple origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            }}
          />

          {/* Curved reveal overlay */}
          <motion.div
            className="absolute inset-0 bg-cream-luxe origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
