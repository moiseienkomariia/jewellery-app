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
  const delivery = deliveryFee ? deliveryFee : DEFAULT_DELIVERY_FEE;
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery;
  return { subtotal, total };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export const initializeCart =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    let storedCartId = Number(
      state.cart.id || sessionStorage.getItem("cartId")
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
  ({ productId, productName, price }: CartItem, cart: Cart) =>
  async (dispatch: AppDispatch) => {
    if (!cart.id) return;

    const clonedCart = structuredClone(cart);

    const incrementedIdx = clonedCart.items.findIndex(
      (item) => item.productId === productId
    );

    if (incrementedIdx >= 0) {
      clonedCart.items[incrementedIdx].quantity += 1;
    } else {
      clonedCart.items.push({
        productId,
        productName,
        quantity: 1,
        price,
      });
    }

    const totals = calculateTotals(
      clonedCart.items,
      clonedCart.deliveryFee ? clonedCart.deliveryFee : DEFAULT_DELIVERY_FEE
    );
    clonedCart.subtotal = totals.subtotal;
    clonedCart.total = totals.total;

    return dispatch(
      api.endpoints.updateCart.initiate({
        ...clonedCart,
        cartId: clonedCart.id,
      })
    );
  };

export const decrementItem =
  (productId: number, cart: Cart, decrementAmount = 1) =>
  async (dispatch: AppDispatch) => {
    if (!cart.id) return;

    const clonedCart = structuredClone(cart);

    clonedCart.items = clonedCart.items
      .map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - decrementAmount }
          : item
      )
      .filter((item) => item.quantity > 0);

    const totals = calculateTotals(
      clonedCart.items,
      clonedCart.deliveryFee ? clonedCart.deliveryFee : DEFAULT_DELIVERY_FEE
    );
    clonedCart.subtotal = totals.subtotal;
    clonedCart.total = totals.total;

    return dispatch(
      api.endpoints.updateCart.initiate({
        ...clonedCart,
        cartId: clonedCart.id,
      })
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

  return dispatch(
    api.endpoints.updateCart.initiate({
      ...clonedCart,
      cartId: clonedCart.id,
    })
  );
};
