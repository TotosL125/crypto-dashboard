// library imports
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

// other imports
import CryptosContextProvider from "./stores/crypto-context";
import App from "./App";
import "./index.css";

// redux store import
import store from "./stores/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CryptosContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CryptosContextProvider>
  </React.StrictMode>
);
