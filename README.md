# OhDough Bakery Website 🥯☁️

A premium, artisanal website for **OhDough Jombang**, featuring a high-end "Japanese Flat Lay" aesthetic, interactive menu, and seamless WhatsApp ordering integration.

**Live Site**: [ohdoughbakery.com](https://ohdoughbakery.com)

## ✨ key Features

- **Aesthetic Visuals**: Custom-generated Hero compositions (V10) featuring authentic product representations (e.g., "Boat-style" Osaka Roll).
- **Premium Animations**: Smooth entrance effects, glassmorphism UI, and interactive "Pop-out" menu cards using `Framer Motion`.
- **SEO Optimized**: Ranked for keywords like "Bomboloni Jombang", "Roti Sobek Premium", populated with JSON-LD Schema Markup.
- **Social Proof**: Real customer testimonials and "Social Share" preview cards (Open Graph).
- **Mobile First**: Fully responsive design that works perfectly on all devices.
- **PWA Ready**: Installable to home screen via Web Manifest.
- **Direct Order**: "Smart Link" integration to Admin WhatsApp.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
- **Styling**: CSS Modules (Vanilla CSS for maximum control)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4 (GA4)
- **Deployment**: GitHub Pages (Static Export)

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/StartYourOwnRepo/ohdoughweb.git
    cd ohdoughweb
    ```

2.  **Install dependencies** (using pnpm):
    ```bash
    pnpm install
    ```

3.  **Run Development Server**:
    ```bash
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router & Layouts
├── components/       # UI Components (Hero, Menu, FAQ, etc.)
│   ├── HeroSection.tsx   # The main visual hook
│   ├── MenuSection.tsx   # Product list with pop-out cards
│   └── ...
├── utils/            # Helper functions (path prefixing)
└── ...
public/
├── images/           # High-quality assets & Generated AI visuals
├── manifest.json     # PWA Configuration
└── sitemap.xml       # SEO Sitemap
```

## 🎨 Design Philosophy

The design pivots from a standard 3D web look to a **"Delectable 2D"** style. We use:
- **Warm Color Palette**: Matcha Green, Bakery Orange, and Chocolate Brown.
- **Curved Dividers**: To create a soft, "dough-like" flow between sections.
- **Clean Typography**: Premium Serif for headings, legible Sans for body text.

---
*Created with ❤️ for OhDough Jombang.*
