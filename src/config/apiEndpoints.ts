export const apiEndpoints = Object.freeze({
    categories: '/categories',
    products: '/products',
    users: '/users',
    orders: '/orders',
    cart: '/cart',

    getCategory: (id: string) => `/categories/${id}`,
    getUser: (id: string) => `/user/${id}`,
    getProduct: (id: string) => `/products/${id}`,
    getOrder: (id: string) => `/orders/${id}`,
    getProductsByCategory: (id: string) => `categories/${id}/products`,
    getProductByRating: (rating: number) => `/products?rating=${rating}`,
})