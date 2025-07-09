import logo from '../assets/logo.png';


function Nav() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="TurboStryke Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/tuning-options">Tuning Options</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact-us">Contact us</a></li>
            </ul>
        </nav>
    );
}

export default Nav;