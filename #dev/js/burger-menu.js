const burgerBtn = document.querySelector(".header__burger-menu");
const burgerMenu = document.querySelector(".burger-menu");
const burgerCloseBtn = document.querySelector(".menu-close-btn");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.add("active");
  body.classList.add("open");
});
burgerCloseBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  body.classList.remove("open");
});


const burgerMobBtn = document.querySelector (".lists")
const burgerMenuMob = document.querySelector(".burger-mob")
const burgerMenuCloseBtn = document.querySelector(".burger-mob__close-btn")


burgerMobBtn.addEventListener("click", () => {
  burgerMenuMob.classList.add("active");
})

burgerMenuCloseBtn.addEventListener("click", () => {
  burgerMenuMob.classList.remove("active")
})

