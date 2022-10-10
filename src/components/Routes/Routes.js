import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
