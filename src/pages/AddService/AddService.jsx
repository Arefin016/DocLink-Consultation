// import { Fade } from 'react-awesome-reveal';
// import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { useContext } from "react"
import Swal from "sweetalert2"
import { AuthContext } from "../../providers/AuthProvider"
import { Helmet } from "react-helmet-async"
import { Fade } from "react-awesome-reveal"

const AddService = () => {
  const { user } = useContext(AuthContext)

  const handleAddService = (event) => {
    event.preventDefault()

    const form = event.target

    const photo = form.photo.value
    const serviceName = form.serviceName.value
    const price = form.price.value
    const serviceArea = form.serviceArea.value
    const description = form.description.value
    const email = user?.email
    const serviceProviderName = user?.displayName
    const serviceProvideImage = user?.photoURL

    const newAddService = {
      photo,
      serviceName,
      price,
      serviceArea,
      description,
      email,
      serviceProviderName,
      serviceProvideImage,
    }
    console.log(newAddService)

    // User name information
    const serviceProvider = {
      email,
      serviceProviderName,
      serviceProvideImage,
      photo,
      serviceName,
      price,
      serviceArea,
      description,
    }
    console.log(serviceProvider)

    //Service Provider Details to send server to database
    fetch("https://b9-a11-server-sigma.vercel.app/serviceProvider", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceProvider),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Doctor Service Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        }
      })
  }

  return (
    <Fade direction="right">
      <div className="text-center lg:my-10 my-5">
                <input className="border border-black p-2" type="Search" placeholder="Search" />
            </div>
      <div className="bg-green-500 lg:p-16 mb-4 border border-black lg:mt-10 rounded-xl">
        <Helmet>
          <title>Add Service</title>
        </Helmet>
        <h2 className="text-3xl text-white text-center font-semibold">
          {/* Add {text}<Cursor></Cursor> */} Add Service
        </h2>
        {/* <Fade direction='right'> */}
        <form onSubmit={handleAddService}>
          {/* form Image and Service Name row */}
          <div className="lg:flex lg:flex-row flex-col gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Image"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Service Name"
                  name="serviceName"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Price and Service Area row */}
          <div className="lg:flex lg:flex-row flex-col gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Service Area"
                  name="serviceArea"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Description row */}
          <div className="mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add"
            className="btn text-black hover:bg-green-500 btn-block"
          />
        </form>
        {/* </Fade> */}
      </div>
    </Fade>
  )
}

export default AddService
