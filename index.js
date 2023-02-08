"use strict";

const buttonSubmit = document.querySelector(".btn");
const buttonRatings = document.querySelector(".card__ratings");
const mainCard = document.querySelector(".card");
const thanksCard = document.querySelector(".card-thanks");
const allRatings = document.querySelectorAll(".card__btn");
const warningMessage = document.querySelector(".warning");
const ratingOutOfFive = document.querySelector(".card-thanks__select");

let ratingNumber;

buttonRatings.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("card__btn")) {
    target.style.backgroundColor = "var(--color-orange)";
    target.style.color = "var(--color-white)";

    allRatings.forEach((el) => {
      if (el !== target) {
        el.style = "";
      }
    });
    ratingNumber = target.innerText;
  }
});

buttonSubmit.addEventListener("click", () => {
  if (ratingNumber) {
    mainCard.classList.add("hidden");
    thanksCard.classList.remove("hidden");
    ratingOutOfFive.innerText = `You selected ${ratingNumber} out of 5`;
  } else {
    gsap.fromTo(
      warningMessage,
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    );
  }
});
