import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className="text-center lg:my-10 my-5">
                <input className="border border-black p-2" type="Search" placeholder="Search" />
            </div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="space-y-5 my-5">
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;