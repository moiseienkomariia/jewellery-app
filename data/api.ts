import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndpoints } from "../src/config/apiEndpoints";
import type { Category, Product } from "../src/types/types";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
  endpoints: (build) => ({
    getCategoriesList: build.query<Category[], void>({
      query: () => apiEndpoints.categories,
    }),
    getProductsList: build.query<Product[], void>({
      query: () => apiEndpoints.products,
    }),
  }),
});

export const { useGetCategoriesListQuery, useGetProductsListQuery } = api;


