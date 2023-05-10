import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/:id/detail", element: <Detail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
