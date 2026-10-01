/* =====================================================
   PAWVERSE JAVASCRIPT
   ===================================================== */


/* ===============================
   MOBILE MENU
   =============================== */

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


    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });


    document.addEventListener("click", function (event) {

        const clickedInsideNav = navMenu.contains(event.target);
        const clickedButton = menuBtn.contains(event.target);

        if (
            !clickedInsideNav &&
            !clickedButton &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");
            menuBtn.textContent = "☰";

        }

    });

}


/* ===============================
   FOOTER YEAR
   =============================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ===============================
   CONTACT FORM
   =============================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const interest = document.getElementById("interest").value;
        const message = document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            interest === "" ||
            message === ""
        ) {

            alert("Please fill in all the fields.");

            return;

        }


        alert(
            "Thank you, " +
            name +
            "!\n\n" +
            "Your interest has been recorded on this demo form.\n\n" +
            "The form will be connected to email/database later."
        );


        contactForm.reset();

    });

}
