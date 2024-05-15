import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import BookedServicesRow from "./BookedServicesRow"
import Swal from "sweetalert2"
import { Fade } from "react-awesome-reveal"

const BookedServices = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const url = `https://b9-a11-server-sigma.vercel.app/bookings?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data))
  }, [url])

  const handleDelete = (id) => {
    console.log(id)
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
        fetch(`https://b9-a11-server-sigma.vercel.app/bookings/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Book Service has been deleted.",
                icon: "success",
              })
              const remaining = bookings.filter((booking) => booking._id !== id)
              setBookings(remaining)
            }
          })
      }
    })
  }

  return (
    <Fade direction="right">
      <div className="text-center lg:my-10 my-5">
                <input className="border border-black p-2" type="Search" placeholder="Search" />
            </div>
      <div>
        <div className="overflow-x-auto bg-slate-300 lg:my-10 my-5 rounded-lg border border-black">
          <table className="table">
            {/* head */}
            <thead className="text-black">
              <tr>
                <th>
                  <button className="btn btn-sm btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <th>Name</th>
                <th>Current User Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <BookedServicesRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                ></BookedServicesRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fade>
  )
}

export default BookedServices
