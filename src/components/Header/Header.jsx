import { Box, Divider } from "@material-ui/core";
import React from "react";

const Header = (props) => {
    const { mainHeaderClass, headerClass, headerText } = props;
    return (
        <Box className={mainHeaderClass}>
            <p className={headerClass}> {headerText} </p>
            <span>
                <Divider className="divider" />
            </span>
        </Box>
    );
};

export default Header;
