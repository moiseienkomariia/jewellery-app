import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes />,
  },
  {
    path: "/product/:id",
    element: <div>Product</div>,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

createRoot(document.getElementById("root")!);
