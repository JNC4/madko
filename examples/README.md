# Madame Ko - Content Examples & Setup Guide

This directory contains example data structures and comprehensive guides for adding content to your Madame Ko e-commerce site through Shopify.

## 📁 What's in This Directory

- **`products-example.json`** - Example product structure with variants, pricing, images, and tags
- **`collections-example.json`** - Collection setup with automated and manual examples
- **`blog-example.json`** - Blog article with rich HTML formatting and SEO optimization
- **`README.md`** - This comprehensive guide

## 🚀 Quick Start

Your Next.js application is already fully built and connected to Shopify. You just need to add content through Shopify Admin, and it will automatically appear in your app.

### Prerequisites

1. Active Shopify store
2. Shopify Storefront API access token
3. Environment variables configured in `.env.local`:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   ```

## 📦 Adding Products

### Step-by-Step in Shopify Admin

1. **Navigate**: Shopify Admin → Products → Add product

2. **Basic Information**:
   - **Title**: Keep it clear and searchable (e.g., "Radiant Seoul Serum")
   - **Description**: Use rich text editor for formatting
     - Include key benefits
     - List ingredients
     - Explain usage
     - Add your brand story

3. **Images**:
   - **Recommended**: 1200x1200px minimum
   - **Format**: JPG or PNG
   - **Add 3-5 images**: front view, side view, texture, lifestyle
   - **Alt text**: Describe each image for accessibility and SEO

4. **Pricing**:
   - Set base price (e.g., $68.00)
   - If variants have different prices, set per variant

5. **Variants** (if applicable):
   - **Add options**: Size, Color, etc.
   - **Example sizes**: 30ml, 50ml, 100ml
   - **Set individual prices**: 30ml ($68), 50ml ($98)
   - **Upload variant images** if products look different

6. **Inventory**:
   - Set stock quantities
   - Choose "Continue selling when out of stock" based on preference
   - Set SKU codes for inventory management

7. **Product Organization**:
   - **Product type**: Serum, Cleanser, Moisturizer, etc.
   - **Vendor**: Madame Ko
   - **Collections**: Add to relevant collections (manual)

8. **Tags** (Very Important!):
   - `featured` → Shows on homepage featured products
   - `bestseller` → For bestsellers collection
   - Category tags: `serum`, `cleanser`, `moisturizer`
   - Concern tags: `brightening`, `anti-aging`, `hydration`
   - Ingredient tags: `niacinamide`, `retinol`, `hyaluronic-acid`

9. **SEO**:
   - Edit title (60 chars max)
   - Meta description (150-160 chars)
   - URL handle (lowercase-with-hyphens)

10. **Save** → Product appears immediately at `/shop/products/[handle]`

### Product Examples

See `products-example.json` for complete examples including:
- Radiant Seoul Serum (multi-variant)
- Parisian Night Cream (with gift set variant)
- Seoul Cleansing Balm (single variant)
- Mauve Essence Toner (multi-size)

### Important Product Tags

| Tag | Purpose | Example |
|-----|---------|---------|
| `featured` | Shows on homepage | Bestselling products |
| `bestseller` | Bestsellers collection | Top 10 products |
| `new-arrival` | New arrivals collection | Recent launches |
| Category tags | Product type | `serum`, `cleanser`, `toner` |
| Concern tags | Skin concerns | `brightening`, `anti-aging` |
| Ingredient tags | Key ingredients | `vitamin-c`, `retinol` |

## 📚 Creating Collections

### Step-by-Step in Shopify Admin

1. **Navigate**: Shopify Admin → Products → Collections → Create collection

2. **Basic Info**:
   - **Title**: "Bestsellers", "Serums & Essences", "New Arrivals"
   - **Description**: Write compelling copy (shows on collection page)
   - **Image**: Upload banner image (1600x900px recommended)

3. **Collection Type**:

   **Option A: Automated (Recommended)**
   - Set conditions to auto-include products
   - Example: "Product tag is equal to 'bestseller'"
   - Products automatically added/removed based on conditions
   - Always stays up-to-date

   **Option B: Manual**
   - Hand-pick specific products
   - Full control over order and selection
   - Requires manual updates

4. **Example Automated Conditions**:
   ```
   Bestsellers Collection:
   → Product tag is equal to "bestseller"

   Serums Collection:
   → Product tag contains "serum"

   New Arrivals:
   → Product created date is within last 30 days

   Anti-Aging Products:
   → Product tag contains "anti-aging" OR "retinol" OR "peptides"
   ```

5. **Sort Order**:
   - Best selling (recommended for "Bestsellers")
   - Created (newest first) for "New Arrivals"
   - Alphabetically A-Z
   - Price (low to high / high to low)
   - Manual (drag and drop)

6. **SEO Settings**:
   - Page title (60 chars)
   - Meta description (150-160 chars)
   - URL handle

7. **Save** → Collection appears at:
   - `/shop/collections` (collections listing)
   - `/shop/collections/[handle]` (individual collection)

### Recommended Collections

See `collections-example.json` for detailed setup of:
- Bestsellers (automated by tag)
- New Arrivals (automated by date)
- Serums & Essences (automated by tag)
- Cleansers (automated by tag)
- Moisturizers (automated by tag)
- Complete Routines (manual selection)

## ✍️ Creating Blog Posts

### Step-by-Step in Shopify Admin

1. **Create Blog First** (One-time setup):
   - Navigate: Shopify Admin → Online Store → Blog posts → Manage blogs
   - Create blog titled "News" or "Journal"
   - Handle will auto-generate (e.g., `news`, `journal`)

2. **Add Blog Post**:
   - Navigate: Online Store → Blog posts → Add blog post

3. **Basic Information**:
   - **Title**: Catchy, under 60 characters
   - Example: "The 10-Step Korean Skincare Routine: A Parisian's Guide"

4. **Content** (Use Rich Text Editor):

   **Formatting Tips**:
   - **Headings**: Use H2 for main sections, H3 for subsections
   - **Paragraphs**: Keep short (3-4 sentences) for readability
   - **Bold**: Highlight key terms
   - **Italic**: Gentle emphasis
   - **Lists**: Bullet points for easy scanning
   - **Blockquotes**: Pull out key insights
   - **Links**: Link to products and other articles
   - **Images**: Add 2-3 throughout long articles

   **Example Structure**:
   ```html
   <p>Opening paragraph with hook...</p>

   <h2>Main Section Title</h2>
   <p>Section content...</p>

   <h3>Subsection</h3>
   <p>More detailed content...</p>

   <ul>
     <li>Bullet point 1</li>
     <li>Bullet point 2</li>
   </ul>

   <blockquote>"Memorable quote or key takeaway"</blockquote>

   <img src="image-url" alt="descriptive text" />

   <p>Link to product: <a href="/shop/products/product-handle">Product Name</a></p>
   ```

5. **Excerpt**:
   - Auto-generated OR write custom
   - 150-160 characters
   - Shows on blog listing cards
   - Should entice readers to click

6. **Featured Image**:
   - 1600x900px recommended
   - Shows as hero image on post
   - Appears in blog listing cards
   - Add descriptive alt text

7. **Author**:
   - Set author name (e.g., "Sophie Chen")
   - Shows in article byline

8. **Tags**:
   - Add 3-5 relevant tags
   - Examples: `skincare-tips`, `korean-beauty`, `routines`
   - Tags appear as badges on articles
   - Can be used for filtering (future feature)

9. **Publication**:
   - **Publish immediately** OR **schedule** for future date
   - Set visibility (Online Store)

10. **SEO**:
    - Edit page title (60 chars with keywords)
    - Meta description (150-160 chars)
    - URL handle

11. **Save** → Article appears at:
    - `/blog` (listing page)
    - `/blog/[blog-handle]/[article-handle]` (full post)

### Content Guidelines

**Article Length**:
- Short posts: 800-1000 words
- Standard posts: 1200-1500 words
- In-depth guides: 1800-2000 words

**Tone of Voice** (Madame Ko brand):
- Elegant yet approachable
- Educational but not preachy
- French sophistication meets Korean warmth
- Personal stories (Sophie's journey)
- Science-backed but easy to understand

**Internal Linking**:
- Link to 3-5 products per article
- Link to related blog posts
- Use descriptive anchor text
- Opens products in same tab

**Images**:
- Hero image: 1600x900px
- In-article images: 1200x800px
- Always add alt text
- Compress before uploading

### Blog Post Ideas

See `blog-example.json` for 8+ complete article ideas including:
- Korean skincare routines
- Ingredient deep-dives
- Seasonal skincare advice
- Product layering guides
- Clean beauty education
- Before/after transformations
- Expert interviews

### Blog Post Example

A complete example article is included in `blog-example.json`:
- **Title**: "The 10-Step Korean Skincare Routine: A Parisian's Guide"
- **Length**: ~2000 words
- **Format**: Full HTML with proper heading hierarchy
- **Features**: Product links, images, blockquotes, lists
- **SEO**: Optimized with keywords and internal links

## 🎨 Design Tips

### Product Photography

**Recommended Shots**:
1. **Front view** (primary) - clean white/marble background
2. **Side angle** - shows bottle shape
3. **Top view** - shows cap/packaging detail
4. **Texture shot** - product on hand/skin
5. **Lifestyle shot** - styled with flowers/props matching Parisian Mauve aesthetic

**Styling Guidelines**:
- Use neutral backgrounds (cream, white, marble)
- Incorporate brand colors subtly (lavender, mauve)
- Natural lighting preferred
- Consistent photography style across all products
- Props: dried flowers, silk ribbons, French linens

### Collection Banners

**Dimensions**: 1600x900px (16:9 ratio)
**Style**:
- Soft, dreamy aesthetic
- Brand colors prominent
- Can include text overlay (collection name)
- Not too busy - products are the stars

### Blog Images

**Hero Images**:
- 1600x900px
- Eye-catching but on-brand
- Can be product shots, ingredients, or lifestyle
- Should relate to article topic

**In-article Images**:
- 1200x800px
- Break up long text sections
- Illustrate key points
- Can be infographics, product shots, or tutorials

## 🔍 SEO Best Practices

### Products

- **Title**: Include product type and key benefit (e.g., "Brightening Vitamin C Serum")
- **Description**: Front-load keywords, include benefits and ingredients
- **Meta Description**: Compelling 150-160 char summary
- **Alt Text**: Describe image (e.g., "Radiant Seoul Serum bottle on marble surface")
- **URL Handle**: Clean, readable (e.g., `radiant-seoul-serum`)

### Collections

- **Title**: Clear category name (e.g., "Serums & Essences")
- **Description**: Keyword-rich intro to collection purpose
- **Meta Description**: What customers will find in collection
- **URL Handle**: Simple category name (e.g., `serums-essences`)

### Blog Posts

- **Title**: Include target keyword, under 60 chars
- **Content**: Use keywords naturally, focus on value
- **Headings**: Clear hierarchy with keywords
- **Internal Links**: Link to 3-5 relevant pages
- **Meta Description**: Enticing summary with main keyword
- **Images**: Alt text on all images
- **URL Handle**: Primary keyword(s) with hyphens

## 🔄 Content Management Workflow

### Launching Your Store

**Week 1: Products**
- Day 1-2: Add core products (6-8 bestsellers)
- Day 3-4: Add full product catalog (20-30 products)
- Day 5: Review all product pages
- Day 6-7: Add product photography and refine descriptions

**Week 2: Collections**
- Day 1: Create main collections (Bestsellers, New Arrivals)
- Day 2-3: Create category collections (Serums, Cleansers, etc.)
- Day 4-5: Create concern-based collections (Anti-Aging, Brightening)
- Day 6-7: Add collection banners and optimize descriptions

**Week 3: Blog**
- Day 1: Set up blog structure
- Day 2-3: Write and publish 3-5 core articles
- Day 4-5: Add images and optimize SEO
- Day 6-7: Cross-link articles and products

### Ongoing Content Calendar

**Weekly**:
- 1 new blog post (publish Tuesdays or Thursdays)
- Review inventory and update stock
- Check for low-stock products

**Monthly**:
- Add 2-4 new products (if applicable)
- Update homepage featured products
- Refresh seasonal collections
- Review and update product descriptions
- Analyze top-performing products and feature them

**Quarterly**:
- Major blog content push (4-6 articles)
- Seasonal collection updates
- Product photography refresh
- SEO audit and optimization

## 🧪 Testing Your Content

### After Adding Products

1. Visit `/shop` - products should appear in grid
2. Visit `/shop/collections` - collections should show
3. Visit `/shop/collections/[handle]` - products in collection display
4. Visit `/shop/products/[handle]` - product detail page works
5. Test "Add to Cart" - cart updates correctly
6. Test variants - price/image changes correctly
7. Test checkout - redirects to Shopify

### After Adding Blog Posts

1. Visit `/blog` - articles appear in listing
2. Featured article shows in hero card
3. Click article - full post displays at `/blog/[blog]/[article]`
4. Check formatting - headings, images, links work
5. Social share buttons display
6. Related articles section shows
7. Breadcrumb navigation works

### Common Issues

**Products Not Showing**:
- Check product is published to "Online Store" channel
- Verify Storefront API access in Shopify Admin
- Check environment variables in `.env.local`
- Restart dev server after adding env variables

**Images Not Loading**:
- Add Shopify CDN domain to `next.config.js` (already configured)
- Check image URLs are HTTPS
- Verify images are published

**Collections Empty**:
- Check automated conditions are correct
- Verify products have matching tags
- For manual collections, ensure products are added

**Blog Posts Not Appearing**:
- Verify blog is published
- Check article publication date (not in future)
- Confirm article is set to visible
- Check blog handle matches query

## 📊 Content Strategy Tips

### Product Strategy

**Start with Core Line**:
- 6-8 hero products that represent your brand
- Mix of price points ($40-$120)
- Cover main categories (cleanser, serum, moisturizer)
- Ensure good photography before launch

**Expand Strategically**:
- Add complementary products
- Build complete routines
- Consider bundles/sets
- Seasonal limited editions

### Collection Strategy

**Essential Collections** (Launch with):
- Bestsellers (social proof)
- New Arrivals (freshness)
- 3-4 product type collections (Serums, Cleansers, etc.)

**Growth Collections** (Add later):
- Concern-based (Anti-Aging, Brightening)
- Ingredient-focused (Vitamin C, Retinol)
- Routine builders (Morning Routine, Night Routine)
- Gift sets (Starter Kits, Luxury Sets)

### Blog Strategy

**Launch Content** (3-5 articles):
- Brand story / About the founder
- "How to Use" guide for hero product
- Korean vs. French skincare philosophy
- Ingredient spotlight (key ingredient)
- Skin type guide

**Ongoing Content Themes**:
- **Educational** (40%): How-to guides, ingredient deep-dives
- **Inspirational** (30%): Founder story, customer testimonials
- **Promotional** (20%): New launches, seasonal collections
- **Trending** (10%): Industry news, trends, research

**Content Pillars**:
1. Korean Beauty Education
2. French Elegance & Lifestyle
3. Clean Beauty & Ingredients
4. Skincare Science
5. Self-Care Rituals

## 🎯 Quick Reference

### Product Checklist
- [ ] Title (clear, searchable)
- [ ] Description (benefits, ingredients, usage)
- [ ] 3-5 high-quality images (1200x1200px)
- [ ] Pricing for all variants
- [ ] Inventory quantities
- [ ] Tags (`featured`, categories, concerns)
- [ ] SEO title and meta description
- [ ] Added to relevant collections

### Collection Checklist
- [ ] Clear, descriptive title
- [ ] Compelling description
- [ ] Banner image (1600x900px)
- [ ] Automated conditions OR manual products
- [ ] Sort order set
- [ ] SEO optimized
- [ ] URL handle clean

### Blog Post Checklist
- [ ] Catchy title (under 60 chars)
- [ ] 1200-2000 word count
- [ ] Proper heading hierarchy (H2, H3)
- [ ] 3-5 tags
- [ ] Featured image (1600x900px)
- [ ] 2-3 in-article images
- [ ] 3-5 internal links (products/articles)
- [ ] Excerpt (150-160 chars)
- [ ] Author name
- [ ] SEO optimized
- [ ] Proofread and formatted

## 🚀 Ready to Launch?

Once you've added content through Shopify Admin:

1. **Products**: Appear automatically at `/shop` and `/shop/products/[handle]`
2. **Collections**: Show at `/shop/collections` and `/shop/collections/[handle]`
3. **Blog**: Display at `/blog` and `/blog/[blog-handle]/[article-handle]`

No code changes needed—your Next.js app is fully connected and ready to display your content beautifully!

## 📞 Need Help?

**Shopify Resources**:
- [Shopify Help Center](https://help.shopify.com)
- [Storefront API Docs](https://shopify.dev/api/storefront)

**Next.js Resources**:
- [Next.js Documentation](https://nextjs.org/docs)
- Project README.md (in root directory)

---

**Happy content creating!** ✨ Your Madame Ko store is ready to shine with the perfect blend of Seoul's clean beauty and Parisian elegance.
