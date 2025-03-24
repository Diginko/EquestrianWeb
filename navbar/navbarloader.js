/* document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-space-container");

  if (!navbarContainer) {
    console.error(
      "Navbar container not found. Ensure the element exists in your HTML."
    );
    return;
  }

  fetch("navbar/navbar.html") // Make sure the path is correct
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
    .catch((error) => console.error("Error loading navbar:", error));
}); */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navbar-space-container").innerHTML = `
      <nav class="nav-bar">
  <div class="div-navbar">
    <div class="logo">
      <img src="../img/logo-removebg-preview.png" alt="logo" />
    </div>
    <button class="hamburger-menu-navbar">
      <i class="bx bx-menu"></i>
    </button>
    <div class="links-container">
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li class="about"><a >About</a></li>
        <div class="about-sub-container">
          <ul class="about-sub-ul">
            <li class="about-sub-li">
              <a href="../about/about.html">About Us</a>
            </li>
            <li class="about-sub-li">
              <a href="../ourstaff/ourstaff.html">Our Staff</a>
            </li>
            <li class="about-sub-li">
              <a href="../services/services.html">Services</a>
            </li>
            <li class="about-sub-li">
              <a href="../faq/faq.html">FAQs</a>
            </li>
            <li class="about-sub-li">
              <a href="../prices/prices.html">Prices</a>
            </li>
          </ul>
        </div>
        <li><a href="#">Horses</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </div>
  </div>
</nav>
  `;
  navbarSubHover();
});

window.addEventListener("resize", navbarSubHover);
window.addEventListener("load", navbarSubHover);

function isMobileView() {
  return window.innerWidth <= 768;
}

function isDesktopView() {
  return window.innerWidth > 768;
}

function navbarSubHover() {
  let timeout;

  const aboutBtn = document.querySelector(".about");
  const aboutContainer = document.querySelector(".about-sub-container");

  if (!aboutBtn || !aboutContainer) {
    console.error("Navbar elements not found.");
    return;
  }

  //funkcia na vymazanie po casovom limite
  const hideContainer = () => {
    timeout = setTimeout(() => {
      aboutContainer.classList.remove("activenavbar");
    }, 150);
  };

  if (isDesktopView()) {
    aboutBtn.addEventListener("mouseover", () => {
      clearTimeout(timeout); // Stop any hide delay
      aboutContainer.classList.add("activenavbar");
    });

    aboutBtn.addEventListener("mouseout", hideContainer);

    aboutContainer.addEventListener("mouseover", () => {
      clearTimeout(timeout); // Stop any hide delay when hovering submenu
      aboutContainer.classList.add("activenavbar");
    });

    aboutContainer.addEventListener("mouseout", hideContainer);
  }

  if (isMobileView()) {
    hamMenu();
    aboutBtn.addEventListener("click", () => {
      clearTimeout(timeout); // Stop any hide delay
      aboutContainer.classList.toggle("activenavbar");
    });

    aboutContainer.addEventListener("click", (e) => {
      e.stopPropagation(); //prevencia pre opakovanie volnie fukncie ked kliknes na text vo vnuntri ABOUT
    });

    document.addEventListener("click", (e) => {
      if (!aboutBtn.contains(e.target)) {
        aboutContainer.classList.remove("activenavbar");
      }
    });
  }
} // Function to attach event listeners AFTER navbar is loaded

function hamMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu-navbar");

  hamburgerMenu.addEventListener("click", () => {
    const linksContainerMobile = document.querySelector(".links-container");

    linksContainerMobile.classList.toggle("active");
  });
}
