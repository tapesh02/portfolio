import React from "react";
import { Box } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";

const ArrowUp = (props) => {
    const { handleScroll, visible, className } = props;
    return (
        <Box className={className}>
            <ArrowUpward style={{ display: visible ? "block" : "none" }} className="arrowIcon" onClick={handleScroll} />
        </Box>
    );
};

export default ArrowUp;
