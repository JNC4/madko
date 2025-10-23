'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call - Replace with actual newsletter signup logic
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for joining our exclusive community!');
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-marble-grey">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elegant p-8 text-center sm:p-12"
        >
          {/* Icon */}
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

          {/* Heading */}
          <h2 className="mb-4 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl">
            Join Our Circle
          </h2>

          {/* Description */}
          <p className="mb-8 font-inter text-base leading-relaxed text-charcoal/70 md:text-lg">
            Be the first to discover new collections, exclusive offers, and beauty insights
            from our Parisian atelier. Plus, enjoy 15% off your first order.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading' || status === 'success'}
                className="input-elegant flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Status Messages */}
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 font-inter text-sm ${
                  status === 'success' ? 'text-sage-whisper' : 'text-rose-gold'
                }`}
              >
                {message}
              </motion.p>
            )}
          </form>

          {/* Privacy Note */}
          <p className="mt-6 font-inter text-xs text-charcoal/50">
            We respect your privacy. Unsubscribe at any time.
          </p>

          {/* Divider */}
          <div className="my-8 divider-rose" />

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="mb-1 font-cormorant text-2xl font-bold text-perle-purple">10K+</div>
              <div className="font-inter text-xs uppercase tracking-wide text-charcoal/60">
                Subscribers
              </div>
            </div>
            <div className="text-center">
              <div className="mb-1 font-cormorant text-2xl font-bold text-perle-purple">5★</div>
              <div className="font-inter text-xs uppercase tracking-wide text-charcoal/60">
                Rated
              </div>
            </div>
            <div className="text-center">
              <div className="mb-1 font-cormorant text-2xl font-bold text-perle-purple">24/7</div>
              <div className="font-inter text-xs uppercase tracking-wide text-charcoal/60">
                Support
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
