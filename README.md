# QuotationMaker.in

India's best free online quotation generator. Create professional, GST-ready quotations in under 30 seconds and download them as PDF or PNG — no signup, no watermark, fully client-side.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Zustand**, **React Hook Form + Zod**, **jsPDF**, **html2canvas**, **qrcode** and **lucide-react**.

## Features

- ⚡ 30-second quotation builder with a real-time live preview
- 🧾 Automatic GST — per-item CGST/SGST (intra-state) and IGST (inter-state), plus flat tax
- 🎨 15+ premium, print-ready templates with a custom accent colour
- 💾 Autosave to the browser, full undo/redo, drag-to-reorder, duplicate/delete items
- 🖼️ Logo, signature, company stamp and UPI/payment QR code
- 💱 Multi-currency (₹, $, €, £, AED, SGD, and more) with Indian amount-in-words
- 📄 Export to PDF (multi-page), PNG, or print — all in the browser
- 🌗 Light & dark mode, fully responsive, installable PWA with offline support
- 🔎 SEO-first: per-page metadata, canonical URLs, Open Graph/Twitter, JSON-LD
  (Organization, WebApplication, Breadcrumb, FAQ, HowTo, Article), dynamic sitemap & robots
- 📚 20 industry landing pages + 10 in-depth blog articles (1,200+ words each)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build (static export SSG) |
| `npm run start`     | Serve the production build           |
| `npm run typecheck` | Type-check with `tsc --noEmit`       |

## Project structure

```
src/
├── app/                     # App Router routes
│   ├── page.tsx             # Homepage
│   ├── create/              # Quotation builder
│   ├── templates/           # Template gallery
│   ├── industries/[slug]/   # 20 data-driven industry pages
│   ├── blog/[slug]/         # 10 data-driven blog posts
│   ├── features, contact, pricing, about, privacy, terms, offline
│   ├── sitemap.ts, robots.ts, manifest.ts, icon.svg
├── components/
│   ├── quotation/           # Builder, document renderer, editors, exports
│   ├── layout/              # Navbar, Footer, PageHero, LegalDoc
│   ├── home/                # Hero
│   └── ui/                  # Reveal, Faq, Icon, ThemeToggle
├── store/                   # Zustand quotation store (autosave + history)
├── lib/                     # calculations, currency, export, seo, schema, templates
├── data/                    # industries/*, blog/*, home content
└── types/                   # Quotation domain types
```

## Deployment

Optimised for **Vercel** (zero config):

1. Push this repo to GitHub.
2. Import it into Vercel — it auto-detects Next.js.
3. Deploy. The sitemap, robots, manifest and all static pages are generated at build time.

Before going live, update `siteConfig.url` and `contactEmail` in `src/lib/site.ts`.

### Self-hosting on AWS + CyberPanel

Deploying to your own server (AWS EC2 with CyberPanel / OpenLiteSpeed) instead of Vercel?
See the complete step-by-step guide in **[DEPLOYMENT.md](./DEPLOYMENT.md)** — it covers
Node.js + PM2 setup, the OpenLiteSpeed reverse proxy config, free SSL, and redeploys.

### Google AdSense

Every page ships genuine, unique, long-form content (no placeholders or filler), plus
Privacy Policy and Terms pages, which are required for AdSense approval. Add your AdSense
script in `src/app/layout.tsx` once approved.

## License

© QuotationMaker.in — all rights reserved.
