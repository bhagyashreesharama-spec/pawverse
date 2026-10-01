/* =====================================================
   PAWVERSE
   MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. MOBILE MENU
   ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* Close menu after clicking a navigation link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* =====================================================
   2. CURRENT YEAR IN FOOTER
   ===================================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =====================================================
   3. CONTACT FORM
   ===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const interest = document.getElementById("interest").value;

        const message = document.getElementById("message").value.trim();


        /* Basic validation */

        if (
            name === "" ||
            email === "" ||
            interest === "" ||
            message === ""
        ) {

            alert("Please fill in all the fields.");

            return;

        }


        /* Demo message */

        alert(
            "Thank you, " +
            name +
            "!\n\n" +
            "Your interest in Pawverse has been recorded on this demo form.\n\n" +
            "The form is currently not connected to an email/database."
        );


        /* Clear form */

        contactForm.reset();

    });

}


/* =====================================================
   4. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ===================================================== */

document.addEventListener("click", function (event) {

    if (!menuBtn || !navMenu) {
        return;
    }


    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    }

});
