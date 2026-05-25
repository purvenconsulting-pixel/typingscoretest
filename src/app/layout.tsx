import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL('https://typingscoretest.com'),
  title: {
    default: "Free Typing Speed Test — Measure Your WPM | TypingScoreTest",
    template: "%s | TypingScoreTest",
  },
  description: "Take the most accurate free typing speed test online. Measure your words per minute (WPM), accuracy, and track your improvement. Practice with real-time feedback and detailed results.",
  keywords: ["typing speed test", "wpm test", "typing test", "words per minute", "typing practice", "typing accuracy", "keyboard speed test", "free typing test"],
  authors: [{ name: "TypingScoreTest" }],
  creator: "TypingScoreTest",
  publisher: "TypingScoreTest",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://typingscoretest.com',
    siteName: 'TypingScoreTest',
    title: 'Free Typing Speed Test — Measure Your WPM',
    description: 'Take the most accurate free typing speed test online. Measure your WPM, accuracy, and track improvement.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TypingScoreTest' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Typing Speed Test — Measure Your WPM',
    description: 'Take the most accurate free typing speed test online.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://typingscoretest.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
