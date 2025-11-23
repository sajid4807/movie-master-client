import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllMovies from "../pages/AllMovies/AllMovies";
import MyCollection from "../pages/MyCollection/MyCollection";
import Loading from "../components/Loading/Loading";
import LoadingCard from "../components/Loading/LoadingCard";
import MovieDetails from "../components/MovieDetails/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allMovies",
        loader: () => fetch("http://localhost:3000/allMovies"),
        element: <AllMovies></AllMovies>,
        hydrateFallbackElement: <LoadingCard></LoadingCard>,
      },
      {
        path: "/myCollection",
        element: <MyCollection></MyCollection>,
      },
      {
        path: "movieDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allMovies/${params.id}`),
        element: <MovieDetails />,
      },
      // {
      //     path:"movieDetails/:id",
      //     loader:() => fetch(`http://localhost:3000/allMovies`),
      //     element:<MovieDetails/>
      // }
    ],
  },
]);
