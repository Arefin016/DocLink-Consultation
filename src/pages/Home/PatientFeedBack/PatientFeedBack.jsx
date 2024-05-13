import img1 from '../../../assets/images/img5.png'
import img2 from '../../../assets/images/img6.png'
import img3 from '../../../assets/images/img7.png'
import { Fade } from "react-awesome-reveal"
import {  Cursor, useTypewriter } from 'react-simple-typewriter'


const PatientFeedBack = () => {

    const [text] = useTypewriter({
        words: ['What Our customers Say'],
        loop:{},
    })

    return (
       <div className='grid lg:grid-cols-3 grid-cols-1'>
         <section className="testimonials">
        <Fade direction="right">
          <h2 className="text-3xl text-orange-400 font-bold my-3 mb-3">
            {/* What <span className="text-orange-500 text-4xl"> Our customers </span>
            Say */}
            {text}<Cursor></Cursor>
          </h2>
          <p className="text-center mb-5 text-black">Art & Craft House is a haven for creative souls! Exceptional products <br /> and unparalleled service make shopping here a delight</p>
        </Fade>
        <div className="testimonials-container">
          <Fade direction="right">
            <div className="testimonial">
              <Fade direction="right">
                <p>
                  Art And Craft House is a treasure trove of creativity! From
                  handmade delights to crafting essentials, their selection is
                  top-notch. The website intuitive design makes browsing a
                  breeze, and their customer service is unparalleled. Shopping
                  here is a joy, and I always find unique pieces to inspire my
                  next project. Highly recommended for all art enthusiasts!
                </p>
              </Fade>
              <Fade direction="right">
                <div className="testimonial-info">
                  <p>
                    Rafin{" "}
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={img1}
                      alt=""
                    />{" "}
                  </p>
                  <span className="rating">5 stars</span>
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="testimonial">
              <Fade direction="right">
                <p>
                  Art And Craft House is a treasure trove of creativity! From
                  handmade delights to crafting essentials, their selection is
                  top-notch. The website intuitive design makes browsing a
                  breeze, and their customer service is unparalleled. Shopping
                  here is a joy, and I always find unique pieces to inspire my
                  next project. Highly recommended for all art enthusiasts!
                </p>
              </Fade>
              <Fade direction="right">
                <div className="testimonial-info">
                  <p>
                    Sifat
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={img2}
                      alt=""
                    />
                  </p>
                  <span className="rating">4.5 stars</span>
                </div>
              </Fade>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="testimonial">
              <Fade direction="right">
                <p>
                  Art And Craft House is a treasure trove of creativity! From
                  handmade delights to crafting essentials, their selection is
                  top-notch. The website intuitive design makes browsing a
                  breeze, and their customer service is unparalleled. Shopping
                  here is a joy, and I always find unique pieces to inspire my
                  next project. Highly recommended for all art enthusiasts!
                </p>
              </Fade>
              <Fade direction="right">
                <div className="testimonial-info">
                  <p>
                    Rifat
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={img3}
                      alt=""
                    />
                  </p>
                  <span className="rating">4 stars</span>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      </section>
       </div>
    );
};

export default PatientFeedBack;