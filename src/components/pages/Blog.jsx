import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = useRef();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [8.5, 11],
  };
  const blog = useLoaderData();
  return (
    <>
      <div className="my-12 container">
        <div
          style={{
            width: "820px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          ref={ref}
        >
          <h2 className="text-4xl mb-8 font-semibold text-center text-blue-600">
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
      </div>
      <div className="flex flex-col items-center">
        <Pdf
          targetRef={ref}
          filename="document.pdf"
          options={options}
          x={1}
          y={1}
          scale={0.8}
        >
          {({ toPdf }) => (
            <button onClick={toPdf} className="bt mb-4">
              Download PDF
            </button>
          )}
        </Pdf>
      </div>
    </>
  );
};

export default Blog;
