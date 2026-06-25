import React from "react";
import { Link } from "react-router-dom";
import ProjectsDetails from "./ProjectsDetails";
import data from "../data";
import Button from "./UI/Button";



export default function  Projects (){
    return (
 <section className="projects__section container ">
    <div className="projects__tools">
       <h1 className="project__title--portfolio">Projects</h1>
       <Button href="#contact">
         Contact me
       </Button>
    </div>
    <ul className="projects__content container">
      {data.map((project) => (
         <ProjectsDetails
            key={project.id}
            title={project.title}
            imagedesktop={project.imagedesktop}
            imagemobile={project.imagemobile}
            experience={project.experience}
            
         />
      ))}
      </ul>

</section>

  );
}