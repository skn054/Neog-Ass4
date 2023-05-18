import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DeliveryContextProvider } from "./Context/DeliveryContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DeliveryContextProvider>
        <App />
      </DeliveryContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
