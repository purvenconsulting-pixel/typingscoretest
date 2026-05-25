'use client';

import { motion } from 'framer-motion';

const keys = [
  { char: 'W', x: '8%', y: '15%', size: 'text-2xl', delay: 0 },
  { char: 'P', x: '85%', y: '20%', size: 'text-xl', delay: 0.5 },
  { char: 'M', x: '75%', y: '70%', size: 'text-2xl', delay: 1.0 },
  { char: '⌘', x: '12%', y: '75%', size: 'text-xl', delay: 1.5 },
  { char: 'A', x: '92%', y: '45%', size: 'text-lg', delay: 0.8 },
  { char: '⇧', x: '5%', y: '45%', size: 'text-lg', delay: 1.2 },
  { char: 'T', x: '50%', y: '5%', size: 'text-xl', delay: 0.3 },
  { char: '⏎', x: '45%', y: '90%', size: 'text-lg', delay: 1.8 },
];

export default function FloatingKeys() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {keys.map((key, i) => (
        <motion.div
          key={i}
          className={`absolute ${key.size} font-mono font-bold text-primary-300/30 select-none`}
          style={{ left: key.x, top: key.y }}
          animate={{
            y: [0, -15, 0, 10, 0],
            rotate: [0, 5, -3, 2, 0],
            opacity: [0.2, 0.4, 0.3, 0.35, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: key.delay,
            ease: 'easeInOut',
          }}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-primary-200/30 bg-white/50 backdrop-blur-sm flex items-center justify-center shadow-sm">
            {key.char}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
