import React from "react";

import { Link } from "react-router-dom";






export default function  ProjectsDetails (props){
   const {title, 
   imagedesktop, 
   imagemobile, 
   experience, 
   linkto, 
    linktocode} = props;
    


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
                                                  alt="photo of Catalina G."
                                              />
                                              </picture>
                                        <h2 className="projects__title">{title}</h2>
                                         <p className="projects__tools">{experience}</p>
                                            <div className="projects__links">
                                                <h2 className="project_link">project link</h2>
                                                <h2 className="contact">link code</h2>
                                            </div>
           
        </li>
 </ul>
 </>
    );
   }      