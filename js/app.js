/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

let landUl = document.querySelector("#navbar__list");
let landSection = document.querySelectorAll("section");


/**
 * End Global Variables
*/

// build the nav

for (let i = 0; i < landSection.length; i++){
    let listItem = document.createElement("li");
    let theLink = document.createElement("a");
    let text = landSection[i].dataset.nav;
    let theHref = landSection[i].id;
    theLink.className = "menu__link";
    theLink.dataset.nav = theHref;
    theLink.href = theHref;
    theLink.innerText = text;
    listItem.innerHTML = landSection[i];
    listItem.appendChild(theLink);
    landUl.appendChild(listItem);
};

// Add class 'active' to section when near top of viewport

window.onscroll = function () {
    landSection.forEach( function(theActive){
        if (
            theActive.getBoundingClientRect().top >= -300 &&
            theActive.getBoundingClientRect().top <= 200
        ){
            theActive.classList.add("your-active-class");
        } else {
            theActive.classList.remove("your-active-class");
        }
    });
};

/**
 * End Main Functions
 * Begin Events
 *
*/


// Scroll to section on link click

landUl.addEventListener("click", (theSec) => {
    theSec.preventDefault();
    if (theSec.target.dataset.nav) {
        document
            .getElementById(`${theSec.target.dataset.nav}`)
            .scrollIntoView({ behavior: "smooth"});
        setTimeout( () => {
            location.hash = `${theSec.target.dataset.nav}`;
        }, 150);
    }
});



