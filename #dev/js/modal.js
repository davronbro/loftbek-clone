const loader = document.querySelector(".loader");
if (loader) {
  loader.classList.add("animating");

  setTimeout(() => {
    loader.classList.add("disable");
  }, 3000);
}

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
// let clicksCount = 0

setTimeout(() => {
  modal.classList.add("active");
}, 6000);

// const id = setInterval(() => {
//   modal.classList.add("active");
// }, 2000)

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  // clicksCount++

  // if(clicksCount === 1){
  //   clearInterval(id)
  // }
});
