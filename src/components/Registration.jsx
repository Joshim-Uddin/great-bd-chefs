import React, { useContext } from "react";
import AuthorizeLogin from "./AuthorizeLogin";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photourl = form.photo.value;

    createUser(email, password, name, photourl)
      .then((result) => {
        const createdUser = result.user;
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(console.log("profile updated"))
          .catch((error) => console.log(error));
        form.reset();
      })
      .catch((error) => {
        error.message;
        setError("Registration Error: " + error.message);
      });
  };
  return (
    <div className="my-10 text-white">
      <Form
        onSubmit={handleSignUp}
        className="flex flex-col gap-5 bg-stone-500 text-left justify-center py-5 px-8 items-start border-2 border-gray-500 w-1/3 mx-auto"
      >
        <h3 className="text-left">Create an account</h3>
        <div className="w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent "
          />
        </div>

        <div className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="username or email"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo URL"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent "
          />
        </div>

        <div className="w-full">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent"
          />
        </div>
        {error && (
          <div>
            <p className="text-red-400">{error}</p>
          </div>
        )}
        <div className="w-full">
          <button type="submit" className="bt w-full normal-case">
            Create an account
          </button>
        </div>
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="text-[#F9A51A] underline">
            Login
          </Link>
        </p>
      </Form>
      <AuthorizeLogin />
    </div>
  );
};

export default Registration;
