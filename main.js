let ham_menu = document.querySelector(".ham_menu");
let menu = document.querySelector(".menu");
let icon_x = document.querySelector(".icon_x");
ham_menu.addEventListener("click", () => {
  menu.style.left = "0";
  menu.style.transition = "left 1s ease";
});

icon_x.addEventListener("click", () => {
  menu.style.left = "-100%";
  menu.style.transition = "left 1s ease";
});
