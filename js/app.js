function showScreen(screenId){
  const screens = document.querySelectorAll("section");

  screens.forEach(screen => {
    screen.style.display = "none";
  });

  const targetScreen = document.getElementById(screenId);

  if(!targetScreen){
    console.error(`画面が見つかりません：${screenId}`);
    alert(`画面「${screenId}」が見つかりません。`);
    return;
  }

  targetScreen.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if(screenId === "home"){
    updateHomeStats();
  }
}

function updateHomeStats(){
  if(
    typeof getStats !== "function" ||
    typeof getAccuracy !== "function"
  ){
    return;
  }

  const stats = getStats();
  const accuracy = getAccuracy();

  const statNumbers = document.querySelectorAll(
    "#home .stat-number"
  );

  if(statNumbers.length >= 2){
    statNumbers[0].textContent = accuracy + "%";
    statNumbers[1].textContent = stats.totalAnswered || 0;
  }
}

window.showScreen = showScreen;
window.updateHomeStats = updateHomeStats;

document.addEventListener("DOMContentLoaded", () => {
  showScreen("home");
});
