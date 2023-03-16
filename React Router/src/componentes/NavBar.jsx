import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="btn btn-outline-primary" to="/">
            Home
          </Link>
          <Link className="btn btn-outline-primary" to="/contacto">
            Contacto
          </Link>
          <Link className="btn btn-outline-primary" to="/blog">
            Blog
          </Link>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
