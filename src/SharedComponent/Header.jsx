import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header--nav">
        <div className="header--nav--logo">Luxeyline</div>
        <ul className="header--nav--ul">
          <li className="header--nav--li">
            {" "}
            <a href="#">Home</a>
          </li>
          <li className="header--nav--li">
            {" "}
            <a href="#">About Us</a>
          </li>
          <li className="header--nav--li">
            {" "}
            <a href="#">Buy</a>
          </li>
          <li className="header--nav--li">
            {" "}
            <a href="#">News</a>
          </li>
          <li className="header--nav--li">
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="header--nav-button">Get Started</button>
      </nav>
    </header>
  );
}

export default Header;
