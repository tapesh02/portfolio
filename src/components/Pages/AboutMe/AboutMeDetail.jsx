import React from "react";
import { Box, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { detailsData } from "../../../dataProviders";

const AboutMeDetail = () => {
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
