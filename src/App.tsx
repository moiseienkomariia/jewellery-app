import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useEffect } from "react";
import { initializeCart } from "@store/cartSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@store/store";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
