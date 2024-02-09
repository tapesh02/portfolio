import React from "react";
import { Box, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const AboutMeDetail = () => {
    const detailsData = [
        { texHeader: "Birthday: ", text: "19 June 1993", icon: true },
        { texHeader: "Phone: ", text: "+353 0899876363", icon: true },
        { texHeader: "Location: ", text: "Newbridge, Ireland", icon: true },
        { texHeader: "Age: ", text: "28", icon: true },
        { texHeader: "Email: ", text: "pateltapesh505@gmail.com", icon: true },
        { texHeader: "Degree: ", text: "Masters In Software Engineering", icon: true },
    ];

    const AboutDetail = ({ icon, texHeader, text }) => (
        <Box className="about-inner-details">
            {icon && <ChevronRightIcon />}
            <Typography className="about-details-text">
                {texHeader}
                <span className="span-text">{text}</span>
            </Typography>
        </Box>
    );

    const AboutDetailsSection = () => (
        <Box className="about-details">
            {detailsData.map((detail, index) => (
                <Box key={index} className="about-details-content">
                    <AboutDetail {...detail} />
                </Box>
            ))}
        </Box>
    );

    return <AboutDetailsSection />;
};

export default AboutMeDetail;
