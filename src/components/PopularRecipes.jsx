import React from "react";
import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PopularRecipeCard from "./PopularRecipeCard";

const PopularRecipes = ({ popular }) => {
  return (
    <>
      <h2 className="text-4xl text-center text-white mt-12">
        Our Popular Recipes
      </h2>
      <div className="flex gap-4 container my-12">
        {popular.map((recipe) => {
          return (
            <PopularRecipeCard
              key={uuidv4()}
              recipe={recipe}
            ></PopularRecipeCard>
          );
        })}
      </div>
    </>
  );
};

export default PopularRecipes;
