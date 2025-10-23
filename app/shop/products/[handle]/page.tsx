'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import ProductGallery from '@/components/product/ProductGallery';
import VariantSelector from '@/components/product/VariantSelector';
import AddToCartButton from '@/components/product/AddToCartButton';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_PRODUCT_BY_HANDLE_QUERY } from '@/lib/shopify/queries/products';
import { ProductResponse, Product } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils/formatPrice';

export default function ProductPage() {
  const params = useParams();
  const handle = params.handle as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await shopifyFetch<ProductResponse>({
          query: GET_PRODUCT_BY_HANDLE_QUERY,
          variables: { handle },
        });

        if (data.product) {
          setProduct(data.product);

          // Initialize selected options with first variant
          const initialOptions: Record<string, string> = {};
          data.product.options?.forEach((option) => {
            initialOptions[option.name] = option.values[0];
          });
          setSelectedOptions(initialOptions);

          // Set initial variant
          const firstVariant = data.product.variants.edges[0]?.node;
          if (firstVariant) {
            setSelectedVariant(firstVariant);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [handle]);

  useEffect(() => {
    if (!product) return;

    // Find matching variant based on selected options
    const matchingVariant = product.variants.edges.find(({ node: variant }) =>
      variant.selectedOptions.every(
        (option) => selectedOptions[option.name] === option.value
      )
    );

    if (matchingVariant) {
      setSelectedVariant(matchingVariant.node);
    }
  }, [selectedOptions, product]);

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  if (loading) {
    return (
      <PageLayout>
        <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-20">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-lavender-mist border-t-perle-purple" />
            </div>
          </div>
        </main>
      </PageLayout>
    );
  }

  if (!product) {
    return (
      <PageLayout>
        <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-20 text-center">
              <h1 className="mb-4 font-cormorant text-4xl font-bold text-parisian-plum">
                Product Not Found
              </h1>
              <p className="font-inter text-charcoal/60">
                The product you're looking for doesn't exist
              </p>
            </div>
          </div>
        </main>
      </PageLayout>
    );
  }

  const images = product.images.edges.map((edge) => edge.node);
  const variants = product.variants.edges.map((edge) => edge.node);

  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 font-inter text-sm text-charcoal/60">
            <a href="/shop" className="hover:text-perle-purple">
              Shop
            </a>
            <span>/</span>
            <span className="text-charcoal">{product.title}</span>
          </nav>

          {/* Product Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Product Gallery */}
            <div>
              <ProductGallery images={images} productTitle={product.title} />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="mb-4 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl">
                {product.title}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <span className="font-inter text-3xl font-medium text-perle-purple">
                  {selectedVariant && formatPrice(selectedVariant.price)}
                </span>
              </div>

              {/* Rating */}
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-rose-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-inter text-sm text-charcoal/60">(12 reviews)</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="font-inter text-base leading-relaxed text-charcoal/80">
                  {product.description}
                </p>
              </div>

              <div className="divider-rose mb-8" />

              {/* Variant Selector */}
              {product.options && (
                <div className="mb-8">
                  <VariantSelector
                    options={product.options}
                    variants={variants}
                    selectedOptions={selectedOptions}
                    onOptionChange={handleOptionChange}
                  />
                </div>
              )}

              {/* Add to Cart */}
              {selectedVariant && (
                <AddToCartButton
                  variantId={selectedVariant.id}
                  availableForSale={selectedVariant.availableForSale}
                />
              )}

              <div className="divider-rose my-8" />

              {/* Accordions */}
              <div className="space-y-4">
                <details className="group rounded-lg border border-marble-grey bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-inter font-medium text-charcoal">
                    Ingredients
                    <svg
                      className="h-5 w-5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-marble-grey p-4 font-inter text-sm leading-relaxed text-charcoal/70">
                    Clean, effective ingredients sourced from Korea and France. Full ingredient
                    list available on product packaging.
                  </div>
                </details>

                <details className="group rounded-lg border border-marble-grey bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-inter font-medium text-charcoal">
                    How to Use
                    <svg
                      className="h-5 w-5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-marble-grey p-4 font-inter text-sm leading-relaxed text-charcoal/70">
                    Apply to clean, dry skin. Gently massage in circular motions until fully
                    absorbed. Use morning and evening for best results.
                  </div>
                </details>

                <details className="group rounded-lg border border-marble-grey bg-white">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-inter font-medium text-charcoal">
                    Shipping & Returns
                    <svg
                      className="h-5 w-5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-marble-grey p-4 font-inter text-sm leading-relaxed text-charcoal/70">
                    Free shipping on orders over $75. Returns accepted within 30 days of
                    purchase for unopened products.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
