import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Aos from "aos";

import { scrollToTop, toggleVisible } from "../../../helpers";

import "../../../../node_modules/aos/dist/aos.css";
import "../../../css/aboutme.css";

import { Box, Button, Typography } from "@material-ui/core";

import { ArrowUpward } from "@material-ui/icons";

import { getImage } from "../../../imageHelper";
import AboutMeDetail from "./AboutMeDetail";
import AboutTechnologies from "./AboutTechnologies";
import AboutResume from "./AboutResume";
import AboutHobbies from "./AboutHobbies";
import ContactForm from "./ContactForm";

const AboutMe = () => {
    const onDownloadCv = () => {
        saveAs("/files/Tapesh's Resume.docx", "Tapesh's Resume.docx");
    };

    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        toggleVisible(300, setVisible);
    };

    const handleScroll = () => {
        scrollToTop(0, "smooth");
    };

    window.addEventListener("scroll", handleToggle);

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
                        <Typography className="about-title">
                            PowerApps Developer, Full-stack Developer & UI/UX Designer
                        </Typography>
                        <Typography className="about-intro">
                            I'm obsessed with making things creative and more keen on making things better. I have been
                            working as a web developer and software developer for the past few years. I wrote my first
                            HTML code when I was 16 years old, which then made me more curious about pursuing my career
                            as a web designer and developer during my college days. Moreover, I have been actively
                            involved in creating the best web designs for my clients, which are mostly start-ups, and
                            some of them are large business firms. I also started freelancing when I completed my
                            master's in Ireland, where I helped people who are in need of some creative web design
                            within a limited time span.
                        </Typography>
                        <Typography className="about-intro">
                            My specialty lies in creating dynamic and catchy front-end web designs and developing them,
                            as well as designing hybrid mobile apps using Power Apps, Power Automate, and Dynamic 365.
                            Apart from work, I also prefer to go on solo trips, attend developer conferences, watch
                            football matches, and hang out with friends.
                        </Typography>
                    </Box>
                    <AboutMeDetail />
                </Box>
            </Box>
            <Box style={{ width: "100%", margin: "2% auto", textAlign: "center" }}>
                <Button variant="contained" className="download-btn" onClick={onDownloadCv}>
                    Download
                </Button>
            </Box>
            <Box className="arrowIcon-btn">
                <ArrowUpward
                    style={{ display: visible ? "block" : "none" }}
                    className="arrowIcon"
                    onClick={handleScroll}
                />
            </Box>
            <AboutTechnologies />
            <AboutResume />
            <AboutHobbies />
            <ContactForm />
        </>
    );
};

export default AboutMe;
