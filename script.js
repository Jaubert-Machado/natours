const navLink = document.querySelectorAll(".navigation__link");
const navCheckbox = document.querySelector(".navigation__checkbox");

const popupClose = document.querySelector(".popup__close");
const popupContent = document.querySelector(".popup__content");
const popupOpen = document.querySelectorAll(".open-popup");
const popup = document.querySelector(".popup");

navLink.forEach(function (btn) {
  btn.addEventListener("click", function () {
    navCheckbox.checked = false;
  });
});

popupClose.addEventListener("click", function () {
  window.location = "#tours-card";
});
