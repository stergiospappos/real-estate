import "./header.css";
import { Link } from "react-router-dom";
import MenuIcon from "./menuIcon";

function Header() {
  return (
    <header className="header">
      <nav className="header--nav">
        <div className="header--nav--logo">
          <Link to="/">Luxeyline</Link>
        </div>
        <ul className="header--nav--ul">
          <li className="header--nav--li">
            <Link to="/">Home</Link>
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <button className="header--nav-button">Get Started</button>
        <div className="header--nav--mobile">
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
