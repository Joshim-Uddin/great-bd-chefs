import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Card = ({ recipe }) => {
  const { name, ingredients, cooking_method, rating, recipe_img } = recipe;
  return (
    <div className="relative border">
      <img src={recipe_img} alt="" className="w-full h-64 mb-2" />
      <div className="flex flex-col justify-center gap-3 px-3 mb-20">
        <h3 className="text-2xl font-semibold">Recipe : {name}</h3>
        <p>
          <span className="underline italic font-semibold">Ingredients:</span>{" "}
          {[...ingredients].join(" , ")}
        </p>
        <p className="text-justify">
          <span className="underline italic font-semibold">
            Cooking method :
          </span>{" "}
          {cooking_method}
        </p>
        <div className="absolute bottom-0  flex items-center mb-3 justify-between gap-10">
          <div className="flex gap-3 items-center flex-grow-1">
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly></Rating>
            <p>{rating}</p>
          </div>

          <button className="bt">Add To Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
