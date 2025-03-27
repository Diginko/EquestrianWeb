document.addEventListener("DOMContentLoaded", () => {
  const breedSelect = document.getElementById("breed");
  breedSelect.addEventListener("change", filterHorses); // No parentheses here
});

function filterHorses() {
  const filterValue = document.getElementById("breed").value;
  const horseCards = document.querySelectorAll(".horse-card");

  horseCards.forEach((card) => {
    const breed = card.getAttribute("data-breed"); // Assuming the second class is the breed
    if (filterValue === "all" || breed === filterValue) {
      card.style.display = "block"; // Show card
    } else {
      card.style.display = "none"; // Hide card
    }
  });
}
