import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
          <div className="flex gap-5 items-center">
            <p className="border border-purple-400 rounded text-purple-400 py-2 px-3">
              {}
            </p>
            <p className="border border-purple-400 rounded text-purple-400 py-2 px-3">
              {}
            </p>
          </div>
          <div className="flex gap-5">
            <p>{}</p>
            <p>{}</p>
          </div>
        </div>
      </div>

      <Link to={`/jobdetails/${recipe_id}`}>
        <button className="bt">Remove</button>
      </Link>
    </div>
  );
};

export default SingleFavoriteRecipe;
