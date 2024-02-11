import React, { useState, useEffect } from "react";
import lottoImg from "../assets/img/oz_lotto.png";
import sparklingImg from "../assets/img/sparkling.png";
import saturdayImg from "../assets/img/saturday_lotto.png";
import megaLotoImg from "../assets/img/mega_lotto.png";
import megaLotoImg1 from "../assets/img/lootry/mega_jackpot_lottery.webp";
import megaLotoImg3 from "../assets/img/lootry/monday_lotto.png";
import megaLotoImg4 from "../assets/img/lootry/oz_lotto2022.webp";
import megaLotoImg5 from "../assets/img/lootry/powerball2018.webp";
import megaLotoImg6 from "../assets/img/lootry/super_jackpot_lottery.webp";
import megaLotoImg7 from "../assets/img/lootry/saturday_lotto.webp";
import axios from "axios";
import Timers from "./Timers";
import SignupModal from "../Common/SignupModal";

export const Lotteries = () => {
  const initialDisplayCount = 3; // Initial number of items to display
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const handleSeeAllClick = () => {
    // Update the display count to show all items
    setDisplayCount(LotteriesData.length);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const [LotteriesData, setLotteriesData] = useState([]);
  const allImages = [
    {
      img: megaLotoImg5,
    },
    {
      img: megaLotoImg7,
    },
    {
      img: megaLotoImg4,
    },
    {
      img: megaLotoImg1,
    },
    {
      img: megaLotoImg3,
    },
    {
      img: megaLotoImg3,
    },
    {
      img: megaLotoImg6,
    },
    {
      img: megaLotoImg5,
    },
    {
      img: megaLotoImg4,
    },
    {
      img: megaLotoImg5,
    },
  ];
  const allColor = [
    {
      color: "linear-gradient(180deg, #FEE600 0%, #F39900 100%)",
      background:"linear-gradient(315deg, #27A5E4 5.75%, #2B1357 94.25%)",
      color1:"",
    },
    {
      color: "linear-gradient(180deg, #F13E39 0%, #870000 100%)",
      background:"linear-gradient(315deg, #0081E1 5.75%, #005799 94.25%)",
      color1:"white",
    },
    {
      color: "linear-gradient(180deg, #F4CB00 0%, #E37A3C 43.29%, #CD108A 100%)",
      background:"linear-gradient(315deg, #68D030 5.75%, #0B7338 94.25%)",
      color1:"white",
    },
    {
      color: "linear-gradient(180deg, #FEE600 0%, #F39900 100%)",
      background:"linear-gradient(315deg, #CD108A 5.75%, #B30074 94.25%)",
      color1:"",
    },
    {
      color: "linear-gradient(180deg, #F13E39 0%, #870000 100%)",
      background:"linear-gradient(315deg, #0081E1 5.75%, #005799 94.25%)",
      color1:"white",
    },
    {
      color: "linear-gradient(180deg, #F4CB00 0%, #E37A3C 43.29%, #CD108A 100%)",
      background:"linear-gradient(315deg, #0081E1 5.75%, #005799 94.25%)",
      color1:"white",
    },
    {
      color: "linear-gradient(180deg, #FEE600 0%, #F39900 100%)",
      background:"linear-gradient(315deg, #00C7E5 5.75%, #01AAC4 94.25%)",
      color1:"",
    },
    {
      color: "linear-gradient(180deg, #F13E39 0%, #870000 100%)",
      background:"linear-gradient(315deg, #CD108A 5.75%, #B30074 94.25%)",
      color1:"white",
    },
    {
      color: "linear-gradient(180deg, #F4CB00 0%, #E37A3C 43.29%, #CD108A 100%)",
      background:"linear-gradient(315deg, #0081E1 5.75%, #005799 94.25%)",
      color1:"white",
    },
    
  ];
  const imageSources = [
    sparklingImg,
    saturdayImg,
    megaLotoImg,
    // Add more image paths as needed
  ];
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
  };
  const getLotteries = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.lottocentral.in/dev/lotteries/get`
      );
      if (res.status === 200) {
        console.log("dataaaa", res?.data);
        setLotteriesData(res?.data);
      }
      console.log("total lotteries", res?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLotteries();
  }, []);

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };
  return (
    <React.Fragment>
      <section className="gallery" id="lottery">
        {isLoading && (
          <div className="create-company-container">
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="gallery__intro">
            <h2
              data-aos="fade"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-offset="0"
              data-aos-once="true"
            >
              Lotteries currently running
            </h2>
            {LotteriesData &&
              LotteriesData.length === 0 &&
              "No Lotteries to Show"}
          </div>
          <div
            className="gallery__content"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="gallery__content__slider">
              <div
                className="swiper gallerySlider"
                data-id="slider5"
                id="slider5"
              >
                <ul className="swiper-wrapper">
                  {LotteriesData &&
                    LotteriesData.slice(0, displayCount).map((item, index) => (
                      <li
                        key={index}
                        className="swiper-slide gallerySlider__single green"
                        style={{
                          background: item.color && item.color!=="undefined" ?` linear-gradient(0deg, ${hexToRgba(
                            item.color,
                            0.35
                          )} 20.13%, ${hexToRgba(item.color, 0.85)} 91.36%)` : `${allColor[index] && allColor[index].background ? allColor[index].background : "linear-gradient(0deg, rgba(32, 74, 135, 0.35) 20.13%, rgba(32, 74, 135, 0.85) 91.36%)"}`,
                          // background: `linear-gradient(6deg, ${item.color} 20.13%, rgba(68, 175, 255, 0.85) 91.36%)`
                          // background: `${item.color}`,
                        }}
                      >
                        <div className="gallerySlider__single__content">
                          <div
                            className="left"
                            style={{ paddingBottom: "8px", paddingTop: "8px" }}
                          >
                            <div className="top" >
                              {/* <img
                              // style={{height:"auto"}}
                                // src={item.imageUrl ? item.imageUrl : lottoImg}
                                src={item.image ? `${"https://api.lottocentral.in/dev/images/uploads/"+item.image}` : allImages[index] && allImages[index].img ? allImages[index].img : lottoImg }
                                alt="chatLogo"
                                width="140"
                                height="58"
                              /> */}
                                <div className="lottoImage" style={{backgroundImage: `url(${item.image ? `${"https://api.lottocentral.in/dev/images/uploads/"+item.image}` : allImages[index] && allImages[index].img ? allImages[index].img : lottoImg })`}}></div>
                            </div>
                            <div
                              className="middle"
                              style={{
                                paddingBottom: "12px",
                                paddingTop: "4px",
                                textAlign: "left",
                              }}
                            >
                              <h4>
                                {" "}
                                {item.name ? item.name : "N/A"}{" "}
                              </h4>
                              <h5>
                                {" "}
                                <Timers
                                  endTime={item.expiryTime && item.expiryTime}
                                  startTime={item.startTime && item.startTime}
                                />
                              </h5>
                            </div>
                            <div className="below">
                              <button
                                className="main__btn"
                                onClick={onOpenModal}
                              >
                                OPEN NOW
                              </button>
                            </div>
                          </div>
                          <div className="right" style={{background:`${allColor[index] && allColor[index].color && allColor[index].color}`, color: `${allColor[index] && allColor[index].color1 && allColor[index].color1 }`}}>
                            <h5>
                              ₹{" "}
                              <span style={{ fontSize: "4rem" }}>
                                {item.price ? item.price : "N/A"}
                              </span>
                            </h5>
                            <h6>{item.priceType && item.priceType!=="undefined" ? item.priceType : "N/A"}</h6>
                          </div>
                        </div>

                        <div className="gallerySlider__single__img">
                          <img
                            src={sparklingImg}
                            alt="chatThumb"
                            width="474"
                            height="320"
                          />
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
              {displayCount && displayCount > 3 ? null : (
                <div className="seeAll">
                  <button
                    className="main__btn btn2"
                    data-aos="fade"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    data-aos-once="true"
                    onClick={handleSeeAllClick}
                  >
                    SEE ALL
                  </button>
                </div>
              )}
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
      </section>
    </React.Fragment>
  );
};
