import React from "react";
import { Box, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const AboutMeDetail = () => {
    const detailsData = [
        { texHeader: "Birthday: ", text: "19 June 1993" },
        { texHeader: "Phone: ", text: "+353 0899876363" },
        { texHeader: "Location: ", text: "Newbridge, Ireland" },
        { texHeader: "Age: ", text: "28" },
        { texHeader: "Email: ", text: "pateltapesh505@gmail.com" },
        { texHeader: "Degree: ", text: "Masters In Software Engineering" },
    ];

    const AboutDetail = ({ icon, texHeader, text }) => (
        <Box className="about-inner-details">
            <ChevronRightIcon />
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
