import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface productsFiltersState {
  categoryId: number | null;
  searchTerm: string;
}

const initialState: productsFiltersState = {
  categoryId: null,
  searchTerm: "",
};

export const productSlice = createSlice({
  name: "productsFilters",
  initialState: initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number | null>) {
      state.categoryId = action.payload;
    },
    resetCategory(state) {
      state.categoryId = null;
    },
    changeCategory(state, action: PayloadAction<number>) {
      state.categoryId =
        state.categoryId === action.payload ? null : action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    resetSearchTerm(state) {
      state.searchTerm = "";
    },
    resetAll(state) {
      state.categoryId = null;
      state.searchTerm = "";
    },
  },
});

export const {
  setCategory,
  resetCategory,
  setSearchTerm,
  resetSearchTerm,
  resetAll,
} = productSlice.actions;
export default productSlice.reducer;
