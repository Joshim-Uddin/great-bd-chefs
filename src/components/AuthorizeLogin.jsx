import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "./Providers/AuthProviders";

const AuthorizeLogin = () => {
  const { githubLogin, googleLogin } = useContext(AuthContext);
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => result.user)
      .catch((error) => console.log(error));
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => result.user)
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="flex flex-col w-72 mx-auto border-opacity-50">
        <div className="divider">OR</div>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center mt-2 gap-5 w-72 mx-auto rounded-full text-black border-2 pe-12"
      >
        <FaGoogle className="ms-1 me-5" /> Login with Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="flex items-center mt-2 gap-5 w-72 mx-auto rounded-full text-black border-2 pe-12"
      >
        <FaGithub className="ms-1 me-5 text-blue-600" /> Login with Github
      </button>
    </>
  );
};

export default AuthorizeLogin;
