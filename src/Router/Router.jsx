import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import Error from '../pages/Error/Error'

import Donation from '../pages/donation/Donation'
import Statistics from "../pages/statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch('/donation.json'),
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donation/:id",
                element: <div>donation id</div>,
                loader: () => fetch("donation.json")
            },

        ],

    },
    // {
    //     path: "/error",
    //     element: <Error></Error>
    // },
]);

export default router;