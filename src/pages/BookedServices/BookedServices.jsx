import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import BookedServicesRow from "./BookedServicesRow"

const BookedServices = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data))
  }, [url]);


  const handleDelete = id => {
    const proceed = confirm('Are you sure you want to delete');
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted Successful');
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
    }
}

  return (
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
  )
}

export default BookedServices
