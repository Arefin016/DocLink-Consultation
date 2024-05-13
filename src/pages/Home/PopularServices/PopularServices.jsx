import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";

const PopularServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popularServices')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className="lg:my-10">
           <div className="text-center my-5">
             <h3 className="text-4xl font-bold text-orange-600">Our Popular Services</h3>
            <p className="mt-2">Comprehensive primary care and specialist referrals.Accessible telemedicine, <br /> mental health, and nutrition consultations</p>
           </div>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
             {
                services.map(service => <PopularServiceCard
                key={service._id}
                service={service}
                ></PopularServiceCard>)
             }
           </div>
        </div>
    );
};

export default PopularServices;