import React from "react";

import { Link } from "react-router-dom";







export default function  ProjectsDetails (title, imagedesktop, imagemobile, tools, linkto,  linktocode){


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
            <h2>{title}</h2>
            <p>{tools}</p>
            <a href={linkto} className="btn__hero">See project</a>
            <a href={linktocode} className="btn__hero">See code</a>
                            
                       
                          
        </li>
 </ul>
 </>
    );
   }      