import React from "react";
import { Link } from "react-router-dom";
import heromobileimage from "../images/image-profile-mobile.webp"
import herotableimage from "../images/image-profile-mobile.webp";
import herodesktopimage from "../images/image-profile-desktop.webp";


import circlepattern from "../images/pattern-circle.svg";
import rings from "../images/pattern-rings.svg";







export default function Hero(){
    return (
 <section className="hero__section ">
    <header className="hero__header container">
       <img src={circlepattern} alt="circle pattern" className="circle__pattern" />
         <img src={rings} alt="rings pattern" className="rings__pattern" />
    <div className="wrapper__hero-content ">
           
      
            <div className="image__hero">
                <picture className="image__hero">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={herodesktopimage}
                        />
                        <source
                            media="(min-width: 710px)"
                            srcSet={herotableimage}
                        />
                        <img
                            src={heromobileimage}
                            alt="photo of Adam Keyes.."
                        />
                        </picture>
                </div>


                <div className="info__hero">
                   <h1 className="title__hero">Nice to meet you! I'm <span className="highlight">Adam Keyes.</span></h1>
                   <p className="hero_text">
                    Based in the UK, I’m a front-end developer
                    passionate about building accessible web apps that users love. I’ve had the privilege of working at a start-up and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement.
                  </p>
                <Link to="/contact" className="btn__hero">Contact me</Link>
                            
              </div>

           
         </div>
 </header>
          
    
       
</section>

  );
}