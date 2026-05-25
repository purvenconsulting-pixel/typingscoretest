'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AnimatedFAQProps {
  items: FAQItem[];
}

export default function AnimatedFAQ({ items }: AnimatedFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary-200 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-4 flex items-center justify-between text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="flex items-center gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-100 text-primary-600 text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-base font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                {item.question}
              </span>
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-3"
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm pl-16">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
