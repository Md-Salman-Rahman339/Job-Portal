import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

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