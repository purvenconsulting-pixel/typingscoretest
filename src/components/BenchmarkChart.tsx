'use client';

import { motion } from 'framer-motion';

const benchmarks = [
  { level: 'Beginner', wpm: '0–25', percent: 17, color: 'from-red-400 to-red-500', textColor: 'text-red-600', bg: 'bg-red-50', desc: 'Hunt & peck typing' },
  { level: 'Below Avg', wpm: '25–40', percent: 27, color: 'from-orange-400 to-orange-500', textColor: 'text-orange-600', bg: 'bg-orange-50', desc: 'Some keyboard familiarity' },
  { level: 'Average', wpm: '40–55', percent: 37, color: 'from-yellow-400 to-yellow-500', textColor: 'text-yellow-600', bg: 'bg-yellow-50', desc: 'Typical office worker' },
  { level: 'Above Avg', wpm: '55–75', percent: 50, color: 'from-blue-400 to-blue-500', textColor: 'text-blue-600', bg: 'bg-blue-50', desc: 'Proficient touch typist' },
  { level: 'Fast', wpm: '75–100', percent: 67, color: 'from-emerald-400 to-emerald-500', textColor: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Professional writer/coder' },
  { level: 'Expert', wpm: '100+', percent: 85, color: 'from-purple-400 to-purple-600', textColor: 'text-purple-600', bg: 'bg-purple-50', desc: 'Competitive / elite' },
];

export default function BenchmarkChart() {
  return (
    <div className="space-y-3">
      {benchmarks.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`flex items-center gap-4 p-3 rounded-xl ${b.bg} group hover:scale-[1.01] transition-transform`}
        >
          <div className="w-20 shrink-0">
            <div className={`text-xs font-bold uppercase tracking-wider ${b.textColor}`}>{b.level}</div>
            <div className="text-sm font-mono font-bold text-gray-900">{b.wpm}</div>
          </div>
          <div className="flex-1">
            <div className="h-6 bg-white/60 rounded-full overflow-hidden relative">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${b.color} relative`}
                initial={{ width: 0 }}
                whileInView={{ width: `${b.percent}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              </motion.div>
            </div>
          </div>
          <div className="w-36 shrink-0 text-xs text-gray-500 hidden sm:block">{b.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}
