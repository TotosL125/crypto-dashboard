import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CryptosContextProvider from "./stores/crypto-context";

import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/:id/detail", element: <Detail /> },
]);

function App() {
  return (
    <CryptosContextProvider>
      <RouterProvider router={router} />
    </CryptosContextProvider>
  );
}

export default App;
