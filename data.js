import elearningdesktop from "../../public/images/thumbnail-project-2-large.webp";
import elearningmobile from "../../public/images/thumbnail-project-2-small.webp";

import todowebdesktop from "../../public/images/thumbnail-project-3-large.webp";
import todowebmobile from "../../public/images/thumbnail-project-3-small.webp";

import entertainmentdesktop from "../../public/images/thumbnail-project-4-large.webp";
import entertainmentmobile from "../../public/images/thumbnail-project-4-small.webp";

import memorygamedesktop from "../../public/images/thumbnail-project-5-large.webp";
import memorygamemobile from "../../public/images/thumbnail-project-5-small.webp";

import artgallerydesktop from "../../public/images/thumbnail-project-6-large.webp";
import artgallerymobile from "../../public/images/thumbnail-project-6-small.webp";


import designportfoliodesktop from "../../public/images/thumbnail-project-1-large.webp";
import designportfoliomobile from "../../public/images/thumbnail-project-1-small.webp";


export default [
    {
        id: 1,
        title: "Design Portfolio",
        imagedesktop: designportfoliodesktop,
       
        imagemobile: designportfoliomobile,
        tools: ["HTML", "CSS", "JavaScript"],
             
        linkto: "/projects/design-portfolio",
        linktocode: "/projects/design-portfolio-code"
    },
    {
        id: 2,
        title: "E-learning landing page",
        imagedesktop: elearningdesktop,
         imagemobile: elearningmobile,
        tools: ["HTML", "CSS", "JavaScript"],
       
        linkto: "/projects/e-learning-landing-page",
       
        linktocode: "/projects/e-learning-landing-page-code"
    },

    {
        id: 3,
        title: "Todo web app",
        imagedesktop: todowebdesktop,
       
        
        imagemobile: todowebmobile,
        tools: ["HTML", "CSS", "JavaScript"],
        
        linkto: "/",
       
        linktocode: "/projects/todo-web-app-code"
    },
    {
        id: 4,
        title: "Entertainment web app",
        imagedesktop: entertainmentdesktop,
        imagemobile: entertainmentmobile,
        tools: ["HTML", "CSS", "JavaScript"],
       
        linkto: "https://comforting-conkies-5f4bc6.netlify.app/home",
       
        linktocode: "/projects/entertainment-web-app-code"
    }
    ,
    {
        id: 5,
        title: "Memory game",
        imagedesktop: memorygamedesktop,
        imagemobile: memorygamemobile,
        tools: ["HTML", "CSS", "JavaScript"],
       
        linkto: "/projects/memory-game",
        
        linktocode: "/projects/memory-game-code"
    },
    {
        id: 6,
        title: "Art gallery",
        imagedesktop: artgallerydesktop,
        imagemobile: artgallerymobile,
        tools: ["HTML", "CSS", "JavaScript"],
        
        linkto: "/projects/art-gallery",
        
        linktocode: "/projects/art-gallery-code"
    }
]
