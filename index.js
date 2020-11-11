// const inputCheck = document.querySelector("input");

// function checkBox(e, inputCheck) {
//     if (checkBox.checked) {
//         checkBox.checked = false;
//         e.stopPropagation();
//     }
// }

// document.querySelector("#page").addEventListener("click", checkBox);

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
