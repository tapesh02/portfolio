import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Backdrop,
    Box,
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Assignment, Home, Person } from "@material-ui/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faTwitter, faMedium, faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import LogoComp from "../Logo/LogoComp";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { menu } from "../../dataProviders";
import { getImage } from "../../imageHelper";

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
    menuIcons: {
        color: "white",
        width: "2rem",
        height: "2rem",
    },
    faMenuIcons: {
        width: "2em",
        height: "2em",
        color: "white",
    },

    socialIcons: {
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

    headerImg: {
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
        border: "5px white solid",
    },
}));

const MobileNavBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const icons = [
        { id: 1, icon: faTwitter, link: "https://twitter.com/tapesh2" },
        { id: 2, icon: faLinkedin, link: "https://www.linkedin.com/in/tapesh-patel-276a65a4/" },
        { id: 3, icon: faDribbble, link: "https://dribbble.com/Tapesh_Patel" },
        { id: 4, icon: faBehance, link: "https://www.behance.net/tapeshpatel2" },
        { id: 4, icon: faMedium, link: "https://medium.com/@tapesh.patel" },
    ];

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

    const RenderNavMenu = () =>
        menu.map((item, index) => (
            <List key={item.name}>
                <ListItemLink href={item.link} style={{ color: "white" }}>
                    <ListItemIcon>
                        {index === 0 && <Home className={classes.menuIcons} />}
                        {index === 1 && <Assignment className={classes.menuIcons} />}
                        {index === 2 && <Person className={classes.menuIcons} />}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItemLink>
            </List>
        ));

    const RenderIcons = () =>
        icons.map((_icon) => {
            const { id, icon, link } = _icon;
            return (
                <ListItemLink key={id} href={link} target="_blank" rel="noopener noreferrer">
                    <ListItemIcon>
                        <FontAwesomeIcon className={classes.faMenuIcons} icon={icon} />
                    </ListItemIcon>
                </ListItemLink>
            );
        });

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

                    <Box className={classes.headerImg}>
                        <img
                            src={getImage("profileImg2")}
                            alt="profileImg2"
                            width="90"
                            height="90"
                            className={classes.img}
                        />
                        <Typography variant="h3" style={{ fontFamily: "Varela Round, sans-serif" }}>
                            Tapesh Patel
                        </Typography>
                    </Box>

                    <RenderNavMenu />

                    <Box className={classes.socialIcons}>
                        <RenderIcons />
                    </Box>
                    <div
                        style={{
                            display: "inline-flex",
                            gap: "10px",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "inherit",
                        }}>
                        <FontAwesomeIcon className={classes.faMenuIcons} icon={faCopyright} />
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
