import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { faBehance, faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/home.css";

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
  section: {
    padding: theme.spacing(4),
    background: "#f9dee2",
    marginTop: "6em",
  },
  statItem: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  statValue: {
    fontSize: "3em",
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: "1.2em",
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
          <h3 className="title">Tapesh Patel</h3>
          <h1 className="header-1 slide-in-left">Front-End Developer</h1>
          <h1 className="header-2 slide-in-right">UI-UX Designer</h1>
          <p className="subtitle">Why should you hire me for your next job?</p>
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
          <h3 className="m-title">Tapesh Patel</h3>
          <h1 className="m-header-1 slide-in-left">Front-End Developer</h1>
          <h1 className="m-header-2 slide-in-right">UI-UX Designer</h1>
          <p className="m-subtitle">Why should you hire me for your next job?</p>
          <Button className="m-more-btn" href="/aboutme">
            Find more
          </Button>
          <Box className="m-home-icons">
            <RenderIcons />
          </Box>
        </Box>
      </div>
      <Box className={classes.section}>
        <Box className={"section-main"}>
          <div className={classes.statItem}>
            <div className={classes.statValue}>50+</div>
            <div className={classes.statLabel}>Projects Completed</div>
          </div>
          <div className={classes.statItem}>
            <div className={classes.statValue}>3</div>
            <div className={classes.statLabel}>Languages Known</div>
          </div>
          <div className={classes.statItem}>
            <div className={classes.statValue}>5</div>
            <div className={classes.statLabel}>Years of Experience</div>
          </div>
        </Box>

        <Box className="message-wrapper">
          <Typography variant="h6">
            Welcome to my personal portfolio! I'm passionate about JavaScript and its power to create dynamic,
            interactive web experiences. My journey in learning JavaScript began with countless hours on YouTube,
            turning tutorials into real-world projects. Here, you'll find a showcase of my skills, experiences, and the
            projects that highlight my dedication and growth as a developer. Dive in to see how my passion and
            perseverance have shaped my journey in the tech world.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
