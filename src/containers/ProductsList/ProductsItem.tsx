import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/router";
import type { Product } from "@types";

interface ProductsItemProps {
  product: Product;
}

export const ProductsItem = ({ product }: ProductsItemProps) => {
  return (
    <div>
      <Link to={ROUTES.PRODUCT_LINK(product.id)}>{product.name}</Link>
    </div>
  );
};
