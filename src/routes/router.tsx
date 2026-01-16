import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../containers/HomePage/HomePage";
import { Product } from "@containers";
import { Cart } from "../containers/Cart/Cart";
import { Checkout } from "../containers/Checkout/Checkout";

export const ROUTES = {
  HOME: "/",
  PRODUCT: "/product/:id",
  PRODUCT_LINK: (id: number) => `/product/${id}`,
  CART: "/cart",
  CHECKOUT: "/checkout",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.PRODUCT,
    element: <Product />,
  },
  {
    path: ROUTES.CART,
    element: <Cart />,
  },
  {
    path: ROUTES.CHECKOUT,
    element: <Checkout />,
  },
]);
