import React from 'react'
import accessImg from "../assets/img/access.png";
import secureImg from "../assets/img/secure.png";
import winsImg from "../assets/img/wins.png";
import tailoredImg from "../assets/img/tailored.png";
export const Features = () => {
  return (
    <section className="features">
    <div className="container">
        <div className="features__intro">
          <h2 data-aos="fade" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="0">India’s ticket to Australia’s largest official lotteries online</h2>
        </div>
        <div className="features__contents">
            <div className="item" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="0">
                <img src={accessImg} alt="access"/>
                <h2>Seamless Access</h2>
                <p>Enter Australian lotteries for unparalleled winning opportunities</p>
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" data-aos-offset="0">
                <img src={secureImg} alt="secure"/>
                <h2>Secure Transactions</h2>
                <p>Protected payments ensure safe participation and financial security.</p>
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" data-aos-offset="0">
                <img src={winsImg} alt="wins"/>
                <h2>Guaranteed Wins</h2>
                <p>Exclusive entry increases odds, enhancing your chances of winning.</p>
            </div>

            <div className="item" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" data-aos-offset="0">
                <img src={tailoredImg} alt="tailored"/>
                <h2>Tailored Experience</h2>
                <p>User-centric design for seamless and enjoyable participation from India.</p>
            </div>
        </div>
    </div>
  </section>
  )
}
