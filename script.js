/* =========================================================
   PAWVERSE
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
       ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        /* Close menu when navigation link is clicked */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", (event) => {

            const clickedInsideMenu =
                mainNav.contains(event.target);

            const clickedToggle =
                menuToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedToggle &&
                mainNav.classList.contains("open")
            ) {

                mainNav.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );
            }

        });

    }


    /* =========================
       HEADER SCROLL EFFECT
       ========================= */

    const header = document.querySelector(".site-header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        updateHeader();

        window.addEventListener(
            "scroll",
            updateHeader,
            { passive: true }
        );

    }


    /* =========================
       SMOOTH INTERNAL LINKS
       ========================= */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       REVEAL ANIMATION
       ========================= */

    const revealElements =
        document.querySelectorAll(
            ".intro-content, " +
            ".section-heading, " +
            ".animal-card, " +
            ".story-image, " +
            ".story-content, " +
            ".founder-message, " +
            ".involvement-card, " +
            ".opportunity-inner, " +
            ".preview-image, " +
            ".final-cta-inner"
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal-on-scroll");

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("is-visible");

        });

    }


    /* =========================
       CURRENT YEAR
       ========================= */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach((element) => {

        element.textContent =
            currentYear;

    });


    /* =========================
       ESC KEY
       CLOSES MOBILE MENU
       ========================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mainNav &&
                mainNav.classList.contains("open")
            ) {

                mainNav.classList.remove("open");

                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }
    );


    /* =========================
       IMAGE ERROR HANDLING
       ========================= */

    const images =
        document.querySelectorAll("img");

    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });

});
