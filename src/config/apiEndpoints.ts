export const apiEndpoints = Object.freeze({
    categories: '/categories',
    products: '/products',
    getProduct: (id: string) => `/products/${id}`,
})