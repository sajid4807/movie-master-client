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
import Edit from "../components/Edit/Edit";
import PrivateRoute from "../components/Private/PrivateRoute";
import UploadMovie from "../pages/UploadMovie/UploadMovie";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ErrorId from "../components/ErrorId/ErrorId";
import WatchList from "../components/WatchList/WatchList";
// import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Profile from "../pages/Dashboard/Profile/Profile";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Terms from "../components/Terms/Terms";
import ReportIssue from "../components/ReportIssue/ReportIssue";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import CommunityRules from "../components/CommunityRules/CommunityRules";
import HelpCenter from "../components/HelpCenter/HelpCenter";
import FAQ from "../components/FAQ/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Loading />,
    errorElement: <ErrorPage />,
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
        loader: () =>
          fetch("https://movie-master-server-eta.vercel.app/allMovies"),
        element: <AllMovies></AllMovies>,
        hydrateFallbackElement: <LoadingCard></LoadingCard>,
      },
      {
        path: "movieDetails/:id",
        element: <MovieDetails />,
        errorElement: <ErrorId />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'term',
        element:<Terms/>
      },
      {
        path:'report-issue',
        element:<ReportIssue/>
      },
      {
        path:'community-rules',
        element:<CommunityRules/>
      },
      {
        path:'help-center',
        element:<HelpCenter/>
      },
      {
        path:'faq',
        element:<FAQ/>
      },
      {
        path:'privacy-policy',
        element:<PrivacyPolicy/>
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
      {
        path:'dashboard-home',
        element:<DashboardHome/>
      },
       {
        path: "myCollection",
        element: <MyCollection></MyCollection>,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "edit/:id",
        element: <Edit />
      },
      {
        path: "upload",
        element:  <UploadMovie></UploadMovie>,
        hydrateFallbackElement: <Loading />,
      },
       {
        path: "my-watch-list",
        element:<WatchList />
      },
      {
        path:"profile",
        element:<Profile/>
      }
    ]
    
  }
]);
