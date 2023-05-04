import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFavoriteRecipe } from "../../utils/addToStorage";
import SingleFavoriteRecipe from "./SingleFavoriteRecipe";
import { v4 as uuidv4 } from "uuid";

const FavoriteRecipes = () => {
  const [selected, setSelected] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const targetRecipe = [];
  let newRecipes = [];
  const chefs = useLoaderData();
  useEffect(() => {
    const storedRecipe = getFavoriteRecipe();
    if (storedRecipe) {
      for (const id in storedRecipe) {
        const findChef = findParentObject(id, chefs);
        for (let i = 0; i < chefs.chefs.length; i++) {
          let chefsRecipes = chefs.chefs[i].recipes;
          newRecipes.push(...chefsRecipes);
        }
        const findRecipe = newRecipes.find((recipe) => recipe.recipe_id == id);
        targetRecipe.push(findRecipe);
      }
    }
    setSelectedRecipes(targetRecipe);
  }, []);
  const findParentObject = (id, chefs) => {
    for (let i = 0; i < chefs.chefs.length; i++) {
      for (let j = 0; j < chefs.chefs[i].recipes.length; j++) {
        if (chefs.chefs[i].recipes[j].recipe_id == id) {
          return chefs.chefs[i];
        }
      }
    }
    return null; // If no parent object is found
  };

  const handleOnChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="relative p-12">
      <h2 className="text-center text-4xl font-bold my-8">
        My Favorite Recipes
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 items-center justify-center">
        {selectedRecipes.map((recipe) => (
          <SingleFavoriteRecipe key={uuidv4()} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
