import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Redux se cart items lena
import "../Css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Redux se cart items count
  const cartItems = useSelector((state) => state.carts.items);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-phone-icon-with-shopping-cart-vector-illustration-shop-black-and-white-png-image_12754663.png"
          alt="Company Logo"
        />
      </div>

      {/* Hamburger */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>

        <Link to="/carts" onClick={() => setIsOpen(false)} className="cart-link">
          Cart
          {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
        </Link>

        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
