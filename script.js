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
 * CATEGORY DEFINITIONS 
 * (Now using "strengths" and "weaknesses" arrays)
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
    shortDescription: `
      Planners focus on structured routines and detailed goal-setting to ensure 
      financial stability, excelling at avoiding costly surprises. While a tendency to 
      overthink can slow decisions, this disciplined approach provides peace of mind 
      and fosters steady, long-term security.
    `,
    strengths: [
      "As a Planner, you excel at Long-Term Strategizing—budgets and schedules are your superpower.",
      "Being a Planner helps you stay Risk-Averse—you’d rather carefully analyze than leap blindly into decisions.",
      "Because you’re a Planner, you maintain an Organized approach—spreadsheets, lists, and well-defined goals keep you on track."
    ],
    weaknesses: [
      "Because you’re a Planner, Overthinking can hold you back—sometimes it’s okay to act on impulse.",
      "Being a Planner can lead to Paralysis by Analysis—too much planning can stall your forward progress.",
      "As a Planner, Limited Adaptability can be an issue—last-minute changes or surprises may feel uncomfortable."
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
    strengths: [
      "As an Adventurer, you’re a Bold Decision-Maker—you jump on opportunities before they slip away.",
      "Being an Adventurer means you’re Curious and Open-Minded—always seeking new ways to grow.",
      "Because you’re an Adventurer, you’re an Optimistic Risk-Taker—trusting your instincts even when stepping into the unknown."
    ],
    weaknesses: [
      "Because you’re an Adventurer, Balancing Fun with Goals can be tricky—it’s still important to save for the future.",
      "Being an Adventurer can lead to Impulse Spending—a set “fun money” budget can help you stay in control.",
      "As an Adventurer, FOMO-Fueled Choices may arise—fear of missing out can rush your decisions."
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
    strengths: [
      "As a Connector, you’re Community-Focused—caring deeply about helping others succeed.",
      "Being a Connector keeps you Collaborative—pooling resources and sharing wins is your ideal approach.",
      "Because you’re a Connector, a Generous Spirit guides your choices—giving is part of who you are."
    ],
    weaknesses: [
      "Because you’re a Connector, Overextending Yourself can become a problem—your finances need protection too.",
      "Being a Connector leads to Difficulty Saying No—it’s impossible to help everyone all the time.",
      "As a Connector, you might prefer Conflict Avoidance—preserving harmony can overshadow tough but necessary conversations."
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
    strengths: [
      "As a Realist, you’re a Clear-Eyed Investor—you see facts over hype and follow what works.",
      "Being a Realist means you’re an expert Risk-Manager—you keep spending and investing decisions grounded.",
      "Because you’re a Realist, you maintain a Level-Headed approach—rarely impulsive, you weigh outcomes before acting."
    ],
    weaknesses: [
      "Because you’re a Realist, Missing Opportunities can happen—a small risk might sometimes pay off.",
      "Being a Realist can lead to Over-Caution—progress often requires stepping out of your comfort zone.",
      "As a Realist, you might adopt a Rigid Mindset—preferring only proven methods can limit innovative solutions."
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

  // handle tie scenario for the "winner"
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

  // 5) Dynamic Strengths & Weaknesses
  // Figure out which categories are "top" until we reach or exceed 80%,
  // unless there's a special scenario: if all 4 are tied or top cat >=80%, etc.
  const topCats = determineTopCategories(sortedArray);

  // Build the final sets of strengths and weaknesses from those top categories
  const finalStrengths = selectStrengths(topCats, sortedArray);
  const finalWeaknesses = selectWeaknesses(topCats, sortedArray);

  // Clear the old lists
  const excelList = document.getElementById("excel-list");
  excelList.innerHTML = "";
  finalStrengths.forEach(str => {
    const li = document.createElement("li");
    li.textContent = str;
    excelList.appendChild(li);
  });

  const watchoutList = document.getElementById("watchout-list");
  watchoutList.innerHTML = "";
  finalWeaknesses.forEach(wk => {
    const li = document.createElement("li");
    li.textContent = wk;
    watchoutList.appendChild(li);
  });

  // 6) Products (based on the single "winner" category)
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
 * DETERMINE THE TOP CATEGORIES TO REACH >=80%
 * Special cases:
 *  - If top cat >= 80%, only that cat
 *  - If all are tied, show all (1 strength each, etc.)
 *  - Else accumulate categories until sum >= 80
 ****************************************************/
function determineTopCategories(sortedArray) {
  // Check if total is zero to avoid division by zero
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;

  // If all are tied (and none are zero)
  const allTied = sortedArray.every(([_, score]) => score === sortedArray[0][1]) && sortedArray[0][1] > 0;
  if (allTied && sortedArray.length === 4) {
    // All 4 categories are tied and have nonzero score
    return sortedArray.map(([cat]) => cat);
  }

  const topCatPct = (sortedArray[0][1] / total) * 100;
  if (topCatPct >= 80) {
    // Only the top category if it's 80% or more
    return [sortedArray[0][0]];
  }

  // Otherwise accumulate until sum >= 80
  let runningPct = 0;
  let resultCats = [];
  for (let i = 0; i < sortedArray.length; i++) {
    const [cat, score] = sortedArray[i];
    let pct = (score / total) * 100;
    runningPct += pct;
    resultCats.push(cat);
    if (runningPct >= 80) break;
  }

  return resultCats;
}

/****************************************************
 * SELECT STRENGTHS (Max 3 total, or 4 if all are tied).
 * E.g. if topCats = [Realist, Connector], we might show 2 from Realist, 1 from Connector.
 * If we have 3 or 4 cats, we spread them. If all 4 are tied => show 4 total (1 each).
 ****************************************************/
function selectStrengths(topCats, sortedArray) {
  // If we have 4 cats and they're all tied, the user wants 1 from each.
  if (topCats.length === 4) {
    // 1 from each category
    return topCats.map(cat => categoriesData[cat].strengths[0]);
  }

  // Otherwise we aim for 3 total
  return distributeItems(topCats, sortedArray, "strengths", 3);
}

/****************************************************
 * SELECT WEAKNESSES (Same logic as strengths)
 ****************************************************/
function selectWeaknesses(topCats, sortedArray) {
  if (topCats.length === 4) {
    // 1 from each category
    return topCats.map(cat => categoriesData[cat].weaknesses[0]);
  }
  return distributeItems(topCats, sortedArray, "weaknesses", 3);
}

/****************************************************
 * DISTRIBUTE items among top cats, up to a totalCount (3).
 * Example:
 *   If we have topCats = [Realist, Connector] with scores 50% and 30%,
 *   that sums to 80%. We'll show 2 from Realist, 1 from Connector.
 ****************************************************/
function distributeItems(topCats, sortedArray, keyName, totalCount) {
  // Build a map of cat -> score
  let total = 0;
  const catScoreMap = {};
  sortedArray.forEach(([cat, score]) => {
    if (topCats.includes(cat)) {
      catScoreMap[cat] = score;
      total += score;
    }
  });

  // If total is 0, just bail out
  if (!total) {
    // Possibly user never answered?
    // Return an empty array or default
    return [];
  }

  // We'll allocate [0, totalCount] items across topCats based on proportion
  let distribution = {};
  let leftover = totalCount;

  // First pass: floor distribution
  topCats.forEach(cat => {
    const catPct = catScoreMap[cat] / total;
    const rawCount = Math.floor(totalCount * catPct);
    distribution[cat] = rawCount;
    leftover -= rawCount;
  });

  // Second pass: allocate leftover to categories with highest score first
  // so e.g. if Realist is bigger portion, it gets leftover first
  const sortedByScore = topCats.slice().sort((a, b) => catScoreMap[b] - catScoreMap[a]);
  for (let cat of sortedByScore) {
    if (leftover > 0) {
      distribution[cat]++;
      leftover--;
    }
  }

  // Construct final list from each category in priority
  const finalList = [];
  topCats.forEach(cat => {
    const count = distribution[cat];
    // e.g. categoriesData[cat].strengths or .weaknesses
    const arr = categoriesData[cat][keyName];
    // slice the top priority items
    const subset = arr.slice(0, count);
    finalList.push(...subset);
  });

  return finalList;
}

/****************************************************
 * BUILD DISTRIBUTION BARS
 ****************************************************/
function buildDistributionBars(sortedArray, winner) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
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

    let pct = Math.round((score / total) * 100);
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
