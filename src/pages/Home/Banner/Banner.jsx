import img1 from "../../../assets/images/img1.jpg"
import img2 from "../../../assets/images/img2.jpg"
import img3 from "../../../assets/images/img3.jpg"
import img4 from "../../../assets/images/img4.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="lg:w-[1280px] lg:h-[600px] w-[300px] h-auto rounded-xl"/>
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 lg:pl-12 pl-3 w-1/3">
            <h2 className="lg:text-6xl lg:w-[378px] lg:h-[300px] text-2xl font-bold">Connecting Patients with Trusted Doctors</h2>
            <p className="lg:w-[378px] lg:h-[96px] w-[300px] h-[96px]">
            Connect with top-rated doctors and specialists instantly through our user-friendly platform. Access comprehensive medical care and book appointments hassle-free.
            </p>
            <div className="flex lg:flex-row flex-col">
              <button className="btn btn-warning mr-5">Explore More</button>
              <button className="btn btn-outline btn-secondary">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="lg:w-[1280px] lg:h-[600px] w-[300px] h-auto rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 lg:pl-12 pl-3 w-1/3">
            <h2 className="lg:text-6xl lg:w-[378px] lg:h-[300px] text-2xl font-bold">Connecting Patients with Trusted Doctors</h2>
            <p className="lg:w-[378px] lg:h-[96px] w-[300px] h-[96px]">
            Connect with top-rated doctors and specialists instantly through our user-friendly platform. Access comprehensive medical care and book appointments hassle-free.
            </p>
            <div className="flex lg:flex-row flex-col">
              <button className="btn btn-warning mr-5">Explore More</button>
              <button className="btn btn-outline btn-secondary">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="lg:w-[1280px] lg:h-[600px] w-[300px] h-auto rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 lg:pl-12 pl-3 w-1/3">
            <h2 className="lg:text-6xl lg:w-[378px] lg:h-[300px] text-2xl font-bold">Connecting Patients with Trusted Doctors</h2>
            <p className="lg:w-[378px] lg:h-[96px] w-[300px] h-[96px]">
            Connect with top-rated doctors and specialists instantly through our user-friendly platform. Access comprehensive medical care and book appointments hassle-free.
            </p>
            <div className="flex lg:flex-row flex-col">
              <button className="btn btn-warning mr-5">Explore More</button>
              <button className="btn btn-outline btn-secondary">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="lg:w-[1280px] lg:h-[600px] w-[300px] h-auto rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="text-white space-y-7 lg:pl-12 pl-3 w-1/3">
            <h2 className="lg:text-6xl lg:w-[378px] lg:h-[300px] text-2xl font-bold">Connecting Patients with Trusted Doctors</h2>
            <p className="lg:w-[378px] lg:h-[96px] w-[300px] h-[96px]">
            Connect with top-rated doctors and specialists instantly through our user-friendly platform. Access comprehensive medical care and book appointments hassle-free.
            </p>
            <div className="flex lg:flex-row flex-col">
              <button className="btn btn-warning mr-5">Explore More</button>
              <button className="btn btn-outline btn-secondary">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner