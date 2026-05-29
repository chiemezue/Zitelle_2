import React from "react";
import PageHero from "../Components/AboutComponents/PageHero";
import WhyUsStat from "../Components/WhyUsStat";
import AboutIntro from "../Components/AboutComponents/AboutIntro";
import WhyStandards from "../Components/WhyStandards";
import DarkReusableSection from "../Components/DarkReusableSection";

const whySections = [
  {
    id: 1,

    label: "Our Standard",

    title: "Our Divisions Work Togetherfor Stronger Control.",

    text: `Our divisions are connected in ways that create stronger control and better consistency.`,

    extra: `We produce oil used within our soap manufacturing, and our plastic division manufactures jerrycans from scratch for both Zitelle Oil and external customers.`,

    image: "/zitelle pictures/office.jpg",
  },
];

const WhyUs = () => {
  return (
    <>
      <PageHero
        title="Why Us"
        highlight=""
        image="/zitelle pictures/environment.png"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Why Us</span>
          </>
        }
      />
      <WhyUsStat />
      <AboutIntro sections={whySections} />
      <WhyStandards />
      <DarkReusableSection
        label="Get In Touch"
        title="Ready to Work With Zitelle?"
        text="Our manufacturing and distribution approach is designed to support dependable supply for retailers, wholesalers, distributors and commercial buyers."
        buttonLink="/contact"
        buttonText="Contact Us"
        image="/zitelle pictures/machine4.jpg"
      />
    </>
  );
};

export default WhyUs;
