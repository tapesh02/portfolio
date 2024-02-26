import React from "react";
import { technologies } from "../../../dataProviders";
import { Box } from "@material-ui/core";
import Header from "../../Header/Header";
import AboutHeader from "./AboutHeader";

const AboutTechnologies = () => {
    const RenderTechnologies = () =>
        technologies.map((tech) => {
            const { id, image, skills } = tech;
            return (
                <Box key={id} className="tech-list-1" data-aos="fade-up">
                    <Box className="tech-list-icons">
                        <img src={image} alt="powerAppIcon" width="30" height="30" />
                        <p>{skills}</p>
                    </Box>
                </Box>
            );
        });

    return (
        <Box className="main-tech">
            <AboutHeader
                mainHeaderClass={"main-tech-header"}
                headerClass={"tech-header"}
                headerText={"Technologies"}
                overviewMainClass={"main-tech-overview"}
                overviewClass={"tech-overviewText"}
                overviewText={
                    "Since I started working as professional, I have worked on many different projects and technologies,  but very a few of them which I prefer are more common to me when I say skills."
                }
            />
            <Box className="tech-list">
                <RenderTechnologies />
            </Box>
        </Box>
    );
};

export default AboutTechnologies;
