// Vanilla JavaScript for the random projects gallery
window.addEventListener('DOMContentLoaded', async () => {
    const projectsGalleryGrid = document.querySelector('.projects-gallery-grid');
    const response = await fetch('projects.json');
    const projectsData = await response.json();
    const randomProjects = [];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * projectsData.length);
    randomProjects.push(projectsData[randomIndex]);
    projectsData.splice(randomIndex, 1);
    }

    randomProjects.forEach((project) => {
    const projectImage = document.createElement('div');
    projectImage.classList.add('project-image');
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.alt;
    projectImage.appendChild(img);
    projectsGalleryGrid.appendChild(projectImage);
    });
});

  // jQuery for project box click behavior
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
