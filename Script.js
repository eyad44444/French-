// Answer Key from the Revision Sheets
const answerKey = {
    [span_2](start_span)[span_3](start_span)// Passé Récent Section[span_2](end_span)[span_3](end_span)
    pr1: "Nous venons d'arriver à l'école.",
    pr2: "Jean vient de marquer un but.",
    pr3: "Elles viennent de prendre le bus.",
    pr4: "Tu viens de faire tes exercices.",
    pr5: "Il vient d'ouvrir la porte.",

    [span_4](start_span)// Color Adjectives Section[span_4](end_span)
    col1: "noire",
    col2: "grise",
    col3: "blanche",

    [span_5](start_span)// Vocabulary Section[span_5](end_span)
    voc1: "train",
    voc2: "valises",
    voc3: "boulangerie"
};

function checkPerformance() {
    let score = 0;
    let totalQuestions = Object.keys(answerKey).length;

    for (let id in answerKey) {
        let inputField = document.getElementById(id);
        let userTyped = inputField.value.trim().toLowerCase();
        let correctAnswer = answerKey[id].toLowerCase();

        // Check if the answer matches
        if (userTyped === correctAnswer) {
            inputField.classList.add('input-correct');
            inputField.classList.remove('input-incorrect');
            score++;
        } else {
            inputField.classList.add('input-incorrect');
            inputField.classList.remove('input-correct');
        }
    }

    // Display Final Result
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.innerHTML = `Your Score: ${score} / ${totalQuestions}`;
    
    if (score === totalQuestions) {
        scoreBoard.style.color = "#27ae60";
        scoreBoard.innerHTML += " - Excellent! 🌟";
    } else {
        scoreBoard.style.color = "#e67e22";
    }
      }

