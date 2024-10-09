const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Toggle the 'show' class
});



// Project appearance on scroll
const projects = document.querySelectorAll('.project');

function checkProjectsInView() {
    projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight - rect.height * 0.5) {
            project.classList.add('show');
        }
    });
}


window.addEventListener('scroll', checkProjectsInView);
window.addEventListener('load', checkProjectsInView);