import React, { useState } from "react";

export const FaqSection = () => {
  const faqSection = [
    {
      id: 1,
      question: "How does lotto central work for Indian users?",
      answer:
        "Lotto central provides a platform for Indian users to participate in Australian lottery draws from India. When you choose to play the lottery draws on our website, our agents at a network of local offices physically purchase official lottery tickets on your behalf. Your tickets are scanned and uploaded to your personal account before the draw. You will be informed of your winnings immediately and will receive the full amount of the prize without having to pay us any commissions.",
      show: false,
    },
    {
      id: 2,
      question:
        "Who is eligible to purchase lottery tickets on lotto central?",
      answer:
        "Lotto central welcomes customers from all over the world but is not intended for individuals under the age of eighteen (18). Individuals under the age of 18 are prohibited from registering an account and/or using our services.",
      show: false,
    },
    {
      id: 3,
      question: "Which Australian lottery games can I play on lotto central?",
      answer:
        "Lotto central offers a wide selection of popular Australian lottery games, including Powerball, Oz Lotto, Saturday Lotto, Set for Life, and more. You can explore and choose from a variety of games with varying jackpot sizes and draw frequencies.",
      show: false,
    },
    {
      id: 4,
      question:
        "How can I be sure I'll receive my winnings?",
      answer:
        "Our pay-out system is fully automated and regularly audited. Winnings are swiftly transferred to your account upon receipt. Big prize winners are extended the option to go and collect their prizes personally. For wins under $10,000, we'll notify you via email and update your lotto central account. Wins over $10,000 prompt a direct telephone call to share the exciting news personally.",
      show: false,
    },
    {
      id: 5,
      question:
        "Do I have to expose my personal details if I win?",
      answer:
        "If you win a lottery prize on tickets purchased at lotto central, non-identifying information (first name, first letter of your last name, and country of residence) will be automatically published in the Winners section on the homepage of our site. If you wish to cancel this display, please contact customer service. If you win a lottery jackpot, the requirements of the official lottery organisation apply.",
      show: false,
    },
    {
      id: 6,
      question:
        "Can I get my money back if I am not satisfied with my purchase?",
      answer:
        "At lotto central we take great pride in the service we provide. If, for whatever reason, you are not completely satisfied with our service, we will refund your first purchase in full, guaranteed.",
      show: false,
    },
    {
      id: 7,
      question:
        "Is it safe to play on lotto central?",
      answer:
        "Absolutely, safety is our top priority at lotto central. We understand the importance of keeping your personal information secure, and we take extensive measures to ensure that your data is always protected. When you play on lotto central, you can trust that your personal data is handled with the utmost care and confidentiality. We employ industry-standard encryption protocols to safeguard your information from unauthorized access, ensuring that your sensitive details remain private and secure.",
      show: false,
    },
    {
      id: 8,
      question:
        "How can I contact lotto central for further assistance or inquiries?",
      answer:
        "If you have any questions or require assistance, our customer support team is here to help. You can reach us via email hello@lottocentral.in or through the contact form on our website. We strive to provide timely and helpful support to all our users.",
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
