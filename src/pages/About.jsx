function About() {
  document.title = "About Us";
  return (
    <div className="about wrapper">
      <div className="about-content">
        <section className="about-header">
          <h1 className="main-title">
            <span className="title-line">ABOUT</span>
            <span className="title-line highlight">US</span>
          </h1>
        </section>
        <section className="about-section">
          <h2 className="about-title">
            <i className="ri-history-line"></i>
            Our Story
          </h2>
          <p className="about-description">
            Founded in 2000, TurboStryke has been at the forefront of automotive
            performance tuning, transforming ordinary vehicles into
            extraordinary machines. What started as a passion project in a small
            garage has evolved into one of the most trusted names in the car
            tuning industry.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-title">
            <i class="ri-focus-2-line"></i>
            Our Mission
          </h2>
          <p className="about-description">
            At TurboStryke, we believe that every car has untapped potential
            waiting to be unleashed. Our mission is to provide cutting-edge
            tuning solutions that not only boost performance but also enhance
            the driving experience while maintaining reliability and safety.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-title">
            <i className="ri-tools-line"></i>
            Our Expertise
          </h2>
          <p className="about-description">
            With over 25 years in the industry, we specialize in a wide range of
            vehicles from European sports cars to American muscle cars and
            Japanese imports. Our expertise spans across various tuning
            disciplines including ECU remapping, turbocharger upgrades, exhaust
            system modifications, and complete performance builds.
          </p>
          <p className="about-description">
            We've successfully completed over 500,000 tuning projects, each
            tailored to our customers' specific needs and driving preferences.
            Whether you're looking for improved fuel efficiency, increased
            horsepower, or track-ready performance, TurboStryke has the
            knowledge and tools to make it happen.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-title">
            <i className="ri-heart-line"></i>
            Our Values
          </h2>
          <div className="values-list">
            <div className="value-item">
              <h3>
                <i className="ri-shield-check-line"></i>
                Safety First
              </h3>
              <p className="about-description">
                Every modification is thoroughly tested to ensure it meets
                safety standards and doesn't compromise vehicle reliability.
              </p>
            </div>
            <div className="value-item">
              <h3>
                <i className="ri-customer-service-2-line"></i>
                Customer Focus
              </h3>
              <p className="about-description">
                We work closely with each client to understand their goals and
                deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="value-item">
              <h3>
                <i className="ri-lightbulb-line"></i>
                Innovation
              </h3>
              <p className="about-description">
                We constantly stay updated with the latest tuning technologies
                and techniques to provide cutting-edge solutions.
              </p>
            </div>
            <div className="value-item">
              <h3>
                <i className="ri-eye-line"></i>
                Transparency
              </h3>
              <p className="about-description">
                We believe in honest communication about what's possible and
                provide clear explanations of all work performed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
