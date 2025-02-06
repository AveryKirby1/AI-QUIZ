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
