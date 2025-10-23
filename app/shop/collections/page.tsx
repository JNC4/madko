import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_COLLECTIONS_QUERY } from '@/lib/shopify/queries/collections';
import { mockCollections } from '@/lib/data/mockData';

export const metadata = {
  title: 'Collections - Madame Ko',
  description: 'Explore our curated collections of luxury Korean skincare',
};

interface CollectionsResponse {
  collections: {
    edges: {
      node: {
        id: string;
        title: string;
        handle: string;
        description: string;
        image?: {
          url: string;
          altText: string | null;
          width: number;
          height: number;
        };
      };
    }[];
  };
}

async function getCollections() {
  try {
    const data = await shopifyFetch<CollectionsResponse>({
      query: GET_COLLECTIONS_QUERY,
      variables: { first: 12 },
    });

    const collections = data.collections.edges.map((edge) => edge.node);

    // Use mock data if no collections from Shopify
    return collections.length > 0 ? collections : mockCollections;
  } catch (error) {
    console.error('Error fetching collections:', error);
    // Return mock data on error
    return mockCollections;
  }
}

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-5xl font-bold text-parisian-plum md:text-6xl">
              Collections
            </h1>
            <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70">
              Explore our carefully curated collections, each designed to address your unique skincare needs
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          </div>

          {/* Collections Grid */}
          {collections.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/shop/collections/${collection.handle}`}
                  className="group"
                >
                  <div className="card-elegant overflow-hidden">
                    {/* Collection Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-lavender-mist">
                      {collection.image ? (
                        <Image
                          src={collection.image.url}
                          alt={collection.image.altText || collection.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="font-cormorant text-4xl text-mauve-elegant">MK</span>
                        </div>
                      )}
                    </div>

                    {/* Collection Info */}
                    <div className="p-6">
                      <h2 className="mb-2 font-cormorant text-2xl font-semibold text-parisian-plum transition-colors group-hover:text-perle-purple">
                        {collection.title}
                      </h2>
                      {collection.description && (
                        <p className="font-inter text-sm leading-relaxed text-charcoal/70 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                      <div className="mt-4 flex items-center font-inter text-sm font-medium text-perle-purple">
                        <span>Explore Collection</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
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
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-cormorant text-2xl font-semibold text-parisian-plum">
                No Collections Available
              </h3>
              <p className="font-inter text-charcoal/60">
                Collections will appear here once they're added to your Shopify store
              </p>
            </div>
          )}
        </div>
      </main>
    </PageLayout>
  );
}
