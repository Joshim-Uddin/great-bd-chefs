import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import AuthorizeLogin from "./AuthorizeLogin";
import { AuthContext } from "./Providers/AuthProviders";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    if (email.length === 0) {
      setEmailError("Email is required");
      return;
    } else if (password.length === 0) {
      setPasswordError("Password is required");
      return;
    } else {
      const password = form.password.value;
      loginUser(email, password)
        .then((result) => result.user)
        .catch((err) => setError("Email and password doesn't match"));
      form.reset();
    }
  };
  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="my-10 text-white">
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-left text-white justify-center py-5 px-8 items-start border-2 border-gray-200 lg:w-1/3 w-3/4 bg-stone-500 mx-auto"
      >
        <h3 className="text-left">Login</h3>
        <div className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="username or email"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent "
          />
          {emailError && <span className="text-red-400">{emailError}</span>}
        </div>
        <div className="w-full">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="password"
            className="w-full py-2 px-2 border-b outline-1 bg-transparent"
          />
          {passwordError && (
            <span className="text-red-400">{passwordError}</span>
          )}
        </div>
        <div className="flex w-full items-center justify-between gap-5">
          <p>Forgot Password</p>
        </div>
        {error && (
          <div>
            <p className="text-red-400">{error}</p>
          </div>
        )}
        <div className="w-full">
          <button type="submit" className="bt w-full mb-3 normal-case">
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
