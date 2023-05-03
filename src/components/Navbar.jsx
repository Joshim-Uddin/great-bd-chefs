import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };

  return (
    <>
      <nav className="navbar bg-[#2D2926FF] text-white px-20 flex items-center">
        <Link to="/" className="flex-1">
          <h4 className="logo">Great BD Chef Recipes</h4>
        </Link>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/favorite">Favorite Recipes</Link>
          {user ? (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                alt=""
                style={{ height: "40px", width: "40px", borderRadius: "100%" }}
              />
            </div>
          ) : (
            <></>
          )}
          {user ? (
            <button className="bt" onClick={handleLogout}>
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="bt">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
