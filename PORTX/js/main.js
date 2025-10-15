/*---------- NAVIGATION BAR FUNCTION ----------*/
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.classList.contains("responsive")) {
        menuBtn.classList.remove("responsive");
    } else {
        menuBtn.classList.add("responsive");
    }
}





/*---------- NAV SCR SHADOW ----------*/
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
        const navHeader =document.getElementById("header");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {

            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }





/*---------- TYPING EFFECT ----------*/
var typingEffect = new Typed(".typedText",{
    strings : ["an Engineer","Designer","Developer"],
    loop : true,
    typedSpeed : 500,
    backSpeed : 80,
    backDelay : 2000
})



/*---------- SCR REV ANIMATION ----------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


/*---------- HOME ----------*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 100})
sr.reveal('.featured-image',{delay: 300})



/*---------- PROJRCT BOX ----------*/
sr.reveal('.project-boc',{interval: 200})



/*---------- HEADINGS ----------*/
sr.reveal('.top-header',{})

/*---------- ABOUT & CONTACT info ----------*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.about-info',{delay: 100})
sr.reveal('.contact-info',{delay: 100})


/*---------- SKILL & FORM ----------*/
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.skills-box',{delay: 100})
sr.reveal('.form-controll',{delay: 100})


/*---------- CHANGE ACTIVE LINK----------*/
