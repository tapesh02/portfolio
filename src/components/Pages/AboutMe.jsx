import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Aos from "aos";
import emailjs from "@emailjs/browser";

import "../../../node_modules/aos/dist/aos.css";
import "../../components/Pages/css/about.css";

import { Box, Button, Divider, SvgIcon, TextField, Typography } from "@material-ui/core";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ArrowUpward, CardTravel, LibraryMusic, Movie, People, SportsSoccer } from "@material-ui/icons";

import myimg from "../../images/myimg.jpeg";
import powerappsicon from "../../images/icons/powerappsicon.png";
import powerautoicon from "../../images/icons/powerautoicon.png";
import sharepointicon from "../../images/icons/sharepointicon.png";
import reactjsicon from "../../images/icons/reactjsicon.png";
import nodejsicon from "../../images/icons/nodejsicon.png";
import photoshopicon from "../../images/icons/photoshopicon.png";
import adobexdicon from "../../images/icons/adobexdicon.png";
import saasicon from "../../images/icons/saasicon.png";
import giticon from "../../images/icons/giticon.png";
import mongodbicon from "../../images/icons/mongodbicon.png";
import expressjsicon from "../../images/icons/expressjsicon.png";
import muiicon from "../../images/icons/muiicon.png";

const AboutMe = () => {
    const onDownloadCv = () => {
        saveAs("/files/Tapesh's Resume.docx", "Tapesh's Resume.docx");
    };

    const [visible, setVisible] = useState(false);
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [showMessage, setShowMessage] = useState(false);
    const [showErrorName, setShowErrorName] = useState(false);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPhone, setShowErrorPhone] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };

    const serviceID = `${process.env.REACT_APP_EMAIL_SERVICE_ID}`;
    const tempID = `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`;

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowErrorName(false);
        setShowErrorEmail(false);
        setShowErrorPhone(false);
        setShowErrorMessage(false);

        if (values.name.length <= 5) {
            setShowErrorName(true);
        } else if (values.email.length <= 5) {
            setShowErrorEmail(true);
        } else if (values.phone.length <= 6) {
            setShowErrorPhone(true);
        } else if (values.message.length < 5) {
            setShowErrorMessage(true);
        } else {
            emailjs.send(serviceID, tempID, values, "G9e7dTWheuxDkmHUR").then(
                function (response) {
                    setShowMessage(response.status === 200 ? true : false);
                    setTimeout(() => window.location.reload(), 5000);
                },
                function (error) {
                    window.alert("Technical error, the message was not sent");
                }
            );
        }
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <Box className="main-about">
                <Box className="img-box">
                    <img src={myimg} alt="myimage" width="90%" height="90%" />
                </Box>
                <Box className="content-box">
                    <Box className="main-about-title-intro">
                        <Typography className="about-title">PowerApps Developer, Full-stack Developer & UI/UX Designer</Typography>
                        <Typography className="about-intro">
                            I'm obsessed with making things creative and more keen on making things better. I have been working as a web developer and software developer for the past few years. I
                            wrote my first HTML code when I was 16 years old, which then made me more curious about pursuing my career as a web designer and developer during my college days. Moreover,
                            I have been actively involved in creating the best web designs for my clients, which are mostly start-ups, and some of them are large business firms. I also started
                            freelancing when I completed my master's in Ireland, where I helped people who are in need of some creative web design within a limited time span.
                        </Typography>
                        <Typography className="about-intro">
                            My specialty lies in creating dynamic and catchy front-end web designs and developing them, as well as designing hybrid mobile apps using Power Apps, Power Automate, and
                            Dynamic 365. Apart from work, I also prefer to go on solo trips, attend developer conferences, watch football matches, and hang out with friends.
                        </Typography>
                    </Box>
                    <Box className="about-details">
                        <Box className=" about-details1">
                            <Box className=" about-inner-details">
                                <ChevronRightIcon />
                                <Typography className="about-details-text">
                                    {" "}
                                    <span className="span-text"> Birthday: </span>19 June 1993
                                </Typography>
                            </Box>
                            <Box className=" about-inner-details">
                                <ChevronRightIcon />
                                <Typography className="about-details-text">
                                    {" "}
                                    <span className="span-text"> Phone: </span> +353 0899876363
                                </Typography>
                            </Box>
                            <Box className=" about-inner-details">
                                <ChevronRightIcon />
                                <Typography className="about-details-text">
                                    {" "}
                                    <span className="span-text"> Location: </span>Newbridge, Ireland{" "}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className=" about-details2">
                            <Box className=" about-inner-details">
                                <ChevronRightIcon />
                                <Typography className="about-details-text">
                                    {" "}
                                    <span className="span-text"> Age: </span> 28{" "}
                                </Typography>
                            </Box>
                            <Box className=" about-inner-details">
                                <ChevronRightIcon />
                                <Typography className="about-details-text">
                                    {" "}
                                    <span className="span-text"> Degree: </span> Masters In Software Engineering{" "}
                                </Typography>
                            </Box>
                            <Box className=" about-inner-details">
                                <ChevronRightIcon />
                                <Typography className="about-details-text">
                                    {" "}
                                    <span className="span-text"> Email: </span> pateltapesh505@gmail.com{" "}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{ width: "100%", margin: "2% auto", textAlign: "center" }}>
                <Button variant="contained" className="download-btn" onClick={onDownloadCv}>
                    Download
                </Button>
            </Box>
            <Box className="arrowiconBtn">
                <ArrowUpward style={{ display: visible ? "block" : "none" }} className="arrowicon" onClick={scrollToTop} />
            </Box>
            <Box className="main-tech">
                <Box className="main-tech-header">
                    <p className="tech-header"> Technologies </p>
                    <span>
                        {" "}
                        <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                    </span>
                </Box>
                <Box className="main-tech-overview">
                    <p className="tech-overviewText">
                        Since I started working as professional, I have worked on many different projects and technologies, but very a few of them which I prefer are more common to me when I say
                        skills.
                    </p>
                </Box>
                <Box className="tech-list">
                    <Box className="tech-list-1" data-aos="fade-up">
                        <Box className="tech-list-icons">
                            <img src={powerappsicon} alt="powerAppIcon" width="30" height="30" />
                            <p>PowerApps</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={powerautoicon} alt="powerautoicon" width="30" height="30" />
                            <p>PowerAutomate</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={sharepointicon} alt="sharepointicon" width="30" height="30" />
                            <p>SharePoint</p>
                        </Box>
                    </Box>
                    <Box className="tech-list-1" data-aos="fade-up">
                        <Box className="tech-list-icons">
                            <img src={reactjsicon} alt="reactjsicon" width="30" height="30" />
                            <p>React Js</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={nodejsicon} alt="nodejsicon" width="30" height="30" />
                            <p>Node Js</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={photoshopicon} alt="photoshopicon" width="30" height="30" />
                            <p>Photoshop</p>
                        </Box>
                    </Box>
                    <Box className="tech-list-1" data-aos="fade-up">
                        <Box className="tech-list-icons">
                            <img src={adobexdicon} alt="adobexdicon" width="30" height="30" />
                            <p>Adobe XD</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={saasicon} alt="saasicon" width="30" height="30" />
                            <p>CSS/SASS/SCSS</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={giticon} alt="giticon" width="30" height="30" />

                            <p>Git Version/Source Control</p>
                        </Box>
                    </Box>
                    <Box className="tech-list-1" data-aos="fade-up">
                        <Box className="tech-list-icons">
                            <img src={mongodbicon} alt="mongodbicon" width="30" height="30" />
                            <p>No SQL (MongoDb)</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={expressjsicon} alt="expressjsicon" width="30" height="30" />
                            <p>Express Js</p>
                        </Box>
                        <Box className="tech-list-icons">
                            <img src={muiicon} alt="muiicon" width="30" height="30" />
                            <p>Material UI/Bootstrap CSS</p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className="main-resume">
                <Box className="main-resume-header">
                    <p className="resume-header"> Resume </p>
                    <span>
                        {" "}
                        <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                    </span>
                </Box>
                <Box className="main-resume-overview">
                    <p className="resume-overviewText">
                        Motivated Web developer with 2+ years of progressive experience in the IT industry. Offering expertise in Web development, and eye-catching User-Interface, with aptitude in
                        Power Platform (office 365 suits). An energetic self-starter and team builder able to navigate high-stress situations and achieve goals on time and under budget.
                    </p>
                </Box>
                <Box className="resume-details">
                    <Box className="resume-main-education">
                        <p className="education-header">Education</p>
                        <Box className="education-section">
                            <Box className="education-divider">
                                <Divider orientation="vertical" />
                            </Box>
                            <Box className="education-details">
                                <div className="circle"> </div>
                                <div className="not-circle" data-aos="zoom-in-up">
                                    <p className="resume-title">MASTER OF SCIENCE IN INFORMATION SYSTEMS WITH COMPUTING</p>
                                    <p className="resume-year"> 2017-2019</p>
                                    <p className="resume-location">Dublin business school, ireland</p>
                                </div>
                                <div className="circle"> </div>
                                <div className="not-circle" data-aos="zoom-in-up">
                                    <p className="resume-title">BACHELOR OF ELECTRICAL ENGINEERING</p>
                                    <p className="resume-year"> 2011-2006</p>
                                    <p className="resume-location">North Maharashtra University, Jalgoan, India</p>
                                </div>
                                <div className="circle"> </div>
                                <div className="not-circle" data-aos="zoom-in-up">
                                    <p className="resume-title">Boys Town Public School</p>
                                    <p className="resume-year"> 2009-2010</p>
                                    <p className="resume-location">Pune University Nashik, India</p>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="resume-main-experience">
                        <p className="experience-header">Experience</p>
                        <Box className="education-section">
                            <Box className="education-divider">
                                <Divider orientation="vertical" />
                            </Box>
                            <Box className="education-details">
                                <div className="circle"> </div>
                                <div className="not-circle" data-aos="zoom-in-up">
                                    <p className="resume-title">APPLICATION DEVELOPER</p>
                                    <p className="resume-year"> 2020-Present</p>
                                    <p className="resume-location">Kare, Newbridge, Ireland</p>
                                </div>
                                <div className="circle"> </div>
                                <div className="not-circle" data-aos="zoom-in-up">
                                    <p className="resume-title">JUNIOR DEVELOPER</p>
                                    <p className="resume-year"> 2019-2020</p>
                                    <p className="resume-location">Unipupil Limited, Dublin, Ireland</p>
                                </div>
                                <div className="circle"> </div>
                                <div className="not-circle" data-aos="zoom-in-up">
                                    <p className="resume-title">JUNIOR DEVELOPER</p>
                                    <p className="resume-year"> 2017-2019</p>
                                    <p className="resume-location">Global Prospect Media Solutions, Vadodara, India</p>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className="main-hobbies">
                <Box className="main-hobbies-header">
                    <p className="hobbies-header"> Hobbies </p>
                    <span>
                        {" "}
                        <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                    </span>
                </Box>
                <Box className="main-hobbies-icons">
                    <Box className="car-icon" data-aos="flip-up">
                        <CardTravel />
                        <p className="hobbie-name">travel</p>
                    </Box>
                    <Box className="car-icon" data-aos="flip-down">
                        <Movie />
                        <p className="hobbie-name">Movie</p>
                    </Box>
                    <Box className="car-icon" data-aos="flip-up">
                        <SportsSoccer />
                        <p className="hobbie-name">Playing</p>
                    </Box>
                    <Box className="car-icon" data-aos="flip-down">
                        <LibraryMusic />
                        <p className="hobbie-name">Music</p>
                    </Box>
                    <Box className="car-icon" data-aos="flip-up">
                        <People />
                        <p className="hobbie-name">Socializing</p>
                    </Box>
                </Box>
            </Box>

            <Box className="main-contact-form">
                <Box className="main-contact-form-header">
                    <p className="contact-form-header"> Contact Me </p>
                    <span>
                        {" "}
                        <Divider style={{ width: "inherit", backgroundColor: "#FE4747", height: "3px" }} />
                    </span>
                </Box>
                <Box className="main-contact-details">
                    <Box className="contact-bg">
                        <Box className="contact-form">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <TextField
                                    id="outlined-full-width"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    autoComplete="off"
                                    error={showErrorName}
                                    helperText={showErrorName ? "name required minimum 6 character" : ""}
                                />

                                <TextField
                                    id="outlined-full-width"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    error={showErrorEmail}
                                    helperText={showErrorEmail ? "email required minimum 6 character" : ""}
                                />

                                <TextField
                                    id="outlined-full-width"
                                    name="phone"
                                    type="tel"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    required
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    error={showErrorPhone}
                                    helperText={showErrorPhone ? "phone required minimum 7 number" : ""}
                                />

                                <TextField
                                    id="outlined-full-width"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Message"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    rows={10}
                                    error={showErrorMessage}
                                    helperText={showErrorMessage ? "message required minimum 6 character" : ""}
                                />
                                <Button className="send-btn" type="submit">
                                    {" "}
                                    Send
                                </Button>
                                <p style={showMessage === true ? { display: "inherit", color: "green" } : { display: "none" }}> Your message was sent successfuly. Thanks you ! </p>
                            </form>
                        </Box>
                        <Box className="connected-bg">
                            <Box className="connected-details">
                                <p className="connected-title">Let's get connected</p>
                                <p className="connected-subtitle">
                                    Got something for me? <span>Dont hesitate to contact</span>
                                </p>
                                <p className="connected-title">Phone: +353 0899876363</p>
                                <p className="connected-title">Email: pateltapesh505@gmail.com</p>
                                <p className="connected-title">Address: Newbridge, Ireland</p>
                            </Box>
                            <Box className="connected-icons">
                                <SvgIcon fontSize="medium" viewBox="0 0 36 29.238">
                                    <path
                                        d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                                        transform="translate(0 -3.381)"
                                        fill="#72b7e5"
                                    />{" "}
                                </SvgIcon>
                                <SvgIcon fontSize="medium" viewBox="0 0 31.5 31.5">
                                    <path
                                        d="M7.051,31.5H.52V10.47H7.051ZM3.782,7.6A3.8,3.8,0,1,1,7.564,3.783,3.814,3.814,0,0,1,3.782,7.6ZM31.493,31.5H24.976V21.263c0-2.44-.049-5.569-3.4-5.569-3.4,0-3.916,2.651-3.916,5.393V31.5H11.142V10.47h6.263v2.869H17.5a6.862,6.862,0,0,1,6.179-3.4c6.609,0,7.824,4.352,7.824,10.005V31.5Z"
                                        transform="translate(0 0)"
                                        fill="#2313ff"
                                    />{" "}
                                </SvgIcon>
                                <SvgIcon fontSize="medium" viewBox="0 0 34.875 34.875">
                                    <path
                                        d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.457,17.457,0,0,0,18,.563ZM29.529,8.6a14.823,14.823,0,0,1,3.363,9.278A34.807,34.807,0,0,0,22.521,17.4c-.4-.987-.786-1.856-1.309-2.926A19.84,19.84,0,0,0,29.529,8.6ZM27.873,6.881c-.268.382-2.51,3.4-7.806,5.38A79.5,79.5,0,0,0,14.51,3.542,14.856,14.856,0,0,1,27.873,6.881ZM11.668,4.544a95.036,95.036,0,0,1,5.522,8.614A55.556,55.556,0,0,1,3.42,14.972,14.949,14.949,0,0,1,11.668,4.544ZM3.106,18.023c0-.152,0-.3.008-.455a54.942,54.942,0,0,0,15.307-2.12c.426.834.834,1.682,1.208,2.528A23.07,23.07,0,0,0,6.935,27.981,14.835,14.835,0,0,1,3.106,18.023Zm5.752,11.75c1.556-3.18,5.778-7.286,11.783-9.334a61.911,61.911,0,0,1,3.177,11.295,14.864,14.864,0,0,1-14.96-1.96Zm17.464.6a64.285,64.285,0,0,0-2.893-10.62,21.861,21.861,0,0,1,9.278.637,14.92,14.92,0,0,1-6.384,9.983Z"
                                        transform="translate(-0.563 -0.563)"
                                        fill="#ff00c4"
                                    />{" "}
                                </SvgIcon>
                                <SvgIcon fontSize="medium" viewBox="0 0 31.518 31.51">
                                    <path
                                        d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
                                        transform="translate(0.005 -2.238)"
                                        fill="#fe4747"
                                    />{" "}
                                </SvgIcon>
                                <SvgIcon fontSize="medium" viewBox="0 0 31.493 31.493">
                                    <path
                                        d="M29.862,21.08a15.3,15.3,0,0,0,.33-3.08A14.429,14.429,0,0,0,15.757,3.565a14.863,14.863,0,0,0-3.08.33A7.865,7.865,0,0,0,1.638,14.92,15.3,15.3,0,0,0,1.308,18,14.429,14.429,0,0,0,15.743,32.435a14.863,14.863,0,0,0,3.08-.33,7.865,7.865,0,0,0,12.67-6.237,7.756,7.756,0,0,0-1.631-4.788ZM16.179,27.513c-4.613,0-8.473-2.053-8.473-4.57A1.976,1.976,0,0,1,9.78,20.791c2.194,0,2.4,3.157,6.195,3.157,1.807,0,2.974-.8,2.974-1.849,0-1.315-1.125-1.519-2.953-1.969C11.6,19.048,7.713,18.584,7.713,14c0-4.163,4.12-5.7,7.671-5.7,3.874,0,7.791,1.54,7.791,3.9a2.118,2.118,0,0,1-2.13,2.236c-1.99,0-2.053-2.355-5.273-2.355-1.807,0-2.953.492-2.953,1.582,0,1.392,1.462,1.533,4.859,2.32,2.911.654,6.377,1.884,6.377,5.456,0,4.155-4.015,6.082-7.875,6.082Z"
                                        transform="translate(0 -2.25)"
                                        fill="#8fc2f5"
                                    />{" "}
                                </SvgIcon>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AboutMe;
