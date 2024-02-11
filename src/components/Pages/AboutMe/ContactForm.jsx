import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Box, TextField } from "@material-ui/core";
import Header from "../../Header/Header";
import { getImage } from "../../../imageHelper";

const ContactForm = () => {
    const icons = [
        {
            id: 1,
            icon: getImage("twitter"),
            link: "https://twitter.com/tapesh2",
        },
        {
            id: 2,
            icon: getImage("linkedIn"),
            link: "https://www.linkedin.com/in/tapesh-patel-276a65a4/",
        },
        {
            id: 3,
            icon: getImage("dribble"),
            link: "https://dribbble.com/Tapesh_Patel",
        },
        {
            id: 4,
            icon: getImage("instagram"),
            link: "https://www.instagram.com/tapesh__patel/",
        },
    ];

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

    const RenderIcons = () =>
        icons.map((_icon) => {
            const { id, link, icon } = _icon;
            return (
                <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt="icon" />
                </a>
            );
        });

    return (
        <Box className="main-contact-form">
            <Header
                mainHeaderClass={"main-contact-form-header"}
                headerClass={"contact-form-header"}
                headerText={"Contact Me"}
            />
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
                            <RenderIcons />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
