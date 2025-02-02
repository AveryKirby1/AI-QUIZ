// script.js

/****************************************************
 * QUIZ DATA (10 Questions) - Multiple Selections + Tie logic
 ****************************************************/
const questions = [
  {
    question: "1. You’ve just found $500 on the ground. What’s the first thing you do? (Select all that apply)",
    answers: [
      {
        text: "A: Try to find the rightful owner; if you can’t, well, finders keepers.",
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
    question: "2. Your friend asks you to split a $400 dinner bill evenly, but you only had a salad. What do you do? (Select all that apply)",
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
        text: "D: Pay the full amount now, trusting they’ll pick up the tab next time.",
        emotions: ["Harmony", "Collaboration", "Warmth", "Connection", "Sharing"]
      }
    ]
  },
  {
    question: "3. You walk into a store to buy toothpaste and leave with... (Select all that apply)",
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
    question: "4. Your boss offers you a $10,000 raise. What’s your first thought? (Select all that apply)",
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
    question: "5. A friend calls you crying about a $1,000 car repair bill. What do you do? (Select all that apply)",
    answers: [
      {
        text: "A: Reluctantly offer financial help if they explicitly ask, staying cautious.",
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
    question: "6. You’re $2,000 short on your dream vacation budget. How do you handle it? (Select all that apply)",
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
        text: "C: Book it anyway—just put it on a credit card and figure it out later.",
        emotions: ["Risk-taking", "Spontaneity", "Excitement", "Indulgence", "Passion"]
      },
      {
        text: "D: Ask friends if they’d like to go together and split costs.",
        emotions: ["Community", "Collaboration", "Harmony", "Sharing", "Connection"]
      }
    ]
  },
  {
    question: "7. Your favorite coffee shop just raised prices. Do you... (Select all that apply)",
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
        text: "D: Start brewing my own and only treat myself at the shop on weekends.",
        emotions: ["Generosity", "Harmony", "Warmth", "Compassion", "Sharing"]
      }
    ]
  },
  {
    question: "8. Someone raves about investing in cryptocurrency. Your reaction? (Select all that apply)",
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
        text: "C: I’m all in—no hesitation here, I’ve already got a big stake!",
        emotions: ["Curiosity", "Risk-taking", "Thrill", "Passion", "Impulsivity"]
      },
      {
        text: "D: Discuss with friends so we can learn and invest together.",
        emotions: ["Collaboration", "Community", "Connection", "Empathy", "Harmony"]
      }
    ]
  },
  {
    question: "9. You see a limited edition gadget for $500. Do you... (Select all that apply)",
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
        text: "D: Rally your friends who also want it—share the cost so everyone can try it.",
        emotions: ["Collaboration", "Community", "Sharing", "Connection", "Warmth"]
      }
    ]
  },
  {
    question: "10. You’ve had a long week and need to relax. How do you treat yourself? (Select all that apply)",
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
        text: "D: It’s an everything day—grab a treat, go out, AND invite friends later!",
        emotions: ["Community", "Connection", "Collaboration", "Warmth", "Compassion"]
      }
    ]
  }
];

/****************************************************
 * TIE DEFINITIONS
 * (provided earlier, no placeholders)
 ****************************************************/
