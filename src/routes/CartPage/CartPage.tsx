import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { useCartActions } from "../../hooks/useCartActions";

import { CartItemRow } from "./CartItemRow";

export const CartPage = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const { removeFromCart } = useCartActions();

  const handleIncrement = (productId: number) => {
    if (!cartState.id) return;
    // increment(productId);
  };

  const handleDecrement = (productId: number) => {
    if (!cartState.id) return;
    // decrement(productId);
  };

  const handleRemoveItem = (productId: number) => {
    if (!cartState.id) return;
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    // clearCart();
  };

  return (
    <>
      <div>Cart</div>

      {cartState.items.map((item) => (
        <CartItemRow
          item={item}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <hr />
      <div>
        <span>Delivery: </span>
        <span>{cartState.deliveryFee}</span>
      </div>
      <div>
        <span>Total: </span>
        <span>{cartState.total}</span>
      </div>
      <button onClick={() => handleClearCart()}>Clear</button>
    </>
  );
};
