import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";

const ServiceToDoRow = ({ service}) => {
  const { currentUserName, serviceArea, servicename, price, date, photo, _id } =
    service;

    // const handleBookingConfirm = _id => {
    //     fetch(`https://b9-a11-server-sigma.vercel.app/bookings/${_id}`,{
    //         method: 'PATCH',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify({status: 'completed'})
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.modifiedCount > 0){
    //             //update state
    //         }
    //     })
    //   }
    
  return (
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
      <td className="lg:p-10 p-4">
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
                    
                    <summary><Link to={`/serviceToDo/${_id}`}>pending</Link> </summary>
                    
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
  )
}

export default ServiceToDoRow
