import { useEffect, useRef, useState } from "react";
import TypingText from "./TypingText";

const sections = [
  {
    id: 1,

    label: "Who We Are",

    title: "Built Around Everyday Essentials",

    text: `Zitelle Group is behind the essentials that keep life moving — made with care, produced to standard, and supplied with consistency across Nigeria.`,

    extra: `Across homes and industries, our products are created to serve everyday needs with reliability and trust.`,

    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop",
  },

  {
    id: 2,

    label: "What We Do",

    title: "Manufacturing With Care And Precision",

    text: `From manufacturing to packaging and dependable delivery, we sweat the details so you don’t have to.`,

    extra: `Every process is handled with focus, consistency and operational excellence to maintain the standards we stand for.`,

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop",
  },

  {
    id: 3,

    label: "Our Promise",

    title: "Quality You Can Always Trust",

    text: `Whether it’s for your household or your business, you can count on quality that shows up the same way every time.`,

    extra: `From our hearts to your home, we deliver products built on trust, long-term value and dependable performance.`,

    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop",
  },
];
const AboutIntro = () => {
  const [activeImage, setActiveImage] = useState(sections[0].image);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveImage(sections[index].image);
          }
        },
        {
          threshold: 0.45,
        },
      );

      if (section) observer.observe(section);

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="about-intro">
      {/* LEFT CONTENT */}
      <div className="about-intro__content">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="about-block"
          >
            {/* LABEL */}
            <div className="about__label">
              <span>{section.label}</span>

              <div className="about__line" />
            </div>

            {/* TITLE */}
            {index === 0 ? (
              <TypingText
                text={section.title}
                speed={75}
                className="about__title"
              />
            ) : (
              <h2 className="about__title">{section.title}</h2>
            )}

            {/* TEXT */}
            <p className="about__text">{section.text}</p>

            <div className="about__text">
              <p>{section.extra}</p>
            </div>

            {/* MOBILE IMAGE */}
            <div className="about-block__mobile-image">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP STICKY IMAGE */}
      <div className="about-intro__sticky">
        <img
          key={activeImage}
          src={activeImage}
          alt="About visual"
          className="about-intro__image"
        />
      </div>
    </section>
  );
};

export default AboutIntro;
