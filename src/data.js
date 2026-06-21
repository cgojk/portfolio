import designportfoliodesktop from "../src/images/thumbnail-project-1-large.webp";
import designportfoliomobile from "../src/images/thumbnail-project-1-small.webp";




import elearningdesktop from "../src/images/thumbnail-project-2-large.webp";
import elearningmobile from "../src/images/thumbnail-project-2-small.webp";



import todowebdesktop from "../src/images/thumbnail-project-3-large.webp";
import todowebmobile from "../src/images/thumbnail-project-3-small.webp";




import entertainmentdesktop from "../src/images/thumbnail-project-4-large.webp";
import entertainmentmobile from "../src/images/thumbnail-project-4-small.webp";

import memorygamedesktop from "../src/images/thumbnail-project-5-large.webp";
import memorygamemobile from "../src/images/thumbnail-project-5-small.webp";


import artgallerydesktop from "../src/images/thumbnail-project-6-large.webp";
import artgallerymobile from "../src/images/thumbnail-project-6-small.webp";




export default [
    {
        id: 1,
        title: "Design Portfolio",
        imagedesktop: designportfoliodesktop,
        imagemobile: designportfoliomobile,
        experience: ["HTML", "CSS"],
        alt: "photo of design portfolio project",
             
        // linkto: "/projects/design-portfolio",
        // linktocode: "/projects/design-portfolio-code"
    },
    {
        id: 2,
        title: "E-learning landing page",
        imagedesktop: elearningdesktop,
         imagemobile: elearningmobile,
        experience: ["HTML", "CSS"],
        alt: "photo of e-learning landing page project",
        // linkto: "/projects/e-learning-landing-page",
       
        // linktocode: "/projects/e-learning-landing-page-code"
    },

    {
        id: 3,
        title: "Todo web app",
        imagedesktop: todowebdesktop,
        imagemobile: todowebmobile,
        experience: ["HTML", "CSS", "JavaScript"],
        alt: "photo of todo web app project",
        // linkto: "/",
       
        // linktocode: "/projects/todo-web-app-code"
    },
    {
        id: 4,
        title: "Entertainment web app",
        imagedesktop: entertainmentdesktop,
        imagemobile: entertainmentmobile,
        experience: ["HTML", "CSS", "JavaScript"],
        alt: "photo of entertainment web app project",
        // linkto: "https://comforting-conkies-5f4bc6.netlify.app/home",
       
        // linktocode: "/projects/entertainment-web-app-code"
    }
    ,
    {
        id: 5,
        title: "Memory game",
        imagedesktop: memorygamedesktop,
        imagemobile: memorygamemobile,
        experience: [
            "HTML",
             "CSS", 
             "JavaScript"],
        alt: "photo of memory game project",
        // linkto: "/projects/memory-game",
        
        // linktocode: "/projects/memory-game-code"
    },
    {
        id: 6,
        title: "Art gallery",
        imagedesktop: artgallerydesktop,
        imagemobile: artgallerymobile,
        experience: ["HTML", "CSS", "JavaScript"],
        alt: "photo of art gallery project",
        
        // linkto: "/projects/art-gallery",
        
        // linktocode: "/projects/art-gallery-code"
    }
]
