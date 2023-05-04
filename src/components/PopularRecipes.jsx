import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import PopularRecipeCard from "./PopularRecipeCard";
import { Bars, Vortex } from "react-loader-spinner";

const PopularRecipes = () => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/popular")
        .then((res) => res.json())
        .then((data) => setPopular(data));
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <h2 className="text-4xl text-center text-white mt-12">
        Our Popular Recipes
      </h2>
      <span>
        {isLoading ? (
          <p className="w-10/12 mx-auto flex items-center justify-center my-4">
            <Bars
              height="80"
              width="100"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </p>
        ) : (
          ""
        )}
      </span>
      <div className="lg:flex gap-4 container my-12">
        {popular.map((recipe) => {
          return (
            <PopularRecipeCard
              key={uuidv4()}
              recipe={recipe}
            ></PopularRecipeCard>
          );
        })}
      </div>
    </>
  );
};

export default PopularRecipes;
