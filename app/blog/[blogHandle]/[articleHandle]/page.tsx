import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_ARTICLE_BY_HANDLE_QUERY, GET_BLOG_ARTICLES_QUERY } from '@/lib/shopify/queries/blog';
import { notFound } from 'next/navigation';
import { mockArticles } from '@/lib/data/mockData';

interface Article {
  id: string;
  title: string;
  handle: string;
  excerpt: string;
  excerptHtml: string;
  content: string;
  contentHtml: string;
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
  tags: string[];
}

interface ArticleResponse {
  blog: {
    articleByHandle: Article;
  };
}

interface RelatedArticlesResponse {
  articles: {
    edges: {
      node: {
        id: string;
        title: string;
        handle: string;
        excerpt: string;
        publishedAt: string;
        image?: {
          url: string;
          altText: string | null;
        };
        author: {
          name: string;
        };
        blog: {
          handle: string;
        };
        tags: string[];
      };
    }[];
  };
}

async function getArticle(blogHandle: string, articleHandle: string) {
  try {
    const data = await shopifyFetch<ArticleResponse>({
      query: GET_ARTICLE_BY_HANDLE_QUERY,
      variables: { blogHandle, articleHandle },
    });

    return data.blog.articleByHandle;
  } catch (error) {
    console.error('Error fetching article:', error);
    // Try to find mock article by handle
    const mockArticle = mockArticles.find((a) => a.handle === articleHandle);
    return mockArticle || null;
  }
}

async function getRelatedArticles() {
  try {
    const data = await shopifyFetch<RelatedArticlesResponse>({
      query: GET_BLOG_ARTICLES_QUERY,
      variables: { first: 4 },
    });

    const articles = data.articles.edges.map((edge) => edge.node);

    // Use mock data if no articles from Shopify
    return articles.length > 0 ? articles : mockArticles.slice(0, 4);
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return mockArticles.slice(0, 4);
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

export async function generateMetadata({
  params,
}: {
  params: { blogHandle: string; articleHandle: string };
}) {
  const article = await getArticle(params.blogHandle, params.articleHandle);

  if (!article) {
    return {
      title: 'Article Not Found - Madame Ko',
    };
  }

  return {
    title: `${article.title} - Madame Ko Blog`,
    description: article.excerpt || 'Read more on the Madame Ko blog',
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { blogHandle: string; articleHandle: string };
}) {
  const article = await getArticle(params.blogHandle, params.articleHandle);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles();
  const filteredRelated = relatedArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <PageLayout>
      <main className="min-h-screen bg-cream-luxe pt-28 pb-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center space-x-2 font-inter text-sm text-charcoal/60">
            <Link href="/blog" className="hover:text-perle-purple">
              Blog
            </Link>
            <span>/</span>
            <span className="text-charcoal">{article.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12 text-center">
            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-perle-purple/30 bg-lavender-mist px-4 py-1 font-inter text-sm font-medium text-perle-purple"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 font-cormorant text-4xl font-bold text-parisian-plum md:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center space-x-4 font-inter text-sm text-charcoal/60">
              <span className="font-medium">{article.author.name}</span>
              <span>•</span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            </div>
          </header>

          {/* Featured Image */}
          {article.image && (
            <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={article.image.url}
                alt={article.image.altText || article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg mx-auto mb-16 max-w-none font-inter leading-relaxed text-charcoal prose-headings:font-cormorant prose-headings:font-bold prose-headings:text-parisian-plum prose-p:text-charcoal/80 prose-a:text-perle-purple prose-a:no-underline hover:prose-a:text-parisian-plum prose-blockquote:border-l-4 prose-blockquote:border-rose-gold prose-blockquote:font-cormorant prose-blockquote:text-2xl prose-blockquote:italic prose-blockquote:text-mauve-elegant prose-strong:text-parisian-plum prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Divider */}
          <div className="divider-rose my-12" />

          {/* Share Section */}
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-cormorant text-2xl font-semibold text-parisian-plum">
              Share This Article
            </h3>
            <div className="flex justify-center space-x-4">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-mist text-perle-purple transition-colors hover:bg-mauve-elegant hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-mist text-perle-purple transition-colors hover:bg-mauve-elegant hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-mist text-perle-purple transition-colors hover:bg-mauve-elegant hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {filteredRelated.length > 0 && (
          <section className="border-t border-marble-grey bg-lavender-mist py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-12 text-center font-cormorant text-4xl font-bold text-parisian-plum">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredRelated.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.blog.handle}/${relatedArticle.handle}`}
                    className="group"
                  >
                    <div className="card-elegant overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-video">
                        {relatedArticle.image ? (
                          <Image
                            src={relatedArticle.image.url}
                            alt={relatedArticle.image.altText || relatedArticle.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-lavender-mist">
                            <span className="font-cormorant text-4xl text-mauve-elegant">MK</span>
                          </div>
                        )}
                        {relatedArticle.tags.length > 0 && (
                          <div className="absolute left-4 top-4">
                            <span className="rounded-full border border-perle-purple/30 bg-white/80 px-3 py-1 font-inter text-xs font-medium text-perle-purple backdrop-blur-sm">
                              {relatedArticle.tags[0]}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="mb-3 font-cormorant text-xl font-semibold text-parisian-plum transition-colors group-hover:text-perle-purple line-clamp-2">
                          {relatedArticle.title}
                        </h3>

                        {relatedArticle.excerpt && (
                          <p className="mb-4 font-inter text-sm leading-relaxed text-charcoal/70 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between font-inter text-xs text-charcoal/60">
                          <span>{relatedArticle.author.name}</span>
                          <span>{formatDate(relatedArticle.publishedAt)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/blog" className="btn-secondary">
                  View All Articles
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </PageLayout>
  );
}
