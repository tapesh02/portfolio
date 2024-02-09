import { Box, Divider } from "@material-ui/core";
import React from "react";

const AboutResume = () => {
    return (
        <Box className="main-resume">
            <Box className="main-resume-header">
                <p className="resume-header"> Resume </p>
                <span>
                    <Divider className="divider" />
                </span>
            </Box>
            <Box className="main-resume-overview">
                <p className="resume-overviewText">
                    Motivated web developer with a proven track record and progressive experience in the IT industry.
                    Offering expertise in web development, and eye-catching user-interface, with aptitude in power
                    platform (office 365 suits). An energetic self-starter and team builder able to navigate high-stress
                    situations and achieve goals on time and under budget.
                </p>
            </Box>
            <Box className="resume-details">
                <Box className="resume-main-education">
                    <p className="education-header">Education</p>
                    <Box className="education-section">
                        <Box className="education-divider">
                            <Divider orientation="vertical" />
                        </Box>
                        <Box className="education-details">
                            <div className="circle"> </div>
                            <div className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">MASTER OF SCIENCE IN INFORMATION SYSTEMS WITH COMPUTING</p>
                                <p className="resume-year"> 2017-2019</p>
                                <p className="resume-location">Dublin business school, ireland</p>
                            </div>
                            <div className="circle"> </div>
                            <div className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">BACHELOR OF ELECTRICAL ENGINEERING</p>
                                <p className="resume-year"> 2011-2006</p>
                                <p className="resume-location">North Maharashtra University, Jalgoan, India</p>
                            </div>
                            <div className="circle"> </div>
                            <div className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">Boys Town Public School</p>
                                <p className="resume-year"> 2009-2010</p>
                                <p className="resume-location">Pune University Nashik, India</p>
                            </div>
                        </Box>
                    </Box>
                </Box>
                <Box className="resume-main-experience">
                    <p className="experience-header">Experience</p>
                    <Box className="education-section">
                        <Box className="education-divider">
                            <Divider orientation="vertical" />
                        </Box>
                        <Box className="education-details">
                            <div className="circle"> </div>
                            <div className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">APPLICATION DEVELOPER</p>
                                <p className="resume-year"> 2020-Present</p>
                                <p className="resume-location">Kare, Newbridge, Ireland</p>
                            </div>
                            <div className="circle"> </div>
                            <div className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">JUNIOR DEVELOPER</p>
                                <p className="resume-year"> 2019-2020</p>
                                <p className="resume-location">Unipupil Limited, Dublin, Ireland</p>
                            </div>
                            <div className="circle"> </div>
                            <div className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">JUNIOR DEVELOPER</p>
                                <p className="resume-year"> 2017-2019</p>
                                <p className="resume-location">Global Prospect Media Solutions, Vadodara, India</p>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutResume;
