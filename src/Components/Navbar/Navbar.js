import React from "react";
import "./Navbar.css";
import { BiCartAdd, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <h2>FURNITURE</h2>
        </div>
        <div className="link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav_icon">
          <Link to="/cart">
            <BiCartAdd className="icon cart" />
          </Link>
          <Link to="/register">
            <BiUser className="icon" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
