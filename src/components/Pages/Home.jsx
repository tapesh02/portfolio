import React from "react";
import { Box, Typography } from "@material-ui/core";

import "../../components/Pages/css/home.css";
import { Link } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

import dribbleIcon from "../../images/icons/dribbleIcon.svg";
import githubIcon from "../../images/icons/githubIcon.svg";
const Home = () => {
    return (
        <>
            <div style={{ height: "87.9vh" }}>
                <Box className="home-main">
                    <h3 className="title">Tapesh patel </h3>
                    <h1 className="header-1"> full-stack developer</h1>
                    <h1 className="header-2"> UI-UX Designer</h1>
                </Box>
                <Box className="home-icons">
                    <Typography variant="h6">
                        Check Out GitHub{" "}
                        <Link to="">
                            <img src={githubIcon} alt="icon" />
                        </Link>
                    </Typography>
                    <Typography variant="h6">
                        {" "}
                        Check Out Dribble
                        <Link to="">
                            <img src={dribbleIcon} alt="icon" />
                        </Link>
                    </Typography>
                </Box>
            </div>
        </>
    );
};

export default Home;
