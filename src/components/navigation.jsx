import React  from "react";
import { Link } from "react-router-dom";
import frontmentor from "../images/icon-frontend-mentor.svg";
import linkedin from "../images/icon-linkedin.svg";
import github from "../images/icon-github.svg";
import twitter from "../images/icon-twitter.svg";






export default function Navigation(){
    return (
        <section className="navigation">
            <nav className="navigation__nav container">
                <div className="navigation__nav--logo">
                <Link to="/" className="navigation__nav--link">adamKeyes</Link>
                </div>
                <ul className="navigation__nav--list">
                    <li className="navigation__nav--list-item">
                        <a href="#github" className="navigation__nav--list-link">
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                    <li className="navigation__nav--list-item">
                        <a href="#linkedin" className="navigation__nav--list-link">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                    <li className="navigation__nav--list-item">
                        <a href="#frontend-mentor" className="navigation__nav--list-link">
                            <img src={frontmentor} alt="Frontend Mentor" />
                        </a>
                    </li>
                    <li className="navigation__nav--list-item">
                        <a href="#twitter" className="navigation__nav--list-link">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>

  );
}
