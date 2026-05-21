import React, { useEffect, useState } from "react";

import TypingText from "./TypingText";

const AboutSection = () => {
  /* ───────── IMAGES ───────── */

  const images = [
    "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  /* ───────── IMAGE FADE SLIDER ───────── */

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="about">
      {/* ───────── LEFT CONTENT ───────── */}

      <div className="about__content">
        <div className="about__label">
          <span>We Produce</span>

          <div className="about__line"></div>
        </div>

        {/* ───────── REUSABLE TYPING COMPONENT ───────── */}

        <TypingText
          text="Quality Products for Every Nigerian Home"
          speed={75}
          className="about__title"
        />

        <p className="about__text">
          At Zitelle, we manufacture three core product lines — pure cooking
          oil, everyday soaps, and durable plastic products.
        </p>

        <p className="about__text">
          Each product is crafted with care, refined to meet the highest
          standards, and designed to serve the everyday needs of Nigerian homes
          and businesses.
        </p>

        <button className="about__btn">
          About Us
          <span>→</span>
        </button>
      </div>

      {/* ───────── RIGHT IMAGE FADE SLIDER ───────── */}

      <div className="about__image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="About"
            className={`about__image ${
              index === currentImage
                ? "about__image--active"
                : "about__image--hidden"
            }`}
          />
        ))}

        <div className="about__image-overlay"></div>
      </div>
    </section>
  );
};

export default AboutSection;
