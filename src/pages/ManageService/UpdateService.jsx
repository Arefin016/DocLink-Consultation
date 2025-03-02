import { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2"
import { Helmet } from "react-helmet-async"
import { Fade } from "react-awesome-reveal"
import { Cursor, useTypewriter } from "react-simple-typewriter"

const UpdateService = () => {
  const [text] = useTypewriter({
    words: ["pdate Service"],
    loop: {},
  })
  const updateService = useLoaderData()
  const { photo, serviceName, price, serviceArea, description, _id } =
    updateService
  const { user } = useContext(AuthContext)

  const handleUpdateService = (event) => {
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
    const updateService = {
      email,
      serviceProviderName,
      serviceProvideImage,
      photo,
      serviceName,
      price,
      serviceArea,
      description,
    }
    console.log(updateService)

    fetch(`https://b9-a11-server-sigma.vercel.app/serviceProvider/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Doctor Service Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        }
      })
  }

  return (
    <Fade direction="right">
      <div className="bg-emerald-600 lg:p-16 mb-4 border border-black lg:mt-10 rounded-xl">
        <Helmet>
          <title>Update Service: {_id}</title>
        </Helmet>
        <h2 className="text-3xl text-white text-center font-semibold">
          U{text}
          <Cursor></Cursor>
        </h2>
        <form onSubmit={handleUpdateService}>
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
                  defaultValue={photo}
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
                  defaultValue={serviceName}
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
                  defaultValue={price}
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
                  defaultValue={serviceArea}
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
                  defaultValue={description}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Service"
            className="btn text-black hover:bg-green-500 btn-block"
          />
        </form>
      </div>
    </Fade>
  )
}

export default UpdateService
