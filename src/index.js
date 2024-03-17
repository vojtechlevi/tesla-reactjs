import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./hooks/MenuHook";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MenuProvider>
      <App />
    </MenuProvider>
  </BrowserRouter>
);
