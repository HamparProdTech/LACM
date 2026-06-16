# LACM Website

Los Angeles Capital Management — redesigned with a premium boutique aesthetic.

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
LACM/
├── app/
│   ├── layout.tsx       # Root layout & metadata
│   ├── page.tsx         # Home page (assembles all sections)
│   └── globals.css      # Global styles & CSS variables
├── components/
│   ├── Nav.tsx          # Sticky navigation
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # AUM / stats strip
│   ├── Mission.tsx      # Mission & Investor Preference Theory
│   ├── Strategies.tsx   # 6 strategy cards
│   ├── Insights.tsx     # Latest articles
│   ├── History.tsx      # Timeline
│   ├── CTABand.tsx      # Contact CTA
│   └── Footer.tsx       # Footer
└── public/              # Static assets (images, logos)
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done!

Vercel auto-detects Next.js. No configuration needed.
