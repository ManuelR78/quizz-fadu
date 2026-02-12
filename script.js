const questions = [
{
question: "¿Qué es una barra estructural sometida a cargas axiales?",
answers: [
"Un elemento macizo de gran espesor",
"Un elemento cuya longitud es mucho mayor que su sección transversal y que trabaja bajo cargas normales axiales aplicadas perpendicularmente a su sección en los extremos",
"Un elemento que trabaja principalmente a flexión"
],
correct: 1,
explanation: "Trabaja con fuerzas aplicadas perpendicularmente a la sección transversal, generando tensión normal axial (σ). A no define comportamiento mecánico. C describe una viga."
},
{
question: "¿Dónde se aplican idealmente las cargas verticales puntuales en un sistema reticulado plano?",
answers: [
"En el centro de cada barra",
"En los nudos, como fuerzas concentradas verticales aplicadas en las articulaciones",
"A lo largo de toda la barra como carga distribuida"
],
correct: 1,
explanation: "En los nudos se evitan momentos flectores. Aplicarlas en barras generaría flexión."
},
{
question: "Cuando una barra está sometida a una carga axial de tracción:",
answers: [
"Se acorta",
"Se alarga debido a una tensión normal axial de tracción (σ > 0)",
"Trabaja principalmente a tensión tangencial"
],
correct: 1,
explanation: "La tracción genera alargamiento y tensión normal positiva. Acortamiento corresponde a compresión."
},
{
question: "Cuando una barra está sometida a compresión axial centrada:",
answers: [
"Se alarga",
"Se acorta generando tensión normal de compresión (σ < 0)",
"Solo trabaja a corte"
],
correct: 1,
explanation: "La compresión produce acortamiento y tensión negativa."
},
{
question: "El principio de triangulación permite que:",
answers: [
"Las barras trabajen a torsión",
"El sistema mantenga estabilidad geométrica sin variar la longitud de las barras",
"Se generen momentos flectores predominantes"
],
correct: 1,
explanation: "El triángulo es geométricamente indeformable."
},
{
question: "Si una carga puntual vertical se aplica en el punto medio de una barra:",
answers: [
"La barra sigue trabajando solo axialmente",
"Se generan momentos flectores y tensiones normales variables en la sección",
"No se transmite carga"
],
correct: 1,
explanation: "Aparece flexión debido a la excentricidad."
},
{
question: "En un reticulado ideal, los nudos se consideran:",
answers: [
"Rígidos transmitiendo momento",
"Articulados transmitiendo únicamente fuerzas axiales",
"Empotrados"
],
correct: 1,
explanation: "Los nudos ideales transmiten solo fuerzas axiales."
},
{
question: "La eficiencia estructural del reticulado se debe a que:",
answers: [
"Minimiza tensiones tangenciales",
"Minimiza momentos flectores y privilegia esfuerzos normales axiales",
"Aumenta la deformación"
],
correct: 1,
explanation: "Trabajar axialmente es más eficiente estructuralmente."
},
{
question: "Una barra sometida a compresión axial puede fallar por:",
answers: [
"Tracción longitudinal",
"Pandeo lateral por inestabilidad",
"Corte puro inmediato"
],
correct: 1,
explanation: "El pandeo es el modo típico de falla en compresión."
},
{
question: "En una barra sometida a flexión:",
answers: [
"Toda la sección trabaja solo a compresión",
"Una parte trabaja a tracción y otra a compresión",
"Solo aparecen tensiones tangenciales"
],
correct: 1,
explanation: "En flexión las tensiones varían linealmente entre tracción y compresión."
},
{
question: "En un reticulado sometido a carga vertical uniforme:",
answers: [
"Las diagonales pueden trabajar a tracción o compresión",
"Todas las barras trabajan igual",
"Solo los apoyos resisten"
],
correct: 0,
explanation: "Depende de su orientación y del flujo de cargas."
},
{
question: "Una carga oblicua aplicada en un nudo genera:",
answers: [
"Solo tensión tangencial",
"Componentes axiales normales según descomposición vectorial",
"Solo torsión"
],
correct: 1,
explanation: "La fuerza se descompone en ejes de las barras."
},
{
question: "En una barra sometida exclusivamente a carga axial centrada:",
answers: [
"La tensión es uniforme en toda la sección",
"La tensión varía linealmente",
"Solo hay corte"
],
correct: 0,
explanation: "No hay momento flector."
},
{
question: "Si se elimina una diagonal esencial:",
answers: [
"El sistema puede volverse inestable",
"No cambia nada",
"Se transforma en losa"
],
correct: 0,
explanation: "Se pierde la indeformabilidad geométrica."
},
{
question: "En un reticulado espacial con cargas verticales concentradas:",
answers: [
"Las fuerzas se distribuyen tridimensionalmente en barras axiales",
"Solo trabajan las horizontales",
"Solo hay flexión"
],
correct: 0,
explanation: "El sistema trabaja en 3D axialmente."
},
{
question: "En una barra sometida a carga axial centrada:",
answers: [
"No aparece momento flector",
"Aparece flexión obligatoria",
"Aparece torsión"
],
correct: 0,
explanation: "La carga centrada no genera momento."
},
{
question: "Una carga vertical aplicada en el nudo superior:",
answers: [
"Se transmite axialmente hacia barras inclinadas y luego a los apoyos",
"Se queda en la barra superior",
"Genera únicamente corte"
],
correct: 0,
explanation: "El flujo de cargas va hacia los apoyos."
},
{
question: "Una barra sometida a tensión tangencial pura:",
answers: [
"Trabaja axialmente",
"Solo trabaja a tracción",
"Presenta deformación angular por esfuerzo cortante (τ)"
],
correct: 2,
explanation: "El corte genera distorsión angular."
},
{
question: "Una estereoestructura sometida a cargas distribuidas:",
answers: [
"Trabaja mediante descomposición tridimensional de fuerzas axiales",
"Funciona como losa maciza",
"No requiere triangulación"
],
correct: 0,
explanation: "Mantiene principio axial en 3D."
},
{
question: "Diferencia entre viga y barra reticulada:",
answers: [
"La viga trabaja principalmente a flexión (σ variable), la barra a tensión normal axial (σ uniforme)",
"Ambas trabajan igual",
"La barra trabaja más a corte"
],
correct: 0,
explanation: "La viga resiste por flexión; la barra ideal trabaja axialmente."
}
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const quizEl = document.getElementById("quiz");

shuffle(questions);
loadQuestion();

function loadQuestion() {
nextBtn.disabled = true;
feedbackEl.classList.add("hidden");
answersEl.innerHTML = "";

const q = questions[current];
questionEl.textContent = `Pregunta ${current+1} / ${questions.length}: ${q.question}`;

const shuffled = q.answers.map((a,i)=>({text:a,index:i}));
shuffle(shuffled);

shuffled.forEach(option=>{
const btn = document.createElement("div");
btn.className="answer";
btn.textContent=option.text;
btn.onclick=()=>selectAnswer(btn, option.index);
answersEl.appendChild(btn);
});
}

function selectAnswer(button,index){
const q=questions[current];
const buttons=document.querySelectorAll(".answer");
buttons.forEach(b=>b.onclick=null);

if(index===q.correct){
button.classList.add("correct");
score++;
}else{
button.classList.add("wrong");
buttons.forEach((b,i)=>{
if(q.answers[q.correct]===b.textContent){
b.classList.add("correct");
}
});
feedbackEl.innerHTML=`<strong>Explicación:</strong> ${q.explanation}`;
feedbackEl.classList.remove("hidden");
}
nextBtn.disabled=false;
}

nextBtn.onclick=()=>{
current++;
if(current<questions.length){
loadQuestion();
}else{
quizEl.classList.add("hidden");
resultEl.classList.remove("hidden");
scoreEl.textContent=`Resultado final: ${score} / ${questions.length}`;
}
};

function restartQuiz(){
current=0;
score=0;
shuffle(questions);
quizEl.classList.remove("hidden");
resultEl.classList.add("hidden");
loadQuestion();
}

function shuffle(array){
for(let i=array.length-1;i>0;i--){
const j=Math.floor(Math.random()*(i+1));
[array[i],array[j]]=[array[j],array[i]];
}
}