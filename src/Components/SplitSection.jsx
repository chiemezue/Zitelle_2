import { Link } from "react-router-dom";

const SplitSection = ({
  label,
  title,
  text,
  extra,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="split-section">
      {/* IMAGE */}

      <div className="split-section__image-wrap">
        <img src={image} alt={title} className="split-section__image" />
      </div>

      {/* CONTENT */}

      <div className="split-section__content">
        {/* LABEL */}

        <div className="about__label">
          <span>{label}</span>

          <div className="about__line" />
        </div>

        {/* TITLE */}

        <h2 className="split-section__title">{title}</h2>

        {/* TEXT */}

        <p className="split-section__text">{text}</p>

        {extra && (
          <div className="split-section__text">
            <p>{extra}</p>
          </div>
        )}

        {/* BUTTON */}

        {buttonText && (
          <Link to={buttonLink} className="split-section__btn">
            {buttonText}

            <span>→</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default SplitSection;
