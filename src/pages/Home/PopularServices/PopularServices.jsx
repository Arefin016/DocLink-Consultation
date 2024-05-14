import { useEffect, useState } from "react"
import PopularServiceCard from "./PopularServiceCard"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { Fade } from "react-awesome-reveal"

const PopularServices = () => {
  const [text] = useTypewriter({
    words: ["ur Popular Services"],
    loop: {},
  })
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("https://b9-a11-server-sigma.vercel.app/popularServices")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <div className="lg:my-10">
      <Fade direction="right">
        <div className="text-center my-5">
          <h3 className="text-4xl font-bold text-orange-600">
            O{text}
            <Cursor></Cursor>
          </h3>
          <p className="mt-2">
            Comprehensive primary care and specialist referrals.Accessible
            telemedicine, <br /> mental health, and nutrition consultations
          </p>
        </div>
      </Fade>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
        {services.map((service) => (
          <PopularServiceCard
            key={service._id}
            service={service}
          ></PopularServiceCard>
        ))}
      </div>
    </div>
  )
}

export default PopularServices
