import ReactPDF, { Document, Page, Text } from "@react-pdf/renderer";
import React from "react";
import { FaFilePdf } from "react-icons/fa";

const SingleBlog = ({ blog }) => {
  return (
    <>
      <Document>
        <Page>
          <Text>
            <h1 className="text-2xl bg-stone-600 p-2">Q. {blog.question}</h1>
          </Text>
          <Text>
            <p className="bg-blue-600 p-2 mb-3 text-xl text-justify">
              <span className="italic font-semibold underline">Ans.</span>{" "}
              {blog.answer}
            </p>
          </Text>
        </Page>
      </Document>
      <div className="w-full flex items-center justify-center">
        <FaFilePdf className="cursor-pointer h-12" />
      </div>
    </>
  );
};

export default SingleBlog;
