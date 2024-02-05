import React from 'react'
import backlogoImg from "../assets/img/backlogo.svg";
import facebookImg from "../assets/img/facebook.svg";
import tiktokImg from "../assets/img/tiktok.svg";
import instaImg from "../assets/img/insta.svg";


export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__quick">
      <div className="text-center" style={{textAlign:"center"}}>
        <img src={backlogoImg} alt="backlogo" width="112.23px" height="132.77px" />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
            <a href="#lottery">Lottery</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#faq">FAQ</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
      <div className="container">
        <div className="footer__links">
          <div className="social-icons">
           <div className="copyright">
              <h6> © 2024 lottocentral</h6>
              <ul>
                  <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="0"><a href="#" target="_blank" rel="noopener noreferrer"><img src={facebookImg} alt="facebook" width="24px" height="24px"/></a></li>
                  <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="650" data-aos-duration="1000" data-aos-offset="0"><a href="#" target="_blank" rel="noopener noreferrer"><img src={tiktokImg} alt="tiktok" width="24px" height="24px"/></a></li>
                  <li data-aos="fade-zoom-in" data-aos-easing="fade-up" data-aos-delay="600" data-aos-duration="1000" data-aos-offset="0"><a href="#" target="_blank" rel="noopener noreferrer"><img src={instaImg} alt="instagram" width="24px" height="24px"/></a></li>
              </ul>
           </div>
           <p>By using lottocentral.in, you are acknowledging your understanding of and agreement to these responsible gaming principles. We believe in shared responsibility, and together, we can ensure that online gaming remains a positive and enjoyable experience for all.</p>
        </div>
        </div>
      </div>
  </footer> 
  )
}
