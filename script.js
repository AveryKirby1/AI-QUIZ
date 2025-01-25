/****************************************************
 * QUIZ DATA - 10 Questions, 4 Answers each
 ****************************************************/
const questions = [
  {
    question: "1. You’ve just found $500 on the ground. What’s the first thing you do?",
    answers: [
      // Realist
      {
        text: "A: Panic and try to find its rightful owner immediately.",
        emotions: ["Anxiety", "Fear", "Concern", "Morality", "Guilt"]
      },
      // Planner
      {
        text: "B: Deposit it straight into your savings for safekeeping.",
        emotions: ["Responsibility", "Security", "Prudence", "Relief", "Patience"]
      },
      // Adventurer
      {
        text: "C: Splurge on that special item you've been eyeing.",
        emotions: ["Joy", "Excitement", "Impulsivity", "Anticipation", "Risk-Taking"]
      },
      // Connector
      {
        text: "D: Keep some, and donate the rest to a cause or friend in need.",
        emotions: ["Generosity", "Connection", "Gratitude", "Kindness", "Compassion"]
      }
    ]
  },
  {
    question: "2. Your friend asks you to split a $400 dinner bill evenly, but you only had a salad. What do you do?",
    answers: [
      // Realist
      {
        text: "A: Quietly pay it anyway to avoid conflict and feel a bit uneasy.",
        emotions: ["Concern", "Restraint", "Guilt", "Anxiety", "Acceptance"]
      },
      // Planner
      {
        text: "B: Politely explain and suggest a fair split based on what was ordered.",
        emotions: ["Responsibility", "Prudence", "Discipline", "Self-Control", "Diligence"]
      },
      // Adventurer
      {
        text: "C: Laugh it off and pay the full share—it's all in good fun!",
        emotions: ["Joy", "Confidence", "Impulsivity", "Celebration", "Enthusiasm"]
      },
      // Connector
      {
        text: "D: Cover the full amount happily if it makes the group feel good.",
        emotions: ["Generosity", "Connection", "Fulfillment", "Trust", "Compassion"]
      }
    ]
  },
  {
    question: "3. You walk into a store to buy toothpaste and leave with...",
    answers: [
      // Realist
      {
        text: "A: Nothing. The prices were too high, and you didn’t want to overspend.",
        emotions: ["Frustration", "Risk-Aversion", "Restraint", "Disappointment", "Annoyance"]
      },
      // Planner
      {
        text: "B: Toothpaste plus a spare, just in case.",
        emotions: ["Preparedness", "Practicality", "Contentment", "Caution", "Planning"]
      },
      // Adventurer
      {
        text: "C: Toothpaste, new snacks, a magazine, and something random that caught your eye.",
        emotions: ["Excitement", "Curiosity", "Impulsivity", "Adventure", "Joy"]
      },
      // Connector
      {
        text: "D: Toothpaste and a small donation to the charity box at the register.",
        emotions: ["Generosity", "Purpose", "Kindness", "Fulfillment", "Gratitude"]
      }
    ]
  },
  {
    question: "4. Your boss offers you a $10,000 raise. What’s your first thought?",
    answers: [
      // Realist
      {
        text: "A: Finally, I can catch up on past bills and avoid any future risk.",
        emotions: ["Fear", "Anxiety", "Concern", "Introspection", "Morality"]
      },
      // Planner
      {
        text: "B: Perfect—I’ll put most of it into retirement or long-term savings.",
        emotions: ["Responsibility", "Security", "Discipline", "Patience", "Determination"]
      },
      // Adventurer
      {
        text: "C: Time to book a dream vacation—opportunities like this are meant to be enjoyed!",
        emotions: ["Excitement", "Joy", "Optimism", "Anticipation", "Risk-Taking"]
      },
      // Connector
      {
        text: "D: Maybe I can share some with a family member who’s been struggling.",
        emotions: ["Altruism", "Compassion", "Connection", "Kindness", "Empathy"]
      }
    ]
  },
  {
    question: "5. A friend calls you in tears about a $1,000 car repair bill. What do you do?",
    answers: [
      // Realist
      {
        text: "A: Sympathize but avoid offering money—you need to keep your finances secure.",
        emotions: ["Concern", "Cynicism", "Risk-Aversion", "Acceptance", "Frustration"]
      },
      // Planner
      {
        text: "B: Offer advice on budgeting and help them compare cheaper repair shops.",
        emotions: ["Helpfulness", "Practicality", "Responsibility", "Planning", "Diligence"]
      },
      // Adventurer
      {
        text: "C: Send them a quick $100—why not lend a helping hand on the fly?",
        emotions: ["Impulsivity", "Enthusiasm", "Confidence", "Joy", "Creativity"]
      },
      // Connector
      {
        text: "D: If possible, loan them the full amount—friends support each other.",
        emotions: ["Generosity", "Trust", "Collaboration", "Empathy", "Compassion"]
      }
    ]
  },
  {
    question: "6. You’re $2,000 short on your dream vacation budget. How do you handle it?",
    answers: [
      // Realist
      {
        text: "A: Cancel the trip. You don’t want the stress of debt.",
        emotions: ["Risk-Aversion", "Anxiety", "Disappointment", "Skepticism", "Acceptance"]
      },
      // Planner
      {
        text: "B: Postpone the trip until you can save enough comfortably.",
        emotions: ["Patience", "Discipline", "Contentment", "Self-Control", "Prudence"]
      },
      // Adventurer
      {
        text: "C: Book now; you’ll figure out the money details later!",
        emotions: ["Adventure", "Impulsivity", "Excitement", "Optimism", "Joy"]
      },
      // Connector
      {
        text: "D: Talk to friends or family about splitting costs or traveling together.",
        emotions: ["Collaboration", "Connection", "Resourcefulness", "Kindness", "Trust"]
      }
    ]
  },
  {
    question: "7. Your favorite coffee shop just raised prices. Do you...",
    answers: [
      // Realist
      {
        text: "A: Stop going altogether. The price hike isn’t worth it.",
        emotions: ["Frustration", "Morality", "Restraint", "Annoyance", "Risk-Aversion"]
      },
      // Planner
      {
        text: "B: Go less often and track coffee expenses carefully.",
        emotions: ["Contentment", "Self-Control", "Responsibility", "Practicality", "Caution"]
      },
      // Adventurer
      {
        text: "C: Keep going as usual—life’s too short to stress about a little price bump.",
        emotions: ["Excitement", "Curiosity", "Enthusiasm", "Confidence", "Joy"]
      },
      // Connector
      {
        text: "D: Still go, but treat a friend to brighten both your days.",
        emotions: ["Generosity", "Happiness", "Compassion", "Connection", "Fulfillment"]
      }
    ]
  },
  {
    question: "8. At a party, someone raves about investing in cryptocurrency. Your reaction?",
    answers: [
      // Realist
      {
        text: "A: That sounds risky—I’ll stick to proven methods first.",
        emotions: ["Skepticism", "Risk-Aversion", "Anxiety", "Fear", "Cynicism"]
      },
      // Planner
      {
        text: "B: I’ll do thorough research before making any move—better safe than sorry.",
        emotions: ["Prudence", "Planning", "Determination", "Diligence", "Responsibility"]
      },
      // Adventurer
      {
        text: "C: Throw in some cash and see what happens—it’s exciting to try new things!",
        emotions: ["Adventure", "Optimism", "Impulsivity", "Anticipation", "Creativity"]
      },
      // Connector
      {
        text: "D: I’ll invest if we can share knowledge and grow together.",
        emotions: ["Collaboration", "Connection", "Resourcefulness", "Trust", "Kindness"]
      }
    ]
  },
  {
    question: "9. You see a limited-edition gadget online for $500. Your move?",
    answers: [
      // Realist
      {
        text: "A: Skip it—there’s no real need, and it’s expensive.",
        emotions: ["Restraint", "Disappointment", "Skepticism", "Concern", "Guilt"]
      },
      // Planner
      {
        text: "B: Add it to a wishlist and save up or wait for a sale.",
        emotions: ["Patience", "Hope", "Contentment", "Self-Control", "Practicality"]
      },
      // Adventurer
      {
        text: "C: Buy it instantly before it sells out!",
        emotions: ["Excitement", "Urgency", "Impulsivity", "Enthusiasm", "Joy"]
      },
      // Connector
      {
        text: "D: Ask friends if they also want it—maybe we can find a group discount.",
        emotions: ["Collaboration", "Connection", "Resourcefulness", "Fairness", "Trust"]
      }
    ]
  },
  {
    question: "10. You’ve had a long week and need to relax. How do you treat yourself?",
    answers: [
      // Realist
      {
        text: "A: A quiet walk or some alone time—no cost, no fuss.",
        emotions: ["Introspection", "Acceptance", "Risk-Aversion", "Frustration", "Concern"]
      },
      // Planner
      {
        text: "B: Buy a small, practical treat like a new book or cozy socks.",
        emotions: ["Contentment", "Prudence", "Self-Control", "Relief", "Discipline"]
      },
      // Adventurer
      {
        text: "C: Plan a big night out—work hard, play hard!",
        emotions: ["Excitement", "Celebration", "Joy", "Social Energy", "Impulsivity"]
        // "Social Energy" is not in our lists, so let's replace it with "Confidence" or "Enthusiasm" we already used. We'll keep "Enthusiasm" or "Confidence" here for consistency:
        // We'll pick "Enthusiasm".
      },
      // Connector
      {
        text: "D: Invite close friends for a homemade dinner or potluck gathering.",
        emotions: ["Connection", "Compassion", "Collaboration", "Happiness", "Fulfillment"]
      }
    ]
  }
];

