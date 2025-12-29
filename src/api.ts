import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndpoints } from "./config/apiEndpoints";
import type { Cart, Category, Product } from "./types/types";
import { API_URL } from "./config/constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Cart'],

  endpoints: (build) => ({
    getCategoriesList: build.query<Category[], void>({
      query: () => apiEndpoints.categories,
    }),
    getProductsList: build.query<Product[], void>({
      query: () => apiEndpoints.products,
    }),
    getProduct: build.query<Product, number>({
      query: (productId) => apiEndpoints.getProduct(productId),
    }),
    addCart: build.mutation<Cart, Partial<Cart>>({
      query: () => {
        return {
          url: apiEndpoints.cart,
          method: 'POST',
          body: {
            items: [],
          },
        }
      },
    }),
    getCart: build.query<Cart, number>({
      query: (cartId) => apiEndpoints.getProduct(cartId),
    }),
    updateCart: build.mutation<Cart, Partial<Cart>>({
      query: ({cartId, items}) => {
        if(!cartId) {
          throw new Error("Cart does not exist!");
        }
        return {
          url: apiEndpoints.getCart(cartId),
          method: 'PUT',
          body: {items},
        };
      },
      invalidatesTags: ['Cart'],
    }),
    deleteCart: build.mutation<Cart, Partial<Cart>>({
      query: ({cartId}) => {
        if(!cartId) throw new Error("Cart does not exist!");
        return {
          url: apiEndpoints.getCart(cartId),
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Cart'],
    })
  }),
});
