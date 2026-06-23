function getStats() {
  return JSON.parse(localStorage.getItem("stats")) || {
    totalAnswered: 0,
    totalCorrect: 0
  };
}

function saveStats(correct, total) {
  const stats = getStats();

  stats.totalAnswered += total;
  stats.totalCorrect += correct;

  localStorage.setItem("stats", JSON.stringify(stats));
}

function getAccuracy() {
  const stats = getStats();

  if (stats.totalAnswered === 0) {
    return 0;
  }

  return Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
}
