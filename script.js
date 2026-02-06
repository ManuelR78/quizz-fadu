const preguntasOriginales = [
  {
    pregunta: "En una estructura de tracción, la carga principal se transmite:",
    opciones: [
      "Por empujes verticales",
      "Por momentos flectores",
      "Por fuerzas de tracción hacia los anclajes",
      "Por contacto directo con el suelo"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué elemento es indispensable en una estructura de tracción?",
    opciones: [
      "Secciones macizas",
      "Apoyos continuos",
      "Anclajes resistentes",
      "Materiales frágiles"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es una ventaja de las estructuras de tracción?",
    opciones: [
      "Gran peso propio",
      "Uso exclusivo de hormigón",
      "Gran luz con poco material",
      "Alta rigidez sin tensado"
    ],
    correcta: 2
  },
  {
    pregunta: "Las estructuras de tracción trabajan principalmente:",
    opciones: [
      "A flexión y corte",
      "A compresión y flexión",
      "Solo a tracción",
      "A torsión"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué ocurre si falla un anclaje en una estructura de tracción?",
    opciones: [
      "No afecta al sistema",
      "Aumenta la estabilidad",
      "Se compromete toda la estructura",
      "Se transforma en compresión"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Por qué las estructuras de tracción suelen presentar formas curvas?",
    opciones: [
      "Por razones estéticas",
      "Por facilidad constructiva",
      "Porque la forma responde al recorrido de las fuerzas",
      "Para reducir el peso visual"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál de estos materiales NO es adecuado para trabajar a tracción?",
    opciones: [
      "Acero",
      "Cable metálico",
      "Membrana textil",
      "Hormigón simple"
    ],
    correcta: 3
  },
  {
    pregunta: "En un puente colgante, los cables principales trabajan:",
    opciones: [
      "A compresión",
      "A flexión",
      "A tracción",
      "A corte"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué relación existe entre tensión y estabilidad en estructuras de tracción?",
    opciones: [
      "A menor tensión, mayor estabilidad",
      "No existe relación",
      "La tensión es fundamental para la estabilidad",
      "La tensión debilita la estructura"
    ],
    correcta: 2
  },
  {
    pregunta: "Las estructuras de tracción se caracterizan por:",
    opciones: [
      "Elementos rígidos y pesados",
      "Secciones macizas",
      "Elementos esbeltos y livianos",
      "Gran espesor estructural"
    ],
    correcta: 2
  },
  {
    pregunta: "En términos estructurales, una membrana tensada funciona:",
    opciones: [
      "Apoyada sobre el suelo",
      "Como viga rígida",
      "Transmitiendo cargas por tracción",
      "Por compresión continua"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué tipo de esfuerzo predomina en un tensor metálico?",
    opciones: [
      "Compresión",
      "Flexión",
      "Corte",
      "Tracción"
    ],
    correcta: 3
  },
  {
    pregunta: "¿Cuál es una desventaja típica de las estructuras de tracción?",
    opciones: [
      "Necesitan poco cálculo",
      "No requieren mantenimiento",
      "Dependencia del correcto tensado",
      "Gran rigidez estructural"
    ],
    correcta: 2
  },
  {
    pregunta: "En arquitectura, las estructuras de tracción se utilizan frecuentemente para:",
    opciones: [
      "Muros portantes",
      "Torres macizas",
      "Cubrir grandes espacios sin apoyos intermedios",
      "Cimentaciones profundas"
    ],
    correcta: 2
  },
  {
    pregunta: "Desde el punto de vista constructivo, las estructuras de tracción requieren:",
    opciones: [
      "Apoyos débiles",
      "Elementos frágiles",
      "Precisión en el montaje y tensado",
      "Secciones sobredimensionadas"
    ],
    correcta: 2
  }
];

let preguntas = [];
let indiceActual = 0;
let score = 0;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const btnSiguiente = document.getElementById("siguiente");
const btnReiniciar = document.getElementById("reiniciar");
const contadorEl = document.getElementById("contador");

// 🔀 Fisher–Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function prepararPreguntas() {
  preguntas = preguntasOriginales.map(p => {
    const opciones = p.opciones.map((texto, index) => ({
      texto,
      esCorrecta: index === p.correcta
    }));

    shuffleArray(opciones);

    return {
      pregunta: p.pregunta,
      opciones
    };
  });

  shuffleArray(preguntas);
}

function cargarPregunta() {
  btnSiguiente.disabled = true;
  opcionesEl.innerHTML = "";

  const actual = preguntas[indiceActual];
  contadorEl.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;
  preguntaEl.textContent = actual.pregunta;

  actual.opciones.forEach(opcion => {
    const div = document.createElement("div");
    div.textContent = opcion.texto;
    div.classList.add("opcion");
    div.onclick = () => seleccionarRespuesta(div, opcion.esCorrecta);
    opcionesEl.appendChild(div);
  });
}

function seleccionarRespuesta(elemento, esCorrecta) {
  const opciones = document.querySelectorAll(".opcion");

  opciones.forEach(op => op.onclick = null);

  if (esCorrecta) {
    elemento.classList.add("correcta");
    score++;
  } else {
    elemento.classList.add("incorrecta");
    preguntas[indiceActual].opciones.forEach((op, i) => {
      if (op.esCorrecta) {
        opciones[i].classList.add("correcta");
      }
    });
  }

  btnSiguiente.disabled = false;
}

btnSiguiente.onclick = () => {
  indiceActual++;
  if (indiceActual < preguntas.length) {
    cargarPregunta();
  } else {
    mostrarResultado();
  }
};

function mostrarResultado() {
  contadorEl.textContent = "";
  preguntaEl.textContent = `Resultado final: ${score} / ${preguntas.length}`;
  opcionesEl.innerHTML = "";
  btnSiguiente.style.display = "none";
  btnReiniciar.style.display = "block";
}

btnReiniciar.onclick = () => {
  indiceActual = 0;
  score = 0;
  btnReiniciar.style.display = "none";
  btnSiguiente.style.display = "block";
  prepararPreguntas();
  cargarPregunta();
};

// INIT
prepararPreguntas();
cargarPregunta();

