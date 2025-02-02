// script.js

/****************************************************
 * QUESTIONS ARRAY (Full 10 with multiple selections, 
 * each with 4 answers, as per prior instructions)
 ****************************************************/
const questions = [
  {
    question: "1. You’ve just found $500 on the ground. What’s the first thing you do?",
    answers: [
      {
        text: "Try to find the rightful owner; if you can’t, well, finders keepers.",
        emotions: ["Apprehension", "Duty", "Caution", "Skepticism", "Reserved"]
      },
      {
        text: "Immediately deposit it into savings to boost your safety net.",
        emotions: ["Prudence", "Security", "Forward-thinking", "Responsibility", "Organization"]
      },
      {
        text: "Celebrate with a spontaneous treat for yourself right now.",
        emotions: ["Thrill", "Indulgence", "Excitement", "Spontaneity", "Joy"]
      },
      {
        text: "Share half with a local charity or a friend who needs help.",
        emotions: ["Generosity", "Altruism", "Warmth", "Compassion", "Connection"]
      }
    ]
  },
  {
    question: "2. Your friend asks you to split a $400 dinner bill evenly, but you only had a salad. What do you do?",
    answers: [
      {
        text: "Quietly pay it all to avoid drama, feeling uneasy.",
        emotions: ["Reserved", "Apprehension", "Logic", "Restraint", "Duty"]
      },
      {
        text: "Propose a fair split based on what was actually ordered.",
        emotions: ["Structure", "Prudence", "Security", "Stability", "Calculated"]
      },
      {
        text: "Laugh it off and cover the full share—it’s an entertaining story.",
        emotions: ["Spontaneity", "Joy", "Impulsivity", "Excitement", "Passion"]
      },
      {
        text: "Pay the full amount now, trusting they’ll pick up the tab next time.",
        emotions: ["Harmony", "Collaboration", "Warmth", "Connection", "Sharing"]
      }
    ]
  },
  {
    question: "3. You walk into a store to buy toothpaste and leave with...",
    answers: [
      {
        text: "Nothing—prices were too high, so you held off.",
        emotions: ["Skepticism", "Restraint", "Logic", "Practical", "Realism"]
      },
      {
        text: "Toothpaste plus a spare, just in case.",
        emotions: ["Preparedness", "Organization", "Stability", "Prudence", "Security"]
      },
      {
        text: "Multiple fun items you couldn’t resist trying.",
        emotions: ["Impulsivity", "Exploration", "Thrill", "Indulgence", "Passion"]
      },
      {
        text: "Toothpaste and a donation at the charity box.",
        emotions: ["Generosity", "Compassion", "Sharing", "Community", "Connection"]
      }
    ]
  },
  {
    question: "4. Your boss offers you a $10,000 raise. What’s your first thought?",
    answers: [
      {
        text: "Pay off debts and maintain a practical buffer.",
        emotions: ["Duty", "Grounded", "Logic", "Restraint", "Realism"]
      },
      {
        text: "Invest it or add to long-term savings plans.",
        emotions: ["Forward-thinking", "Calculated", "Structure", "Stability", "Methodical"]
      },
      {
        text: "Perfect opportunity to plan a dream trip or major splurge.",
        emotions: ["Excitement", "Impulsivity", "Thrill", "Spontaneity", "Joy"]
      },
      {
        text: "Share some with loved ones who are struggling.",
        emotions: ["Altruism", "Warmth", "Compassion", "Connection", "Harmony"]
      }
    ]
  },
  {
    question: "5. A friend calls you crying about a $1,000 car repair bill. What do you do?",
    answers: [
      {
        text: "Reluctantly offer financial help if they explicitly ask, staying cautious.",
        emotions: ["Reserved", "Caution", "Duty", "Apprehension", "Logic"]
      },
      {
        text: "Help them budget and research cheaper repair options.",
        emotions: ["Organization", "Methodical", "Preparedness", "Stability", "Prudence"]
      },
      {
        text: "Chip in spontaneously—maybe $100—for an immediate lift.",
        emotions: ["Spontaneity", "Impulsivity", "Thrill", "Joy", "Passion"]
      },
      {
        text: "Lend them the full amount if you can; friends help each other.",
        emotions: ["Generosity", "Compassion", "Empathy", "Sharing", "Connection"]
      }
    ]
  },
  {
    question: "6. You’re $2,000 short on your dream vacation budget. How do you handle it?",
    answers: [
      {
        text: "Cancel the trip; the debt risk is too high.",
        emotions: ["Logic", "Caution", "Reserved", "Realism", "Skepticism"]
      },
      {
        text: "Postpone until you’ve saved the full amount systematically.",
        emotions: ["Prudence", "Preparedness", "Security", "Forward-thinking", "Methodical"]
      },
      {
        text: "Book it anyway—just put it on a credit card and figure it out later.",
        emotions: ["Risk-taking", "Spontaneity", "Excitement", "Indulgence", "Passion"]
      },
      {
        text: "Ask friends if they’d like to go together and split costs.",
        emotions: ["Community", "Collaboration", "Harmony", "Sharing", "Connection"]
      }
    ]
  },
  {
    question: "7. Your favorite coffee shop just raised prices. Do you...",
    answers: [
      {
        text: "Stop going—it's the most rational cut for your budget.",
        emotions: ["Restraint", "Practical", "Apprehension", "Duty", "Logic"]
      },
      {
        text: "Reduce visits and track spending closely.",
        emotions: ["Stability", "Organization", "Calculated", "Security", "Structure"]
      },
      {
        text: "Keep going—coffee is your daily indulgence and joy.",
        emotions: ["Thrill", "Indulgence", "Spontaneity", "Joy", "Impulsivity"]
      },
      {
        text: "Start brewing my own and only treat myself at the shop on weekends.",
        emotions: ["Generosity", "Harmony", "Warmth", "Compassion", "Sharing"]
      }
    ]
  },
  {
    question: "8. Someone raves about investing in cryptocurrency. Your reaction?",
    answers: [
      {
        text: "Too uncertain—I want concrete data first.",
        emotions: ["Skepticism", "Caution", "Reserved", "Logic", "Realism"]
      },
      {
        text: "Research thoroughly, then invest in a controlled way.",
        emotions: ["Methodical", "Prudence", "Calculated", "Forward-thinking", "Security"]
      },
      {
        text: "I’m all in—no hesitation here, I’ve already got a big stake!",
        emotions: ["Curiosity", "Risk-taking", "Thrill", "Passion", "Impulsivity"]
      },
      {
        text: "Discuss with friends so we can learn and invest together.",
        emotions: ["Collaboration", "Community", "Connection", "Empathy", "Harmony"]
      }
    ]
  },
  {
    question: "9. You see a limited edition gadget for $500. Do you...",
    answers: [
      {
        text: "Skip it—you don’t truly need it.",
        emotions: ["Restraint", "Apprehension", "Practical", "Grounded", "Duty"]
      },
      {
        text: "Add it to your wishlist and start saving systematically.",
        emotions: ["Organization", "Stability", "Forward-thinking", "Calculated", "Prudence"]
      },
      {
        text: "Buy it immediately—life is about seizing the moment!",
        emotions: ["Impulsivity", "Excitement", "Joy", "Spontaneity", "Indulgence"]
      },
      {
        text: "Rally your friends who also want it—share the cost so everyone can try it.",
        emotions: ["Collaboration", "Community", "Sharing", "Connection", "Warmth"]
      }
    ]
  },
  {
    question: "10. You’ve had a long week and need to relax. How do you treat yourself?",
    answers: [
      {
        text: "Stay home with a simple, low-cost plan like a favorite show.",
        emotions: ["Reserved", "Logic", "Practical", "Restraint", "Caution"]
      },
      {
        text: "Buy a small, practical treat—just enough to recharge.",
        emotions: ["Calculated", "Organization", "Methodical", "Security", "Stability"]
      },
      {
        text: "Go out for an exciting night—no regrets!",
        emotions: ["Thrill", "Excitement", "Spontaneity", "Joy", "Passion"]
      },
      {
        text: "It’s an everything day—grab a treat, go out, AND invite friends later!",
        emotions: ["Community", "Connection", "Collaboration", "Warmth", "Compassion"]
      }
    ]
  }
];

