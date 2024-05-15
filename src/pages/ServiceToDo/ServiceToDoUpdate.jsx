import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const ServiceToDoUpdate = () => {

    const seviceUpdate = useLoaderData();
    const {currentUserName, serviceArea, servicename, price, date, photo, _id } = seviceUpdate;
    console.log(_id);
    const [booking, setBooking] = useState(seviceUpdate);

        const handleBookingConfirm = _id => {
        fetch(`https://b9-a11-server-sigma.vercel.app/bookings/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'completed'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = seviceUpdate.filter(serv => serv._id !== _id);
                const updated = seviceUpdate.find(serv => serv._id === _id);
                updated.status = 'Completed'
                const newBookings = [updated, ...remaining]; 
                setBooking(newBookings);
            }
        })
      }


    return (
        <Fade direction="right">
        <h2 className="lg:my-10 my-5 text-3xl text-center font-bold">All Services Status Update</h2>
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
              <tr>
      <Helmet>
        <title>Booked Service: {_id}</title>
      </Helmet>
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
      <td className="lg:p-20 p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{servicename}</div>
            <div className="text-sm opacity-50">{serviceArea}</div>
          </div>
        </div>
      </td>
      <td>{currentUserName}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <div className="navbar-center z-[1] hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                {
                    status === 'completed' ? <span className="text-blue-300">Completed</span> :
                    <summary onClick={() => handleBookingConfirm(_id)}>pending</summary>
                }
                <ul className="p-2">
                    <li><a>working</a></li>
                    <li><a>completed</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </th>
    </tr>
            
            </tbody>
          </table>
        </div>
    </Fade>
    );
};

export default ServiceToDoUpdate;