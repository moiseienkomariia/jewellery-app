import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface productsFiltersState {
  categoryId: number | null;
  searchTerm: string;
}

const initialState: productsFiltersState = {
  categoryId: null,
  searchTerm: "",
};

const productSlice = createSlice({
  name: "productsFilters",
  initialState: initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number | null>) {
      state.categoryId = action.payload;
    },
    resetCategory(state) {
      state.categoryId = null;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    resetSearchItem(state) {
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
  resetSearchItem,
  resetAll,
} = productSlice.actions;
export default productSlice.reducer;
