import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { useCartActions } from "../../hooks/useCartActions";
import { useState } from "react";
import { api } from "@store/api";
import Input from "../../ui/Input/Input";

export const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const { removeItem, updateQuantity, clearCart } = useCartActions();

  const [createCart] = api.useCreateCartMutation();

  const [cartId, setCartId] = useState<number | null>(null);

  const storedCartId = sessionStorage.getItem("cartId");
  if (storedCartId) {
    setCartId(Number(storedCartId));
  } else {
    // TODO
    createCart({});
    // sessionStorage.setItem("cartId", newCart.id);
  }

  const handleUpdateQuantity = (quantity: number, productId: number) => {
    if (!cartId) return;
    console.log({ productId, quantity });
    updateQuantity({ productId, quantity });
  };

  const handleRemoveItem = (productId: number) => {
    if (!cartId) return;
    console.log({ cartId, productId });
    removeItem(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <div>Cart</div>

      {cartState.items.map((item) => (
        <div key={item.productId}>
          <div>{item.productId}</div>
          <Input
            value={item.quantity.toString()}
            onChange={(e) =>
              handleUpdateQuantity(Number(e.target.value), item.productId)
            }
          />

          <button onClick={() => handleRemoveItem(item.productId)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => handleClearCart()}>Clear</button>
    </>
  );
};
