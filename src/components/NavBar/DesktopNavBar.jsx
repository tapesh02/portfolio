import React from "react";
import { Link, NavLink } from "react-router-dom";

import LogoComp from "../Logo/LogoComp";
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    showDesktop: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

const DesktopNavBar = () => {
    const classes = useStyles();
    const activeStyle = {
        borderBottom: "2px solid #FE4747 ",
        borderRadius: "2px",
    };
    return (
        <AppBar position="static" color="transparent" elevation={0} className={classes.showDesktop}>
            <Toolbar>
                <Typography style={{ flexGrow: "1" }}>
                    <Link
                        to="/
                        ">
                        <LogoComp />
                    </Link>
                </Typography>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Home
                </Button>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/aboutme"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    About me
                </Button>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/projects"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Projects
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default DesktopNavBar;
