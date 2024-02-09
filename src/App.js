import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home/Home";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import Projects from "./components/Pages/Projects/Projects";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default App;
