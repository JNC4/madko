'use client';

import { useState } from 'react';
import { useCart } from '@/lib/context/CartContext';

interface AddToCartButtonProps {
  variantId: string;
  availableForSale: boolean;
}

export default function AddToCartButton({ variantId, availableForSale }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = async () => {
    if (availableForSale) {
      await addToCart(variantId, quantity);
    }
  };

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div>
        <label className="mb-2 block font-inter text-sm font-medium uppercase tracking-wide text-charcoal">
          Quantity
        </label>
        <div className="flex w-32 items-center justify-between rounded-lg border-2 border-marble-grey bg-white">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-lavender-mist"
            aria-label="Decrease quantity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="font-inter text-lg font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-12 w-12 items-center justify-center transition-colors hover:bg-lavender-mist"
            aria-label="Increase quantity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={!availableForSale || isLoading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading
          ? 'Adding...'
          : availableForSale
          ? 'Add to Cart'
          : 'Out of Stock'}
      </button>
    </div>
  );
}
