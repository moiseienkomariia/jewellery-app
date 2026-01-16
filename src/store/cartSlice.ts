import {
  createSlice,
  type Dispatch,
  type GetState,
  type PayloadAction,
  type ThunkAction,
} from "@reduxjs/toolkit";
import { api } from "./api";

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  cartId: number | null;
}

const initialState: CartState = {
  cartId: null,
  items: [],
  subtotal: 0,
  deliveryFee: 50,
  total: 50,
};

const calculateTotals = (items: CartItem[], deliveryFee: number) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + deliveryFee;
  return { subtotal, total };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId(state, action: PayloadAction<number>) {
      state.cartId = action.payload;
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItems = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItems) {
        existingItems.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      const results = calculateTotals(state.items, state.deliveryFee);
      state.subtotal = results.subtotal;
      state.total = results.total;
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );

      const results = calculateTotals(state.items, state.deliveryFee);
      state.subtotal = results.subtotal;
      state.total = results.total;
    },
    increment(state, { payload: productId }: PayloadAction<number>) {
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );
      state.items[index].quantity++;
    },
    decrement(state, { payload: productId }: PayloadAction<number>) {
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );
      state.items[index].quantity--;
    },
    clearCart(state) {
      state.items = [];
      state.subtotal = 0;
      state.total = state.deliveryFee;
    },
  },
});

// TODO fix types
export const initializeCart = () => async (dispatch, getState) => {
  const storedCartId = sessionStorage.getItem("cartId");

  if (storedCartId) {
    return;
  }

  const promise = dispatch(api.endpoints.createCart.initiate());
  const { data } = await promise;

  dispatch(cartSlice.actions.setCartId(data.id));
};
