const content = document.querySelectorAll(".scroll-animation");

// Run on page load///
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

function checkVisibility() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active"); // Pridá triedu `active`, ktorá spustí animáciu
          }, index * 100);
        }
      });
    },
    { threshold: 0.15 }
  );

  content.forEach((content) => {
    observer.observe(content);
  });
}
