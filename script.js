/****************************************************
 * QUIZ DATA - Questions, Answers, and Emotions
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
 * CATEGORY DATA - Descriptions, Summaries, Products
 ****************************************************/
const categories = {
  // Each category has a label, description, and an array of all the emotions that define it.
  Planner: {
    name: "The Planner",
    description: `
      You are the master of practicality and preparation. 
      You approach financial decisions with thoughtfulness, responsibility, 
      and an eye toward long-term security. While your careful approach 
      keeps you grounded, you might sometimes miss out on spontaneous 
      opportunities. For you, peace of mind comes from knowing you’re 
      prepared for every contingency.
      
      <strong>Recommended Products:</strong>
      `,
    products: [
      "Key Active Saver® Account – A savings account designed for goal-oriented individuals, offering competitive rates and automatic savings features.",
      "Laurel Road Loan – A flexible loan option to manage major expenses while staying in control of your finances.",
      "Key Secured Credit Card® – Great for building or improving credit with minimal risk."
    ],
    // Full list of characteristic emotions for the Planner
    emotions: [
      "Anxiety","Responsibility","Security","Prudence","Relief","Satisfaction",
      "Calmness","Contentment","Preparedness","Practicality","Purpose","Discipline",
      "Planning","Ambition","Hope","Determination","Caution","Patience","Control",
      "Self-Control","Skepticism","Balance","Diligence","Thoughtfulness","Self-Preservation",
      "Distance","Regret","Fairness","Problem-Solving","Helpfulness","Simplicity","Confidence"
    ]
  },
  Adventurer: {
    name: "The Adventurer",
    description: `
      Life is a journey, and you are ready to explore every path it takes you on!
      Financial decisions are about excitement, curiosity, and seizing opportunities. 
      While your adventurous spirit makes life fun, it can lead to impulsive spending. 
      You feel most fulfilled when trying new things or planning a dream vacation. 
      For you, money is a way to experience life to its fullest.
      
      <strong>Recommended Products:</strong>
      `,
    products: [
      "Key Smart Checking® Account – A flexible checking account with no monthly fees, perfect for spontaneous spending.",
      "Key Rewards Credit Card® – Earn points on everyday purchases like travel and dining.",
      "KeyBank Loan – A flexible loan to fund your next big adventure or investment."
    ],
    emotions: [
      "Joy","Excitement","Impulsivity","Curiosity","Adventure","Optimism","Anticipation",
      "Creativity","Exploration","Urgency","Celebration","Humor","Enthusiasm","Satisfaction",
      "Social Energy","Selflessness","Assertiveness","Acceptance","Confidence"
    ]
  },
  Connector: {
    name: "The Connector",
    description: `
      For you, money is about building relationships and making the world 
      a better place. You view finances as a tool to support community 
      and connect with others. Acts of generosity and shared success 
      bring you emotional satisfaction. You thrive in group settings, 
      but ensure you don’t neglect your own financial well-being. 
      Your heart is full, and your wallet follows suit in supporting 
      those you care about.
      
      <strong>Recommended Products:</strong>
      `,
    products: [
      "Key Family Checking® Account – Manage shared expenses with family or friends easily.",
      "Laurel Road Loyalty Savings – Rewards long-term savers, helping you support loved ones over time.",
      "Key Cashback Credit Card® – Earn cash-back you can use to treat friends or contribute to causes."
    ],
    emotions: [
      "Generosity","Connection","Gratitude","Altruism","Happiness","Kindness","Empathy",
      "Trust","Self-Respect","Friendship","Compassion","Carefreeness","Collaboration",
      "Resourcefulness","Fulfillment","Purpose","Self-Sacrifice","Fairness","Problem-Solving"
    ]
  },
  Realist: {
    name: "The Realist",
    description: `
      Grounded, cautious, and practical—you see the financial world 
      as it is, not as you wish it to be. You prioritize managing risk, 
      avoiding unnecessary spending, and protecting your resources. While 
      it may seem conservative, it helps you navigate challenges with 
      confidence. You approach new trends (like crypto) with skepticism. 
      Your mindset keeps you prepared for both the highs and lows.
      
      <strong>Recommended Products:</strong>
      `,
    products: [
      "Key Safe Checking® Account – Comes with overdraft protection and strong fraud prevention tools.",
      "Laurel Road High Yield Savings – Offers steady returns with low risk.",
      "Laurel Road Loan – Structured loans with predictable terms to manage expenses without unnecessary risk."
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
let selectedEmotions = [];

/****************************************************
 * ON LOAD: INIT QUIZ
 ****************************************************/
window.onload = function () {
  // Show the first question
  displayQuestion(currentQuestionIndex);

  // Hide the "See Results" button by default
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

  // Clear previous question content
  answersEl.innerHTML = "";

  // Get the question object
  const questionObj = questions[index];
  questionEl.textContent = questionObj.question;

  // Create answer radio buttons
  questionObj.answers.forEach((answer, ansIndex) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question_${index}`;
    radio.value = ansIndex;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + answer.text));
    answersEl.appendChild(label);
  });

  // Show or hide buttons based on the question index
  if (index < questions.length - 1) {
    nextBtn.style.display = "inline-block";
    resultsBtn.style.display = "none";
  } else {
    // Last question
    nextBtn.style.display = "none";
    resultsBtn.style.display = "inline-block";
  }
}

/****************************************************
 * MOVE TO NEXT QUESTION (WITH VALIDATION)
 ****************************************************/
function goToNextQuestion() {
  // Validate that an option is selected
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );
  if (!selectedOption) {
    alert("Please select an answer before proceeding.");
    return;
  }

  // Save the selected emotions
  const answerIndex = parseInt(selectedOption.value);
  selectedEmotions.push(...questions[currentQuestionIndex].answers[answerIndex].emotions);

  // Move to the next question
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

/****************************************************
 * CALCULATE AND SHOW RESULTS
 ****************************************************/
function showResults() {
  // Validate last question answer
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );
  if (!selectedOption) {
    alert("Please select an answer before seeing results.");
    return;
  }
  // Push the last question's emotions
  const answerIndex = parseInt(selectedOption.value);
  selectedEmotions.push(...questions[currentQuestionIndex].answers[answerIndex].emotions);

  // Hide the quiz section
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("results-section").classList.remove("hidden");

  // Calculate final category
  const finalCategory = calculateCategory(selectedEmotions);

  // Display results
  const categoryTitleEl = document.getElementById("category-title");
  const categoryDescriptionEl = document.getElementById("category-description");
  const productRecsEl = document.getElementById("product-recommendations");

  categoryTitleEl.textContent = categories[finalCategory].name;
  categoryDescriptionEl.innerHTML = categories[finalCategory].description;

  // Build product recommendations list
  const productList = document.createElement("ul");
  categories[finalCategory].products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product;
    productList.appendChild(li);
  });

  productRecsEl.innerHTML = "";
  const recHeading = document.createElement("h3");
  recHeading.textContent = "Product Recommendations";
  productRecsEl.appendChild(recHeading);
  productRecsEl.appendChild(productList);
}

/****************************************************
 * CALCULATE CATEGORY BASED ON EMOTIONS
 ****************************************************/
function calculateCategory(emotionArray) {
  // Count occurrences of each emotion
  const emotionTally = {};
  emotionArray.forEach(em => {
    emotionTally[em] = (emotionTally[em] || 0) + 1;
  });

  // Tally each category’s total
  let categoryScores = {
    Planner: 0,
    Adventurer: 0,
    Connector: 0,
    Realist: 0
  };

  // For each category, sum up the scores of relevant emotions
  for (let catKey in categories) {
    categories[catKey].emotions.forEach(em => {
      if (emotionTally[em]) {
        categoryScores[catKey] += emotionTally[em];
      }
    });
  }

  // Determine which category has the highest score
  let maxScore = 0;
  let possibleWinners = []; // track categories that tie
  for (let catKey in categoryScores) {
    if (categoryScores[catKey] > maxScore) {
      maxScore = categoryScores[catKey];
      possibleWinners = [catKey];
    } else if (categoryScores[catKey] === maxScore) {
      possibleWinners.push(catKey);
    }
  }

  // If there is a tie, pick one randomly
  if (possibleWinners.length > 1) {
    const randomIndex = Math.floor(Math.random() * possibleWinners.length);
    return possibleWinners[randomIndex];
  } else {
    return possibleWinners[0];
  }
}
