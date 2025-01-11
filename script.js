
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

const emotionsMap = {
  q1: {
    A: ["Anxiety", "Responsibility", "Morality", "Fear", "Compassion"],
    B: ["Security", "Prudence", "Relief", "Satisfaction", "Calmness"],
    C: ["Joy", "Excitement", "Impulsivity", "Satisfaction", "Contentment"],
    D: ["Generosity", "Connection", "Gratitude", "Altruism", "Happiness"]
  },
  q2: {
    A: ["Discomfort", "Shame", "Guilt", "Avoidance", "Self-Sacrifice"],
    B: ["Confidence", "Fairness", "Self-Respect", "Calmness", "Assertiveness"],
    C: ["Carefreeness", "Generosity", "Joy", "Humor", "Acceptance"],
    D: ["Altruism", "Connection", "Gratitude", "Happiness", "Fulfillment"]
  },
  q3: {
    A: ["Frustration", "Restraint", "Skepticism", "Disappointment", "Self-Control"],
    B: ["Preparedness", "Practicality", "Contentment", "Security", "Satisfaction"],
    C: ["Excitement", "Impulsivity", "Indulgence", "Curiosity", "Joy"],
    D: ["Generosity", "Fulfillment", "Purpose", "Connection", "Kindness"]
  },
  q4: {
    A: ["Relief", "Responsibility", "Hope", "Security", "Gratitude"],
    B: ["Confidence", "Security", "Discipline", "Contentment", "Planning"],
    C: ["Excitement", "Joy", "Ambition", "Optimism", "Anticipation"],
    D: ["Compassion", "Gratitude", "Connection", "Altruism", "Happiness"]
  },
  q5: {
    A: ["Concern", "Guilt", "Self-Preservation", "Discomfort", "Distance"],
    B: ["Helpfulness", "Problem-Solving", "Responsibility", "Calmness", "Empathy"],
    C: ["Kindness", "Generosity", "Empathy", "Connection", "Altruism"],
    D: ["Trust", "Selflessness", "Connection", "Generosity", "Hope"]
  },
  q6: {
    A: ["Caution", "Regret", "Practicality", "Disappointment", "Security"],
    B: ["Patience", "Responsibility", "Determination", "Hope", "Calmness"],
    C: ["Impulsivity", "Excitement", "Optimism", "Joy", "Adventure"],
    D: ["Collaboration", "Connection", "Resourcefulness", "Optimism", "Gratitude"]
  },
  q7: {
    A: ["Frustration", "Practicality", "Discipline", "Annoyance", "Self-Control"],
    B: ["Balance", "Control", "Adaptation", "Calmness", "Contentment"],
    C: ["Carefreeness", "Satisfaction", "Indulgence", "Joy", "Contentment"],
    D: ["Generosity", "Connection", "Joy", "Fulfillment", "Kindness"]
  },
  q8: {
    A: ["Skepticism", "Caution", "Prudence", "Security", "Anxiety"],
    B: ["Curiosity", "Responsibility", "Diligence", "Caution", "Confidence"],
    C: ["Excitement", "Impulsivity", "Curiosity", "Adventure", "Optimism"],
    D: ["Collaboration", "Optimism", "Generosity", "Curiosity", "Confidence"]
  },
  q9: {
    A: ["Restraint", "Discipline", "Contentment", "Practicality", "Calmness"],
    B: ["Thoughtfulness", "Patience", "Anticipation", "Calmness", "Satisfaction"],
    C: ["Excitement", "Urgency", "Satisfaction", "Impulsivity", "Joy"],
    D: ["Creativity", "Collaboration", "Resourcefulness", "Generosity", "Joy"]
  },
  q10: {
    A: ["Calmness", "Introspection", "Simplicity", "Contentment", "Relief"],
    B: ["Contentment", "Indulgence", "Joy", "Curiosity", "Satisfaction"],
    C: ["Excitement", "Social Energy", "Joy", "Connection", "Celebration"],
    D: ["Connection", "Generosity", "Fulfillment", "Happiness", "Compassion"]
  }
};

const categories = {
  Planner: {
    description: "You are the master of practicality and preparation. You approach financial decisions with thoughtfulness, responsibility, and an eye toward long-term security.",
    strengths: "Security, stability, and preparation.",
    weaknesses: "May miss out on spontaneous opportunities.",
    recommendations: [
      "Key Active Saver® Account – A savings account designed for goal-oriented individuals.",
      "Laurel Road Loan – A flexible loan option for managing expenses.",
      "Key Secured Credit Card® – Ideal for building credit with low risk."
    ]
  },
  Adventurer: {
    description: "Life is a journey, and you are ready to explore every path it takes you on!",
    strengths: "Embraces financial risk and seeks new opportunities.",
    weaknesses: "Can lead to impulsive spending.",
    recommendations: [
      "Key Smart Checking® Account – No monthly maintenance fees.",
      "Key Rewards Credit Card® – Earn points for everyday purchases.",
      "KeyBank Loan – Flexible loan for funding adventures."
    ]
  },
  Connector: {
    description: "For you, money is about building relationships and making the world a better place.",
    strengths: "Generosity and community-driven financial approach.",
    weaknesses: "Needs to prioritize personal financial well-being.",
    recommendations: [
      "Key Family Checking® Account – Manage shared expenses.",
      "Laurel Road Loyalty Savings – Rewards long-term savers.",
      "Key Cashback Credit Card® – Earn cash-back rewards."
    ]
  },
  Realist: {
    description: "Grounded, cautious, and practical—you see the financial world as it is.",
    strengths: "Risk management and security-focused approach.",
    weaknesses: "May avoid taking financial opportunities.",
    recommendations: [
      "Key Safe Checking® Account – Built-in overdraft protection.",
      "Laurel Road High Yield Savings – Steady returns with low risk.",
      "Laurel Road Loan – Structured loan with predictable terms."
    ]
  }
};

function calculateResults() {
  const emotionCount = {};

  for (const [question, answer] of Object.entries(selectedAnswers)) {
    const emotions = emotionsMap[question][answer];
    emotions.forEach(emotion => {
      emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });
  }

  let maxCategory = "";
  let maxCount = 0;

  for (const [category, data] of Object.entries(categories)) {
    const count = data.emotions.reduce((sum, emotion) => sum + (emotionCount[emotion] || 0), 0);
    if (count > maxCount) {
      maxCategory = category;
      maxCount = count;
    }
  }

  const resultsDiv = document.getElementById("results");
  const category = categories[maxCategory];
  const recommendations = category.recommendations.map(item => `<li>${item}</li>`).join("");

  resultsDiv.innerHTML = `
    <h2>You are: ${maxCategory}</h2>
    <p>${category.description}</p>
    <h3>Strengths</h3>
    <p>${category.strengths}</p>
    <h3>Weaknesses</h3>
    <p>${category.weaknesses}</p>
    <h3>Recommended Products</h3>
    <ul>${recommendations}</ul>
  `;
}

window.onload = () => {
  loadQuestion(0);
};
