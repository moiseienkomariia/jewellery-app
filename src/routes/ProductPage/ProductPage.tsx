import { Link, useParams } from "react-router-dom";
import { api } from "../../store/api.ts";
import { useCart } from "../../hooks/useCartActions.ts";
import { ROUTES } from "../router.tsx";
import { useDispatch } from "react-redux";
import { incrementItem } from "@store/cartSlice.ts";
import type { AppDispatch } from "@store/store.ts";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const {
    data: product,
    isLoading,
    isError,
  } = api.useGetProductQuery(productId);
  const dispatch = useDispatch<AppDispatch>();
  const { data: cart } = useCart();

  const handleAddToCart = () => {
    if (!product || !cart) return;

    dispatch(
      incrementItem(
        {
          productId: product.id,
          productName: product.name,
          quantity: 1,
          price: product.price,
        },
        cart
      )
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError || !product) return <p>Product not found</p>;

  return (
    <>
      <p>Product Page</p>
      {product.images &&
        product.images.map((img, idx) => {
          return (
            <div key={idx}>
              <img
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

      <hr />
      <Link to={ROUTES.CART}>Go To Cart</Link>
    </>
  );
};
