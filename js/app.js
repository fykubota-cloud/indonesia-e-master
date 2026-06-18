function showScreen(screenId) {
  const screens = document.querySelectorAll("section");

  screens.forEach(screen => {
    screen.style.display = "none";
  });

  document.getElementById(screenId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  showScreen("home");
});
