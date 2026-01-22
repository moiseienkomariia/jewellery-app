import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { ProductPage } from "@containers";
import { CartPage } from "./CartPage/CartPage";
import { CheckoutPage } from "./CheckoutPage/CheckoutPage";

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
    element: <ProductPage />,
  },
  {
    path: ROUTES.CART,
    element: <CartPage />,
  },
  {
    path: ROUTES.CHECKOUT,
    element: <CheckoutPage />,
  },
]);
