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
function updateHomeStats(){
  const stats = getStats();
  const accuracy = getAccuracy();

  const statNumbers = document.querySelectorAll(".stat-number");

  if(statNumbers.length >= 2){
    statNumbers[0].textContent = accuracy + "%";
    statNumbers[1].textContent = stats.totalAnswered;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  showScreen("home");
  updateHomeStats();
});
