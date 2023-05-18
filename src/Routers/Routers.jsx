import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../LayOut/MainLayOut";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";



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
           }
         ]
      }
   ])
   export default router;