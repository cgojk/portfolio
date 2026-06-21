import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import rings from "../images/pattern-rings.svg";




export default function  Contact (){
    return (
 <section className="contact__form container ">
    <img src ={rings} alt="rings pattern" className="pattern rings" />
    <h1 className="contact__title">Contact </h1>
    <p className="contact__description"> I would love to hear about your project and how I could help.
          Please fill in the form, and I'll get back to you as soon as possible.</p>

    <form className="contact__content">
        <div className="contact__input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="name__input" name="name" required />
        </div>
        <div className="contact__input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="email__input" name="email" />
        </div>
        <div className="contact__input">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="message__input" name="message" rows="5" required></textarea>
        </div>
        <Button type="submit" size="size" className="contact__button">
            Send Message
        </Button>
    </form>
</section>

  );
}