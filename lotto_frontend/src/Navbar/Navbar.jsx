import React, { useState } from "react";
import "../App.css";
import Modal from "react-modal";
import headerImg from "../assets/img/lotto-central.png";
import homeImg from "../assets/img/home.svg";
import lotteryImg from "../assets/img/lottery.svg";
import aboutImg from "../assets/img/about.svg";
import faqImg from "../assets/img/faq.svg";
import supportImg from "../assets/img/support.svg";
import facebookImg from "../assets/img/facebook.svg";
import instaImg from "../assets/img/insta.svg";
import tiktokImg from "../assets/img/tiktok.svg";
import tickImg from "../assets/img/tick.png";
import arrowImg from "../assets/img/arrow.png";
import axios from "axios";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isTokenValid = localStorage.getItem("access_token");

  console.log("location", location);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const handleKeypress = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && error !== "Email is invalid") {
      if (email !== null) {
        handleClick();
      }
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "30%",
      transform: "translate(-50%, -50%)",
      borderRadius: "1rem",
      //   background: linear-gradient(40deg, rgba(161, 198, 221, 0.5), rgba(161, 198, 221, 0.225)),
    },
  };
  if (window.innerWidth <= 600) {
    customStyles.content.width = "90%"; // Adjust the width for smaller screens
  }

  const handleClick = async () => {
    console.log("email", email);
    onCloseModal();
    // toast.error("User already exists!");
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://lotto-central-alb-1507961793.ap-south-1.elb.amazonaws.com/dev/inquiry/user/create",
        { email: email }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Successfully signed up!");
      }
      console.log("responseresponse", response);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response.data.status === 400) {
        toast.error("User already exists!");
      }
      console.error("An error occurred:", error.response);
      // setEmptyInput(error.response.data.message);
    }
  };
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Toaster />

      {isLoading && (
        <div className="create-company-container">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      )}
      <header className="header" id="header" style={{ background: "#0E0C31", zIndex:"99999" }}>
        <div className="container" style={{ width: "100%" }}>
          <div className="header-contents">
            <div
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <a href="index.html" data-aos="flip-up">
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
                      <button className="main__btn">Login</button>
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
          <Modal
            isOpen={open}
            onRequestClose={onCloseModal}
            style={customStyles}
          >
            <div style={{ padding: "1rem" }}>
              <h2 style={{ color: "black" }}>SIGNUP</h2>
              <div>
                <form>
                  <div
                    className="fields"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        className="inputStyle"
                        style={{
                          // borderBottom: "1px solid ",
                          borderRadius: "8px",
                          background: "white",
                          border: "1px solid black",
                        }}
                        // onKeyPress={handleKeypress}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => {
                          e.preventDefault();
                          e.persist();
                          if (!isValidEmail(e.target.value)) {
                            setError("Email is invalid");
                          } else {
                            setError(null);
                          }
                          setEmail(e.target.value);
                        }}
                        required
                      />
                      {error && error === "Email is invalid" && email ? (
                        <img src={arrowImg} alt="home" width="24" height="24" />
                      ) : email !== null ? (
                        <img
                          src={tickImg}
                          alt="home"
                          width="24"
                          height="24"
                          style={{ cursor: "pointer" }}
                          onClick={handleClick}
                        />
                      ) : null}
                    </div>
                    {error && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        {error}
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        )}
      </header>
    </React.Fragment>
  );
};
