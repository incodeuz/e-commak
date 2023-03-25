import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="border">
          <div className="container d-flex justify-content-between py-3">
            <Link className="link" to="/">
              <Button>All Products</Button>
            </Link>
            <Link className="link" to="admin">
              <Button>Add Product</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Navbar;
