const headerLinks = document.querySelectorAll('.header-link');
const scrollBtn = document.querySelector(".down-btn");
const aboutMe = document.getElementById("about-me");


scrollBtn.addEventListener('click', () => {
    aboutMe.scrollIntoView({ behavior: 'smooth' });
});

headerLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Do not send to section non-smoothly
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
