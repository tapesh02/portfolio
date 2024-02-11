import React from "react";
import { getImage } from "../../../imageHelper";
import { Box } from "@material-ui/core";
import Header from "../../Header/Header";

const AboutTechnologies = () => {
    const technologies = [
        {
            id: 1,
            image: getImage("powerappsIcon"),
            skills: "MS Power Platform",
        },
        {
            id: 2,
            image: getImage("azureDevopsIcon"),
            skills: "AzureDevops/GitLab",
        },
        {
            id: 3,
            image: getImage("firebaseIcon"),
            skills: "Firebase/Vercel",
        },
        {
            id: 4,
            image: getImage("reactjsIcon"),
            skills: "React Js",
        },
        {
            id: 5,
            image: getImage("nodejsIcon"),
            skills: "Node Js",
        },
        {
            id: 6,
            image: getImage("figmaIcon"),
            skills: "Figma",
        },
        {
            id: 7,
            image: getImage("adobexdIcon"),
            skills: "Adobe XD",
        },
        {
            id: 8,
            image: getImage("saasIcon"),
            skills: "CSS/SASS/SCSS",
        },
        {
            id: 9,
            image: getImage("gitIcon"),
            skills: "Git Version/Source Control",
        },
        {
            id: 10,
            image: getImage("mongodbIcon"),
            skills: "No SQL (MongoDb)",
        },
        {
            id: 11,
            image: getImage("expressjsIcon"),
            skills: "Express Js",
        },
        {
            id: 12,
            image: getImage("muiIcon"),
            skills: "Material UI/Bootstrap CSS",
        },
    ];

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
            <Header mainHeaderClass={"main-tech-header"} headerClass={"tech-header"} headerText={"Technologies"} />
            <Box className="main-tech-overview">
                <p className="tech-overviewText">
                    Since I started working as professional, I have worked on many different projects and technologies,
                    but very a few of them which I prefer are more common to me when I say skills.
                </p>
            </Box>
            <Box className="tech-list">
                <RenderTechnologies />
            </Box>
        </Box>
    );
};

export default AboutTechnologies;
