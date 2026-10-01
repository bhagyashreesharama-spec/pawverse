/* =========================
   PAWVERSE JAVASCRIPT
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* =========================
   APPLICATION MODAL
========================= */

const modal = document.getElementById("applicationModal");
const closeModal = document.getElementById("closeModal");

const selectedRole = document.getElementById("selectedRole");
const roleInput = document.getElementById("roleInput");


/* Open application form */

function openApplication(role) {

    if (!modal) return;

    selectedRole.textContent = role;
    roleInput.value = role;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* Team role cards */

document.querySelectorAll(".role-card").forEach(card => {

    card.addEventListener("click", () => {

        const role = card.dataset.role;

        openApplication(role);

    });

});


/* Open-for-all cards */

document.querySelectorAll(".everyone-card").forEach(card => {

    card.addEventListener("click", () => {

        const role = card.dataset.role;

        openApplication(role);

    });

});


/* Main "I Want To Help" button */

const openEveryoneForm = document.getElementById("openEveryoneForm");

if (openEveryoneForm) {

    openEveryoneForm.addEventListener("click", () => {

        openApplication("Open For Everyone");

    });

}


/* Close modal */

if (closeModal) {

    closeModal.addEventListener("click", closeApplication);

}


/* Click outside modal */

if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeApplication();
        }

    });

}


/* Escape key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeApplication();
    }

});


function closeApplication() {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================
   APPLICATION FORM
========================= */

const applicationForm =
    document.getElementById("applicationForm");

if (applicationForm) {

    applicationForm.addEventListener("submit", event => {

        event.preventDefault();

        const formData = new FormData(applicationForm);

        const role = formData.get("role");
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const message = formData.get("message");


        /*
            GitHub Pages is static hosting.
            Therefore this version prepares an email
            instead of pretending to store data on a server.
        */

        const subject =
            `Pawverse Application - ${role}`;

        const body =
`Hello Pawverse,

I would like to join Pawverse.

Role / Category: ${role}

Name: ${name}

Phone: ${phone}

Email: ${email}

Why I want to join:
${message}

Thank you.`;


        /*
            CHANGE THIS EMAIL ADDRESS
            to your official Pawverse email.
        */

        const pawverseEmail =
            "yourpawverseemail@example.com";


        const mailto =
            `mailto:${pawverseEmail}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;


        window.location.href = mailto;

    });

}


/* =========================
   FOOTER YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   HEADER SHADOW ON SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(23, 63, 50, 0.10)";

    } else {

        header.style.boxShadow = "none";

    }

});
