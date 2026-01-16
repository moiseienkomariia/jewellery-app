import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import productFiltersReducer from "./productSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    productFilters: productFiltersReducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
