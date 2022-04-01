import React from "react";
import { Box, Button } from "@material-ui/core";

import "../Pages/css/project.css";
import { LinkedIn, Twitter, YouTube } from "@material-ui/icons";
const Projects = () => {
    return (
        <>
            <Box className="project-nav">
                <Button variant="contained" className="project-nav-btn ">
                    ui/ux
                </Button>
                <Button variant="contained" className="project-nav-btn ">
                    Full-stack
                </Button>
                <Button variant="contained" className="project-nav-btn ">
                    PowerApps
                </Button>
            </Box>
            <Box className="main-project-section">
                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/users/8875726/screenshots/17887273/media/e05e6169c67909d2531211399dd543cf.jpg?compress=1&resize=1200x900&vertical=top"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>

                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/userupload/2461168/file/original-a959eeeb72b4d079fbc79468846483d2.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>

                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/userupload/2457527/file/original-92e69212ec1434167798a09883013896.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>

                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/userupload/2464671/file/original-3ff117e52b105337129b8c95d9e97756.png?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1200"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>

                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/users/4290451/screenshots/17880758/media/b455ae052c31298bc5efa3ab26a81a6d.png?compress=1&resize=1200x900&vertical=top"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>

                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/users/3010014/screenshots/17878440/media/279f88cf30a1baba48a6c164746d8df0.jpg?compress=1&resize=1200x900&vertical=top"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>

                <Box className="project-section">
                    <Box className="main-card">
                        <Box className="card-img">
                            {" "}
                            <img
                                src="https://cdn.dribbble.com/users/8430061/screenshots/17880549/media/2d5ce9b86bab23003546e1df299238eb.png?compress=1&resize=1200x900&vertical=top"
                                alt="cardimg"
                                className="card-img-inner"
                            />{" "}
                        </Box>
                        <Box className="card-title"> Shop Website </Box>
                        <Box className="card-subtitle"> Landing Page </Box>
                        <Box className="card-footer">
                            <YouTube fontSize="medium" />
                            <Twitter fontSize="medium" />
                            <LinkedIn fontSize="medium" />{" "}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Projects;
