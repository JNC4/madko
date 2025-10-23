'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils/formatPrice';
import { useCart } from '@/lib/context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const variant = product.variants.edges[0]?.node;
  const isAvailable = variant?.availableForSale;
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleQuickAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (variant && isAvailable && !isAdding) {
      setIsAdding(true);
      await addToCart(variant.id, 1);
      setTimeout(() => setIsAdding(false), 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-perle-purple/20 via-mauve-elegant/20 to-rose-gold/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
        style={{ zIndex: -1 }}
      />

      <Link href={`/shop/products/${product.handle}`}>
        <motion.div
          className="card-elegant overflow-hidden"
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          {/* Product Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl bg-lavender-mist">
            {image ? (
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Image
                  src={image.url}
                  alt={image.altText || product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-cormorant text-2xl text-mauve-elegant">MK</span>
              </div>
            )}

            {/* Shimmer effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%', skewX: -15 }}
              whileHover={{
                x: '200%',
                transition: { duration: 0.8, ease: 'easeInOut' },
              }}
            />

            {/* Availability Badge */}
            {!isAvailable && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 backdrop-blur-sm"
              >
                <span className="font-inter text-xs font-medium text-cream-luxe">
                  Sold Out
                </span>
              </motion.div>
            )}

            {/* Quick Add Button (appears on hover) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <motion.button
                disabled={!isAvailable || isAdding}
                className="w-full btn-primary text-sm disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                onClick={handleQuickAdd}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isAdding ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                    />
                    <span>Adding...</span>
                  </motion.div>
                ) : (
                  <>
                    {isAvailable ? 'Quick Add' : 'Out of Stock'}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{
                        x: '100%',
                        transition: { duration: 0.5 },
                      }}
                    />
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Product Info */}
          <motion.div
            className="p-5"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.h3
              className="mb-2 font-cormorant text-xl font-semibold text-parisian-plum line-clamp-2"
              whileHover={{ color: '#9D8BAF' }}
              transition={{ duration: 0.2 }}
            >
              {product.title}
            </motion.h3>

            {product.description && (
              <p className="mb-3 font-inter text-sm text-charcoal/60 line-clamp-2">
                {product.description}
              </p>
            )}

            <div className="flex items-center justify-between">
              <motion.span
                className="font-inter text-lg font-medium text-perle-purple"
                whileHover={{ scale: 1.05 }}
              >
                {formatPrice(product.priceRange.minVariantPrice)}
              </motion.span>

              {/* Rating Stars with stagger animation */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="h-4 w-4 text-rose-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0.6, scale: 1 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.2,
                      transition: { delay: i * 0.05 },
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
