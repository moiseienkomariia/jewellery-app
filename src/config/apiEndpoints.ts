export const apiEndpoints = Object.freeze({
  categories: "/categories",
  products: "/products",
  users: "/users",
  orders: "/orders",
  cart: "/carts",

  getCategory: (id: number) => `/categories/${id}`,
  getUser: (id: number) => `/user/${id}`,
  getProduct: (id: number) => `/products/${id}`,
  getOrder: (id: number) => `/orders/${id}`,
  getProductsByCategory: (id: number) => `categories/${id}/products`,
  getProductByRating: (rating: number) => `/products?rating=${rating}`,
  getCart: (id: number) => `/carts/${id}`,
});
