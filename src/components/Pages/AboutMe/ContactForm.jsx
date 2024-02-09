import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Box, Divider, SvgIcon, TextField } from "@material-ui/core";

const ContactForm = () => {
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

    const serviceID = `${process.env.REACT_APP_EMAIL_SERVICE_ID}`;
    const tempID = `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`;

    const handleChange = (e) => {
        e.preventDefault();
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };

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
                    setShowMessage(response.status === 200);
                    setTimeout(() => window.location.reload(), 5000);
                },
                function (error) {
                    window.alert("Technical error, the message was not sent");
                }
            );
        }
    };

    return (
        <Box className="main-contact-form">
            <Box className="main-contact-form-header">
                <p className="contact-form-header"> Contact Me </p>
                <span>
                    {" "}
                    <Divider className="divider" />
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
                                color="secondary"
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
                                color="secondary"
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
                                color="secondary"
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
                                color="secondary"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={10}
                                error={showErrorMessage}
                                helperText={showErrorMessage ? "message required minimum 6 character" : ""}
                            />
                            <Button className="send-btn" type="submit">
                                Send
                            </Button>
                            <p style={showMessage === true ? { display: "inherit" } : { display: "none" }}>
                                Your message was sent successfully. Thanks you !
                            </p>
                        </form>
                    </Box>
                    <Box className="connected-bg">
                        <Box className="connected-details">
                            <p className="connected-title">Let's get connected</p>
                            <p className="connected-subtitle">
                                Got something for me? <span>Don't hesitate to contact</span>
                            </p>
                            <p className="connected-title">Phone: +353 0899876363</p>
                            <p className="connected-title">Email: pateltapesh505@gmail.com</p>
                            <p className="connected-title">Address: Newbridge, Ireland</p>
                        </Box>
                        <Box className="connected-icons">
                            <a href="https://twitter.com/tapesh2" target="_blank" rel="noopener noreferrer">
                                <SvgIcon fontSize="medium" viewBox="0 0 36 29.238">
                                    <path
                                        d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                                        transform="translate(0 -3.381)"
                                        fill="#72b7e5"
                                    />{" "}
                                </SvgIcon>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tapesh-patel-276a65a4/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <SvgIcon fontSize="medium" viewBox="0 0 31.5 31.5">
                                    <path
                                        d="M7.051,31.5H.52V10.47H7.051ZM3.782,7.6A3.8,3.8,0,1,1,7.564,3.783,3.814,3.814,0,0,1,3.782,7.6ZM31.493,31.5H24.976V21.263c0-2.44-.049-5.569-3.4-5.569-3.4,0-3.916,2.651-3.916,5.393V31.5H11.142V10.47h6.263v2.869H17.5a6.862,6.862,0,0,1,6.179-3.4c6.609,0,7.824,4.352,7.824,10.005V31.5Z"
                                        transform="translate(0 0)"
                                        fill="#2313ff"
                                    />{" "}
                                </SvgIcon>
                            </a>
                            <a href="https://dribbble.com/Tapesh_Patel" target="_blank" rel="noopener noreferrer">
                                <SvgIcon fontSize="medium" viewBox="0 0 34.875 34.875">
                                    <path
                                        d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.457,17.457,0,0,0,18,.563ZM29.529,8.6a14.823,14.823,0,0,1,3.363,9.278A34.807,34.807,0,0,0,22.521,17.4c-.4-.987-.786-1.856-1.309-2.926A19.84,19.84,0,0,0,29.529,8.6ZM27.873,6.881c-.268.382-2.51,3.4-7.806,5.38A79.5,79.5,0,0,0,14.51,3.542,14.856,14.856,0,0,1,27.873,6.881ZM11.668,4.544a95.036,95.036,0,0,1,5.522,8.614A55.556,55.556,0,0,1,3.42,14.972,14.949,14.949,0,0,1,11.668,4.544ZM3.106,18.023c0-.152,0-.3.008-.455a54.942,54.942,0,0,0,15.307-2.12c.426.834.834,1.682,1.208,2.528A23.07,23.07,0,0,0,6.935,27.981,14.835,14.835,0,0,1,3.106,18.023Zm5.752,11.75c1.556-3.18,5.778-7.286,11.783-9.334a61.911,61.911,0,0,1,3.177,11.295,14.864,14.864,0,0,1-14.96-1.96Zm17.464.6a64.285,64.285,0,0,0-2.893-10.62,21.861,21.861,0,0,1,9.278.637,14.92,14.92,0,0,1-6.384,9.983Z"
                                        transform="translate(-0.563 -0.563)"
                                        fill="#ff00c4"
                                    />{" "}
                                </SvgIcon>
                            </a>
                            <a
                                href="https://www.instagram.com/tapesh__patel/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <SvgIcon fontSize="medium" viewBox="0 0 31.518 31.51">
                                    <path
                                        d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
                                        transform="translate(0.005 -2.238)"
                                        fill="#fe4747"
                                    />{" "}
                                </SvgIcon>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
