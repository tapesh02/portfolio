import React from "react";
import { getImage } from "../../../imageHelper";
import { Box, Divider } from "@material-ui/core";

const AboutTechnologies = () => {
    return (
        <Box className="main-tech">
            <Box className="main-tech-header">
                <p className="tech-header"> Technologies </p>
                <span>
                    <Divider className="divider" />
                </span>
            </Box>
            <Box className="main-tech-overview">
                <p className="tech-overviewText">
                    Since I started working as professional, I have worked on many different projects and technologies,
                    but very a few of them which I prefer are more common to me when I say skills.
                </p>
            </Box>
            <Box className="tech-list">
                <Box className="tech-list-1" data-aos="fade-up">
                    <Box className="tech-list-icons">
                        <img src={getImage("powerappsIcon")} alt="powerAppIcon" width="30" height="30" />
                        <p>PowerApps</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("powerautoIcon")} alt="powerautoIcon" width="30" height="30" />
                        <p>PowerAutomate</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("sharepointIcon")} alt="sharepointIcon" width="30" height="30" />
                        <p>SharePoint</p>
                    </Box>
                </Box>
                <Box className="tech-list-1" data-aos="fade-up">
                    <Box className="tech-list-icons">
                        <img src={getImage("reactjsIcon")} alt="reactjsIcon" width="30" height="30" />
                        <p>React Js</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("nodejsIcon")} alt="nodejsIcon" width="30" height="30" />
                        <p>Node Js</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("photoshopIcon")} alt="photoshopIcon" width="30" height="30" />
                        <p>Photoshop</p>
                    </Box>
                </Box>
                <Box className="tech-list-1" data-aos="fade-up">
                    <Box className="tech-list-icons">
                        <img src={getImage("adobexdIcon")} alt="adobexdIcon" width="30" height="30" />
                        <p>Adobe XD</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("saasIcon")} alt="saasIcon" width="30" height="30" />
                        <p>CSS/SASS/SCSS</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("gitIcon")} alt="gitIcon" width="30" height="30" />

                        <p>Git Version/Source Control</p>
                    </Box>
                </Box>
                <Box className="tech-list-1" data-aos="fade-up">
                    <Box className="tech-list-icons">
                        <img src={getImage("mongodbIcon")} alt="mongodbIcon" width="30" height="30" />
                        <p>No SQL (MongoDb)</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("expressjsIcon")} alt="expressjsIcon" width="30" height="30" />
                        <p>Express Js</p>
                    </Box>
                    <Box className="tech-list-icons">
                        <img src={getImage("muiIcon")} alt="muiIcon" width="30" height="30" />
                        <p>Material UI/Bootstrap CSS</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutTechnologies;
