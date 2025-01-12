/****************************************************
 * QUIZ DATA - 10 Questions, Each with 4 Answers
 ****************************************************/
const questions = [
  {
    question: "1. You’ve just found $500 on the ground. What’s the first thing you do?",
    answers: [
      {
        text: "A: Panic and try to find its rightful owner.",
        emotions: ["Anxiety", "Responsibility", "Morality", "Fear", "Compassion"]
      },
      {
        text: "B: Deposit it immediately into your savings account.",
        emotions: ["Security", "Prudence", "Relief", "Satisfaction", "Calmness"]
      },
      {
        text: "C: Treat yourself to that thing you’ve had your eye on.",
        emotions: ["Joy", "Excitement", "Impulsivity", "Satisfaction", "Contentment"]
      },
      {
        text: "D: Split it—some for you, some for charity or a friend.",
        emotions: ["Generosity", "Connection", "Gratitude", "Altruism", "Happiness"]
      }
    ]
  },
  {
    question: "2. Your friend asks you to split a $400 dinner bill evenly, but you only had a salad. What’s your move?",
    answers: [
      {
        text: "A: Quietly pay the full amount to avoid conflict.",
        emotions: ["Discomfort", "Shame", "Guilt", "Avoidance", "Self-Sacrifice"]
      },
      {
        text: "B: Politely explain the situation and ask to adjust the bill.",
        emotions: ["Confidence", "Fairness", "Self-Respect", "Calmness", "Assertiveness"]
      },
      {
        text: "C: Laugh it off and pay the full amount anyway.",
        emotions: ["Carefreeness", "Generosity", "Joy", "Humor", "Acceptance"]
      },
      {
        text: "D: Pay the full amount and feel good knowing it made the group happy.",
        emotions: ["Altruism", "Connection", "Gratitude", "Happiness", "Fulfillment"]
      }
    ]
  },
  {
    question: "3. You walk into a store to buy toothpaste and leave with...",
    answers: [
      {
        text: "A: Nothing—it was overpriced.",
        emotions: ["Frustration", "Restraint", "Skepticism", "Disappointment", "Self-Control"]
      },
      {
        text: "B: Toothpaste and a backup tube.",
        emotions: ["Preparedness", "Practicality", "Contentment", "Security", "Satisfaction"]
      },
      {
        text: "C: Toothpaste, snacks, a magazine, and a cute mug.",
        emotions: ["Excitement", "Impulsivity", "Indulgence", "Curiosity", "Joy"]
      },
      {
        text: "D: Toothpaste and a donation to the charity box.",
        emotions: ["Generosity", "Fulfillment", "Purpose", "Connection", "Kindness"]
      }
    ]
  },
  {
    question: "4. Your boss offers you a $10,000 raise. What’s your first thought?",
    answers: [
      {
        text: "A: “Finally, I can pay off those bills.”",
        emotions: ["Relief", "Responsibility", "Hope", "Security", "Gratitude"]
      },
      {
        text: "B: “Great! I’ll put it into retirement.”",
        emotions: ["Confidence", "Security", "Discipline", "Contentment", "Planning"]
      },
      {
        text: "C: “Time to plan that dream vacation!”",
        emotions: ["Excitement", "Joy", "Ambition", "Optimism", "Anticipation"]
      },
      {
        text: "D: “Awesome—maybe I can help a family member.”",
        emotions: ["Compassion", "Gratitude", "Connection", "Altruism", "Happiness"]
      }
    ]
  },
  {
    question: "5. A friend calls you crying about a $1,000 car repair bill. What do you do?",
    answers: [
      {
        text: "A: Sympathize but avoid offering help.",
        emotions: ["Concern", "Guilt", "Self-Preservation", "Discomfort", "Distance"]
      },
      {
        text: "B: Offer budgeting advice and suggest a cheaper mechanic.",
        emotions: ["Helpfulness", "Problem-Solving", "Responsibility", "Calmness", "Empathy"]
      },
      {
        text: "C: Venmo them $100 as a gift.",
        emotions: ["Kindness", "Generosity", "Empathy", "Connection", "Altruism"]
      },
      {
        text: "D: Lend them the money if you can, no strings attached.",
        emotions: ["Trust", "Selflessness", "Connection", "Generosity", "Hope"]
      }
    ]
  },
  {
    question: "6. Your dream vacation is calling, but you’re $2,000 short. How do you handle it?",
    answers: [
      {
        text: "A: Cancel the trip—better safe than sorry.",
        emotions: ["Caution", "Regret", "Practicality", "Disappointment", "Security"]
      },
      {
        text: "B: Delay and save until you have enough.",
        emotions: ["Patience", "Responsibility", "Determination", "Hope", "Calmness"]
      },
      {
        text: "C: Book it anyway!",
        emotions: ["Impulsivity", "Excitement", "Optimism", "Joy", "Adventure"]
      },
      {
        text: "D: Ask friends or family to split costs.",
        emotions: ["Collaboration", "Connection", "Resourcefulness", "Optimism", "Gratitude"]
      }
    ]
  },
  {
    question: "7. Your favorite coffee shop just raised prices. Do you...",
    answers: [
      {
        text: "A: Stop going and switch to home coffee.",
        emotions: ["Frustration", "Practicality", "Discipline", "Annoyance", "Self-Control"]
      },
      {
        text: "B: Go less often to keep costs in check.",
        emotions: ["Balance", "Control", "Adaptation", "Calmness", "Contentment"]
      },
      {
        text: "C: Keep going and don’t think twice.",
        emotions: ["Carefreeness", "Satisfaction", "Indulgence", "Joy", "Contentment"]
      },
      {
        text: "D: Still go, but treat someone else to coffee.",
        emotions: ["Generosity", "Connection", "Joy", "Fulfillment", "Kindness"]
      }
    ]
  },
  {
    question: "8. You’re at a party and someone mentions investing in cryptocurrency. What’s your reaction?",
    answers: [
      {
        text: "A: “Sounds risky—I’ll stick to savings.”",
        emotions: ["Skepticism", "Caution", "Prudence", "Security", "Anxiety"]
      },
      {
        text: "B: “I’ll research it more before deciding.”",
        emotions: ["Curiosity", "Responsibility", "Diligence", "Caution", "Confidence"]
      },
      {
        text: "C: “I’ll throw in $100 and see what happens!”",
        emotions: ["Excitement", "Impulsivity", "Curiosity", "Adventure", "Optimism"]
      },
      {
        text: "D: “I’ll invest but also share my learnings.”",
        emotions: ["Collaboration", "Optimism", "Generosity", "Curiosity", "Confidence"]
      }
    ]
  },
  {
    question: "9. You’re browsing online and see a limited edition gadget for $500. What do you do?",
    answers: [
      {
        text: "A: Skip it—you don’t need it.",
        emotions: ["Restraint", "Discipline", "Contentment", "Practicality", "Calmness"]
      },
      {
        text: "B: Add it to your wishlist for later.",
        emotions: ["Thoughtfulness", "Patience", "Anticipation", "Calmness", "Satisfaction"]
      },
      {
        text: "C: Buy it immediately before it sells out!",
        emotions: ["Excitement", "Urgency", "Satisfaction", "Impulsivity", "Joy"]
      },
      {
        text: "D: Suggest a group discount to your friends.",
        emotions: ["Creativity", "Collaboration", "Resourcefulness", "Generosity", "Joy"]
      }
    ]
  },
  {
    question: "10. You’ve had a long week and need to relax. How do you treat yourself?",
    answers: [
      {
        text: "A: Go for a quiet walk—it’s free and refreshing.",
        emotions: ["Calmness", "Introspection", "Simplicity", "Contentment", "Relief"]
      },
      {
        text: "B: Buy a new book or something small.",
        emotions: ["Contentment", "Indulgence", "Joy", "Curiosity", "Satisfaction"]
      },
      {
        text: "C: Plan a big night out with friends.",
        emotions: ["Excitement", "Social Energy", "Joy", "Connection", "Celebration"]
      },
      {
        text: "D: Cook dinner for friends or treat someone to a meal.",
        emotions: ["Connection", "Generosity", "Fulfillment", "Happiness", "Compassion"]
      }
    ]
  }
];

