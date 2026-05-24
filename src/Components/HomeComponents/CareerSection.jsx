import React from "react";
import TypingText from "../TypingText";

const CareerSection = () => {
  return (
    <section className="career">
      {/* ───────── BACKGROUND IMAGE ───────── */}

      <div className="career__bg">
        <img
          src="/zitelle pictures/machine4.jpg"
          alt="Career"
          className="object-cover"
        />
      </div>

      {/* ───────── DARK OVERLAY ───────── */}

      <div className="career__overlay"></div>

      {/* ───────── CONTENT ───────── */}

      <div className="career__content">
        <div className="career__label">
          <span>Career</span>

          <div className="career__line"></div>
        </div>

        <TypingText
          text="Build A Future With Us"
          speed={75}
          className="career__title"
        />

        <p className="career__text">
          At Zitelle Group, we believe our people are our greatest strength.
          We’re building a dynamic, inclusive workplace where talent is
          developed, ideas are respected, and hard work is recognised. Here,
          you’re supported to learn, grow, and build a meaningful career for the
          long term—while contributing to products and services that make a real
          impact every day.
        </p>

        <button className="career__btn">
          Learn More
          <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default CareerSection;
