window.addEventListener('DOMContentLoaded', async () => {
    const projects = document.querySelector('.projects-gallery');
    const response = await fetch('projects.html');
    const projectsHTML = await response.text();
    const parser = new DOMParser();
    const projectsDoc = parser.parseFromString(projectsHTML, 'text/html');
    const images = Array.from(projectsDoc.querySelectorAll('img'));
    const randomImages = [];

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * images.length);
        randomImages.push(images[randomIndex]);
        images.splice(randomIndex, 1);
    }

    randomImages.forEach((img) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('project-image');
        imageContainer.appendChild(img);
        projects.appendChild(imageContainer);
    });
});

$(document).ready(function () {
    $(".project-box").on("click", function () {
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            $(this).find(".hidden-image").hide();
        } else {
            $(".project-box.expanded").removeClass("expanded").find(".hidden-image").hide();
            $(this).addClass("expanded");
            $(this).find(".hidden-image").show();
        }
    });
});
