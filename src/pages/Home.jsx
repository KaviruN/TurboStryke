import CarModels from "../components/CarModel";
import Services from "../components/Services";
import { Suspense } from "react";

function Home() {
  const scrollToServices = (tag) => {
    const servicesSection = document.getElementById(tag);
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-contaner">
      <div className="home wrapper" id="home">
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
              <button
                className="btn btn-primary"
                onClick={() => scrollToServices("services")}
              >
                Explore Services
              </button>
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
          <Suspense
            fallback={
              <div className="model-loading">
                <div className="loading-spinner"></div>
                <p>Loading Premium LaFerrari Model...</p>
              </div>
            }
          >
            <CarModels />
          </Suspense>
          <div className="car-overlay">
            <div className="floating-badge">
              <span>Premium LaFerrari Model</span>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

export default Home;
