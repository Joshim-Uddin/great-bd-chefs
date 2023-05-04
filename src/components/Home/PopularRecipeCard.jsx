import { Rating } from "@smastrom/react-rating";
import React from "react";

const PopularRecipeCard = ({ recipe }) => {
  const { name, description, image, id, ratings, process } = recipe;
  return (
    <div className="bg-white rounded mb-3 shadow-md shadow-slate-600">
      <img src={image} alt="" className="w-full" />
      <div className="p-3 my-3">
        <h3 className="text-3xl font-semibold mb-3">{name}</h3>
        <p className="text-justify mb-3">{description}</p>
        <div className="flex gap-3">
          <Rating style={{ maxWidth: 120 }} value={ratings} readOnly></Rating>{" "}
          {ratings}
        </div>
      </div>
    </div>
  );
};

export default PopularRecipeCard;
