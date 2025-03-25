import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import NotFound from "../Layout/NotFound";
import Home from "../pages/Home";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import Projects from "../pages/Projects";
import HomeService from "../components/Home/HomeService";
import HomeContactUs from "../components/Home/HomeContactUs";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<HomeAboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<HomeService />} />
            <Route path="/contactus" element={<HomeContactUs />} />
        </Route>
    )
);

const Root = () => {
    return <RouterProvider router={router} />;
};

export default Root;
