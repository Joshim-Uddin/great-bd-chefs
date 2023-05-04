import React, { useEffect, useState } from "react";

const FeaturedRecipe = () => {
  const [data, setData] = useState({});
  const { image, name } = data;
  useEffect(() => {
    fetch("http://localhost:5000/featured")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h2 className="text-center text-4xl text-white mt-8">
        Our Featured Recipe
      </h2>
      <div className="container my-8 relative">
        <img src={image} alt="" className="mx-auto" />
        <h3 className="bg-green-500 rounded-md p-2 text-4xl text-white italic font-bold absolute top-3 left-0 lg:left-24">
          Featured Recipe
        </h3>
        <p className="absolute p-2 rounded-md bg-green-500 text-white text-xl bottom-2 right-0 lg:right-24">
          {name}
        </p>
      </div>
      <hr className="container border-2" />
    </>
  );
};

export default FeaturedRecipe;
