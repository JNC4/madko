import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_BLOG_ARTICLES_QUERY } from '@/lib/shopify/queries/blog';
import { mockArticles } from '@/lib/data/mockData';

export const metadata = {
  title: 'Blog - Madame Ko',
  description: 'Beauty tips, skincare advice, and the latest from Madame Ko',
};

interface Article {
  id: string;
  title: string;
  handle: string;
  excerpt: string;
  excerptHtml: string;
  publishedAt: string;
  image?: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  };
  author: {
    name: string;
  };
  blog: {
    handle: string;
  };
  tags: string[];
}

interface ArticlesResponse {
  articles: {
    edges: {
      node: Article;
    }[];
  };
}

async function getArticles() {
  try {
    const data = await shopifyFetch<ArticlesResponse>({
      query: GET_BLOG_ARTICLES_QUERY,
      variables: { first: 12 },
    });

    const articles = data.articles.edges.map((edge) => edge.node);

    // Use mock data if no articles from Shopify
    return articles.length > 0 ? articles : mockArticles;
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    // Return mock data on error
    return mockArticles;
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPage() {
  const articles = await getArticles();
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-cormorant text-5xl font-bold text-parisian-plum md:text-6xl">
              The Parisian Journal
            </h1>
            <p className="mx-auto max-w-2xl font-inter text-lg leading-relaxed text-charcoal/70">
              Beauty wisdom, skincare insights, and stories from where Seoul meets Paris
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          </div>

          {articles.length > 0 ? (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <Link
                  href={`/blog/${featuredArticle.blog.handle}/${featuredArticle.handle}`}
                  className="group mb-12 block"
                >
                  <div className="card-elegant overflow-hidden lg:flex">
                    {/* Image */}
                    <div className="relative aspect-video lg:aspect-auto lg:w-1/2">
                      {featuredArticle.image ? (
                        <Image
                          src={featuredArticle.image.url}
                          alt={featuredArticle.image.altText || featuredArticle.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-lavender-mist">
                          <span className="font-cormorant text-6xl text-mauve-elegant">MK</span>
                        </div>
                      )}
                      {/* Featured Badge */}
                      <div className="absolute left-4 top-4 rounded-full bg-rose-gold px-4 py-1">
                        <span className="font-inter text-xs font-medium uppercase tracking-wide text-white">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                      {/* Tags */}
                      {featuredArticle.tags.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {featuredArticle.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-perle-purple/30 bg-lavender-mist px-3 py-1 font-inter text-xs font-medium text-perle-purple"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="mb-4 font-cormorant text-3xl font-bold text-parisian-plum transition-colors group-hover:text-perle-purple md:text-4xl">
                        {featuredArticle.title}
                      </h2>

                      {featuredArticle.excerpt && (
                        <p className="mb-4 font-inter text-base leading-relaxed text-charcoal/70 line-clamp-3">
                          {featuredArticle.excerpt}
                        </p>
                      )}

                      <div className="flex items-center space-x-4 font-inter text-sm text-charcoal/60">
                        <span>{featuredArticle.author.name}</span>
                        <span>•</span>
                        <span>{formatDate(featuredArticle.publishedAt)}</span>
                      </div>

                      <div className="mt-6 flex items-center font-inter text-sm font-medium text-perle-purple">
                        <span>Read Article</span>
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
              )}

              {/* Regular Articles Grid */}
              {regularArticles.length > 0 && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {regularArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/blog/${article.blog.handle}/${article.handle}`}
                      className="group"
                    >
                      <div className="card-elegant overflow-hidden">
                        {/* Image */}
                        <div className="relative aspect-video">
                          {article.image ? (
                            <Image
                              src={article.image.url}
                              alt={article.image.altText || article.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-lavender-mist">
                              <span className="font-cormorant text-4xl text-mauve-elegant">MK</span>
                            </div>
                          )}
                          {/* Tags */}
                          {article.tags.length > 0 && (
                            <div className="absolute left-4 top-4">
                              <span className="rounded-full border border-perle-purple/30 bg-white/80 px-3 py-1 font-inter text-xs font-medium text-perle-purple backdrop-blur-sm">
                                {article.tags[0]}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="mb-3 font-cormorant text-2xl font-semibold text-parisian-plum transition-colors group-hover:text-perle-purple line-clamp-2">
                            {article.title}
                          </h3>

                          {article.excerpt && (
                            <p className="mb-4 font-inter text-sm leading-relaxed text-charcoal/70 line-clamp-3">
                              {article.excerpt}
                            </p>
                          )}

                          <div className="flex items-center justify-between font-inter text-xs text-charcoal/60">
                            <span>{article.author.name}</span>
                            <span>{formatDate(article.publishedAt)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
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
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-cormorant text-2xl font-semibold text-parisian-plum">
                Coming Soon
              </h3>
              <p className="font-inter text-charcoal/60">
                Our journal is being curated. Check back soon for beauty insights and stories.
              </p>
            </div>
          )}
        </div>
      </main>
    </PageLayout>
  );
}
