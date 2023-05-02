import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ChefRecipes = () => {
  const id = useParams();
  const recipes = useLoaderData();
  console.log(recipes);
  return (
    <div className="grid grid-cols-3 gap-3">
      {recipes.map((recipe) => {
        return <Card key={recipe.recipe_id} recipe={recipe}></Card>;
      })}
    </div>
  );
};

export default ChefRecipes;
