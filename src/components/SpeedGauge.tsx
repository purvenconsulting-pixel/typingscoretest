'use client';

import { motion } from 'framer-motion';

interface SpeedGaugeProps {
  wpm: number;
  maxWpm?: number;
}

export default function SpeedGauge({ wpm, maxWpm = 150 }: SpeedGaugeProps) {
  const percentage = Math.min((wpm / maxWpm) * 100, 100);
  const strokeDasharray = 283; // circumference of circle r=45
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage * 0.75) / 100;

  const getColor = () => {
    if (wpm >= 80) return '#22c55e';
    if (wpm >= 60) return '#3b82f6';
    if (wpm >= 40) return '#f59e0b';
    return '#ef4444';
  };

  const getLabel = () => {
    if (wpm >= 80) return 'Fast';
    if (wpm >= 60) return 'Above Avg';
    if (wpm >= 40) return 'Average';
    return 'Beginner';
  };

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-[135deg]">
        {/* Background arc */}
        <circle
          cx="50" cy="50" r="45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${strokeDasharray * 0.75} ${strokeDasharray * 0.25}`}
        />
        {/* Animated progress arc */}
        <motion.circle
          cx="50" cy="50" r="45"
          fill="none"
          stroke={getColor()}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: strokeDasharray }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-3xl font-bold font-mono"
          style={{ color: getColor() }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          {wpm}
        </motion.span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">WPM</span>
        <span className="text-xs font-semibold mt-0.5" style={{ color: getColor() }}>{getLabel()}</span>
      </div>
    </div>
  );
}
