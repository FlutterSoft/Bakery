const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const nav = document.querySelector(".main-nav")
hamburger.addEventListener('click', toggleMenu)

const mobileLinks = document.querySelectorAll(".nav-link")
mobileLinks.forEach( link => link.addEventListener('click', toggleMenu))

function toggleMenu(){
    nav.classList.toggle('blur')
    mobileNav.classList.toggle('blur')
    mobileNav.classList.toggle('hidden')
}

//add .blur to nav on click
// toggle .hidden on mobile-nav on click