/****************************************************
 * categoriesData (unchanged)
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
 * tieData
 ****************************************************/
const tieData = {
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
// multiple answers possible => array of indices per question
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
 * DISPLAY A QUESTION
 ****************************************************/
function displayQuestion(index) {
  const questionEl = document.getElementById("question-text");
  const selectInstrEl = document.getElementById("select-instructions");
  const answersEl = document.getElementById("answers-container");
  const nextBtn = document.getElementById("next-btn");
  const resultsBtn = document.getElementById("results-btn");
  const prevBtn = document.getElementById("prev-btn");

  answersEl.innerHTML = "";

  // set question text
  const qObj = questions[index];
  questionEl.textContent = qObj.question;
  selectInstrEl.textContent = "(Select all that apply)";

  // Build horizontal answer cards
  qObj.answers.forEach((ans, ansIdx) => {
    const card = document.createElement("div");
    card.className = "answer-card";
    card.onclick = () => {
      // toggle check
      const cb = card.querySelector("input[type='checkbox']");
      cb.checked = !cb.checked;
      updateCheckedStyle(card, cb.checked);
      saveCurrentAnswer();
    };

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "answer-checkbox";
    checkbox.name = `question_${index}`;
    checkbox.value = ansIdx;
    checkbox.onclick = (ev) => {
      ev.stopPropagation();
      updateCheckedStyle(card, checkbox.checked);
      saveCurrentAnswer();
    };

    // restore selection
    if (selectedAnswers[index].includes(ansIdx)) {
      checkbox.checked = true;
      card.classList.add("checked");
    }

    const labelSpan = document.createElement("span");
    labelSpan.textContent = ans.text;

    card.appendChild(checkbox);
    card.appendChild(labelSpan);
    answersEl.appendChild(card);
  });

  // Hide 'Previous' if on first
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  // show next or results
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
 * updateCheckedStyle
 ****************************************************/
function updateCheckedStyle(cardEl, isChecked) {
  if (isChecked) {
    cardEl.classList.add("checked");
  } else {
    cardEl.classList.remove("checked");
  }
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
  const chosen = [];
  checkboxes.forEach(cb => {
    if (cb.checked) chosen.push(parseInt(cb.value));
  });
  selectedAnswers[currentQuestionIndex] = chosen;
}

/****************************************************
 * SHOW RESULTS
 ****************************************************/
function showResults() {
  saveCurrentAnswer();
  if (selectedAnswers[currentQuestionIndex].length === 0) {
    alert("Please select at least one answer before seeing results.");
    return;
  }

  // gather chosen emotions
  let chosenEmotions = [];
  for (let i = 0; i < questions.length; i++) {
    selectedAnswers[i].forEach(idx => {
      chosenEmotions.push(...questions[i].answers[idx].emotions);
    });
  }

  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  const { sortedArray } = calculateCategoryScores(chosenEmotions);
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

  let sortedArray = Object.entries(scores).sort((a,b)=> b[1] - a[1]);
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
  const sortedTied = [...tiedCats].sort((a,b)=>a.localeCompare(b));
  const tieKey = sortedTied.join("+");
  if (tieData[tieKey]) {
    const comboName = tieData[tieKey].combinedName;
    const comboDesc = tieData[tieKey].description;
    const article = isVowel(comboName[0]) ? "an" : "a";
    return {
      name: comboName,
      article,
      description: comboDesc
    };
  }
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

  // Intro paragraph + second line
  document.getElementById("intro-paragraph").textContent =
    "Finances touch our lives in personal ways and can often feel overwhelming. " +
    "At KeyBank, we celebrate the uniqueness of each individual’s approach to money, " +
    "so we can help you thrive in your financial life.";

  document.getElementById("intro-second-line").textContent =
    `With your responses in mind, we think you are ${article}`;

  document.getElementById("category-name").textContent = name;
  document.getElementById("category-description").innerHTML = description;

  // distribution bars
  buildDistributionBars(sortedArray, tiedCats);

  // heading for distribution
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

  const plusCallout = document.createElement("p");
  plusCallout.className = "plus-callout-small";
  plusCallout.textContent = `Click the “+” icons to view more about each non-winning category.`;
  distributionContainer.insertBefore(plusCallout, document.getElementById("category-bars"));

  // strengths + weaknesses
  const topCatsForBullets = determineTopCats(sortedArray);
  const pctMap = buildPctMap(sortedArray);

  const finalStrengths = buildOutputItems(topCatsForBullets, pctMap, "strengths");
  const finalWeaknesses = buildOutputItems(topCatsForBullets, pctMap, "weaknesses");

  const excelList = document.getElementById("excel-list");
  excelList.innerHTML = "";
  finalStrengths.forEach(s => {
    const li = document.createElement("li");
    li.textContent = s;
    excelList.appendChild(li);
  });

  const watchoutList = document.getElementById("watchout-list");
  watchoutList.innerHTML = "";
  finalWeaknesses.forEach(w => {
    const li = document.createElement("li");
    li.textContent = w;
    watchoutList.appendChild(li);
  });

  // products => pick first alpha cat if tie
  let mainCatForProducts = (tiedCats.length > 1)
    ? [...tiedCats].sort((a,b)=>a.localeCompare(b))[0]
    : tiedCats[0];

  document.getElementById("products-title").textContent =
    categoriesData[mainCatForProducts].headingForProducts;

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

  // check if all 4 tied
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
 * BUILD PCT MAP
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
 * BUILD OUTPUT (strengths or weaknesses)
 ****************************************************/
function buildOutputItems(topCats, pctMap, keyName) {
  const len = topCats.length;
  if (len === 4) {
    return topCats.map(cat => craftLine(cat, pctMap[cat], categoriesData[cat][keyName][0]));
  } else if (len === 3) {
    return topCats.map(cat => craftLine(cat, pctMap[cat], categoriesData[cat][keyName][0]));
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
 * TEMPLATES
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
