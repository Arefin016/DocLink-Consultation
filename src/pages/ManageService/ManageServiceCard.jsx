import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const ManageServiceCard = ({ service, addService, setAddService }) => {
  const {photo, serviceName, price, serviceArea, description, _id } = service;

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-a11-server-sigma.vercel.app/serviceProvider/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Service has been deleted.",
                icon: "success",
              })
              const remaining = addService.filter(serv => serv._id !== _id)
              setAddService(remaining);
            }
          })
      }
    })
  }

  return (
    <div className="card w-96 bg-gray-200 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-red-500">Service Name: {serviceName}</h2>
        <p>Service Area: {serviceArea}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        <div className="lg:space-x-24 space-x-2">
          <Link to={`/updateService/${_id}`}>
          <button className="btn btn-success">Update</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ManageServiceCard
