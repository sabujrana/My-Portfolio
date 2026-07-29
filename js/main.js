// ==========================
// Initialize AOS Animation
// ==========================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

        offset: 100

    });

}





// ==========================
// Load Projects Dynamically
// ==========================


const projectContainer = document.getElementById(
    "projects-container"
);



if (projectContainer && typeof projects !== "undefined") {


    projects.forEach(project => {


        const projectCard = document.createElement("div");


        projectCard.classList.add(
    "project-card"
);


projectCard.setAttribute(
    "data-aos",
    "fade-up"
);



        projectCard.innerHTML = `


            <img 
            src="${project.cover}"
            alt="${project.title}">



            <div class="project-content">


                <h3>
                    ${project.title}
                </h3>



                <p>
                    ${project.description}
                </p>




                <div class="project-tech">


                    ${project.technologies.map(tech =>

                        `<span>${tech}</span>`

                    ).join("")}



                </div>





                <a 
                href="./project-details.html?id=${project.id}"
                class="project-btn">

                View Details

                </a>



            </div>



        `;



        projectContainer.appendChild(projectCard);



    });


}



// ==========================
// Hero Typing Effect
// ==========================


const typingText = document.getElementById(
    "typing-text"
);



if(typingText){


const roles = [

    "Data Analyst",

    "Business Intelligence Developer",

    "Big Data Enthusiast",

    "Python & SQL Developer"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){



let currentRole =
roles[roleIndex];



if(!deleting){


typingText.textContent =
currentRole.substring(
0,
charIndex++
);


if(charIndex > currentRole.length){


deleting=true;


setTimeout(
typeEffect,
1200
);


return;

}



}
else{


typingText.textContent =
currentRole.substring(
0,
charIndex--
);



if(charIndex === 0){


deleting=false;


roleIndex =
(roleIndex + 1)
% roles.length;


}


}



setTimeout(
typeEffect,
deleting ? 60 : 100
);



}



typeEffect();


}

// ==========================
// Active Navbar On Scroll
// ==========================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");



window.addEventListener("scroll", ()=>{


let current = "";



sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;

const sectionHeight = section.clientHeight;



if(window.scrollY >= sectionTop && 
window.scrollY < sectionTop + sectionHeight){

    current = section.getAttribute("id");

}


});




navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href") === "#" + current){

    link.classList.add("active");

}


});


});


