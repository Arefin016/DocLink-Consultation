import { Helmet } from "react-helmet-async";

const BookedServicesRow = ({ booking, handleDelete }) => {
  const { currentUserName, serviceArea, servicename, price, date, photo, _id } =
    booking;

  return (
    <tr>
        <Helmet>
            <title>Booked Service: {_id}</title>
        </Helmet>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
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
      <td>
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
        <button className="btn btn-ghost btn-xs">Pending</button>
      </th>
    </tr>
  )
}

export default BookedServicesRow
