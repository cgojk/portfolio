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

 <ul className="projects__tools--list">
        <li className="projects__tools--list-item">
            
                     
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
                                                  alt="photo of Adam Keyes."
                                              />
                                              </picture>
                                        <h2 className="projects__title">{title}</h2>
                                         <p className="projects__experience">{
                                         experience.map((skill, index) => (
                                             <span key={index}>{skill}</span>
                                         ))}</p>
                                            <div className="projects__links">
                                                <Button to="#" className="button--size">project link</Button>
                                                <Button to="#" className="button--size">link code</Button>
                                            </div>
           
        </li>
 </ul>
 </>
    );
   }      