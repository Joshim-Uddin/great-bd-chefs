import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Routes from "./components/Routes/Routes.jsx";
import AuthProviders from "./components/Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <Routes />
    </AuthProviders>
  </React.StrictMode>
);
