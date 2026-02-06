import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { api } from "./api";
import { DEFAULT_DELIVERY_FEE } from "@config/constants";
import type { AppDispatch, RootState } from "./store";
import type { Cart } from "@types";

export interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  id: number | null;
}

const initialState: CartState = {
  id: null,
  items: [],
  subtotal: 0,
  deliveryFee: DEFAULT_DELIVERY_FEE,
  total: DEFAULT_DELIVERY_FEE,
};

export const calculateTotals = (items: CartItem[], deliveryFee: number) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + deliveryFee;
  return { subtotal, total };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItems = state.items.find(
        (item) => item.productId === action.payload.productId,
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
        (item) => item.productId !== action.payload,
      );

      const results = calculateTotals(state.items, state.deliveryFee);
      state.subtotal = results.subtotal;
      state.total = results.total;
    },

    decrement(state, { payload: productId }: PayloadAction<number>) {
      const index = state.items.findIndex(
        (item) => item.productId === productId,
      );
      if (index === -1) return;
      if (state.items[index].quantity > 1) {
        state.items[index].quantity--;
      }
      const totals = calculateTotals(state.items, state.deliveryFee);
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

export const initializeCart =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    let storedCartId = Number(
      state.cart.id || sessionStorage.getItem("cartId"),
    );

    // TODO simplify function logic
    if (storedCartId) {
      const promise = dispatch(api.endpoints.getCart.initiate(storedCartId));

      const { data } = await promise;

      if (data) {
        storedCartId = data.id;
        sessionStorage.setItem("cartId", storedCartId.toString());
        return dispatch(cartSlice.actions.setCartId(data.id));
      } else {
        console.log("Failed to initialize cart");
      }

      return;
    }

    const promise = dispatch(api.endpoints.createCart.initiate());
    const { data } = await promise;

    if (data) {
      storedCartId = data.id;
      sessionStorage.setItem("cartId", storedCartId.toString());
      return dispatch(cartSlice.actions.setCartId(data.id));
    } else {
      console.log("Failed to initialize cart");
    }
  };

export const incrementItem =
  (productId: number, cart: Cart) => async (dispatch: AppDispatch) => {
    if (!cart.id) return;

    const clonedCart = structuredClone(cart);

    clonedCart.items = clonedCart.items.map((item) =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );

    const totals = calculateTotals(
      clonedCart.items,
      clonedCart.deliveryFee ? clonedCart.deliveryFee : DEFAULT_DELIVERY_FEE,
    );
    clonedCart.subtotal = totals.subtotal;
    clonedCart.total = totals.total;

    await dispatch(
      api.endpoints.updateCart.initiate({
        cartId: clonedCart.id,
        items: clonedCart.items,
      }),
    );
  };

export const decrementItem =
  (productId: number, cart: Cart) => async (dispatch: AppDispatch) => {
    if (!cart.id) return;

    const clonedCart = structuredClone(cart);

    clonedCart.items = clonedCart.items.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item,
    );

    const totals = calculateTotals(
      clonedCart.items,
      clonedCart.deliveryFee ? clonedCart.deliveryFee : DEFAULT_DELIVERY_FEE,
    );
    clonedCart.subtotal = totals.subtotal;
    clonedCart.total = totals.total;

    console.log(totals, clonedCart.subtotal, clonedCart.total);

    await dispatch(
      api.endpoints.updateCart.initiate({
        cartId: clonedCart.id,
        items: clonedCart.items,
        subtotal: clonedCart.subtotal,
        total: clonedCart.total,
      }),
    );
  };

export const clearCart = (cart: Cart) => async (dispatch: AppDispatch) => {
  if (!cart.id) return;
  const clonedCart = structuredClone(cart);
  clonedCart.items = [];

  clonedCart.subtotal = 0;
  clonedCart.total = clonedCart.deliveryFee
    ? clonedCart.deliveryFee
    : DEFAULT_DELIVERY_FEE;

  await dispatch(
    api.endpoints.updateCart.initiate({
      cartId: clonedCart.id,
      items: clonedCart.items,
      subtotal: clonedCart.subtotal,
      total: clonedCart.total,
    }),
  );
};
