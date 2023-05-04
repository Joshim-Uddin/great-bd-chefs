import React from "react";
import heroImage from "./../../assets/img81602.whqc_2846x1422q90.webp";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import RecipesSection from "./RecipesSection";
import { useLoaderData } from "react-router-dom";
import PopularRecipes from "./PopularRecipes";
import FeaturedRecipe from "./FeaturedRecipe";

const Home = () => {
  const data = useLoaderData();
  const { chefs } = data;
  return (
    <>
      <div className="container text-white lg:flex gap-6 items-center my-3 lg:h-screen">
        <div className="mb-3">
          <h1 className="text-5xl lg:text-left text-center font-semibold mb-5">
            Great Bangladeshi Chef's Recipes
          </h1>
          <div className="justify relative  mt-3">
            <p className="me-1 text-xl">
              "The cuisine of Bangladesh is a celebration of diverse flavors,
              textures, and aromas, and the chefs of Bangladesh are artists who
              masterfully blend spices, herbs, and ingredients to create dishes
              that are both delicious and deeply rooted in tradition."
            </p>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt=""
            className="rounded-lg shadow-lg shadow-slate-600"
          />
        </div>
      </div>
      <RecipesSection chefs={chefs} />
      <FeaturedRecipe />
      <PopularRecipes />
    </>
  );
};

export default Home;
