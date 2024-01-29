import React, {useState} from 'react'
import coinImg from "../assets/img/coins.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Modal from "react-modal";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import tickImg from "../assets/img/tick.png";
import arrowImg from "../assets/img/arrow.png";
export const HeroSection = () => {
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
        "https://api.lottocentral.in/dev/inquiry/user/create",
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
    <section className="hero" id="home">
    <Toaster />

    {isLoading && (
      <div className="create-company-container">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    )}
    <div className="container">
      <div className="hero__content">
        <div className="hero__content__left">
          <h1 data-aos="fade" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">Play <span className="yellow">Australian</span> <br/> <span className="yellow">Jackpots</span> from <span className="pink">India</span></h1>
          <p data-aos="fade" data-aos-delay="700" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">Lotto centrals  makes daily live easier and that in a safe way, by eliminating the till in all situations, on- and offline. Lotto central contextual services enable seamless customer journeys, including frictionless payments.</p>
          <a href="#signup" data-aos="flip-up" className="navBtn">
            <button onClick={onOpenModal} className="main__btn" data-aos="fade" data-aos-delay="900" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true">SIGN UP</button>
          </a>
        </div>
        <div className="hero__content__right">
          <img src={coinImg} alt="coins" width="546px" height="401px" data-aos="fade" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="0" data-aos-once="true" />
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
  </section>
  )
}
