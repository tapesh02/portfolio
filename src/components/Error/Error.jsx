import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Box, Typography } from "@material-ui/core";

import "../../components/Error/error.css";

const Error = () => {
    useEffect(() => {
        Aos.init({ duration: 2500 });
    }, []);

    return (
        <>
            <Box data-aos="fade-zoom-in" className="error-main">
                <p class="zoom-area"></p>
                <section class="error-container">
                    <span class="four">
                        <span class="screen-reader-text">4</span>
                    </span>
                    <span class="zero">
                        <span class="screen-reader-text">0</span>
                    </span>
                    <span class="four">
                        <span class="screen-reader-text">4</span>
                    </span>
                </section>
                <div class="link-container">
                    <Typography className="more-link">Opps... seems like you have entred wrong details</Typography>
                </div>
            </Box>
        </>
    );
};

export default Error;