const tieData = {
  // Two-Way
  "Adventurer+Planner": {
    combinedName: "Adventurous Planner",
    description: `
      An optimistic approach to new possibilities merges seamlessly with meticulous 
      planning and goal-setting, striking a balance between excitement and long-term security. 
      Fresh ideas stay grounded in structured strategies, ensuring you can dream big without 
      losing stability. Confidence comes from thorough research, yet there’s still room 
      for spontaneity. It’s an outlook that lets you relish life’s thrills while steadily 
      building toward future ambitions.
    `
  },
  "Adventurer+Connector": {
    combinedName: "Adventurous Connector",
    description: `
      An eagerness for bold experiences joins forces with a caring, collaborative mindset, 
      fueling both personal growth and communal uplift. Daring choices become more meaningful 
      when they also serve friends, family, or a broader network. Forward momentum comes from 
      embracing new opportunities, all the while celebrating shared wins. Together, it forms 
      a synergy where excitement and social responsibility flourish side by side.
    `
  },
  "Adventurer+Realist": {
    combinedName: "Adventurous Realist",
    description: `
      Creative exploration blends with a fact-driven, cautious perspective, maintaining a 
      healthy tension between passion and pragmatism. Bold moves never lose sight of stable 
      outcomes, ensuring enthusiasm doesn’t overshadow sound judgment. Forward motion is 
      fueled by curiosity, yet guided by measured analysis. The result is a mindset that 
      welcomes new ventures but insists on level-headed planning to keep risks in check.
    `
  },
  "Planner+Connector": {
    combinedName: "Connected Planner",
    description: `
      Practical, long-term strategies align with a genuine desire to see others thrive, 
      weaving personal security and communal benefit into one roadmap. Methodical budgeting 
      and goal-setting not only stabilize your finances but also create pathways for 
      collaborative success. Discipline in planning doesn’t preclude caring deeply about 
      shared outcomes. Ultimately, it’s an approach that merges structure and empathy, 
      leaving room for both prosperity and heartfelt connection.
    `
  },
  "Planner+Realist": {
    combinedName: "Realistic Planner",
    description: `
      Careful goal-setting pairs with a guarded, data-driven stance on risk, building a 
      foundation of consistent and reliable progress. Impulsive choices rarely gain ground 
      here, as every idea is vetted through proven methods. An orderly framework provides 
      the structure needed to avoid unpleasant surprises. In this environment, measured 
      action leads to steady financial stability, free from unnecessary gambles.
    `
  },
  "Connector+Realist": {
    combinedName: "Realistic Connector",
    description: `
      A strong sense of generosity and collaboration is tempered by cautious financial 
      management, ensuring supportive efforts don’t compromise security. Thoughtful teamwork 
      can empower everyone, yet careful analysis remains a guiding principle. Balancing 
      empathy with level-headedness helps avoid overextending resources in the name of kindness. 
      It’s an approach that keeps group goals in sight while protecting everyone’s interests.
    `
  },

  // Three-Way
  "Adventurer+Connector+Planner": {
    combinedName: "Adventurous, Connected Planner",
    description: `
      Excitement for new possibilities meets structured planning and a caring heart for 
      collective success. Bold ideas thrive when carefully mapped out and shared with 
      those around you, letting optimism and discipline work hand in hand. Rather than 
      rushing headlong, there’s a mindful effort to keep progress beneficial for all involved. 
      This synergy nurtures both personal ambition and the well-being of friends or 
      community members.
    `
  },
  "Adventurer+Connector+Realist": {
    combinedName: "Adventurous, Connected Realist",
    description: `
      A drive for discovery blends with generous intentions and a no-nonsense eye on risk, 
      creating an outlook that values bold moves but remains firmly grounded. Ventures that 
      benefit others are pursued if they fit within sensible guidelines, helping everyone flourish. 
      Growth is fueled by curiosity and collaboration, yet governed by prudent decision-making. 
      It’s a path where excitement, social awareness, and practical strategy maintain equilibrium.
    `
  },
  "Adventurer+Planner+Realist": {
    combinedName: "Adventurous, Realistic Planner",
    description: `
      An appetite for new adventures runs alongside detailed planning and pragmatic caution. 
      Breakthrough ideas feel invigorating, but each step is backed by reliable methods 
      that preserve financial stability. There’s room for spontaneity and fresh perspectives, 
      yet an underlying framework keeps risk in check. This mix shapes an approach that 
      strives for innovative progress without losing sight of security or discipline.
    `
  },
  "Connector+Planner+Realist": {
    combinedName: "Connected, Realistic Planner",
    description: `
      Community-focused values intersect with thorough organization and a conservative 
      approach to risk, forming a calm yet people-centric vision. Collaborative efforts 
      can blossom under systematic goals, ensuring that everyone moves forward together. 
      Each decision is researched, reducing the likelihood of mistakes or unexpected challenges. 
      The result is a measured but caring style that safeguards resources while 
      nurturing shared triumphs.
    `
  },

  // Four-Way
  "Adventurer+Connector+Planner+Realist": {
    combinedName: "Adventurous, Connected, Realistic Planner",
    description: `
      A love of fresh experiences, a generous spirit, structured direction, and factual 
      risk assessment all converge here, weaving excitement and caution into one strategy. 
      Bold ideas are considered through careful planning and validated against collective 
      well-being, so each move feels both thrilling and responsible. Research and collaboration 
      guide your decisions, balancing personal goals with communal benefit. This all-encompassing 
      blend aims to harmonize exploration, empathy, security, and practicality in every 
      financial choice.
    `
  }
};

