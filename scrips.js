window.addEventListener('DOMContentLoaded', async () => {
    const projects = document.querySelector('.projects');
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

    randomImages.forEach((img) => projects.appendChild(img));
});

$(document).ready(function () {
    $(".project-box").on("click", function () {
        if ($(this).data("expanded")) {
            $(this).removeClass("expanded");
            $(this).data("expanded", false);
        } else {
            $(".project-box.expanded").removeClass("expanded").data("expanded", false);
            $(this).addClass("expanded");
            $(this).data("expanded", true);
        }
    });
});
