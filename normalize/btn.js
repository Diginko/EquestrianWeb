///// JAva script dokument na zjednotenie funkcii tlacidiel na stranke

const btn = document.querySelectorAll(".btn");
const backToTopBtn = document.getElementById("backToTop");

//Hover effect na tlacidlach
btn.forEach(function (btn) {
  btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "#b8860b";
    btn.style.transition = "background-color .5s ease";
  });
  btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "#daa520";
    btn.style.transition = "background-color .5s ease";
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
//tlacidlo ktore sa vrati nazad na vrch stranky
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
