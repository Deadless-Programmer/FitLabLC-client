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
import Notification from "../Pages/Dashboard/Notification/Notification";
import Settings from "../Pages/Dashboard/Settings/Settings";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";
import InstructorRoute from "./InstructorRoute";
 


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
            path:'manageclasseses/feedback/:id',
            element:<AdminRoute><Feedback></Feedback></AdminRoute>,
            loader: ({params}) => fetch(`https://fit-lab-learning-camp-server.vercel.app/manage/${params.id}`)
          },
          {
            path:'payment',
            element:<Payment></Payment>
          },
          {
            path:'paymenthistory',
            element:<PaymentHistory></PaymentHistory>
          },
          {
            path:'enrolled',
            element:<EnrolledClasses></EnrolledClasses>
          },
          {
            path:'addaclass',
            element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute>
          },
          {
            path:'myclasses',
            element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>  
          },
          {
            path:'manageclasseses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path:'settings',
            element:<Settings></Settings>
          },
          {
            path:'notification',
            element:<Notification></Notification>
          },
          {
            path:'ManageUsers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },

       ]
      
    }
    
  ]);

