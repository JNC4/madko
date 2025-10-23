'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="py-24 bg-lavender-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-rose-gold/20 shadow-elegant">
              {/* Placeholder Image - Replace with actual brand image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-luxe to-marble-grey flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary mb-6">
                    <span className="font-playfair text-5xl font-bold text-white">MK</span>
                  </div>
                  <p className="font-cormorant text-2xl text-parisian-plum">
                    Brand Story Image
                  </p>
                  <p className="font-inter text-sm text-charcoal/60 mt-2">
                    Replace with your brand photo
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-rose-gold/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-mauve-elegant/20 blur-3xl" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="inline-block rounded-full border border-perle-purple/30 bg-white/60 px-4 py-1 font-inter text-sm font-medium tracking-luxury text-perle-purple backdrop-blur-sm">
                Our Story
              </span>
            </div>

            <h2 className="mb-6 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl lg:text-6xl">
              A Journey of
              <br />
              <span className="text-mauve-elegant">Elegance & Innovation</span>
            </h2>

            <div className="space-y-6 font-inter text-base leading-relaxed text-charcoal/80 md:text-lg">
              <p>
                Madame Ko was born from a simple dream: to bridge two worlds of beauty excellence.
                Inspired by the timeless elegance of Parisian boulevards and the innovative spirit of
                Seoul's skincare laboratories.
              </p>

              <p>
                Our founder, having lived between these two vibrant cities, witnessed firsthand the
                power of combining French luxury traditions with Korean scientific breakthroughs.
                Each product is a love letter to both cultures.
              </p>

              <p>
                We believe beauty should be clean, effective, and utterly luxurious. Every ingredient
                is carefully sourced, every formula meticulously crafted, and every package designed
                to bring a moment of Parisian grace to your daily ritual.
              </p>
            </div>

            {/* Stats or Key Points */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="mb-2 font-cormorant text-3xl font-bold text-perle-purple">100%</div>
                <div className="font-inter text-xs uppercase tracking-wide text-charcoal/60">
                  Clean Ingredients
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <div className="mb-2 font-cormorant text-3xl font-bold text-perle-purple">K+F</div>
                <div className="font-inter text-xs uppercase tracking-wide text-charcoal/60">
                  Korean + French
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="mb-2 font-cormorant text-3xl font-bold text-perle-purple">2024</div>
                <div className="font-inter text-xs uppercase tracking-wide text-charcoal/60">
                  Est. Year
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
