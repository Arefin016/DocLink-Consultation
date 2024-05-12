const ServicesCard = ({ service }) => {
  const {
    photo,
    serviceName,
    price,
    serviceArea,
    description,
    serviceProviderName,
    serviceProvideImage,
  } = service
  return (
    <div className="card card-side bg-red-300 shadow-xl border">
      <figure className="ml-4">
        <img src={photo} alt="Movie" />
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
          <button className="btn btn-accent">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
