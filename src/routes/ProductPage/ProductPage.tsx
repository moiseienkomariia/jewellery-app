import { useParams } from "react-router-dom";
import { api } from "../../store/api.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@store/store.ts";
import { useEffect } from "react";
import { cartSlice, initializeCart } from "@store/cartSlice.ts";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const dispatch = useDispatch<AppDispatch>();
  const cartId = useSelector((state: RootState) => state.cart.id);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const {
    data: product,
    isLoading,
    isError,
  } = api.useGetProductQuery(productId);
  const [updateCart] = api.useUpdateCartMutation();

  useEffect(() => {
    if (!cartId) dispatch(initializeCart());
  }, [cartId, dispatch]);

  const handleAddToCart = () => {
    if (!product || !cartId) return;

    dispatch(
      cartSlice.actions.addItem({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price,
      }),
    );

    updateCart({
      cartId,
      items: [
        ...cartItems,
        {
          productId: product.id,
          productName: product.name,
          quantity: 1,
          price: product.price,
        },
      ],
    });
    console.log({ cartId, cartItems });
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
