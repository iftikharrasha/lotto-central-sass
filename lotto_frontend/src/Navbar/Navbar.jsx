import React, { useEffect, useState } from "react";
import headerImg from "../assets/img/lotto-central.png";
import homeImg from "../assets/img/home.svg";
import lotteryImg from "../assets/img/lottery.svg";
import aboutImg from "../assets/img/about.svg";
import faqImg from "../assets/img/faq.svg";
import supportImg from "../assets/img/support.svg";
import facebookImg from "../assets/img/facebook.svg";
import instaImg from "../assets/img/insta.svg";
import tiktokImg from "../assets/img/tiktok.svg";
import dashboardImg from "../assets/img/dashboard.svg";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import SignupModal from "../Common/SignupModal";
import LottieAnime from "../Common/LottieAnime";

export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isTokenValid = localStorage.getItem("access_token");
  
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  /********* sticky header ********/
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
      window.addEventListener('scroll', () => {
          const scrollHeight = window.scrollY;
          setScroll(scrollHeight > 50);
      })
  }, []);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="create-company-container">
           <LottieAnime/>
        </div>
      )}
      <header className={scroll ? "header sticky" : "header"} id="header">
        <div className="container" style={{ width: "100%" }}>
          <div className="header-contents">
            <div
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <a href="/" data-aos="flip-up">
                <img
                  className="logo"
                  src={headerImg}
                  alt="logo"
                  width="498px"
                  height="220.5px"
                />
              </a>
            </div>

            <nav className="nav-right">
              <ul>
                {isTokenValid && (
                  <li
                    data-aos="flip-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                  </li>
                )}
                <li
                  data-aos="flip-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <NavLink
                    to={
                      location && location.pathname === "/dashboard" ? "/" : "#"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  data-aos="flip-up"
                  data-aos-delay="250"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <a href="#lottery">Lottery</a>
                </li>
                <li
                  data-aos="flip-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <a href="#about">About</a>
                </li>
                <li
                  data-aos="flip-up"
                  data-aos-delay="550"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <a href="#faq">FAQ</a>
                </li>
                <li
                  data-aos="flip-up"
                  data-aos-delay="650"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <a href="#contact">Support</a>
                </li>
                <li
                  data-aos="flip-up"
                  data-aos-delay="700"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <button className="main__btn" onClick={onOpenModal}>
                    SIGN UP
                  </button>
                </li>
                <NavLink to={"/login"}>
                  <li
                    data-aos="flip-up"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {isTokenValid ? (
                      <button className="main__btn" onClick={handleLogOut}>
                        Logout
                      </button>
                    ) : (
                      null
                    )}
                  </li>
                </NavLink>
              </ul>
            </nav>

            <div
              className={`mobile-design desktop-hidden ${
                openSidebar ? "open" : ""
              }`}
              id="nav-parent"
            >
              <a
                href="#"
                className="nav-toggle toggleItem"
                id="nav-toggle"
                onClick={() => {
                  setOpenSidebar(!openSidebar);
                }}
              >
                <span className="top"></span>
                <span className="mid"></span>
                <span className="bot"></span>
              </a>

              <div className="nav-full">
                <ul>
                  
                  {isTokenValid && (
                    <li
                      data-aos="flip-up"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                      data-aos-once="true"
                    >
                      <NavLink to={"/dashboard"}>
                      <img src={dashboardImg} alt="home" width="24" height="24" /> Dashboard</NavLink>
                    </li>
                  )}
                  <li>
                    <a
                      href={
                        location && location.pathname === "/dashboard"
                          ? "/"
                          : "#"
                      }
                      className="toggleItem"
                      onClick={() => {
                        setOpenSidebar(!openSidebar);
                      }}
                    >
                      <img src={homeImg} alt="home" width="24" height="24" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#lottery"
                      className="toggleItem"
                      onClick={() => {
                        setOpenSidebar(!openSidebar);
                      }}
                    >
                      <img src={lotteryImg} alt="home" width="24" height="24" />
                      Lottery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="toggleItem"
                      onClick={() => {
                        setOpenSidebar(!openSidebar);
                      }}
                    >
                      <img src={aboutImg} alt="home" width="24" height="24" />
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="toggleItem"
                      onClick={() => {
                        setOpenSidebar(!openSidebar);
                      }}
                    >
                      <img src={faqImg} alt="home" width="24" height="24" />
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="toggleItem"
                      onClick={() => {
                        setOpenSidebar(!openSidebar);
                      }}
                    >
                      <img src={supportImg} alt="home" width="24" height="24" />
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navBtn">
                      <button
                        className="main__btn"
                        onClick={() => {
                          setOpenSidebar(!openSidebar);
                          onOpenModal();
                        }}
                      >
                        SIGN UP
                      </button>
                    </a>
                  </li>
                  <li
                    data-aos="flip-up"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {isTokenValid ? (
                      <button className="main__btn" onClick={handleLogOut}>
                        Logout
                      </button>
                    ) : (
                      null
                    )}
                  </li>
                </ul>
                <div className="social-icons">
                  <ul>
                    <li
                      data-aos="fade-zoom-in"
                      data-aos-easing="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-offset="0"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={facebookImg}
                          alt="facebook"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                    <li
                      data-aos="fade-zoom-in"
                      data-aos-easing="fade-up"
                      data-aos-delay="650"
                      data-aos-duration="1000"
                      data-aos-offset="0"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={tiktokImg}
                          alt="tiktok"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                    <li
                      data-aos="fade-zoom-in"
                      data-aos-easing="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                      data-aos-offset="0"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                          src={instaImg}
                          alt="instagram"
                          width="24px"
                          height="24px"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <SignupModal 
            open={open}
            onCloseModal={onCloseModal}
            setIsLoading={setIsLoading}
          />
        )}
      </header>
    </React.Fragment>
  );
};
