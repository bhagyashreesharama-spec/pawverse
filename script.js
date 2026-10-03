/* =====================================================
   PAWVERSE COLLECTIVE
   Main JavaScript
===================================================== */


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {

  mobileNav.classList.toggle("active");

});


const mobileLinks = mobileNav.querySelectorAll("a");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileNav.classList.remove("active");

  });

});



/* =====================================================
   ANIMAL MODAL
===================================================== */

const animalModal = document.getElementById("animalModal");
const animalModalClose = document.getElementById("animalModalClose");

const animalModalTitle =
  document.getElementById("animalModalTitle");

const animalModalText =
  document.getElementById("animalModalText");


const animalInformation = {

  dogs: {
    title: "Dogs",
    text:
      "Street dogs need more than food. They need safety, medical care, responsible community support and people willing to stand beside them."
  },

  cats: {
    title: "Cats",
    text:
      "From tiny kittens to injured community cats, compassionate care can give vulnerable animals a safer chance at life."
  },

  cows: {
    title: "Cows",
    text:
      "Abandoned and injured cattle can require food, medical attention, shelter and long-term responsible care."
  },

  monkeys: {
    title: "Monkeys",
    text:
      "Wild animals need responsible rescue and rehabilitation rather than unnecessary interference. Professional wildlife support matters."
  },

  birds: {
    title: "Birds",
    text:
      "Injured birds often need immediate first aid and trained rehabilitation before they can safely return to the wild."
  },

  others: {
    title: "Every Other Life",
    text:
      "Dogs, cats, cows, birds, monkeys and countless other animals all share one thing: their lives matter."
  }

};


const animalCards =
  document.querySelectorAll(".animal-card");


animalCards.forEach(card => {

  card.addEventListener("click", () => {

    const animal = card.dataset.animal;

    const data = animalInformation[animal];

    if (!data) return;

    animalModalTitle.textContent = data.title;

    animalModalText.textContent = data.text;

    animalModal.classList.add("active");

    document.body.classList.add("modal-open");

  });

});


animalModalClose.addEventListener("click", closeAnimalModal);


animalModal.addEventListener("click", event => {

  if (event.target === animalModal) {
    closeAnimalModal();
  }

});


function closeAnimalModal() {

  animalModal.classList.remove("active");

  document.body.classList.remove("modal-open");

}



/* =====================================================
   PROFESSIONAL ROLE APPLICATION
===================================================== */

const applicationModal =
  document.getElementById("applicationModal");

const applicationClose =
  document.getElementById("applicationClose");

const applicationTitle =
  document.getElementById("applicationTitle");

const appRole =
  document.getElementById("appRole");

const applicationForm =
  document.getElementById("applicationForm");

const formSuccess =
  document.getElementById("formSuccess");


const roleCards =
  document.querySelectorAll(".role-card");


roleCards.forEach(card => {

  card.addEventListener("click", () => {

    const role = card.dataset.role;

    applicationTitle.textContent =
      "Join as " + role + ".";

    appRole.value = role;

    applicationForm.style.display = "grid";

    formSuccess.style.display = "none";

    applicationModal.classList.add("active");

    document.body.classList.add("modal-open");

  });

});


applicationClose.addEventListener(
  "click",
  closeApplicationModal
);


applicationModal.addEventListener("click", event => {

  if (event.target === applicationModal) {

    closeApplicationModal();

  }

});


function closeApplicationModal() {

  applicationModal.classList.remove("active");

  document.body.classList.remove("modal-open");

}



/* =====================================================
   APPLICATION FORM
===================================================== */

applicationForm.addEventListener("submit", event => {

  event.preventDefault();

  applicationForm.style.display = "none";

  formSuccess.style.display = "block";

});



/* =====================================================
   COMMUNITY OPTIONS
===================================================== */

const communityCards =
  document.querySelectorAll(".community-card");


communityCards.forEach(card => {

  card.addEventListener("click", () => {

    const community =
      card.dataset.community;

    applicationTitle.textContent =
      "Join as " + community + ".";

    appRole.value = community;

    applicationForm.style.display = "grid";

    formSuccess.style.display = "none";

    applicationModal.classList.add("active");

    document.body.classList.add("modal-open");

  });

});



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeAnimalModal();

    closeApplicationModal();

  }

});



/* =====================================================
   SMOOTH INTERNAL LINKS
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if (
      targetId &&
      targetId !== "#"
    ) {

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }

  });

});
