import PageHero from "../Components/AboutComponents/PageHero";
import AboutIntro from "../Components/AboutComponents/AboutIntro";

const careerSections = [
  {
    id: 1,

    label: "Join Our Team",

    title: "Build A Career With Purpose",

    text: `At Zitelle Group, we believe people are the foundation of sustainable growth and long-term success.`,

    extra: `We create opportunities for passionate individuals to grow, contribute and build meaningful careers.`,

    image: "/zitelle pictures/office.jpg",
  },
];

const Career = () => {
  return (
    <>
      <PageHero
        title="Career"
        highlight=""
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Career</span>
          </>
        }
      />

      <AboutIntro sections={careerSections} />
    </>
  );
};

export default Career;
