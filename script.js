/* =========================================================
   PAWVERSE JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
      menuBtn.textContent = "×";
    } else {
      menuBtn.textContent = "☰";
    }
  });
}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

    menuBtn.textContent = "☰";

  });

});


/* =========================================================
   MODAL FUNCTIONS
   ========================================================= */

function openModal(id) {

  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

}


function closeModal(id) {

  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

}


/* Click outside modal */

document.querySelectorAll(".modal").forEach(modal => {

  modal.addEventListener("click", function(event) {

    if (event.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }

  });

});


/* Escape key */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    document.querySelectorAll(".modal.active").forEach(modal => {
      modal.classList.remove("active");
    });

    document.body.style.overflow = "";

  }

});


/* =========================================================
   ANIMAL DATA
   ========================================================= */

const animalData = {

  "Dogs": {
    description:
      "Dogs living on streets or in vulnerable situations may need food, medical attention, rescue support, temporary shelter, fostering or responsible adoption. If you want to help a dog, submit your details and tell us what kind of support you can offer."
  },

  "Cats": {
    description:
      "Cats and kittens can face injuries, abandonment, illness and unsafe living conditions. PAWVERSE aims to encourage responsible care, fostering, awareness and support for vulnerable feline companions."
  },

  "Cows": {
    description:
      "Injured, abandoned or vulnerable cattle deserve humane treatment and responsible care. If you know of a cow that needs attention, use the PAWVERSE form to share the situation."
  },

  "Birds": {
    description:
      "Birds can become injured or trapped in urban environments. Responsible intervention matters. If you find a bird in distress, provide accurate information through our help form."
  },

  "Monkeys": {
    description:
      "Urban wildlife should be approached responsibly and safely. If a monkey appears injured or distressed, avoid unnecessary contact and seek appropriate wildlife assistance."
  },

  "Other Animals": {
    description:
      "PAWVERSE believes compassion should not stop at a particular species. If another animal needs attention, tell us what happened and provide as much useful information as possible."
  }

};


/* =========================================================
   ANIMAL MODAL
   ========================================================= */

function openAnimal(animalName) {

  const title = document.getElementById("animalTitle");
  const description = document.getElementById("animalDescription");
  const helpButton = document.getElementById("animalHelpButton");

  title.textContent = animalName;

  if (animalData[animalName]) {
    description.textContent = animalData[animalName].description;
  } else {
    description.textContent =
      "Every animal deserves compassion, safety and responsible care.";
  }

  helpButton.onclick = function() {

    closeModal("animalModal");

    openApplication(
      animalName + " Support / Volunteer"
    );

  };

  openModal("animalModal");
}


/* =========================================================
   APPLICATION FORM
   ========================================================= */

function openApplication(type) {

  const title = document.getElementById("formTitle");
  const selectedType = document.getElementById("selectedType");
  const interestSelect = document.getElementById("interestSelect");

  title.textContent = type;

  selectedType.value = type;

  /* Automatically select matching option if possible */

  const options = Array.from(interestSelect.options);

  const matchingOption = options.find(option =>
    option.text.toLowerCase().includes(type.toLowerCase())
  );

  if (matchingOption) {
    interestSelect.value = matchingOption.value;
  }

  openModal("applicationModal");
}


/* =========================================================
   FORM SUBMISSION
   ========================================================= */


/*
   IMPORTANT:

   GitHub Pages is static hosting.

   To actually receive form submissions in Gmail,
   connect this form to a form backend/service.

   Put your endpoint below.

   Example:

   const FORM_ENDPOINT =
   "YOUR_CONNECTED_FORM_ENDPOINT";

   Do NOT put your Gmail password here.

   The endpoint/service should forward the submitted
   information to your chosen email address.
*/

const FORM_ENDPOINT = "YOUR_FORM_ENDPOINT";


const pawForm = document.getElementById("pawForm");
const formMessage = document.getElementById("formMessage");
const submitButton = document.getElementById("submitButton");


if (pawForm) {

  pawForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    formMessage.className = "form-message";
    formMessage.textContent = "";

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";


    /* -----------------------------------------
       CHECK ENDPOINT
       ----------------------------------------- */

    if (
      !FORM_ENDPOINT ||
      FORM_ENDPOINT === "YOUR_FORM_ENDPOINT"
    ) {

      formMessage.className = "form-message error";

      formMessage.innerHTML =
        "Form design is ready. Connect the form endpoint to receive applications in Gmail.";

      submitButton.disabled = false;
      submitButton.textContent = "Submit Details →";

      return;
    }


    /* -----------------------------------------
       SEND FORM
       ----------------------------------------- */

    try {

      const formData = new FormData(pawForm);

      const response = await fetch(
        FORM_ENDPOINT,
        {
          method: "POST",
          body: formData
        }
      );


      if (!response.ok) {
        throw new Error("Submission failed");
      }


      formMessage.className = "form-message success";

      formMessage.innerHTML =
        "✓ Thank you. Your details have been submitted successfully to PAWVERSE.";


      pawForm.reset();


      submitButton.textContent = "Submitted ✓";


      setTimeout(() => {

        closeModal("applicationModal");

        submitButton.disabled = false;
        submitButton.textContent = "Submit Details →";

        formMessage.className = "form-message";

      }, 3000);


    } catch (error) {

      formMessage.className = "form-message error";

      formMessage.innerHTML =
        "Something went wrong. Please try again or contact PAWVERSE directly.";

      submitButton.disabled = false;
      submitButton.textContent = "Submit Details →";

    }

  });

}


/* =========================================================
   FOUNDER
   ========================================================= */

function openFounderModal() {

  openModal("founderModal");

}


/* =========================================================
   GALLERY
   ========================================================= */

const galleryStories = {

  1: {
    title: "Healing lives, one paw at a time.",
    text:
      "Recovery is rarely instant. It takes patience, medical attention, safety, nourishment and people who refuse to look away."
  },

  2: {
    title: "Compassion creates connection.",
    text:
      "Animals may not speak our language, but their trust, fear and happiness can be understood through responsible care."
  },

  3: {
    title: "Every small life deserves safety.",
    text:
      "A safe environment, responsible care and kindness can make an enormous difference to a vulnerable animal."
  },

  4: {
    title: "A second chance can change everything.",
    text:
      "Every animal deserves the opportunity to recover, feel safe and experience kindness."
  }

};


function openGallery(number) {

  const story = galleryStories[number];

  document.getElementById("galleryTitle").textContent =
    story.title;

  document.getElementById("galleryText").textContent =
    story.text;

  openModal("galleryModal");
}


/* =========================================================
   COMING SOON SOCIALS
   ========================================================= */

function showComingSoon(event, platform) {

  event.preventDefault();

  alert(
    platform +
    " link will be added when the official PAWVERSE account is ready."
  );

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

/*
   If an external animal image ever becomes unavailable,
   the card will not show a broken-image icon.
*/

document.querySelectorAll("img").forEach(img => {

  img.addEventListener("error", function() {

    if (
      this.src.includes("images/logo.png") ||
      this.src.includes("images/bhagyashri.jpg")
    ) {
      return;
    }

    this.style.display = "none";

    const parent = this.parentElement;

    if (parent) {
      parent.style.background =
        "linear-gradient(135deg, #dfe5d8, #b8c5b1)";
    }

  });

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
  ".animal-card, .work-box, .role-card, .community-card, .gallery-item"
);

const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition =
    "opacity .6s ease, transform .6s ease";

  revealObserver.observe(element);

});
