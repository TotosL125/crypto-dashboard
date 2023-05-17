// library imports
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component imports
import Loading from "./components/other/Loading";

// other imports
import "./colours.css";

// page imports
import RootLayout from "./layouts/RootLayout";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Detail = lazy(() => import("./pages/Detail"));
const ErrorPage = lazy(() => import("./pages/Error"));

// create router and define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={<Loading />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: ":id/detail",
        element: (
          <Suspense fallback={<Loading />}>
            <Detail />
          </Suspense>
        ),
      },
    ],
  },
]);

// component function
function App() {
  return <RouterProvider router={router} />;
}

export default App;
