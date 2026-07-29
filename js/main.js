// ==========================
// Check JavaScript Loading
// ==========================

console.log("MAIN JS WORKING");



// ==========================
// Scroll Reveal Animation
// ==========================


const revealElements = document.querySelectorAll(
    ".about, .skills, .experience, .education, .projects, .blog, .contact, .skill-card, .project-card, .education-card, .blog-card, .timeline-item"
);



const observer = new IntersectionObserver(
    (entries) => {


        entries.forEach((entry) => {


            if(entry.isIntersecting){


                entry.target.classList.add("show");


                observer.unobserve(entry.target);


            }


        });


    },
    {

        threshold: 0.15

    }

);




revealElements.forEach((element)=>{


    element.classList.add("hidden");


    observer.observe(element);


});







// ==========================
// Navbar Shadow On Scroll
// ==========================


const navbar = document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.12)";


    }
    else{


        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.05)";


    }


});







// ==========================
// Active Navbar Link
// ==========================


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".nav-links a");




window.addEventListener("scroll",()=>{


    let current = "";



    sections.forEach((section)=>{


        const sectionTop =
        section.offsetTop - 150;



        if(window.scrollY >= sectionTop){


            current =
            section.getAttribute("id");


        }


    });



    navLinks.forEach((link)=>{


        link.classList.remove("active");



        if(link.getAttribute("href")
        === "#" + current){


            link.classList.add("active");


        }


    });



});







// ==========================
// Smooth Scrolling
// ==========================


navLinks.forEach((link)=>{


    link.addEventListener("click",(e)=>{


        const target =
        document.querySelector(
            link.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }



    });



});







// ==========================
// Mobile Menu Preparation
// ==========================


const menuButton =
document.querySelector(".menu-btn");


const navMenu =
document.querySelector(".nav-links");



if(menuButton){


    menuButton.addEventListener("click",()=>{


        navMenu.classList.toggle("active");


    });


}