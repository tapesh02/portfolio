import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

import "../../components/Pages/css/home.css";
import { faBehance, faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
    hideMobile: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },

    hideDesktop: {
        [theme.breakpoints.up(600)]: {
            display: "none",
        },
    },
}));
const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.hideMobile} style={{ height: "87.9vh" }}>
                <Box className="home-main">
                    <h3 className="title">Tapesh patel </h3>
                    <h1 className="header-1 slide-in-left "> full-stack developer</h1>
                    <h1 className="header-2 slide-in-right"> UI-UX Designer</h1>
                    <p className="subtitile"> Why should you hire me for your next job ?</p>
                </Box>
                <Button className="more-btn" variant="contained" href="/aboutme">
                    {" "}
                    Find more
                </Button>
                <Box className="home-icons">
                    <Button className="giticon-btn" disableElevation href="https://github.com/tapesh02" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                    </Button>
                    <Button className="giticon-btn" disableElevation href="https://dribbble.com/Tapesh_Patel" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="dribbleIcon" icon={faDribbble} />
                    </Button>
                    <Button className="giticon-btn" disableElevation href="https://www.behance.net/tapeshpatel" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="behanceIcon" icon={faBehance} />
                    </Button>
                </Box>
            </div>

            <div className={classes.hideDesktop} style={{ height: "87.9vh" }}>
                <Box className="m-home-main">
                    <h3 className="m-title">Tapesh patel </h3>
                    <h1 className="m-header-1 slide-in-left "> full-stack developer</h1>
                    <h1 className="m-header-2 slide-in-right"> UI-UX Designer</h1>
                    <p className="m-subtitile"> Why should you hire me for your next job ?</p>
                    <Button className="m-more-btn" href="/aboutme">
                        {" "}
                        Find more
                    </Button>
                    <Box className="m-home-icons">
                        <Button disableElevation href="https://github.com/tapesh02" target="_blank" rel="noopener noreferrer ">
                            <FontAwesomeIcon className="gitIcon" icon={faGithub} />
                        </Button>
                        <Button disableElevation href="https://dribbble.com/Tapesh_Patel" target="_blank" rel="noopener noreferrer ">
                            <FontAwesomeIcon className="dribbleIcon" icon={faDribbble} />
                        </Button>
                        <Button disableElevation href="https://dribbble.com/Tapesh_Patel" target="_blank" rel="noopener noreferrer ">
                            <FontAwesomeIcon className="behanceIcon" icon={faBehance} />
                        </Button>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Home;
