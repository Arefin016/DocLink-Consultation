import { Fade } from "react-awesome-reveal"
import { Cursor, useTypewriter } from "react-simple-typewriter"

const LearningSteps = () => {
  const [text] = useTypewriter({
    words: ["ow Does It Work?"],
    loop: {},
  })

  return (
    <div>
      <Fade direction="right" data-aos-duration="2000">
        <div className="text-center my-5">
          <h2 className="text-3xl font-bold">
            H{text}
            <Cursor></Cursor>
          </h2>
          <p className="text-xl text-gray-500">
            Guidelines for using our website
          </p>
        </div>
      </Fade>
      <Fade direction="right" data-aos-duration="2000">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {/* this is the first card */}
          <Fade direction="right" data-aos-duration="2000">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body space-y-5 bg-slate-200 rounded-2xl">
                <img
                  className="w-24 h-24 lg:ml-[73px] ml-10"
                  src="https://www.medicusunion.com/images/how_it_works/icons/icon_1.svg"
                  alt=""
                />
                <h2 className="text-xl font-semibold text-center">Step-1</h2>
                <p className="text-center">
                  Register on the MedicusUnion website or the App
                </p>
              </div>
            </div>
          </Fade>
          {/* this is the Second card */}
          <Fade direction="right" data-aos-duration="2000">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body space-y-5 bg-slate-200 rounded-2xl">
                <img
                  className="w-24 h-24 lg:ml-[73px] ml-10"
                  src="https://www.medicusunion.com/images/how_it_works/icons/icon_2.svg"
                  alt=""
                />
                <h2 className="text-xl font-semibold text-center">Step-2</h2>
                <p className="text-center">
                  Search for the desired specialist in the Find a physician
                  section
                </p>
              </div>
            </div>
          </Fade>
          {/* this is the Third card */}
          <Fade direction="right" data-aos-duration="2000">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body space-y-5 bg-slate-200 rounded-2xl">
                <img
                  className="w-24 h-24 lg:ml-[73px] ml-10"
                  src="https://www.medicusunion.com/images/how_it_works/icons/icon_3.svg"
                  alt=""
                />
                <h2 className="text-xl font-semibold text-center">Step-3</h2>
                <p className="text-center">
                  Pick a date and time, describe your medical history and
                  request an online consultation
                </p>
              </div>
            </div>
          </Fade>
          {/* this is the Fourth card */}
          <Fade direction="right" data-aos-duration="2000">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body space-y-5 bg-slate-200 rounded-2xl">
                <img
                  className="w-24 h-24 lg:ml-[73px] ml-10"
                  src="https://www.medicusunion.com/images/how_it_works/icons/icon_4.svg"
                  alt=""
                />
                <h2 className="text-xl font-semibold text-center">Step-4</h2>
                <p className="text-center">
                  Receive an appointment confirmation before starting your
                  consultation
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  )
}

export default LearningSteps
