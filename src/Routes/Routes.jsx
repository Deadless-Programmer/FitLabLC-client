import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivePage from "../Pages/HomePage/PrivePage/PrivePage";
import PrivetRoute from "./PrivetRoute";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from './AdminRoute';
 


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/instructors',
            element:<Instructors></Instructors>
        },
        {
          path:"/classes",
          element:<Classes></Classes>
        },
        // {
        //   path:"/dashboard",
        //   element:<Dashboard></Dashboard>
        // },
        {
          path:"/login",
          element:<Login></Login>
        },
      
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:'/privetpage',
          element:<PrivetRoute><PrivePage></PrivePage></PrivetRoute>
        }
      ]
    },

    {
      
        path:"/dashboard",
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute> ,
       children:[
          {
            path:'myselectedclass',
            element:<MyClass></MyClass>
          },
          {
            path:'ManageUsers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },

       ]
      
    }
    
  ]);

