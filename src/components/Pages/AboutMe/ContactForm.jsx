import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Box, TextField } from "@material-ui/core";
import Header from "../../Header/Header";
import { icons } from "../../../dataProviders";
import { renderIcon } from "../../../helpers";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const ContactForm = () => {
    const [values, setValues] = useState(initialValues);
    const [showMessage, setShowMessage] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });

    const serviceID = `${process.env.REACT_APP_EMAIL_SERVICE_ID}`;
    const tempID = `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`;
    const publicKey = `${process.env.REACT_APP_EMAIL_SERVICE_PUBLIC_KEY}`;

    const handleChange = (e) => {
        e.preventDefault();
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            name: values.name.length <= 5,
            email: values.email.length <= 5,
            phone: values.phone.length <= 6,
            message: values.message.length < 5,
        });

        if (Object.values(errors).every((error) => !error)) {
            emailjs.send(serviceID, tempID, values, publicKey).then(
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
            <Header
                mainHeaderClass={"main-contact-form-header"}
                headerClass={"contact-form-header"}
                headerText={"Contact Me"}
            />
            <Box className="main-contact-details">
                <Box className="contact-bg">
                    <Box className="contact-form">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            {["name", "email", "phone", "message"].map((field) => (
                                <TextField
                                    key={field}
                                    id="outlined-full-width"
                                    name={field}
                                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                    value={values[field]}
                                    onChange={handleChange}
                                    required
                                    color="secondary"
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    autoComplete="off"
                                    error={errors[field]}
                                    helperText={
                                        errors[field]
                                            ? `${field} required minimum ${field === "phone" ? 7 : 6} characters`
                                            : ""
                                    }
                                    {...(field === "message" ? { multiline: true, minRows: 10, maxRows: 10 } : {})}
                                />
                            ))}
                            <Button className="send-btn" type="submit">
                                Send
                            </Button>
                            <p style={showMessage ? { display: "inherit" } : { display: "none" }}>
                                Your message was sent successfully. Thank you!
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
                        <Box className="connected-icons">{renderIcon(icons)}</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
