import { useParams } from "react-router-dom";
import { api } from "../../store/api.ts";

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const { data, isLoading, isError } = api.useGetProductQuery(productId);
  if (isError) return <div>Products Error</div>;
  if (isLoading) return <div>Is Loading...</div>;

  if (!data) return null;

  const handleAddToCart = (cartId, productId) => {
    const cartId = sessionStorage.getItem("cartId");

    // 1. Create cart if not exists
    // 2. Add item to cart
  };

  return (
    <>
      {data.images &&
        data.images.map((img, idx) => {
          return (
            <div>
              <img
                key={idx}
                style={{ width: "80px", height: "auto" }}
                src={`../../../public/${img}`}
                alt={`alt: ${data.name}`}
              />
            </div>
          );
        })}
      <div>{data.name}</div>
      <div>{data.description}</div>
      <div>
        {data.price} {data.currency}
      </div>
      <button onClick={handleAddToCart(cart.id, data.id)}>Add to cart</button>
    </>
  );
};
