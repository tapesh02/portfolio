import { Box, Divider } from "@material-ui/core";
import React from "react";
import { CardTravel, LibraryMusic, Movie, People, SportsSoccer } from "@material-ui/icons";

const AboutHobbies = () => {
    return (
        <Box className="main-hobbies">
            <Box className="main-hobbies-header">
                <p className="hobbies-header"> Hobbies </p>
                <span>
                    <Divider className="divider" />
                </span>
            </Box>
            <Box className="main-hobbies-icons">
                <Box className="car-icon" data-aos="flip-up">
                    <CardTravel />
                    <p className="hobby-name">travel</p>
                </Box>
                <Box className="car-icon" data-aos="flip-down">
                    <Movie />
                    <p className="hobby-name">Movie</p>
                </Box>
                <Box className="car-icon" data-aos="flip-up">
                    <SportsSoccer />
                    <p className="hobby-name">Playing</p>
                </Box>
                <Box className="car-icon" data-aos="flip-down">
                    <LibraryMusic />
                    <p className="hobby-name">Music</p>
                </Box>
                <Box className="car-icon" data-aos="flip-up">
                    <People />
                    <p className="hobby-name">Socializing</p>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutHobbies;
