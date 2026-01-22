import type { CartItem } from "@types";

interface CartItemProps {
  item: CartItem;
  handleDecrement: (id: number) => void;
  handleIncrement: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}
export const CartItemRow = ({
  item,
  handleDecrement,
  handleIncrement,
  handleRemoveItem,
}: CartItemProps) => {
  return (
    <div key={item.productId}>
      <div>{item.productName}</div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => handleDecrement(item.productId)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleIncrement(item.productId)}>+</button>
      </div>

      <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
    </div>
  );
};