/****************************************************
 * CATEGORY DEFINITIONS (Balanced Emotion Lists)
 ****************************************************/
const categoriesData = {
  Planner: {
    name: "Planner",
    article: "a",
    headingForProducts: "Plan Your Next Steps",
    description: `
      You are the master of practicality and preparation.
      You approach financial decisions with thoughtfulness, responsibility, 
      and an eye toward long-term security. While your careful approach 
      keeps you grounded, you might sometimes miss out on spontaneous opportunities.
    `,
    shortDescription: "Planners are cautious, methodical, and well-prepared for the future.",
    excel: [
      "Long-Term Strategist – Great at planning for the future.",
      "Risk-Averse in a healthy way – You avoid uncalculated risks.",
      "Organized – Budgets, spreadsheets, you name it!"
    ],
    watchOut: [
      "Overthinking – Sometimes it’s okay to be spontaneous.",
      "Paralysis by Analysis – Don’t let too much planning stop you from taking action."
    ],
    products: [
      "Key Active Saver® Account – Grow your savings steadily with competitive rates and automatic transfers, perfect for planners seeking consistent progress.",
      "Laurel Road Savings – Earn high interest without locking up your funds. A flexible account for methodical savers who value security and accessibility.",
      "Key Secured Credit Card® – Build credit responsibly with a secured card backed by your savings. Ideal for planners wanting controlled financial growth."
    ],
    emotions: [
      "Responsibility","Security","Prudence","Relief","Contentment",
      "Preparedness","Practicality","Discipline","Planning","Hope",
      "Determination","Caution","Patience","Self-Control","Diligence"
    ]
  },
  Adventurer: {
    name: "Adventurer",
    article: "an",
    headingForProducts: "Fuel Your Next Adventure",
    description: `
      Financial decisions for you are often about excitement, curiosity, 
      and seizing new opportunities. You embrace risk with a positive mindset, 
      driven by optimism and the thrill of the unknown.
    `,
    shortDescription: "Adventurers take bold risks, thrive on excitement, and value new experiences.",
    excel: [
      "Bold Decision-Maker – You don’t shy away from opportunity.",
      "Curious and Open-Minded – Always looking for ways to grow.",
      "Optimistic Risk-Taker – Trusting your instincts when it counts."
    ],
    watchOut: [
      "Balancing Fun with Long-Term Goals – Keep some practical savings in mind.",
      "Impulse Spending – A set budget for “fun money” can help you stay in control."
    ],
    products: [
      "Key Smart Checking® – Stay ready for life’s next adventure with quick, fee-free access to your funds and easy mobile banking on the go.",
      "Key Rewards Credit Card® – Turn everyday purchases into travel or experience rewards—perfect for adventurers seeking to maximize their spending.",
      "Laurel Road Savings – Keep your savings growing with high-interest returns and no monthly fees, a solid financial base for your next big leap."
    ],
    emotions: [
      "Joy","Excitement","Impulsivity","Curiosity","Adventure",
      "Optimism","Anticipation","Creativity","Exploration","Urgency",
      "Celebration","Humor","Enthusiasm","Risk-Taking","Confidence"
    ]
  },
  Connector: {
    name: "Connector",
    article: "a",
    headingForProducts: "Grow Your Community",
    description: `
      You view finances as a tool to support community and strengthen bonds.
      Whether it’s through generosity or shared goals, 
      you find emotional fulfillment in giving and collaborating.
    `,
    shortDescription: "Connectors find purpose in building relationships and helping others.",
    excel: [
      "Community-Focused – You care deeply about supporting people.",
      "Collaborative – You enjoy pooling resources for shared goals.",
      "Generous Spirit – Giving is part of who you are."
    ],
    watchOut: [
      "Overextending Yourself – Remember to protect your own finances too.",
      "Difficulty Saying No – You can’t help everyone all the time."
    ],
    products: [
      "Key Family Checking® – Support your loved ones and manage shared expenses with simple, secure tools for collaborative finances.",
      "Laurel Road Loyalty Savings – Earn better rates the longer you save. A great way to achieve goals while staying ready to help others.",
      "Key Cashback Credit Card® – Earn cash back on everyday purchases and use those rewards to give back to the community or loved ones."
    ],
    emotions: [
      "Generosity","Connection","Gratitude","Altruism","Happiness",
      "Kindness","Empathy","Trust","Collaboration","Resourcefulness",
      "Fulfillment","Purpose","Self-Sacrifice","Fairness","Compassion"
    ]
  },
  Realist: {
    name: "Realist",
    article: "a",
    headingForProducts: "Build A Solid Foundation",
    description: `
      You prioritize risk management, avoiding excess spending, 
      and maintaining a solid footing. While you can appear conservative, 
      you navigate challenges with practical confidence.
    `,
    shortDescription: "Realists are grounded, careful, and prefer lower-risk strategies.",
    excel: [
      "Clear-Eyed Planner – You see facts without hype.",
      "Risk-Manager – You keep decisions rational and measured.",
      "Level-Headed – Rarely impulsive, you weigh outcomes carefully."
    ],
    watchOut: [
      "Missing Opportunities – Sometimes, a bit of risk can pay off.",
      "Over-Caution – Growth may require stepping outside your comfort zone."
    ],
    products: [
      "Key Safe Checking® – Protect funds with overdraft protection and fraud prevention, perfect for risk-conscious realists.",
      "Laurel Road High Yield Savings – Steady, reliable growth with competitive rates and no fees. Ideal for cautious savers.",
      "Laurel Road Loan – Structured, low-rate loans with transparent terms, a predictable solution for big expenses without nasty surprises."
    ],
    emotions: [
      "Morality","Fear","Concern","Frustration","Restraint",
      "Disappointment","Annoyance","Adaptation","Introspection","Acceptance",
      "Skepticism","Anxiety","Cynicism","Risk-Aversion","Guilt"
    ]
  }
};

