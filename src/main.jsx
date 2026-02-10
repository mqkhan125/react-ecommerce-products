import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Component/Home";
import Product from "./Component/Product";
import SingleProducts from "./Component/SingleProducts";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <SingleProducts />,
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <RouterProvider router={router} />
    </>
);
