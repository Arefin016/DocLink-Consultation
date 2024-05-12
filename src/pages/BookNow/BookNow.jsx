import { useContext } from "react"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"
import { AuthContext } from "../../providers/AuthProvider"

const BookNow = () => {
  const { user } = useContext(AuthContext)
  const bookNow = useLoaderData()
  const {
    photo,
    serviceName,
    price,
    serviceArea,
    description,
    serviceProviderName,
    serviceID,
    _id,
  } = bookNow

  const handleBookService = (event) => {
    event.preventDefault()

    const form = event.target

    const serviceId = form.serviceId.value
    const servicename = form.servicename.value
    const date = form.date.value
    const customizedServicePlan = form.customizedServicePlan.value
    const email = user?.email
    const currentUserName = user?.displayName
    const photo = form.photo.value
    const price = form.price.value
    const serviceArea = form.serviceArea.value
    const description = form.description.value
    const providerName = form.providerName.value

    const bookService = {
      serviceId,
      servicename,
      date,
      customizedServicePlan,
      email,
      photo,
      serviceArea,
      description,
      price,
      currentUserName,
      providerName,
      service_id: _id
    }
    console.log(bookService);

    // send data to the server
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Purchase Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        }
      })
  }

  return (
    <div className="bg-orange-600 lg:p-16 mb-4 border border-black lg:mt-10 rounded-xl">
      {/* <Helmet>
        <title>Add Craft Item</title>
      </Helmet> */}
      <h2 className="text-3xl text-white text-center font-semibold">
        {/* Add {text}<Cursor></Cursor> */} Book Service
      </h2>
      {/* <Fade direction='right'> */}
      <form onSubmit={handleBookService}>
        {/* form Service Provider email and Service Provider Name row */}
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Provider Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Provider Name"
                name="providerName"
                defaultValue={serviceProviderName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Service Id and Service Name row */}
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Id</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image"
                name="serviceId"
                defaultValue={serviceID}
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
                name="servicename"
                defaultValue={serviceName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Service Taking Date  and Service Name row */}
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Service Taking Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                placeholder="Service Taking Date"
                name="date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customized Service plan</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Customized Service Plan"
                name="customizedServicePlan"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Image and Service Name row */}
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Current User Email </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Current User Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Current User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Current User Name"
                name="currentUserName"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Image and Service Name row */}
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-full">
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
          value="Purchase"
          className="btn text-black hover:bg-green-500 btn-block"
        />
      </form>
      {/* </Fade> */}
    </div>
  )
}

export default BookNow
