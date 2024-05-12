import { useLoaderData } from "react-router-dom"

const ServiceDetails = () => {
  const serviceDetails = useLoaderData()
  const {
    photo,
    serviceName,
    price,
    serviceArea,
    description,
    serviceProviderName,
    serviceProvideImage,
    _id,
  } = serviceDetails

  return (
    <div className="hero min-h-screen bg-cyan-200 my-10 rounded-lg border border-black">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold">Service Provider Information:</h1>
          <p>Name: {serviceProviderName}</p>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={serviceProvideImage} />
            </div>
          </div>
          <p>Area: {serviceArea}</p>

          <h1 className="text-3xl mt-6 font-bold">Single Service Section:</h1>
          <p className="">Name: {serviceName}</p>
          <p>Desc: {description}</p>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={serviceProvideImage} />
            </div>
          </div>
          <p>Service Provider: {serviceProviderName}</p>

          <button className="btn btn-primary mt-5">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
