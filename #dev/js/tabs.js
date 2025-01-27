const tabBtns = document.querySelectorAll(".category-tabs__wrapper ul li a");
const tabContents = document.querySelectorAll(".chairs");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((item) => {
      item.classList.remove("active");
    });

    tabContents.forEach((content) => content.classList.remove("active"));
    
    const tabId = btn.dataset.tab;
    btn.classList.add("active");
    document.getElementById(`tab-${tabId}`).classList.add("active");
  });
});
