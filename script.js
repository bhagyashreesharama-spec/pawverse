/* =====================================================
   PAWVERSE — JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.textContent =
            navMenu.classList.contains("active")
                ? "✕"
                : "☰";

    });


    const menuLinks = navMenu.querySelectorAll("a");

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbar = document.querySelector(".navbar");

        const navbarHeight =
            navbar ? navbar.offsetHeight : 80;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* ================= YEAR ================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ================= MODAL ================= */

const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const modalJoin = document.getElementById("modalJoin");


function openModal(title, text) {

    if (!modal || !modalTitle || !modalText) {
        return;
    }

    modalTitle.textContent = title;
    modalText.textContent = text;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener("click", closeModal);

}


if (modal) {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });

}


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


if (modalJoin) {

    modalJoin.addEventListener("click", () => {

        closeModal();

    });

}


/* ================= MISSION CARDS ================= */

const missionCards =
    document.querySelectorAll(".mission-card");

missionCards.forEach((card) => {

    card.addEventListener("click", () => {

        const title =
            card.dataset.title || "PAWVERSE Mission";

        const text =
            card.dataset.text ||
            "Learn more about this part of PAWVERSE.";

        openModal(title, text);

    });

});


/* ================= ANIMAL CARDS ================= */

const animalCards =
    document.querySelectorAll(".animal-card");

animalCards.forEach((card) => {

    card.addEventListener("click", () => {

        const title =
            card.dataset.title || "Animals";

        const text =
            card.dataset.text ||
            "Learn more about PAWVERSE's animal-welfare vision.";

        openModal(title, text);

    });

});


/* ================= HELP CARDS ================= */

const helpCards =
    document.querySelectorAll(".help-card");

helpCards.forEach((card) => {

    card.addEventListener("click", () => {

        const type =
            card.dataset.type || "Help";

        const descriptions = {

            "Volunteer":
                "Give your time to support PAWVERSE activities, awareness work, community efforts or future field initiatives.",

            "Foster":
                "Explore responsible temporary care for animals who may need a safe environment.",

            "Adopt":
                "Learn about responsible adoption and the importance of choosing a safe, suitable home.",

            "Use My Skills":
                "Your professional or creative skills may be useful — technology, design, writing, video, marketing, photography, communication and more.",

            "Support":
                "Support may include resources, partnerships, sponsorships, services or other responsible contributions.",

            "Awareness":
                "Help spread responsible animal-welfare information through your social media, community or network."

        };

        openModal(
            type,
            descriptions[type] ||
            "Tell PAWVERSE how you would like to contribute."
        );


        setTimeout(() => {

            const interest =
                document.getElementById("interest");

            if (interest) {

                interest.value = type;

            }

        }, 100);

    });

});


/* ================= FIND YOUR WAY ================= */

const pathCards =
    document.querySelectorAll(".path-card");

pathCards.forEach((card) => {

    card.addEventListener("click", () => {

        const path =
            card.dataset.path || "PAWVERSE";

        const descriptions = {

            "Student":
                "Students can explore volunteering, learning, creative contribution, awareness, technology, design, social media and other beginner-friendly opportunities.",

            "Working Professional":
                "Working professionals can contribute through their existing knowledge, experience, network, mentoring or professional skills.",

            "Business / Company":
                "Businesses and companies can explore partnerships, CSR initiatives, sponsorships, useful services, resources or employee-volunteering opportunities.",

            "I Have Skills":
                "Useful skills can include web development, technology, graphic design, video editing, social media, digital marketing, writing, photography, communication, finance, documentation and more.",

            "No Skills Yet":
                "You do not need professional skills to begin. Start small, learn about animal welfare, volunteer responsibly and discover where you can contribute.",

            "I Just Want to Help Animals":
                "You can start with volunteering, awareness, responsible fostering or adoption, supporting basic needs, or simply learning how to help animals safely.",

            "Not Sure":
                "That's completely okay. Tell PAWVERSE about your interests, availability and background, and use the registration form to describe what you are looking for."

        };

        openModal(
            path,
            descriptions[path] ||
            "Tell PAWVERSE how you would like to participate."
        );


        setTimeout(() => {

            const background =
                document.getElementById("background");

            const interest =
                document.getElementById("interest");

            if (background) {

                if (path === "Student") {
                    background.value = "Student";
                }

                if (path === "Working Professional") {
                    background.value = "Working Professional";
                }

                if (path === "Business / Company") {
                    background.value = "Business / Company";
                }

            }

            if (interest) {

                if (path === "I Have Skills") {
                    interest.value = "Use My Skills";
                }

                if (path === "No Skills Yet") {
                    interest.value = "Learn New Skills";
                }

                if (path === "I Just Want to Help Animals") {
                    interest.value = "Volunteer";
                }

                if (path === "Not Sure") {
                    interest.value = "Not Sure Yet";
                }

            }

        }, 100);

    });

});


/* ================= FORM ================= */

const pawForm =
    document.getElementById("pawForm");


if (pawForm) {

    pawForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const interest =
            document.getElementById("interest").value;


        if (!name || !interest) {

            alert(
                "Please fill in your name and choose how you would like to participate."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! 💚\n\n" +
            "Your PAWVERSE interest has been noted as: " +
            interest +
            ".\n\n" +
            "The form is currently in demo mode. Email/online submission will be connected separately."
        );

    });

}


/* ================= OUTSIDE MENU CLICK ================= */

document.addEventListener("click", (event) => {

    if (!navMenu || !menuToggle) {
        return;
    }

    const clickedInside =
        navMenu.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);

    if (
        !clickedInside &&
        !clickedButton &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

    }

});
