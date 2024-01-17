import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <div className="navbar">
      <div maxWidth="xl" className="cont">
        <div className="tasty">
          <p>Tasty</p>
        </div>
        <div className="menu">
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <Link to="/menu" className="link">
            <p>Menu</p>
          </Link>
          <Link to="/special" className="link">
            <p>Specialities</p>
          </Link>
          <Link to="/reserv" className="link">
            <p>Reservation</p>
          </Link>
          <Link to="/blog" className="link">
            <p>Blog</p>
          </Link>
          <Link to="/about" className="link">
            <p>About</p>
          </Link>
          <Link to="/contact" className="link">
            <p>Contact</p>
          </Link>
          <Link to="/basket" className="link">
            <p>Basket</p>
          </Link>
          <Link to="/wishlist" className="link">
            <p>Wishlist</p>
          </Link>
          <Link to="/add" className="link">
            <p>Add</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
