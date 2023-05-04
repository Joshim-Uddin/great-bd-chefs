import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Card from "./Card";

const ChefRecipes = () => {
  const id = useParams();
  const recipes = useLoaderData();

  const Navigation = useNavigation();

  return (
    <>
      <h2 className="text-4xl text-white my-10 text-center">Chef Recipes</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 bg-stone-400 text-black pb-8">
        {recipes.map((recipe) => {
          return <Card key={recipe.recipe_id} recipe={recipe}></Card>;
        })}
      </div>
    </>
  );
};

export default ChefRecipes;
