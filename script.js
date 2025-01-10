
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
  Planner: ["Anxiety", "Responsibility", "Security", "Prudence", "Relief", "Satisfaction", "Calmness", "Contentment", "Preparedness", "Practicality", "Purpose", "Discipline", "Planning", "Ambition", "Hope", "Determination", "Caution", "Patience", "Control", "Self-Control", "Skepticism", "Balance", "Diligence", "Thoughtfulness", "Self-Preservation", "Distance", "Regret", "Fairness", "Problem-Solving", "Helpfulness", "Simplicity", "Confidence"],
  Adventurer: ["Joy", "Excitement", "Impulsivity", "Curiosity", "Adventure", "Optimism", "Anticipation", "Creativity", "Exploration", "Urgency", "Celebration", "Humor", "Enthusiasm", "Satisfaction", "Social Energy", "Selflessness", "Assertiveness", "Acceptance", "Confidence"],
  Connector: ["Generosity", "Connection", "Gratitude", "Altruism", "Happiness", "Kindness", "Empathy", "Trust", "Self-Respect", "Friendship", "Compassion", "Carefreeness", "Collaboration", "Resourcefulness", "Fulfillment", "Purpose", "Self-Sacrifice", "Fairness", "Problem-Solving"],
  Realist: ["Morality", "Fear", "Concern", "Discomfort", "Shame", "Guilt", "Avoidance", "Frustration", "Restraint", "Disappointment", "Annoyance", "Adaptation", "Self-Control", "Skepticism", "Thoughtfulness", "Regret", "Helpfulness", "Acceptance", "Introspection"]
};

document.getElementById("submit-btn").addEventListener("click", () => {
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

  for (let [category, emotions] of Object.entries(categories)) {
    const count = emotions.reduce((sum, emotion) => sum + (emotionCount[emotion] || 0), 0);
    if (count > maxCount) {
      maxCategory = category;
      maxCount = count;
    }
  }

  const results = document.getElementById("results");
  results.innerHTML = `<h2>You are: ${maxCategory}</h2><p>${getCategoryDescription(maxCategory)}</p>`;
});

function getCategoryDescription(category) {
  const descriptions = {
    Planner: "You are the master of practicality and preparation...",
    Adventurer: "Life is a journey, and you are ready to explore...",
    Connector: "For you, money is about building relationships...",
    Realist: "Grounded, cautious, and practical..."
  };
  return descriptions[category];
}
