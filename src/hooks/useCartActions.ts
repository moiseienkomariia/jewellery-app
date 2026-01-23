import { api } from "@store/api";
import { calculateTotals } from "@store/cartSlice";
import { selectCartId } from "@store/selectors";
import type { CartItem } from "@types";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

export function useCartId() {
  return useSelector(selectCartId) || 0;
}

export const useCart = () => {
  const cartId = useCartId();
  return api.useGetCartQuery(cartId, { skip: !cartId });
};

export const useCartActions = () => {
  const cartId = useCartId();
  const { data: cart } = useCart();
  const [updateCart] = api.useUpdateCartMutation();

  const addToCart = useCallback(
    async (item: CartItem) => {
      if (!cart) return;

      const clonedCart = structuredClone(cart);

      const existingItems = clonedCart.items.find(
        (item) => item.productId === item.productId
      );
      if (existingItems) {
        existingItems.quantity += item.quantity;
      } else {
        clonedCart.items.push(item);
      }

      const results = calculateTotals(clonedCart.items, clonedCart.deliveryFee);
      clonedCart.subtotal = results.subtotal;
      clonedCart.total = results.total;

      await updateCart({ ...clonedCart, cartId });
    },
    [cart, cartId, updateCart]
  );

  const removeFromCart = useCallback(
    async (productId: number) => {
      if (!cart) return;

      const clonedCart = structuredClone(cart);
      clonedCart.items = clonedCart.items.filter(
        (item) => item.productId !== productId
      );

      const results = calculateTotals(clonedCart.items, clonedCart.deliveryFee);
      clonedCart.subtotal = results.subtotal;
      clonedCart.total = results.total;
      await updateCart({ ...clonedCart, cartId });
    },
    [cart, cartId, updateCart]
  );

  return useMemo(
    () => ({
      addToCart,
      removeFromCart,
    }),
    [addToCart, removeFromCart]
  );
};
