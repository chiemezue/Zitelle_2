import React, { useState } from "react";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "Quality",

      description:
        "Batch after batch, order after order, our manufacturing process are held to the highest standards, ensuring every product that leaves our facility is safe, reliable and consistent.",
    },

    {
      title: "Innovation",

      description:
        "Continuously investing in production and technology to improve our products, streamline our processes, and stay ahead of market demands. ",
    },

    {
      title: "Sustainability",

      description:
        "Operating with the future generation in mind. Responsible sourcing, reduced waste, and eco-conscious production practices that protects Nigeria’s environment.",
    },

    {
      title: "Scale",

      description:
        "From a single order to a nationwide supply chain, our production facilities are built to grow with your business. No order too large, no partner too small.",
    },

    {
      title: "Impact",

      description:
        "Beyond business, we are committed to uplifting the communities where we operate – creating jobs, supporting local economies, and contributing to Nigeria;s industrial development.",
    },

    {
      title: "Partnership",

      description:
        "We don’t just sell products, we build relationships. Our team is dedicated to understanding your business and growing alongside you, for the long term. ",
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="choose">
      {/* ───────── LEFT CONTENT ───────── */}

      <div className="choose__content">
        <div className="choose__label">
          <span>Why Choose Us</span>

          <div className="choose__line"></div>
        </div>

        <h2 className="choose__title">
          Where Industry Meets World Class Standard.
        </h2>

        <p className="choose__text">
          Built On Quality. Driven By Demand. <br />
        </p>

        <p className="choose__text">
          Everything we do is held to one standard excellence. From our
          manufacturing process to our delivery. We are committed to products
          and partnerships that stand the test of time.
        </p>
      </div>

      {/* ───────── ACCORDION ───────── */}

      <div className="choose__accordion">
        {features.map((item, index) => (
          <div
            className={`choose__item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button
              className="choose__header"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>

              <div className="choose__icon">
                {activeIndex === index ? "×" : "+"}
              </div>
            </button>

            <div
              className={`choose__body ${
                activeIndex === index ? "choose__body--open" : ""
              }`}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
