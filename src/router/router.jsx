import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllMovies from "../pages/AllMovies/AllMovies";
import MyCollection from "../pages/MyCollection/MyCollection";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/allMovies',
            element:<AllMovies></AllMovies>
        },
        {
            path:'/myCollection',
            element:<MyCollection></MyCollection>
        }
    ]
  },
]);