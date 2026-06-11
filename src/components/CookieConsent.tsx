'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineOptional = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">🍪 Cookie Notice</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We use cookies to enhance your experience. We also use Google AdSense to display ads, which may use cookies 
            to serve personalized advertisements based on your browsing activity. By clicking &ldquo;Accept All,&rdquo; you consent 
            to the use of all cookies, including those used for advertising. Read our{' '}
            <Link href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link> for more information.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={declineOptional}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
