import { useContext } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import { Helmet } from "react-helmet-async"

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
  const serviceDetails = useLoaderData()
  const {
    photo,
    serviceName,
    serviceArea,
    description,
    serviceProviderName,
    serviceProvideImage,
    _id,
  } = serviceDetails

  return (
    <div className="hero min-h-screen bg-cyan-200 my-10 rounded-lg border border-black">
      <Helmet>
        <title>Services: {_id}</title>
      </Helmet>
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
              <img src={user?.photoURL} />
            </div>
          </div>
          <p>Service Provider:{user?.displayName}</p>

          
          <Link to={`/bookNow/${_id}`}>
          <button className="btn btn-primary mt-5">Book Now</button>
          </Link>
          <Link to="/services">
          <button className="btn btn-accent ml-5">Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
