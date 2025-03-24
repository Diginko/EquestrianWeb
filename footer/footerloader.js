/* document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("footer-space-container");

  if (!navbarContainer) {
    console.error(
      "Navbar container not found. Ensure the element exists in your HTML."
    );
    return;
  }

  fetch("footer/footer.html") // Make sure the path is correct
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      navbarContainer.innerHTML = data;
      navbarSubHover(); // Attach listeners AFTER navbar is loaded
    })
    .catch((error) => console.error("Error loading footer:", error));
}); */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("footer-space-container").innerHTML = `
<div class="footer-container">
  <div class="footer-navbar">
    <div class="logo">
      <img src="../img/logo-removebg-preview.png" alt="logo" loading="lazy" />
    </div>
    <div class="footer-social">
      <a href="https://www.facebook.com/" aria-label="Visit our Facebook page"
        ><i class="bx bxl-facebook-square"></i
      ></a>
      <a href="https://www.instagram.com/" aria-label="Visit our Instagram page"
        ><i class="bx bxl-instagram-alt"></i
      ></a>
      <a href="https://www.youtube.com/" aria-label="Visit our Youtube page"
        ><i class="bx bxl-youtube"></i
      ></a>
    </div>
  </div>
  <div class="footer-links-container">
    <div class="footer-address">
      <p>Slovakia</p>
      <p>Kollárova 4248/2</p>
      <p>036 59 Martin</p>
    </div>
    <div class="footer-contact">
      <p class="tel-number">
        <a href="tel:+555555555">+421 555 555 555</a>
      </p>
      <p class="email">
        <a href="mailto:gmail@test.com">gmail@test.com</a>
      </p>
    </div>
  </div>
  <div class="rights">
    <p>© DigiWebs 2025, All rights reserved.</p>
  </div>
</div>
  `;
});
