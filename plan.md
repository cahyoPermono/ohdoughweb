# OhDough Future Roadmap

This document outlines the planned features and improvements for the OhDough Bakery website (Phase 5+).

## 1. Instagram Feed Integration 📸
**Goal**: Keep the website content fresh and dynamic without manual updates.
- **Implementation**: Fetch the latest 6 posts/reels from `@ohdough` Instagram account.
- **Location**: A new section above the Footer.
- **Tech**: Instagram Basic Display API or 3rd party widget (e.g., Elfsight/SnapWidget for easier maintenance).

## 2. WhatsApp Shopping Cart (Smart Order) 🛒
**Goal**: Streamline the ordering process for customers buying multiple items.
- **Current Flow**: User clicks button -> Opens WhatsApp with generic message.
- **New Flow**:
    1.  User clicks `(+)` on Menu Cards.
    2.  Floating Cart Icon updates count.
    3.  User reviews Cart (e.g., "2x Matcha, 1x Royal Cloud").
    4.  "Checkout" button generates a pre-filled WhatsApp link:
        `"Halo OhDough, saya mau pesan: 2 Matcha Zen, 1 Royal Cloud 9. Total: Rp 75.000. Mohon info ongkir ke..."`
- **Tech**: React Context for state management, URL encoding for WhatsApp string.

## 3. "Kitchen Stories" (Blog/Articles) ✍️
**Goal**: Boost SEO and build brand authority.
- **Content**:
    - "Behind The Scenes: How we make our storage-free dough."
    - "Tips: Reheating Bomboloni at home."
    - "New Menu Teasers."
- **Tech**: Next.js MDX (Markdown for content) or a headless CMS (Sanity.io/Contentful) if content grows frequent.

## 4. Promo System & Pop-ups 🎁
**Goal**: Convert first-time visitors into buyers.
- **Features**:
    - Dismissible bottom banner or modal popup.
    - Logic: "Show only once per user session" (using LocalStorage).
    - Content: "Discount 10% for First Order! Code: AWAN10".

## 5. Performance Tuning (Ongoing) ⚡
- **Image Optimization**: Fully migrate all assets to WebP/AVIF once build tools are standardized.
- **Code Splitting**: Ensure main bundle remains small (<100kb) as features grow.
