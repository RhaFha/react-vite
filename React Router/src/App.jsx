import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NavBar from "./componentes/NavBar";
import Error from "./componentes/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "contacto",
        element: <Contacto />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
