import { Box } from "@material-ui/core";
import React from "react";
import Header from "../../Header/Header";
import { resumeDetails } from "../../../dataProviders";
import AboutHeader from "./AboutHeader";

const AboutResume = () => {
    const RenderResumeDetails = () =>
        resumeDetails.map((details, i) => (
            <div
                key={i}
                className="resume-content"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="outer-circle">
                    <div className="hr-center"></div>
                    <div className="resume-icons">
                        <img src={details.image} alt="resume icons" />
                    </div>
                </div>
                <hr className="vr-center" />
                <span className="circle-dot"></span>
                <div className="text-content">
                    <p className="resume-title">{details.title}</p>
                    <p className="resume-year">{details.year}</p>
                </div>
                <p className="resume-location">{details.location}</p>
            </div>
        ));

    return (
        <Box className="main-resume">
            <AboutHeader
                mainHeaderClass={"main-resume-header"}
                headerClass={"resume-header"}
                headerText={"Resume"}
                overviewMainClass={"main-resume-overview"}
                overviewClass={"resume-overviewText"}
                overviewText={
                    "Motivated web developer with a proven track record and progressive experience in the IT industry. Offering expertise in web development, and eye-catching user-interface, with aptitude in power platform (office 365 suits). An energetic self-starter and team builder able to navigate high-stress situations and achieve goals on time and under budget."
                }
            />
            <Box id="resume-details-main">
                <RenderResumeDetails />
            </Box>
        </Box>
    );
};

export default AboutResume;
