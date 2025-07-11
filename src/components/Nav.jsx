import { useState } from "react";
import logo from "../assets/logo.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hoverNav = (e) => {
    e.target.classList.add("nav-active");
  };

  const hoverNavOut = (e) => {
    e.target.classList.remove("nav-active");
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
            className="nav-active"
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={hoverNav}
            onMouseOut={hoverNavOut}
          >
            Home
          </a>
        </li>
        <li>
          <a href="/tuning-options" onClick={() => setIsMenuOpen(false)} onMouseOver={hoverNav} onMouseOut={hoverNavOut}>
            Tuning Options
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setIsMenuOpen(false)} onMouseOver={hoverNav} onMouseOut={hoverNavOut}>
            About
          </a>
        </li>
        <li>
          <a href="/contact-us" onClick={() => setIsMenuOpen(false)} onMouseOver={hoverNav} onMouseOut={hoverNavOut}>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
