import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookedServices = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [url])

    return (
        <div>
            <h2>This is booked services</h2>
        </div>
    );
};

export default BookedServices;