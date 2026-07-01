let currentQuestion = null;
let questionNumber = 0;
let score = 0;
let quizQuestions = [];
let quizMode = "practice";
let userAnswers = [];
const maxQuestions = 30;

function startQuiz() {
  quizMode = "practice";
  questionNumber = 0;
  score = 0;
  userAnswers = [];
  quizQuestions = [...questionBank].sort(() => Math.random() - 0.5);
  showScreen("quiz30");
  loadQuestion();
}

function startMockExam() {
  quizMode = "mock";
  questionNumber = 0;
  score = 0;
  userAnswers = [];
  quizQuestions = [...questionBank].sort(() => Math.random() - 0.5);
  showScreen("quiz30");
  loadQuestion();
}

function startWeakQuiz() {
  quizMode = "practice";
  const mistakes = JSON.parse(localStorage.getItem("mistakes")) || [];
  quizQuestions = questionBank.filter(q => mistakes.includes(q.id));

  if (quizQuestions.length === 0) {
    showScreen("weak");
    document.querySelector("#weak p").textContent =
      "まだ間違えた問題がありません。まずは総合30問を解いてください。";
    return;
  }

  questionNumber = 0;
  score = 0;
  userAnswers = [];
  quizQuestions.sort(() => Math.random() - 0.5);
  showScreen("quiz30");
  loadQuestion();
}

function loadQuestion() {
  if (questionNumber >= maxQuestions || questionNumber >= quizQuestions.length) {
    showResult();
    return;
  }

  currentQuestion = quizQuestions[questionNumber];
  questionNumber++;

  updateProgress();

  document.getElementById("question-category").innerHTML =
    `第${questionNumber}問 / ${Math.min(maxQuestions, quizQuestions.length)}　${currentQuestion.category}　${currentQuestion.level}`;

  document.getElementById("question-text").innerHTML =
    `${currentQuestion.question}<br><span class="translation">${currentQuestion.translation}</span>`;

  document.getElementById("feedback").innerHTML = "";

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  const shuffled = [...currentQuestion.choices].sort(() => Math.random() - 0.5);

  shuffled.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => checkAnswer(choice);
    choices.appendChild(button);
  });
}

function checkAnswer(choice) {
  const feedback = document.getElementById("feedback");
  const buttons = document.querySelectorAll("#choices button");

  buttons.forEach(button => {
    button.disabled = true;
  });

  const isCorrect = choice === currentQuestion.answer;

  userAnswers.push({
    id: currentQuestion.id,
    category: currentQuestion.category,
    question: currentQuestion.question,
    choice: choice,
    answer: currentQuestion.answer,
    correct: isCorrect
  });

  if (isCorrect) {
    score++;
  } else {
    saveMistake(currentQuestion.id);
  }

  if (quizMode === "mock") {
    feedback.innerHTML = `
      <h3>回答しました</h3>
      <p>模擬試験モードでは、最後にまとめて採点します。</p>
      <button onclick="loadQuestion()">次の問題</button>
    `;
    return;
  }

  buttons.forEach(button => {
    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct-choice");
    }
    if (button.textContent === choice && !isCorrect) {
      button.classList.add("wrong-choice");
    }
  });

  feedback.innerHTML = `
    <h3>${isCorrect ? "⭕ 正解！" : "❌ 不正解"}</h3>
    ${!isCorrect ? `<b>あなたの回答</b><br>${choice}<br><br>` : ""}
    <b>正解</b><br>${currentQuestion.answer}<br><br>
    <b>発音</b><br>${currentQuestion.pronunciation}<br><br>
    <b>意味</b><br>${currentQuestion.meaning}<br><br>
    <b>解説</b><br>${currentQuestion.explanation}<br><br>
    <b>関連単語</b><br>${currentQuestion.related.join(" / ")}<br><br>
    <button onclick="loadQuestion()">次の問題</button>
  `;
}

function saveMistake(questionId) {
  let mistakes = JSON.parse(localStorage.getItem("mistakes")) || [];

  if (!mistakes.includes(questionId)) {
    mistakes.push(questionId);
  }

  localStorage.setItem("mistakes", JSON.stringify(mistakes));
}

function showResult() {
  const total = Math.min(maxQuestions, quizQuestions.length);
  const rate = Math.round((score / total) * 100);
  const judge = rate >= 60 ? "合格ライン到達" : "もう少し練習しましょう";

  saveStats(score, total);
  updateHomeStats();

  document.getElementById("question-category").textContent = "結果";
  document.getElementById("question-text").innerHTML = `
    ${score} / ${total} 問正解<br>
    正答率：${rate}%<br>
    判定：${judge}<br><br>
    苦手分野：${getWeakCategories()}<br><br>
    ${getReviewList()}
  `;

  document.getElementById("choices").innerHTML = "";
  document.getElementById("feedback").innerHTML = `
    <button onclick="startQuiz()">総合30問をもう一度</button>
    <button onclick="startMockExam()">模擬試験をもう一度</button>
    <button onclick="showScreen('home')" class="secondary">ホームへ戻る</button>
  `;
}

function getWeakCategories() {
  const wrongs = userAnswers.filter(a => !a.correct);

  if (wrongs.length === 0) {
    return "なし";
  }

  const counts = {};

  wrongs.forEach(item => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0])
    .slice(0, 3)
    .join("・");
}

function getReviewList() {
  const wrongs = userAnswers.filter(a => !a.correct);

  if (wrongs.length === 0) {
    return "間違えた問題はありません。";
  }

  let html = "<div class='review-list'><b>復習リスト</b><br>";

  wrongs.forEach((item, index) => {
    html += `
      <div class="review-item">
        ${index + 1}. ${item.category}<br>
        問題：${item.question}<br>
        あなたの回答：${item.choice}<br>
        正解：${item.answer}
      </div>
    `;
  });

  html += "</div>";
  return html;
}

function updateProgress() {
  const total = Math.min(maxQuestions, quizQuestions.length);
  const percent = Math.round((questionNumber / total) * 100);

  document.getElementById("progress-text").textContent =
    questionNumber + " / " + total;

  document.getElementById("progress-fill").style.width =
    percent + "%";
}
function startCategoryQuiz(categoryName) {
  quizMode = "practice";
  questionNumber = 0;
  score = 0;
  userAnswers = [];

  quizQuestions = questionBank.filter(q => q.category === categoryName);

  if (quizQuestions.length === 0) {
    alert(categoryName + " の問題がまだ登録されていません。");
    return;
  }

  quizQuestions.sort(() => Math.random() - 0.5);

  showScreen("quiz30");
  loadQuestion();
}
