import HomeClient from '@/components/home/HomeClient';
import { shopifyFetch } from '@/lib/shopify/client';
import { GET_FEATURED_PRODUCTS_QUERY } from '@/lib/shopify/queries/products';
import { ProductsResponse } from '@/lib/shopify/types';
import { mockProducts } from '@/lib/data/mockData';

async function getFeaturedProducts() {
  try {
    const data = await shopifyFetch<ProductsResponse>({
      query: GET_FEATURED_PRODUCTS_QUERY,
    });

    const products = data.products.edges.map((edge) => edge.node);

    // Use mock featured products if no products from Shopify
    if (products.length === 0) {
      return mockProducts.filter((p) => p.tags.includes('featured')).slice(0, 3);
    }

    return products;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    // Return mock featured products on error
    return mockProducts.filter((p) => p.tags.includes('featured')).slice(0, 3);
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return <HomeClient featuredProducts={featuredProducts} />;
}
