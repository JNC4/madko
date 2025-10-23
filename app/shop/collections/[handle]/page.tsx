import PageLayout from '@/components/layout/PageLayout';
import ProductCard from '@/components/product/ProductCard';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_COLLECTION_BY_HANDLE_QUERY } from '@/lib/shopify/queries/collections';
import { notFound } from 'next/navigation';
import { mockCollections } from '@/lib/data/mockData';

interface CollectionResponse {
  collection: {
    id: string;
    title: string;
    handle: string;
    description: string;
    image?: {
      url: string;
      altText: string | null;
    };
    products: {
      edges: {
        node: {
          id: string;
          title: string;
          handle: string;
          description: string;
          priceRange: {
            minVariantPrice: {
              amount: string;
              currencyCode: string;
            };
          };
          images: {
            edges: {
              node: {
                id: string;
                url: string;
                altText: string | null;
                width: number;
                height: number;
              };
            }[];
          };
          variants: {
            edges: {
              node: {
                id: string;
                availableForSale: boolean;
              };
            }[];
          };
        };
      }[];
    };
  };
}

async function getCollection(handle: string) {
  try {
    const data = await shopifyFetch<CollectionResponse>({
      query: GET_COLLECTION_BY_HANDLE_QUERY,
      variables: { handle, first: 24 },
    });

    return data.collection;
  } catch (error) {
    console.error('Error fetching collection:', error);
    // Try to find mock collection by handle
    const mockCollection = mockCollections.find((c) => c.handle === handle);
    return mockCollection || null;
  }
}

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const collection = await getCollection(params.handle);

  if (!collection) {
    return {
      title: 'Collection Not Found - Madame Ko',
    };
  }

  return {
    title: `${collection.title} - Madame Ko`,
    description: collection.description || `Shop our ${collection.title} collection`,
  };
}

export default async function CollectionPage({ params }: { params: { handle: string } }) {
  const collection = await getCollection(params.handle);

  if (!collection) {
    notFound();
  }

  const products = collection.products?.edges.map((edge) => edge.node as any) || [];

  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Collection Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-5xl font-bold text-parisian-plum md:text-6xl">
              {collection.title}
            </h1>
            {collection.description && (
              <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70">
                {collection.description}
              </p>
            )}
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
                No Products in This Collection
              </h3>
              <p className="font-inter text-charcoal/60">
                Products will appear here once they're added to this collection
              </p>
            </div>
          )}
        </div>
      </main>
    </PageLayout>
  );
}
