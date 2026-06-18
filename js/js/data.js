const questionBank = [
  {
    id: "NEG-0001",
    category: "否定",
    level: "★★★",
    question: "Saya ___ makan pagi.",
    translation: "私はまだ朝食を食べていません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "belum",
    pronunciation: "ブルム",
    meaning: "belum＝まだ〜ない",
    explanation: "belum は「まだ〜していない」という意味です。",
    wrongExplanation: {
      tidak: "tidak は動詞・形容詞の否定です。この文では「まだ」の意味が必要です。",
      bukan: "bukan は名詞を否定するときに使います。",
      jangan: "jangan は禁止表現で「〜しないで」という意味です。"
    },
    related: ["sudah＝もう", "makan＝食べる", "pagi＝朝"]
  },
  {
    id: "NEG-0002",
    category: "否定",
    level: "★★★",
    question: "Dia ___ guru.",
    translation: "彼・彼女は先生ではありません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "bukan",
    pronunciation: "ブカン",
    meaning: "bukan＝〜ではない",
    explanation: "guru は名詞なので、名詞を否定する bukan を使います。",
    wrongExplanation: {
      tidak: "tidak は動詞・形容詞の否定です。",
      belum: "belum は「まだ〜ない」です。",
      jangan: "jangan は禁止です。"
    },
    related: ["guru＝先生", "murid＝生徒", "dokter＝医者"]
  },
  {
    id: "NEG-0003",
    category: "否定",
    level: "★★★",
    question: "Saya ___ tahu alamatnya.",
    translation: "私はその住所を知りません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "tidak",
    pronunciation: "ティダッ",
    meaning: "tidak＝〜しない",
    explanation: "tahu は動詞なので、動詞を否定する tidak を使います。",
    wrongExplanation: {
      bukan: "bukan は名詞を否定するときに使います。",
      belum: "belum は「まだ〜ない」です。",
      jangan: "jangan は禁止です。"
    },
    related: ["tahu＝知る", "alamat＝住所", "tidak tahu＝知らない"]
  },
  {
    id: "NEG-0004",
    category: "否定",
    level: "★★★",
    question: "___ duduk di sini!",
    translation: "ここに座らないでください。",
    choices: ["Tidak", "Bukan", "Belum", "Jangan"],
    answer: "Jangan",
    pronunciation: "ジャンガン",
    meaning: "jangan＝〜しないで",
    explanation: "禁止表現では jangan を使います。",
    wrongExplanation: {
      Tidak: "tidak は普通の否定です。命令・禁止には使いません。",
      Bukan: "bukan は名詞の否定です。",
      Belum: "belum は「まだ〜ない」です。"
    },
    related: ["duduk＝座る", "di sini＝ここで", "masuk＝入る"]
  },
  {
    id: "NEG-0005",
    category: "否定",
    level: "★★☆",
    question: "Ini ___ buku saya.",
    translation: "これは私の本ではありません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "bukan",
    pronunciation: "ブカン",
    meaning: "bukan＝〜ではない",
    explanation: "buku saya は名詞句なので bukan を使います。",
    wrongExplanation: {
      tidak: "tidak は動詞・形容詞に使います。",
      belum: "belum は「まだ〜ない」です。",
      jangan: "jangan は禁止です。"
    },
    related: ["buku＝本", "saya＝私", "ini＝これ"]
  },
  {
    id: "NEG-0006",
    category: "否定",
    level: "★★☆",
    question: "Saya ___ suka kopi.",
    translation: "私はコーヒーが好きではありません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "tidak",
    pronunciation: "ティダッ",
    meaning: "tidak＝〜しない",
    explanation: "suka は動詞・状態表現なので tidak suka になります。",
    wrongExplanation: {
      bukan: "bukan は名詞の否定です。",
      belum: "belum は「まだ〜ない」です。",
      jangan: "jangan は禁止です。"
    },
    related: ["suka＝好き", "kopi＝コーヒー", "teh＝お茶"]
  },
  {
    id: "NEG-0007",
    category: "否定",
    level: "★★☆",
    question: "Saya ___ mandi.",
    translation: "私はまだ入浴していません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "belum",
    pronunciation: "ブルム",
    meaning: "belum＝まだ〜ない",
    explanation: "まだ終わっていない行動には belum を使います。",
    wrongExplanation: {
      tidak: "tidak mandi は「入浴しない」という意味になります。",
      bukan: "bukan は名詞の否定です。",
      jangan: "jangan は禁止です。"
    },
    related: ["mandi＝入浴する", "sudah＝もう", "belum＝まだ"]
  },
  {
    id: "NEG-0008",
    category: "否定",
    level: "★★★",
    question: "___ merokok di sini!",
    translation: "ここでタバコを吸わないでください。",
    choices: ["Tidak", "Bukan", "Belum", "Jangan"],
    answer: "Jangan",
    pronunciation: "ジャンガン",
    meaning: "jangan＝〜しないで",
    explanation: "禁止・注意には jangan を使います。",
    wrongExplanation: {
      Tidak: "tidak は通常の否定で、命令文の禁止には使いません。",
      Bukan: "bukan は名詞の否定です。",
      Belum: "belum は「まだ〜ない」です。"
    },
    related: ["merokok＝タバコを吸う", "di sini＝ここで", "boleh＝〜してよい"]
  },
  {
    id: "NEG-0009",
    category: "否定",
    level: "★★☆",
    question: "Kami ___ datang hari ini.",
    translation: "私たちは今日来ません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "tidak",
    pronunciation: "ティダッ",
    meaning: "tidak＝〜しない",
    explanation: "datang は動詞なので tidak を使います。",
    wrongExplanation: {
      bukan: "bukan は名詞の否定です。",
      belum: "belum は「まだ来ていない」という意味になります。",
      jangan: "jangan は禁止です。"
    },
    related: ["kami＝私たち", "datang＝来る", "hari ini＝今日"]
  },
  {
    id: "NEG-0010",
    category: "否定",
    level: "★★★",
    question: "Dia ___ pulang.",
    translation: "彼・彼女はまだ帰っていません。",
    choices: ["tidak", "bukan", "belum", "jangan"],
    answer: "belum",
    pronunciation: "ブルム",
    meaning: "belum＝まだ〜ない",
    explanation: "まだ帰っていない状態なので belum を使います。",
    wrongExplanation: {
      tidak: "tidak pulang は「帰らない」という意味になります。",
      bukan: "bukan は名詞の否定です。",
      jangan: "jangan は禁止です。"
    },
    related: ["pulang＝帰る", "datang＝来る", "rumah＝家"]
  }
];
