import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../LayOut/MainLayOut";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Register from "../page/Register/Register";
import LogIn from "../page/LogIn/LogIn";



const router = createBrowserRouter([
   {
       path: '/',
       element: <MainLayOut></MainLayOut>,
       errorElement:<ErrorPage></ErrorPage>,
         children: [
           {
               path: '/',
               element: <Home></Home>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/register',
           element:<Register></Register>
           },
           {
            path:'/login',
            element:<LogIn></LogIn>
           }
         ]
      }
   ])
   export default router;