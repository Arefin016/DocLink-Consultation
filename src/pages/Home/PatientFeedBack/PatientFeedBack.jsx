import img1 from "../../../assets/images/img5.png"
import img2 from "../../../assets/images/img6.png"
import img3 from "../../../assets/images/img7.png"
import { Fade } from "react-awesome-reveal"
import { Cursor, useTypewriter } from "react-simple-typewriter"

const PatientFeedBack = () => {
  const [text] = useTypewriter({
    words: ["estimonials"],
    loop: {},
  })

  return (
    <Fade direction="right">
      <div>
        <Fade direction="right">
          <div className="text-center my-5">
            <h2 className="text-3xl font-bold">
              T{text}
              <Cursor></Cursor>
            </h2>
            <p className="text-xl text-gray-500">
              What our patients think about us
            </p>
          </div>
        </Fade>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5 lg:mt-10 mt-5">
          {/* First card */}
          <Fade direction="right" data-aos-duration="2000">
            <div className="card w-96 bg-gray-300 shadow-xl">
              <div className="text-center">
                <div className="rating rating-md pt-5">
                  <p className="font-semibold text-xl mr-3">5</p>
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="card-body">
                <p>
                  Doclink Consult exceeded my expectations in every aspect. The
                  website is user-friendly interface made booking my
                  consultation a breeze. During the appointment, the doctor was
                  attentive and knowledgeable, addressing all my concerns with
                  empathy and expertise. I am impressed by the seamless
                  experience from start to finish and would highly recommend
                  Doclink Consult to anyone seeking reliable medical advice.
                </p>
                <div className="avatar">
                  <div className="w-16 rounded-full mr-5">
                    <img src={img1} />
                  </div>
                  <h2 className="card-title">Arefin Ahmed</h2>
                </div>
              </div>
            </div>
          </Fade>
          {/* Second card */}
          <Fade direction="right" data-aos-duration="2500">
            <div className="card w-96 bg-gray-300 shadow-xl">
              <div className="text-center">
                <div className="rating rating-md pt-5">
                  <p className="font-semibold text-xl mr-3">4.8</p>
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="card-body">
                <p>
                  I am incredibly satisfied with the service provided by Doclink
                  Consult. Navigating through the website to schedule my
                  appointment was effortless, and the virtual consultation
                  platform worked flawlessly. The doctor I consulted with was
                  not only professional but also genuinely caring, taking the
                  time to listen to my health issues and providing personalized
                  recommendations. Doclink Consult has earned my trust, and I
                  will definitely be returning for future medical needs.
                </p>
                <div className="avatar">
                  <div className="w-16 rounded-full mr-5">
                    <img src={img2} />
                  </div>
                  <h2 className="card-title">Akilur Rahman</h2>
                </div>
              </div>
            </div>
          </Fade>
          {/* Third card */}
          <Fade direction="right" data-aos-duration="3000">
            <div className="card w-96 bg-gray-300 shadow-xl">
              <div className="text-center">
                <div className="rating rating-md pt-5">
                  <p className="font-semibold text-xl mr-3">4.5</p>
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="card-body">
                <p>
                  Doclink Consult has revolutionized the way I approach
                  healthcare. The convenience of being able to consult with a
                  qualified doctor from the comfort of my home is unparalleled.
                  My recent experience with Doclink Consult was nothing short of
                  exceptional. The doctor I spoke with was thorough,
                  compassionate, and incredibly knowledgeable. I left the
                  consultation feeling reassured and equipped with a clear
                  understanding of my health condition and treatment options.
                  Thank you, Doclink Consult, for making quality healthcare
                  accessible and convenient.
                </p>
                <div className="avatar">
                  <div className="w-16 rounded-full mr-5">
                    <img src={img3} />
                  </div>
                  <h2 className="card-title">Sagor Ahmed</h2>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}

export default PatientFeedBack
