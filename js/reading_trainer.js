let currentReadingIndex = 0;
let readingTranslationVisible = false;

/* ========================================
   長文トレーニングを開く
======================================== */

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

  // 前回開いていた長文番号を読み込む
  const savedIndex = localStorage.getItem("readingCurrentIndex");
  const parsedIndex = Number(savedIndex);

  if (
    savedIndex !== null &&
    Number.isInteger(parsedIndex) &&
    parsedIndex >= 0 &&
    parsedIndex < window.readingTrainerData.length
  ) {
    currentReadingIndex = parsedIndex;
  } else {
    currentReadingIndex = 0;
  }

  readingTranslationVisible = false;

  renderReadingTrainer();
}

/* ========================================
   他の画面を非表示
======================================== */

function hideAllAppScreens() {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  const homeScreen = document.getElementById("home");

  if (homeScreen) {
    homeScreen.style.display = "none";
  }

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

/* ========================================
   長文画面を表示
======================================== */

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
            ${createTappableSentence(sentence.indonesian)}
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
          ${currentReadingIndex + 1} /
          ${window.readingTrainerData.length}
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

        <div
          id="readingWordPopup"
          class="reading-word-popup"
          style="display:none;"
        ></div>

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

/* ========================================
   日本語訳の表示・非表示
======================================== */

function toggleReadingTranslation() {
  readingTranslationVisible = !readingTranslationVisible;
  renderReadingTrainer();
}

/* ========================================
   確認問題
======================================== */

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

/* ========================================
   長文音声読み上げ
======================================== */

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

/* ========================================
   次の長文へ
======================================== */

function nextReadingText() {
  if (
    currentReadingIndex <
    window.readingTrainerData.length - 1
  ) {
    currentReadingIndex += 1;

    // 現在の位置を保存
    localStorage.setItem(
      "readingCurrentIndex",
      String(currentReadingIndex)
    );

    readingTranslationVisible = false;
    renderReadingTrainer();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

/* ========================================
   前の長文へ
======================================== */

function previousReadingText() {
  if (currentReadingIndex > 0) {
    currentReadingIndex -= 1;

    // 現在の位置を保存
    localStorage.setItem(
      "readingCurrentIndex",
      String(currentReadingIndex)
    );

    readingTranslationVisible = false;
    renderReadingTrainer();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

/* ========================================
   ホームへ戻る
======================================== */

function closeReadingTrainer() {
  const readingScreen =
    document.getElementById("readingTrainerScreen");

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

/* ========================================
   HTML文字の安全処理
======================================== */

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

/* ========================================
   長文内タップ辞書
======================================== */

function createTappableSentence(sentence) {
  const safeSentence = escapeReadingHtml(sentence);

  if (!Array.isArray(window.dictionaryData)) {
    return safeSentence;
  }

  const sortedWords = [...window.dictionaryData]
    .filter((item) => item.word)
    .sort((a, b) => b.word.length - a.word.length);

  let result = safeSentence;

  sortedWords.forEach((item) => {
    const word = escapeReadingHtml(item.word);
    const escapedWordForRegex = escapeRegExp(word);

    const regex = new RegExp(
      `(^|[\\s,.!?;:()"])(${escapedWordForRegex})(?=$|[\\s,.!?;:()"])`,
      "gi"
    );

    result = result.replace(
      regex,
      `$1<span class="reading-tappable-word" onclick="showReadingWord('${escapeReadingAttribute(
        item.word
      )}')">$2</span>`
    );
  });

  return result;
}

/* ========================================
   辞書カード表示
======================================== */

function showReadingWord(word) {
  const popup = document.getElementById("readingWordPopup");

  if (!popup || !Array.isArray(window.dictionaryData)) {
    return;
  }

  const dictionaryItem = window.dictionaryData.find(
    (item) =>
      String(item.word || "").toLowerCase() ===
      String(word || "").toLowerCase()
  );

  if (!dictionaryItem) {
    popup.style.display = "block";

    popup.innerHTML = `
      <div class="reading-popup-header">
        <strong>${escapeReadingHtml(word)}</strong>

        <button
          type="button"
          onclick="closeReadingWordPopup()"
        >
          ×
        </button>
      </div>

      <p>辞典に登録されていない単語です。</p>
    `;

    return;
  }

  popup.style.display = "block";

  popup.innerHTML = `
    <div class="reading-popup-header">
      <div>
        <strong>
          ${escapeReadingHtml(dictionaryItem.word)}
        </strong>

        <span class="reading-popup-type">
          ${escapeReadingHtml(
            dictionaryItem.category ||
            dictionaryItem.type ||
            ""
          )}
        </span>
      </div>

      <button
        type="button"
        onclick="closeReadingWordPopup()"
        aria-label="閉じる"
      >
        ×
      </button>
    </div>

    <div class="reading-popup-meaning">
      ${escapeReadingHtml(
        dictionaryItem.meaning || "意味未登録"
      )}
    </div>

    ${
      dictionaryItem.root
        ? `
          <p class="reading-popup-root">
            語根：
            ${escapeReadingHtml(dictionaryItem.root)}
          </p>
        `
        : ""
    }

    ${
      dictionaryItem.example
        ? `
          <div class="reading-popup-example">
            <strong>例文</strong>

            <p>
              ${escapeReadingHtml(dictionaryItem.example)}
            </p>

            <small>
              ${escapeReadingHtml(
                dictionaryItem.translation || ""
              )}
            </small>
          </div>
        `
        : ""
    }

    <div class="reading-popup-actions">
      <button
        type="button"
        onclick="speakReadingWord('${escapeReadingAttribute(
          dictionaryItem.word
        )}')"
      >
        🔊 発音
      </button>

      <button
        type="button"
        onclick="toggleReadingDictionaryFavorite('${escapeReadingAttribute(
          dictionaryItem.word
        )}')"
      >
        ⭐ お気に入り
      </button>
    </div>
  `;
}

/* ========================================
   辞書カードを閉じる
======================================== */

function closeReadingWordPopup() {
  const popup = document.getElementById("readingWordPopup");

  if (popup) {
    popup.style.display = "none";
    popup.innerHTML = "";
  }
}

/* ========================================
   単語音声読み上げ
======================================== */

function speakReadingWord(word) {
  if (!("speechSynthesis" in window)) {
    alert("このブラウザは音声読み上げに対応していません。");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(word);

  utterance.lang = "id-ID";
  utterance.rate = 0.75;

  window.speechSynthesis.speak(utterance);
}

/* ========================================
   辞典のお気に入り連携
======================================== */

function toggleReadingDictionaryFavorite(word) {
  if (typeof toggleFavoriteWord === "function") {
    toggleFavoriteWord(word);

    alert(
      `${word}のお気に入り状態を変更しました。`
    );

    return;
  }

  const storageKey = "dictionaryFavorites";

  let currentFavorites = [];

  try {
    currentFavorites = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );
  } catch (error) {
    currentFavorites = [];
  }

  if (!Array.isArray(currentFavorites)) {
    currentFavorites = [];
  }

  const exists = currentFavorites.includes(word);

  const updatedFavorites = exists
    ? currentFavorites.filter((item) => item !== word)
    : [...currentFavorites, word];

  localStorage.setItem(
    storageKey,
    JSON.stringify(updatedFavorites)
  );

  alert(
    exists
      ? `${word}をお気に入りから外しました。`
      : `${word}をお気に入りに追加しました。`
  );
}

/* ========================================
   正規表現用の文字処理
======================================== */

function escapeRegExp(value) {
  return String(value).replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

/* ========================================
   HTMLから呼び出せるように公開
======================================== */

window.showReadingTrainer = showReadingTrainer;
window.renderReadingTrainer = renderReadingTrainer;
window.toggleReadingTranslation =
  toggleReadingTranslation;
window.answerReadingQuestion =
  answerReadingQuestion;
window.speakCurrentReading =
  speakCurrentReading;
window.nextReadingText =
  nextReadingText;
window.previousReadingText =
  previousReadingText;
window.closeReadingTrainer =
  closeReadingTrainer;

window.showReadingWord =
  showReadingWord;
window.closeReadingWordPopup =
  closeReadingWordPopup;
window.speakReadingWord =
  speakReadingWord;
window.toggleReadingDictionaryFavorite =
  toggleReadingDictionaryFavorite;
