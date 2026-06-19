import React from "react";

import { Link } from "react-router-dom";

import designportfoliodesktop from "../../public/images/thumbnail-project-1-large.webp";
import designportfoliomobile from "../../public/images/thumbnail-project-1-small.webp";
import designportfoliotablet from "../../public/images/thumbnail-project-1-medium.webp";






export default function  Projects (){
    return (
 <section className="projects__section ">
    <div className="projects__tools">
       <h1 className="projects__title">Projects</h1>
       <Link to="/contact" className="btn__hero">Contact me</Link>
    </div>
    

</section>

  );
}