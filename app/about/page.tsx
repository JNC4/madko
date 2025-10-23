'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';

const values = [
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Clean Beauty',
    description: 'Every ingredient is carefully vetted for safety and efficacy. No compromises.',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Made with Love',
    description: 'Each product is crafted with care, blending Korean innovation with French elegance.',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Globally Sourced',
    description: 'Premium ingredients from Korea, France, and around the world.',
  },
  {
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    title: 'Proven Results',
    description: 'Clinically tested formulas that deliver visible, lasting results.',
  },
];

const team = [
  {
    name: 'Sophie Chen',
    role: 'Founder & CEO',
    bio: 'Born in Seoul, raised in Paris. Sophie combines her dual heritage into every product.',
    image: null,
  },
  {
    name: 'Dr. Marie Laurent',
    role: 'Head of Product Development',
    bio: 'PhD in Cosmetic Chemistry with 15 years experience in luxury skincare.',
    image: null,
  },
  {
    name: 'Ji-Woo Park',
    role: 'Master Formulator',
    bio: 'Traditional Korean skincare expert with modern innovation expertise.',
    image: null,
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20">
          <div className="absolute inset-0 marble-texture opacity-30" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 font-cormorant text-5xl font-bold text-parisian-plum md:text-6xl lg:text-7xl">
                Where Seoul Meets Paris
              </h1>
              <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/80 md:text-xl">
                Madame Ko is more than skincare—it's a celebration of two cultures, two philosophies,
                and one beautiful vision: radiant, healthy skin for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-rose-gold/20 shadow-elegant">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lavender-mist to-mauve-elegant/30">
                    <div className="text-center">
                      <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary">
                        <span className="font-playfair text-6xl font-bold text-white">MK</span>
                      </div>
                      <p className="font-cormorant text-3xl text-parisian-plum">Our Story</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <h2 className="mb-6 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl">
                  A Tale of Two Cities
                </h2>
                <div className="space-y-4 font-inter text-base leading-relaxed text-charcoal/80 md:text-lg">
                  <p>
                    Founded by Sophie Chen in 2024, Madame Ko was born from a lifelong journey between
                    two of the world's most beautiful cities: Seoul and Paris.
                  </p>
                  <p>
                    Growing up in Seoul, Sophie witnessed the power of Korean skincare—the dedication
                    to innovation, the respect for ingredients, the multi-step rituals that transform
                    skin care into self-care.
                  </p>
                  <p>
                    Later, while studying in Paris, she fell in love with French beauty philosophy:
                    the emphasis on quality over quantity, the celebration of natural radiance, the
                    art of effortless elegance.
                  </p>
                  <p>
                    Madame Ko brings these two worlds together. Every product combines Korean
                    innovation with French luxury, creating formulas that are as effective as they
                    are elegant.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-lavender-mist py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl">
                Our Values
              </h2>
              <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70">
                These principles guide everything we create
              </p>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-frosted p-6 text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-whisper/30 text-sage-whisper">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="mb-3 font-cormorant text-2xl font-semibold text-parisian-plum">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm leading-relaxed text-charcoal/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl">
                Meet Our Team
              </h2>
              <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70">
                The passionate people behind Madame Ko
              </p>
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-elegant overflow-hidden text-center"
                >
                  {/* Photo Placeholder */}
                  <div className="relative aspect-square bg-gradient-to-br from-lavender-mist to-mauve-elegant/30">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary">
                        <span className="font-playfair text-4xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="mb-1 font-cormorant text-2xl font-semibold text-parisian-plum">
                      {member.name}
                    </h3>
                    <p className="mb-3 font-inter text-sm font-medium text-perle-purple">
                      {member.role}
                    </p>
                    <p className="font-inter text-sm leading-relaxed text-charcoal/70">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-marble-grey py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elegant p-12"
            >
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="mb-4 font-cormorant text-3xl font-bold text-parisian-plum md:text-4xl">
                Get in Touch
              </h2>
              <p className="mb-8 font-inter text-base leading-relaxed text-charcoal/70 md:text-lg">
                Have questions about our products? Want to learn more about our story?
                We'd love to hear from you.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:hello@madameko.com"
                  className="btn-primary"
                >
                  Contact Us
                </a>
                <a
                  href="/shop"
                  className="btn-secondary"
                >
                  Shop Collection
                </a>
              </div>

              <div className="divider-rose my-8" />

              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
                <div className="text-center">
                  <p className="mb-1 font-inter text-sm font-medium uppercase tracking-wide text-charcoal/60">
                    Email
                  </p>
                  <a
                    href="mailto:hello@madameko.com"
                    className="font-inter text-base text-perle-purple hover:text-parisian-plum"
                  >
                    hello@madameko.com
                  </a>
                </div>
                <div className="text-center">
                  <p className="mb-1 font-inter text-sm font-medium uppercase tracking-wide text-charcoal/60">
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="font-inter text-base text-perle-purple hover:text-parisian-plum"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
