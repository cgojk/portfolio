import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../public/images/icon-github.svg";
import "../../public/images/icon-linkedin.svg";
import "../../public/images/icon-frontend-mentor.svg";
import "../../public/images/icon-twitter.svg";







export default function Navigation(){
    return (
        <section className="navigation">
            <nav className="navigation__nav">
                <div className="navigation__nav--logo">
                <Link to="/" className="navigation__nav--link">Catalina G</Link>
                </div>
                <ul className="navigation__nav--list">
                    <li className="navigation__nav--list-item">
                        <a href="#github" className="navigation__nav--list-link">
                            <img src="../../public/images/icon-github.svg" alt="GitHub" />
                        </a>
                    </li>
                    <li className="navigation__nav--list-item">
                        <a href="#linkedin" className="navigation__nav--list-link">
                            <img src="../../public/images/icon-linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                    <li className="navigation__nav--list-item">
                        <a href="#frontend-mentor" className="navigation__nav--list-link">
                            <img src="../../public/images/icon-frontend-mentor.svg" alt="Frontend Mentor" />
                        </a>
                    </li>
                    <li className="navigation__nav--list-item">
                        <a href="#twitter" className="navigation__nav--list-link">
                            <img src="../../public/images/icon-twitter.svg" alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>

  );
}
