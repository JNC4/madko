export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Image {
  id?: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: Money;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image?: Image;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice?: Money;
  };
  images: {
    edges: {
      node: Image;
    }[];
  };
  variants: {
    edges: {
      node: ProductVariant;
    }[];
  };
  options?: {
    id: string;
    name: string;
    values: string[];
  }[];
  tags?: string[];
}

export interface ProductEdge {
  node: Product;
}

export interface ProductsResponse {
  products: {
    edges: ProductEdge[];
  };
}

export interface ProductResponse {
  product: Product;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: Image;
  products?: {
    edges: {
      node: Product;
    }[];
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: {
    edges: {
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          product: {
            title: string;
            handle: string;
          };
          image?: Image;
          price: Money;
        };
      };
    }[];
  };
  cost: {
    totalAmount: Money;
    subtotalAmount: Money;
  };
}
