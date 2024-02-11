import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Assignment, Home, Person } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faTwitter, faMedium, faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoComp from "../Logo/LogoComp";
import profileimg from "../../images/profileimg.jpg";
import { Link } from "react-router-dom";
import { Backdrop, Box } from "@material-ui/core";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
    hideMobile: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    root: {
        display: "flex",
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: "85vw",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "85vw",
        padding: "10px",
        backgroundColor: "#fe7bb0",
        backgroundImage: "linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%)",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    },
    menuicons: {
        color: "white",
        width: "2rem",
        height: "2rem",
    },
    famenuicons: {
        width: "2em",
        height: "2em",
        color: "white",
    },

    socialicons: {
        display: "inline-flex",
        // marginTop: "50%",
        marginTop: "auto",
        marginInlineStart: "5%",
        "& a": {
            color: "white",
            margin: "0px 1%",
            padding: "0%",
            width: "45px",
            height: "45px",
            "& .MuiListItemIcon-root": {
                width: "inherit",
                height: "inherit",
                alignItems: "center",

                "& .fa-twitter": {
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "1s !important",
                },
                "& .fa-linkedin": {
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "2s !important",
                },
                "& .fa-dribbble ": {
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "3s !important",
                },
                "& .fa-medium": {
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "4s !important",
                },
                "& .fa-behance": {
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "5s !important",
                },
            },
        },
    },
    headerimg: {
        gap: "5%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "5%",
        marginBottom: "10%",
    },

    img: {
        objectFit: "cover",
        margin: "2%",
        borderRadius: "50%",
        // boxShadow: "1px 2px 6px white",
        border: "5px white solid",
    },
}));

const MobileNavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);

        if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
            document.body.style.background = "blur(2px)";
        }
    };

    const handleDrawerClose = () => {
        setOpen(false);
        document.body.style.overflow = "unset";
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
       
            <div className={(classes.root, classes.hideMobile)}>
                <CssBaseline />
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar style={{ alignItems: "center" }}>
                        <Typography style={{ flexGrow: "1", marginTop: "2%" }}>
                            <Link to="/">
                                <LogoComp />
                            </Link>
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Backdrop className={classes.backdrop} open={open} onClick={handleDrawerClose}>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="right"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === "rtl" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon fontSize="large" style={{ color: "white" }} />
                                )}
                            </IconButton>
                        </div>
                        {/* <Divider /> */}
                        <Box className={classes.headerimg}>
                            <img src={profileimg} alt="myimg" width="90" height="90" className={classes.img} />
                            <Typography variant="h3" style={{ fontFamily: "Varela Round, sans-serif" }}>
                                Tapesh Patel
                            </Typography>
                        </Box>
                        <List>
                            <ListItemLink href="/" style={{ color: "white" }}>
                                <ListItemIcon>
                                    <Home className={classes.menuicons} />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemLink>
                            <ListItemLink href="/aboutme" style={{ color: "white" }}>
                                <ListItemIcon>
                                    <Person className={classes.menuicons} />
                                </ListItemIcon>
                                <ListItemText primary="About Me" style={{ color: "white" }} />
                            </ListItemLink>
                            <ListItemLink href="/projects">
                                <ListItemIcon>
                                    <Assignment className={classes.menuicons} />
                                </ListItemIcon>
                                <ListItemText primary="Projects" style={{ color: "white" }} />
                            </ListItemLink>
                        </List>
                        {/* <Divider /> */}
                        <Box className={classes.socialicons}>
                            <ListItemLink href="https://twitter.com/tapesh2" target="_blank" rel="noopener noreferrer">
                                <ListItemIcon>
                                    <FontAwesomeIcon className={classes.famenuicons} icon={faTwitter} />
                                </ListItemIcon>
                            </ListItemLink>
                            <ListItemLink
                                href="https://www.linkedin.com/in/tapesh-patel-276a65a4/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <ListItemIcon>
                                    <FontAwesomeIcon className={classes.famenuicons} icon={faLinkedin} />
                                </ListItemIcon>
                            </ListItemLink>
                            <ListItemLink href="https://dribbble.com/Tapesh_Patel">
                                <ListItemIcon>
                                    <FontAwesomeIcon className={classes.famenuicons} icon={faDribbble} />
                                </ListItemIcon>
                            </ListItemLink>
                            <ListItemLink
                                href="https://medium.com/@tapesh.patel"
                                target="_blank"
                                rel="noopener noreferrer">
                                <ListItemIcon>
                                    <FontAwesomeIcon className={classes.famenuicons} icon={faMedium} />
                                </ListItemIcon>
                            </ListItemLink>
                            <ListItemLink
                                href="https://www.behance.net/tapeshpatel"
                                target="_blank"
                                rel="noopener noreferrer">
                                <ListItemIcon>
                                    <FontAwesomeIcon className={classes.famenuicons} icon={faBehance} />
                                </ListItemIcon>
                            </ListItemLink>
                        </Box>
                        <div
                            style={{
                                display: "inline-flex",
                                gap: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "inherit",
                            }}>
                            <FontAwesomeIcon className={classes.famenuicons} icon={faCopyright} />
                            <p style={{ color: "white", letterSpacing: "1.2px", padding: "0%", margin: "0%" }}>
                                {" "}
                                Copyright reserved by Tapesh Patel
                            </p>
                        </div>
                    </Drawer>
                </Backdrop>
            </div>
       
    );
};

export default MobileNavBar;
