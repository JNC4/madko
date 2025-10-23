'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandStory from '@/components/home/BrandStory';
import IngredientsPhilosophy from '@/components/home/IngredientsPhilosophy';
import Newsletter from '@/components/home/Newsletter';
import LoadingCircle from '@/components/ui/LoadingCircle';
import WashTransition from '@/components/ui/WashTransition';
import { Product } from '@/lib/shopify/types';

interface HomeClientProps {
  featuredProducts: Product[];
}

export default function HomeClient({ featuredProducts }: HomeClientProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showContent, setShowContent] = useState(false);
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    // Only check once to prevent double-render issue
    if (hasCheckedRef.current) {
      console.log('HomeClient: Already checked, skipping');
      return;
    }

    hasCheckedRef.current = true;

    const hasVisited = sessionStorage.getItem('madameko_visited');
    console.log('HomeClient: Initial check, hasVisited =', hasVisited);

    if (hasVisited) {
      // Already visited - skip loading animation
      console.log('HomeClient: Already visited, skipping loading');
      setIsLoading(false);
      setShowContent(true);
    } else {
      // First visit - show loading animation
      console.log('HomeClient: First visit, showing loading');
      // Keep isLoading = true (already set in state)
      sessionStorage.setItem('madameko_visited', 'true');
    }
  }, []);

  const handleLoadingComplete = () => {
    console.log('HomeClient: Loading complete');
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      console.log('HomeClient: Showing content');
      setShowContent(true);
    }, 100);
  };

  console.log('HomeClient: Rendering, isLoading =', isLoading, 'showContent =', showContent);

  return (
    <>
      {isLoading && (
        <LoadingCircle isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      )}

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <WashTransition>
              <Header />
              <main>
                <HeroSection />
                <FeaturedProducts products={featuredProducts} />
                <BrandStory />
                <IngredientsPhilosophy />
                <Newsletter />
              </main>
              <Footer />
            </WashTransition>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
