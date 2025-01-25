/****************************************************
 * QUIZ DATA - Full 10 Questions
 ****************************************************/
const questions = [
  {
    question: "1. You’ve just found $500 on the ground. What’s the first thing you do?",
    answers: [
      {
        text: "A: Panic about legal implications and search for the owner.",
        emotions: ["Apprehension", "Duty", "Caution", "Skepticism", "Reserved"]
      },
      {
        text: "B: Immediately deposit it into savings to boost your safety net.",
        emotions: ["Prudence", "Security", "Forward-thinking", "Responsibility", "Organization"]
      },
      {
        text: "C: Celebrate with a spontaneous treat for yourself right now.",
        emotions: ["Thrill", "Indulgence", "Excitement", "Spontaneity", "Joy"]
      },
      {
        text: "D: Share half with a local charity or a friend who needs help.",
        emotions: ["Generosity", "Altruism", "Warmth", "Compassion", "Connection"]
      }
    ]
  },
  {
    question: "2. Your friend asks you to split a $400 dinner bill evenly, but you only had a salad. What do you do?",
    answers: [
      {
        text: "A: Quietly pay it all to avoid drama, feeling uneasy.",
        emotions: ["Reserved", "Apprehension", "Logic", "Restraint", "Duty"]
      },
      {
        text: "B: Propose a fair split based on what was actually ordered.",
        emotions: ["Structure", "Prudence", "Security", "Stability", "Calculated"]
      },
      {
        text: "C: Laugh it off and cover the full share—it's an entertaining story.",
        emotions: ["Spontaneity", "Joy", "Impulsivity", "Excitement", "Passion"]
      },
      {
        text: "D: Happily pay the entire bill to keep everyone’s spirits high.",
        emotions: ["Harmony", "Collaboration", "Warmth", "Connection", "Sharing"]
      }
    ]
  },
  {
    question: "3. You walk into a store to buy toothpaste and leave with...",
    answers: [
      {
        text: "A: Nothing—prices were too high, so you held off.",
        emotions: ["Skepticism", "Restraint", "Logic", "Practical", "Realism"]
      },
      {
        text: "B: Toothpaste plus a spare, just in case.",
        emotions: ["Preparedness", "Organization", "Stability", "Prudence", "Security"]
      },
      {
        text: "C: Multiple fun items you couldn’t resist trying.",
        emotions: ["Impulsivity", "Exploration", "Thrill", "Indulgence", "Passion"]
      },
      {
        text: "D: Toothpaste and a donation at the charity box.",
        emotions: ["Generosity", "Compassion", "Sharing", "Community", "Connection"]
      }
    ]
  },
  {
    question: "4. Your boss offers you a $10,000 raise. What’s your first thought?",
    answers: [
      {
        text: "A: Pay off debts and maintain a practical buffer.",
        emotions: ["Duty", "Grounded", "Logic", "Restraint", "Realism"]
      },
      {
        text: "B: Invest it or add to long-term savings plans.",
        emotions: ["Forward-thinking", "Calculated", "Structure", "Stability", "Methodical"]
      },
      {
        text: "C: Perfect opportunity to plan a dream trip or major splurge.",
        emotions: ["Excitement", "Impulsivity", "Thrill", "Spontaneity", "Joy"]
      },
      {
        text: "D: Share some with loved ones who are struggling.",
        emotions: ["Altruism", "Warmth", "Compassion", "Connection", "Harmony"]
      }
    ]
  },
  {
    question: "5. A friend calls you crying about a $1,000 car repair bill. What do you do?",
    answers: [
      {
        text: "A: Offer moral support but keep your finances separate.",
        emotions: ["Reserved", "Caution", "Duty", "Apprehension", "Logic"]
      },
      {
        text: "B: Help them budget and research cheaper repair options.",
        emotions: ["Organization", "Methodical", "Preparedness", "Stability", "Prudence"]
      },
      {
        text: "C: Chip in spontaneously—maybe $100—for an immediate lift.",
        emotions: ["Spontaneity", "Impulsivity", "Thrill", "Joy", "Passion"]
      },
      {
        text: "D: Lend them the full amount if you can; friends help each other.",
        emotions: ["Generosity", "Compassion", "Empathy", "Sharing", "Connection"]
      }
    ]
  },
  {
    question: "6. You’re $2,000 short on your dream vacation budget. How do you handle it?",
    answers: [
      {
        text: "A: Cancel the trip; the debt risk is too high.",
        emotions: ["Logic", "Caution", "Reserved", "Realism", "Skepticism"]
      },
      {
        text: "B: Postpone until you’ve saved the full amount systematically.",
        emotions: ["Prudence", "Preparedness", "Security", "Forward-thinking", "Methodical"]
      },
      {
        text: "C: Book it anyway—life is short, and you’ll figure out the cost later.",
        emotions: ["Risk-taking", "Spontaneity", "Excitement", "Indulgence", "Passion"]
      },
      {
        text: "D: Ask friends if they’d like to go together and split costs.",
        emotions: ["Community", "Collaboration", "Harmony", "Sharing", "Connection"]
      }
    ]
  },
  {
    question: "7. Your favorite coffee shop just raised prices. Do you...",
    answers: [
      {
        text: "A: Stop going—it's the most rational cut for your budget.",
        emotions: ["Restraint", "Practical", "Apprehension", "Duty", "Logic"]
      },
      {
        text: "B: Reduce visits and track spending closely.",
        emotions: ["Stability", "Organization", "Calculated", "Security", "Structure"]
      },
      {
        text: "C: Keep going—coffee is your daily indulgence and joy.",
        emotions: ["Thrill", "Indulgence", "Spontaneity", "Joy", "Impulsivity"]
      },
      {
        text: "D: Still visit, but occasionally treat a friend too.",
        emotions: ["Generosity", "Harmony", "Warmth", "Compassion", "Sharing"]
      }
    ]
  },
  {
    question: "8. Someone raves about investing in cryptocurrency. Your reaction?",
    answers: [
      {
        text: "A: Too uncertain—I want concrete data first.",
        emotions: ["Skepticism", "Caution", "Reserved", "Logic", "Realism"]
      },
      {
        text: "B: Research thoroughly, then invest in a controlled way.",
        emotions: ["Methodical", "Prudence", "Calculated", "Forward-thinking", "Security"]
      },
      {
        text: "C: It’s exciting—I’ll jump in with a small gamble!",
        emotions: ["Curiosity", "Risk-taking", "Thrill", "Passion", "Impulsivity"]
      },
      {
        text: "D: Discuss with friends so we can learn and invest together.",
        emotions: ["Collaboration", "Community", "Connection", "Empathy", "Harmony"]
      }
    ]
  },
  {
    question: "9. You see a limited edition gadget for $500. Do you...",
    answers: [
      {
        text: "A: Skip it—you don’t truly need it.",
        emotions: ["Restraint", "Apprehension", "Practical", "Grounded", "Duty"]
      },
      {
        text: "B: Add it to your wishlist and start saving systematically.",
        emotions: ["Organization", "Stability", "Forward-thinking", "Calculated", "Prudence"]
      },
      {
        text: "C: Buy it immediately—life is about seizing the moment!",
        emotions: ["Impulsivity", "Excitement", "Joy", "Spontaneity", "Indulgence"]
      },
      {
        text: "D: Ask friends if they want one too—maybe find a group discount.",
        emotions: ["Collaboration", "Community", "Sharing", "Connection", "Warmth"]
      }
    ]
  },
  {
    question: "10. You’ve had a long week and need to relax. How do you treat yourself?",
    answers: [
      {
        text: "A: Stay home with a simple, low-cost plan like a favorite show.",
        emotions: ["Reserved", "Logic", "Practical", "Restraint", "Caution"]
      },
      {
        text: "B: Buy a small, practical treat—just enough to recharge.",
        emotions: ["Calculated", "Organization", "Methodical", "Security", "Stability"]
      },
      {
        text: "C: Go out for an exciting night—no regrets!",
        emotions: ["Thrill", "Excitement", "Spontaneity", "Joy", "Passion"]
      },
      {
        text: "D: Invite friends over for a cozy hangout or potluck.",
        emotions: ["Community", "Connection", "Collaboration", "Warmth", "Compassion"]
      }
    ]
  }
];

