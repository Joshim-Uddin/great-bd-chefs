import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home";
import Blog from "../Blog";
import User from "../User";
import Login from "../Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
