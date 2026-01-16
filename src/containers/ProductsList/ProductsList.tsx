import type { Product } from "@types";
import { ROUTES } from "../../routes/router";
import { Link } from "react-router-dom";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <div>
              <Link key={product.id} to={ROUTES.PRODUCT_LINK(product.id)}>
                {product.name}
              </Link>
            </div>
          );
        })}
    </>
  );
};