/****************************************************
 * CATEGORY DEFINITIONS - 10 Emotions Each
 ****************************************************/
const categoriesData = {
  Planner: {
    name: "Planner",
    article: "a",
    headingForProducts: "Plan Your Next Steps",
    description: `
      You excel at forethought, structure, and careful organization. 
      Financial stability and calculated decisions are priorities for you.
    `,
    shortDescription: "Planners prefer methodical, secure, and well-thought-out approaches to money.",
    excel: [
      "Strategic Thinking – Always preparing for what's next.",
      "Detailed Organization – Budgets, spreadsheets, planning tools.",
      "Confident Security – Minimizing financial surprises."
    ],
    watchOut: [
      "Overthinking – Sometimes spontaneous decisions have value.",
      "Perfectionism – Don’t get stuck analyzing every small detail."
    ],
    products: [
      "Key Active Saver® Account – Help grow your savings with methodical transfers.",
      "Laurel Road Savings – A reliable place for your money with competitive interest.",
      "Key Secured Credit Card® – Build credit responsibly in a measured way."
    ],
    emotions: [
      "Prudence","Security","Forward-thinking","Calculated","Organization",
      "Structure","Stability","Methodical","Preparedness","Responsibility"
    ]
  },
  Adventurer: {
    name: "Adventurer",
    article: "an",
    headingForProducts: "Fuel Your Next Adventure",
    description: `
      You love excitement, spontaneity, and trying new things. 
      Financial decisions can be thrilling opportunities rather than chores.
    `,
    shortDescription: "Adventurers embrace spontaneity, risk-taking, and bold moves to chase new experiences.",
    excel: [
      "Bold Moves – Unafraid to jump into opportunities.",
      "High Enthusiasm – You bring excitement to financial choices.",
      "Open-minded – Always ready for something novel."
    ],
    watchOut: [
      "Impulse Purchases – Keep an eye on long-term goals.",
      "Risky Decisions – A bit of prudence can save trouble later."
    ],
    products: [
      "Key Smart Checking® – Quick, mobile-friendly banking for on-the-go lifestyles.",
      "Key Rewards Credit Card® – Earn rewards on daily purchases to fuel your passions.",
      "Laurel Road Savings – Keep an easy safety net growing while you explore new ventures."
    ],
    emotions: [
      "Thrill","Indulgence","Excitement","Spontaneity","Joy",
      "Impulsivity","Exploration","Passion","Risk-taking","Curiosity"
    ]
  },
  Connector: {
    name: "Connector",
    article: "a",
    headingForProducts: "Grow Your Community",
    description: `
      People and relationships come first for you. 
      Money is a tool to strengthen bonds and create a sense of community.
    `,
    shortDescription: "Connectors find fulfillment in generosity, harmony, and shared experiences with others.",
    excel: [
      "Generous Spirit – Happy to help or share with loved ones.",
      "Community Builder – You bring people together around shared goals.",
      "Empathetic – You understand that finances affect emotional well-being."
    ],
    watchOut: [
      "Overextending – Protect your own finances, too.",
      "Difficulty Saying No – Sometimes it’s okay to set boundaries."
    ],
    products: [
      "Key Family Checking® – Manage shared expenses or household needs cooperatively.",
      "Laurel Road Loyalty Savings – Earn steadily while staying ready to help others.",
      "Key Cashback Credit Card® – Put your rewards to good use in your community."
    ],
    emotions: [
      "Generosity","Altruism","Warmth","Compassion","Connection",
      "Harmony","Collaboration","Sharing","Empathy","Community"
    ]
  },
  Realist: {
    name: "Realist",
    article: "a",
    headingForProducts: "Build A Solid Foundation",
    description: `
      You focus on staying grounded, logical, and minimizing risk. 
      While cautious, you navigate finances with a level-headed approach.
    `,
    shortDescription: "Realists are practical, skeptical of hype, and prefer keeping a solid grip on financial moves.",
    excel: [
      "Rational Judgment – You filter out noise and assess facts.",
      "Risk Management – You remain cautious about big leaps.",
      "Calm Under Pressure – Even financial challenges don’t rattle you easily."
    ],
    watchOut: [
      "Overly Restrictive – Allow some room for enjoyment.",
      "Missed Opportunities – A bit of healthy risk can pay off."
    ],
    products: [
      "Key Safe Checking® – Overdraft protection and fraud prevention for peace of mind.",
      "Laurel Road High Yield Savings – Steady, reliable growth with minimal surprises.",
      "Laurel Road Loan – Clear terms, predictable rates—ideal for risk-averse planning."
    ],
    emotions: [
      "Apprehension","Duty","Caution","Skepticism","Reserved",
      "Logic","Restraint","Practical","Realism","Grounded"
    ]
  }
};

