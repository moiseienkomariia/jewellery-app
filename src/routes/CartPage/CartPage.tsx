import type { AppDispatch } from "@store/store";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCartActions";

import { CartItemRow } from "./CartItemRow";
import { incrementItem, decrementItem, clearCart } from "@store/cartSlice";
import type { Cart, CartItem } from "@types";
import { Link } from "react-router-dom";
import { ROUTES } from "../router";

export const CartPage = () => {
  const { data: cart, isLoading } = useCart();

  const dispatch = useDispatch<AppDispatch>();

  if (isLoading || !cart) return <p>Loading...</p>;

  const handleIncrement = (item: CartItem, cart: Cart) => {
    dispatch(incrementItem(item, cart));
  };

  const handleDecrement = (productId: number, cart: Cart) => {
    dispatch(decrementItem(productId, cart));
  };

  const handleRemoveItem = (productId: number, quantity: number) => {
    dispatch(decrementItem(productId, cart, quantity));
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
          handleIncrement={() => handleIncrement(item, cart)}
          handleRemoveItem={() =>
            handleRemoveItem(item.productId, item.quantity)
          }
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
      <hr />
      <Link to={ROUTES.CHECKOUT}>Go To Checkout</Link>
    </>
  );
};
