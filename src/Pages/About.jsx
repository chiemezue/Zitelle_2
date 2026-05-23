import PageHero from "../Components/PageHero";
import AboutIntro from "../Components/AboutIntro";
const About = () => {
  return (
    <>
      <PageHero
        title="About"
        highlight="Us"
        image="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1800&auto=format&fit=crop"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">About</span>
          </>
        }
      />
      <AboutIntro />
    </>
  );
};

export default About;
