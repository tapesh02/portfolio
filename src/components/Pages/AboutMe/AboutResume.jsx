import { Box, Divider } from "@material-ui/core";
import React from "react";
import Header from "../../Header/Header";
import { resumeDetails } from "../../../dataProviders";

const AboutResume = () => {
    const RenderResumeDetails = ({ start, end }) => (
        <Box className="education-section">
            <Box className="education-divider">
                <Divider orientation="vertical" />
            </Box>
            <Box className="education-details">
                {resumeDetails.slice(start, end).map((education) => {
                    const { id, title, year, location } = education;
                    return (
                        <React.Fragment>
                            <div className="circle"> </div>
                            <div key={id} className="not-circle" data-aos="zoom-in-up">
                                <p className="resume-title">{title}</p>
                                <p className="resume-year">{year}</p>
                                <p className="resume-location">{location}</p>
                            </div>
                        </React.Fragment>
                    );
                })}
            </Box>
        </Box>
    );

    return (
        <Box className="main-resume">
            <Header mainHeaderClass={"main-resume-header"} headerClass={"resume-header"} headerText={"Resume"} />
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
                    <RenderResumeDetails start={0} end={3} />
                </Box>
                <Box className="resume-main-experience">
                    <p className="experience-header">Experience</p>
                    <RenderResumeDetails start={3} end={6} />
                </Box>
            </Box>
        </Box>
    );
};

export default AboutResume;
