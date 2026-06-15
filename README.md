# Trova — Find Your Peace

A React landing page inspired by the Bloom app video, fully rebranded in **black & gold**.

## Project structure

```
trova-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── Blog.jsx
│   │   ├── FAQ.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── global.css        ← design tokens + resets + animations
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── README.md
```

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Production build
npm run build
```

## Design tokens (edit in `src/styles/global.css`)

| Token          | Value     | Usage                   |
|----------------|-----------|-------------------------|
| `--gold`       | `#C9A84C` | Primary accent          |
| `--gold-light` | `#E8C96A` | Gradient light stop     |
| `--gold-dark`  | `#A07830` | Gradient dark stop      |
| `--black`      | `#0A0A0A` | Page background         |
| `--dark`       | `#111111` | Alternate section bg    |
| `--card`       | `#181818` | Card surfaces           |
| `--border`     | `#2A2A2A` | Dividers & borders      |
| `--muted`      | `#888888` | Secondary text          |

## Fonts
- **Display:** Playfair Display (headings, pull quotes)
- **Body:** Inter (body copy, UI labels)

Loaded via Google Fonts in `public/index.html`.

## Sections
1. **Nav** — sticky, blurs + borders on scroll
2. **Hero** — shimmer headline, floating phone mockup, pulse CTA
3. **Features** — 6-card grid with hover lift
4. **How it works** — interactive accordion + dual phone visual
5. **Testimonials** — click-to-expand card carousel
6. **Pricing** — 3-tier with highlighted Popular plan
7. **Blog / Journal** — 3 article cards + "All articles" button
8. **FAQ** — accordion expand/collapse
9. **CTA** — app store buttons + fan card visual
10. **Footer** — full column grid
