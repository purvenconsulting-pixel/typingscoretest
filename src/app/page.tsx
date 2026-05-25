import TypingTest from '@/components/TypingTest';
import FloatingKeys from '@/components/FloatingKeys';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedFAQ from '@/components/AnimatedFAQ';
import BenchmarkChart from '@/components/BenchmarkChart';
import SpeedGauge from '@/components/SpeedGauge';
import AnimatedCounter from '@/components/AnimatedCounter';
import Link from 'next/link';
import type { Metadata } from 'next';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import {
  Zap, Target, Clock, TrendingUp, Keyboard, Brain,
  BarChart3, Award, BookOpen, ArrowRight, CheckCircle2,
  Monitor, Briefcase, GraduationCap, MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Typing Speed Test — Measure Your WPM Online | TypingScoreTest',
  description: 'Take our free typing speed test to measure your words per minute (WPM) and accuracy. Real-time feedback, multiple durations, and detailed results. No sign-up required.',
  alternates: { canonical: 'https://typingscoretest.com' },
};

const faqData = [
  {
    question: "What is a good typing speed?",
    answer: "A good typing speed depends on your profession and goals. The average typist reaches 40 WPM, which is adequate for casual use. For office professionals, 50–65 WPM is expected. Content writers and programmers typically type 65–85 WPM, while professional transcriptionists and data entry specialists often exceed 90–120 WPM. Competitive typists can surpass 150 WPM. Focus on reaching at least 60 WPM with 95%+ accuracy for strong professional performance."
  },
  {
    question: "How is WPM calculated?",
    answer: "WPM (Words Per Minute) is calculated using the standardized formula: (Total Correctly Typed Characters ÷ 5) ÷ Time in Minutes. The division by 5 represents the average English word length. For example, if you correctly type 300 characters in 60 seconds, your WPM is (300 ÷ 5) ÷ 1 = 60 WPM. Our test uses Net WPM, which only counts correct characters, giving you a more accurate picture of your effective typing speed."
  },
  {
    question: "What's the difference between WPM and CPM?",
    answer: "WPM (Words Per Minute) and CPM (Characters Per Minute) are related but measured differently. CPM counts every individual character you type per minute, while WPM divides that count by 5 (the standard word length). So 300 CPM equals 60 WPM. CPM is more granular and used in some European countries, while WPM is the global standard for typing tests, job requirements, and competitive typing."
  },
  {
    question: "How can I improve my typing speed?",
    answer: "The most effective approach combines three strategies: (1) Learn touch typing — use all 10 fingers with proper home row placement (ASDF JKL;) without looking at the keyboard. (2) Practice daily for 15–20 minutes using varied text types. (3) Prioritize accuracy over speed — type at a pace where you maintain 97%+ accuracy, and speed will follow naturally as muscle memory develops. Most people see 15–25 WPM improvement within the first month of dedicated practice."
  },
  {
    question: "What is touch typing?",
    answer: "Touch typing is the technique of typing using all ten fingers without looking at the keyboard. Each finger is assigned specific keys based on the home row (ASDF for the left hand, JKL; for the right hand). Through practice, you develop muscle memory that allows automatic, rapid key location. Touch typists consistently type 50–100% faster than hunt-and-peck typists because they eliminate the visual search time for each keystroke."
  },
  {
    question: "Why do different typing tests show different results?",
    answer: "Results vary because tests use different text passages, timing methods, and calculation formulas. Some count gross WPM (all keystrokes including errors), while others count net WPM (subtracting errors). Text difficulty matters too — common words are faster to type than technical jargon. For consistent tracking, always use the same test tool (like TypingScoreTest), the same duration (60 seconds recommended), and test under similar conditions."
  },
  {
    question: "Is typing speed still important in 2026?",
    answer: "Absolutely. Despite advances in voice recognition and AI, typing remains the dominant input method for professional work. The average knowledge worker spends 4–5 hours daily typing across emails, documents, code, and messages. Increasing your speed from 40 to 65 WPM saves approximately 35 minutes per day — that's over 150 hours (19 working days) per year. For programmers, writers, and digital professionals, fast typing is a career multiplier."
  },
  {
    question: "How long should I practice typing each day?",
    answer: "For optimal improvement, practice 15–30 minutes daily. Consistency beats duration — 20 minutes every day produces better results than 3 hours on weekends because muscle memory builds through frequent, spaced repetition. Structure your session: 5 minutes warm-up, 10–15 minutes focused drills targeting weak areas, and 5 minutes free typing. Test your WPM weekly to track progress and adjust your focus areas accordingly."
  },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION — Typing Test Front and Center
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-primary-50 via-indigo-50/30 to-white py-10 md:py-14 overflow-hidden">
        <FloatingKeys />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-5 gap-2 animate-pulse-slow">
              <Zap className="w-4 h-4" />
              100% Free • No Sign-up Required
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 text-balance leading-tight">
              Free Typing Speed Test
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Measure your words per minute (WPM) and accuracy instantly. 
              Start typing below — your test begins with the first keystroke.
            </p>
          </AnimatedSection>

          {/* TYPING TEST — Immediately Interactive */}
          <AnimatedSection delay={0.2}>
            <TypingTest />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          LIVE STATS BAR — Animated Counters
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-indigo-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Keyboard, value: 40, suffix: ' WPM', label: 'Average Speed', color: 'text-blue-400' },
              { icon: Target, value: 95, suffix: '%', label: 'Target Accuracy', color: 'text-green-400' },
              { icon: Clock, value: 21, suffix: ' days', label: 'Saved Per Year', color: 'text-amber-400' },
              { icon: TrendingUp, value: 50, suffix: '%+', label: 'Speed Gain Possible', color: 'text-purple-400' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`text-3xl md:text-4xl font-bold font-mono ${stat.color}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW IT WORKS — Three Steps with Icons
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Testing your typing speed is simple and takes less than a minute. Follow these three easy steps 
              to measure your WPM and begin your improvement journey.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Keyboard, title: 'Choose Duration', desc: 'Select your preferred test length: 15, 30, 60, or 120 seconds. Longer tests give more stable, reliable WPM measurements that better reflect your true typing ability.', color: 'bg-blue-500' },
              { icon: Zap, title: 'Start Typing', desc: 'Click the text area and begin typing the displayed passage. The timer starts automatically with your first keystroke. Focus on smooth, accurate keystrokes over raw speed.', color: 'bg-primary-600' },
              { icon: BarChart3, title: 'Get Results', desc: 'See your WPM, accuracy percentage, correct characters, and error count instantly. Compare against professional benchmarks and track your improvement over time.', color: 'bg-emerald-500' },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-2">Step {i + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WPM BENCHMARKS & FORMULA — Visual Section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">WPM Benchmarks &amp; Formula</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Understand where you stand and how Words Per Minute is calculated using the universal typing standard.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Benchmark Chart */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  Typing Speed Benchmarks
                </h3>
                <p className="text-sm text-gray-500 mb-5">Where does your WPM rank?</p>
                <BenchmarkChart />
              </div>
            </AnimatedSection>

            {/* WPM Formula + Speed Gauge */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {/* Formula Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary-600" />
                    How WPM Is Calculated
                  </h3>

                  {/* Net WPM */}
                  <div className="bg-gradient-to-r from-primary-50 to-indigo-50 rounded-xl p-5 mb-4 border border-primary-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2">Net WPM (Standard)</div>
                    <div className="font-mono text-lg md:text-xl font-bold text-gray-900 text-center">
                      <span className="text-primary-600">(</span>
                      Correct Chars <span className="text-primary-600">÷</span> 5
                      <span className="text-primary-600">)</span>
                      <span className="text-primary-600"> ÷ </span>
                      Minutes
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      One &ldquo;word&rdquo; = 5 characters (including spaces). Only correct keystrokes count.
                    </p>
                  </div>

                  {/* CPM */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-5 mb-4 border border-emerald-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">CPM (Characters Per Minute)</div>
                    <div className="font-mono text-lg md:text-xl font-bold text-gray-900 text-center">
                      Total Characters <span className="text-emerald-600">÷</span> Minutes
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      CPM = WPM × 5. A finer-grained metric used in some international standards.
                    </p>
                  </div>

                  {/* Accuracy */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">Accuracy</div>
                    <div className="font-mono text-lg md:text-xl font-bold text-gray-900 text-center">
                      <span className="text-amber-600">(</span>
                      Correct <span className="text-amber-600">÷</span> Total
                      <span className="text-amber-600">)</span>
                      <span className="text-amber-600"> × </span>
                      100%
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Target 95%+ accuracy. Speed without precision wastes time on corrections.
                    </p>
                  </div>
                </div>

                {/* Example Gauge */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Average Office Worker</h4>
                  <SpeedGauge wpm={42} />
                  <p className="text-xs text-gray-500 mt-3">Most workers type ~42 WPM. Reaching 65+ WPM saves 35 min/day.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHY TYPING SPEED MATTERS — Content-Rich Section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Text Content — ~600 words */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Typing Speed Matters in 2026
                </h2>

                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    In today&apos;s digital-first workplace, typing speed is more than just a nice-to-have skill — it&apos;s a 
                    critical productivity multiplier. Whether you&apos;re a software developer writing code, a content writer 
                    crafting articles, a customer service representative responding to queries, or a student taking notes 
                    in lectures, your typing speed directly impacts your daily output and career trajectory.
                  </p>
                  <p>
                    Research consistently shows that the average office worker types approximately <strong>40 words per 
                    minute (WPM)</strong>. However, increasing your speed to 60–80 WPM can save you an estimated 
                    <strong> 21 full working days per year</strong> in cumulative typing time. For professionals who type 
                    extensively — such as transcriptionists, programmers, journalists, and data analysts — speeds of 
                    80–120 WPM are common and often expected by employers.
                  </p>
                  <p>
                    Beyond raw speed, <strong>accuracy matters equally</strong>. A fast typist who makes frequent errors 
                    actually loses productivity correcting mistakes. Each error requires detection, backspacing, and retyping — 
                    an average of 7 seconds per correction. At 90% accuracy and 80 WPM, you may spend nearly as much time 
                    fixing errors as someone typing cleanly at 55 WPM with 99% accuracy. Our typing test measures both 
                    metrics simultaneously, giving you the complete picture of your effective typing proficiency.
                  </p>
                  <p>
                    The modern professional landscape rewards keyboard fluency. From coding sprints and client communications 
                    to academic papers and creative writing, faster typing enables better focus on <em>what</em> you&apos;re saying 
                    rather than <em>how</em> you&apos;re inputting it. When your fingers can keep up with your thoughts, the cognitive 
                    overhead of typing disappears, freeing your mental energy for higher-order thinking, problem-solving, 
                    and creativity.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Visual Cards — Career Benefits */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection delay={0.1} direction="right">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  Career Benefits of Fast Typing
                </h3>
              </AnimatedSection>
              {[
                { icon: Monitor, title: 'Tech & Development', desc: 'Programmers at 70+ WPM write and debug code significantly faster, with fewer context switches.', color: 'text-blue-600 bg-blue-50' },
                { icon: MessageSquare, title: 'Communication', desc: 'Faster email and chat responses improve professional presence and client satisfaction.', color: 'text-emerald-600 bg-emerald-50' },
                { icon: GraduationCap, title: 'Education & Research', desc: 'Students who type 60+ WPM capture more lecture notes and complete assignments faster.', color: 'text-amber-600 bg-amber-50' },
                { icon: Briefcase, title: 'Job Market Edge', desc: 'Many employers require 50–80 WPM. A documented typing speed strengthens any application.', color: 'text-purple-600 bg-purple-50' },
              ].map((card, i) => (
                <AnimatedSection key={i} delay={0.15 + i * 0.1} direction="right">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${card.color} group-hover:scale-110 transition-transform`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{card.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INDUSTRY BENCHMARKS TABLE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Average Typing Speeds by Profession</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              See how your WPM compares to professionals across different industries and career levels.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-5 py-3 text-left text-sm font-semibold">Profession</th>
                      <th className="px-5 py-3 text-left text-sm font-semibold">Average WPM</th>
                      <th className="px-5 py-3 text-left text-sm font-semibold">Expected Accuracy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['General Office Worker', '40–50 WPM', '92–96%'],
                      ['Software Developer', '50–70 WPM', '95–98%'],
                      ['Content Writer / Journalist', '60–80 WPM', '96–99%'],
                      ['Data Entry Specialist', '70–90 WPM', '97–99%'],
                      ['Professional Transcriptionist', '80–120 WPM', '98–99%'],
                      ['Court Reporter (Stenography)', '200–300 WPM', '99%+'],
                    ].map(([prof, wpm, acc], i) => (
                      <tr key={i} className="hover:bg-primary-50/50 transition-colors">
                        <td className="px-5 py-3.5 text-sm text-gray-800 font-medium">{prof}</td>
                        <td className="px-5 py-3.5 text-sm text-primary-600 font-mono font-bold">{wpm}</td>
                        <td className="px-5 py-3.5 text-sm text-gray-600">{acc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROFESSIONAL INSIGHTS — Tips Grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Professional Typing Insights</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Expert knowledge to help you type smarter, not just faster. Apply these principles to accelerate your improvement.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle2, title: 'Accuracy Before Speed', desc: 'Build to 97%+ accuracy first. Clean typing at 55 WPM outperforms sloppy typing at 80 WPM when you factor in correction time. Muscle memory formed accurately becomes speed naturally.', color: 'text-green-600' },
              { icon: Clock, title: 'Consistent Daily Practice', desc: 'Fifteen focused minutes daily beats two hours on weekends. Muscle memory builds through frequent, spaced repetition and consolidates during sleep. Make typing practice a non-negotiable daily habit.', color: 'text-blue-600' },
              { icon: Keyboard, title: 'Master Touch Typing', desc: 'Touch typing — using all 10 fingers without looking — unlocks 50–100% faster speeds. Learn proper home row placement (ASDF JKL;) and never look at the keyboard during practice.', color: 'text-primary-600' },
              { icon: Brain, title: 'Read Ahead Technique', desc: 'Professional typists read 3–5 words ahead of their current position. This "text buffering" keeps fingers moving continuously without pausing between words, adding 10–20 WPM to your speed.', color: 'text-purple-600' },
              { icon: Target, title: 'Target Weak Keys', desc: 'Identify your personal trouble spots — common ones include Z, X, Q, number row, and shift-key combinations. Create focused drills that heavily feature these characters until they become automatic.', color: 'text-amber-600' },
              { icon: TrendingUp, title: 'Track Weekly Progress', desc: 'Test your WPM once per week using the same tool and duration. A 5 WPM monthly improvement is realistic and sustainable. Tracking prevents plateaus by revealing when technique adjustments are needed.', color: 'text-emerald-600' },
            ].map((tip, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="h-full p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 group">
                  <tip.icon className={`w-7 h-7 ${tip.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GUIDE LINKS — Explore More
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Improve Your Typing Skills</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore our comprehensive guides to boost your typing speed, accuracy, and overall keyboard proficiency.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: '/typing-speed-test', title: 'Typing Speed Test Guide', desc: 'Everything about typing speed tests, how they work, and how to interpret results.', icon: BarChart3 },
              { href: '/wpm-test', title: 'WPM Test Explained', desc: 'Deep dive into Words Per Minute testing, calculation methods, and score interpretation.', icon: Brain },
              { href: '/typing-accuracy-test', title: 'Accuracy Test Guide', desc: 'Why accuracy matters more than speed and how to improve your typing precision.', icon: Target },
              { href: '/improve-typing-speed', title: 'Improve Typing Speed', desc: '12 proven techniques to increase your WPM from beginner to professional level.', icon: TrendingUp },
              { href: '/touch-typing-guide', title: 'Touch Typing Guide', desc: 'Master the art of typing without looking at the keyboard with proper technique.', icon: Keyboard },
              { href: '/typing-practice-tips', title: 'Practice Tips & Drills', desc: 'Expert strategies for effective practice sessions that maximize improvement.', icon: BookOpen },
            ].map((guide, i) => (
              <AnimatedSection key={guide.href} delay={i * 0.08}>
                <Link
                  href={guide.href}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <guide.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm mb-1 flex items-center gap-1">
                      {guide.title}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{guide.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FAQ SECTION — 8 Questions with Animated Accordion
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Everything you need to know about typing speed tests, WPM measurement, and improving your keyboard skills.
            </p>
          </AnimatedSection>

          <AnimatedFAQ items={faqData} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — Bottom Banner
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Test Your Speed?</h2>
            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
              Scroll back up and start typing — or explore our guides to learn proven techniques 
              for improving your WPM and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <ScrollToTopButton />
              <Link
                href="/improve-typing-speed"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20 inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" /> Read Guides
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STRUCTURED DATA
      ═══════════════════════════════════════════════════════════════════ */}
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
            "description": "Free online typing speed test to measure your WPM and accuracy with real-time feedback."
          })
        }}
      />
    </>
  );
}
