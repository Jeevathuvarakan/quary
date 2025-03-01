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
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Projects from "../pages/Projects";
import Services from "../pages/Services";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUs />} />
        </Route>
    )
);

const Root = () => {
    return <RouterProvider router={router} />;
};

export default Root;
