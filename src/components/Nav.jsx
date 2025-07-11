import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hoverNav = (e) => {
    e.target.classList.add("nav-active");
  };

  const hoverNavOut = (e) => {
    e.target.classList.remove("nav-active");
  };

  // Helper function to check if current path matches
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="TurboStryke Logo" />
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <i className="ri-menu-line"></i>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
        <li>
          <a
            href="/"
            className={isActive("/") ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/tuning-options"
            className={isActive("/tuning-options") ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            Tuning Options
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={isActive("/about") ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact-us"
            className={isActive("/contact-us") ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            Contact us
          </a>
        </li>
        <li>
          <a
            href="/login"
            className={isActive("/login") ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="/register"
            className={isActive("/register") ? "nav-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
