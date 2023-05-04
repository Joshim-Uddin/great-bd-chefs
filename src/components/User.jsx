import React, { useContext, useState } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import { FaCamera } from "react-icons/fa";
import { storage } from "../firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Avatar } from "@mui/material";
import { updateProfile } from "firebase/auth";

const User = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);
  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((err) => console.error(err));
        setImage(null);
      })
      .catch((err) => console.error(err));
    updateProfile(user, {
      photoURL: url,
    })
      .then((profile) => console.log("profile updated"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex flex-col items-center">
      <Avatar
        alt="Remy Sharp"
        src={url || user.photoURL}
        sx={{ width: 90, height: 90 }}
        className="relative my-8"
      ></Avatar>
      <div className="mb-4 flex items-center">
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
          className="block ps-48"
        />
      </div>

      <button type="submit" className="bt" onClick={handleSubmit}>
        Submit
      </button>

      <h1 className="text-3xl font-semibold my-4">
        User Name: {user?.displayName}
      </h1>
      <p className="text-2xl mb-5">Email : {user?.email}</p>
    </div>
  );
};

export default User;
