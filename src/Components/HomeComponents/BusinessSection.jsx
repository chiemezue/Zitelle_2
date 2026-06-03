import React from "react";
import VerticalTextSlider from "../VerticalTextSlider";
import { Link } from "react-router-dom";

const BusinessSection = () => {
  const businesses = [
    {
      title: "Soap Production",
      description:
        "Premium quality soaps carefully produced for everyday hygiene and household use across Nigeria.",
      image: "/zitelle pictures/soap3.jpg",
      link: "/services/soap",
    },

    {
      title: "Plywood Industry",
      description:
        "Durable and refined plywood materials manufactured for construction and furniture solutions.",
      image: "/zitelle pictures/plywood5.jpg",
      link: "/services/plywood",
    },

    {
      title: "Packaging Solutions",
      description:
        "Modern packaging systems designed to preserve product quality and support distribution needs.",
      image: "/zitelle pictures/18litres.jpg",
      link: "/services/packaging",
    },

    {
      title: "Cooking Oil",
      description:
        "Pure and healthy cooking oil processed with high production standards for homes and businesses.",
      image: "/zitelle pictures/4litres oil2.png",
      link: "/services/cooking-oil",
    },
  ];

  return (
    <section className="business">
      <div className="section-top">
        <div className="section-label">
          <span>Our Businesses</span>
          <div className="section-line"></div>
        </div>

        <h2 className="about__title">
          <VerticalTextSlider
            staticText="We Manufacture"
            words={["Soap", "Cooking Oil", "Plywood", "Packaging"]}
          />
        </h2>

        <p className="section-text">
          Four industries. One standard. We manufacture and supply essential
          products that serve homes, retailers, and businesses across Nigeria.
          Built on reliability, quality assurance, and the capacity to deliver
          at scale.
        </p>
      </div>

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
                <div className="business__divider" />
                <p>{item.description}</p>
              </div>
              <Link to={item.link} className="business__read-more">
                <span>READ MORE</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
