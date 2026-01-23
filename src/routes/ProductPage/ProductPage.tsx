import { useParams } from "react-router-dom";
import { api } from "../../store/api.ts";
import { useCartActions } from "../../hooks/useCartActions.ts";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const {
    data: product,
    isLoading,
    isError,
  } = api.useGetProductQuery(productId);
  const { addToCart } = useCartActions();

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      productId: product.id,
      productName: product.name,
      quantity: 1,
      price: product.price,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !product) return <p>Product not found</p>;

  return (
    <>
      <p>Product Page</p>
      {product.images &&
        product.images.map((img, idx) => {
          return (
            <div>
              <img
                key={idx}
                style={{ width: "80px", height: "auto" }}
                src={`../../../public/${img}`}
                alt={`alt: ${product.name}`}
              />
            </div>
          );
        })}
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>
        {product.price} {product.currency}
      </div>
      <button onClick={() => handleAddToCart()}>Add to cart</button>
    </>
  );
};
