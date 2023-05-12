// library imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page imports
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/Error";

// other imports
import "./colours.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: ":id/detail", element: <Detail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
