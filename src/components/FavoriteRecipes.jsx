import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFavoriteRecipe } from "../utils/addToStorage";
import SingleFavoriteRecipe from "./SingleFavoriteRecipe";
import { v4 as uuidv4 } from "uuid";

const FavoriteRecipes = () => {
  const [selected, setSelected] = useState(null);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const targetRecipe = [];
  let newRecipes = [];
  let allChefs = [];
  const chefs = useLoaderData();
  console.log(chefs.chefs);
  useEffect(() => {
    const storedRecipe = getFavoriteRecipe();
    if (storedRecipe) {
      for (const id in storedRecipe) {
        const findChef = findParentObject(id, chefs);
        console.log(findChef);
        for (let i = 0; i < chefs.chefs.length; i++) {
          console.log(chefs.chefs[i].recipes);
          let chefsRecipes = chefs.chefs[i].recipes;
          newRecipes.push(...chefsRecipes);
        }
        const findRecipe = newRecipes.find((recipe) => recipe.recipe_id == id);
        targetRecipe.push(findRecipe);
      }
    }
    setSelectedRecipes(targetRecipe);
    console.log(selectedRecipes);
  }, []);
  console.log(allChefs);
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
    console.log(selected);
    // const input = e.target.value;
    // if (input == "remote") {
    //   newJobs = selectedRecipes.filter((job) => job.remote == true);
    // } else if (input == "onsite") {
    //   newJobs = selectedRecipes.filter((job) => job.remote == false);
    // }
    // setselectedRecipes(newJobs);
  };
  return (
    <div className="px-12 relative">
      <h2 className="text-center text-4xl font-bold my-4">
        My Favorite Recipes
      </h2>
      <select
        onChange={handleOnChange}
        className="absolute right-16 w-48 p-2 rounded top-12 block"
      >
        <option value="">Filter Job</option>
        <option value="remote">Remote</option>
      </select>

      <div className="flex flex-col gap-4 mt-32">
        <p>{selectedRecipes.length}</p>
        {selectedRecipes.map((recipe) => (
          <SingleFavoriteRecipe key={uuidv4()} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteRecipes;
