import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-[#2D2926FF] text-[#E94B3CFF] w-11/12 mx-auto flex items-center">
      <Link to="/" className="flex-1">
        <h4 className="logo">Great BD Chef Recipes</h4>
      </Link>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/user">User</Link>
        <Link to="/login">
          <button className="btn btn-accent">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
