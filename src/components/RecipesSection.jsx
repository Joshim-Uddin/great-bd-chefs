import React from "react";
import RecipesCard from "./RecipesCard";

const RecipesSection = ({ chefs }) => {
  console.log(chefs.chefs);
  return (
    <div className="bg-red-300 py-12">
      <h2 className="text-4xl text-center text-white mb-8">
        Our World Class Chefs
      </h2>
      <div className="grid grid-cols-3 container gap-5">
        {chefs.chefs.map((chef) => (
          <RecipesCard key={chef.id} chef={chef}></RecipesCard>
        ))}
      </div>
    </div>
  );
};

export default RecipesSection;