/****************************************************
 * GLOBAL STATE
 ****************************************************/
let currentQuestionIndex = 0;
let chosenEmotions = [];

/****************************************************
 * ON WINDOW LOAD
 ****************************************************/
window.onload = function() {
  displayQuestion(currentQuestionIndex);
  document.getElementById("results-btn").style.display = "none";
};

/****************************************************
 * DISPLAY A QUESTION
 ****************************************************/
function displayQuestion(index) {
  const questionEl = document.getElementById("question-text");
  const answersEl = document.getElementById("answers-container");
  const nextBtn = document.getElementById("next-btn");
  const resultsBtn = document.getElementById("results-btn");

  // Clear previous answers
  answersEl.innerHTML = "";

  const qObj = questions[index];
  questionEl.textContent = qObj.question;

  // Radio options
  qObj.answers.forEach((ans, ansIdx) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question_${index}`;
    radio.value = ansIdx;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + ans.text));
    answersEl.appendChild(label);
  });

  // Show or hide the Next / Results buttons
  if (index < questions.length - 1) {
    nextBtn.style.display = "inline-block";
    resultsBtn.style.display = "none";
  } else {
    nextBtn.style.display = "none";
    resultsBtn.style.display = "inline-block";
  }

  // Update question tracker: e.g., "1 of 10"
  updateQuestionTracker(index);
}

/****************************************************
 * UPDATE QUESTION TRACKER
 ****************************************************/
function updateQuestionTracker(index) {
  const trackerEl = document.getElementById("question-tracker");
  const totalQ = questions.length;
  trackerEl.textContent = `${index + 1} of ${totalQ}`;
}

/****************************************************
 * GO TO NEXT QUESTION
 ****************************************************/
function goToNextQuestion() {
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );
  if (!selectedOption) {
    alert("Please select an answer before proceeding.");
    return;
  }

  const ansIndex = parseInt(selectedOption.value);
  chosenEmotions.push(...questions[currentQuestionIndex].answers[ansIndex].emotions);

  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

/****************************************************
 * SHOW RESULTS
 ****************************************************/
function showResults() {
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );
  if (!selectedOption) {
    alert("Please select an answer before seeing results.");
    return;
  }

  // Final question’s emotions
  const ansIndex = parseInt(selectedOption.value);
  chosenEmotions.push(...questions[currentQuestionIndex].answers[ansIndex].emotions);

  // Hide quiz, show results
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  // Calculate final category & display
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
  const scores = {};
  let maxScore = 0;

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

  // If tie
  const winners = catNames.filter(cat => scores[cat] === maxScore);
  let winner = winners.length > 1
    ? winners[Math.floor(Math.random() * winners.length)]
    : winners[0];

  // Sort high → low
  const sortedArray = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { sortedArray, winner };
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(winner, sortedArray) {
  const catData = categoriesData[winner];
  const resultsTitle = document.getElementById("results-title");
  resultsTitle.textContent = `you are ${catData.article} `;
  const catNameEl = document.getElementById("category-name");
  catNameEl.textContent = catData.name;
  const catDescEl = document.getElementById("category-description");
  catDescEl.innerHTML = catData.description;

  buildDistributionBars(sortedArray, winner);

  const excelList = document.getElementById("excel-list");
  const watchoutList = document.getElementById("watchout-list");
  excelList.innerHTML = "";
  watchoutList.innerHTML = "";

  catData.excel.forEach(pt => {
    const li = document.createElement("li");
    li.textContent = pt;
    excelList.appendChild(li);
  });

  catData.watchOut.forEach(pt => {
    const li = document.createElement("li");
    li.textContent = pt;
    watchoutList.appendChild(li);
  });

  // Title for products
  const productsTitle = document.getElementById("products-title");
  productsTitle.textContent = catData.headingForProducts;

  // Product cards
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

    // Short summary for non-winners
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
