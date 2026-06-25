import React, { useState } from "react";
import Button from "./UI/Button";
import rings from "../images/pattern-rings.svg";

export default function Contact() {
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [successMessage, setSuccessMessage] = useState("");

    function signUp(formData, e) {
        console.log("running");

        const nameInput = formData.get("name");
        const emailInput = formData.get("email");
        const messageInput = formData.get("message");

        setNameError("");
        setEmailError("");
        setMessageError("");

        function validationemail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validationmessage(message) {
            return message.trim() !== "";
        }

        function validationname(name) {
            return name.trim() !== "";
        }

        let isValid = true;

        // NAME
        if (!validationname(nameInput)) {
            setNameError("Please enter your name.");
            isValid = false;
        } else {
            setNameError("");
        }

        // EMAIL
        if (!validationemail(emailInput)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError("");
        }

        // MESSAGE
        if (!validationmessage(messageInput)) {
            setMessageError("Please enter your message.");
            isValid = false;
        } else {
            setMessageError("");
        }

        // SUCCESS
        if (isValid) {
            setSuccessMessage("Your form has been sent successfully!");

            e.target.reset();

            setNameError("");
            setEmailError("");
            setMessageError("");
        }
    }
    setTimeout(() => {
    setSuccessMessage("");
    }, 3000);
    return (
<section id="contact" className="contact__form ">
    <div className="wrapper__form container">
             
            <div className="wrapper__title__form">
                    <h1 className="contact__title">Contact</h1>

                    <p className="contact__description">
                        I would love to hear about your project and how I could help.
                        Please fill in the form, and I'll get back to you as soon as possible.
                    </p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    signUp(formData, e);
                }}
                className="contact__content"
            >
                <div className="contact__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className="name__input" 
                    id="name" 
                    name="name"
                    aria-describedby="name-error"
                    aria-invalid={!!nameError}
                     onChange={() => setNameError("")} />
                    {nameError && 
                    <p className="error"
                    id="name-error"
                    role="alert"
                 
                    >{nameError}</p>}
                </div>

                <div className="contact__input">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className="email__input" 
                    id="email" name="email" 
                    aria-describedby="email-error"
                    aria-invalid={!!emailError}
                    onChange={() => setEmailError("")} />
                    {emailError &&
                    <p className="error"
                    id="email-error"
                    role="alert"
                  
                    >{emailError}</p>}
                </div>

                <div className="contact__input">
                    <label htmlFor="message">Message</label>
                    <textarea className="message__input" 
                    id="message" name="message"
                     rows="2" 
                     aria-invalid={!!messageError}
                      onChange={() => setMessageError("")}>

                      </textarea>
                    {messageError && 
                    <p className="error"
                    role="alert"
                   
                    >{messageError}</p>}
                </div>

                <Button type="submit" size="size" className="contact__button">
                    Send Message
                </Button>
            </form>
            {successMessage && (
           <p className="success"
           role="status"
           aria-live="polite"
           >{successMessage}</p>
    

)}


    </div>
    <img src={rings} alt="rings pattern" className="pattern rings" />
        </section>
    );
}