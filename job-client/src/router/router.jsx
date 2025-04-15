import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import { param } from "motion/react-client";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2 className="text-white bg-red-700">Route Not Found</h2>,
      children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
       path:'/jobs/:id',
       element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
       loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'jobApply/:id',
        element:<PrivateRoute><JobApply></JobApply></PrivateRoute>

      },
      {
        path:'/myApplications',
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>

      },
      {
        path:'addJob',
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,

      },
      {
          path:'myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'signIn',
        element:<SignIn></SignIn>,
      }
      ]
    },
  ]);

  export default  router;