# TypingScoreTest.com

A modern, SEO-optimized typing speed test website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed for AdSense compliance with rich content, trust pages, and proper ad placement infrastructure.

🌐 **Live Site:** [https://typingscoretest.com](https://typingscoretest.com)

---

### Features

- **Interactive Typing Test** — Real-time WPM, accuracy, and error tracking with multiple difficulty modes (Easy / Medium / Hard)
- **Animated UI** — Smooth animations powered by Framer Motion (floating keys, speed gauge, animated counters, scroll reveals)
- **8-Question FAQ** — Comprehensive FAQ section with accordion UI
- **Benchmark Chart** — Visual comparison of typing speed categories
- **6 SEO Guide Pages** — In-depth articles on typing speed, WPM tests, accuracy, improvement tips, touch typing, and practice
- **Trust Pages** — About, Privacy Policy, Terms of Service
- **AdSense Ready** — `ads.txt` configured, designated ad slot placeholders throughout
- **Cookie Consent Banner** — GDPR-compliant cookie notice
- **Fully Responsive** — Mobile-first design with Tailwind CSS
- **Static Export** — Pre-rendered HTML for fast hosting on any static server

---

### Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework & static site generation |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |

---

### Project Structure

```
typingscoretest/
├── public/
│   ├── ads.txt              # AdSense publisher verification
│   ├── robots.txt           # Search engine crawl rules
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (header, footer, fonts, metadata)
│   │   ├── page.tsx         # Homepage (typing test + rich content)
│   │   ├── sitemap.ts       # Dynamic XML sitemap generation
│   │   ├── about/
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   ├── typing-speed-test/
│   │   ├── wpm-test/
│   │   ├── typing-accuracy-test/
│   │   ├── improve-typing-speed/
│   │   ├── touch-typing-guide/
│   │   └── typing-practice-tips/
│   └── components/
│       ├── TypingTest.tsx        # Core typing test engine
│       ├── AnimatedSection.tsx   # Scroll-triggered reveal wrapper
│       ├── FloatingKeys.tsx      # Decorative floating keyboard keys
│       ├── SpeedGauge.tsx        # Animated WPM gauge visualization
│       ├── AnimatedCounter.tsx   # Count-up number animation
│       ├── AnimatedFAQ.tsx       # Accordion FAQ component
│       ├── BenchmarkChart.tsx    # Typing speed comparison bars
│       ├── Header.tsx            # Site navigation
│       ├── Footer.tsx            # Footer with links
│       ├── CookieConsent.tsx     # GDPR cookie banner
│       └── ScrollToTopButton.tsx # Floating scroll-to-top button
├── next.config.mjs          # Static export config (output: 'export')
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

### Getting Started

#### Prerequisites
- Node.js 18+ and npm

#### Install & Run

```bash
# Clone the repository
git clone https://github.com/<your-username>/typingscoretest.git
cd typingscoretest

# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000
```

#### Build for Production

```bash
npm run build
```

This generates a fully static site in the `out/` directory (configured via `output: 'export'` in `next.config.mjs`).

---

### Deployment (Hostinger)

This site is deployed on **Hostinger** using static file hosting:

1. Run `npm run build` to generate the `out/` folder
2. Upload the **contents** of `out/` to Hostinger's `public_html/` via File Manager or FTP
3. Ensure `ads.txt` is accessible at `https://typingscoretest.com/ads.txt`

> **Tip:** You can zip the `out/` folder contents and use Hostinger's File Manager "Extract" feature for faster uploads.

---

### AdSense Configuration

- **Publisher ID:** `pub-8995675464812587`
- **ads.txt:** Located at `public/ads.txt` — served at site root
- **Ad Slots:** Placeholder components are included in page layouts. Replace with your actual AdSense ad unit code once approved.

---

### SEO Pages

| Page | URL Path | Content |
|---|---|---|
| Typing Speed Test Guide | `/typing-speed-test` | Comprehensive guide to typing speed testing |
| WPM Test | `/wpm-test` | Words-per-minute testing explained |
| Typing Accuracy Test | `/typing-accuracy-test` | Accuracy metrics and improvement |
| Improve Typing Speed | `/improve-typing-speed` | Tips and techniques |
| Touch Typing Guide | `/touch-typing-guide` | Learn touch typing fundamentals |
| Typing Practice Tips | `/typing-practice-tips` | Practice strategies and exercises |

---

### Environment Variables

No environment variables are required for the base site. If you add analytics or other services:

```env
# .env.local (not committed)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-8995675464812587
```

---

### License

This project is proprietary. All rights reserved.

---

### Contributing

This is a private project. For issues or suggestions, contact the site owner.
