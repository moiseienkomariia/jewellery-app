import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectProductFilters = (state: RootState) => state.productFilters;

export const selectSelectedCategory = (state: RootState) =>
  state.productFilters.categoryId;

export const selectSearchTerm = (state: RootState) =>
  state.productFilters.searchTerm;

export const selectCart = (state: RootState) => state.cart;

export const selectCartId = createSelector(selectCart, (cart) => cart.id);
