function Contact() {
  document.title = "Contact";
  return (
    <div className="user wrapper">
      <div className="contact-info">
        <div className="contact-details">
          <div className="contact-item">
            <span>
              <i className="ri-phone-line"></i>Phone
            </span>
            <div>+000 123 466 789</div>
          </div>
          <div className="contact-item">
            <span>
              <i className="ri-mail-line"></i>Email
            </span>
            <div>info@turbostryke.com</div>
          </div>
          <div className="contact-item">
            <span>
              <i className="ri-map-pin-line"></i>Address
            </span>
            <div>1234 Performance Ave Suite 100 Tuning City, CA 98765</div>
          </div>
        </div>
      </div>
      <div className="user-container contact-container">
        <div className="user-content">
          <h1 className="main-title user-title">Contact</h1>
          <p className="user-description subtitle">Send us a message</p>
        </div>
        <form>
          <div className="input">
            <i className="ri-user-line"></i>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input">
            <i className="ri-mail-line"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input textarea">
            <i className="ri-message-line"></i>
            <textarea placeholder="Message" required rows={4}></textarea>
          </div>
          <button type="submit" className="contact-button btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
