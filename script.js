// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("mobile-open");
});


// CLOSE MOBILE MENU AFTER CLICK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("mobile-open");
  });
});


// JOIN MODAL

const joinBtn = document.getElementById("joinBtn");
const joinModal = document.getElementById("joinModal");
const closeModal = document.getElementById("closeModal");

joinBtn.addEventListener("click", () => {
  joinModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  joinModal.classList.remove("active");
});


// CLOSE WHEN CLICKING OUTSIDE

joinModal.addEventListener("click", (event) => {

  if (event.target === joinModal) {
    joinModal.classList.remove("active");
  }

});


// FORM

const joinForm = document.getElementById("joinForm");
const successMessage = document.getElementById("successMessage");

joinForm.addEventListener("submit", (event) => {

  event.preventDefault();

  joinForm.style.display = "none";
  successMessage.style.display = "block";

});


// ESCAPE KEY

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    joinModal.classList.remove("active");
  }

});


// SIMPLE SCROLL REVEAL

const revealElements = document.querySelectorAll(
  ".work-card, .value, .mission-grid, .founder-content"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});

