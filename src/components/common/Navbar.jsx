import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaBars } from "react-icons/fa";
import Dark from "./Dark";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [clicked, setClicked] = useState(true);

  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <nav
        className={
          clicked
            ? `h-80 flex px-4 py-4 bg-[#2D2926FF] text-white lg:navbar lg:h-auto`
            : `navbar bg-[#2D2926FF] text-white lg:px-20 px-4 flex lg:flex-row relative gap-3 items-center`
        }
      >
        <div className="flex-1">
          <Link to="/">
            <h4 className="logo">Great BD Chef Recipes</h4>
          </Link>
        </div>
        <FaBars
          className="lg:hidden text-white"
          onClick={() => setClicked(!clicked)}
        />
        <div
          className={
            clicked
              ? `flex lg:flex-row absolute h-32 lg:h-auto mb-32 lg:mb-0 lg:relative lg:top-0 top-16 w-full lg:w-auto flex-col text-center items-center gap-4`
              : `flex lg:flex-row absolute -top-72 flex-col gap-5`
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Favorite Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
          <Link to="/user">
            {user ? (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt=""
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            ) : (
              <></>
            )}
          </Link>
          {user ? (
            <button className="bt" onClick={handleLogout}>
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="bt">Login</button>
            </Link>
          )}
          <Dark />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
