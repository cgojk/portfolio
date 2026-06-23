import React from "react";

import { Link } from "react-router-dom";
import Button from "./UI/Button";





export default function  ProjectsDetails (props){
   const {title, 
   imagedesktop, 
   imagemobile, 
   experience, 
     } = props;
    


    return (
 <>

 <li className="projects__tools--list">
        <div className="projects__tools--list-item">

            
                    <div className="wrapper__image">
                      
                        
                        <picture className="project1__image">
                            <source
                                media="(min-width: 1024px)"
                                srcSet={imagedesktop}
                                />
                        
                                <source
                            media="(min-width: 710px)"
                            srcSet={imagemobile}
                            />
                        
                                <img
                                src={imagemobile}
                                alt="project image"
                                />
                            </picture>
                              <div className="hover__image--effect">
                    </div>
                </div>
            <div className="details__images">
                <h2 className="projects__title">{title}</h2>
                     <p className="projects__experience">{
                         experience.map((skill, index) => (
                             <span key={index}>{skill}</span>
                             ))}</p>
                    <div className="projects__links">
                      <Button to="#" className="button--size">project link</Button>
                       <Button to="#" className="button--size">link code</Button>
            </div>
     </div>
           
 </div>
 </li>
 </>
    );
   }      