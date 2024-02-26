import React from "react";
import { Link, NavLink } from "react-router-dom";
import { menu } from "../../dataProviders";

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

    const RenderNavMenu = () =>
        menu.map((item, i) => (
            <Button
                key={i}
                color="inherit"
                component={NavLink}
                to={item.link}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {item.name}
            </Button>
        ));
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
                <RenderNavMenu />
            </Toolbar>
        </AppBar>
    );
};

export default DesktopNavBar;
