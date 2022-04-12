import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import AboutMe from "./components/Pages/AboutMe";
import Projects from "./components/Pages/Projects";
import Error from "./components/Error/Error";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
