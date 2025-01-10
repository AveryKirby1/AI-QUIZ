
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

document.getElementById("submit-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents page reload
  const formData = new FormData(document.getElementById("quiz-form"));
  const emotionCount = {};

  for (let [question, answer] of formData.entries()) {
    const emotions = emotionsMap[question][answer];
    emotions.forEach(emotion => {
      emotionCount[emotion] = (emotionCount[emotion] || 0) + 1;
    });
  }

  let maxCategory = "";
  let maxCount = 0;

  for (let [category, data] of Object.entries(categories)) {
    const count = data.recommendations.reduce((sum, emotion) => sum + (emotionCount[emotion] || 0), 0);
    if (count > maxCount) {
      maxCategory = category;
      maxCount = count;
    }
  }

  const results = document.getElementById("results");
  const category = categories[maxCategory];
  const recommendations = category.recommendations.map(item => `<li>${item}</li>`).join("");

  results.innerHTML = `
    <h2>You are: ${maxCategory}</h2>
    <p>${category.description}</p>
    <h3>Strengths</h3>
    <p>${category.strengths}</p>
    <h3>Weaknesses</h3>
    <p>${category.weaknesses}</p>
    <h3>Recommended Products</h3>
    <ul>${recommendations}</ul>
  `;
});
