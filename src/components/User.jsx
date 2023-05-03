import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { FaCamera } from "react-icons/fa";

const User = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <img src={user.photoURL} alt="" style={{ borderRadius: "100%" }} />
      <input type="file" name="image" id="image" />
      <FaCamera />
      <h1>Name: {user.displayName}</h1>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default User;
