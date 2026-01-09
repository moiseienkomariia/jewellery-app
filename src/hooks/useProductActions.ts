import { bindActionCreators } from "@reduxjs/toolkit";
import { productSlice } from "@store/productSlice";
import { useDispatch } from "react-redux";

export const useProductActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(productSlice.actions, dispatch);
};
