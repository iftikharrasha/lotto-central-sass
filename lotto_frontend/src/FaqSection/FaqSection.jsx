import React, { useState } from "react";

export const FaqSection = () => {
  const faqSection = [
    {
      id: 1,
      question: "How Does Lotto Central Simplify Gaming Transactions?",
      answer:
        "Lotto Central revolutionizes the gaming experience by eliminating physical tills both online and offline. Our contextual services ensure seamless customer journeys, enabling frictionless payments, making your gaming interactions hassle-free.",
      show: false,
    },
    {
      id: 2,
      question:
        "What Measures Does Lotto Central Take to Ensure Responsible Gaming?",
      answer:
        "At Lotto Central, responsible gaming is a priority. We value user feedback and are dedicated to enhancing safety features continually. Our platform is designed to prioritize the well-being of our users while maintaining the excitement of lottery gaming.",
      show: false,
    },
    {
      id: 3,
      question: "What Makes Lotto Central Different for Indian Users?",
      answer:
        "Lotto Central provides an exclusive and secure platform tailored for Indian users. With us, you can effortlessly purchase tickets for Australia's most thrilling lotteries. Our mission is simple: to make life-changing jackpots easily accessible to you with just a few clicks.",
      show: false,
    },
    {
      id: 4,
      question:
        " How Does Lotto Central Empower Users with Global Lottery Opportunities?",
      answer:
        "Trust Lotto Central to be your gateway to the excitement, transparency, and vast possibilities of Australian lotteries. Join us on this exhilarating journey where every ticket purchased holds the potential to turn your dreams into reality.",
      show: false,
    },
  ];

  const [faqs, setFaqs] = useState(faqSection);

  const handleClick = (id) => {
    setFaqs((prevFaqs) => 
      prevFaqs.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            show: !item.show,
          };
        } else {
          return {
            ...item,
            show: false,
          };
        }
      })
    );
  };
  

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__intro">
          <h2
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="0"
          >
            Frequently asked questions
          </h2>
        </div>
        <div
          className="faq__accordions"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          <ul>
            {faqs &&
                faqs.map((item, index) => (
                <li
                  key={index}
                  className={`accordions__item ${item.show ? "open" : ""}`}
                  onClick={()=>{
                    handleClick(item.id)
                  }}
                >
                  <button className="accordions__control" aria-expanded="false">
                    <span className="accordions__title">{item.question}</span>
                    <span className="accordions__icon"></span>
                  </button>
                  <div className="accordions__text" aria-hidden="true">
                    <p>{item.answer}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
