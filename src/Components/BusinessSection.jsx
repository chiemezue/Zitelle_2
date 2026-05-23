import React from "react";
import VerticalTextSlider from "./VerticalTextSlider";

const BusinessSection = () => {
  const businesses = [
    {
      title: "Soap Production",
      description:
        "Premium quality soaps carefully produced for everyday hygiene and household use across Nigeria.",
      image:
        "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29hcHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      title: "Plywood Industry",
      description:
        "Durable and refined plywood materials manufactured for construction and furniture solutions.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Packaging Solutions",
      description:
        "Modern packaging systems designed to preserve product quality and support distribution needs.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    },

    {
      title: "Cooking Oil",
      description:
        "Pure and healthy cooking oil processed with high production standards for homes and businesses.",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="business">
      {/* ───────── TOP CONTENT ───────── */}

      <div className="business__top">
        <div className="business__label">
          <span>Our Businesses</span>

          <div className="business__line"></div>
        </div>

        <h2 className="about__title">
          <VerticalTextSlider
            staticText="We Manufacture"
            words={["Soap", "Cooking Oil", "Plywood", "Packaging"]}
          />
        </h2>

        <p className="about__text">
          Four industries. One standard. We manufacture and supply essential
          products that serve homes, retailers, and businesses across Nigeria.
          Built on reliability, quality assurance, and the capacity to deliver
          at scale.
        </p>
      </div>

      {/* ───────── BUSINESS GRID ───────── */}

      <div className="business__grid">
        {businesses.map((item, index) => (
          <div className="business__card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="business__image"
            />

            <div className="business__overlay">
              <div className="business__overlay-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
