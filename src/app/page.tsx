import TypingTest from '@/components/TypingTest';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Typing Speed Test — Measure Your WPM Online | TypingScoreTest',
  description: 'Take our free typing speed test to measure your words per minute (WPM) and accuracy. Real-time feedback, multiple durations, and detailed results. No sign-up required.',
  alternates: { canonical: 'https://typingscoretest.com' },
};

export default function Home() {
  const faqData = [
    {
      question: "What is a typing speed test?",
      answer: "A typing speed test measures how fast and accurately you can type. It calculates your Words Per Minute (WPM) by counting the number of correctly typed characters divided by 5, then dividing by the elapsed time in minutes. Our test also tracks your accuracy percentage, giving you a complete picture of your typing proficiency."
    },
    {
      question: "How is WPM calculated?",
      answer: "Words Per Minute (WPM) is calculated using the standard formula: (Total correctly typed characters ÷ 5) ÷ Time in minutes. The division by 5 represents the average word length in English. For example, if you correctly type 300 characters in 1 minute, your WPM would be 60."
    },
    {
      question: "What is a good typing speed?",
      answer: "The average typing speed is around 40 WPM. A speed of 60-80 WPM is considered above average and sufficient for most professional roles. Speeds above 80 WPM are considered fast, and professional typists often exceed 100 WPM. Accuracy is equally important — most employers prefer 95%+ accuracy."
    },
    {
      question: "How can I improve my typing speed?",
      answer: "Practice regularly with proper finger placement using touch typing technique. Focus on accuracy first, then gradually increase speed. Use typing practice tools daily, learn keyboard shortcuts, and try typing without looking at the keyboard. Consistent daily practice of 15-30 minutes can significantly improve your speed within weeks."
    },
    {
      question: "Do I need to create an account?",
      answer: "No, our typing speed test is completely free and requires no sign-up or registration. Simply visit the page, select your preferred test duration, and start typing immediately. Your results are displayed instantly after each test."
    },
    {
      question: "Can I take the test on mobile devices?",
      answer: "While our test works on mobile devices, we recommend using a physical keyboard for the most accurate results. Typing on a touchscreen does not reflect standard keyboard typing speed and may give lower WPM scores."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 via-white to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            ⚡ 100% Free • No Sign-up Required
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 text-balance">
            Free Typing Speed Test
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Measure your words per minute (WPM) and accuracy with our professional-grade typing test. 
            Get instant results and track your improvement over time.
          </p>
        </div>
      </section>

      {/* Typing Test Tool */}
      <section className="py-8 md:py-12 -mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TypingTest />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Testing your typing speed is simple and takes less than a minute. Follow these three easy steps.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Choose Duration', desc: 'Select your preferred test length: 15, 30, 60, or 120 seconds. Shorter tests are great for quick checks, while longer tests give more accurate results.' },
              { icon: '⌨️', title: 'Start Typing', desc: 'Click on the text area and begin typing the displayed passage. The timer starts automatically with your first keystroke. Focus on accuracy over speed.' },
              { icon: '📊', title: 'Get Results', desc: 'See your WPM, accuracy percentage, correct characters, and errors instantly. Compare with average speeds and track your improvement over time.' },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{i + 1}. {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Typing Speed Matters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Typing Speed Matters in 2026</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                In today&apos;s digital-first workplace, typing speed is more than just a nice-to-have skill — it&apos;s a 
                critical productivity factor. Whether you&apos;re a software developer writing code, a content writer 
                crafting articles, a customer service representative responding to queries, or a student taking notes 
                in lectures, your typing speed directly impacts your daily output.
              </p>
              <p>
                Research shows that the average office worker types approximately 40 words per minute (WPM). However, 
                increasing your speed to 60-80 WPM can save you <strong>21 days per year</strong> in cumulative typing time. 
                For professionals who type extensively — such as transcriptionists, programmers, and journalists — 
                speeds of 80-120 WPM are common and expected.
              </p>
              <p>
                Beyond raw speed, <strong>accuracy matters equally</strong>. A fast typist who makes frequent errors 
                actually loses time correcting mistakes. Our typing test measures both metrics simultaneously, helping 
                you understand the complete picture of your typing proficiency. The ideal goal is to achieve both 
                high speed and 95%+ accuracy.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Average Typing Speeds by Profession</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Profession</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Average WPM</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Expected Accuracy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ['General Office Worker', '40-50 WPM', '92-96%'],
                      ['Software Developer', '50-70 WPM', '95-98%'],
                      ['Content Writer / Journalist', '60-80 WPM', '96-99%'],
                      ['Data Entry Specialist', '70-90 WPM', '97-99%'],
                      ['Professional Transcriptionist', '80-120 WPM', '98-99%'],
                      ['Court Reporter', '200-300 WPM', '99%+'],
                    ].map(([prof, wpm, acc], i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700">{prof}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{wpm}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{acc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Improve Your Typing Skills</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our comprehensive guides to boost your typing speed, accuracy, and overall keyboard proficiency.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/typing-speed-test', title: 'Typing Speed Test Guide', desc: 'Everything you need to know about typing speed tests, how they work, and how to interpret your results.', icon: '🏎️' },
              { href: '/wpm-test', title: 'WPM Test Explained', desc: 'Deep dive into Words Per Minute testing, calculation methods, and what your WPM score really means.', icon: '📏' },
              { href: '/typing-accuracy-test', title: 'Typing Accuracy Test', desc: 'Learn why accuracy matters more than speed and how to test and improve your typing precision.', icon: '🎯' },
              { href: '/improve-typing-speed', title: 'Improve Typing Speed', desc: 'Proven techniques and daily exercises to increase your typing speed from beginner to professional level.', icon: '🚀' },
              { href: '/touch-typing-guide', title: 'Touch Typing Guide', desc: 'Master the art of touch typing with our complete guide to proper finger placement and techniques.', icon: '👆' },
              { href: '/typing-practice-tips', title: 'Typing Practice Tips', desc: 'Expert tips for effective typing practice sessions that maximize improvement in minimum time.', icon: '💡' },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-3">{guide.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 cursor-pointer text-lg font-medium text-gray-900 hover:text-primary-600 transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TypingScoreTest - Free Typing Speed Test",
            "url": "https://typingscoretest.com",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Free online typing speed test to measure your WPM and accuracy."
          })
        }}
      />
    </>
  );
}
