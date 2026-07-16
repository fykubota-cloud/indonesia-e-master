let selectedDictionaryCategory = "すべて";
let showOnlyFavorites = false;

function showDictionary() {
  showScreen("dictionary");
  renderDictionary();
}

function getFavoriteWords() {
  return JSON.parse(localStorage.getItem("favoriteWords")) || [];
}

function saveFavoriteWords(words) {
  localStorage.setItem("favoriteWords", JSON.stringify(words));
}

function toggleFavoriteWord(word) {
  const favorites = getFavoriteWords();

  if (favorites.includes(word)) {
    const updated = favorites.filter(item => item !== word);
    saveFavoriteWords(updated);
  } else {
    favorites.push(word);
    saveFavoriteWords(favorites);
  }

  renderDictionary();
}

function setDictionaryCategory(categoryName) {
  selectedDictionaryCategory = categoryName;
  showOnlyFavorites = false;

  const searchInput = document.getElementById("dictionarySearch");

  if (searchInput) {
    searchInput.value = "";
  }

  renderDictionary();
}

function showFavoriteWords() {
  showOnlyFavorites = true;
  selectedDictionaryCategory = "すべて";
  renderDictionary();
}

function renderDictionary() {
  const list = document.getElementById("dictionaryList");
  const searchInput = document.getElementById("dictionarySearch");
  const count = document.getElementById("dictionaryCount");

  if (!list) {
    console.error("dictionaryList が見つかりません。");
    return;
  }

  const keyword = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const favorites = getFavoriteWords();

  const filtered = window.dictionaryData.filter(item => {
    const matchesKeyword =
      item.word.toLowerCase().includes(keyword) ||
      item.root.toLowerCase().includes(keyword) ||
      item.meaning.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword) ||
      item.type.toLowerCase().includes(keyword);

   const itemCategory = String(item.category || "").trim();
const itemType = String(item.type || "").trim();

const matchesCategory =
  selectedDictionaryCategory === "すべて" ||
  itemCategory === selectedDictionaryCategory ||
  itemType === selectedDictionaryCategory;

    const matchesFavorite =
      !showOnlyFavorites ||
      favorites.includes(item.word);

    return matchesKeyword && matchesCategory && matchesFavorite;
  });

  if (count) {
    if (showOnlyFavorites) {
      count.textContent = `お気に入り ${filtered.length}語`;
    } else if (selectedDictionaryCategory === "すべて") {
      count.textContent = `${filtered.length}語を表示しています`;
    } else {
      count.textContent =
        `${selectedDictionaryCategory}：${filtered.length}語`;
    }
  }

  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="dictionary-card">
        <p>該当する単語がありません。</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const isFavorite = favorites.includes(item.word);

    const card = document.createElement("div");
    card.className = "dictionary-card";

    card.innerHTML = `
      <div class="dictionary-card-header">
        <h3>${item.word}</h3>

        <button
          type="button"
          class="favorite-button ${isFavorite ? "favorite-active" : ""}"
          onclick="toggleFavoriteWord('${item.word}')"
        >
          ${isFavorite ? "★ 登録済み" : "☆ 覚える"}
        </button>
      </div>

      <p><strong>意味：</strong>${item.meaning}</p>
      <p><strong>原形：</strong>${item.root}</p>
      <p><strong>種類：</strong>${item.type}</p>
      <p><strong>カテゴリ：</strong>${item.category}</p>
      <p><strong>例文：</strong>${item.example}</p>
      <p><strong>日本語：</strong>${item.translation}</p>
    `;

    list.appendChild(card);
  });
}

window.showDictionary = showDictionary;
window.renderDictionary = renderDictionary;
window.setDictionaryCategory = setDictionaryCategory;
window.showFavoriteWords = showFavoriteWords;
window.toggleFavoriteWord = toggleFavoriteWord;
