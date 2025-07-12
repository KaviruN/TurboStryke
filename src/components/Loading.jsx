import logo from "../assets/logo.svg";


function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <img
            src={logo}
            alt="TurboStryke"
            className="loading-logo-img"
          />
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <h2 className="loading-title">TurboStryke</h2>
        <p className="loading-text">Loading your experience...</p>
      </div>
    </div>
  );
}

export default Loading;
