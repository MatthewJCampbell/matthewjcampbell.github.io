const navContainer = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle");
const navLinks = document.getElementsByClassName("navLink");

toggleBtn.addEventListener("click", function () {
    navContainer.classList.toggle("active");
});

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navContainer.classList.remove("active");
    });
}

navContainer.addEventListener("mouseleave", function () {
    navContainer.classList.remove("active");
});

document.addEventListener("click", function (event) {
    const isClickInsideNav = navContainer.contains(event.target);
    const isClickOnToggle = toggleBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle) {
        navContainer.classList.remove("active");
    }
});

const exploreBtn = document.getElementById("exploreBtn");
const aboutSection = document.getElementById("expeditions");
exploreBtn.addEventListener("click", function () {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
