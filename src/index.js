import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DeliveryContextProvider } from "./Context/DeliveryContext";
import { ProductContextProvider } from "./Context/ProductContext";
// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <DeliveryContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </DeliveryContextProvider>
  </Router>
  // </React.StrictMode>
);
