import React, { useState } from "react";
import contactImg from "../assets/img/contact.png";
import mobileImg from "../assets/img/mobile.png";
import locationImg from "../assets/img/location.png";
import emailImg from "../assets/img/email.png";
import axios from "axios";
import ContactModal from "../Common/ContactModal";

export const CustomerSupport = () => {
  const [formdata, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messagePop, setMessagePop] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const handlechange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("onchnage input", name, value);
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let payload = {
      name: formdata && formdata.name,
      email: formdata && formdata.email,
      message: formdata && formdata.message,
    };

    console.log("lotteryData", formdata);
    if (!formdata || !formdata.name || !formdata.email || !formdata.message) {
        setIsLoading(false);
        onOpenModal();
        setMessagePop({
          title: 'Oops!',
          desc1: `Please fill out all the fields.`,
          desc2: null,
        })
    } else {
      try {
        const response = await axios.post(
          "https://api.lottocentral.in/dev/contact/us/submit",
          payload
        );
        if (response.status === 200 || response.status === 201) {
          setIsLoading(false);
          onOpenModal();
          setMessagePop({
              title: 'Thank you for contacting us!',
              desc1: `We've received your inquiry.`,
              desc2: `We'll get back to you shortly.`,
          })
        }
      } catch (error) {
        setIsLoading(false);
        onOpenModal();
        setMessagePop({
            title: 'Oops!',
            desc1: `Something went wrong in the server,`,
            desc2: `please try again later.`,
        })
      }
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      {isLoading && (
          <div className="create-company-container">
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </div>
      )}
      <div className="container">
        <div className="contact__contents">
          <div className="contact__contents__intro">
            <h2
              data-aos="fade"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              Customer Support
            </h2>
            <p
              data-aos="fade-zoom-in"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              Still have questions to ask? Contact our friendly support team
            </p>
          </div>
          <div className="contact__contents__below">
            <div className="contact__contents__left">
              <h6
                data-aos="fade-zoom-in"
                data-aos-delay="600"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Get in touch
              </h6>
              <p
                data-aos="fade-zoom-in"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                We are here for you, how can we help?
              </p>
              <form>
                <div className="fields">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    onChange={handlechange}
                    value={formdata && formdata.name}
                    required
                    data-aos="fade-zoom-in"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  />
                  <input
                    type="email"
                    placeholder="Your e-mail address"
                    name="email"
                    value={formdata && formdata.email}
                    onChange={handlechange}
                    required
                    data-aos="fade-zoom-in"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  />
                  <textarea
                    rows="5"
                    cols="50"
                    placeholder="Your message"
                    name="message"
                    value={formdata && formdata.message}
                    onChange={handlechange}
                    required
                    data-aos="fade-zoom-in"
                    data-aos-delay="1100"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  ></textarea>

                  <button
                    type="submit"
                    className="main__btn"
                    data-aos="fade-up"
                    data-aos-delay="1200"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    onClick={handleSubmit}
                  >
                    SEND
                  </button>
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
              {/* <ul className="d-md-block d-none">
                <li>
                  <span
                    data-aos="fade-zoom-in"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <img
                      src={locationImg}
                      alt="location"
                      width="30px"
                      height="30px"
                    />
                    674 Washington Avenue, Australia
                  </span>
                </li>
                <li>
                  <span
                    data-aos="fade-zoom-in"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <img
                      src={mobileImg}
                      alt="mobile"
                      width="30px"
                      height="30px"
                    />
                    602-216-4143
                  </span>
                </li>
                <li>
                  <span
                    data-aos="fade-zoom-in"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    <img
                      src={emailImg}
                      alt="email"
                      width="30px"
                      height="30px"
                    />
                    info@lottocentral.com
                  </span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <ContactModal
          open={open}
          error={error}
          messagePop={messagePop}
          onCloseModal={onCloseModal}
          setIsLoading={setIsLoading}
        />
      )}
    </section>
  );
};
