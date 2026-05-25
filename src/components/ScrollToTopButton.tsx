'use client';

import { Zap } from 'lucide-react';

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
    >
      <Zap className="w-4 h-4" /> Take the Test
    </button>
  );
}
