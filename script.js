const questions = [
    {
        question: "Una barra estructural ideal trabaja principalmente a:",
        answers: ["Flexión", "Corte", "Esfuerzos axiales", "Torsión"],
        correct: "Esfuerzos axiales",
        explanation: "Las barras no están pensadas para resistir momentos ni corte. Una barra ideal trabaja a tracción o compresión, es decir, esfuerzos axiales."
    },
    {
        question: "La tracción se produce cuando:",
        answers: [
            "La carga es perpendicular al eje",
            "El elemento se curva",
            "Las fuerzas tiran alineadas con el eje",
            "Aparece pandeo"
        ],
        correct: "Las fuerzas tiran alineadas con el eje",
        explanation: "La curvatura y el pandeo no corresponden a tracción. La tracción aparece cuando las fuerzas estiran el elemento en la dirección de su eje."
    },
    {
        question: "La deformación característica de la tracción es:",
        answers: ["Curvatura", "Acortamiento", "Alargamiento", "Pandeo"],
        correct: "Alargamiento",
        explanation: "Curvatura y pandeo corresponden a flexión o compresión. En tracción el elemento se alarga."
    },
    {
        question: "En un elemento sometido solo a tracción:",
        answers: [
            "Existe eje neutro",
            "Algunas fibras se comprimen",
            "Todas las fibras se traccionan",
            "Aparece flexión"
        ],
        correct: "Todas las fibras se traccionan",
        explanation: "El eje neutro solo existe cuando hay tracción y compresión juntas. En tracción pura, todas las fibras trabajan traccionadas."
    },
    {
        question: "La flexión aparece cuando:",
        answers: [
            "La carga es paralela al eje",
            "La carga es perpendicular al eje",
            "El elemento solo se estira",
            "No hay deformación"
        ],
        correct: "La carga es perpendicular al eje",
        explanation: "Las cargas paralelas generan tracción o compresión. La flexión se produce por cargas perpendiculares al eje."
    },
    {
        question: "En flexión simple se producen:",
        answers: [
            "Solo compresión",
            "Solo tracción",
            "Tracción y compresión simultáneamente",
            "Solo corte"
        ],
        correct: "Tracción y compresión simultáneamente",
        explanation: "La flexión nunca es un esfuerzo único: una parte del elemento se comprime y otra se tracciona."
    },
    {
        question: "El eje neutro se caracteriza por:",
        answers: [
            "Máxima tracción",
            "Máxima compresión",
            "Tensión nula",
            "Máxima deformación"
        ],
        correct: "Tensión nula",
        explanation: "El eje neutro no trabaja estructuralmente. En él la tensión es igual a cero."
    },
    {
        question: "Las tensiones máximas en flexión se producen:",
        answers: [
            "En el eje neutro",
            "En el centro de la sección",
            "En las fibras extremas",
            "En los apoyos"
        ],
        correct: "En las fibras extremas",
        explanation: "Cerca del eje neutro las tensiones son menores. Las fibras más alejadas son las más exigidas."
    },
    {
        question: "El par interno en flexión sirve para:",
        answers: [
            "Generar deformación",
            "Aumentar flecha",
            "Oponerse al par externo",
            "Producir rotura"
        ],
        correct: "Oponerse al par externo",
        explanation: "El par interno equilibra el efecto de las cargas externas, no daña la estructura."
    },
    {
        question: "En una viga simplemente apoyada con carga distribuida:",
        answers: [
            "El momento máximo está en los apoyos",
            "El momento máximo está en el centro",
            "El corte es nulo en los apoyos",
            "No hay flexión"
        ],
        correct: "El momento máximo está en el centro",
        explanation: "En los apoyos el momento suele ser cero. El máximo momento aparece en el centro del tramo."
    },
    {
        question: "Una estructura de compresión dominante se define porque:",
        answers: [
            "Tiene gran inercia",
            "No aparecen tracciones",
            "Trabaja a flexión",
            "Es hiperestática"
        ],
        correct: "No aparecen tracciones",
        explanation: "La clave no es la forma sino el tipo de esfuerzo: todo el sistema trabaja comprimido."
    },
    {
        question: "El pandeo es un fenómeno asociado a:",
        answers: ["Tracción", "Corte", "Compresión", "Torsión"],
        correct: "Compresión",
        explanation: "El pandeo no ocurre en elementos estirados, es una inestabilidad típica de la compresión."
    },
    {
        question: "El pandeo depende principalmente de:",
        answers: [
            "El peso propio",
            "La esbeltez",
            "El color del material",
            "El tipo de carga"
        ],
        correct: "La esbeltez",
        explanation: "No depende solo de la carga aplicada. Cuanto más esbelto el elemento, mayor riesgo de pandeo."
    },
    {
        question: "Si la carga no pasa por el centro de gravedad:",
        answers: [
            "Aparece tracción pura",
            "Aparece corte",
            "Aparece flexión por excentricidad",
            "No pasa nada"
        ],
        correct: "Aparece flexión por excentricidad",
        explanation: "Toda excentricidad genera momento y por lo tanto flexión adicional."
    },
    {
        question: "El núcleo central de una sección indica:",
        answers: [
            "Zona más resistente",
            "Centro geométrico",
            "Área donde debe pasar la carga para evitar tracción",
            "Eje neutro"
        ],
        correct: "Área donde debe pasar la carga para evitar tracción",
        explanation: "No es lo mismo que el eje neutro. Si la carga pasa por el núcleo, no aparecen tracciones."
    },
    {
        question: "En un sistema reticulado ideal las cargas se aplican:",
        answers: [
            "En las barras",
            "En cualquier punto",
            "En los nudos",
            "En las diagonales"
        ],
        correct: "En los nudos",
        explanation: "Cargar una barra genera flexión. En un sistema ideal las cargas van a los nudos."
    },
    {
        question: "Si una carga se aplica en el medio de una barra:",
        answers: [
            "Trabaja solo axial",
            "Aparece flexión",
            "No se transmite",
            "Se elimina el esfuerzo"
        ],
        correct: "Aparece flexión",
        explanation: "La barra deja de ser ideal. La carga fuera del nudo genera momento flector."
    },
    {
        question: "El triángulo es fundamental en estructuras de barras porque:",
        answers: [
            "Reduce peso",
            "Es indeformable geométricamente",
            "Aumenta rigidez del material",
            "Elimina esfuerzos"
        ],
        correct: "Es indeformable geométricamente",
        explanation: "Es un tema geométrico, no material. El triángulo no se deforma sin cambiar la longitud de sus lados."
    },
    {
        question: "Los cables solo trabajan a tracción porque:",
        answers: [
            "Son livianos",
            "No resisten compresión",
            "Tienen gran inercia",
            "Son rígidos"
        ],
        correct: "No resisten compresión",
        explanation: "Los cables son flexibles. Ante compresión se aflojan y no resisten carga."
    },
    {
        question: "¿Qué elementos trabajan principalmente a flexión?",
        answers: ["Tensores", "Columnas", "Vigas y losas", "Cables"],
        correct: "Vigas y losas",
        explanation: "Tensores y cables trabajan a tracción. Vigas y losas reciben cargas perpendiculares a su eje."
    }
];

// ===============================
// LÓGICA DEL QUIZ
// ===============================

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

// Mezclar preguntas
shuffle(questions);
loadQuestion();

function loadQuestion() {
    nextBtn.disabled = true;
    feedbackEl.classList.add("hidden");
    answersEl.innerHTML = "";

    const q = questions[current];
    questionEl.textContent = `Pregunta ${current + 1} / ${questions.length}: ${q.question}`;

    const shuffledAnswers = [...q.answers];
    shuffle(shuffledAnswers);

    shuffledAnswers.forEach(answer => {
        const btn = document.createElement("div");
        btn.className = "answer";
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(btn, answer);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(button, answer) {
    const q = questions[current];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(b => b.onclick = null);

    if (answer === q.correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons.forEach(b => {
            if (b.textContent === q.correct) {
                b.classList.add("correct");
            }
        });
        feedbackEl.innerHTML = `<strong>Explicación:</strong> ${q.explanation}`;
        feedbackEl.classList.remove("hidden");
    }

    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `Resultado final: ${score} / ${questions.length}`;
}

function restartQuiz() {
    current = 0;
    score = 0;
    shuffle(questions);
    quizEl.classList.remove("hidden");
    resultEl.classList.add("hidden");
    loadQuestion();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
