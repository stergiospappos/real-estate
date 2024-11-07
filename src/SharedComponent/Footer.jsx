import "./footer.css";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer--left">
          <div className="footer--left--logo">
            <Link to="/">Luxeyline</Link>
            <p className="footer--left--logo--description">
              Real Estate, Furniture
            </p>
            <p className="footer--left--logo--description">
              3891 Ranchview Dr. Richardson, California 62639
            </p>
          </div>
          <div className="footer--left--newsletter">
            <p>Sign Up for newsletter to stay up to date</p>
            <input type="text" placeholder="Enter your email address" />
            <button>
              <ArrowUpRight />
            </button>
          </div>
        </div>
        <div className="footer--right">
          <div className="footer--right--menus">
            <div className="footer--right--menus-list">
              <p>Resources</p>
              <ul>
                <li>Pricing</li>
                <li>Features</li>
                <li>Overview</li>
                <li>Knowledge</li>
              </ul>
            </div>
            <div className="footer--right--menus-list">
              <p>Support</p>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="footer--right--menus-list">
              <p>Company</p>
              <ul>
                <li>About us</li>
                <li>Carreers</li>
                <li>Sitemap</li>
                <li>Partners</li>
              </ul>
            </div>

            <div className="footer--right--menus-list">
              <p>Product</p>
              <ul>
                <li>Payment</li>
                <li>Benefits</li>
                <li>Devices</li>
                <li>Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2022 CapsFin. © All rigthts reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
