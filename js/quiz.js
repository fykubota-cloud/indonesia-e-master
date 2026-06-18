let currentQuestion = null;

function startQuiz() {

    showScreen("quiz30");

    loadQuestion();

}

function loadQuestion(){

    currentQuestion =
        questionBank[Math.floor(Math.random()*questionBank.length)];

    document.getElementById("question-category").textContent =
        currentQuestion.category;

    document.getElementById("question-text").textContent =
        currentQuestion.question;

    document.getElementById("feedback").innerHTML="";

    const choices=document.getElementById("choices");

    choices.innerHTML="";

    let shuffled=[...currentQuestion.choices];

    shuffled.sort(()=>Math.random()-0.5);

    shuffled.forEach(choice=>{

        const button=document.createElement("button");

        button.textContent=choice;

        button.onclick=()=>checkAnswer(choice);

        choices.appendChild(button);

    });

}

function checkAnswer(choice){

    const feedback=document.getElementById("feedback");

    if(choice===currentQuestion.answer){

        feedback.innerHTML=`
        <h3>⭕ 正解！</h3>

        <b>発音</b><br>
        ${currentQuestion.pronunciation}<br><br>

        <b>意味</b><br>
        ${currentQuestion.meaning}<br><br>

        <b>解説</b><br>
        ${currentQuestion.explanation}<br><br>

        <b>関連単語</b><br>
        ${currentQuestion.related.join(" / ")}

        <br><br>

        <button onclick="loadQuestion()">
        次の問題
        </button>
        `;

    }else{

        feedback.innerHTML=`
        <h3>❌ 不正解</h3>

        <b>あなたの回答</b><br>
        ${choice}<br><br>

        <b>正解</b><br>
        ${currentQuestion.answer}<br><br>

        <b>理由</b><br>
        ${currentQuestion.wrongExplanation[choice]}

        <br><br>

        <b>発音</b><br>
        ${currentQuestion.pronunciation}<br><br>

        <b>意味</b><br>
        ${currentQuestion.meaning}<br><br>

        <b>解説</b><br>
        ${currentQuestion.explanation}

        <br><br>

        <button onclick="loadQuestion()">
        次の問題
        </button>
        `;

    }

}
