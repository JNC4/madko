'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Cart } from '@/lib/shopify/types';
import { shopifyFetch } from '@/lib/shopify/client';
import {
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  GET_CART_QUERY,
} from '@/lib/shopify/queries/cart';

interface CartContextType {
  cart: Cart | null;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (variantId: string, quantity: number) => Promise<void>;
  updateCartLine: (lineId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      fetchCart(cartId);
    }
  }, []);

  const fetchCart = async (cartId: string) => {
    try {
      const data = await shopifyFetch<{ cart: Cart }>({
        query: GET_CART_QUERY,
        variables: { cartId },
      });
      setCart(data.cart);
    } catch (error) {
      console.error('Error fetching cart:', error);
      localStorage.removeItem('cartId');
    }
  };

  const createCart = async (variantId: string, quantity: number) => {
    try {
      const data = await shopifyFetch<{ cartCreate: { cart: Cart } }>({
        query: CREATE_CART_MUTATION,
        variables: {
          input: {
            lines: [{ merchandiseId: variantId, quantity }],
          },
        },
      });
      const newCart = data.cartCreate.cart;
      setCart(newCart);
      localStorage.setItem('cartId', newCart.id);
      return newCart;
    } catch (error) {
      console.error('Error creating cart:', error);
      throw error;
    }
  };

  const addToCart = async (variantId: string, quantity: number) => {
    setIsLoading(true);
    try {
      if (!cart) {
        await createCart(variantId, quantity);
      } else {
        const data = await shopifyFetch<{ cartLinesAdd: { cart: Cart } }>({
          query: ADD_TO_CART_MUTATION,
          variables: {
            cartId: cart.id,
            lines: [{ merchandiseId: variantId, quantity }],
          },
        });
        setCart(data.cartLinesAdd.cart);
      }
      setIsCartOpen(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCartLine = async (lineId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const data = await shopifyFetch<{ cartLinesUpdate: { cart: Cart } }>({
        query: UPDATE_CART_MUTATION,
        variables: {
          cartId: cart.id,
          lines: [{ id: lineId, quantity }],
        },
      });
      setCart(data.cartLinesUpdate.cart);
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (lineId: string) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const data = await shopifyFetch<{ cartLinesRemove: { cart: Cart } }>({
        query: REMOVE_FROM_CART_MUTATION,
        variables: {
          cartId: cart.id,
          lineIds: [lineId],
        },
      });
      setCart(data.cartLinesRemove.cart);
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        updateCartLine,
        removeFromCart,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
