import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import MenuIcon from "./menuIcon";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setIsOpen(false); // Reset the hamburger icon when closing the menu
  };

  return (
    <header className="header">
      <nav aria-label="Main Navigation" className="header--nav">
        <div className="header--nav--logo">
          <Link aria-label="Home" to="/">
            Luxeyline
          </Link>
        </div>
        <ul className={`header--nav--ul ${menuOpen ? "open-menu" : ""}`}>
          <li className="header--nav--li">
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
          </li>
          <li className="header--nav--li">
            <a href="#">About Us</a>
          </li>
          <li className="header--nav--li">
            <a href="#">Buy</a>
          </li>
          <li className="header--nav--li">
            <a href="#">News</a>
          </li>
          <li className="header--nav--li">
            <Link onClick={closeMenu} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <button className="header--nav-button">Get Started</button>
        <div
          onClick={toggleMenu}
          className={`header--nav--mobile ${menuOpen ? "open-menu" : ""}`}
        >
          <MenuIcon onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
