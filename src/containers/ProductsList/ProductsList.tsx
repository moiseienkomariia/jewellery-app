import type { Product } from "@types";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      {products &&
        products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </>
  );
};
