/* =========================================================
   PAWVERSE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


/* Close mobile menu after clicking a navigation link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* =========================================================
   MODAL HELPERS
========================================================= */

function openModal(modal) {

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeAllModals() {

    document.querySelectorAll(".modal").forEach(modal => {
        modal.classList.remove("active");
    });

    document.body.style.overflow = "";
}


/* Close buttons / backgrounds */

document.querySelectorAll(".close-modal").forEach(element => {

    element.addEventListener("click", closeAllModals);

});


/* ESC key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeAllModals();
    }

});


/* =========================================================
   ANIMAL DATA
========================================================= */

const animalData = {

    dogs: {
        title: "Dogs",
        text:
            "Dogs are one of the most visible parts of our communities. " +
            "Street dogs may face hunger, injuries, illness, traffic risks " +
            "and abandonment. PAWVERSE believes they deserve responsible " +
            "care, safety and compassion."
    },

    cats: {
        title: "Cats",
        text:
            "Cats often live quietly around us, but they can still face " +
            "injury, abandonment, illness and unsafe environments. " +
            "Responsible feeding, medical attention and safe spaces can " +
            "make a meaningful difference."
    },

    cows: {
        title: "Cows",
        text:
            "Cows and other large animals can be vulnerable when they are " +
            "left on roads or without proper care. Awareness, responsible " +
            "action and compassionate treatment matter."
    },

    birds: {
        title: "Birds",
        text:
            "Birds are small lives with important needs. Injuries, unsafe " +
            "environments and human activity can put them at risk. " +
            "PAWVERSE supports awareness and responsible action."
    },

    monkeys: {
        title: "Monkeys",
        text:
            "Urban wildlife often has to adapt to human environments. " +
            "Monkeys deserve humane treatment and responsible coexistence " +
            "rather than unnecessary harm."
    },

    other: {
        title: "Other Animals",
        text:
            "PAWVERSE believes compassion should not depend on species. " +
            "If you come across an animal that needs help, care or attention, " +
            "you can contact us and share the situation."
    }

};


/* =========================================================
   ANIMAL CARDS
========================================================= */

const animalModal = document.getElementById("animalModal");
const animalModalTitle = document.getElementById("animalModalTitle");
const animalModalText = document.getElementById("animalModalText");

document.querySelectorAll(".animal-card").forEach(card => {

    const openAnimal = () => {

        const animalName = card.dataset.animal;
        const data = animalData[animalName];

        if (!data) return;

        animalModalTitle.textContent = data.title;
        animalModalText.textContent = data.text;

        openModal(animalModal);
    };


    card.addEventListener("click", openAnimal);


    card.addEventListener("keydown", event => {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();

            openAnimal();
        }

    });

});


/* =========================================================
   FOUNDER MODAL
========================================================= */

const founderButton = document.getElementById("founderButton");
const founderModal = document.getElementById("founderModal");

if (founderButton && founderModal) {

    founderButton.addEventListener("click", () => {
        openModal(founderModal);
    });

}


/* =========================================================
   MISSION BUTTON
========================================================= */

const missionButton = document.getElementById("missionButton");

if (missionButton) {

    missionButton.addEventListener("click", () => {

        document.getElementById("work").scrollIntoView({
            behavior: "smooth"
        });

    });

}


/* =========================================================
   APPLICATION MODAL
========================================================= */

const applicationModal = document.getElementById("applicationModal");
const applicationTitle = document.getElementById("applicationTitle");
const selectedRole = document.getElementById("selectedRole");

function openApplication(role) {

    if (!applicationModal) return;

    applicationTitle.textContent = "Join as " + role;

    selectedRole.value = role;

    openModal(applicationModal);
}


/* Role cards */

document.querySelectorAll(".role-card, .community-card").forEach(card => {

    card.addEventListener("click", () => {

        const role = card.dataset.role;

        if (role) {
            openApplication(role);
        }

    });

});


/* =========================================================
   GALLERY MODAL
========================================================= */

const galleryModal = document.getElementById("galleryModal");
const galleryModalImage = document.getElementById("galleryModalImage");
const galleryModalTitle = document.getElementById("galleryModalTitle");

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("click", () => {

        const image = item.dataset.image;
        const title = item.dataset.title;

        galleryModalImage.src = image;
        galleryModalImage.alt = title;
        galleryModalTitle.textContent = title;

        openModal(galleryModal);

    });

});


/* =========================================================
   FUTURE SOCIAL LINKS
========================================================= */

document.querySelectorAll(".future-link").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const platform = link.dataset.platform || "Social Media";

        alert(
            platform +
            " link will be connected here. " +
            "Once you have the exact PAWVERSE link, replace the # in index.html."
        );

    });

});


/* =========================================================
   FORM SYSTEM
========================================================= */

/*
   IMPORTANT:

   GitHub Pages is static hosting.
   It cannot directly store form submissions.

   When you are ready, put your Formspree / Google Apps Script
   endpoint here.

   Example:

   const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

*/

const FORM_ENDPOINT = "YOUR_FORM_ENDPOINT";


function submitFormWithBackend(form, statusElement) {

    if (FORM_ENDPOINT === "YOUR_FORM_ENDPOINT") {

        statusElement.textContent =
            "The form is ready. Connect a form endpoint to receive submissions.";

        return;
    }


    const formData = new FormData(form);


    fetch(FORM_ENDPOINT, {

        method: "POST",

        body: formData,

        headers: {
            "Accept": "application/json"
        }

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Form submission failed.");
        }

        return response.json().catch(() => ({}));

    })

    .then(() => {

        statusElement.textContent =
            "Thank you. Your message has been submitted.";

        form.reset();

    })

    .catch(() => {

        statusElement.textContent =
            "Something went wrong. Please email pawversecollective@gmail.com.";

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        contactStatus.textContent = "Preparing your message...";

        submitFormWithBackend(
            contactForm,
            contactStatus
        );

    });

}


/* =========================================================
   APPLICATION FORM
========================================================= */

const applicationForm =
    document.getElementById("applicationForm");

const applicationStatus =
    document.getElementById("applicationStatus");


if (applicationForm) {

    applicationForm.addEventListener("submit", event => {

        event.preventDefault();

        applicationStatus.textContent =
            "Preparing your application...";

        submitFormWithBackend(
            applicationForm,
            applicationStatus
        );

    });

}


/* =========================================================
   FOOTER YEAR
========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PREVENT BODY SCROLL WHEN MODAL IS OPEN
========================================================= */

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeAllModals();
        }

    });

});
