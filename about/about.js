document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".review-wrapper");
  const cards = Array.from(wrapper.children);

  // Duplicate the cards for seamless effect
  cards.forEach((card) => {
    let clone = card.cloneNode(true);
    wrapper.appendChild(clone);
  });

  let scrollAmount = 0;
  let speed = 0.5; // Speed of the scroll
  let isPaused = false; // Control variable

  function scrollReviews() {
    if (!isPaused) {
      scrollAmount -= speed;
      wrapper.style.transform = `translateX(${scrollAmount}px)`;

      // Reset when first half is scrolled completely
      if (Math.abs(scrollAmount) >= wrapper.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }
    requestAnimationFrame(scrollReviews);
  }

  // Pause scrolling on hover
  wrapper.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  // Resume scrolling when hover ends
  wrapper.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  scrollReviews();
});
