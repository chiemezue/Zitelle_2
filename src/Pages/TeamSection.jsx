import { useRef } from "react";

const teamMembers = [
  {
    name: "Michael Stone",
    role: "Group Chairman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Daniel Brooks",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "David Cole",
    role: "Production Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Sophia Lee",
    role: "Finance Executive",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Grace Morgan",
    role: "Human Resources",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "James Carter",
    role: "Supply Chain Lead",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Ella Thompson",
    role: "Marketing Executive",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Chris Walker",
    role: "Technical Supervisor",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
  },
];

const TeamSection = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;

    const scrollAmount = window.innerWidth < 768 ? 300 : 420;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="team">
      {/* TOP */}

      <div className="team__top">
        <div className="about__label">
          <span>Our Executive Team</span>

          <div className="about__line" />
        </div>

        <h2 className="team__title">
          The People Behind <span>Zitelle</span>
        </h2>
      </div>

      {/* SLIDER */}

      <div className="team__wrapper">
        {/* LEFT */}

        <button
          className="team__arrow team__arrow--left"
          onClick={() => scroll("left")}
        >
          ←
        </button>

        {/* CAROUSEL */}

        <div className="team__slider" ref={sliderRef}>
          {teamMembers.map((member, index) => (
            <div className="team__card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team__image"
              />

              <div className="team__overlay">
                <div className="team__info">
                  <h3>{member.name}</h3>

                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}

        <button
          className="team__arrow team__arrow--right"
          onClick={() => scroll("right")}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
