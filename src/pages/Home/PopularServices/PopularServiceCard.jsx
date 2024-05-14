import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const PopularServiceCard = ({ service }) => {
  const {
    service_name,
    service_image,
    service_description,
    service_provider,
    service_price,
  } = service
  return (
    <Fade direction="right" data-aos-duration="2000">
      <div className="card lg:w-96 w-80 bg-yellow-100 shadow-xl border border-black hover">
        <figure>
          <img
            className="lg:w-[382px] lg:h-[282px] w-[300px]"
            src={service_image}
            alt="Shoes"
          />
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
    </Fade>
  )
}

export default PopularServiceCard
