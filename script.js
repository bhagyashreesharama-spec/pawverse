/* =====================================================
   PAWVERSE — JAVASCRIPT
   ===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    // Mobile menu link click ke baad menu close
    const menuLinks = navMenu.querySelectorAll("a");

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


/* ================= SMOOTH SCROLL ================= */

const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

allAnchorLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            const navbar = document.querySelector(".navbar");

            const navbarHeight = navbar
                ? navbar.offsetHeight
                : 80;

            const sectionPosition =
                targetSection.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({

                top: sectionPosition,

                behavior: "smooth"

            });

        }

    });

});


/* ================= CURRENT YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".topic-card, .value-card, .mission-card, .animal-card, .help-card, .journey-step"
);

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================= FORM ================= */

const pawForm = document.getElementById("pawForm");

if (pawForm) {

    pawForm.addEventListener("submit", function (event) {

        const action = pawForm.getAttribute("action");

        /*
        Abhi Formspree connect nahi kiya gaya hai.
        Isliye fake submission nahi hone denge.
        */

        if (!action || action.includes("YOUR_FORM_ID")) {

            event.preventDefault();

            alert(
                "PAWVERSE form ready hai! 💚\n\n" +
                "Abhi email connection setup nahi hua hai. " +
                "Website design complete hone ke baad Formspree connect karenge."
            );

            return;

        }

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-menu a");

const activeSectionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navigationLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + currentId
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach((section) => {

    activeSectionObserver.observe(section);

});


/* ================= CLOSE MENU ON OUTSIDE CLICK ================= */

document.addEventListener("click", (event) => {

    if (!navMenu || !menuToggle) {
        return;
    }

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

    }

});
