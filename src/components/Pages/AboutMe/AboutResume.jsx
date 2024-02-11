import { Box, Divider } from "@material-ui/core";
import React from "react";
import Header from "../../Header/Header";

const AboutResume = () => {
    const resumeDetails = [
        {
            id: 1,
            title: "MASTER OF SCIENCE IN INFORMATION SYSTEMS WITH COMPUTING",
            year: "2017-2019",
            location: "Dublin Business School, Ireland",
        },
        {
            id: 2,
            title: "BACHELOR OF ELECTRICAL ENGINEERING",
            year: "2011-2006",
            location: "North Maharashtra University, Jalgoan, India",
        },
        {
            id: 3,
            title: "BOYS TOWN PUBLIC SCHOOL",
            year: "2009-2010",
            location: "Pune University Nashik, India",
        },
        {
            id: 4,
            title: "APPLICATION DEVELOPER",
            year: "2020-2023",
            location: "Kare, Newbridge, Ireland",
        },
        {
            id: 5,
            title: "JUNIOR DEVELOPER",
            year: "2019-2020",
            location: "Unipupil Limited, Dublin, Ireland",
        },
        {
            id: 6,
            title: "JUNIOR DEVELOPER",
            year: "2017-2019",
            location: "Global Prospect Media Solutions, Vadodara, India",
        },
    ];

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
