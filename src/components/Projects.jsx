import React from "react";

import { Link } from "react-router-dom";

import ProjectsDetails from "./ProjectsDetails";

import data from "../data";









export default function  Projects (){
    return (
 <section className="projects__section ">
    <div className="projects__tools">
       <h1 className="projects__title">Projects</h1>
       <Link to="/contact" className="btn__hero">Contact me</Link>
    </div>
    <div className="projects__content container">
      {data.map((project) => (
         <ProjectsDetails
            key={project.id}
            title={project.title}
            imagedesktop={project.imagedesktop}
            imagemobile={project.imagemobile}
            experience={project.experience}
            
         />
      ))}
      </div>

</section>

  );
}