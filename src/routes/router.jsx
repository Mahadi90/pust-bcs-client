import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Application from "../components/application/Application";
import AdmitCard from "../components/admit/AdmitCard";
import DashBoard from "../components/DashBoard/DashBoard";
import SignUp from "../SignUp/SignUp";
import Login from "../components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/application',
                element : <PrivateRoutes><Application></Application></PrivateRoutes>
            },
          {
            path : '/admitcard',
            element : <AdmitCard></AdmitCard>
          },
          {
            path : '/dashboard',
            element : <DashBoard></DashBoard>
          },
          {
            path : '/login',
            element : <Login></Login>
          },
          {
            path : '/signup',
            element : <SignUp></SignUp>
          },
        ]
    }
])

export default router;

