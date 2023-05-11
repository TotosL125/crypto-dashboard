// library imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page imports
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";

// other imports
import "./colours.css";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/:id/detail", element: <Detail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
