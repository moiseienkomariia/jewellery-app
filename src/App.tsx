import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import MainRoutes from "./routes/MainRoutes";
import { CategoriesList } from "@containers";
import { ProductsList } from "@containers";

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

export const App = () => {
  return (
    <Provider store={store}>
      <strong>hello world</strong>
      <RouterProvider router={router} />
      <CategoriesList />
      <ProductsList />
    </Provider>
  );
};
