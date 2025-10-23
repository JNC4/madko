# Quick Setup Guide - Madame Ko

## Prerequisites

- Node.js 18+ installed
- A Shopify store (or create a free development store)

## Step-by-Step Setup

### 1. Shopify Configuration

#### Create a Shopify Development Store (if you don't have one)
1. Go to [partners.shopify.com](https://partners.shopify.com)
2. Sign up for a free Partner account
3. Create a development store
4. Add some test products

#### Enable Storefront API
1. In your Shopify Admin, go to **Settings**
2. Click **Apps and sales channels**
3. Click **Develop apps**
4. Click **Create an app** (name it "Madame Ko Storefront")
5. Click **Configure Storefront API scopes**
6. Enable these scopes:
   - ✅ `unauthenticated_read_product_listings`
   - ✅ `unauthenticated_read_product_inventory`
   - ✅ `unauthenticated_read_product_tags`
   - ✅ `unauthenticated_read_collection_listings`
7. Click **Save**
8. Go to **API credentials** tab
9. Click **Install app**
10. Copy your **Storefront Access Token**

### 2. Configure Environment Variables

Open `.env.local` and update:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_xxxxxxxxxxxxx
SHOPIFY_STOREFRONT_API_VERSION=2024-10
```

### 3. Add Featured Products (Optional)

To show products on the homepage:
1. Go to your Shopify Admin
2. Navigate to **Products**
3. Select a product
4. Scroll to **Tags**
5. Add tag: `featured`
6. Save product
7. Repeat for 3-6 products

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Products not showing?

1. Check that your `.env.local` has correct credentials
2. Verify products are published to "Online Store" sales channel
3. Add "featured" tag to products
4. Check browser console for errors

### Styles not loading?

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### API Errors?

- Verify Storefront API scopes are enabled
- Check that your access token is correct
- Ensure API version matches (2024-10)

## Color Palette Reference

Use these colors in your Shopify theme settings or product images:

- **Lavender Mist**: `#E6E0F0` - Soft backgrounds
- **Mauve Elegant**: `#C8B8DB` - Secondary elements
- **Perle Purple**: `#9D8BAF` - Accents, buttons
- **Parisian Plum**: `#6B5B7A` - Headings
- **Cream Luxe**: `#FAF8F5` - Main background
- **Rose Gold**: `#D4A5A5` - Luxury touches

## Next Steps

Once Phase 1 is working:

✅ **Phase 1**: Landing page (COMPLETE)
⏳ **Phase 2**: Shop pages, product details
⏳ **Phase 3**: Cart & checkout
⏳ **Phase 4**: Blog section
⏳ **Phase 5**: Polish & optimization

---

Need help? Check the main README.md for full documentation.
