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

//KEY FEATURES
const nextSlideArrow = document.getElementById("topic-arrow");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

nextSlideArrow.addEventListener("click", () => {
  plusSlides(1);
});

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("topic");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.getElementById("last-card").addEventListener("click", function () {
  window.location.href = "tokenomics.html";
});

//cta Section

function changeSite(siteName) {
  window.location.href = siteName;
}
