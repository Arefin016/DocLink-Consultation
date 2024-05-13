import { Fade } from "react-awesome-reveal"
import { Cursor, useTypewriter, } from "react-simple-typewriter"


const FrequentlyAsk = () => {

    const [text] = useTypewriter({
        words: ['Frequently Ask Question'],
        loop:{},
    })
    return (
        <div className="bg-slate-200 lg:my-10 my-5 py-5">
        <h2 className="my-5 text-center font-bold text-black text-3xl">
          {text}<Cursor></Cursor>
        </h2>
        <Fade direction="right">
        <p className="text-center text-xl my-5">Welcome to Doclink Consultation! Here are  a quick overview.Connect remotely with qualified <br /> doctors for medical advice and prescriptions.Have questions? Check out our FAQs below!</p>
        </Fade>
        <Fade direction="right">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-bold">
          What is Doclink Consultation?
          </div>
          <div className="collapse-content">
              <p>
              Doclink Consultation is a service provided by our company that connects individuals with qualified doctors for medical consultations remotely, typically via video calls or messaging platforms.
              </p>
          </div>
        </div>
        </Fade>
        <Fade direction="left">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold">
          How does Doclink Consultation work?
          </div>
          <div className="collapse-content">
              <p>
              Patients can book an appointment through our platform and select a suitable time slot. At the scheduled time, they connect with the doctor through video conferencing or messaging to discuss their medical concerns.
              </p>
          </div>
        </div>
        </Fade>
        <Fade direction="right">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold">
          What types of medical issues can be addressed through Doclink Consultation?
          </div>
          <div className="collapse-content">
              <p>
              Doclink Consultation covers a wide range of non-emergency medical issues, including but not limited to general health queries, medication management, chronic disease management, mental health concerns, and follow-up consultations.
              </p>
          </div>
        </div>
        </Fade>
        <Fade direction="left">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold">
          Are the doctors qualified and licensed?
          </div>
          <div className="collapse-content">
              <p>
              Yes, all doctors participating in Doclink Consultation are fully qualified and licensed professionals with appropriate certifications and credentials.
              </p>
          </div>
        </div>
        </Fade>
        <Fade direction="left">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-bold">
          Is Doclink Consultation covered by insurance?
          </div>
          <div className="collapse-content">
              <p>
              Coverage may vary depending on your insurance provider and plan. We recommend contacting your insurance company to inquire about coverage for telemedicine services.
              </p>
          </div>
        </div>
        </Fade>
      </div>
    );
};

export default FrequentlyAsk;