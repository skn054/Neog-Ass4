import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DeliveryContextProvider } from "./Context/DeliveryContext";
import { ProductContextProvider } from "./Context/ProductContext";
import { AuthContextProvider } from "./Context/AuthContext";
import { CartContextProvider } from "./Context/CartContext";
import { WishListContextProvider } from "./Context/WishListContext";
import { SearchContextProvider } from "./Context/SearchContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthContextProvider>
      {/* <CartContextProvider> */}
      <DeliveryContextProvider>
        <ProductContextProvider>
          <WishListContextProvider>
            <CartContextProvider>
              <SearchContextProvider>
                <App />
              </SearchContextProvider>
            </CartContextProvider>
          </WishListContextProvider>
        </ProductContextProvider>
      </DeliveryContextProvider>
      {/* </CartContextProvider> */}
    </AuthContextProvider>
  </Router>
);
