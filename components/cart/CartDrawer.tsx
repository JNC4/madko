'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/context/CartContext';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateCartLine, removeFromCart, isLoading } = useCart();

  const cartLines = cart?.lines.edges || [];
  const isEmpty = cartLines.length === 0;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-cream-luxe shadow-elegant"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-marble-grey p-6">
                <h2 className="font-cormorant text-3xl font-bold text-parisian-plum">
                  Your Cart
                </h2>
                <button
                  onClick={closeCart}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-lavender-mist"
                  aria-label="Close cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-charcoal"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {isEmpty ? (
                  <div className="flex h-full flex-col items-center justify-center py-12">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-lavender-mist">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-12 w-12 text-mauve-elegant"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 font-cormorant text-2xl font-semibold text-parisian-plum">
                      Your cart is empty
                    </h3>
                    <p className="mb-6 font-inter text-sm text-charcoal/60">
                      Add some luxurious products to your cart
                    </p>
                    <button
                      onClick={closeCart}
                      className="btn-primary"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartLines.map(({ node: line }) => {
                      const merchandise = line.merchandise;
                      return (
                        <div
                          key={line.id}
                          className="flex gap-4 rounded-lg border border-marble-grey bg-white p-4"
                        >
                          {/* Product Image */}
                          <Link
                            href={`/shop/products/${merchandise.product.handle}`}
                            className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-lavender-mist"
                            onClick={closeCart}
                          >
                            {merchandise.image ? (
                              <Image
                                src={merchandise.image.url}
                                alt={merchandise.image.altText || merchandise.product.title}
                                fill
                                sizes="96px"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <span className="font-cormorant text-xl text-mauve-elegant">
                                  MK
                                </span>
                              </div>
                            )}
                          </Link>

                          {/* Product Details */}
                          <div className="flex flex-1 flex-col">
                            <Link
                              href={`/shop/products/${merchandise.product.handle}`}
                              onClick={closeCart}
                              className="font-cormorant text-lg font-semibold text-parisian-plum hover:text-perle-purple"
                            >
                              {merchandise.product.title}
                            </Link>
                            {merchandise.title !== 'Default Title' && (
                              <p className="font-inter text-sm text-charcoal/60">
                                {merchandise.title}
                              </p>
                            )}
                            <p className="mt-1 font-inter text-base font-medium text-perle-purple">
                              {formatPrice(merchandise.price)}
                            </p>

                            {/* Quantity Controls */}
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() =>
                                    line.quantity === 1
                                      ? removeFromCart(line.id)
                                      : updateCartLine(line.id, line.quantity - 1)
                                  }
                                  disabled={isLoading}
                                  className="flex h-8 w-8 items-center justify-center rounded-md border border-marble-grey transition-colors hover:bg-lavender-mist disabled:opacity-50"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 12h14"
                                    />
                                  </svg>
                                </button>
                                <span className="w-8 text-center font-inter text-sm font-medium">
                                  {line.quantity}
                                </span>
                                <button
                                  onClick={() => updateCartLine(line.id, line.quantity + 1)}
                                  disabled={isLoading}
                                  className="flex h-8 w-8 items-center justify-center rounded-md border border-marble-grey transition-colors hover:bg-lavender-mist disabled:opacity-50"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                  </svg>
                                </button>
                              </div>

                              {/* Remove Button */}
                              <button
                                onClick={() => removeFromCart(line.id)}
                                disabled={isLoading}
                                className="font-inter text-sm text-charcoal/60 transition-colors hover:text-rose-gold disabled:opacity-50"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              {!isEmpty && cart && (
                <div className="border-t border-marble-grey bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-inter text-lg font-medium text-charcoal">
                      Subtotal
                    </span>
                    <span className="font-cormorant text-2xl font-bold text-parisian-plum">
                      {formatPrice(cart.cost.subtotalAmount)}
                    </span>
                  </div>
                  <p className="mb-4 font-inter text-xs text-charcoal/60">
                    Shipping and taxes calculated at checkout
                  </p>
                  <a
                    href={cart.checkoutUrl}
                    className="btn-primary block w-full text-center"
                  >
                    Checkout
                  </a>
                  <button
                    onClick={closeCart}
                    className="btn-secondary mt-3 w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
