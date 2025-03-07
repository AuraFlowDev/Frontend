// Arrow to top
const toTop = document.querySelector(".arrow-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
    console.log("testststtstst");
  } else {
    toTop.classList.remove("active");
  }
});
