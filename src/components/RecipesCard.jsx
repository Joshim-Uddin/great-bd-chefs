import React from "react";
import { Link } from "react-router-dom";
import Like from "./../assets/like.png";

const RecipesCard = ({ chef }) => {
  console.log(chef);
  const { id, name, image, likes, num_recipes, years_of_experience } = chef;
  return (
    <div className="card lg:w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between gap-3 my-3">
          <p className="outline rounded outline-blue-500 p-2">
            {years_of_experience} Years Exp.
          </p>
          <p className="flex gap-3 items-center outline rounded outline-blue-500 p-2">
            {likes}{" "}
            <span>
              <img src={Like} alt="" className="w-6 h-6" />
            </span>
          </p>
        </div>
        <p className="text-center outline outline-red-500 p-2 shadow-warning shadow-md">
          Recipes: {num_recipes}
        </p>
        <div className="card-actions justify-center">
          <Link to={`/chefs/${id}`}>
            <button className="btn btn-primary mt-2">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
