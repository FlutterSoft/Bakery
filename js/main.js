// DOM Elements
const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const nav = document.querySelector(".main-nav")
const mobileLinks = document.querySelectorAll(".nav-link")

// Add toggleMenu function to the hamburger icon click
hamburger.addEventListener('click', toggleMenu)

// Add toggleMenu function to the mobile navigation clicks in order to close the nav when a nav item is clicked
mobileLinks.forEach( link => link.addEventListener('click', toggleMenu))

function toggleMenu(){
    nav.classList.toggle('blur') // toggles background blur to the nav section
    mobileNav.classList.toggle('blur') // toggles background blur to the mobile nav section
    mobileNav.classList.toggle('hidden') // hides/shows the mobile nav section

    // Changes hamburger icon when menu is open/closed on mobile
    if (hamburger.innerText == 'list'){
        hamburger.innerText = 'menu_open'   
        console.log('change to menu_open') 
    }
    else {
        hamburger.innerText = 'list'
        console.log('changed to list')
    }

}
