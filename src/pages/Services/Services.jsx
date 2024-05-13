import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
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