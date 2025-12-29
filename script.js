// Get all planet radio buttons
const planets = document.querySelectorAll("input[name='planet']");
const panels = document.querySelectorAll(".planet_description");

// Highlight selected planet
planets.forEach(planet => {
  planet.addEventListener("change", () => {
    document.body.setAttribute("data-active-planet", planet.id);
  });
});

// Smooth scroll to planet description on click
document.querySelectorAll(".menu").forEach(menu => {
  menu.addEventListener("click", () => {
    const planetClass = menu.classList[1];
    const planetSection = document.querySelector(`.${planetClass}.planet`);

    if (planetSection) {
      planetSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});

// Keyboard navigation (Left / Right arrows)
let currentIndex = [...planets].findIndex(p => p.checked);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % planets.length;
    planets[currentIndex].checked = true;
    planets[currentIndex].dispatchEvent(new Event("change"));
  }

  if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + planets.length) % planets.length;
    planets[currentIndex].checked = true;
    planets[currentIndex].dispatchEvent(new Event("change"));
  }
});
