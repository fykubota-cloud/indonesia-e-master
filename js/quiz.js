let currentQuestion = null;
let questionNumber = 0;
let score = 0;
let quizQuestions = [];
const maxQuestions = 30;

function startQuiz() {
    questionNumber = 0;
    score = 0;

    // 問題をシャッフルして出題リストを作る
    quizQuestions = [...questionBank];
    quizQuestions.sort(() => Math.random() - 0.5);

    showScreen("quiz30");
    loadQuestion();
}

function loadQuestion(){
    if(questionNumber >= maxQuestions || questionNumber >= quizQuestions.length){
        showResult();
        return;
    }

    currentQuestion = quizQuestions[questionNumber];
    questionNumber++;

    document.getElementById("question-category").textContent =
        `${currentQuestion.category}　${questionNumber} / ${Math.min(maxQuestions, quizQuestions.length)}`;

    document.getElementById("question-text").textContent =
        currentQuestion.question;

    document.getElementById("feedback").innerHTML = "";

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    let shuffled = [...currentQuestion.choices];
    shuffled.sort(() => Math.random() - 0.5);

    shuffled.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choices.appendChild(button);
    });
}

function checkAnswer(choice){
    const feedback = document.getElementById("feedback");
    const choiceButtons = document.querySelectorAll("#choices button");

    choiceButtons.forEach(button => {
        button.disabled = true;
    });

    if(choice === currentQuestion.answer){
        score++;

        feedback.innerHTML = `
        <h3>⭕ 正解！</h3>
        <b>発音</b><br>${currentQuestion.pronunciation}<br><br>
        <b>意味</b><br>${currentQuestion.meaning}<br><br>
        <b>解説</b><br>${currentQuestion.explanation}<br><br>
        <b>関連単語</b><br>${currentQuestion.related.join(" / ")}<br><br>
        <button onclick="loadQuestion()">次の問題</button>
        `;
    }else{
        feedback.innerHTML = `
        <h3>❌ 不正解</h3>
        <b>あなたの回答</b><br>${choice}<br><br>
        <b>正解</b><br>${currentQuestion.answer}<br><br>
        <b>理由</b><br>${currentQuestion.wrongExplanation[choice]}<br><br>
        <b>発音</b><br>${currentQuestion.pronunciation}<br><br>
        <b>意味</b><br>${currentQuestion.meaning}<br><br>
        <b>解説</b><br>${currentQuestion.explanation}<br><br>
        <button onclick="loadQuestion()">次の問題</button>
        `;
    }
}

function showResult(){
    const total = Math.min(maxQuestions, quizQuestions.length);
    const rate = Math.round((score / total) * 100);
    const judge = rate >= 60 ? "合格ライン到達" : "もう少し練習しましょう";

    document.getElementById("question-category").textContent = "結果";
    document.getElementById("question-text").innerHTML = `
        ${score} / ${total} 問正解<br>
        正答率：${rate}%<br>
        判定：${judge}
    `;

    document.getElementById("choices").innerHTML = "";
    document.getElementById("feedback").innerHTML = `
        <button onclick="startQuiz()">もう一度挑戦</button>
        <button onclick="showScreen('home')" class="secondary">ホームへ戻る</button>
    `;
}
