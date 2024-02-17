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
                <p data-aos="fade-zoom-in" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="0">At lotto central, we pride ourselves on providing a seamless and convenient platform for Indian players to experience the excitement of Australia's biggest lotteries.<br /><br />
                  Our mission is simple: to bring the thrill of Australian jackpots directly to you, regardless of your location in India. We understand the dreams and aspirations of players seeking life-changing wins, and we're dedicated to making those dreams a reality. <br /><span className="d-xl-block d-md-none d-block"> <br />With just a few clicks, you can access a wide range of Australia's best lotteries, including popular games like Powerball, Oz Lotto, Saturday Lotto, Set for Life, and many more.</span>
                </p>
              </div>
          </div>
        </div>
        <p className="py-4" data-aos="fade-zoom-in" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="0"> 
          <span className="d-md-block d-xl-none d-none">With just a few clicks, you can access a wide range of Australia's best lotteries, including popular games like Powerball, Oz Lotto, Saturday Lotto, Set for Life, and many more. <br/> <br/></span>
          
          
          Our user-friendly interface ensures a hassle-free experience, allowing you to easily select your favourite games, purchase tickets, and track your winnings—all from the comfort of your home or on the go.
          <br /><br />We prioritize the security of your transactions and personal information. Our platform employs state-of-the-art encryption technology and adheres to strict security protocols to safeguard your data and ensure a safe gaming environment.
          <br /><br />Join today and your next big win could be just a click away!
        </p>
    </div>
  </section>
  )
}
