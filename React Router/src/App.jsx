import NavBar from "./componentes/NavBar";
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" elemet={<Home />} />
        <Route path="contacto" elemet={<Contacto />} />
        <Route path="blog" elemet={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
