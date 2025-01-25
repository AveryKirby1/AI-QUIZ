// script.js

/****************************************************
 * QUIZ DATA - 10 Questions in Full
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
        text: "C: Laugh it off and cover the full share—it’s an entertaining story.",
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
 * CATEGORY DEFINITIONS (Updated Summaries + Short Descriptions)
 ****************************************************/
const categoriesData = {
  Planner: {
    name: "Planner",
    article: "a",
    headingForProducts: "Plan Your Next Steps",
    description: `
      You are the master of practicality and preparation. You approach financial decisions 
      with thoughtfulness, responsibility, and an eye toward long-term security. While your 
      careful approach keeps you grounded, you might sometimes miss out on spontaneous 
      opportunities. You thrive on structure and routine, preferring to plan each step to 
      avoid surprises. By setting clear goals and budgets, you gain peace of mind and a 
      sense of accomplishment.
    `,
    // This shortDescription is displayed for non-winners if user clicks '+'
    shortDescription: `
      Planners focus on structured routines and detailed goal-setting to ensure 
      financial stability, excelling at avoiding costly surprises. While a tendency to 
      overthink can slow decisions, this disciplined approach provides peace of mind 
      and fosters steady, long-term security.
    `,
    excel: [
      "Long-Term Strategist – Great at planning for the future.",
      "Risk-Averse – You avoid uncalculated risks and stay balanced.",
      "Organized – Budgets, spreadsheets, you name it!"
    ],
    watchOut: [
      "Overthinking – Sometimes it’s okay to be spontaneous.",
      "Paralysis by Analysis – Don’t let too much planning stop you from taking action."
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
      Financial decisions for you are often about excitement, curiosity, 
      and seizing new opportunities. You embrace risk with a positive mindset, 
      driven by optimism and the thrill of the unknown. Each financial challenge 
      is a chance to explore fresh possibilities, and you rarely shy away from 
      trying something new. You see setbacks as growth opportunities, fueling 
      your eagerness to keep pushing boundaries.
    `,
    shortDescription: `
      Adventurers thrive on excitement and are quick to explore new financial 
      possibilities, guided by an optimistic spirit. Though impulsive choices 
      may arise, balancing spontaneity with prudent planning sustains momentum 
      and protects against the downsides of taking bold risks.
    `,
    excel: [
      "Bold Decision-Maker – Not afraid to jump on an opportunity.",
      "Curious and Open-Minded – Always looking for ways to grow.",
      "Optimistic Risk-Taker – Trusting your instincts."
    ],
    watchOut: [
      "Balancing Fun with Long-Term Goals – Keep some practical savings in mind.",
      "Impulse Spending – A set budget for 'fun money' can help you stay in control."
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
      You view finances as a tool to support your community and bond with others. 
      Whether it’s through generosity or lending a helping hand, you find emotional 
      satisfaction in giving back. Working together toward common goals brings you 
      genuine joy, and you take pride in uplifting those around you. In your mind, 
      money only has true value when it’s used to strengthen relationships and 
      foster goodwill.
    `,
    shortDescription: `
      Connectors treat finances as a means to strengthen bonds and nurture communal 
      goals, emphasizing generosity and shared victories. A highly giving nature 
      can lead to overextension, but mindful boundaries preserve both personal 
      well-being and the desire to uplift others.
    `,
    excel: [
      "Community-Focused – You care deeply about helping others.",
      "Collaborative – You enjoy pooling resources for shared goals.",
      "Generous Spirit – Giving is part of who you are."
    ],
    watchOut: [
      "Overextending Yourself – Remember to protect your own finances too.",
      "Difficulty Saying No – You can’t help everyone all the time."
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
      You prioritize managing risk, avoiding unnecessary spending, and protecting resources. 
      While your approach may appear conservative, it helps you navigate challenges with 
      confidence. You prefer stable, dependable strategies over flashy risks, trusting solid 
      data and proven methods. This mindset keeps you prepared, ensuring you can handle both 
      the ups and downs of your financial journey.
    `,
    shortDescription: `
      Realists favor low-risk, dependable strategies to protect resources, guided by caution 
      and clear data. While they may pass up certain prospects, measured openness to calculated 
      risk can uncover worthwhile gains, ensuring security without sacrificing every chance 
      for growth.
    `,
    excel: [
      "Clear-Eyed Investor – You avoid hype and see the facts.",
      "Risk-Manager – You keep spending and investing decisions rational.",
      "Level-Headed – Rarely impulsive, you consider outcomes carefully."
    ],
    watchOut: [
      "Missing Opportunities – Sometimes, a small risk pays off.",
      "Over-Caution – Growth can require stepping outside your comfort zone."
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
let selectedAnswers = new Array(questions.length).fill(null);

/****************************************************
 * ON WINDOW LOAD
 ****************************************************/
window.onload = function() {
  displayQuestion(currentQuestionIndex);
  document.getElementById("results-btn").style.display = "none";
  document.getElementById("prev-btn").style.display = "none";
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

    // If user had previously selected this answer
    if (selectedAnswers[index] === ansIdx) {
      radio.checked = true;
    }

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + ans.text));
    answersEl.appendChild(label);
  });

  // Hide 'Previous' if on first question
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  // Show Next or Results
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

  // Gather chosen emotions
  let chosenEmotions = [];
  for (let i = 0; i < questions.length; i++) {
    const ansIdx = selectedAnswers[i];
    if (ansIdx !== null) {
      chosenEmotions.push(...questions[i].answers[ansIdx].emotions);
    }
  }

  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  const { sortedArray, winner } = calculateCategoryScores(chosenEmotions);
  displayFinalResults(winner, sortedArray);
}

/****************************************************
 * CALCULATE CATEGORY SCORES (Tie-Break Logic)
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

  // sort descending for distribution bars
  let sortedArray = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  // ensure chosen winner is top of the chart
  const winnerIndex = sortedArray.findIndex(([cat]) => cat === winner);
  if (winnerIndex > 0) {
    const [wKey, wScore] = sortedArray.splice(winnerIndex, 1)[0];
    sortedArray.unshift([wKey, wScore]);
  }

  return { sortedArray, winner };
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(winner, sortedArray) {
  const catData = categoriesData[winner];

  // 1) Intro paragraph
  const introParagraphEl = document.getElementById("intro-paragraph");
  introParagraphEl.textContent =
    "Finances touch our lives in personal ways and can often feel overwhelming. " +
    "At KeyBank, we celebrate the uniqueness of each individual’s approach to money, " +
    "so we can help you thrive in your financial life.";

  // 2) "With your responses in mind, we think you are a/an"
  const introSecondLineEl = document.getElementById("intro-second-line");
  introSecondLineEl.textContent = `With your responses in mind, we think you are ${catData.article}`;

  // 3) Category name and description
  document.getElementById("category-name").textContent = catData.name;
  document.getElementById("category-description").innerHTML = catData.description;

  // 4) Distribution bars
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

  // 6) Products
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
    detail.textContent = prod.split("–")[1] ? prod.split("–")[1].trim() : "";

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

  // index 0 is the winner
  sortedArray.forEach(([cat, score], idx) => {
    const barRow = document.createElement("div");
    barRow.className = "category-bar";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = cat.toUpperCase();

    // only show expand toggle for non-winners
    if (idx !== 0) {
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

    // short summary for non-winners only
    if (idx !== 0) {
      const shortBox = document.createElement("div");
      shortBox.id = `short-${cat}`;
      shortBox.className = "short-summary";
      shortBox.textContent = categoriesData[cat].shortDescription.trim();
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
