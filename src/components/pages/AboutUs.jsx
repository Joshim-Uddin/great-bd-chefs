import React from "react";
import Map from "../Map";

const AboutUsPage = () => {
  return (
    <div className="about-us-page text-white grid lg:grid-cols-2 grid-cols-1 my-4 gap-8 container">
      <div>
        <h2 className="text-3xl mb-3">About Us</h2>
        <p className="text-justify text-xl mb-3">
          Welcome to Great BD Chefs Recipe Website, where we celebrate the rich
          and diverse culinary traditions of Bangladesh. Our mission is to
          showcase the talents of some of the best chefs in Bangladesh, and to
          provide you with delicious and authentic recipes that you can enjoy in
          your own home.
        </p>
        <p className="text-justify text-xl mb-3">
          Our team is made up of passionate food enthusiasts who are dedicated
          to preserving and sharing the unique flavors and traditions of
          Bangladesh. We work closely with our featured chefs to ensure that
          every recipe on our site is authentic, delicious, and easy to follow.
        </p>
        <p className="text-justify text-xl">
          Our chefs come from all corners of Bangladesh, and bring with them a
          wealth of culinary knowledge and experience. From the fiery curries of
          Chittagong to the delicate flavors of Sylhet, we're committed to
          showcasing the best of Bangladeshi cuisine.
        </p>
      </div>
      <Map />
    </div>
  );
};

export default AboutUsPage;
