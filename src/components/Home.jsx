import React from "react";
import heroImage from "./../assets/img81602.whqc_2846x1422q90.webp";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container text-white lg:flex gap-6 items-center my-12">
      <div className="mb-3">
        <h1 className="text-5xl font-semibold mb-5">
          Great Bangladeshi Chef's Recipes
        </h1>
        <div className="justify relative  mt-3">
          <FaQuoteLeft className="absolute" />
          <p className="ms-5 me-1">
            The cuisine of Bangladesh is a celebration of diverse flavors,
            textures, and aromas, and the chefs of Bangladesh are artists who
            masterfully blend spices, herbs, and ingredients to create dishes
            that are both delicious and deeply rooted in tradition.
          </p>
          <FaQuoteRight className="absolute bottom-1 right-20 lg:bottom-1.5 lg:left-28" />
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
  );
};

export default Home;
