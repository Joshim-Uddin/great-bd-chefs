import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import AuthorizeLogin from "./AuthorizeLogin";
import { AuthContext } from "./Providers/AuthProviders";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => result.user)
      .catch((err) => console.log(err));
    form.reset();
  };
  return (
    <div className="my-10">
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-lef justify-center py-5 px-8 items-start border-2 border-gray-200 w-1/3 mx-auto"
      >
        <h3 className="text-left">Login</h3>
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
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent"
          />
        </div>
        <div className="flex w-full items-center justify-between gap-5">
          <div className="flex-grow=1">
            <input type="checkbox" name="checkbox" id="checkbox" />{" "}
            <label htmlFor="checkbox" id="checkbox">
              Remember Me
            </label>
          </div>
          <p>Forgot Password</p>
        </div>
        <div className="w-full">
          <button type="submit" className="btn btn-accent w-full normal-case">
            Login
          </button>
        </div>
        <p>
          Don't have an account ?{" "}
          <Link to="/register" className="text-[#F9A51A] underline">
            Create an account
          </Link>
        </p>
      </Form>
      <AuthorizeLogin />
    </div>
  );
};

export default Login;
