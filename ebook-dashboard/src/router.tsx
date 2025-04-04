import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import DashBoardLayout from "./layouts/DashboardLayout";
import BooksPage from "./pages/BooksPage";
import AuthLayout from "./layouts/AuthLayout";
import CreateBook from "./pages/CreateBook";

export const router = createBrowserRouter([
    {
        path:'/dashboard',
        element:<DashBoardLayout />,
        children:[
            {
                path:'home',
                element:<HomePage />
            },
            {
                path:'books',
                element:<BooksPage />
            },
            {
                path:'books/create',
                element:<CreateBook />
            }
        ]
        
    },
    {
        path:'/auth',
        element:<AuthLayout />,
        children: [
            {
                path:'login',
                element:<LoginPage />
            },
            {
                path:'register',
                element:<RegisterPage />
            }
        ]

    },
    
]);