import { Box } from "@material-ui/core";
import React from "react";
import { CardTravel, LibraryMusic, Movie, People, SportsSoccer } from "@material-ui/icons";
import Header from "../../Header/Header";

const AboutHobbies = () => {
    const hobbies = [
        {
            id: 1,
            hobbyName: "Travel",
            icon: <CardTravel />,
        },
        {
            id: 2,
            hobbyName: "Movie",
            icon: <Movie />,
        },
        {
            id: 3,
            hobbyName: "Playing",
            icon: <SportsSoccer />,
        },
        {
            id: 4,
            hobbyName: "Music",
            icon: <LibraryMusic />,
        },
        {
            id: 5,
            hobbyName: "Socializing",
            icon: <People />,
        },
    ];

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
