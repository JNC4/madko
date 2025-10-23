# Madame Ko - Luxury Clean Beauty E-commerce

A sophisticated Next.js 14 headless e-commerce storefront for Madame Ko, featuring Parisian elegance meets Korean skincare innovation.

## Design Aesthetic

**Parisian Mauve Luxury** - Inspired by luxury Parisian hotels with a soft purple palette, generous white space, elegant typography, and sophisticated animations.

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript, React Server Components)
- **Styling**: Tailwind CSS with custom Parisian Mauve color palette
- **E-commerce**: Shopify Storefront API (GraphQL)
- **Animations**: Framer Motion
- **Fonts**: Cormorant Garamond, Inter, Playfair Display

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Shopify

1. Go to your Shopify Admin panel
2. Navigate to **Settings > Apps and sales channels > Develop apps**
3. Create a new app or select an existing one
4. Configure Storefront API access with these scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_read_collection_listings`

5. Copy your **Storefront Access Token**

### 3. Environment Variables

Update `.env.local` with your Shopify credentials:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
SHOPIFY_STOREFRONT_API_VERSION=2024-10
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Project Structure

```
madameko/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Footer
│   ├── home/
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── FeaturedProducts.tsx # Featured products
│   │   ├── BrandStory.tsx       # About section
│   │   ├── IngredientsPhilosophy.tsx
│   │   └── Newsletter.tsx       # Newsletter signup
│   └── product/
│       └── ProductCard.tsx      # Product card component
├── lib/
│   ├── shopify/
│   │   ├── client.ts            # GraphQL client
│   │   ├── queries/             # GraphQL queries
│   │   └── types.ts             # TypeScript types
│   └── utils/
│       └── formatPrice.ts       # Price formatting
└── tailwind.config.ts           # Tailwind configuration
```

## Phase 1 Complete ✅

### Implemented Features:

1. **Next.js 14 Setup** - TypeScript, App Router, proper configuration
2. **Tailwind CSS** - Custom Parisian Mauve color palette, elegant design system
3. **Shopify Integration** - Storefront API client, GraphQL queries, TypeScript types
4. **Layout Components** - Elegant header with sticky navigation and mobile menu, comprehensive footer
5. **Landing Page Sections**:
   - Hero Section with parallax effects and smooth animations
   - Featured Products with Shopify integration
   - Brand Story with two-column layout
   - Ingredients Philosophy with frosted glass cards
   - Newsletter signup section

### Design Features:

- ✨ Luxury Parisian hotel aesthetic
- 🎨 Beautiful purple/mauve color palette
- 📝 Elegant typography (Cormorant Garamond + Inter)
- 🎭 Smooth Framer Motion animations
- 📱 Fully responsive design
- 🔍 SEO-friendly metadata
- ♿ Accessible components

Phase 2

Phase 2 will include:
- Shop page with product listing and filtering
- Product detail pages with image galleries
- Collections pages
- Cart drawer functionality
- Checkout integration

PHASE 2 and 3 ARE COMPLETE, README SHOULD BE UPDATED

## Customization Guide

### Colors
Edit `tailwind.config.ts` to customize the color palette.

### Fonts
Modify font imports in `app/layout.tsx`.

### Content
Update component text, images, and copy to match your brand.

### Shopify Products
- Tag products with "featured" in Shopify to show them on the homepage
- Ensure products have high-quality images (recommended: 2000x2500px)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy to Vercel, Netlify, or any platform that supports Next.js 14.

Recommended: [Vercel](https://vercel.com) (created by Next.js team)

---

**Madame Ko** - Where Seoul Meets Paris ✨
