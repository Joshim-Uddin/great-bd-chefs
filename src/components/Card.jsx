import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Card = ({ recipe }) => {
  const { name, ingredients, cooking_method, rating } = recipe;
  return (
    <div>
      <img src="" alt="" />
      <h3>{name}</h3>
      <div>
        Ingredients:{" "}
        {ingredients.map((ingredient) => (
          <li key={uuidv4()}>{`${ingredient}`}</li>
        ))}
      </div>
      <p>Cooking method : {cooking_method}</p>
      <div className="flex items-center gap-4">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly></Rating>
        <p>{rating}</p>
      </div>
      <button className="bt">Add To Favorite</button>
    </div>
  );
};

export default Card;
