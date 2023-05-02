import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D2926FF] text-white py-5">
      <div className="container">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-3">About Us</h3>
            <p>
              We are passionate about sharing delicious and healthy recipes with
              the world. Our team of talented chefs and food bloggers strive to
              provide you with the best recipes and cooking tips.
            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-3">Contact Us</h3>
            <p>Email: info@yourwebsitename.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar text-center text-white">
        <div className="container">
          <p className="mt-5">
            &copy; 2023 Your Website Name. All Rights Reserved.
          </p>
          <div className="social-media flex gap-5 mt-3 justify-center">
            <a href="#">
              <FaFacebook className="text-[#4267B2]" />
            </a>

            <a href="#">
              <FaTwitter className="text-[#1DA1F2]" />
            </a>

            <a href="#">
              <FaInstagram className="text-[#E1306C]" />
            </a>

            <a href="#">
              <FaPinterest className="text-[#E60023]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
