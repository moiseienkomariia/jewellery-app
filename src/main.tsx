import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "@store/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
