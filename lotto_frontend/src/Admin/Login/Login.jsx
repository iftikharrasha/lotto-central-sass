import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import contactImg from "../../assets/img/contact.png";
import "../../App.css";
import toast, { Toaster } from 'react-hot-toast';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState(null);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log("formdata", formdata);
   
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://lotto-central-alb-1507961793.ap-south-1.elb.amazonaws.com/dev/users/login",
        formdata
      );

      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.token);
        navigate("/dashboard");
        console.log("access_token", response.data);
        setIsLoading(false);
        toast.success("Successfully Login!");
      }
    } catch (error) {
      setIsLoading(false);
      if(error.response.data.status === 400){
        toast.error("Credential misMatch!");
      }
      console.error("An error occurred:", error.response.data.message);
      // setEmptyInput(error.response.data.message);
    }

    // e.target.reset();
    setFormData({
      username:"",
      password:"",
    })
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
      <section
        className="contact marginTop"
        id="contact"
        style={{ marginBottom: "10rem" }}
      >
        <div className="container">
          <div
            className="contact__contents"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="contact__contents__below">
              <div className="contact__contents__left">
                <h6
                  data-aos="fade-zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Enter Credentials
                </h6>

                <form>
                  <div className="fields">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={handlechange}
                      value={formdata && formdata.username}
                      required
                      data-aos="fade-zoom-in"
                      data-aos-delay="800"
                      data-aos-duration="1000"
                      data-aos-offset="0"
                    />
                    <input
                      type="Password"
                      name="password"
                      placeholder="Password"
                      onChange={handlechange}
                      value={formdata && formdata.password}
                      required
                      data-aos="fade-zoom-in"
                      data-aos-delay="1000"
                      data-aos-duration="1000"
                      data-aos-offset="0"
                    />
                    <a href="#" className="navBtn">
                      <button
                        type="submit"
                        className="main__btn"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                        data-aos-duration="1000"
                        data-aos-offset="0"
                        onClick={handleSubmit}
                      >
                        LOGIN
                      </button>
                    </a>
                  </div>
                </form>
              </div>
              <div className="contact__contents__right">
                <img
                  className="thumb"
                  src={contactImg}
                  alt="contact"
                  width="591px"
                  height="372px"
                  data-aos="fade-zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
