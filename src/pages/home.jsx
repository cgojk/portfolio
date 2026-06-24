import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";







export default function Home () {
    return (
        <>
       <Navigation/>
           <Hero/>
            <Tools/>
            <Projects/>
            <Contact/>
          
            <Footer/>
         
       
      

     
        
   
            
           
            
           
            
        </>
    );
}