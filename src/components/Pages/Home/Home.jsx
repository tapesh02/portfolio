import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

import "../../../css/home.css";
import { faBehance, faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
    hideMobile: {
        height: "calc(100vh - 64px)",
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },

    hideDesktop: {
        height: "calc(100vh - 64px)",
        [theme.breakpoints.up(600)]: {
            display: "none",
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hideMobile}>
                <Box className="home-main">
                    <h3 className="title">Tapesh patel </h3>
                    <h1 className="header-1 slide-in-left "> Front-End developer</h1>
                    <h1 className="header-2 slide-in-right"> UI-UX Designer</h1>
                    <p className="subtitle"> Why should you hire me for your next job ?</p>
                </Box>
                <Button className="more-btn" variant="contained" href="/aboutme">
                    Find more
                </Button>
                <Box className="home-icons">
                    <Button
                        className="giticon-btn"
                        disableElevation
                        href="https://github.com/tapesh02"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                    </Button>
                    <Button
                        className="giticon-btn"
                        disableElevation
                        href="https://dribbble.com/Tapesh_Patel"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon className="dribbleIcon" icon={faDribbble} />
                    </Button>
                    <Button
                        className="giticon-btn"
                        disableElevation
                        href="https://www.behance.net/tapeshpatel"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon className="behanceIcon" icon={faBehance} />
                    </Button>
                </Box>
            </div>

            <div className={classes.hideDesktop}>
                <Box className="m-home-main">
                    <h3 className="m-title">Tapesh patel </h3>
                    <h1 className="m-header-1 slide-in-left "> Front-End developer</h1>
                    <h1 className="m-header-2 slide-in-right"> UI-UX Designer</h1>
                    <p className="m-subtitle"> Why should you hire me for your next job ?</p>
                    <Button className="m-more-btn" href="/aboutme">
                        Find more
                    </Button>
                    <Box className="m-home-icons">
                        <Button
                            disableElevation
                            href="https://github.com/tapesh02"
                            target="_blank"
                            rel="noopener noreferrer ">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </Button>
                        <Button
                            disableElevation
                            href="https://dribbble.com/Tapesh_Patel"
                            target="_blank"
                            rel="noopener noreferrer ">
                            <FontAwesomeIcon className="dribbleIcon" icon={faDribbble} />
                        </Button>
                        <Button
                            disableElevation
                            href="https://dribbble.com/Tapesh_Patel"
                            target="_blank"
                            rel="noopener noreferrer ">
                            <FontAwesomeIcon className="behanceIcon" icon={faBehance} />
                        </Button>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Home;
