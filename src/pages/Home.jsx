import { WavyBackground } from "../components/WavyBackground";
import CarModels from "../components/CarModel";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="hero-text">
          <h1 className="main-title">
            <span className="title-line">TURBO</span>
            <span className="title-line highlight">STRYKE</span>
          </h1>
          <p className="subtitle">
            Elite Performance Tuning & Automotive Excellence
          </p>
          <p className="description">
            Transform your vehicle into a masterpiece of power and precision.
            From ECU remapping to complete performance overhauls.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Explore Services</button>
            <button className="btn btn-secondary">Book Consultation</button>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Cars Tuned</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="car-model">
        <CarModels />
        <div className="car-overlay">
          <div className="floating-badge">
            <span>Premium LaFerrari Model</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
