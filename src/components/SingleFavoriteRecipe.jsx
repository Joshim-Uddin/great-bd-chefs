import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { removeFromDb } from "../utils/addToStorage";

const SingleFavoriteRecipe = ({ recipe }) => {
  const { name, recipe_img, recipe_id } = recipe;
  // const [jobId, setJobId] = useContext(MyContext);

  return (
    <div className="border rounded-lg p-5 bg-[#E8E8E8] flex justify-between items-center ">
      <div className="flex items-center gap-5">
        <div className="bg-gray-300 h-full w-full flex justify-center items-center ">
          <img src={recipe_img} alt="" className="h-48" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold">{name}</h3>
          <h4>{}</h4>
        </div>
      </div>
      <button className="bt" onClick={() => removeFromDb(recipe_id)}>
        Remove
      </button>
    </div>
  );
};

export default SingleFavoriteRecipe;
