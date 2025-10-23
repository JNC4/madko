import PageLayout from '@/components/layout/PageLayout';
import ProductCard from '@/components/product/ProductCard';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_PRODUCTS_QUERY } from '@/lib/shopify/queries/products';
import { ProductsResponse } from '@/lib/shopify/types';
import { mockProducts } from '@/lib/data/mockData';

export const metadata = {
  title: 'Shop - Madame Ko',
  description: 'Discover our complete collection of luxury Korean skincare with Parisian elegance',
};

async function getProducts() {
  try {
    const data = await shopifyFetch<ProductsResponse>({
      query: GET_PRODUCTS_QUERY,
      variables: { first: 24 },
    });

    const products = data.products.edges.map((edge) => edge.node);

    // Use mock data if no products from Shopify
    return products.length > 0 ? products : mockProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return mock data on error
    return mockProducts;
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-5xl font-bold text-parisian-plum md:text-6xl">
              Our Collection
            </h1>
            <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70">
              Discover the perfect fusion of Korean skincare innovation and Parisian luxury
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-lavender-mist">
                <svg
                  className="h-12 w-12 text-mauve-elegant"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-cormorant text-2xl font-semibold text-parisian-plum">
                No Products Available
              </h3>
              <p className="font-inter text-charcoal/60">
                Please check back soon or configure your Shopify store
              </p>
            </div>
          )}
        </div>
      </main>
    </PageLayout>
  );
}
