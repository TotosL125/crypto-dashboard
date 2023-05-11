// library imports
import React from "react";
import ReactDOM from "react-dom/client";

// other imports
import CryptosContextProvider from "./stores/crypto-context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CryptosContextProvider>
      <App />
    </CryptosContextProvider>
  </React.StrictMode>
);
