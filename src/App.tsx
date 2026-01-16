import { Provider } from "react-redux";
import { store } from "@store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

export const App = () => {
  return (
    <Provider store={store}>
      {/* TODO przenieś provider do main.tsx */}
      <RouterProvider router={router} />
    </Provider>
  );
};
