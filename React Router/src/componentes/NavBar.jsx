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
          <Link className="btn btn-outline-primary" to="contacto">
            Contacto
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
