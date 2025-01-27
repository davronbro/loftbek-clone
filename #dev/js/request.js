const requestOpen = document.querySelector(".add__btn");
const request = document.querySelector(".request");
const closeBtn = document.querySelector(".request-btn");
const backBtn = document.querySelector(".request__back-btn");

requestOpen.addEventListener("click", () => {
  request.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  request.classList.remove("active");
});

backBtn.addEventListener("click", () => {
  request.classList.remove("active");
});