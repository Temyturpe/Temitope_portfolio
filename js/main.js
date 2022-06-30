// menu show and hidden
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

//show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

//remove menu
const navLink = document.querySelectorAll(".nav__link");
