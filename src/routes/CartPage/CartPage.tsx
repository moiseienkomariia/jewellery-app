import type { AppDispatch } from "@store/store";
import { useDispatch } from "react-redux";
import { useCart, useCartActions } from "../../hooks/useCartActions";

import { CartItemRow } from "./CartItemRow";
import { incrementItem, decrementItem, clearCart } from "@store/cartSlice";
import type { Cart, CartItem } from "@types";

export const CartPage = () => {
  const { data: cart, isLoading } = useCart();

  const { removeFromCart } = useCartActions();
  const dispatch = useDispatch<AppDispatch>();

  if (isLoading || !cart) return <p>Loading...</p>;

  const handleIncrement = (productId: number, cart: Cart) => {
    dispatch(incrementItem(productId, cart));
  };

  const handleDecrement = (productId: number, cart: Cart) => {
    dispatch(decrementItem(productId, cart));
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleClearCart = (cart: Cart) => {
    dispatch(clearCart(cart));
  };

  console.log(cart);

  return (
    <>
      <div>Cart</div>

      {cart.items.map((item: CartItem) => (
        <CartItemRow
          item={item}
          handleDecrement={() => handleDecrement(item.productId, cart)}
          handleIncrement={() => handleIncrement(item.productId, cart)}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <hr />
      <div>
        <span>Delivery: </span>
        <span>{cart.deliveryFee}</span>
      </div>
      <div>
        <span>Total: </span>
        <span>{cart.total}</span>
      </div>
      <button onClick={() => handleClearCart(cart)}>Clear</button>
    </>
  );
};
