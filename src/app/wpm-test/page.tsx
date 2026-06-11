import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WPM Test — Words Per Minute Typing Test & Calculator',
  description: 'Understand WPM (Words Per Minute) testing in depth. Learn how WPM is calculated, what constitutes a good WPM score, and how to measure and improve your typing speed.',
  keywords: ['wpm test', 'words per minute test', 'wpm calculator', 'typing wpm', 'wpm score', 'what is wpm'],
  alternates: { canonical: 'https://typingscoretest.com/wpm-test' },
};

export default function WpmTestPage() {
  const faqData = [
    { question: "What does WPM stand for?", answer: "WPM stands for Words Per Minute. It is the standard unit of measurement for typing speed. One 'word' is defined as five characters (including spaces), which standardizes the measurement regardless of the actual word lengths in the text being typed." },
    { question: "What is the difference between gross WPM and net WPM?", answer: "Gross WPM measures total characters typed divided by 5, divided by time in minutes — it doesn't account for errors. Net WPM subtracts the penalty for errors from gross WPM, giving a more accurate picture of your effective typing speed. Net WPM is the more meaningful metric." },
    { question: "Is 50 WPM a good typing speed?", answer: "50 WPM is slightly above the national average of 40 WPM and is adequate for most office jobs. However, for roles that require extensive typing (writing, programming, data entry), aiming for 60-80 WPM would be more beneficial for productivity." },
    { question: "What WPM do I need for a job?", answer: "Most office jobs expect 40-50 WPM. Administrative assistants typically need 50-65 WPM. Data entry positions often require 60-80 WPM. Transcriptionists usually need 70-100 WPM. Always check specific job requirements, as they vary by role and employer." },
  ];

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">WPM Test</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">WPM Test: Understanding Words Per Minute</h1>
        <p className="text-lg text-gray-600 mb-8">
          A deep dive into WPM testing — the gold standard for measuring typing speed worldwide.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is a WPM Test?</h2>
          <p>
            A WPM (Words Per Minute) test is the most widely used method for measuring typing speed across the 
            world. Unlike simple character-counting methods, WPM testing uses a standardized definition where one 
            &quot;word&quot; equals exactly five characters, including spaces and punctuation marks. This standardization 
            was established to ensure fair comparisons between typists regardless of the specific text they type.
          </p>
          <p>
            The concept of measuring typing speed in words per minute dates back to the typewriter era of the late 
            1800s. Early typist competitions needed a consistent way to compare participants, and the five-character 
            word became the universal standard. This same standard is used today by employers, educational 
            institutions, and typing software worldwide.
          </p>
          <p>
            When you take a WPM test on TypingScoreTest.com, our system tracks every keystroke you make in real 
            time. It counts correct characters, identifies errors, and calculates your speed dynamically throughout 
            the test. This provides not just a final score, but a complete picture of your typing performance 
            including peak speed moments and areas where you slow down.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How WPM Is Calculated</h2>
          <p>
            Understanding the mathematics behind WPM calculation helps you better interpret your results and 
            understand what factors influence your score. There are two primary WPM metrics:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Gross WPM Formula</h3>
          <div className="bg-primary-50 rounded-xl p-6 my-4 border border-primary-100">
            <p className="text-center font-mono text-lg text-primary-900">
              Gross WPM = (Total Characters Typed ÷ 5) ÷ Time in Minutes
            </p>
          </div>
          <p>
            Gross WPM counts every character you type, regardless of whether it was correct or not. If you type 
            300 characters in one minute, your gross WPM would be 300 ÷ 5 = 60 WPM. This metric shows your raw 
            typing speed but doesn&apos;t account for quality.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Net WPM Formula</h3>
          <div className="bg-green-50 rounded-xl p-6 my-4 border border-green-100">
            <p className="text-center font-mono text-lg text-green-900">
              Net WPM = Gross WPM − (Uncorrected Errors ÷ Time in Minutes)
            </p>
          </div>
          <p>
            Net WPM is the more meaningful metric because it penalizes errors. If your gross WPM is 60 but you 
            made 10 uncorrected errors in one minute, your net WPM would be 60 − 10 = 50 WPM. This better 
            reflects your actual productive typing speed since errors need to be found and corrected in real work.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Practical Example</h3>
          <p>
            Let&apos;s walk through a real calculation. Imagine you complete a 60-second typing test and type 
            350 total characters, of which 330 are correct and 20 are incorrect:
          </p>
          <ul className="space-y-2">
            <li>Gross WPM: 350 ÷ 5 ÷ 1 = <strong>70 WPM</strong></li>
            <li>Net WPM: 70 − (20 ÷ 1) = <strong>50 WPM</strong></li>
            <li>Accuracy: 330 ÷ 350 × 100 = <strong>94.3%</strong></li>
          </ul>
          <p>
            This example illustrates why accuracy matters enormously. Despite a fast gross speed of 70 WPM, the 
            20 errors bring the effective speed down to just 50 WPM — a 29% reduction. This is why experienced 
            typists emphasize accuracy first, speed second.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">WPM Benchmarks and Standards</h2>
          <p>
            Different contexts have different WPM expectations. Understanding where you fall on the spectrum helps 
            you set realistic improvement goals and understand whether your current speed meets your needs.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">WPM Range</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Hunt & Peck', '10-25', 'Looking at keyboard, using 2-4 fingers'],
                  ['Beginner Touch Typist', '25-40', 'Learning touch typing, still building muscle memory'],
                  ['Average Typist', '40-55', 'Comfortable with keyboard, adequate for most tasks'],
                  ['Proficient Typist', '55-75', 'Efficient and reliable, good for professional work'],
                  ['Advanced Typist', '75-100', 'Fast and accurate, excellent for writing-intensive roles'],
                  ['Expert Typist', '100-130', 'Exceptional speed, common among professional typists'],
                  ['Elite Typist', '130+', 'Top percentile, competitive typing level'],
                ].map(([cat, wpm, desc], i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{cat}</td>
                    <td className="px-4 py-3 text-sm text-primary-600 font-mono">{wpm}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why WPM Matters in the Modern Workplace</h2>
          <p>
            In 2026, the average knowledge worker spends approximately 4-5 hours per day typing — across emails, 
            documents, messages, and code. At this volume, even modest improvements in typing speed translate to 
            significant time savings. A worker who increases their speed from 40 to 60 WPM saves roughly 30 
            minutes per day, which adds up to over 125 hours (about 16 working days) per year.
          </p>
          <p>
            Beyond raw productivity, faster typing enables better focus on content quality. When you don&apos;t have 
            to think about where keys are located, your cognitive resources are freed up for creative thinking, 
            problem-solving, and composition. This is why professional writers, programmers, and analysts often 
            prioritize typing proficiency as a fundamental skill.
          </p>
          <p>
            Many employers now include typing speed requirements in job descriptions. Administrative roles 
            typically require 50-65 WPM, data entry positions expect 60-80 WPM, and transcription jobs often 
            demand 80-100 WPM. Having a certified or demonstrable typing speed can give you a competitive 
            advantage in the job market.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Improve Your WPM Score</h2>
          <p>
            Improving your WPM takes consistent practice and proper technique. The most impactful step you can 
            take is learning <Link href="/touch-typing-guide" className="text-primary-600 hover:underline">touch typing</Link> — 
            the technique of typing without looking at the keyboard. Touch typists consistently outperform 
            hunt-and-peck typists by 50-100%.
          </p>
          <p>
            Set a realistic improvement schedule. Most people can increase their WPM by 10-15 points within 
            a month of daily 20-minute practice sessions. The key is consistency — short daily sessions are far 
            more effective than occasional long sessions. Use our{' '}
            <Link href="/" className="text-primary-600 hover:underline">free typing test</Link> to track your 
            progress weekly and celebrate improvements.
          </p>
          <p>
            Focus on accuracy before speed. It&apos;s tempting to try to type as fast as possible, but building 
            accurate muscle memory first creates a stronger foundation for speed improvement. Once your accuracy 
            consistently exceeds 95%, you can start pushing for faster speeds without developing bad habits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Test Your WPM Now</h2>
          <p>
            Ready to find out your WPM score? Try our <Link href="/" className="text-primary-600 hover:underline font-medium">free WPM typing test</Link> — 
            it takes less than a minute and provides instant, detailed results. Choose from 15s, 30s, 60s, or 
            120s test durations and get your WPM, accuracy, and character breakdown immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 not-prose">
            {faqData.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-primary-600 list-none flex justify-between items-center">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Article",
            "headline": "WPM Test: Understanding Words Per Minute",
            "description": "A deep dive into WPM testing — the gold standard for measuring typing speed worldwide.",
            "author": { "@type": "Organization", "name": "TypingScoreTest" },
            "publisher": { "@type": "Organization", "name": "TypingScoreTest" },
            "datePublished": "2026-01-15", "dateModified": "2026-05-25"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
          })
        }}
      />
    </div>
  );
}
