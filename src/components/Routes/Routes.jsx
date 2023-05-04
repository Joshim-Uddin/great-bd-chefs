import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Blog from "../pages/Blog";
import User from "../pages/User";
import Login from "../Authentications/Login";
import Registration from "../Authentications/Registration";
import ChefRecipes from "../pages/ChefRecipes";
import ErrorPage from "../common/ErrorPage";
import FavoriteRecipes from "../pages/FavoriteRecipes";
import PopularRecipes from "../Home/PopularRecipes";
import AboutUsPage from "../pages/AboutUs";
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
