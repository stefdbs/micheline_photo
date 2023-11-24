import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Contact } from "@/Pages/Public/Index";

import Layout from "@/Layouts/Layout";

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />


            </Route>
        </Routes>
    );
};

export default PublicRouter;
