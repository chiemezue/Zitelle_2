import PageHero from "../Components/AboutComponents/PageHero";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import CareerRoles from "../Components/CareerComponents/CareerRoles";
import CareerCulture from "../Components/CareerComponents/CareerCulture";
import SplitSection from "../Components/SplitSection";
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
      <CareerRoles />
      <CareerCulture />
      <SplitSection
        label="Join Our Team"
        title="Interested In Joining Zitelle?"
        text="We are always looking for talented, hardworking, and motivated people who want to grow with us."
        extra="Explore our available roles and discover where your skills, experience, and ambition could fit within Zitelle Group."
        image="/zitelle pictures/office.jpg"
        buttonText="View Roles"
        buttonLink="/career/apply"
      />
    </>
  );
};

export default Career;
