# FingSprint

**FingSprint** is a lightweight, distraction-free typing speed test designed to measure your Words Per Minute (WPM), accuracy, and typing consistency directly in the browser.

## Features

- **Real-Time WPM & Accuracy Tracking**: Instant feedback on typing speed, errors, and live character accuracy via `StatsCard`.
- **Target Benchmarks**: Compare your performance against standard typing benchmarks with `IdealWPMCard`.
- **Local Test History**: Automatically saves your past typing sessions locally in the browser (`HistoryCard`) with zero backend or account required.
- **Dark & Light Mode**: Seamless theme switching powered by `theme-provider`.
- **100% Static & Edge-Ready**: Exported as static HTML/CSS/JS (`out/`) for instant global CDN delivery.

## Project Structure

```text
fingsprint/
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx           # Root layout and theme provider
│   └── page.tsx             # Main typing test arena
├── components/
│   ├── ui/                  # Reusable UI primitives
│   ├── Hero.tsx             # Header and test prompt area
│   ├── StatsCard.tsx        # Live WPM & accuracy metrics
│   ├── IdealWPMCard.tsx     # Speed benchmark comparison
│   ├── InstructionsCard.tsx # Quick typing test rules & tips
│   ├── HistoryCard.tsx      # Local session history log
│   ├── Navbar.tsx           # Top navigation bar
│   └── Footer.tsx           # Footer credits
├── lib/                     # Helper utilities & word lists
├── public/                  # Static assets
└── next.config.ts           # Static export configuration

```

## Getting Started

### Prerequisites

* Node.js 20+
* npm, pnpm, or yarn

### Installation & Local Development

1. **Clone the repository:**
```bash
git clone [https://github.com/your-username/fingsprint.git](https://github.com/your-username/fingsprint.git)
cd fingsprint

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


Open `http://localhost:3000` in your browser to start typing.

## Building & Deployment

FingSprint is configured for static export (`output: "export"` in `next.config.ts`), generating a standalone `out/` directory.

```bash
# Build static output
npm run build

# Deploy directly to Cloudflare Pages production
npx wrangler pages deploy out --project-name=fingsprint --branch=main

```

## Tech Stack

* **Framework**: Next.js (App Router + Static Export)
* **Styling**: Tailwind CSS
* **Language**: TypeScript