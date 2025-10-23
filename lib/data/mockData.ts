import { Product, Collection } from '@/lib/shopify/types';

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: 'mock-product-1',
    title: 'Radiant Seoul Serum',
    handle: 'radiant-seoul-serum',
    description: 'A luxurious Korean-inspired serum that combines the best of Seoul\'s clean beauty with Parisian elegance. Infused with ginseng, niacinamide, and hyaluronic acid to brighten, hydrate, and revitalize your skin.',
    descriptionHtml: '<p>A luxurious Korean-inspired serum that combines the best of Seoul\'s clean beauty with Parisian elegance.</p><p><strong>Key Ingredients:</strong></p><ul><li>Red Ginseng Extract - Revitalizes and energizes</li><li>Niacinamide - Brightens and evens skin tone</li><li>Hyaluronic Acid - Deep hydration</li></ul><p>Perfect for all skin types seeking that coveted glass skin glow.</p>',
    priceRange: {
      minVariantPrice: {
        amount: '68.00',
        currencyCode: 'USD',
      },
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&h=1200&fit=crop',
            altText: 'Radiant Seoul Serum - Elegant bottle on marble surface',
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'mock-variant-1',
            title: '30ml',
            price: {
              amount: '68.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '30ml',
              },
            ],
          },
        },
        {
          node: {
            id: 'mock-variant-2',
            title: '50ml',
            price: {
              amount: '98.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '50ml',
              },
            ],
          },
        },
      ],
    },
    tags: ['featured', 'bestseller', 'serum', 'brightening'],
  },
  {
    id: 'mock-product-2',
    title: 'Parisian Night Cream',
    handle: 'parisian-night-cream',
    description: 'Rich overnight moisturizer infused with rose oil and peptides. Wake up to plump, dewy skin that glows with Parisian radiance.',
    descriptionHtml: '<p>Rich overnight moisturizer infused with rose oil and peptides. Wake up to plump, dewy skin that glows with Parisian radiance.</p><p><strong>Key Ingredients:</strong></p><ul><li>French Rose Oil - Deeply nourishing and calming</li><li>Peptide Complex - Firms and smooths</li><li>Squalane - Locks in moisture</li></ul>',
    priceRange: {
      minVariantPrice: {
        amount: '85.00',
        currencyCode: 'USD',
      },
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&h=1200&fit=crop',
            altText: 'Parisian Night Cream in luxurious jar',
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'mock-variant-3',
            title: '50ml',
            price: {
              amount: '85.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '50ml',
              },
            ],
          },
        },
      ],
    },
    tags: ['featured', 'moisturizer', 'night-care', 'bestseller'],
  },
  {
    id: 'mock-product-3',
    title: 'Seoul Cleansing Balm',
    handle: 'seoul-cleansing-balm',
    description: 'Gentle oil-based cleanser that melts away makeup, sunscreen, and impurities. Transforms from solid balm to silky oil for the ultimate clean.',
    descriptionHtml: '<p>Gentle oil-based cleanser that melts away makeup, sunscreen, and impurities. Transforms from solid balm to silky oil for the ultimate clean.</p><p><strong>Key Ingredients:</strong></p><ul><li>Rice Bran Oil - Gently cleanses without stripping</li><li>Green Tea Extract - Soothes and protects</li><li>Vitamin E - Nourishes skin</li></ul>',
    priceRange: {
      minVariantPrice: {
        amount: '42.00',
        currencyCode: 'USD',
      },
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=1200&fit=crop',
            altText: 'Seoul Cleansing Balm with spatula',
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'mock-variant-4',
            title: '100ml',
            price: {
              amount: '42.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '100ml',
              },
            ],
          },
        },
      ],
    },
    tags: ['cleanser', 'bestseller', 'featured'],
  },
  {
    id: 'mock-product-4',
    title: 'Mauve Essence Toner',
    handle: 'mauve-essence-toner',
    description: 'Hydrating toner with lavender and fermented ingredients. Preps skin for maximum absorption while delivering instant moisture.',
    descriptionHtml: '<p>Hydrating toner with lavender and fermented ingredients. Preps skin for maximum absorption while delivering instant moisture.</p><p><strong>Key Ingredients:</strong></p><ul><li>French Lavender Water - Calms and balances</li><li>Fermented Yeast - Enhances absorption</li><li>Hyaluronic Acid - Plumps with hydration</li></ul>',
    priceRange: {
      minVariantPrice: {
        amount: '58.00',
        currencyCode: 'USD',
      },
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1200&h=1200&fit=crop',
            altText: 'Mauve Essence Toner bottle',
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'mock-variant-5',
            title: '150ml',
            price: {
              amount: '58.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '150ml',
              },
            ],
          },
        },
        {
          node: {
            id: 'mock-variant-6',
            title: '200ml',
            price: {
              amount: '78.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '200ml',
              },
            ],
          },
        },
      ],
    },
    tags: ['toner', 'hydration', 'featured'],
  },
  {
    id: 'mock-product-5',
    title: 'Luminous Eye Cream',
    handle: 'luminous-eye-cream',
    description: 'Brightening eye cream that targets dark circles, fine lines, and puffiness. Delicate yet powerful care for your most expressive feature.',
    descriptionHtml: '<p>Brightening eye cream that targets dark circles, fine lines, and puffiness. Delicate yet powerful care for your most expressive feature.</p><p><strong>Key Ingredients:</strong></p><ul><li>Caffeine - Reduces puffiness</li><li>Vitamin C - Brightens dark circles</li><li>Peptides - Smooths fine lines</li></ul>',
    priceRange: {
      minVariantPrice: {
        amount: '72.00',
        currencyCode: 'USD',
      },
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&h=1200&fit=crop',
            altText: 'Luminous Eye Cream tube',
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'mock-variant-7',
            title: '15ml',
            price: {
              amount: '72.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '15ml',
              },
            ],
          },
        },
      ],
    },
    tags: ['eye-cream', 'brightening', 'bestseller'],
  },
  {
    id: 'mock-product-6',
    title: 'Rose Gold Face Mask',
    handle: 'rose-gold-face-mask',
    description: 'Weekly treatment mask with real rose petals and gold flakes. Indulge in luxury while revitalizing tired, dull skin.',
    descriptionHtml: '<p>Weekly treatment mask with real rose petals and gold flakes. Indulge in luxury while revitalizing tired, dull skin.</p><p><strong>Key Ingredients:</strong></p><ul><li>Rose Petal Extract - Soothes and hydrates</li><li>24K Gold Flakes - Brightens and firms</li><li>Kaolin Clay - Purifies pores</li></ul>',
    priceRange: {
      minVariantPrice: {
        amount: '48.00',
        currencyCode: 'USD',
      },
    },
    images: {
      edges: [
        {
          node: {
            url: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1200&h=1200&fit=crop',
            altText: 'Rose Gold Face Mask jar with rose petals',
            width: 1200,
            height: 1200,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'mock-variant-8',
            title: '75ml',
            price: {
              amount: '48.00',
              currencyCode: 'USD',
            },
            availableForSale: true,
            selectedOptions: [
              {
                name: 'Size',
                value: '75ml',
              },
            ],
          },
        },
      ],
    },
    tags: ['mask', 'treatment', 'luxury'],
  },
];

