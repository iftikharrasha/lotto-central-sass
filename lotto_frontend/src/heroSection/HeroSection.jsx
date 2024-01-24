import React from 'react'
import coinImg from "../assets/img/coins.png";
export const HeroSection = () => {
  return (
    <section className="hero" id="home">
    <div className="container">
      <div className="hero__content">
        <div className="hero__content__left">
          <h1 data-aos="fade" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">Play <span className="yellow">Australian</span> <br/> <span className="yellow">Jackpots</span> from <span className="pink">India</span></h1>
          <p data-aos="fade" data-aos-delay="700" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">Lotto centrals  makes daily live easier and that in a safe way, by eliminating the till in all situations, on- and offline. Lotto central contextual services enable seamless customer journeys, including frictionless payments.</p>
          <a href="#signup" data-aos="flip-up" className="navBtn">
            <button className="main__btn" data-aos="fade" data-aos-delay="900" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">SIGN UP</button>
          </a>
        </div>
        <div className="hero__content__right">
          <img src={coinImg} alt="coins" width="546px" height="401px" data-aos="fade" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true" />
        </div>
      </div>
    </div>
  </section>
  )
}
