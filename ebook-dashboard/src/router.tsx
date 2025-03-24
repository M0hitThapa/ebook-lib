import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage />
    },
    {
        path:'/login',
        element:<LoginPage />
    },
    {
        path:'/register',
        element:<RegisterPage />
    }
]);