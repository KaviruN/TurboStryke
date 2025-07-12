import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="subtitle">THE PERFORMANCE TUNING</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/tuning">Tuning Options</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li>ECU Remapping</li>
              <li>Turbo Upgrades</li>
              <li>Exhaust Systems</li>
              <li>Dyno Testing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul>
              <li>1234 Performance Way</li>
              <li>Tuning City, TX 75001</li>
              <li>+1 (800) 123-4567</li>
              <li>info@turbostryke.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyrights">
        <a href="https://www.kaviru.me">
          <p className="subtitle">
            <i className="ri-shield-check-line"></i> © 2024 TurboStryke. All
            rights reserved.
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
