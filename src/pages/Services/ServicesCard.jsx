import { Link } from "react-router-dom"

const ServicesCard = ({ service }) => {
  const {
    photo,
    serviceName,
    price,
    serviceArea,
    description,
    serviceProviderName,
    serviceProvideImage,
    _id,
  } = service
  return (
    <div className="card card-side  bg-violet-200 shadow-xl flex lg:flex-row flex-col">
      <figure>
        <img
          src={photo}
          alt="Movie"
          className="p-5"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-600 font-bold text-2xl">{serviceName}</h2>
        <p className="font-bold">{description}</p>
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={serviceProvideImage} />
          </div>
        </div>
        <p className="font-bold">Name: {serviceProviderName}</p>
        <p className="font-bold">Price: {price}</p>
        <p className="font-bold">Service Area: {serviceArea}</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
          <button className="btn btn-accent">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
