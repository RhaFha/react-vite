import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NavBar from "./componentes/NavBar";
import Error from "./componentes/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:blogId",
        element: <BlogDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
