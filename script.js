
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
  {
    question: "You walk into a store to buy toothpaste and leave with...",
    options: {
      A: "Nothing—it was overpriced.",
      B: "Toothpaste and a backup tube.",
      C: "Toothpaste, snacks, a magazine, and a cute mug.",
      D: "Toothpaste and a donation to the charity box."
    },
    name: "q3"
  },
  {
    question: "Your boss offers you a $10,000 raise. What’s your first thought?",
    options: {
      A: "Finally, I can pay off those bills.",
      B: "Great! I’ll put it into retirement.",
      C: "Time to plan that dream vacation!",
      D: "Awesome—maybe I can help a family member."
    },
    name: "q4"
  },
  {
    question: "A friend calls you crying about a $1,000 car repair bill. What do you do?",
    options: {
      A: "Sympathize but avoid offering help.",
      B: "Offer budgeting advice and suggest a cheaper mechanic.",
      C: "Venmo them $100 as a gift.",
      D: "Lend them the money if you can, no strings attached."
    },
    name: "q5"
  },
  {
    question: "Your dream vacation is calling, but you’re $2,000 short. How do you handle it?",
    options: {
      A: "Cancel the trip—better safe than sorry.",
      B: "Delay and save until you have enough.",
      C: "Book it anyway!",
      D: "Ask friends or family to split costs."
    },
    name: "q6"
  },
  {
    question: "Your favorite coffee shop just raised prices. Do you...",
    options: {
      A: "Stop going and switch to home coffee.",
      B: "Go less often to keep costs in check.",
      C: "Keep going and don’t think twice.",
      D: "Still go, but treat someone else to coffee."
    },
    name: "q7"
  },
  {
    question: "You’re at a party and someone mentions investing in cryptocurrency. What’s your reaction?",
    options: {
      A: "Sounds risky—I’ll stick to savings.",
      B: "I’ll research it more before deciding.",
      C: "I’ll throw in $100 and see what happens!",
      D: "I’ll invest but also share my learnings."
    },
    name: "q8"
  },
  {
    question: "You’re browsing online and see a limited edition gadget for $500. What do you do?",
    options: {
      A: "Skip it—you don’t need it.",
      B: "Add it to your wishlist for later.",
      C: "Buy it immediately before it sells out!",
      D: "Suggest a group discount to your friends."
    },
    name: "q9"
  },
  {
    question: "You’ve had a long week and need to relax. How do you treat yourself?",
    options: {
      A: "Go for a quiet walk—it’s free and refreshing.",
      B: "Buy a new book or something small.",
      C: "Plan a big night out with friends.",
      D: "Cook dinner for friends or treat someone to a meal."
    },
    name: "q10"
  }
];

let currentQuestionIndex = 0;
let answers = {};

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
    answers[quizData[currentQuestionIndex].name] = selectedOption.value;
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion(currentQuestionIndex);
    }
  } else {
    alert("Please select an answer before proceeding.");
  }
});

document.getElementById("see-results-btn").addEventListener("click", () => {
  const results = document.getElementById("results");
  results.innerHTML = "<h2>Results will be shown here</h2>"; // Placeholder for grading logic
});

// Load the first question on page load
window.onload = () => {
  loadQuestion(0);
};
