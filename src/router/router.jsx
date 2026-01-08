import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllMovies from "../pages/AllMovies/AllMovies";
import MyCollection from "../pages/MyCollection/MyCollection";
import Loading from "../components/Loading/Loading";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import PrivateRoute from "../components/Private/PrivateRoute";
import UploadMovie from "../pages/UploadMovie/UploadMovie";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ErrorId from "../components/ErrorId/ErrorId";
import WatchList from "../components/WatchList/WatchList";
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
import EditMovie from "../components/EditMovie/EditMovie";

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
        element: <AllMovies></AllMovies>,
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
        element: <EditMovie/>
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
