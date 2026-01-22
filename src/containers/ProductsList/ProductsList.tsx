import type { Product } from "@types";
import { ProductsItem } from "./ProductsItem";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      {products &&
        products.map((product) => {
          return <ProductsItem key={product.id} product={product} />;
        })}
    </>
  );
};
