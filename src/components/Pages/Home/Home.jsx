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

const icons = [
    { id: 1, name: "gitIcon", icon: faGithub, link: "https://github.com/tapesh02" },
    { id: 2, name: "dribbleIcon", icon: faDribbble, link: "https://github.com/tapesh02" },
    { id: 3, name: "behanceIcon", icon: faBehance, link: "https://www.behance.net/tapeshpatel2" },
];

const RenderIcons = () =>
    icons.map((icon) => (
        <Button
            key={icon.id}
            className="giticon-btn"
            disableElevation
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon className={icon.name} icon={icon.icon} />
        </Button>
    ));

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
                    <RenderIcons />
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
                        <RenderIcons />
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Home;
