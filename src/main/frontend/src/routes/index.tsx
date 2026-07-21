import {
    createBrowserRouter
} from "react-router-dom";

import DashboardPage from "../modules/auth/pages/DashboardPage";
import LoginPage from "../modules/auth/pages/LoginPage";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <LoginPage />
    },

    {
        path: "/dashboard",
        element: <DashboardPage />
    }

]);