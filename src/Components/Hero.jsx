import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,

    src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600",

    alt: "Premium manufacturing company in Nigeria",

    title: (
      <>
        <span className="hero__eyebrow">Quality You Can Trust</span>
        From Our <span className="hl-yellow">Heart</span>
        <br />
        to Your Home.
      </>
    ),

    sub: "Quality manufacturing trusted across homes and industries in the East.",

    cta: "Explore",
  },

  {
    id: 2,

    src: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600",

    alt: "Soap manufacturing and cleansing products",

    title: (
      <>
        From our factory to your <span className="hl-yellow">daily</span>
        <br />
        clean moment
      </>
    ),

    sub: "Every soap we make is crafted with purpose, delivered with care, and trusted in homes across Nigeria.",

    cta: "Explore",
  },

  {
    id: 3,

    src: "https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1600",

    alt: "Premium plywood timber and woodwork",

    title: (
      <>
        Built from the forest, <span className="hl-yellow">built</span>
        <br />
        to last a lifetime
      </>
    ),

    sub: "Our plywood is responsibly sourced and engineered for strength, durability, and long-term performance.",

    cta: "Explore",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  /* ───────── AUTO SLIDE ───────── */

  useEffect(() => {
    const timer = setInterval(next, 6000);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="hero">
      {/* ───────── TRACK ───────── */}

      <div
        className="hero__track"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${i === current ? "active" : ""}`}
          >
            {/* IMAGE */}

            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* OVERLAY */}

            <div className="hero__overlay" />

            {/* CONTENT */}

            <div className="hero__content">
              <h1 className="hero__title">{slide.title}</h1>

              <p className="hero__sub">{slide.sub}</p>

              <a href="#explore" className="hero__btn">
                {slide.cta}

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ───────── ARROWS ───────── */}

      <button
        className="hero__arrow hero__arrow--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M11 4L6 9l5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="hero__arrow hero__arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M7 4l5 5-5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* ───────── DOTS ───────── */}

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
