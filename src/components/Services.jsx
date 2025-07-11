import ServiceCard from "./ServiceCard";
import eculogo from "../assets/ecu-logo.svg";
import carlogo from "../assets/car-logo.svg";
import meterlogo from "../assets/meter-logo.svg";

function Services() {
  return (
    <section className="services wrapper" id="services">
      <div className="services-header">
        <h1 className="main-title">
          <span className="title-line highlight">UNLEASH</span>
          <span className="title-line">YOUR CAR'S TRUE POTENTIAL</span>
        </h1>
        <p className="subtitle">
          Enhance your vehicle's power and efficiency with our expert tuning
          services.
        </p>
      </div>
      <div className="services-cards">
        <ServiceCard
          service={{
            title: "CUSTOM ECU TUNING",
            description:
              "Optimize your engine's performance with our advanced ECU remapping services.",
            image: eculogo,
          }}
        />
        <ServiceCard
          service={{
            title: "PERFORMANCE UPGRADES",
            description:
              "Upgrade turbochargers, exhaust systems, and more for superior power.",
            image: carlogo,
          }}
        />
        <ServiceCard
          service={{
            title: "DYNO TESTING",
            description:
              "Measure and refine your vehicle's performance with precision dynamometer testing.",
            image: meterlogo,
          }}
        />
      </div>
    </section>
  );
}

export default Services;