/****************************************************
 * GLOBAL STATE
 ****************************************************/
let currentQuestionIndex = 0;
// Now each element is an array of selected answer indices
let selectedAnswers = new Array(questions.length).fill([]);

/****************************************************
 * ON WINDOW LOAD
 ****************************************************/
window.onload = function() {
  displayQuestion(currentQuestionIndex);
  document.getElementById("results-btn").style.display = "none";
  document.getElementById("prev-btn").style.display = "none";
};

/****************************************************
 * DISPLAY A QUESTION (allows multiple selections)
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

  // Create checkboxes for multiple selection
  qObj.answers.forEach((ans, ansIdx) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = `question_${index}`;
    checkbox.value = ansIdx;

    // If user had previously selected this answer
    if (selectedAnswers[index].includes(ansIdx)) {
      checkbox.checked = true;
    }

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + ans.text));
    answersEl.appendChild(label);
  });

  // Hide 'Previous' if on first Q
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

  // Must select at least one option
  if (selectedAnswers[currentQuestionIndex].length === 0) {
    alert("Please select at least one answer before proceeding.");
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
  const checkboxes = document.querySelectorAll(
    `input[name="question_${currentQuestionIndex}"]`
  );

  // gather all checked indices
  let chosenIndices = [];
  checkboxes.forEach((cb) => {
    if (cb.checked) {
      chosenIndices.push(parseInt(cb.value));
    }
  });

  selectedAnswers[currentQuestionIndex] = chosenIndices;
}

/****************************************************
 * SHOW RESULTS
 ****************************************************/
function showResults() {
  saveCurrentAnswer();
  // ensure last question has at least one selection
  if (selectedAnswers[currentQuestionIndex].length === 0) {
    alert("Please select at least one answer before seeing results.");
    return;
  }

  // Gather chosen emotions
  let chosenEmotions = [];
  for (let i = 0; i < questions.length; i++) {
    const multiSelected = selectedAnswers[i]; 
    if (multiSelected.length > 0) {
      multiSelected.forEach((idx) => {
        chosenEmotions.push(...questions[i].answers[idx].emotions);
      });
    }
  }

  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  const { sortedArray } = calculateCategoryScores(chosenEmotions);
  // Identify top categories sharing the same top score
  const topScore = sortedArray[0][1];
  const tiedCats = sortedArray.filter(([,score]) => score === topScore).map(([cat]) => cat);

  displayFinalResults(tiedCats, sortedArray);
}

/****************************************************
 * CALCULATE CATEGORY SCORES
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

  // sort descending for distribution
  let sortedArray = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { sortedArray };
}

/****************************************************
 * GET COMBINED NAME + DESC
 ****************************************************/
function getCombinedNameAndDesc(tiedCats) {
  if (tiedCats.length === 1) {
    const cat = tiedCats[0];
    return {
      name: categoriesData[cat].name,
      article: categoriesData[cat].article,
      description: categoriesData[cat].description
    };
  }
  // multiple cats
  const sortedTied = [...tiedCats].sort((a, b) => a.localeCompare(b));
  const tieKey = sortedTied.join("+");

  if (tieData[tieKey]) {
    let comboName = tieData[tieKey].combinedName;
    let comboDesc = tieData[tieKey].description;
    const article = isVowel(comboName[0]) ? "an" : "a";
    return {
      name: comboName,
      article,
      description: comboDesc
    };
  }
  // fallback
  return {
    name: "Mixed",
    article: "a",
    description: "You have a unique blend of multiple categories."
  };
}

