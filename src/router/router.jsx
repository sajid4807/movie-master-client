import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllMovies from "../pages/AllMovies/AllMovies";
import MyCollection from "../pages/MyCollection/MyCollection";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    hydrateFallbackElement:<Loading/>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            hydrateFallbackElement:<Loading/>
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