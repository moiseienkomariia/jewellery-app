import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  deliveryFee: 50,
  total: 50,
};

const calculator = (items: CartItem[], deliveryFee: number) => {
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
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItems = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItems) {
        existingItems.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      const results = calculator(state.items, state.deliveryFee);
      state.subtotal = results.subtotal;
      state.total = results.total;
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );

      const results = calculator(state.items, state.deliveryFee);
      state.subtotal = results.subtotal;
      state.total = results.total;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
      const totals = calculator(state.items, state.deliveryFee);
      state.subtotal = totals.subtotal;
      state.total = totals.total;
    },
    clearCart(state) {
      state.items = [];
      state.subtotal = 0;
      state.total = state.deliveryFee;
    },
  },
});