function isVowel(ch) {
  return ["A","E","I","O","U"].includes(ch.toUpperCase());
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(tiedCats, sortedArray) {
  const { name, article, description } = getCombinedNameAndDesc(tiedCats);

  // Intro paragraph
  const introParagraphEl = document.getElementById("intro-paragraph");
  introParagraphEl.textContent =
    "Finances touch our lives in personal ways and can often feel overwhelming. " +
    "At KeyBank, we celebrate the uniqueness of each individual’s approach to money, " +
    "so we can help you thrive in your financial life.";

  // e.g. "With your responses in mind, we think you are a/an..."
  const introSecondLineEl = document.getElementById("intro-second-line");
  introSecondLineEl.textContent = `With your responses in mind, we think you are ${article}`;

  // category name / tie name
  document.getElementById("category-name").textContent = name;
  document.getElementById("category-description").innerHTML = description;

  // Build distribution bars
  buildDistributionBars(sortedArray, tiedCats);

  // Insert dynamic heading or text
  const distributionContainer = document.getElementById("distribution-container");
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const topPct = Math.round((sortedArray[0][1] / total) * 100);

  const distributionTitle = document.createElement("h3");
  if (topPct === 100 && tiedCats.length === 1) {
    distributionTitle.innerHTML = `Your <span class="key-span">key</span> money signs:`;
  } else {
    distributionTitle.innerHTML = `
      While your primary money sign may not capture everything about you, 
      we notice traits from other money signs that also resonate with your financial personality:
    `;
  }
  distributionContainer.insertBefore(distributionTitle, document.getElementById("category-bars"));

  // callout about clicking +
  const plusCallout = document.createElement("p");
  plusCallout.className = "plus-callout-small";
  plusCallout.textContent = `Click the “+” icons to view more about each non-winning category.`;
  distributionContainer.insertBefore(plusCallout, document.getElementById("category-bars"));

  // figure out topCats for strengths/weaknesses
  const finalTopCats = determineTopCats(sortedArray);
  const pctMap = buildPctMap(sortedArray);

  const finalStrengths = buildOutputItems(finalTopCats, pctMap, "strengths");
  const finalWeaknesses = buildOutputItems(finalTopCats, pctMap, "weaknesses");

  // Fill strengths
  const excelList = document.getElementById("excel-list");
  excelList.innerHTML = "";
  finalStrengths.forEach(str => {
    const li = document.createElement("li");
    li.textContent = str;
    excelList.appendChild(li);
  });

  // Fill weaknesses
  const watchoutList = document.getElementById("watchout-list");
  watchoutList.innerHTML = "";
  finalWeaknesses.forEach(wk => {
    const li = document.createElement("li");
    li.textContent = wk;
    watchoutList.appendChild(li);
  });

  // If there's more than 1 cat in tie, pick the first cat alpha for products
  let mainCatForProducts = (tiedCats.length > 1)
    ? [...tiedCats].sort((a,b)=>a.localeCompare(b))[0]
    : tiedCats[0];

  const productsTitle = document.getElementById("products-title");
  productsTitle.textContent = categoriesData[mainCatForProducts].headingForProducts;

  const productContainer = document.getElementById("product-recommendations");
  productContainer.innerHTML = "";
  categoriesData[mainCatForProducts].products.forEach(prod => {
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
function buildDistributionBars(sortedArray, tiedCats) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const catBarContainer = document.getElementById("category-bars");
  catBarContainer.innerHTML = "";

  sortedArray.forEach(([cat, score]) => {
    const barRow = document.createElement("div");
    barRow.className = "category-bar";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = cat.toUpperCase();

    let pct = Math.round((score / total) * 100);

    // If cat is NOT in tiedCats, show the plus toggle
    if (!tiedCats.includes(cat)) {
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
    if (!tiedCats.includes(cat)) {
      const shortBox = document.createElement("div");
      shortBox.id = `short-${cat}`;
      shortBox.className = "short-summary";
      shortBox.textContent = categoriesData[cat].shortDescription.trim();
      catBarContainer.appendChild(shortBox);
    }
  });
}

/****************************************************
 * DETERMINE TOP CATS UNTIL >= 80
 ****************************************************/
function determineTopCats(sortedArray) {
  const total = sortedArray.reduce((acc, [_, score]) => acc + score, 0) || 1;

  const topCatScore = sortedArray[0][1];
  if ((topCatScore / total) * 100 >= 80) {
    return [sortedArray[0][0]];
  }

  // if all 4 are tied
  const allTied = (sortedArray.length === 4 &&
    sortedArray[0][1] > 0 &&
    sortedArray.every(([, s]) => s === sortedArray[0][1])
  );
  if (allTied) {
    return sortedArray.map(([cat]) => cat);
  }

  let runningPct = 0;
  let result = [];
  for (let i = 0; i < sortedArray.length; i++) {
    const [cat, score] = sortedArray[i];
    runningPct += (score / total) * 100;
    result.push(cat);
    if (runningPct >= 80) break;
  }

  if (result.length === 4) {
    result.pop();
  }
  return result;
}

/****************************************************
 * BUILD A MAP: category -> integer percentage
 ****************************************************/
function buildPctMap(sortedArray) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const map = {};
  sortedArray.forEach(([cat, score]) => {
    const pct = Math.round((score / total) * 100);
    map[cat] = pct;
  });
  return map;
}

/****************************************************
 * BUILD OUTPUT ITEMS (strengths or weaknesses)
 ****************************************************/
function buildOutputItems(topCats, pctMap, keyName) {
  const len = topCats.length;
  if (len === 4) {
    return topCats.map((cat) => craftLine(cat, pctMap[cat], categoriesData[cat][keyName][0]));
  } else if (len === 3) {
    return topCats.map((cat) => craftLine(cat, pctMap[cat], categoriesData[cat][keyName][0]));
  } else if (len === 2) {
    const [cat1, cat2] = topCats;
    const arr1 = categoriesData[cat1][keyName];
    const arr2 = categoriesData[cat2][keyName];

    return [
      craftLine(cat1, pctMap[cat1], arr1[0]),
      craftLine(cat1, pctMap[cat1], arr1[1]),
      craftLine(cat2, pctMap[cat2], arr2[0])
    ];
  } else {
    // single cat
    const cat = topCats[0];
    const arr = categoriesData[cat][keyName];
    return [
      craftLine(cat, pctMap[cat], arr[0]),
      craftLine(cat, pctMap[cat], arr[1]),
      craftLine(cat, pctMap[cat], arr[2])
    ];
  }
}

/****************************************************
 * TEMPLATES FOR BULLETS
 ****************************************************/
const bulletOpeners = [
  "Looks like you're about",
  "It seems you're roughly",
  "We see you're around",
  "You're approximately",
  "From these answers, you're about",
  "We noticed you're about"
];
const bulletTransitions = [
  "so here’s something to consider:",
  "which means:",
  "so keep in mind:",
  "so check this out:",
  "and that suggests:",
  "and this implies:"
];
let bulletIndex = 0;

/****************************************************
 * craftLine
 ****************************************************/
function craftLine(cat, pct, originalLine) {
  const commaIdx = originalLine.indexOf(",");
  let remainder = commaIdx >= 0 ? originalLine.substring(commaIdx + 1).trim() : originalLine;

  if (remainder.length > 0) {
    remainder = remainder[0].toLowerCase() + remainder.substring(1);
  }

  const opener = bulletOpeners[bulletIndex % bulletOpeners.length];
  const transition = bulletTransitions[bulletIndex % bulletTransitions.length];
  bulletIndex++;

  return `${opener} ${pct}% ${cat} ${transition} ${remainder}`;
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
