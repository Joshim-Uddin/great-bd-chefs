import React from "react";

const RecipesCard = ({ chef }) => {
  console.log(chef);
  const { id, name, image, likes, num_recipes, years_of_experience } = chef;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex">
          <p>{years_of_experience} Years Experience</p>
          <p>{likes} Likes</p>
        </div>
        <p className="text-center">Number of Recipes: {num_recipes}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