/****************************************************
 * GLOBAL STATE
 ****************************************************/
let currentQuestionIndex = 0;
let selectedAnswers = new Array(questions.length).fill(null); // track chosen answers by question index

/****************************************************
 * ON WINDOW LOAD
 ****************************************************/
window.onload = function() {
  displayQuestion(currentQuestionIndex);
  document.getElementById("results-btn").style.display = "none";
  document.getElementById("prev-btn").style.display = "none"; // hide 'Previous' if first Q
};

/****************************************************
 * DISPLAY A QUESTION
 ****************************************************/
function displayQuestion(index) {
  const questionEl = document.getElementById("question-text");
  const answersEl = document.getElementById("answers-container");
  const nextBtn = document.getElementById("next-btn");
  const resultsBtn = document.getElementById("results-btn");
  const prevBtn = document.getElementById("prev-btn");

  // Clear old answers
  answersEl.innerHTML = "";

  const qObj = questions[index];
  questionEl.textContent = qObj.question;

  // Create radio options
  qObj.answers.forEach((ans, ansIdx) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question_${index}`;
    radio.value = ansIdx;

    // If user previously selected an answer, re-check it
    if (selectedAnswers[index] === ansIdx) {
      radio.checked = true;
    }

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + ans.text));
    answersEl.appendChild(label);
  });

  // If first question, hide Prev
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  // If last question, hide Next, show Results
  if (index < questions.length - 1) {
    nextBtn.style.display = "inline-block";
    resultsBtn.style.display = "none";
  } else {
    nextBtn.style.display = "none";
    resultsBtn.style.display = "inline-block";
  }

  updateQuestionTracker(index);
}

/****************************************************
 * UPDATE QUESTION TRACKER
 ****************************************************/
function updateQuestionTracker(index) {
  const trackerEl = document.getElementById("question-tracker");
  trackerEl.textContent = `${index + 1} of ${questions.length}`;
}

/****************************************************
 * GO TO NEXT QUESTION
 ****************************************************/
function goToNextQuestion() {
  saveCurrentAnswer();
  if (selectedAnswers[currentQuestionIndex] === null) {
    alert("Please select an answer before proceeding.");
    return;
  }
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

/****************************************************
 * GO TO PREVIOUS QUESTION
 ****************************************************/
function goToPreviousQuestion() {
  saveCurrentAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
}

/****************************************************
 * SAVE CURRENT ANSWER
 ****************************************************/
function saveCurrentAnswer() {
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );
  if (selectedOption) {
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }
}

/****************************************************
 * SHOW RESULTS
 ****************************************************/
function showResults() {
  saveCurrentAnswer();
  if (selectedAnswers[currentQuestionIndex] === null) {
    alert("Please select an answer before seeing results.");
    return;
  }

  // Build chosenEmotions from final chosen answers
  let chosenEmotions = [];
  for (let i = 0; i < questions.length; i++) {
    const ansIdx = selectedAnswers[i];
    if (ansIdx !== null) {
      chosenEmotions.push(...questions[i].answers[ansIdx].emotions);
    }
  }

  // Hide quiz
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  // Calculate final category
  const { sortedArray, winner } = calculateCategoryScores(chosenEmotions);
  displayFinalResults(winner, sortedArray);
}

/****************************************************
 * CALCULATE & SORT SCORES
 ****************************************************/
function calculateCategoryScores(emotions) {
  const tally = {};
  emotions.forEach(em => {
    tally[em] = (tally[em] || 0) + 1;
  });

  const catNames = Object.keys(categoriesData);
  let maxScore = 0;
  const scores = {};

  catNames.forEach(cat => {
    let catScore = 0;
    categoriesData[cat].emotions.forEach(e => {
      if (tally[e]) catScore += tally[e];
    });
    scores[cat] = catScore;
    if (catScore > maxScore) {
      maxScore = catScore;
    }
  });

  // handle tie
  const winners = catNames.filter(cat => scores[cat] === maxScore);
  let winner = winners.length > 1
    ? winners[Math.floor(Math.random() * winners.length)]
    : winners[0];

  // sort for bar chart descending
  const sortedArray = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { sortedArray, winner };
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(winner, sortedArray) {
  const catData = categoriesData[winner];

  // 1) Intro Paragraph
  const introParagraphEl = document.getElementById("intro-paragraph");
  introParagraphEl.textContent =
    "Finances touch our lives in personal ways and can often feel overwhelming. " +
    "At KeyBank, we celebrate the uniqueness of each individual’s approach to money, " +
    "so we can help you thrive in your financial life.";

  // 2) Second line: "With your responses in mind..."
  const introSecondLineEl = document.getElementById("intro-second-line");
  introSecondLineEl.textContent = `With your responses in mind, we think you are a ${catData.article} `;

  // 3) Category Name + Description
  const catNameEl = document.getElementById("category-name");
  catNameEl.textContent = catData.name;

  const catDescEl = document.getElementById("category-description");
  catDescEl.innerHTML = catData.description;

  // 4) Build bars
  buildDistributionBars(sortedArray, winner);

  // 5) Insights
  const excelList = document.getElementById("excel-list");
  excelList.innerHTML = "";
  catData.excel.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    excelList.appendChild(li);
  });

  const watchoutList = document.getElementById("watchout-list");
  watchoutList.innerHTML = "";
  catData.watchOut.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    watchoutList.appendChild(li);
  });

  // 6) Product Recommendations
  const productsTitle = document.getElementById("products-title");
  productsTitle.textContent = catData.headingForProducts;

  const productContainer = document.getElementById("product-recommendations");
  productContainer.innerHTML = "";
  catData.products.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    const title = document.createElement("h5");
    title.textContent = prod.split("–")[0].trim();

    const detail = document.createElement("p");
    detail.textContent = prod.split("–")[1]
      ? prod.split("–")[1].trim()
      : "";

    const button = document.createElement("button");
    button.className = "product-btn";
    button.textContent = "Learn More";

    card.appendChild(title);
    card.appendChild(detail);
    card.appendChild(button);
    productContainer.appendChild(card);
  });
}

/****************************************************
 * BUILD DISTRIBUTION BARS
 ****************************************************/
function buildDistributionBars(sortedArray, winner) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0);
  const catBarContainer = document.getElementById("category-bars");
  catBarContainer.innerHTML = "";

  sortedArray.forEach(([cat, score]) => {
    const barRow = document.createElement("div");
    barRow.className = "category-bar";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = cat.toUpperCase();

    // only add + toggle for non-winners
    if (cat !== winner) {
      const toggle = document.createElement("span");
      toggle.className = "expand-toggle";
      toggle.textContent = "+";
      toggle.onclick = () => toggleShortSummary(cat, toggle);
      label.appendChild(toggle);
    }

    const barBg = document.createElement("div");
    barBg.className = "bar-bg";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    let pct = total === 0 ? 0 : Math.round((score / total) * 100);
    fill.style.width = pct + "%";

    const barPercent = document.createElement("div");
    barPercent.className = "bar-percent";
    barPercent.textContent = pct + "%";

    barBg.appendChild(fill);
    barRow.appendChild(label);
    barRow.appendChild(barBg);
    barRow.appendChild(barPercent);

    catBarContainer.appendChild(barRow);

    // short summary for non-winners
    if (cat !== winner) {
      const shortBox = document.createElement("div");
      shortBox.id = `short-${cat}`;
      shortBox.className = "short-summary";
      shortBox.textContent = categoriesData[cat].shortDescription;
      catBarContainer.appendChild(shortBox);
    }
  });
}

/****************************************************
 * TOGGLE SHORT SUMMARY
 ****************************************************/
function toggleShortSummary(cat, toggleSpan) {
  const summaryDiv = document.getElementById(`short-${cat}`);
  if (!summaryDiv) return;

  if (summaryDiv.style.display === "block") {
    summaryDiv.style.display = "none";
    toggleSpan.textContent = "+";
  } else {
    summaryDiv.style.display = "block";
    toggleSpan.textContent = "−";
  }
}
