import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Typing<span className="text-primary-400">ScoreTest</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              The most accurate and reliable free typing speed test tool. Measure your WPM, improve accuracy, and track your progress over time.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              contact@typingscoretest.com
            </p>
          </div>

          {/* Typing Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Typing Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary-400 transition-colors">Typing Speed Test</Link></li>
              <li><Link href="/typing-speed-test" className="text-sm hover:text-primary-400 transition-colors">Speed Test Guide</Link></li>
              <li><Link href="/wpm-test" className="text-sm hover:text-primary-400 transition-colors">WPM Test</Link></li>
              <li><Link href="/typing-accuracy-test" className="text-sm hover:text-primary-400 transition-colors">Accuracy Test</Link></li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Learning Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/improve-typing-speed" className="text-sm hover:text-primary-400 transition-colors">Improve Typing Speed</Link></li>
              <li><Link href="/touch-typing-guide" className="text-sm hover:text-primary-400 transition-colors">Touch Typing Guide</Link></li>
              <li><Link href="/typing-practice-tips" className="text-sm hover:text-primary-400 transition-colors">Practice Tips</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:text-primary-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TypingScoreTest.com. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            We use cookies and Google AdSense to improve your experience and show relevant ads.
          </p>
        </div>
      </div>
    </footer>
  );
}
