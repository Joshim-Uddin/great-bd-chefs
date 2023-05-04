import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home";
import Blog from "../Blog";
import User from "../User";
import Login from "../Login";
import Registration from "../Registration";
import ChefRecipes from "../ChefRecipes";
import ErrorPage from "../ErrorPage";
import FavoriteRecipes from "../FavoriteRecipes";
import PopularRecipes from "../PopularRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000"),
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
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/favorite",
        element: <FavoriteRecipes />,
        loader: () => fetch("http://localhost:5000"),
      },
      {
        path: "/chefs/:id",
        element: <ChefRecipes />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
