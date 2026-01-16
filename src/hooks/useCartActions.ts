import { bindActionCreators } from "@reduxjs/toolkit";
import { cartSlice } from "@store/cartSlice";
import { useDispatch } from "react-redux";

export const useCartActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(cartSlice.actions, dispatch);
};
