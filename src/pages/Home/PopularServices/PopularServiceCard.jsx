import { Link } from "react-router-dom"

const PopularServiceCard = ({ service }) => {
  const { service_name, service_image, service_description, service_provider, service_price } = service
  return (
    <div className="card w-96 bg-yellow-200 shadow-xl border border-black hover">
      <figure>
        <img src={service_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>Desc: {service_description}</p>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={service_provider.image} />
          </div>
          
        </div>
        <p>Provider Name: {service_provider.name}</p>
        <p>Price: {service_price}</p>
          <Link to="/services">
          <button className="btn btn-accent">View Details</button>
          </Link>
      </div>
    </div>
  )
}

export default PopularServiceCard
