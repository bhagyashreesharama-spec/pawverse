/* =====================================================
   PAWVERSE — JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");

}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".nav-links").classList.remove("active");

    });

});



/* ================= JOIN TEAM FORM ================= */

function joinTeam(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const city = document.getElementById("city").value.trim();

    const email = document.getElementById("email").value.trim();

    const skill = document.getElementById("skill").value;

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (!name || !city || !email || !skill) {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;

    }


    /*
        IMPORTANT:

        Abhi form kisi database ya email
        par data send nahi karta.

        Backend/database baad mein connect karenge.
    */


    formMessage.textContent =
        "Thank you, " + name +
        "! Your interest in joining PAWVERSE has been recorded for now.";


    formMessage.style.color = "#30452b";


    document.querySelector(".join-form").reset();

}



/* ================= COMMUNITY COUNT ================= */

/*
    IMPORTANT:

    Ye abhi REAL community count nahi hai.

    Isliye number 0 se start hoga.

    Jab actual registrations/database connect hoga,
    tab yahan real number show karenge.
*/


const communityCount =
    document.getElementById("communityCount");


if (communityCount) {

    communityCount.textContent = "0";

}



/* ================= SCROLL ANIMATION ================= */

const animatedElements =
    document.querySelectorAll(
        ".work-card, .animal-card, .support-card, .gallery-item, .community-card"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function(element) {

    observer.observe(element);

});



/* ================= CURRENT YEAR ================= */

/*
    Footer year automatically update hoga
    agar future mein website continue hoti hai.
*/

const yearText =
    document.querySelector(".footer-bottom p");


if (yearText) {

    const currentYear =
        new Date().getFullYear();

    yearText.textContent =
        "© " + currentYear +
        " PAWVERSE. Built with purpose and compassion.";

}



/* ================= IMAGE FALLBACK ================= */

/*
    Agar koi image abhi upload nahi hui,
    broken-image icon ke jagah clean placeholder
    dikhaya jayega.
*/

const images =
    document.querySelectorAll("img");


images.forEach(function(image) {

    image.addEventListener("error", function() {

        this.style.display = "none";

        this.parentElement.classList.add("image-placeholder");

    });

});
function selectSkill(skill) {
    alert("You selected: " + skill);
}