/****************************************************
 * CATEGORIES + Summaries, so we can show the top category
 * We'll also add "excel" and "watchOut" arrays for bullet points
 ****************************************************/
const categoriesData = {
  Planner: {
    name: "the planner",
    tagline: "You’re all about strategy and preparation!",
    description: `
      You are the master of practicality and preparation. 
      You approach financial decisions with thoughtfulness, responsibility, and an 
      eye toward long-term security. While your careful approach keeps you grounded, 
      you might sometimes miss out on spontaneous opportunities. 
      For you, financial peace of mind comes from knowing you’ve 
      prepared for every contingency.
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
      "Key Active Saver® Account – A savings account with competitive rates.",
      "Laurel Road Loan – Flexible loan option to handle major expenses.",
      "Key Secured Credit Card® – Build credit without taking big risks."
    ],
    emotions: [
      "Anxiety","Responsibility","Security","Prudence","Relief","Satisfaction",
      "Calmness","Contentment","Preparedness","Practicality","Purpose","Discipline",
      "Planning","Ambition","Hope","Determination","Caution","Patience","Control",
      "Self-Control","Skepticism","Balance","Diligence","Thoughtfulness","Self-Preservation",
      "Distance","Regret","Fairness","Problem-Solving","Helpfulness","Simplicity","Confidence"
    ]
  },
  Adventurer: {
    name: "the adventurer",
    tagline: "Life is a journey, and you’re ready to explore!",
    description: `
      Financial decisions for you are often about excitement, curiosity, 
      and seizing new opportunities. You embrace risk with a positive mindset, 
      driven by optimism and the thrill of the unknown. 
      While this adventurous spirit makes life fun, it can also lead to impulsive spending. 
      You feel most fulfilled when you’re trying something new, exploring different 
      investments, or planning a dream vacation. For you, money isn’t just a tool—
      it’s a way to experience life to its fullest.
    `,
    excel: [
      "Bold Decision-Maker – Not afraid to jump on an opportunity.",
      "Curious and Open-Minded – Always looking for ways to grow.",
      "Optimistic Risk-Taker – Trusting your instincts to guide you."
    ],
    watchOut: [
      "Balancing Fun with Long-Term Goals – Keep some practical savings in mind.",
      "Impulse Spending – A set budget for “fun money” can keep you from feeling restricted."
    ],
    products: [
      "Key Smart Checking® – Perfect for on-the-go, no monthly fees.",
      "Key Rewards Credit Card® – Earn points on everyday purchases and experiences.",
      "Laurel Road Savings – Higher-interest savings for your next big adventure."
    ],
    emotions: [
      "Joy","Excitement","Impulsivity","Curiosity","Adventure","Optimism","Anticipation",
      "Creativity","Exploration","Urgency","Celebration","Humor","Enthusiasm","Satisfaction",
      "Social Energy","Selflessness","Assertiveness","Acceptance","Confidence"
    ]
  },
  Connector: {
    name: "the connector",
    tagline: "Money is about building relationships and communities.",
    description: `
      You view finances as a tool to support your community and bond with others. 
      Whether it’s through generosity, sharing success, or lending a helping hand, 
      you find emotional satisfaction in giving back. You thrive in group settings 
      and prefer collaborative ventures. However, make sure you’re also prioritizing 
      your own financial well-being.
    `,
    excel: [
      "Community-Focused – You care deeply about helping others.",
      "Collaborative – You enjoy pooling resources and shared goals.",
      "Generous Spirit – Giving is part of who you are."
    ],
    watchOut: [
      "Overextending Yourself – Remember to protect your own finances too.",
      "Difficulty Saying No – You can’t help everyone all the time."
    ],
    products: [
      "Key Family Checking® – Manage shared expenses with loved ones easily.",
      "Laurel Road Loyalty Savings – Earn better rates for long-term savings goals.",
      "Key Cashback Credit Card® – Earn cash-back to share with friends or donate."
    ],
    emotions: [
      "Generosity","Connection","Gratitude","Altruism","Happiness","Kindness","Empathy",
      "Trust","Self-Respect","Friendship","Compassion","Carefreeness","Collaboration",
      "Resourcefulness","Fulfillment","Purpose","Self-Sacrifice","Fairness","Problem-Solving"
    ]
  },
  Realist: {
    name: "the realist",
    tagline: "Grounded, cautious, and practical—you see finance as it truly is.",
    description: `
      You prioritize managing risk, avoiding unnecessary spending, and protecting your resources. 
      While your approach may appear conservative, it helps you navigate challenges with confidence. 
      You often approach new trends (like crypto) with a healthy dose of skepticism. 
      Your mindset keeps you prepared for the highs and the lows of financial life.
    `,
    excel: [
      "Clear-Eyed Investor – You avoid hype and see the facts.",
      "Risk-Manager – You keep spending and investing decisions rational.",
      "Level-Headed – Rarely impulsive, you consider the outcomes carefully."
    ],
    watchOut: [
      "Missing Opportunities – Sometimes, a small risk pays off.",
      "Over-Caution – Growth can require stepping outside your comfort zone."
    ],
    products: [
      "Key Safe Checking® – Overdraft protection and strong fraud prevention.",
      "Laurel Road High Yield Savings – Steady returns with low risk.",
      "Laurel Road Loan – Predictable terms to help manage large expenses safely."
    ],
    emotions: [
      "Morality","Fear","Concern","Discomfort","Shame","Guilt","Avoidance","Frustration",
      "Restraint","Disappointment","Annoyance","Adaptation","Introspection","Acceptance"
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

  // Clear previous content
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

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + ans.text));
    answersEl.appendChild(label);
  });

  // Show or hide buttons
  if (index < questions.length - 1) {
    nextBtn.style.display = "inline-block";
    resultsBtn.style.display = "none";
  } else {
    nextBtn.style.display = "none";
    resultsBtn.style.display = "inline-block";
  }
}

/****************************************************
 * GO TO NEXT QUESTION
 ****************************************************/
function goToNextQuestion() {
  // Validate
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
  // Validate last question
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );
  if (!selectedOption) {
    alert("Please select an answer before seeing results.");
    return;
  }

  // Add final question's emotions
  const ansIndex = parseInt(selectedOption.value);
  chosenEmotions.push(...questions[currentQuestionIndex].answers[ansIndex].emotions);

  // Hide quiz, show results
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  // Calculate the final distribution + top category
  const { scores, winner } = calculateCategoryScores(chosenEmotions);

  // Fill out results screen
  displayFinalResults(winner, scores);
}

/****************************************************
 * CALCULATE SCORES
 ****************************************************/
function calculateCategoryScores(emotions) {
  // Tally each emotion
  const tally = {};
  emotions.forEach(em => {
    tally[em] = (tally[em] || 0) + 1;
  });

  // Score each category
  const categoryNames = Object.keys(categoriesData);
  const scores = {};
  let maxScore = 0;

  categoryNames.forEach(cat => {
    const catEmotions = categoriesData[cat].emotions;
    let catScore = 0;
    catEmotions.forEach(ce => {
      if (tally[ce]) {
        catScore += tally[ce];
      }
    });
    scores[cat] = catScore;
    if (catScore > maxScore) maxScore = catScore;
  });

  // Find winners (in case of tie)
  let winners = categoryNames.filter(cat => scores[cat] === maxScore);
  let winner = winners.length > 1
    ? winners[Math.floor(Math.random() * winners.length)]
    : winners[0];

  return { scores, winner };
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(winner, scores) {
  // 1) "You are a ____" text
  const resultsTitle = document.getElementById("results-title");
  resultsTitle.textContent = "you are an";

  const catNameEl = document.getElementById("category-name");
  catNameEl.textContent = categoriesData[winner].name;

  // 2) Category description
  const catDescEl = document.getElementById("category-description");
  catDescEl.innerHTML = categoriesData[winner].description;

  // 3) Build the distribution bars
  buildDistributionBars(scores);

  // 4) Where you excel + watch out
  const excelList = document.getElementById("excel-list");
  const watchoutList = document.getElementById("watchout-list");
  excelList.innerHTML = "";
  watchoutList.innerHTML = "";

  categoriesData[winner].excel.forEach(pt => {
    const li = document.createElement("li");
    li.textContent = pt;
    excelList.appendChild(li);
  });

  categoriesData[winner].watchOut.forEach(pt => {
    const li = document.createElement("li");
    li.textContent = pt;
    watchoutList.appendChild(li);
  });

  // 5) Product Recommendations
  const productContainer = document.getElementById("product-recommendations");
  productContainer.innerHTML = "";
  categoriesData[winner].products.forEach(prod => {
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
function buildDistributionBars(scores) {
  // sum total
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const catBarContainer = document.getElementById("category-bars");
  catBarContainer.innerHTML = "";

  // We want a bar for each category
  Object.keys(scores).forEach(cat => {
    const barRow = document.createElement("div");
    barRow.className = "category-bar";

    // Label
    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = cat.toUpperCase();

    // Background
    const barBg = document.createElement("div");
    barBg.className = "bar-bg";

    // Fill
    const fill = document.createElement("div");
    fill.className = "bar-fill";

    // Percent
    let pct = total === 0 ? 0 : Math.round((scores[cat] / total) * 100);
    fill.style.width = pct + "%";

    // Percentage label
    const barPercent = document.createElement("div");
    barPercent.className = "bar-percent";
    barPercent.textContent = pct + "%";

    barBg.appendChild(fill);
    barRow.appendChild(label);
    barRow.appendChild(barBg);
    barRow.appendChild(barPercent);

    catBarContainer.appendChild(barRow);
  });
}
