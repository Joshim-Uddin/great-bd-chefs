import React from "react";
import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Blog = () => {
  const blog = useLoaderData();
  return (
    <div className="my-12 container">
      <h2 className="text-4xl mb-8 font-semibold text-center text-white">
        Our Blogs
      </h2>
      {blog.map((blog) => (
        <div
          key={uuidv4()}
          className="mb-5 text-white shadow-md shadow-orange-300"
        >
          <h1 className="text-2xl bg-stone-600 p-2">Q. {blog.question}</h1>
          <p className="bg-blue-600 p-2 text-xl text-justify">
            <span className="italic font-semibold underline">Ans.</span>{" "}
            {blog.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
