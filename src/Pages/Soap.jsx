import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";

import { Home, ShoppingCart, Building2, Store, Warehouse } from "lucide-react";

const Soap = () => {
  return (
    <>
      <PageHero
        title="Soap"
        highlight="Manufacturing"
        image="/zitelle pictures/soap2.jpg"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Soap Manufacturing</span>
          </>
        }
      />

      <ProductHero
        label="About"
        title="Quality Soap. Trusted Every Day."
        text="Zitelle Soap Manufacturing produces high-quality household and commercial soap products designed for everyday use. Our focus is on consistency, hygiene, affordability, and dependable supply, serving homes, retailers, distributors, and institutions across Nigeria."
        image="/zitelle pictures/soap1.jpg"
        primaryText="Request A Quote"
        primaryLink="/contact"
        secondaryText="Speak To Sales"
        secondaryLink="/contact"
      />

      <ProductGrid
        label="Our Products"
        title="What We Produce."
        products={[
          {
            id: 1,
            category: "Household Care",
            name: "Multipurpose Bar Soap",
            description:
              "Suitable for laundry, dishwashing, and general household cleaning.",
            image: "/zitelle pictures/soap2.jpg",
            link: "/contact",
          },

          {
            id: 2,
            category: "Personal Care",
            name: "Premium Bath Soap",
            description:
              "Gentle cleansing soap formulated for everyday personal hygiene.",
            image: "/zitelle pictures/soap3.jpg",
            link: "/contact",
          },

          {
            id: 3,
            category: "Commercial Supply",
            name: "Industrial Cleaning Soap",
            description:
              "Reliable cleaning solution for hotels, schools, and institutions.",
            image: "/zitelle pictures/soap1.jpg",
            link: "/contact",
          },

          {
            id: 4,
            category: "Household Care",
            name: "Detergent Soap",
            description:
              "Effective stain removal with long-lasting cleaning performance.",
            image: "/zitelle pictures/soap4.jpg",
            link: "/contact",
          },
        ]}
      />

      <WhoWeServe
        label="Who We Serve"
        title="Made For Homes And Businesses"
        image="/zitelle pictures/soap2.jpg"
        items={[
          {
            icon: <Home size={20} />,
            text: "Households and families across Nigeria",
          },

          {
            icon: <Store size={20} />,
            text: "Retail stores and supermarkets",
          },

          {
            icon: <ShoppingCart size={20} />,
            text: "Wholesalers and distributors",
          },

          {
            icon: <Building2 size={20} />,
            text: "Hotels, schools, and institutions",
          },

          {
            icon: <Warehouse size={20} />,
            text: "Bulk buyers and commercial businesses",
          },
        ]}
      />
    </>
  );
};

export default Soap;
