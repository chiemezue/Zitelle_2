import React from "react";
import PageHero from "../Components/AboutComponents/PageHero.jsx";
import ProductHero from "../Components/ProductComp/ProductHero";
import ProductGrid from "../Components/ProductComp/ProductGrid.jsx";
import WhoWeServe from "../Components/ProductComp/WhoWeServe.jsx";

import {
  Home,
  Store,
  ShoppingCart,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

const CookingOil = () => {
  return (
    <>
      <PageHero
        title="Cooking"
        highlight="Oil"
        image="/zitelle pictures/lab 1.jpg"
        breadcrumb={
          <>
            <span className="page-hero__crumb">Home /</span>

            <span className="page-hero__crumb--active">Cooking Oil</span>
          </>
        }
      />

      <ProductHero
        label="About"
        title="Pure, Healthy And Reliable Cooking Oil"
        text="Zitelle Cooking Oil is produced with a focus on quality, purity, and consistency. We supply households, food vendors, restaurants, distributors, and commercial buyers with cooking oil products that meet high production standards while delivering excellent value."
        image="/zitelle pictures/lab4.jpg"
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
            category: "Cooking Oil",
            name: "4 Litres",
            description:
              "Refined vegetable oil suitable for everyday cooking and frying.",
            image: "/zitelle pictures/4litres oil2.png",
            link: "/contact",
          },

          {
            id: 2,
            category: "Cooking Oil",
            name: "10 Litres",
            description:
              "Convenient packaging designed for daily household use.",
            image: "/zitelle pictures/10litres oil.png",
            link: "/contact",
          },

          {
            id: 3,
            category: "Cooking Oil",
            name: "18 Litres",
            description:
              "Large-volume supply for restaurants and food businesses.",
            image: "/zitelle pictures/18litres oil.png",
            link: "/contact",
          },

          {
            id: 4,
            category: "Cooking Oil",
            name: "25 Litres",
            description:
              "Consistent quality oil developed for high-volume frying.",
            image: "/zitelle pictures/25litres oil.png",
            link: "/contact",
          },
        ]}
      />

      <WhoWeServe
        label="Who We Serve"
        title="Supplying Kitchens And Businesses"
        image="/zitelle pictures/machine2.jpg"
        items={[
          {
            icon: <Home size={20} />,
            text: "Households and families",
          },

          {
            icon: <UtensilsCrossed size={20} />,
            text: "Restaurants and food vendors",
          },

          {
            icon: <Store size={20} />,
            text: "Retail stores and supermarkets",
          },

          {
            icon: <ShoppingCart size={20} />,
            text: "Wholesale distributors",
          },

          {
            icon: <Warehouse size={20} />,
            text: "Commercial food processors and bulk buyers",
          },
        ]}
      />
    </>
  );
};

export default CookingOil;
