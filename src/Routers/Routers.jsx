import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home/Home";
import MainLayOut from "../LayOut/MainLayOut";



const router = createBrowserRouter([
   {
       path: '/',
       element: <MainLayOut></MainLayOut>,
         children: [
           {
               path: '/',
               element: <Home></Home>
           }
         ]
      }
   ])
   export default router;