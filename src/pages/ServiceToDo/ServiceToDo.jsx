import { useLoaderData } from "react-router-dom"
import ServiceToDoRow from "./ServiceToDoRow"
import { Fade } from "react-awesome-reveal"

const ServiceToDo = () => {
  const serviceToDo = useLoaderData()

  return (
    <Fade direction="right">
      <div className="text-center lg:my-10 my-5">
        <input
          className="border border-black p-2"
          type="Search"
          placeholder="Search"
        />
      </div>
      <h2 className="lg:my-10 my-5 text-3xl text-center font-bold">
        All Services To Do
      </h2>
      <div className="overflow-x-auto bg-gray-300 lg:my-10 my-5 rounded-lg border border-black">
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
            {serviceToDo.map((service) => (
              <ServiceToDoRow
                key={service._id}
                service={service}
                //   handleBookingConfirm={handleBookingConfirm}
              ></ServiceToDoRow>
            ))}
          </tbody>
        </table>
      </div>
    </Fade>
  )
}

export default ServiceToDo
