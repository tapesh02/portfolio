import { Box } from "@material-ui/core";
import React from "react";
import Header from "../../Header/Header";
import { hobbies } from "../../../dataProviders";

const AboutHobbies = () => {
    const RenderHobbies = () =>
        hobbies.map((hobby) => {
            const { id, hobbyName, icon } = hobby;
            return (
                <Box key={id} className="car-icon" data-aos="flip-up">
                    {icon}
                    <p className="hobby-name">{hobbyName}</p>
                </Box>
            );
        });

    return (
        <Box className="main-hobbies">
            <Header mainHeaderClass={"main-hobbies-header"} headerClass={"hobbies-header"} headerText={"Hobbies"} />
            <Box className="main-hobbies-icons">
                <RenderHobbies />
            </Box>
        </Box>
    );
};

export default AboutHobbies;
