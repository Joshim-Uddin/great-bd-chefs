import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ChefRecipes = () => {
  const id = useParams();
  const recipes = useLoaderData();
  return (
    <>
      <h2 className="text-4xl text-white my-10 text-center">Chef Recipes</h2>
      <div className="grid grid-cols-3 bg-stone-400 text-black pb-8">
        {recipes.map((recipe) => {
          return <Card key={recipe.recipe_id} recipe={recipe}></Card>;
        })}
      </div>
    </>
  );
};

export default ChefRecipes;
