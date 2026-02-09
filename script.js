
const questions = [
{
    question: "Una barra estructural ideal trabaja principalmente a:",
    answers: ["Flexión", "Corte", "Esfuerzos axiales", "Torsión"],
    correct: "Esfuerzos axiales",
    wrong: "Las barras no están pensadas para resistir momentos ni corte.",
    explanation: "Una barra ideal trabaja a tracción o compresión, es decir, esfuerzos axiales."
},
{
    question: "La tracción se produce cuando:",
    answers: ["La carga es perpendicular al eje", "El elemento se curva", "Las fuerzas tiran alineadas con el eje", "Aparece pandeo"],
    correct: "Las fuerzas tiran alineadas con el eje",
    wrong: "La curvatura y el pandeo no corresponden a tracción.",
    explanation: "La tracción aparece cuando las fuerzas estiran el elemento en la dirección de su eje."
},
{
    question: "La deformación característica de la tracción es:",
    answers: ["Curvatura", "Acortamiento", "Alargamiento", "Pandeo"],
    correct: "Alargamiento",
    wrong: "Curvatura y pandeo corresponden a flexión o compresión.",
    explanation: "En tracción el elemento se alarga."
},
{
    question: "En un elemento sometido solo a tracción:",
    answers: ["Existe eje neutro", "Algunas fibras se comprimen", "Todas las fibras se traccionan", "Aparece flexión"],
    correct: "Todas las fibras se traccionan",
    wrong: "El eje neutro solo existe cuando hay tracción y compresión juntas.",
    explanation: "Todas las fibras trabajan de la misma forma: traccionadas."
},
{
    question: "La flexión aparece cuando:",
    answers: ["La carga es paralela al eje", "La carga es perpendicular al eje", "El elemento solo se estira", "No hay deformación"],
    correct: "La carga es perpendicular al eje",
    wrong: "Las cargas paralelas generan tracción o compresión.",
    explanation: "La flexión se produce por cargas perpendiculares al eje."
},
{
    question: "En flexión simple se producen:",
    answers: ["Solo compresión", "Solo tracción", "Tracción y compresión simultáneamente", "Solo corte"],
    correct: "Tracción y compresión simultáneamente",
    wrong: "La flexión nunca es un esfuerzo único.",
    explanation: "Una parte del elemento se comprime y otra se tracciona."
},
{
    question: "El eje neutro se caracteriza por:",
    answers: ["Máxima tracción", "Máxima compresión", "Tensión nula", "Máxima deformación"],
    correct: "Tensión nula",
    wrong: "El eje neutro no trabaja estructuralmente.",
    explanation: "En el eje neutro la tensión es cero."
},
{
    question: "Las tensiones máximas en flexión se producen:",
    answers: ["En el eje neutro", "En el centro de la sección", "En las fibras extremas", "En los apoyos"],
    correct: "En las fibras extremas",
    wrong: "Cerca del eje neutro las tensiones son menores.",
    explanation: "Las fibras más alejadas del eje neutro son las más exigidas."
},
{
    question: "El par interno en flexión sirve para:",
    answers: ["Generar deformación", "Aumentar flecha", "Oponerse al par externo", "Producir rotura"],
    correct: "Oponerse al par externo",
    wrong: "El par interno no daña la estructura.",
    explanation: "Equilibra el efecto de las cargas externas."
},
{
    question: "En una viga simplemente apoyada con carga distribuida:",
    answers: ["El momento máximo está en los apoyos", "El momento máximo está en el centro", "El corte es nulo en los apoyos", "No hay flexión"],
    correct: "El momento máximo está en el centro",
    wrong: "En los apoyos el momento suele ser cero.",
    explanation: "El máximo momento flector aparece en el centro del tramo."
},
{
    question: "Una estructura de compresión dominante se define porque:",
    answers: ["Tiene gran inercia", "No aparecen tracciones", "Trabaja a flexión", "Es hiperestática"],
    correct: "No aparecen tracciones",
    wrong: "La clave no es la forma sino el tipo de esfuerzo.",
    explanation: "Todo el sistema trabaja comprimido."
},
{
    question: "El pandeo es un fenómeno asociado a:",
    answers: ["Tracción", "Corte", "Compresión", "Torsión"],
    correct: "Compresión",
    wrong: "El pandeo no ocurre en elementos estirados.",
    explanation: "Es una inestabilidad típica de elementos comprimidos."
},
{
    question: "El pandeo depende principalmente de:",
    answers: ["El peso propio", "La esbeltez", "El color del material", "El tipo de carga"],
    correct: "La esbeltez",
    wrong: "No depende solo de la carga aplicada.",
    explanation: "Cuanto más esbelto el elemento, mayor riesgo de pandeo."
},
{
    question: "Si la carga no pasa por el centro de gravedad:",
    answers: ["Aparece tracción pura", "Aparece corte", "Aparece flexión por excentricidad", "No pasa nada"],
    correct: "Aparece flexión por excentricidad",
    wrong: "Toda excentricidad genera momento.",
    explanation: "La carga excéntrica produce flexión adicional."
},
{
    question: "El núcleo central de una sección indica:",
    answers: ["Zona más resistente", "Centro geométrico", "Área donde debe pasar la carga para evitar tracción", "Eje neutro"],
    correct: "Área donde debe pasar la carga para evitar tracción",
    wrong: "No es lo mismo que el eje neutro.",
    explanation: "Si la carga pasa por el núcleo, no aparecen tracciones."
},
{
    question: "En un sistema reticulado ideal las cargas se aplican:",
    answers: ["En las barras", "En cualquier punto", "En los nudos", "En las diagonales"],
    correct: "En los nudos",
    wrong: "Cargar una barra genera flexión.",
    explanation: "Así las barras trabajan solo a tracción o compresión."
},
{
    question: "Si una carga se aplica en el medio de una barra:",
    answers: ["Trabaja solo axial", "Aparece flexión", "No se transmite", "Se elimina el esfuerzo"],
    correct: "Aparece flexión",
    wrong: "La barra deja de ser ideal.",
    explanation: "La carga fuera del nudo genera momento flector."
},
{
    question: "El triángulo es fundamental en estructuras de barras porque:",
    answers: ["Reduce peso", "Es indeformable geométricamente", "Aumenta rigidez del material", "Elimina esfuerzos"],
    correct: "Es indeformable geométricamente",
    wrong: "Es un tema geométrico, no material.",
    explanation: "El triángulo no se deforma sin cambiar la longitud de sus lados."
},
{
    question: "Los cables solo trabajan a tracción porque:",
    answers: ["Son livianos", "No resisten compresión", "Tienen gran inercia", "Son rígidos"],
    correct: "No resisten compresión",
    wrong: "Los cables son flexibles.",
    explanation: "Ante compresión se aflojan y no resisten carga."
},
{
    question: "¿Qué elementos trabajan principalmente a flexión?",
    answers: ["Tensores", "Columnas", "Vigas y losas", "Cables"],
    correct: "Vigas y losas",
    wrong: "Tensores y cables trabajan a tracción.",
    explanation: "Vigas y losas reciben cargas perpendiculares a su eje."
}
];