// Mock Collections Data
export const mockCollections: Collection[] = [
  {
    id: 'mock-collection-1',
    title: 'Bestsellers',
    handle: 'bestsellers',
    description: 'Our most loved products, chosen by our community. These cult favorites combine the best of Korean clean beauty with Parisian luxury.',
    image: {
      url: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1600&h=900&fit=crop',
      altText: 'Bestsellers Collection',
      width: 1600,
      height: 900,
    },
    products: {
      edges: mockProducts
        .filter((p) => p.tags?.includes('bestseller'))
        .map((product) => ({ node: product })),
    },
  },
  {
    id: 'mock-collection-2',
    title: 'Serums & Essences',
    handle: 'serums-essences',
    description: 'Concentrated treatments for targeted results. Our serums deliver powerful ingredients deep into your skin for visible transformation.',
    image: {
      url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1600&h=900&fit=crop',
      altText: 'Serums & Essences Collection',
      width: 1600,
      height: 900,
    },
    products: {
      edges: mockProducts
        .filter((p) => p.tags?.includes('serum'))
        .map((product) => ({ node: product })),
    },
  },
  {
    id: 'mock-collection-3',
    title: 'Complete Routine',
    handle: 'complete-routine',
    description: 'Everything you need for the perfect Korean-French skincare routine. Curated sets that work beautifully together.',
    image: {
      url: 'https://images.unsplash.com/photo-1556228852-80863c88f04d?w=1600&h=900&fit=crop',
      altText: 'Complete Routine Collection',
      width: 1600,
      height: 900,
    },
    products: {
      edges: mockProducts.slice(0, 4).map((product) => ({ node: product })),
    },
  },
];

