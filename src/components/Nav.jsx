import { useState } from 'react';
import logo from '../assets/logo.png';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="TurboStryke Logo" />
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
            <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="/tuning-options" onClick={() => setIsMenuOpen(false)}>Tuning Options</a></li>
                <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                <li><a href="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact us</a></li>
            </ul>
        </nav>
    );
}

export default Nav;