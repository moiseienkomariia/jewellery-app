import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import MainRoutes from "./routes/MainRoutes";
import { CategoriesList } from "./containers/CategoriesList/CategoriesList";
import { ProductsList } from "./containers/ProductsList/ProductsList";

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
