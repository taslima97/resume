import { createBrowserRouter } from "react-router-dom";

import MainLayOut from "../LayOut/MainLayOut";
import Home from "../page/Home/Home/Home";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Register from "../page/Register/Register";
import LogIn from "../page/LogIn/LogIn";

import AllToy from "../page/AllToy/AllToy";
import PriveteRout from "./PriveteRout";
import AddFrom from "../page/AddFrom/AddFrom";
import MyToys from "../page/MyToys/MyToys";




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
           },
           {
            path:'/alltoys',
            element:<PriveteRout><AllToy></AllToy></PriveteRout>,
           
           },
           {
            path:'/addtoy',
            element:<PriveteRout><AddFrom></AddFrom></PriveteRout>,
           
           },
           {
            path:'/mytoys',
            element:<PriveteRout><MyToys></MyToys></PriveteRout>
           }
         ]
      }
   ])
   export default router;