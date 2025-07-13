var navContainer = document.getElementById("menu");
var btn = document.getElementById("toggle");

function toggleMenu() {
    navContainer.classList.toggle("active");
}
btn.addEventListener("click", toggleMenu);

var navLinks = document.getElementsByClassName("navLink");

console.log(navLinks);
var i = 0; 

for(i = 0; i < navLinks.length; i++) {

    console.log("value of i:" + i);

    navLinks[i].addEventListener('click', toggleMenu);

}

const mainSections = document.getElementsByClassName('mainContent')


const mainSection = mainSections [0];

function scrollToMain() {
    mainSection.scrollIntoView({behavior: 'smooth'});
}
const exploreMoreBtn = document.getElementById('exploreMoreBtn');

exploreBtn.addEventListener('click', scrollToMain);
