function NotFound() {
  document.title = "404 - Page Not Found";

  return (
    <div className="not-found wrapper">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="main-title not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-buttons">
            <a href="/" className="btn btn-primary">
              Go Home
            </a>
            <a href="/about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
