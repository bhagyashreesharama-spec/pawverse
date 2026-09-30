/* =========================================================
   PAWVERSE — JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.textContent =
            navMenu.classList.contains("active")
                ? "×"
                : "☰";

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const header =
            document.querySelector(".site-header");

        const headerHeight =
            header ? header.offsetHeight : 70;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* ================= MODAL ================= */

const modal =
    document.getElementById("infoModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const modalClose =
    document.getElementById("modalClose");

const modalAction =
    document.getElementById("modalAction");


function openModal(title, text) {

    if (!modal || !modalTitle || !modalText) {
        return;
    }

    modalTitle.textContent = title;

    modalText.textContent = text;

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* ================= MISSION CARDS ================= */

document.querySelectorAll(".mission-card").forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.dataset.title || "PAWVERSE";

        const text =
            card.dataset.text ||
            "Learn more about this area of PAWVERSE.";

        openModal(title, text);

    });

});


/* ================= ANIMAL CARDS ================= */

document.querySelectorAll(".animal-card").forEach(card => {

    card.addEventListener("click", () => {

        const title =
            card.dataset.title || "PAWVERSE";

        const text =
            card.dataset.text ||
            "Learn more about this animal and ways to support compassionate care.";

        openModal(title, text);

    });

});


/* ================= CHOICE SELECTION ================= */

const choiceSelect =
    document.getElementById("choiceSelect");


function selectChoice(choice) {

    if (!choiceSelect) {
        return;
    }

    const options =
        Array.from(choiceSelect.options);

    const exactOption =
        options.find(
            option =>
                option.value.toLowerCase() ===
                choice.toLowerCase()
        );

    if (exactOption) {

        choiceSelect.value =
            exactOption.value;

    } else {

        const partialOption =
            options.find(
                option =>
                    option.textContent
                        .toLowerCase()
                        .includes(choice.toLowerCase())
            );

        if (partialOption) {
            choiceSelect.value =
                partialOption.value;
        }

    }

}


/* ================= SCROLL TO JOIN ================= */

function goToJoin(choice = "") {

    if (choice) {
        selectChoice(choice);
    }

    const joinSection =
        document.getElementById("join");

    if (!joinSection) {
        return;
    }

    const header =
        document.querySelector(".site-header");

    const headerHeight =
        header ? header.offsetHeight : 70;

    const position =
        joinSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

    window.scrollTo({
        top: position,
        behavior: "smooth"
    });

}


/* ================= PATH CARDS ================= */

document.querySelectorAll("[data-choice]").forEach(element => {

    element.addEventListener("click", () => {

        const choice =
            element.dataset.choice;

        if (!choice) {
            return;
        }

        goToJoin(choice);

    });

});


/* ================= MODAL ACTION ================= */

if (modalAction) {

    modalAction.addEventListener("click", () => {

        closeModal();

        goToJoin();

    });

}


/* ================= TEXT BUTTONS ================= */

document.querySelectorAll("[data-scroll]").forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.scroll;

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        const header =
            document.querySelector(".site-header");

        const headerHeight =
            header ? header.offsetHeight : 70;

        window.scrollTo({

            top:
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight,

            behavior: "smooth"

        });

    });

});


/* ================= FORM ================= */

const pawForm =
    document.getElementById("pawForm");

if (pawForm) {

    pawForm.addEventListener("submit", event => {

        event.preventDefault();

        const name =
            pawForm.elements["name"]?.value.trim();

        if (!name) {
            alert("Please enter your name.");
            return;
        }

        alert(
            `Thank you, ${name}! 💚\n\n` +
            "Your PAWVERSE interest form is ready.\n\n" +
            "The real submission system will be connected when PAWVERSE is ready to accept registrations."
        );

    });

}


/* ================= YEAR ================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= CLOSE MENU OUTSIDE ================= */

document.addEventListener("click", event => {

    if (!navMenu || !menuBtn) {
        return;
    }

    if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    }

});
