const questions = [
  { 
    question: "¿Qué es el ahorro?", 
    options: ["A) Gastar todo el dinero.", "B) Guardar dinero para el futuro.", "C) Comprar cosas innecesarias.", "D) Regalar dinero a amigos."],
    correct: "b"
  },
  { 
    question: "¿Qué significa gastar?", 
    options: ["A) Ahorrar dinero.", "B) Usar dinero para comprar.", "C) Dormir mucho.", "D) Ir al banco."],
    correct: "b"
  },
  { 
    question: "¿Qué es un presupuesto?", 
    options: ["A) Una lista de deseos.", "B) Un plan de cuánto dinero gastar.", "C) Un tipo de inversión.", "D) Un banco especial."],
    correct: "b"
  },
  { 
    question: "¿Qué es una inversión?", 
    options: ["A) Gastar todo el dinero.", "B) Poner dinero en un proyecto para obtener más dinero.", "C) Ahorrar para emergencias.", "D) Comprar algo que no necesitas."],
    correct: "b"
  },
  { 
    question: "¿Qué significa ahorrar?", 
    options: ["A) Guardar dinero para el futuro.", "B) Gastar en exceso.", "C) Comprar a crédito.", "D) Regalar dinero.",],
    correct: "a"
  },
  { 
    question: "¿Qué es el interés compuesto?", 
    options: ["A) Pagar una deuda.", "B) Ganar dinero por tus ahorros a lo largo del tiempo.", "C) Un tipo de inversión arriesgada.", "D) Un método de ahorro temporal."],
    correct: "b"
  },
  { 
    question: "¿Qué es la inflación?", 
    options: ["A) Un aumento en los precios de bienes y servicios.", "B) Una técnica de ahorro.", "C) Una estrategia de inversión.", "D) Una forma de ganar dinero."],
    correct: "a"
  },
  { 
    question: "¿Qué es un crédito?", 
    options: ["A) Un préstamo que debes pagar con intereses.", "B) Un tipo de inversión.", "C) Dinero ahorrado.", "D) Un tipo de ahorro."],
    correct: "a"
  },
  { 
    question: "¿Cuál es el mejor tipo de inversión?", 
    options: ["A) Inversiones de alto riesgo.", "B) Depender de tus ahorros.", "C) Diversificar tus inversiones.", "D) Invertir en cualquier cosa sin investigación."],
    correct: "c"
  },
  { 
    question: "¿Por qué es importante tener un fondo de emergencia?", 
    options: ["A) Para emergencias imprevistas.", "B) Para comprar bienes de lujo.", "C) Para vivir al límite.", "D) Para pedir préstamos."],
    correct: "a"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  
  // Mostrar el número de la pregunta y la pregunta
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
    <div class="question">
      <p>Pregunta ${currentQuestionIndex + 1}: ${question.question}</p>
      ${question.options.map((option, index) => `
        <label>
          <input type="radio" name="q${currentQuestionIndex}" value="${String.fromCharCode(97 + index)}"> ${option}
        </label><br>
      `).join('')}
    </div>
  `;
  
  // Mostrar o ocultar el botón de "Siguiente"
  const nextButton = document.getElementById('next-button');
  nextButton.style.display = 'block';
}

function nextQuestion() {
  const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);

  if (!selectedOption) {
    alert("Por favor, selecciona una opción antes de continuar.");
    return; // Si no hay respuesta seleccionada, no avanzar.
  }

  const userAnswer = selectedOption.value;

  // Comprobar la respuesta
  if (userAnswer === questions[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;

  // Si no hay más preguntas, mostrar el resultado
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Tu puntuación es: ${score} / 10`;

  if (score === 10) {
    resultDiv.innerHTML += "<br>¡Excelente, lo hiciste perfecto!";
  } else if (score >= 7) {
    resultDiv.innerHTML += "<br>¡Buen trabajo, pero aún hay margen para mejorar!";
  } else {
    resultDiv.innerHTML += "<br>¡Intenta nuevamente!";
  }

  // Ocultar el botón de siguiente
  const nextButton = document.getElementById('next-button');
  nextButton.style.display = 'none';

  // Mostrar el botón de "Intentar nuevamente"
  const retryButton = document.getElementById('retry-button');
  retryButton.style.display = 'block';
}

function retryQuiz() {
  // Reiniciar variables
  currentQuestionIndex = 0;
  score = 0;

  // Ocultar resultados y mostrar la primera pregunta
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  const retryButton = document.getElementById('retry-button');
  retryButton.style.display = 'none';

  showQuestion();
}

document.getElementById('next-button').addEventListener('click', nextQuestion);
document.getElementById('retry-button').addEventListener('click', retryQuiz);

// Mostrar la primera pregunta al cargar
showQuestion();
