import React from 'react'
import girl1Img from "../assets/img/girl1.png";
import girl2Img from "../assets/img/girl2.png";
import backlogoImg from "../assets/img/backlogo.svg";
import guy1Img from "../assets/img/guy1.png";
import girl3Img from "../assets/img/girl3.png";
import guy2Img from "../assets/img/guy2.png";
import guy3Img from "../assets/img/guy3.png";


export const AboutSection = () => {
  return (
    <section className="about" id="about">
    <div className="container">
        <div className="about__contents">
          <div className="about__contents__left">
              <div className="about__contents__left__img" data-aos="fade-zoom-in" data-aos-delay="100" data-aos-duration="1000" data-aos-offset="0">
                  <div className="about__contents__left__img__flip">
                      <div className="front">
                          <img src={girl1Img} alt="girl1" width="195px" height="210px"/>
                      </div>
                      <div className="back">
                        <img src={backlogoImg} alt="backlogo" width="112.23px" height="132.77px"/>
                      </div>
                  </div>
              </div>
              <div className="about__contents__left__img" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="0">
                <div className="about__contents__left__img__flip">
                    <div className="front">
                        <img src={girl2Img} alt="girl2" width="195px" height="210px"/>
                    </div>
                    <div className="back">
                      <img src={backlogoImg} alt="backlogo" width="112.23px" height="132.77px"/>
                    </div>
                </div>
              </div>
              <div className="about__contents__left__img" data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="0">
                <div className="about__contents__left__img__flip">
                    <div className="front">
                        <img src={guy1Img} alt="guy1" width="195px" height="210px"/>
                    </div>
                    <div className="back">
                      <img src={backlogoImg}alt="backlogo" width="112.23px" height="132.77px"/>
                    </div>
                </div>
              </div>
              <div className="about__contents__left__img" data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="0">
                <div className="about__contents__left__img__flip">
                    <div className="front">
                        <img src={girl3Img} alt="girl3" width="195px" height="210px"/>
                    </div>
                    <div className="back">
                      <img src={backlogoImg} alt="backlogo" width="112.23px" height="132.77px"/>
                    </div>
                </div>
              </div>
              <div className="about__contents__left__img" data-aos="fade-zoom-in" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="0">
                <div className="about__contents__left__img__flip">
                    <div className="front">
                        <img src={guy2Img} alt="guy2" width="195px" height="210px"/>
                    </div>
                    <div className="back">
                      <img src={backlogoImg} alt="backlogo" width="112.23px" height="132.77px"/>
                    </div>
                </div>
            </div>
            <div className="about__contents__left__img" data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="1000" data-aos-offset="0">
              <div className="about__contents__left__img__flip">
                  <div className="front">
                      <img src={guy3Img} alt="guy3" width="195px" height="210px"/>
                  </div>
                  <div className="back">
                    <img src={backlogoImg} alt="backlogo" width="112.23px" height="132.77px"/>
                  </div>
              </div>
            </div>
          </div>
          <div className="about__contents__right">
              <div className="about__contents__right__text">
                <h6 data-aos="fade-zoom-in" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="0">ABOUT LOTTO CENTRAL</h6>
                <h2 data-aos="fade-zoom-in" data-aos-delay="600" data-aos-duration="1000" data-aos-offset="0">Lotto Central is India’s ticket to the <br/> <span className="pink">Australia's largest </span><span className="yellow">official lotteries.</span></h2>
                <p data-aos="fade-zoom-in" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="0">We are committed to continuously improving our responsible gaming measures. Feedback from users is valued, and we actively seek ways to enhance our platform's safety and responsible gaming features. <br /><br />
                  <span className="d-xl-block d-md-none d-block">At Lotto Central, we've crafted a seamless and secure platform exclusively for our Indian users, ensuring you can easily purchase tickets for Australia's most exciting lotteries. Our mission is simple – to make the allure of life-changing jackpots accessible to you with just a few clicks.</span>
                </p>
              </div>
          </div>
        </div>
        <p className="py-4" data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="0"> 
          <span className="d-md-block d-xl-none d-none">At Lotto Central, we've crafted a seamless and secure platform exclusively for our Indian users, ensuring you can easily purchase tickets for Australia's most exciting lotteries. Our mission is simple – to make the allure of life-changing jackpots accessible to you with just a few clicks. <br/> <br/></span>
          Trust Lotto Central to be your reliable gateway to the excitement, transparency, and global possibilities of Australian lotteries. Join us on this exhilarating journey, where every ticket holds the potential to transform dreams into reality.</p>
    </div>
  </section>
  )
}
