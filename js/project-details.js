const params = new URLSearchParams(
    window.location.search
);


const projectId = params.get("id");



const project = projects.find(
    item => item.id === projectId
);



if(project){


document.title =
project.title + " | Sabuz Rana";




document.getElementById(
"project-title"
).innerText = project.title;




document.getElementById(
"project-description"
).innerText = project.description;




document.getElementById(
"project-overview"
).innerText = project.description;






const cover =
document.getElementById(
"project-cover-image"
);


cover.src = project.cover;

cover.alt = project.title;








const gallery =
document.getElementById(
"project-gallery"
);



project.images.forEach(image => {


const img =
document.createElement("img");


img.src = image;

img.alt = project.title;


gallery.appendChild(img);


});








const tech =
document.getElementById(
"project-technologies"
);



project.technologies.forEach(item=>{


const span =
document.createElement("span");


span.innerText = item;


tech.appendChild(span);


});







document.getElementById(
"github-link"
).href = project.github;



}