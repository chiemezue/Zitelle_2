import { ShieldCheck, Users, Clock3 } from "lucide-react";

const cultureItems = [
  {
    icon: <ShieldCheck size={34} strokeWidth={2.2} />,
    title: "Responsibility",
    text: "Every role carries real weight across our operations.",
  },

  {
    icon: <Users size={34} strokeWidth={2.2} />,
    title: "Teamwork",
    text: "We work together across all divisions every day.",
  },

  {
    icon: <Clock3 size={34} strokeWidth={2.2} />,
    title: "Growth Mindset",
    text: "Every role contributes to the Zitelle standard.",
  },
];

const CareerCulture = () => {
  return (
    <section className="career-culture premium-dark-bg">
      {/* TOP */}

      <div className="career-culture__top">
        {/* <div className="section-label">
          <span>Life At Zitelle</span>

          <div className="section-line" />
        </div> */}

        <h2 className="career-culture__title">
          Built on Responsibility <br /> and Teamwork
        </h2>

        <p className="career-culture__text">
          Working at Zitelle means being part of a practical, fast-moving
          manufacturing environment where what you do every day matters.
        </p>
      </div>

      {/* GRID */}

      <div className="career-culture__grid">
        {cultureItems.map((item, index) => (
          <div className="career-culture__card" key={index}>
            <div className="career-culture__icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerCulture;
