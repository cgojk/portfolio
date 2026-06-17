import React from "react";
import { Link } from "react-router-dom";

import imageIntro from "../assets/images/image-hero-mobile.webp";
import imageTablet from "../assets/images/image-hero-tablet.webp";
import imageDesktop from "../assets/images/image-hero-desktop.webp";

import heromobileimage from "../../public/images/image-profile-mobile.webp";
import herotabletimage from "../../public/images/image-profile-tablet.webp";
import herodesktopimage from "../../public/images/image-profile-desktop.webp";






export default function Hero(){
    return (
 <section className="hero__section ">
   
       <header className="hero__header container">
       
     
        <div className="wrapper__hero-content ">
           
            <div className="info__hero">
                
                <h1 className="title__hero">Nice to meet you! I'm <span>Catalina G.</span></h1>
                <p className="hero_text">
                 Based in Australia and working as a freelance designer, I create digital experiences for brands and agencies around the world. 
                 I'm passionate about creating accessible, human-centered products and digital experiences.
                </p>
                <Link to="/contact" className="btn__hero">Contact me</Link>
                            
            </div>

           
      

            <div className="image__hero">
                <picture className="image__hero">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={herodesktopimage}
                        />

                        <source
                            media="(min-width: 710px)"
                            srcSet={herotabletimage}
                        />

                        <img
                            src={heromobileimage}
                            alt="photo of Catalina G."
                        />
                        </picture>
           
                </div>
         </div>
         </header>
          
    
       
</section>

  );
}