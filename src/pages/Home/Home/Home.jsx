import Banner from "../Banner/Banner";
import Doctor from "../../../../public/doctor.json"
import Lottie from "lottie-react";


const Home = () => {
    return (
        <div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
            <h1 className="lg:text-6xl lg:font-bold lg:ml-10">Welcome to <br /> Our Services</h1>
            <div className="lg:w-[500px] lg:h-[500px]">
            <Lottie animationData={Doctor}></Lottie>
            </div>
                
            </div>
            <Banner></Banner>
            <h2>This is Home </h2>
        </div>
    );
};

export default Home;