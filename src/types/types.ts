export interface Category {
  id: number;
  name: string;
  slug: string;
}

export type Product = {
  id: number;
  name: string;

  // Relacja do kategorii
  categoryId: number;

  // Ceny / meta
  price: number;
  currency: string; // np. "USD"
  discountPercent: number; // 0..100

  // Oceny
  rating: number; // np. 4.8
  reviewsCount: number;

  // Opis produktu
  material: string; // np. "925 Sterling Silver"
  stone: string; // np. "Round Cut Cubic Zircon"
  weight: string; // np. "0.4 ct"
  description: string;

  // Media
  images: string[]; // np. ["/images/products/pink-diamond-1.png", ...]

  // Flagi
  isFeatured: boolean;
  inStock: boolean;
};

export interface ProductsListParams {
  category?: number | null;
  search?: string;
}

export type CartItem = {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
};

export interface Cart {
  id: number;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export interface UpdateCartRequest extends Partial<Cart> {
  cartId: number;
  items: CartItem[];
}
