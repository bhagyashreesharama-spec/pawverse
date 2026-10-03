/* =====================================================
   PAWVERSE
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =====================================================
   ANIMAL DATA
===================================================== */

const animalData = {

    dogs: {
        title: "Dogs",
        text:
            "Dogs are among the most visible animals on our streets. " +
            "PAWVERSE believes they deserve safety, medical attention, " +
            "food, affection and responsible forever homes."
    },

    cats: {
        title: "Cats",
        text:
            "Cats quietly share our streets and neighbourhoods. " +
            "A little care, safe spaces and responsible communities " +
            "can make a huge difference to their lives."
    },

    cows: {
        title: "Cows",
        text:
            "Cows are gentle and sentient beings. Their lives deserve " +
            "dignity, protection, proper nutrition and compassionate care."
    },

    birds: {
        title: "Birds",
        text:
            "Birds belong in the sky. Injured, trapped or exhausted " +
            "birds may need human help, and responsible action can " +
            "give them another chance."
    },

    monkeys: {
        title: "Monkeys",
        text:
            "Monkeys are intelligent wild animals. The goal should be " +
            "respectful coexistence, protection of their habitat and " +
            "responsible human behaviour."
    },

    other: {
        title: "Every Other Animal",
        text:
            "PAWVERSE believes compassion should not stop at the animals " +
            "we see every day. Every living creature deserves empathy, " +
            "respect and protection."
    }

};


/* =====================================================
   ANIMAL MODAL
===================================================== */

const animalModal = document.getElementById("animalModal");

const animalTitle = document.getElementById("animalTitle");

const animalText = document.getElementById("animalText");

const animalClose = document.getElementById("animalClose");

const animalBack = document.getElementById("animalBack");

const animalJoin = document.getElementById("animalJoin");


let selectedAnimal = "";


/* Open animal modal */

document.querySelectorAll(".animal-card").forEach(card => {

    card.addEventListener("click", () => {

        const animal = card.dataset.animal;

        selectedAnimal = animal;

        animalTitle.textContent = animalData[animal].title;

        animalText.textContent = animalData[animal].text;

        animalModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close animal modal */

function closeAnimalModal() {

    animalModal.classList.remove("active");

    document.body.style.overflow = "";

}


animalClose.addEventListener("click", closeAnimalModal);

animalBack.addEventListener("click", closeAnimalModal);


/* Animal modal -> application */

animalJoin.addEventListener("click", () => {

    closeAnimalModal();

    setTimeout(() => {

        openApplication(
            "Help " + animalData[selectedAnimal].title
        );

    }, 250);

});


/* =====================================================
   PROFESSIONAL APPLICATION
===================================================== */

const applicationModal =
    document.getElementById("applicationModal");

const applicationTitle =
    document.getElementById("applicationTitle");

const applicationClose =
    document.getElementById("applicationClose");


function openApplication(role) {

    applicationTitle.textContent =
        "Apply as " + role;

    applicationModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeApplication() {

    applicationModal.classList.remove("active");

    document.body.style.overflow = "";

}


applicationClose.addEventListener(
    "click",
    closeApplication
);


/* Role cards */

document.querySelectorAll(".role-card").forEach(card => {

    card.addEventListener("click", () => {

        const role = card.dataset.role;

        openApplication(role);

    });

});


/* Community cards */

document.querySelectorAll(".community-card").forEach(card => {

    card.addEventListener("click", () => {

        const community = card.dataset.community;

        openApplication(community);

    });

});


/* =====================================================
   FORM
===================================================== */

const joinForm = document.getElementById("joinForm");

const successMessage =
    document.getElementById("successMessage");


joinForm.addEventListener("submit", event => {

    event.preventDefault();

    /*
        This is currently a front-end form.

        Later you can connect this form to:
        - Formspree
        - Google Forms
        - EmailJS
        - your own backend
    */

    joinForm.style.display = "none";

    successMessage.classList.add("show");

});


/* =====================================================
   CLOSE MODALS WHEN CLICKING BACKGROUND
===================================================== */

animalModal.addEventListener("click", event => {

    if (event.target === animalModal) {
        closeAnimalModal();
    }

});


applicationModal.addEventListener("click", event => {

    if (event.target === applicationModal) {
        closeApplication();
    }

});


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeAnimalModal();

        closeApplication();

    }

});


/* =====================================================
   IMAGE FALLBACK
===================================================== */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.style.background =
            "linear-gradient(135deg, #3b4d3c, #657663)";

        image.removeAttribute("src");

        image.alt = "PAWVERSE Animal";

    });

});


/* =====================================================
   NAVBAR SHADOW ON SCROLL
===================================================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.getElementById("navbar");

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(30,45,32,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
