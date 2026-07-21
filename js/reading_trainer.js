let currentReadingIndex = 0;
let readingTranslationVisible = false;

function showReadingTrainer() {
  if (
    !Array.isArray(window.readingTrainerData) ||
    window.readingTrainerData.length === 0
  ) {
    alert("長文データが読み込まれていません。");
    return;
  }

  let screen = document.getElementById("readingTrainerScreen");

  if (!screen) {
    screen = document.createElement("section");
    screen.id = "readingTrainerScreen";
    screen.className = "screen";

    document.body.appendChild(screen);
  }

  hideAllAppScreens();
  screen.style.display = "block";

  currentReadingIndex = 0;
  readingTranslationVisible = false;

  renderReadingTrainer();
}

function hideAllAppScreens() {
  // 通常の各画面を非表示
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  // ホーム画面を非表示
  const homeScreen = document.getElementById("home");

  if (homeScreen) {
    homeScreen.style.display = "none";
  }

  // 辞典画面なども念のため非表示
  const knownScreens = [
    "quiz30",
    "quiz50",
    "mock",
    "weak",
    "words",
    "dictionary"
  ];

  knownScreens.forEach((id) => {
    const element = document.getElementById(id);

    if (element) {
      element.style.display = "none";
    }
  });
}

function renderReadingTrainer() {
  const screen = document.getElementById("readingTrainerScreen");
  const data = window.readingTrainerData[currentReadingIndex];

  if (!screen || !data) {
    return;
  }

  const sentenceHtml = data.sentences
    .map(
      (sentence) => `
        <div class="reading-sentence">
          <p class="reading-indonesian">
            ${escapeReadingHtml(sentence.indonesian)}
          </p>

          <p
            class="reading-japanese"
            style="display: ${
              readingTranslationVisible ? "block" : "none"
            };"
          >
            ${escapeReadingHtml(sentence.japanese)}
          </p>
        </div>
      `
    )
    .join("");

  const vocabularyHtml = data.vocabulary
    .map(
      (item) => `
        <div class="reading-word-card">
          <strong>${escapeReadingHtml(item.word)}</strong>
          <span>${escapeReadingHtml(item.meaning)}</span>
        </div>
      `
    )
    .join("");

  const choicesHtml = data.question.choices
    .map(
      (choice) => `
        <button
          type="button"
          class="reading-choice-button"
          onclick="answerReadingQuestion('${escapeReadingAttribute(choice)}')"
        >
          ${escapeReadingHtml(choice)}
        </button>
      `
    )
    .join("");

  screen.innerHTML = `
    <div class="reading-trainer-container">

      <div class="reading-header">
        <button
          type="button"
          class="reading-back-button"
          onclick="closeReadingTrainer()"
        >
          ← ホームへ戻る
        </button>

        <div class="reading-progress">
          ${currentReadingIndex + 1} / ${window.readingTrainerData.length}
        </div>
      </div>

      <div class="reading-title-area">
        <span class="reading-category">
          ${escapeReadingHtml(data.category)}
        </span>

        <span class="reading-level">
          ${escapeReadingHtml(data.level)}
        </span>

        <h2>${escapeReadingHtml(data.title)}</h2>
      </div>

      <div class="reading-main-card">
        <h3>インドネシア語を読んでみましょう</h3>

        <div class="reading-sentence-list">
          ${sentenceHtml}
        </div>

        <div class="reading-action-row">
          <button
            type="button"
            class="reading-action-button"
            onclick="toggleReadingTranslation()"
          >
            ${
              readingTranslationVisible
                ? "日本語訳を隠す"
                : "日本語訳を表示"
            }
          </button>

          <button
            type="button"
            class="reading-action-button"
            onclick="speakCurrentReading()"
          >
            🔊 音声を聞く
          </button>
        </div>
      </div>

      <div class="reading-section-card">
        <h3>単語確認</h3>

        <div class="reading-vocabulary-grid">
          ${vocabularyHtml}
        </div>
      </div>

      <div class="reading-section-card">
        <h3>確認問題</h3>

        <p class="reading-question">
          ${escapeReadingHtml(data.question.text)}
        </p>

        <div class="reading-choice-grid">
          ${choicesHtml}
        </div>

        <div id="readingAnswerResult"></div>
      </div>

      <div class="reading-navigation">
        <button
          type="button"
          onclick="previousReadingText()"
          ${currentReadingIndex === 0 ? "disabled" : ""}
        >
          ← 前の長文
        </button>

        <button
          type="button"
          onclick="nextReadingText()"
          ${
            currentReadingIndex ===
            window.readingTrainerData.length - 1
              ? "disabled"
              : ""
          }
        >
          次の長文 →
        </button>
      </div>

    </div>
  `;
}

function toggleReadingTranslation() {
  readingTranslationVisible = !readingTranslationVisible;
  renderReadingTrainer();
}

function answerReadingQuestion(selectedChoice) {
  const data = window.readingTrainerData[currentReadingIndex];
  const resultArea = document.getElementById("readingAnswerResult");

  if (!data || !resultArea) {
    return;
  }

  const isCorrect = selectedChoice === data.question.answer;

  resultArea.innerHTML = `
    <div class="reading-answer-result ${
      isCorrect ? "reading-correct" : "reading-incorrect"
    }">
      <strong>
        ${isCorrect ? "〇 正解です" : "× 不正解です"}
      </strong>

      <p>
        正解：${escapeReadingHtml(data.question.answer)}
      </p>

      <p>
        ${escapeReadingHtml(data.question.explanation)}
      </p>
    </div>
  `;
}

function speakCurrentReading() {
  const data = window.readingTrainerData[currentReadingIndex];

  if (!data) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    alert("このブラウザは音声読み上げに対応していません。");
    return;
  }

  window.speechSynthesis.cancel();

  const text = data.sentences
    .map((sentence) => sentence.indonesian)
    .join(" ");

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "id-ID";
  utterance.rate = 0.8;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}

function nextReadingText() {
  if (
    currentReadingIndex <
    window.readingTrainerData.length - 1
  ) {
    currentReadingIndex += 1;
    readingTranslationVisible = false;
    renderReadingTrainer();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function previousReadingText() {
  if (currentReadingIndex > 0) {
    currentReadingIndex -= 1;
    readingTranslationVisible = false;
    renderReadingTrainer();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function closeReadingTrainer() {
  const readingScreen = document.getElementById("readingTrainerScreen");

  if (readingScreen) {
    readingScreen.style.display = "none";
  }

  if (typeof showScreen === "function") {
    showScreen("home");
    return;
  }

  const homeScreen = document.getElementById("home");

  if (homeScreen) {
    homeScreen.style.display = "block";
  }
}

function escapeReadingHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeReadingAttribute(value) {
  return String(value ?? "")
    .replaceAll("\\", "\\\\")
    .replaceAll("'", "\\'");
}

window.showReadingTrainer = showReadingTrainer;
window.renderReadingTrainer = renderReadingTrainer;
window.toggleReadingTranslation = toggleReadingTranslation;
window.answerReadingQuestion = answerReadingQuestion;
window.speakCurrentReading = speakCurrentReading;
window.nextReadingText = nextReadingText;
window.previousReadingText = previousReadingText;
window.closeReadingTrainer = closeReadingTrainer;
