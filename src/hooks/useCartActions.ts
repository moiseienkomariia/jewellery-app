import { api } from "@store/api";
import { selectCartId } from "@store/selectors";
import { useSelector } from "react-redux";

export function useCartId() {
  return useSelector(selectCartId) || 0;
}

export const useCart = () => {
  const cartId = useCartId();
  return api.useGetCartQuery(cartId, { skip: !cartId });
};
