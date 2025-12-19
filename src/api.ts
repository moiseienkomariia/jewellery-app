import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndpoints } from "./config/apiEndpoints";
import type { Category, Product } from "./types/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (build) => ({
    getCategoriesList: build.query<Category[], void>({
      query: () => apiEndpoints.categories,
    }),
    getProductsList: build.query<Product[], void>({
      query: () => apiEndpoints.products,
    }),
  }),
});
