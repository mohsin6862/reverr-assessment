import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Home from "../Components/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <NotFoundPage></NotFoundPage>,
      children:[
        {

            path:'/',
            element:<Home></Home>

        },
        // {

        //     path:'/blogs',
        //     element:<Blogs></Blogs>

        // },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/signup',
            element:<SignUp></SignUp>

        },
      
    ]
    },
  ]);
  export default router;