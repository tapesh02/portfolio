import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Box, Typography } from "@material-ui/core";

import "./errorPage.css";

const ErrorPage = () => {
    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);

    return (
        <Box data-aos="fade-zoom-in" className="error-main">
            <p className="zoom-area"></p>
            <section className="error-container">
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
                <span className="zero">
                    <span className="screen-reader-text">0</span>
                </span>
                <span className="four">
                    <span className="screen-reader-text">4</span>
                </span>
            </section>
            <div className="link-container">
                <Typography className="more-link">Ops... seems like you have entered wrong details</Typography>
            </div>
        </Box>
    );
};

export default ErrorPage;
