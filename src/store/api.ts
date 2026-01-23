import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndpoints } from "@config/apiEndpoints";
import {
  type ProductsListParams,
  type Cart,
  type Category,
  type Product,
  type UpdateCartRequest,
} from "@types";
import { API_URL } from "@config/constants";
import { buildProductQueryURL } from "../helpers/buildProductQueryURL";
import { DEFAULT_DELIVERY_FEE } from "@config/constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Cart"],

  endpoints: (build) => ({
    getCategoriesList: build.query<Category[], void>({
      query: () => apiEndpoints.categories,
    }),
    getProductsList: build.query<Product[], ProductsListParams>({
      query: ({ category, search }) => {
        const queryString = buildProductQueryURL({
          categoryId: category || undefined,
          name: search,
        });

        return `/products?${queryString}`;
      },
    }),
    getProduct: build.query<Product, number>({
      query: (productId) => apiEndpoints.getProduct(productId),
    }),
    createCart: build.mutation<Cart, void>({
      query: () => {
        return {
          url: apiEndpoints.cart,
          method: "POST",
          body: {
            items: [],
            subtotal: 0,
            deliveryFee: DEFAULT_DELIVERY_FEE,
            total: 0,
          },
        };
      },
    }),
    getCart: build.query<Cart, number>({
      query: (cartId) => apiEndpoints.getCart(cartId),
      providesTags: ["Cart"],
    }),
    updateCart: build.mutation<Cart, UpdateCartRequest>({
      query: ({ cartId, items }) => {
        return {
          url: apiEndpoints.getCart(cartId),
          method: "PUT",
          body: { items },
        };
      },
      invalidatesTags: ["Cart"],
    }),
    deleteCart: build.mutation<Cart, number>({
      query: (cartId) => {
        return {
          url: apiEndpoints.getCart(cartId),
          method: "DELETE",
        };
      },
      invalidatesTags: ["Cart"],
    }),
  }),
});
