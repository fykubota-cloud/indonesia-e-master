window.dictionaryData = [
  {
    word: "makan",
    root: "makan",
    type: "動詞",
    category: "日常",
    meaning: "食べる",
    example: "Saya makan nasi.",
    translation: "私はご飯を食べます。"
  },
  {
    word: "minum",
    root: "minum",
    type: "動詞",
    category: "日常",
    meaning: "飲む",
    example: "Saya minum air.",
    translation: "私は水を飲みます。"
  },
  {
    word: "membaca",
    root: "baca",
    type: "me動詞",
    category: "動詞",
    meaning: "読む",
    example: "Saya membaca buku.",
    translation: "私は本を読みます。"
  },
  {
    word: "menulis",
    root: "tulis",
    type: "me動詞",
    category: "動詞",
    meaning: "書く",
    example: "Dia menulis surat.",
    translation: "彼／彼女は手紙を書きます。"
  },
  {
    word: "membeli",
    root: "beli",
    type: "me動詞",
    category: "日常",
    meaning: "買う",
    example: "Ibu membeli sayur.",
    translation: "母は野菜を買います。"
  },
  {
    word: "memasak",
    root: "masak",
    type: "me動詞",
    category: "日常",
    meaning: "料理する",
    example: "Ibu memasak di dapur.",
    translation: "母は台所で料理します。"
  },
  {
    word: "belajar",
    root: "ajar",
    type: "ber動詞",
    category: "学習",
    meaning: "勉強する",
    example: "Saya belajar bahasa Indonesia.",
    translation: "私はインドネシア語を勉強します。"
  },
  {
    word: "bekerja",
    root: "kerja",
    type: "ber動詞",
    category: "仕事",
    meaning: "働く",
    example: "Ayah bekerja di kantor.",
    translation: "父は会社で働いています。"
  },
  {
    word: "bermain",
    root: "main",
    type: "ber動詞",
    category: "日常",
    meaning: "遊ぶ／プレーする",
    example: "Anak-anak bermain bola.",
    translation: "子どもたちはボールで遊びます。"
  },
  {
    word: "berbicara",
    root: "bicara",
    type: "ber動詞",
    category: "会話",
    meaning: "話す",
    example: "Kami berbicara dengan guru.",
    translation: "私たちは先生と話します。"
  }
];

function showDictionary(){
  showScreen("dictionary");
  renderDictionary();
}

function renderDictionary(){
  const list = document.getElementById("dictionaryList");
  const searchInput = document.getElementById("dictionarySearch");

  if(!list) return;

  const keyword = searchInput ? searchInput.value.toLowerCase() : "";

  const filtered = window.dictionaryData.filter(item => {
    return (
      item.word.toLowerCase().includes(keyword) ||
      item.meaning.includes(keyword) ||
      item.category.includes(keyword) ||
      item.type.includes(keyword)
    );
  });

  list.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "dictionary-card";

    card.innerHTML = `
      <h3>${item.word}</h3>
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
