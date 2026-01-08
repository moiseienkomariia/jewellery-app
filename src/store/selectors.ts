import type { RootState } from "./store";

export const selectProductFilters = (state: RootState) => state.productFilters;
export const selectSelectedCategory = (state: RootState) =>
  state.productFilters.categoryId;
export const selectSearchTerm = (state: RootState) =>
  state.productFilters.searchTerm;
