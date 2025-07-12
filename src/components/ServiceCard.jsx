function ServiceCard({ service }) {
    return (
        <div className="services-card">
            <div className="card-image">
                <img src={service.image} alt={service.title} />
            </div>
            <div className="card-content">
                <h1 className="card-title">{service.title}</h1>
                <p className="card-description">{service.description}</p>
                {/* <button className="btn btn-primary">Learn More</button> */}
            </div>
        </div>
    )
}

export default ServiceCard;
    