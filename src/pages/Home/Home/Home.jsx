import Banner from "../Banner/Banner";
import Doctor from "../../../../public/doctor.json"
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import PopularServices from "../PopularServices/PopularServices";
import FrequentlyAsk from "../FrequentlyAsk/FrequentlyAsk";
import PatientFeedBack from "../PatientFeedBack/PatientFeedBack";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="flex lg:flex-row flex-col justify-between items-center">
            <h1 className="lg:text-6xl lg:font-bold lg:ml-10">Welcome to <br /> Our Services</h1>
            <div className="lg:w-[500px] lg:h-[500px]">
            <Lottie animationData={Doctor}></Lottie>
            </div>
                
            </div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FrequentlyAsk></FrequentlyAsk>
            <PatientFeedBack></PatientFeedBack>
        </div>
    );
};

export default Home;