/* ==========================
   Project Details
========================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ==========================
       Get Project ID
    ========================== */

    const urlParams = new URLSearchParams(
        window.location.search
    );

    const projectId = urlParams.get("id");


    /* ==========================
       Find Project
    ========================== */

    const project = projects.find(
        item => item.id === projectId
    );


    if (!project) {

        document.getElementById("project-title").textContent =
            "Project Not Found";

        document.getElementById("project-description").textContent =
            "The requested project could not be found.";

        return;

    }


    /* ==========================
       Project Information
    ========================== */

    document.title =
        `${project.title} | Sabuz Rana`;


    document.getElementById(
        "project-title"
    ).textContent = project.title;


    document.getElementById(
        "project-description"
    ).textContent = project.description;


    /* ==========================
       Technologies
    ========================== */

    const technologiesContainer =
        document.getElementById(
            "project-technologies"
        );


    technologiesContainer.innerHTML = "";


    project.technologies.forEach(
        technology => {

            const technologyTag =
                document.createElement("span");

            technologyTag.className =
                "project-tech";

            technologyTag.textContent =
                technology;

            technologiesContainer.appendChild(
                technologyTag
            );

        }
    );


    /* ==========================
       Project Gallery
    ========================== */

    const gallery =
        document.getElementById(
            "project-gallery"
        );


    gallery.innerHTML = "";


    project.images.forEach(
        (image, index) => {


            const galleryItem =
                document.createElement("div");


            galleryItem.className =
                "project-gallery-item";


            galleryItem.innerHTML = `

                <img
                    src="${image}"
                    alt="${project.title} screenshot ${index + 1}"
                    loading="lazy"
                    data-index="${index}"
                >

                <div class="gallery-overlay">

                    <i class="fa-solid fa-magnifying-glass-plus"></i>

                    <span>
                        View Image
                    </span>

                </div>

            `;


            galleryItem.addEventListener(
                "click",
                function () {

                    openLightbox(index);

                }
            );


            gallery.appendChild(
                galleryItem
            );

        }
    );


    /* ==========================
       GitHub Button
    ========================== */

    const githubContainer =
        document.getElementById(
            "project-github"
        );


    if (project.github) {

        githubContainer.innerHTML = `

            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-github-btn"
            >

                <i class="fa-brands fa-github"></i>

                View Project on GitHub

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </a>

        `;

    }


    /* ==========================
       Lightbox
    ========================== */


    const lightbox =
        document.getElementById(
            "image-lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );


    const closeButton =
        document.getElementById(
            "lightbox-close"
        );


    const previousButton =
        document.getElementById(
            "lightbox-prev"
        );


    const nextButton =
        document.getElementById(
            "lightbox-next"
        );


    const zoomInButton =
        document.getElementById(
            "zoom-in"
        );


    const zoomOutButton =
        document.getElementById(
            "zoom-out"
        );


    const zoomResetButton =
        document.getElementById(
            "zoom-reset"
        );


    const currentCounter =
        document.getElementById(
            "lightbox-current"
        );


    const totalCounter =
        document.getElementById(
            "lightbox-total"
        );


    let currentImageIndex = 0;

    let zoomLevel = 1;


    totalCounter.textContent =
        project.images.length;


    /* ==========================
       Open Lightbox
    ========================== */

    function openLightbox(index) {

        currentImageIndex = index;

        zoomLevel = 1;

        updateLightbox();

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "lightbox-open"
        );

    }


    /* ==========================
       Close Lightbox
    ========================== */

    function closeLightbox() {

        lightbox.classList.remove(
            "active"
        );

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "lightbox-open"
        );

        zoomLevel = 1;

        lightboxImage.style.transform =
            "scale(1)";

    }


    /* ==========================
       Update Image
    ========================== */

    function updateLightbox() {

        lightboxImage.src =
            project.images[
                currentImageIndex
            ];


        lightboxImage.alt =
            `${project.title} screenshot ${currentImageIndex + 1}`;


        currentCounter.textContent =
            currentImageIndex + 1;


        zoomLevel = 1;


        lightboxImage.style.transform =
            "scale(1)";


        /* Disable previous/next if necessary */

        if (project.images.length <= 1) {

            previousButton.style.display =
                "none";

            nextButton.style.display =
                "none";

        } else {

            previousButton.style.display =
                "flex";

            nextButton.style.display =
                "flex";

        }

    }


    /* ==========================
       Previous Image
    ========================== */

    function showPreviousImage() {

        if (
            currentImageIndex === 0
        ) {

            currentImageIndex =
                project.images.length - 1;

        } else {

            currentImageIndex--;

        }


        updateLightbox();

    }


    /* ==========================
       Next Image
    ========================== */

    function showNextImage() {

        if (
            currentImageIndex ===
            project.images.length - 1
        ) {

            currentImageIndex = 0;

        } else {

            currentImageIndex++;

        }


        updateLightbox();

    }


    /* ==========================
       Zoom In
    ========================== */

    function zoomIn() {

        zoomLevel += 0.25;


        if (zoomLevel > 3) {

            zoomLevel = 3;

        }


        lightboxImage.style.transform =
            `scale(${zoomLevel})`;

    }


    /* ==========================
       Zoom Out
    ========================== */

    function zoomOut() {

        zoomLevel -= 0.25;


        if (zoomLevel < 0.5) {

            zoomLevel = 0.5;

        }


        lightboxImage.style.transform =
            `scale(${zoomLevel})`;

    }


    /* ==========================
       Reset Zoom
    ========================== */

    function resetZoom() {

        zoomLevel = 1;

        lightboxImage.style.transform =
            "scale(1)";

    }


    /* ==========================
       Button Events
    ========================== */

    closeButton.addEventListener(
        "click",
        closeLightbox
    );


    previousButton.addEventListener(
        "click",
        showPreviousImage
    );


    nextButton.addEventListener(
        "click",
        showNextImage
    );


    zoomInButton.addEventListener(
        "click",
        zoomIn
    );


    zoomOutButton.addEventListener(
        "click",
        zoomOut
    );


    zoomResetButton.addEventListener(
        "click",
        resetZoom
    );


    /* ==========================
       Click Outside Image
    ========================== */

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    /* ==========================
       Keyboard Controls
    ========================== */

    document.addEventListener(
        "keydown",
        function (event) {


            if (
                !lightbox.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                showPreviousImage();

            }


            if (
                event.key === "ArrowRight"
            ) {

                showNextImage();

            }


            if (
                event.key === "+"
                ||
                event.key === "="
            ) {

                zoomIn();

            }


            if (
                event.key === "-"
            ) {

                zoomOut();

            }

        }
    );


    /* ==========================
       Mouse Wheel Zoom
    ========================== */

    lightboxImage.addEventListener(
        "wheel",
        function (event) {

            event.preventDefault();


            if (event.deltaY < 0) {

                zoomIn();

            } else {

                zoomOut();

            }

        }
    );


});