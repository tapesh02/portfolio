import React, { useEffect, useState } from "react";
import Aos from "aos";

import { scrollToTop, toggleVisible } from "../../../helpers";

import "../../../../node_modules/aos/dist/aos.css";
import "../../../css/aboutme.css";

import { Box, Typography } from "@material-ui/core";

import { getImage } from "../../../imageHelper";
import ArrowUp from "../../ArrowUp/ArrowUp";

import AboutTechnologies from "./AboutTechnologies";
import AboutResume from "./AboutResume";
import AboutHobbies from "./AboutHobbies";
import ContactForm from "./ContactForm";

const AboutMe = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    toggleVisible(300, setVisible);
  };

  const handleScroll = () => {
    scrollToTop(0, "smooth");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleToggle);
    return () => {
      window.removeEventListener("scroll", handleToggle);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Box className="main-about">
        <Box className="img-box">
          <img src={getImage("profileImg")} alt="profileImg" width="90%" height="90%" />
        </Box>
        <Box className="content-box">
          <Box className="main-about-title-intro">
            <Typography className="about-title">React Developer, Front-End Developer & UI/UX Designer</Typography>
            <Typography className="about-intro">
              I'm obsessed with making things creative and more keen on making things better. I have been working as a
              web developer and software developer for the past few years. I wrote my first HTML code when I was 16
              years old, which then made me more curious about pursuing my career as a web designer and developer during
              my college days. Moreover, I have been actively involved in creating the best web designs for my clients,
              which are mostly start-ups, and some of them are large business firms. I also started freelancing when I
              completed my master's in Ireland, where I helped people who are in need of some creative web design within
              a limited time span.
            </Typography>
            <Typography className="about-intro">
              My specialty lies in creating dynamic and catchy front-end web designs and developing web apps, as well as
              designing hybrid mobile apps. Some of skills that I use on daily basis are React, Azure Devops, and Git
              version and source control. Apart from work, I also prefer to go on solo trips, attend developer
              conferences, watch football matches, and hang out with friends.
            </Typography>
          </Box>
        </Box>
      </Box>
      <ArrowUp visible={visible} handleScroll={handleScroll} className={"arrowIcon-btn"} />
      <AboutTechnologies />
      <AboutResume />
      <AboutHobbies />
      <ContactForm />
    </>
  );
};

export default AboutMe;
