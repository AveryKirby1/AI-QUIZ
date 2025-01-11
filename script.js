
const quizData = [
  {
    question: "You’ve just found $500 on the ground. What’s the first thing you do?",
    options: {
      A: "Panic and try to find its rightful owner.",
      B: "Deposit it immediately into your savings account.",
      C: "Treat yourself to that thing you’ve had your eye on.",
      D: "Split it—some for you, some for charity or a friend."
    },
    name: "q1"
  },
  {
    question: "Your friend asks you to split a $400 dinner bill evenly, but you only had a salad. What’s your move?",
    options: {
      A: "Quietly pay the full amount to avoid conflict.",
      B: "Politely explain the situation and ask to adjust the bill.",
      C: "Laugh it off and pay the full amount anyway.",
      D: "Pay the full amount and feel good knowing it made the group happy."
    },
    name: "q2"
  },
  // Add remaining questions here
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
  const quizSteps = document.getElementById("quiz-steps");
  quizSteps.innerHTML = "";

  const questionData = quizData[index];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question", "active");

  const questionTitle = document.createElement("h2");
  questionTitle.textContent = questionData.question;

  questionDiv.appendChild(questionTitle);

  for (const [key, value] of Object.entries(questionData.options)) {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `<input type="radio" name="${questionData.name}" value="${key}"> ${value}`;
    questionDiv.appendChild(optionLabel);
  }

  quizSteps.appendChild(questionDiv);

  updateButtons();
}

function updateButtons() {
  const nextBtn = document.getElementById("next-btn");
  const seeResultsBtn = document.getElementById("see-results-btn");

  if (currentQuestionIndex < quizData.length - 1) {
    nextBtn.classList.remove("hidden");
    seeResultsBtn.classList.add("hidden");
  } else {
    nextBtn.classList.add("hidden");
    seeResultsBtn.classList.remove("hidden");
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  const currentQuestion = document.querySelector(".question.active");
  const selectedOption = currentQuestion.querySelector("input[type='radio']:checked");

  if (selectedOption) {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion(currentQuestionIndex);
    }
  } else {
    alert("Please select an answer before proceeding.");
  }
});

document.getElementById("see-results-btn").addEventListener("click", () => {
  alert("Results calculation to be implemented.");
});

// Load the first question on page load
window.onload = () => {
  loadQuestion(0);
};
