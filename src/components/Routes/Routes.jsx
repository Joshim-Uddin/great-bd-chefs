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
import AboutUsPage from "../AboutUs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://b7a10-chef-recipe-hunter-server-side-joshim-uddin.vercel.app"
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () =>
          fetch(
            "https://b7a10-chef-recipe-hunter-server-side-joshim-uddin.vercel.app/blog"
          ),
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
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/favorite",
        element: <FavoriteRecipes />,
        loader: () =>
          fetch(
            "https://b7a10-chef-recipe-hunter-server-side-joshim-uddin.vercel.app"
          ),
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-joshim-uddin.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
