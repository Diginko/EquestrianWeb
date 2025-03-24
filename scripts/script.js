let currentIndex = 0;
let autoSlideInterval;

const dots = document.querySelectorAll(".dot");
const slider = document.querySelectorAll(".slider");
const video = document.querySelector(".slide-video");
const content = document.querySelectorAll(".hidden");

const scrollBtn = document.querySelectorAll("#scroll-btn");

// Run on page load///
document.addEventListener("DOMContentLoaded", function () {
  /*  navbarSubHover(); */
  function checkVisibility() {
    content.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight - 100 && rect.bottom > 100;

      if (isVisible) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

//Pridanie Listenera na bodky na slideroch . A vyvolavanie funkcie na zmenu a automaticku zmenu slidu
dots.forEach(function (btn) {
  btn.addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    autoChangeSlide();
    slideChangeStyle();
  });
});

//Pri nacitani stranky automaticky zacne menit slide.
window.addEventListener("load", function () {
  slideChangeStyle(currentIndex);
  if (slider.length === 0 || dots.length === 0) {
    console.error("No slides or dots");
    return;
  }

  if (video.readyState >= 1) {
    autoChangeSlide();
  } else {
    video.addEventListener("loadedmetadata", function () {});
  }
});
//funkcia na zmenu slajdu pri stlaceni na bodku
function changeSlide(index) {
  if (index < 0 || index >= slider.length) {
    return;
  }
  slider.forEach((slide) => slide.classList.remove("slider-active"));
  dots.forEach((dot) => dot.classList.remove("active-dot"));

  slider[index].classList.add("slider-active");
  dots[index].classList.add("active-dot");
  slideChangeStyle(index);

  currentIndex = index;
}
//funkcia na vypocitanie casu kazdehu slajdu
function slideIntervalTime() {
  if (isNaN(video.duration) || video.duration === 0) {
    return 5030;
  }
  return (video.duration / slider.length) * 1000;
}

//funkcia na automaticke zmenenie slajdu po dosiahnutom intervale
function autoChangeSlide() {
  video.play();

  clearInterval(autoSlideInterval);

  let intervalTime = slideIntervalTime();

  autoSlideInterval = setInterval(function () {
    currentIndex++;
    if (currentIndex >= slider.length) {
      currentIndex = 0;
    }
    changeSlide(currentIndex);
  }, intervalTime);
}
//Funkcia ktora urcuje aky slide je aktualne objaveni a ako sa ma objavit. Pridanie stylov pre CSS
function slideChangeStyle(index) {
  const currentSlide = slider[index];
  if (!currentSlide) return; // Prevent errors if the slide doesn't exist

  // Select elements
  const activePar = currentSlide.querySelector(".p-slide-left");
  const activeTitle = currentSlide.querySelector(".title-slide-left");
  const activeBtn = currentSlide.querySelector(".btn-slide-left");
  const activeParCenter = currentSlide.querySelector(".p-slide-center");
  const activeTitleCenter = currentSlide.querySelector(".title-slide-center");
  const activeBtnCenter = currentSlide.querySelector(".btn-slide-center");

  function animateElement(element, transformValue, delay) {
    if (!element) return;
    element.style.transition = "opacity 0.7s ease, transform 1s ease";
    element.style.opacity = 0;
    element.style.transform = transformValue;
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transform = "translateX(0)";
    }, delay);
  }

  if (activeTitle) {
    animateElement(activeTitle, "translateX(30px)", 400);
    animateElement(activePar, "translateX(30px)", 200);
    animateElement(activeBtn, "translateX(30px)", 600);
  }

  if (activeTitleCenter) {
    animateElement(activeTitleCenter, "translateY(30px)", 200);
    animateElement(activeParCenter, "translateY(30px)", 400);
    animateElement(activeBtnCenter, "translateY(30px)", 600);
  }
}

///////////////////////////

///

////