// ---------------- LÓGICA DEL QUIZ ----------------

let current = 0;
let score = 0;
let shuffled = questions.sort(() => Math.random() - 0.5);

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    nextBtn.disabled = true;
    feedbackEl.innerHTML = "";
    answersEl.innerHTML = "";

    const q = shuffled[current];
    questionEl.textContent = `Pregunta ${current + 1} / ${shuffled.length}: ${q.question}`;

    const shuffledAnswers = [...q.answers].sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const div = document.createElement("div");
        div.className = "answer";
        div.textContent = answer;
        div.onclick = () => selectAnswer(div, answer);
        answersEl.appendChild(div);
    });
}

function selectAnswer(element, answer) {
    document.querySelectorAll(".answer").forEach(a => a.onclick = null);

    const q = shuffled[current];

    if (answer === q.correct) {
        element.classList.add("correct");
        score++;
    } else {
        element.classList.add("wrong");
        feedbackEl.innerHTML = `
            <p><strong>Incorrecto.</strong> ${q.wrong}</p>
            <p><strong>Explicación:</strong> ${q.explanation}</p>
        `;
        document.querySelectorAll(".answer").forEach(a => {
            if (a.textContent === q.correct) a.classList.add("correct");
        });
    }

    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    current++;
    if (current < shuffled.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("score").textContent = `Resultado final: ${score} / ${shuffled.length}`;
    }
};

function restartQuiz() {
    current = 0;
    score = 0;
    shuffled = questions.sort(() => Math.random() - 0.5);
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();