// Mock Blog Articles
export interface MockArticle {
  id: string;
  title: string;
  handle: string;
  excerpt: string;
  content: string;
  contentHtml: string;
  publishedAt: string;
  image?: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
  };
  blog: {
    handle: string;
  };
  tags: string[];
}

export const mockArticles: MockArticle[] = [
  {
    id: 'mock-article-1',
    title: 'The 10-Step Korean Skincare Routine: A Parisian\'s Guide',
    handle: '10-step-korean-skincare-routine',
    excerpt: 'Discover how to master the legendary Korean skincare routine with a touch of Parisian elegance. Learn which steps are essential and which you can skip.',
    content: 'Full article content here...',
    contentHtml: `
      <p>When I first moved from Seoul to Paris, I brought with me more than just my suitcase—I carried the beauty wisdom of generations. The Korean 10-step skincare routine might seem daunting at first, but let me guide you through it with the practical elegance I've learned to embrace in Paris.</p>

      <h2>Understanding the Philosophy</h2>

      <p>Korean skincare isn't about following strict rules—it's about <strong>understanding your skin</strong> and giving it what it needs. While the traditional routine has 10 steps, think of it as a menu rather than a mandate.</p>

      <blockquote>"Beauty is not about perfection—it's about the ritual of caring for yourself."</blockquote>

      <h2>The Essential Steps</h2>

      <h3>1. Oil Cleanser (PM Only)</h3>
      <p>Start your evening with an oil-based cleanser to dissolve makeup, sunscreen, and the day's impurities. Our Seoul Cleansing Balm transforms from solid to silky oil, melting everything away without stripping your skin.</p>

      <h3>2. Water-Based Cleanser</h3>
      <p>Follow with a gentle foam or gel cleanser to remove any remaining residue. This double cleanse ensures your skin is truly clean without over-washing.</p>

      <h3>3. Toner/Essence</h3>
      <p>This is where Korean and Western routines diverge beautifully. Korean toners are hydrating, not astringent. Pat in our Mauve Essence Toner to prep your skin for the steps ahead.</p>

      <h3>4. Treatments (Serums & Ampoules)</h3>
      <p>This is your moment to target specific concerns:</p>
      <ul>
        <li><strong>Brightening:</strong> Vitamin C or niacinamide</li>
        <li><strong>Anti-aging:</strong> Retinol or peptides</li>
        <li><strong>Hydration:</strong> Hyaluronic acid</li>
      </ul>

      <p>Our Radiant Seoul Serum combines all three in one luxurious formula.</p>

      <h2>The Parisian Adaptation</h2>

      <p>Here's my secret: <strong>You don't need all 10 steps every day.</strong> Parisians have taught me the beauty of effortless elegance—doing less, but doing it well.</p>

      <h3>My Minimal Morning (5 steps, 5 minutes)</h3>
      <ol>
        <li>Water-based cleanser</li>
        <li>Essence toner</li>
        <li>Vitamin C serum</li>
        <li>Light moisturizer</li>
        <li>Sunscreen</li>
      </ol>

      <h2>Listen to Your Skin</h2>

      <p>The most important lesson I've learned? <strong>Your skin changes.</strong> What works in humid Seoul summer might not work in dry Paris winter. Pay attention, adjust accordingly, and never feel guilty about skipping steps.</p>

      <blockquote>"The best skincare routine is the one you'll actually do consistently."</blockquote>

      <p>Whether you embrace all 10 steps or create your own 5-step routine, the real beauty of K-beauty is the <strong>intentional self-care.</strong> It's not vanity—it's taking time to care for yourself with purpose and presence.</p>

      <p>Bisous,<br/>Sophie</p>
    `,
    publishedAt: '2024-01-15T10:00:00Z',
    image: {
      url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&h=900&fit=crop',
      altText: 'Korean skincare products arranged elegantly',
      width: 1600,
      height: 900,
    },
    author: {
      name: 'Sophie Chen',
    },
    blog: {
      handle: 'news',
    },
    tags: ['skincare-tips', 'korean-beauty', 'routines'],
  },
  {
    id: 'mock-article-2',
    title: 'Morning vs Evening Skincare: What\'s the Difference?',
    handle: 'morning-vs-evening-skincare',
    excerpt: 'Your skin has different needs in the morning and evening. Learn how to optimize your routine for each time of day.',
    content: 'Article content...',
    contentHtml: `
      <p>One of the most common questions I receive is: "Why do I need different routines for morning and evening?" The answer lies in understanding what your skin needs at different times of the day.</p>

      <h2>Morning: Protection Mode</h2>

      <p>Your morning routine is all about <strong>protection</strong>. You're preparing your skin to face environmental stressors like UV rays, pollution, and free radicals.</p>

      <h3>Essential Morning Steps:</h3>
      <ol>
        <li><strong>Gentle Cleanse:</strong> Remove overnight oils and prep for products</li>
        <li><strong>Antioxidant Serum:</strong> Vitamin C to fight free radical damage</li>
        <li><strong>Moisturizer:</strong> Lightweight, fast-absorbing</li>
        <li><strong>Sunscreen:</strong> SPF 50, non-negotiable!</li>
      </ol>

      <blockquote>"Morning skincare is your armor for the day ahead."</blockquote>

      <h2>Evening: Repair Mode</h2>

      <p>Evening is when your skin does its most important work—<strong>repair and regeneration</strong>. While you sleep, your skin cells turn over faster and absorb ingredients more effectively.</p>

      <h3>Essential Evening Steps:</h3>
      <ol>
        <li><strong>Double Cleanse:</strong> Remove all traces of makeup and SPF</li>
        <li><strong>Treatment Serum:</strong> Retinol, peptides, or targeted treatments</li>
        <li><strong>Eye Cream:</strong> Prevent fine lines while you sleep</li>
        <li><strong>Night Cream:</strong> Rich, nourishing, occlusive</li>
      </ol>

      <h2>Key Differences</h2>

      <p><strong>Texture:</strong> Morning products are lighter; evening products can be richer.</p>
      <p><strong>Ingredients:</strong> Some actives (like retinol) are best used at night as they can increase sun sensitivity.</p>
      <p><strong>Time:</strong> Evening routine can be longer—you're not rushing out the door!</p>

      <h2>Products to Avoid in the Morning</h2>
      <ul>
        <li>Retinol (increases sun sensitivity)</li>
        <li>AHAs/BHAs (use at night for best results)</li>
        <li>Heavy oils (can make sunscreen less effective)</li>
      </ul>

      <p>Understanding these differences will help you get the most from your skincare investment. Your skin will thank you!</p>

      <p>Bisous,<br/>Sophie</p>
    `,
    publishedAt: '2024-01-20T09:00:00Z',
    image: {
      url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1600&h=900&fit=crop',
      altText: 'Morning and evening skincare products',
      width: 1600,
      height: 900,
    },
    author: {
      name: 'Sophie Chen',
    },
    blog: {
      handle: 'news',
    },
    tags: ['skincare-tips', 'routines', 'education'],
  },
  {
    id: 'mock-article-3',
    title: 'The Science Behind Glass Skin',
    handle: 'science-behind-glass-skin',
    excerpt: 'Glass skin isn\'t just a trend—it\'s achievable with the right approach. Discover the science and products that make it possible.',
    content: 'Article content...',
    contentHtml: `
      <p>The term "glass skin" has taken the beauty world by storm, but what does it actually mean? And more importantly, <strong>is it really achievable?</strong></p>

      <h2>What Is Glass Skin?</h2>

      <p>Glass skin refers to skin so smooth, clear, and luminous that it resembles glass. Think:</p>
      <ul>
        <li>Zero visible pores</li>
        <li>Even, luminous tone</li>
        <li>Plump, dewy finish</li>
        <li>No dry patches or texture</li>
      </ul>

      <blockquote>"Glass skin is about health first, makeup second."</blockquote>

      <h2>The Science</h2>

      <p>Achieving glass skin requires three key factors:</p>

      <h3>1. Hydration</h3>
      <p>Well-hydrated skin reflects light better. Layer hydrating ingredients like <strong>hyaluronic acid</strong> and <strong>glycerin</strong> to plump skin from within.</p>

      <h3>2. Exfoliation</h3>
      <p>Smooth texture is crucial. Gentle exfoliation with <strong>AHAs</strong> removes dead skin cells that create rough texture and dullness.</p>

      <h3>3. Barrier Health</h3>
      <p>A healthy skin barrier retains moisture and prevents inflammation. <strong>Ceramides</strong> and <strong>niacinamide</strong> strengthen the barrier.</p>

      <h2>The Glass Skin Routine</h2>

      <ol>
        <li><strong>Double Cleanse:</strong> Seoul Cleansing Balm + gentle foam cleanser</li>
        <li><strong>Exfoliate:</strong> 2-3x weekly with gentle AHA</li>
        <li><strong>Hydrating Toner:</strong> Mauve Essence Toner, pat in layers</li>
        <li><strong>Serum:</strong> Radiant Seoul Serum for glow and hydration</li>
        <li><strong>Moisturizer:</strong> Lock it all in</li>
        <li><strong>Face Oil (optional):</strong> For extra luminosity</li>
      </ol>

      <h2>The Truth About Glass Skin</h2>

      <p>Here's what nobody tells you: <strong>genetics play a role.</strong> Some people naturally have smaller pores and more sebum production. But everyone can improve their skin's clarity and luminosity.</p>

      <p>Glass skin is a journey, not a destination. Focus on consistency, and celebrate progress!</p>

      <p>Bisous,<br/>Sophie</p>
    `,
    publishedAt: '2024-01-25T11:00:00Z',
    image: {
      url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&h=900&fit=crop',
      altText: 'Close-up of glowing, healthy skin',
      width: 1600,
      height: 900,
    },
    author: {
      name: 'Sophie Chen',
    },
    blog: {
      handle: 'news',
    },
    tags: ['glass-skin', 'korean-beauty', 'science', 'trends'],
  },
  {
    id: 'mock-article-4',
    title: 'Clean Beauty Myths Debunked',
    handle: 'clean-beauty-myths-debunked',
    excerpt: 'As a formulator, I\'m breaking down the biggest misconceptions about clean beauty and what you really need to know.',
    content: 'Article content...',
    contentHtml: `
      <p>As someone who formulates products daily, I hear a lot of misconceptions about "clean beauty." Let's separate fact from fiction.</p>

      <h2>Myth #1: Natural = Safe, Synthetic = Dangerous</h2>

      <p><strong>The Truth:</strong> Some of the most toxic substances on earth are completely natural (poison ivy, anyone?). Meanwhile, many synthetic ingredients are perfectly safe and even more gentle than their natural counterparts.</p>

      <p>What matters is the <strong>ingredient itself</strong>, not whether it came from a plant or a lab.</p>

      <h2>Myth #2: If You Can't Pronounce It, Don't Use It</h2>

      <p><strong>The Truth:</strong> Tocopherol is just Vitamin E. Sodium hyaluronate is hyaluronic acid. Scientific names sound scary, but they're often for simple, safe ingredients.</p>

      <blockquote>"Don't fear science—embrace understanding."</blockquote>

      <h2>Myth #3: Clean Beauty Products Don't Work as Well</h2>

      <p><strong>The Truth:</strong> Modern clean beauty is incredibly sophisticated. We can create effective, results-driven products without questionable ingredients.</p>

      <p>At Madame Ko, our products are both clean AND effective. You shouldn't have to choose.</p>

      <h2>What Clean Beauty Really Means</h2>

      <p>To me, clean beauty means:</p>
      <ul>
        <li><strong>Transparency:</strong> Full ingredient disclosure</li>
        <li><strong>Safety:</strong> No ingredients linked to health concerns</li>
        <li><strong>Efficacy:</strong> Products that actually work</li>
        <li><strong>Sustainability:</strong> Considering environmental impact</li>
      </ul>

      <h2>Red Flag Ingredients We Avoid</h2>

      <ul>
        <li>Parabens (endocrine disruptors)</li>
        <li>Sulfates (unnecessarily harsh)</li>
        <li>Phthalates (linked to health concerns)</li>
        <li>Synthetic fragrances (potential allergens)</li>
        <li>Formaldehyde-releasing preservatives</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>Clean beauty isn't about fear-mongering or avoiding all chemicals (water is a chemical!). It's about making <strong>informed, thoughtful choices</strong> about what you put on your skin.</p>

      <p>Read ingredients. Ask questions. Choose brands that align with your values.</p>

      <p>Bisous,<br/>Sophie</p>
    `,
    publishedAt: '2024-02-01T10:00:00Z',
    image: {
      url: 'https://images.unsplash.com/photo-1556228994-128845b91579?w=1600&h=900&fit=crop',
      altText: 'Natural ingredients and lab equipment',
      width: 1600,
      height: 900,
    },
    author: {
      name: 'Sophie Chen',
    },
    blog: {
      handle: 'news',
    },
    tags: ['clean-beauty', 'education', 'science', 'myths'],
  },
];
