import React from "react";
import Header from "../../Header/Header";
import { Box } from "@material-ui/core";

const AboutHeader = (props) => {
    const { mainHeaderClass, headerClass, headerText, overviewMainClass, overviewClass, overviewText } = props;
    return (
        <>
            <Header mainHeaderClass={mainHeaderClass} headerClass={headerClass} headerText={headerText} />
            <Box className={overviewMainClass}>
                <p className={overviewClass}>{overviewText}</p>
            </Box>
        </>
    );
};

export default AboutHeader;
