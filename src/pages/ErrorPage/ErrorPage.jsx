import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
        <h2 data-aos="fade-down" data-aos-duration="2000" className="text-3xl text-red-500 font-bold lg:mb-3 mb-2 mt-2">Not found page</h2>
        <Link to="/"><button className="btn btn-ghost">Go Back Home</button></Link>
    </div>
    );
};

export default ErrorPage;