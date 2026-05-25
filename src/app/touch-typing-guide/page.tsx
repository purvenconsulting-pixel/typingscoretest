import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Touch Typing Guide — Learn to Type Without Looking',
  description: 'Master touch typing with our comprehensive guide. Learn proper finger placement, home row technique, and step-by-step exercises to type without looking at the keyboard.',
  keywords: ['touch typing guide', 'learn touch typing', 'home row typing', 'finger placement keyboard', 'type without looking'],
  alternates: { canonical: 'https://typingscoretest.com/touch-typing-guide' },
};

export default function TouchTypingGuidePage() {
  const faqData = [
    { question: "How long does it take to learn touch typing?", answer: "Most people can learn the basics of touch typing in 2-4 weeks with daily 20-minute practice sessions. Reaching proficiency (typing at your previous speed with the new technique) typically takes 4-8 weeks. Mastery with speeds above 60 WPM usually takes 2-3 months of consistent practice." },
    { question: "Should I use a typing tutor program?", answer: "Typing tutor programs can be helpful, especially for beginners, as they provide structured lessons and track progress. However, they're not strictly necessary. You can learn touch typing with free online resources and practice tests. The key is consistent daily practice regardless of the tool you use." },
    { question: "Is it worth learning touch typing if I already type fast with my own method?", answer: "Yes, in most cases. While some self-taught typists achieve respectable speeds, touch typing provides a higher ceiling for improvement. Most hunt-and-peck typists plateau at 40-60 WPM, while touch typists regularly reach 80-120 WPM. The temporary slowdown during transition is worth the long-term gains." },
    { question: "Can I learn touch typing on a laptop keyboard?", answer: "Yes, touch typing can be learned on any standard QWERTY keyboard, including laptop keyboards. However, a full-size external keyboard may be more comfortable for practice sessions. The key placement is the same regardless of keyboard size." },
  ];

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Touch Typing Guide</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">The Complete Touch Typing Guide: Type Without Looking</h1>
        <p className="text-lg text-gray-600 mb-8">
          Learn the technique that separates professional typists from beginners — touch typing is the foundation of fast, accurate keyboard skills.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Touch Typing?</h2>
          <p>
            Touch typing is the technique of typing using all ten fingers without looking at the keyboard. Each 
            finger is assigned specific keys, and through practice, you develop muscle memory that allows your 
            fingers to find the correct keys automatically. This is in contrast to &quot;hunt and peck&quot; typing, where 
            you visually search for each key before pressing it, or hybrid methods where you use some fingers 
            instinctively but still look at the keyboard occasionally.
          </p>
          <p>
            The term &quot;touch typing&quot; was coined because you rely on the <em>touch</em> (feel) of the keyboard 
            rather than sight to locate keys. The home row keys serve as your anchor point — specifically, the 
            raised bumps on the F and J keys allow you to orient your hands by feel alone. From this home 
            position, each finger reaches to its assigned keys and returns, creating a system that&apos;s both 
            efficient and fast.
          </p>
          <p>
            Touch typing was originally developed in the 1880s by Frank Edward McGurrin, a court stenographer 
            who proved that his touch typing method was significantly faster than the sight-based methods used 
            by other typists. His approach became the standard that is still taught today, more than 140 years later.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Home Row: Your Starting Position</h2>
          <p>
            Everything in touch typing begins and ends with the home row. This is the middle row of letter keys 
            on your keyboard, where your fingers rest when they&apos;re not actively pressing other keys.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">Home Row Finger Placement</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Left Hand:</p>
                <ul className="space-y-1 text-sm">
                  <li>Pinky → <strong>A</strong></li>
                  <li>Ring finger → <strong>S</strong></li>
                  <li>Middle finger → <strong>D</strong></li>
                  <li>Index finger → <strong>F</strong> (guide key with bump)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Right Hand:</p>
                <ul className="space-y-1 text-sm">
                  <li>Index finger → <strong>J</strong> (guide key with bump)</li>
                  <li>Middle finger → <strong>K</strong></li>
                  <li>Ring finger → <strong>L</strong></li>
                  <li>Pinky → <strong>;</strong> (semicolon)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-center text-gray-500">
              Both thumbs rest on the <strong>Space Bar</strong>
            </p>
          </div>

          <p>
            The most important habit to develop is returning to the home row after every keystroke. Your fingers 
            should spring back to ASDF/JKL; like rubber bands — this is what makes the system work. Without 
            consistent return-to-home-row behavior, you lose your reference point and start making positional errors.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Finger Assignments for Each Key</h2>
          <p>
            Each finger is responsible for a vertical column of keys (and sometimes adjacent columns for the 
            index fingers, which handle extra keys in the center). Here&apos;s the complete assignment:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Left Hand Assignments</h3>
          <ul className="space-y-2">
            <li><strong>Left Pinky:</strong> Q, A, Z, 1, Tab, Caps Lock, Left Shift</li>
            <li><strong>Left Ring:</strong> W, S, X, 2</li>
            <li><strong>Left Middle:</strong> E, D, C, 3</li>
            <li><strong>Left Index:</strong> R, F, V, T, G, B, 4, 5</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Right Hand Assignments</h3>
          <ul className="space-y-2">
            <li><strong>Right Index:</strong> Y, H, N, U, J, M, 6, 7</li>
            <li><strong>Right Middle:</strong> I, K, comma, 8</li>
            <li><strong>Right Ring:</strong> O, L, period, 9</li>
            <li><strong>Right Pinky:</strong> P, semicolon, slash, 0, brackets, apostrophe, Enter, Right Shift, Backspace</li>
          </ul>

          <p>
            Notice that the index fingers each handle more keys than the other fingers. This is by design — 
            index fingers are the strongest and most dexterous fingers, making them best suited for the extra 
            workload of covering the center columns of the keyboard.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step Learning Plan</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Week 1: Home Row Mastery</h3>
          <p>
            Spend your first week exclusively on home row keys (A, S, D, F, J, K, L, ;). Practice typing words 
            and combinations using only these letters: &quot;sad,&quot; &quot;lad,&quot; &quot;ask,&quot; &quot;fall,&quot; &quot;lass,&quot; &quot;flask.&quot; Don&apos;t 
            worry about speed at all — focus on keeping your fingers on the correct keys and returning to home 
            position after each keystroke. Aim for 100% accuracy even if you&apos;re typing at just 10 WPM.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Week 2: Top Row Introduction</h3>
          <p>
            Add the top row keys (Q, W, E, R, T, Y, U, I, O, P). Practice reaching up from home row to these 
            keys and returning. Type words that mix home row and top row: &quot;type,&quot; &quot;quite,&quot; &quot;reply,&quot; &quot;write,&quot; 
            &quot;pride.&quot; Focus on the reach motion — your fingers should extend upward without your hands moving. 
            The key is minimal hand movement while your fingers do the work.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Week 3: Bottom Row Addition</h3>
          <p>
            Introduce the bottom row (Z, X, C, V, B, N, M, comma, period, slash). The bottom row is typically 
            the hardest to master because the finger reach is less natural than the upward reach to the top row. 
            Practice words like &quot;combine,&quot; &quot;maximum,&quot; &quot;complex,&quot; &quot;vacation.&quot; Pay special attention to 
            maintaining your home row anchor — it&apos;s common to drift when reaching for bottom row keys.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Week 4: Numbers and Special Characters</h3>
          <p>
            The number row is the most challenging because of the long reach required. Practice typing numbers 
            and common special characters (!, @, #, etc.). The Shift key coordination adds another layer of 
            complexity — use the opposite hand&apos;s Shift key from the character you&apos;re typing. For example, 
            to type a capital A, press Right Shift + A (left pinky types A, right pinky holds Shift).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Touch Typing Mistakes to Avoid</h2>
          <p>
            As you learn touch typing, be aware of these common pitfalls that can slow your progress or create 
            bad habits:
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Peeking at the keyboard:</strong> This is the hardest habit to break. Consider covering 
              your keyboard with a cloth or using a blank keyboard cover. If you must look, allow yourself only 
              brief glances rather than sustained staring.
            </li>
            <li>
              <strong>Neglecting the return to home row:</strong> After pressing any key, your finger must return 
              to its home position before reaching for the next key. Without this discipline, your finger positions 
              gradually drift, causing cascading errors.
            </li>
            <li>
              <strong>Using the wrong finger:</strong> It&apos;s tempting to use a nearby finger when the correct one 
              feels awkward. Resist this temptation — using the wrong finger creates muscle memory conflicts that 
              will limit your speed ceiling later.
            </li>
            <li>
              <strong>Practicing too fast:</strong> Speed comes naturally with muscle memory. Trying to type fast 
              before your muscle memory is established reinforces errors. Keep your accuracy above 95% at all 
              times during practice.
            </li>
            <li>
              <strong>Irregular practice:</strong> Practicing for two hours on Saturday is less effective than 
              practicing for 20 minutes every day. Muscle memory builds through frequent, consistent repetition.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Touch Typing Exercises</h2>
          <p>
            Here are some effective exercises you can incorporate into your daily practice routine:
          </p>
          <p>
            <strong>The Alphabet Drill:</strong> Type the entire alphabet (a through z) as quickly and accurately 
            as you can. This tests your knowledge of every key&apos;s position. Repeat 5 times, trying to improve 
            your time while maintaining accuracy.
          </p>
          <p>
            <strong>The Pangram Practice:</strong> Type pangrams — sentences that contain every letter of the 
            alphabet. The most famous is &quot;The quick brown fox jumps over the lazy dog.&quot; Others include &quot;Pack 
            my box with five dozen liquor jugs&quot; and &quot;How vexingly quick daft zebras jump.&quot;
          </p>
          <p>
            <strong>The Mirror Drill:</strong> Type the same sentence using only your left hand keys, then only 
            your right hand keys. This strengthens each hand independently and identifies which hand is weaker. 
            For left hand: &quot;A sad fact was that Fred was afraid.&quot; For right hand: &quot;Jill&apos;s opinion helped him 
            jump up.&quot;
          </p>
          <p>
            <strong>Copy Typing:</strong> Open a book or article and type what you read. This combines touch 
            typing practice with the skill of reading ahead while typing. Start with simple text and gradually 
            move to more complex material as your skills improve.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Measure Your Progress</h2>
          <p>
            Take a <Link href="/" className="text-primary-600 hover:underline font-medium">typing speed test</Link> at 
            the beginning of your touch typing journey to establish a baseline. Then retest weekly to track your 
            progress. Don&apos;t be discouraged if your speed initially drops when switching from your old typing 
            method — this is completely normal. Within 2-4 weeks, you&apos;ll typically return to your previous speed, 
            and within 2-3 months, you&apos;ll surpass it significantly.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo",
        "name": "Learn Touch Typing",
        "description": "Step-by-step guide to learning touch typing technique",
        "totalTime": "P30D",
        "step": [
          { "@type": "HowToStep", "name": "Master the Home Row", "text": "Learn finger placement on ASDF JKL; and practice home row keys for one week." },
          { "@type": "HowToStep", "name": "Learn the Top Row", "text": "Add QWERTYUIOP keys while maintaining home row anchor position." },
          { "@type": "HowToStep", "name": "Add the Bottom Row", "text": "Introduce ZXCVBNM and punctuation keys." },
          { "@type": "HowToStep", "name": "Practice Numbers and Symbols", "text": "Master the number row and special characters with Shift key coordination." },
          { "@type": "HowToStep", "name": "Build Speed Gradually", "text": "Maintain 95%+ accuracy while gradually increasing typing speed through daily practice." },
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
      }) }} />
    </div>
  );
}
