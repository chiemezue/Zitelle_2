const features = [
  {
    number: "01",
    title: "Quality Is Part Of Every Stage.",
    text: "Quality is built into our process, not added at the end. Our teams monitor production, carry out checks, and maintain documentation to support consistency and customer confidence.",

    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1600&auto=format&fit=crop",
  },

  {
    number: "02",
    title: "Reliable Supply",
    text: "Our manufacturing and distribution approach is designed to support dependable supply for retailers, wholesalers, distributors and commercial buyers.",

    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop",
  },

  {
    number: "03",
    title: "Built For Long-Term Trust",
    text: "We focus on building relationships through consistency, product reliability and operational standards customers can depend on over time.",

    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
];

const WhyStandards = () => {
  return (
    <section className="why-standards">
      {features.map((item, index) => (
        <div
          key={index}
          className={`why-standards__row ${
            index % 2 !== 0 ? "why-standards__row--reverse" : ""
          }`}
        >
          {/* IMAGE */}

          <div className="why-standards__image-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="why-standards__image"
            />
          </div>

          {/* CONTENT */}

          <div className="why-standards__content">
            <span className="why-standards__number">{item.number}</span>

            <h2 className="why-standards__title">{item.title}</h2>

            <p className="why-standards__text">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyStandards;
