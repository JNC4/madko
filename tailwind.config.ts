import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Parisian Mauve Luxury Palette
        'lavender-mist': '#E6E0F0',
        'mauve-elegant': '#C8B8DB',
        'perle-purple': '#9D8BAF',
        'parisian-plum': '#6B5B7A',
        'cream-luxe': '#FAF8F5',
        'marble-grey': '#E8E6E3',
        'charcoal': '#3A3640',
        'rose-gold': '#D4A5A5',
        'sage-whisper': '#C9D1C8',
      },
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(107, 91, 122, 0.08)',
        'elegant': '0 8px 30px rgba(107, 91, 122, 0.12)',
        'lifted': '0 12px 40px rgba(107, 91, 122, 0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C8B8DB 0%, #9D8BAF 100%)',
        'gradient-hero': 'linear-gradient(180deg, #FAF8F5 0%, #E6E0F0 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      letterSpacing: {
        'luxury': '0.05em',
        'wide': '0.1em',
      },
    },
  },
  plugins: [],
};

export default config;
