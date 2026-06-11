import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — TypingScoreTest',
  description: 'Learn about TypingScoreTest, our mission to help people improve their typing speed and accuracy, and the team behind the most reliable free typing test tool.',
  alternates: { canonical: 'https://typingscoretest.com/about' },
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About TypingScoreTest</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Welcome to <strong>TypingScoreTest.com</strong> — the most accurate and reliable free typing speed test 
            available online. Our mission is simple: to help individuals, students, and professionals measure, track, 
            and improve their typing skills using a modern, distraction-free tool.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
          <p>
            In an increasingly digital world, typing proficiency is no longer optional — it&apos;s essential. Whether you&apos;re 
            a student completing assignments, a professional sending emails, or a developer writing code, your typing 
            speed directly impacts your daily productivity. We built TypingScoreTest to provide everyone with access 
            to a professional-quality typing assessment tool, completely free of charge.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What We Offer</h2>
          <ul className="space-y-3">
            <li>
              <strong>Accurate WPM Measurement:</strong> Our test uses the standard formula (characters ÷ 5 ÷ minutes) 
              to calculate your words per minute, ensuring results that are comparable across all typing tests.
            </li>
            <li>
              <strong>Real-Time Feedback:</strong> See your typing speed and accuracy update in real-time as you type, 
              helping you understand your performance at every moment.
            </li>
            <li>
              <strong>Multiple Test Durations:</strong> Choose from 15-second quick checks to 2-minute comprehensive 
              assessments, depending on your needs.
            </li>
            <li>
              <strong>Detailed Results:</strong> After each test, receive a breakdown including WPM, accuracy percentage, 
              correct characters, and error count.
            </li>
            <li>
              <strong>Educational Resources:</strong> Our comprehensive guides cover touch typing, speed improvement 
              techniques, and practice strategies for all skill levels.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Choose TypingScoreTest?</h2>
          <p>
            Unlike many typing test websites that are cluttered with ads or require registration, TypingScoreTest is 
            designed with the user experience in mind. Our clean, modern interface ensures you can focus entirely on 
            the test without distractions. We believe that quality tools should be accessible to everyone, which is 
            why we keep our service completely free with no hidden fees or premium tiers.
          </p>
          <p>
            Our test passages are carefully curated to include a natural mix of common and uncommon words, ensuring 
            that your WPM score reflects real-world typing ability rather than familiarity with specific word patterns. 
            We regularly update our text database to keep tests fresh and challenging.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Commitment to Quality</h2>
          <p>
            We are committed to providing accurate, reliable, and useful typing assessment tools. Our development 
            team continuously improves the testing algorithm, user interface, and educational content to ensure 
            TypingScoreTest remains the best free typing test available. We also maintain comprehensive guides on 
            typing improvement, touch typing techniques, and practice strategies to support your learning journey.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p>
            We value your feedback and suggestions. If you have questions, feature requests, or encounter any issues 
            while using TypingScoreTest, please don&apos;t hesitate to reach out:
          </p>
          <ul className="space-y-2">
            <li><strong>Email:</strong> purvenconsulting@gmail.com</li>
            <li><strong>Website:</strong> <Link href="/" className="text-primary-600 hover:underline">typingscoretest.com</Link></li>
          </ul>
          <p>
            Thank you for choosing TypingScoreTest as your typing improvement companion. We&apos;re honored to be part 
            of your journey toward faster, more accurate typing.
          </p>
        </div>
      </div>
    </div>
  );
}
