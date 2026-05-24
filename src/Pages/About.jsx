import PageHero from "../Components/AboutComponents/PageHero.jsx";
import AboutIntro from "../Components/AboutComponents/AboutIntro.jsx";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs.jsx";
import TeamSection from "../Components/AboutComponents/TeamSection.jsx";

const aboutSections = [
  {
    id: 1,

    label: "Who We Are",

    title: "Built Around Everyday Essentials",

    text: `Zitelle Group is behind the essentials that keep life moving — made with care, produced to standard, and supplied with consistency across Nigeria.`,

    extra: `Across homes and industries, our products are created to serve everyday needs with reliability and trust.`,

    image: "/zitelle pictures/zitelle trucks 2.jpg",
  },

  {
    id: 2,

    label: "What We Do",

    title: "Manufacturing With Care And Precision",

    text: `From manufacturing to packaging and dependable delivery, we sweat the details so you don’t have to.`,

    extra: `Every process is handled with focus, consistency and operational excellence to maintain the standards we stand for.`,

    image: "/zitelle pictures/people in factory.jpg",
  },

  {
    id: 3,

    label: "Our Promise",

    title: "Quality You Can Always Trust",

    text: `Whether it’s for your household or your business, you can count on quality that shows up the same way every time.`,

    extra: `From our hearts to your home, we deliver products built on trust, long-term value and dependable performance.`,

    image: "/zitelle pictures/office.jpg",
  },
];

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

      <AboutIntro sections={aboutSections} />

      <WhyChooseUs />

      <TeamSection />
    </>
  );
};

export default About;
