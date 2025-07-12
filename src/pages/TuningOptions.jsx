function TuningOptions() {
  document.title = "Tuning Options - TurboStryke";

  return (
    <div className="tuning-options wrapper">
      <div className="tuning-container">
        {/* Header Section */}
        <div className="tuning-header">
          <h1 className="main-title tuning-title">
            <span className="title-line">TUNING</span>
            <span className="title-line highlight">OPTIONS</span>
          </h1>
          <p className="tuning-description description">
            At TurboStryke, precision meets passion. Our tuning services unlock
            your car's full potential — from subtle performance enhancements to
            full-throttle transformations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="tuning-services">
          {/* ECU Remapping */}
          <div className="tuning-service">
            <h3 className="service-title">
              <i className="ri-cpu-line service-icon"></i> ECU Remapping
            </h3>
            <p className="service-subtitle">Fine-tune your engine's brain</p>
            <ul className="service-features">
              <li>Optimized fuel-to-air ratio</li>
              <li>Increased horsepower and torque</li>
              <li>Improved throttle response</li>
              <li>Custom maps tailored to driving style</li>
            </ul>
          </div>

          {/* Turbocharger Upgrades */}
          <div className="tuning-service">
            <h3 className="service-title">
              <i className="ri-flashlight-line service-icon"></i> Turbocharger
              Upgrades
            </h3>
            <p className="service-subtitle">Boost beyond the basics</p>
            <ul className="service-features">
              <li>Larger, high-efficiency turbo units</li>
              <li>Reduced turbo lag</li>
              <li>Engine recalibration for safety</li>
              <li>Intercooler system enhancements</li>
            </ul>
          </div>

          {/* Exhaust System Modifications */}
          <div className="tuning-service">
            <h3 className="service-title">
              <i className="ri-volume-up-line service-icon"></i> Exhaust System
              Modifications
            </h3>
            <p className="service-subtitle">Power with presence</p>
            <ul className="service-features">
              <li>High-flow catalytic converters</li>
              <li>Performance headers & mufflers</li>
              <li>Deep, aggressive exhaust note</li>
              <li>Weight reduction for efficiency</li>
            </ul>
          </div>

          {/* Complete Performance Builds */}
          <div className="tuning-service">
            <h3 className="service-title">
              <i className="ri-racing-line service-icon"></i> Complete
              Performance Builds
            </h3>
            <p className="service-subtitle">
              From street machine to track beast
            </p>
            <ul className="service-features">
              <li>Full engine rebuilds</li>
              <li>Suspension and brake upgrades</li>
              <li>Custom wheels and aerodynamic kits</li>
              <li>Dyno-tested tuning packages</li>
            </ul>
          </div>

          {/* Custom Solutions */}
          <div className="tuning-service">
            <h3 className="service-title">
              <i className="ri-tools-line service-icon"></i> Custom Solutions
            </h3>
            <p className="service-subtitle">Because one-size never fits all</p>
            <ul className="service-features">
              <li>Hybrid setups & multi-stage tuning</li>
              <li>Daily driver to race-ready modes</li>
              <li>Eco-performance combos</li>
              <li>Exclusive builds on request</li>
            </ul>
          </div>

          {/* Vehicle Compatibility */}
          <div className="tuning-service">
            <h3 className="service-title">
              <i className="ri-car-line service-icon"></i> Vehicle Compatibility
            </h3>
            <p className="service-subtitle">We tune:</p>
            <ul className="service-features">
              <li>European sports cars (BMW M-series, Audi RS, Porsche)</li>
              <li>American muscle (Mustang, Camaro, Corvette)</li>
              <li>Japanese imports (Nissan GT-R, Subaru STI, Toyota Supra)</li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="tuning-process">
          <h2 className="process-title">How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4 className="step-title">Consultation</h4>
              <p className="step-description">Tell us your goals</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4 className="step-title">Diagnostics</h4>
              <p className="step-description">We assess your current setup</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4 className="step-title">Build Plan</h4>
              <p className="step-description">You get a detailed proposal</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4 className="step-title">Execution</h4>
              <p className="step-description">
                We tune your car with precision
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h4 className="step-title">Test Drive & Handover</h4>
              <p className="step-description">Experience the transformation</p>
            </div>
          </div>
        </div>

        {/* Safety Promise */}
        <div className="safety-promise">
          <div className="safety-icon">
            <i className="ri-shield-check-line"></i>
          </div>
          <h3 className="safety-title">Performance & Safety Promise</h3>
          <p className="safety-description">
            Every upgrade is tested. Every car is tuned responsibly. TurboStryke
            never compromises on safety.
          </p>
        </div>

        {/* CTA Section */}
        <div className="tuning-cta">
          <h3 className="cta-title">Ready to Transform Your Ride?</h3>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get Quote
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

export default TuningOptions;
