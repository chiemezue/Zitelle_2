import PageHero from "../Components/AboutComponents/PageHero.jsx";
import AboutIntro from "../Components/AboutComponents/AboutIntro.jsx";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs.jsx";
import TeamSection from "./TeamSection.jsx";
const About = () => {
  return (
    <>
      <PageHero
        title="About"
        highlight="Us"
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">About</span>
          </>
        }
      />
      <AboutIntro />
      <WhyChooseUs />
      <TeamSection />
    </>
  );
};

export default About;
