import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Register from "./src/pages/Register";
import Layout from "./src/Layout";
import TopRated from "./src/pages/Top Rated";
import VideoPlayed from "./src/pages/VideoPlayed";

export const routers = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/toprated",
                element:<TopRated/>
            },
            {
                path: "/movies/:moviesSlug",
                element:<VideoPlayed/>
            }
        ]
    },
    
    {
        path: "/login",
        element: <Login />,
        extract: true
    },
    {
        path: "*",
        element: <Navigate to="/login" />,
        extract: true
    },
    {
        path: "/register",
        element: <Register />,
        extract: true
    },
])