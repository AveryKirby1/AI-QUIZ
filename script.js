// script.js

/****************************************************
 * QUESTIONS ARRAY (10 total, multiple selection)
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
 * SINGLE CATEGORY DATA (With Updated Pitches/Benefits)
 ****************************************************/
const categoriesData = {
  Planner: {
    name: "Planner",
    article: "a",
    headingForProducts: "Plan Your Next Steps",
    description:
      `You are the master of practicality and preparation. You approach financial decisions 
      with thoughtfulness, responsibility, and an eye toward long-term security. While your 
      careful approach keeps you grounded, you might sometimes miss out on spontaneous 
      opportunities. You thrive on structure and routine, preferring to plan each step to 
      avoid surprises. By setting clear goals and budgets, you gain peace of mind and a 
      sense of accomplishment.`,
    shortDescription:
      `Planners focus on structured routines and detailed goal-setting to ensure 
      financial stability, excelling at avoiding costly surprises. While a tendency to 
      overthink can slow decisions, this disciplined approach provides peace of mind 
      and fosters steady, long-term security.`,
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
      {
        name: "Key Smart Checking®",
        pitch: "Your organized mindset thrives when every transaction is transparent and secure. With Key Smart Checking®, you’ll track each bill or deposit in the KeyBank mobile app, using instant alerts and secure sign-on to keep finances meticulously under control.",
        benefits: [
          "No monthly maintenance fee to minimize unexpected costs",
          "Online bill pay & mobile deposit for streamlined budgeting",
          "Real-time balance/transaction alerts to stay in sync with plans",
          "Early Pay (if eligible) for quicker paycheck access"
        ]
        + image: "images/checking.png"
      },
      {
        name: "Key Active Saver®",
        pitch: "Because you value predictability, this auto-savings feature helps you move a small amount to savings each time you spend. Access it all through KeyBank’s digital dashboard, so you can confirm every deposit and keep a precise saving schedule.",
        benefits: [
          "Auto-transfer on each debit card purchase (amount set by you)",
          "Low or no monthly fee if you have a KeyBank checking",
          "Adjustable settings in the mobile app (pause/change transfer)",
          "Full transaction logs for exact tracking"
        ]
      },
      {
        name: "Key Secured Credit Card®",
        pitch: "A secured card helps you build credit without risking overspending, and KeyBank’s security tools—like card lock/unlock and online statements—support your methodical budgeting. You decide your credit limit, watch progress in the app, and maintain complete control.",
        benefits: [
          "Security deposit sets the credit limit",
          "No annual fee for this secured product",
          "Reports to major credit bureaus for credit-building",
          "Card controls & real-time alerts to track every purchase"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Large expenses won’t derail your careful timelines when you have a predictable monthly loan payment. KeyBank’s online portal shows your payoff schedule and offers autopay setup, so each step stays neatly on track.",
        benefits: [
          "Fixed APR for stable, planned repayment",
          "No origination fee to keep the costs clear",
          "Terms from 12 to 84 months to fit your budget",
          "Online application & management for instant updates"
        ]
      }
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
    description:
      `Financial decisions for you are often about excitement, curiosity, 
      and seizing new opportunities. You embrace risk with a positive mindset, 
      driven by optimism and the thrill of the unknown. Each financial challenge 
      is a chance to explore fresh possibilities, and you rarely shy away from 
      trying something new. You see setbacks as growth opportunities, fueling 
      your eagerness to keep pushing boundaries.`,
    shortDescription:
      `Adventurers thrive on excitement and are quick to explore new financial 
      possibilities, guided by an optimistic spirit. Though impulsive choices 
      may arise, balancing spontaneity with prudent planning sustains momentum 
      and protects against the downsides of taking bold risks.`,
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
      {
        name: "KeyBank Hassle-Free Checking®",
        pitch: "No monthly fees or checks to slow you down—this account pairs seamlessly with KeyBank’s mobile app so you can pay bills on the fly and get text alerts on your balance. Keep life easy, flexible, and ready for your next big thrill.",
        benefits: [
          "No monthly maintenance fee; checkless format",
          "No overdraft fees—transactions decline if over balance",
          "Debit card & online payments for quick handling",
          "Mobile & online alerts for instant spending updates"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Set up a tiny, automatic deposit each time you swipe, letting you build funds for your spontaneous plans without conscious effort. You’ll see a running total in KeyBank’s app, so you know exactly when to pounce on that next adventure.",
        benefits: [
          "Auto micro-deposit on each debit purchase",
          "Easily adjusted or paused anytime in the mobile app",
          "Low/no monthly fee with qualifying checking",
          "Real-time savings logs for quick glimpses of progress"
        ]
      },
      {
        name: "Key2More Rewards®",
        pitch: "Every impulsive purchase now becomes a pathway to more fun, thanks to reward points you can redeem later. Meanwhile, digital card controls let you set alerts or lock your card instantly if you misplace it mid-adventure.",
        benefits: [
          "Points on every purchase; 0% intro APR for a set period on new buys",
          "No annual fee; easy redemption (travel, gift cards, statement credit)",
          "Card controls & alerts in the KeyBank mobile app",
          "Fraud monitoring for safe spending"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Kick off your dream trip or bucket-list project with a lump sum, then check your payoff schedule through KeyBank’s online portal whenever you’re back from exploring. You keep the thrill alive while your repayment stays organized.",
        benefits: [
          "Fixed-rate loan for predictable monthly payments",
          "No origination fee for straightforward costs",
          "Terms from 12–84 months to adjust to your pace",
          "Mobile app to track remaining balance and set autopay"
        ]
      }
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
    description:
      `You view finances as a tool to support your community and bond with others. 
      Whether it’s through generosity or lending a helping hand, you find emotional 
      satisfaction in giving back. Working together toward common goals brings you 
      genuine joy, and you take pride in uplifting those around you. In your mind, 
      money only has true value when it’s used to strengthen relationships and 
      foster goodwill.`,
    shortDescription:
      `Connectors treat finances as a means to strengthen bonds and nurture communal 
      goals, emphasizing generosity and shared victories. A highly giving nature 
      can lead to overextension, but mindful boundaries preserve both personal 
      well-being and the desire to uplift others.`,
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
      {
        name: "Key Smart Checking®",
        pitch: "Effortlessly send money to friends or split bills, thanks to a checking account that integrates with digital transfers and mobile payments. You’ll be free to focus on the people you care about while the app keeps transactions transparent.",
        benefits: [
          "No monthly fee on certain conditions",
          "Unlimited check writing and debit usage",
          "Zelle® integration for person-to-person payments (if available)",
          "Online statements & alerts for group expense clarity"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "When you set aside a bit each time you spend, you’re always ready to lend a hand or contribute to group activities. KeyBank’s app shows your running balance, so you can step up when others need you.",
        benefits: [
          "Auto micro-transfer on each debit purchase",
          "Customizable transfer amount or pause any time",
          "Low/no monthly fee with a linked KeyBank checking",
          "Mobile & online logs for easy oversight"
        ]
      },
      {
        name: "Key Cashback Credit Card®",
        pitch: "Your communal spirit will love turning every purchase into extra cash-back that can be shared or donated. Real-time spending alerts in KeyBank’s app help you keep track, so you can continue giving without missing a beat.",
        benefits: [
          "Up to 2% cash back with qualifying KeyBank checking",
          "No annual fee; simple redemption as statement credit",
          "Digital card controls for quick freeze/unfreeze",
          "Fraud monitoring & alerts for safe group use"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Sometimes, helping others requires extra funds right away. This loan’s fixed monthly payment keeps your finances stable, while KeyBank’s online portal lets you manage it seamlessly so you never lose sight of your bigger financial picture.",
        benefits: [
          "Fixed APR with no origination fee",
          "Terms up to 84 months for flexible repayment",
          "Full digital application; autopay available",
          "Transparent online payoff schedule for easy check-ins"
        ]
      }
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
    description:
      `You prioritize managing risk, avoiding unnecessary spending, and protecting resources. 
      While your approach may appear conservative, it helps you navigate challenges with 
      confidence. You prefer stable, dependable strategies over flashy risks, trusting solid 
      data and proven methods. This mindset keeps you prepared, ensuring you can handle both 
      the ups and downs of your financial journey.`,
    shortDescription:
      `Realists favor low-risk, dependable strategies to protect resources, guided by caution 
      and clear data. While they may pass up certain prospects, measured openness to calculated 
      risk can uncover worthwhile gains, ensuring security without sacrificing every chance 
      for growth.`,
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
      {
        name: "Key Safe Checking®",
        pitch: "Peace of mind comes from knowing you can’t accidentally overspend. This account blocks potential overdrafts and sends you instant balance alerts via KeyBank’s app, so you’re always in control.",
        benefits: [
          "Declines transactions exceeding your balance",
          "Low-risk approach to everyday checking",
          "Debit-based usage plus online bill pay",
          "Mobile alerts for spending threshold notifications"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Tiny transfers to savings every time you buy something reduce risk, build your safety net, and keep you in charge. KeyBank’s digital platform shows each deposit, ensuring no surprises and total transparency.",
        benefits: [
          "Automatic saving on each debit purchase",
          "Adjust or pause in the mobile app",
          "Fee waived if linked with eligible checking",
          "Transaction logs for exact tracking"
        ]
      },
      {
        name: "KeyBank Latitude®",
        pitch: "A lengthy 0% intro APR helps you handle unplanned costs without incurring high interest right away, while KeyBank’s fraud protection and card alerts keep spending strictly within your comfort zone.",
        benefits: [
          "0% intro APR for up to 15 months on purchases/balance transfers",
          "No annual fee; potentially lower ongoing APR than many rewards cards",
          "Fraud alerts and card lock/unlock via mobile app",
          "Digital statements for precise expense management"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "When bigger expenses loom, a fixed-rate loan is your safest bet for predictable monthly bills. Autopay and online monitoring let you confirm each payment is on schedule—no hidden twists.",
        benefits: [
          "Fixed APR; no origination fee",
          "Terms from 12 to 84 months",
          "Online application and e-sign",
          "Autopay from checking for potential convenience or rate discounts"
        ]
      }
    ],
    emotions: [
      "Apprehension","Duty","Caution","Skepticism","Reserved",
      "Logic","Restraint","Practical","Realism","Grounded"
    ]
  }
};

/****************************************************
 * TIE CATEGORY DATA (With Updated Pitches/Benefits)
 ****************************************************/
const tieData = {
  "Adventurer+Planner": {
    combinedName: "Adventurous Planner",
    description:
      `An optimistic approach to new possibilities merges seamlessly with meticulous 
      planning and goal-setting, striking a balance between excitement and long-term security. 
      Fresh ideas stay grounded in structured strategies, ensuring you can dream big without 
      losing stability. Confidence comes from thorough research, yet there’s still room 
      for spontaneity. It’s an outlook that lets you relish life’s thrills while steadily 
      building toward future ambitions.`,
    products: [
      {
        name: "Key Smart Checking",
        pitch: "For big ideas balanced by careful tracking, a no-fee checking with robust online tools lets you pursue spontaneous buys but keep each detail in your digital ledger. Real-time alerts help you pivot fast while staying on top of your plan.",
        benefits: [
          "No monthly maintenance fee",
          "Online bill pay & mobile deposit",
          "Low minimum opening deposit",
          "Early Pay option (if eligible) for quick paycheck"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Auto-deposits let you chase excitement while still building a strong safety net. And KeyBank’s app keeps it transparent, so you can ensure your impulse buys never disrupt your long-term goals.",
        benefits: [
          "Micro-transfer each time you use your debit card",
          "Customizable or pausable in the mobile app",
          "Fee waived if linked to KeyBank checking",
          "View balances in real time"
        ]
      },
      {
        name: "Key2More Rewards®",
        pitch: "Enjoy points on every exciting purchase, then plan their redemption carefully for future goals. You get short 0% intro APR for initial spending, plus digital card controls to keep your budget in check.",
        benefits: [
          "Rewards on all spending, no annual fee",
          "0% intro APR on new purchases for a set period",
          "Redeem points for travel, gift cards, statement credit",
          "Card controls and alerts in the KeyBank app"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Tackling a major project or fulfilling a dream is simpler with a lump sum and set payments. You see every payment detail online, blending your adventurous ambition with precise monthly structure.",
        benefits: [
          "Fixed APR, no origination fee",
          "Terms 12–84 months",
          "Autopay from checking if desired",
          "Digital application & payoff schedule online"
        ]
      }
    ]
  },
  "Adventurer+Connector": {
    combinedName: "Adventurous Connector",
    description:
      `An eagerness for bold experiences joins forces with a caring, collaborative mindset, 
      fueling both personal growth and communal uplift. Daring choices become more meaningful 
      when they also serve friends, family, or a broader network. Forward momentum comes from 
      embracing new opportunities, all the while celebrating shared wins. Together, it forms 
      a synergy where excitement and social responsibility flourish side by side.`,
    products: [
      {
        name: "KeyBank Hassle-Free Checking®",
        pitch: "Spontaneous gatherings and communal expenses won’t lead to overdraft fees here. You can quickly send or receive money in the KeyBank app, keeping each group outing lighthearted and easy.",
        benefits: [
          "No monthly fee; fully electronic",
          "No paper checks or overdraft fees",
          "Debit-only usage for simplicity",
          "Instant mobile balance checks"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Whether you’re funding a surprise group trip or gifting a friend, incremental saving ensures you always have a little something on hand. The mobile dashboard tracks contributions, so you know just how much you can spare.",
        benefits: [
          "Auto small deposit per debit purchase",
          "Adjustable or pause at will",
          "Low/no monthly fee with checking link",
          "Full visibility in the KeyBank app"
        ]
      },
      {
        name: "Key Cashback Credit Card®",
        pitch: "Turn every impulsive purchase into extra cash that can power shared experiences or go straight to someone who needs a lift. Meanwhile, KeyBank’s card alerts let you see real-time spending if you’re pitching in for friends.",
        benefits: [
          "Up to 2% cash back with qualifying KeyBank checking",
          "No annual fee; statement credit redemption",
          "Digital lock/unlock for security",
          "Fraud monitoring for safe group usage"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Ready to fund a big communal plan or help someone cover an emergency? This lump-sum loan gives you immediate resources, while the online portal keeps your repayment organized and clear.",
        benefits: [
          "Fixed APR and term lengths",
          "No origination fee",
          "Digital application and e-sign",
          "Manage monthly payments in the mobile app"
        ]
      }
    ]
  },
  "Adventurer+Realist": {
    combinedName: "Adventurous Realist",
    description:
      `Creative exploration blends with a fact-driven, cautious perspective, maintaining a 
      healthy tension between passion and pragmatism. Bold moves never lose sight of stable 
      outcomes, ensuring enthusiasm doesn’t overshadow sound judgment. Forward motion is 
      fueled by curiosity, yet guided by measured analysis. The result is a mindset that 
      welcomes new ventures but insists on level-headed planning to keep risks in check.`,
    products: [
      {
        name: "KeyBank Hassle-Free Checking®",
        pitch: "You’re open to unexpected fun but won’t risk expensive overdrafts. This checkless, fee-free account, coupled with KeyBank’s real-time alerts, means you can spend spontaneously while maintaining financial safety.",
        benefits: [
          "No monthly fee; no paper checks",
          "Declines over-balance transactions",
          "Debit card & online payments",
          "Balance notifications via mobile"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Even if you indulge in spur-of-the-moment purchases, small auto-transfers mean you’re still stashing funds for safety. The app’s deposit logs give you the security of knowing exactly how your cushion grows.",
        benefits: [
          "Micro-transfer on each debit purchase",
          "Modify or pause at will",
          "Possible fee waiver with checking",
          "Real-time logs in KeyBank mobile"
        ]
      },
      {
        name: "KeyBank Latitude®",
        pitch: "A 0% intro APR gives you the freedom to act on an exciting opportunity, then pay it off interest-free if you do so within that window. Online fraud alerts and spending controls add a safety layer to match your careful side.",
        benefits: [
          "0% intro APR on purchases/transfers for set period",
          "No annual fee",
          "Digital card lock/unlock for security",
          "Lower ongoing APR than some reward cards"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Funding big adventures or necessary emergencies can still fit your cautious budget, thanks to fixed-rate payments. Track the payoff in KeyBank’s app, keeping your realistic boundaries intact.",
        benefits: [
          "Fixed APR for predictable costs",
          "No origination fee",
          "Terms up to 84 months",
          "Online autopay & balance checks"
        ]
      }
    ]
  },
  "Planner+Connector": {
    combinedName: "Connected Planner",
    description:
      `Practical, long-term strategies align with a genuine desire to see others thrive, 
      weaving personal security and communal benefit into one roadmap. Methodical budgeting 
      and goal-setting not only stabilize your finances but also create pathways for 
      collaborative success. Discipline in planning doesn’t preclude caring deeply about 
      shared outcomes. Ultimately, it’s an approach that merges structure and empathy, 
      leaving room for both prosperity and heartfelt connection.`,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: "Whether coordinating shared expenses or just tidying everyday transactions, you’ll love having no monthly fee and a robust app for splitting bills and setting alerts. It keeps everyone on the same page without clutter.",
        benefits: [
          "No monthly fee",
          "Unlimited checks, debit usage",
          "Online bill pay for group bills",
          "Early Pay (if eligible) for quicker paychecks"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Steady auto-savings ensure you’re prepared to assist friends or meet a communal goal. The KeyBank app shows each deposit, so you can plan exactly how and when to share your funds.",
        benefits: [
          "Auto small deposit per purchase",
          "Fee waived with eligible checking",
          "Pause or adjust any time",
          "Transparent logs in the mobile app"
        ]
      },
      {
        name: "Key Cashback Credit Card®",
        pitch: "No intricate points system here—just cash back you can quickly share or reinvest in your budget. You’ll have online spending alerts to ensure every purchase aligns with the structured, caring approach you bring.",
        benefits: [
          "Earn up to 2% cash back with KeyBank checking",
          "No annual fee; redeem as statement credit",
          "Mobile card controls & fraud monitoring",
          "Straightforward reward structure"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Sometimes your collaborative plans need a chunk of money now, but you also want a tidy payoff schedule. This loan keeps the monthly cost predictable, and digital tools let you check balances or set autopay with ease.",
        benefits: [
          "Fixed APR for stable installments",
          "No origination fee",
          "12–84 months repayment",
          "Online payment management"
        ]
      }
    ]
  },
  "Planner+Realist": {
    combinedName: "Realistic Planner",
    description:
      `Careful goal-setting pairs with a guarded, data-driven stance on risk, building a 
      foundation of consistent and reliable progress. Impulsive choices rarely gain ground 
      here, as every idea is vetted through proven methods. An orderly framework provides 
      the structure needed to avoid unpleasant surprises. In this environment, measured 
      action leads to steady financial stability, free from unnecessary gambles.`,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: "You rely on a meticulously crafted budget, and this account prevents overdrafts entirely, matching your cautious streak. KeyBank’s secure mobile app provides transaction alerts so every dollar is accounted for.",
        benefits: [
          "Declines over-balance transactions (no overdrafts)",
          "Debit-only usage for clarity",
          "Online bill pay and deposit for convenience",
          "Alerts to watch each spend"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Strategic saving in small increments keeps your risk low and your budget on plan. You’ll see each deposit in KeyBank’s app, so there’s zero guesswork about your growing safety net.",
        benefits: [
          "Tiny auto-deposits per purchase",
          "Full control via mobile or online",
          "Low/no monthly fee if linked to checking",
          "Logs for each transaction"
        ]
      },
      {
        name: "KeyBank Latitude®",
        pitch: "A long 0% intro APR matches your preference for stable, low-risk credit usage, while KeyBank’s advanced security features add peace of mind. You can plan precisely how to pay off balances before interest kicks in.",
        benefits: [
          "0% intro APR on purchases/transfers for set period",
          "No annual fee",
          "Potentially lower ongoing APR than reward cards",
          "Fraud alerts & digital card controls"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "For debt consolidation or a big expense, a predictable monthly bill is essential. You’ll check off each payment in KeyBank’s portal, ensuring your careful, risk-averse plan goes exactly as intended.",
        benefits: [
          "Fixed APR, no origination fee",
          "Terms up to 84 months",
          "Online application & autopay",
          "Transparent monthly cost"
        ]
      }
    ]
  },
  "Connector+Realist": {
    combinedName: "Realistic Connector",
    description:
      `A strong sense of generosity and collaboration is tempered by cautious financial 
      management, ensuring supportive efforts don’t compromise security. Thoughtful teamwork 
      can empower everyone, yet careful analysis remains a guiding principle. Balancing 
      empathy with level-headedness helps avoid overextending resources in the name of kindness. 
      It’s an approach that keeps group goals in sight while protecting everyone’s interests.`,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: "You love being there for others, but not at the cost of overdrafts or hidden fees. This checking approach ensures every transaction remains fully funded, with mobile updates that show you exactly where you stand.",
        benefits: [
          "Blocks transactions over your balance",
          "Debit-based usage with minimal risk",
          "Online bill pay & deposit for daily ease",
          "Real-time alerts to avoid surprises"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "A gentle, incremental savings method suits your cautious nature and ensures you’ve always got something set aside for friends or family. With the KeyBank app, you can see each deposit and be ready to give when needed.",
        benefits: [
          "Auto micro-deposit each time you purchase",
          "Adjustable or pause at will",
          "Fee waived if linked to qualifying checking",
          "Immediate visibility via mobile logs"
        ]
      },
      {
        name: "Key Cashback Credit Card®",
        pitch: "Straightforward cash back lets you confidently share rewards, knowing there’s no complicated point system. Digital alerts keep everything transparent so you can help others without risking your financial stability.",
        benefits: [
          "Up to 2% back with KeyBank checking",
          "No annual fee; simple redemption",
          "Secure card lock/unlock in mobile app",
          "Fraud monitoring and real-time spending notifications"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "When those you care about need significant help, a fixed-rate loan offers immediate funds, repaid safely over time. You remain compassionate while KeyBank’s digital tracking ensures every payment stays on schedule.",
        benefits: [
          "Fixed APR, no origination fee",
          "12–84 months term flexibility",
          "Online application & e-sign",
          "Clear monthly billing structure"
        ]
      }
    ]
  },
  "Adventurer+Connector+Planner": {
    combinedName: "Adventurous, Connected Planner",
    description:
      `Excitement for new possibilities meets structured planning and a caring heart for 
      collective success. Bold ideas thrive when carefully mapped out and shared with 
      those around you, letting optimism and discipline work hand in hand. Rather than 
      rushing headlong, there’s a mindful effort to keep progress beneficial for all involved. 
      This synergy nurtures both personal ambition and the well-being of friends or 
      community members.`,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: "Your buzzing lifestyle needs a checking account with zero monthly fees, where you can also coordinate group bills. KeyBank’s mobile alerts let you handle spontaneous outings, while staying in sync with every transaction.",
        benefits: [
          "No monthly fee",
          "Unlimited checks/debit usage",
          "Early Pay (if eligible) for direct deposit",
          "Online bill pay and deposit"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "You juggle exciting ideas, group obligations, and precise budgeting. Automatic small deposits ensure you don’t forget the future, and KeyBank’s app keeps each deposit visible so you can plan collaborative goals.",
        benefits: [
          "Auto micro-deposit on each debit purchase",
          "Waived monthly fee if linked to checking (conditions apply)",
          "Adjustable or pause at will",
          "Transparent logs in the mobile app"
        ]
      },
      {
        name: "Key2More Rewards®",
        pitch: "Shopping for group ventures or your own thrills becomes more rewarding with points, and you’ll schedule redemptions whenever it suits your careful planning. Digital spending alerts keep the entire process shared and organized.",
        benefits: [
          "Earn points on all purchases",
          "0% intro APR on new purchases for a set period",
          "No annual fee; easy redemption",
          "Real-time card usage notifications"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "For ambitious group plans or personal projects, a lump sum at a fixed rate ensures you can act boldly while maintaining a concrete repayment strategy. KeyBank’s digital loan management lets you set autopay and confirm each step matches your plan.",
        benefits: [
          "Fixed APR; no origination fee",
          "Terms 12–84 months",
          "Online application & payment tracking",
          "Predictable monthly costs"
        ]
      }
    ]
  },
  "Adventurer+Connector+Realist": {
    combinedName: "Adventurous, Connected Realist",
    description:
      `A drive for discovery blends with generous intentions and a no-nonsense eye on risk, 
      creating an outlook that values bold moves but remains firmly grounded. Ventures that 
      benefit others are pursued if they fit within sensible guidelines, helping everyone flourish. 
      Growth is fueled by curiosity and collaboration, yet governed by prudent decision-making. 
      It’s a path where excitement, social awareness, and practical strategy maintain equilibrium.`,
    products: [
      {
        name: "KeyBank Hassle-Free Checking®",
        pitch: "Spontaneous group expenses shouldn’t lead to surprise fees. This checkless, no-fee account works with digital alerts so you can help friends fast while avoiding overdrafts or hidden costs.",
        benefits: [
          "No monthly fee; no checks",
          "Declines overdrafts automatically",
          "Online and mobile pay",
          "Quick balance updates in the KeyBank app"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Each swipe sets aside a bit of money, allowing you to step up for friends without risking major lumps. KeyBank’s online dashboard shows exactly how much you’ve stored, balancing risk with generosity.",
        benefits: [
          "Auto small deposit per debit purchase",
          "Adjust or pause at any time",
          "Possible fee waiver with checking link",
          "Transparent deposit logs in the app"
        ]
      },
      {
        name: "KeyBank Cashback Credit Card®",
        pitch: "Turning your everyday buys into cash-back reserves means you can quickly assist a friend or fund a shared outing. Online fraud alerts and real-time spending controls match your cautious side, ensuring you don’t overshoot.",
        benefits: [
          "Up to 2% cash back with KeyBank checking",
          "No annual fee",
          "Digital card lock/unlock features",
          "Fraud monitoring for extra security"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Sometimes bigger help or a bold shared plan demands immediate funds, and a fixed-rate loan provides that while keeping you firmly in control. Use KeyBank’s online portal to manage each payment, preserving your realistic boundaries.",
        benefits: [
          "Fixed APR, no origination fee",
          "Terms up to 84 months",
          "Autopay & digital payoff tracking",
          "Clear, stable monthly costs"
        ]
      }
    ]
  },
  "Adventurer+Planner+Realist": {
    combinedName: "Adventurous, Realistic Planner",
    description:
      `An appetite for new adventures runs alongside detailed planning and pragmatic caution. 
      Breakthrough ideas feel invigorating, but each step is backed by reliable methods 
      that preserve financial stability. There’s room for spontaneity and fresh perspectives, 
      yet an underlying framework keeps risk in check. This mix shapes an approach that 
      strives for innovative progress without losing sight of security or discipline.`,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: "Your free-spirited side needs quick, fuss-free spending, while your methodical and risk-averse inclinations demand transparent oversight. A no-fee checking account with digital alerts hits both marks, letting you explore and monitor each move.",
        benefits: [
          "No monthly fee",
          "Online bill pay, mobile deposit, real-time alerts",
          "Early Pay (if eligible) for direct deposits",
          "Low opening deposit requirement"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Auto-saving each time you use your debit card offers a cushion for bold decisions, yet stays carefully within your outlined plan. The KeyBank app shows each deposit so you never lose sight of your big picture.",
        benefits: [
          "Auto micro-deposit each time you purchase",
          "Adjustable/pause feature for total control",
          "Fee waived if linked to checking (conditions apply)",
          "Transparent logs in the mobile app"
        ]
      },
      {
        name: "Key2More Rewards®",
        pitch: "Rewards on your adventurous spending plus a short 0% intro APR caters to your spontaneous side, while your planner personality redeems those points strategically. Advanced security tools keep your risk level acceptable.",
        benefits: [
          "Points on all purchases, no annual fee",
          "0% intro APR on new purchases for a limited time",
          "Card lock/unlock in the KeyBank app",
          "Redeem for travel, gift cards, or statement credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "An upfront loan at a fixed rate gives you freedom to fund a big idea while sticking to predictable monthly payments. KeyBank’s online tool shows your repayment timeline, merging adventurous moves with cautious planning.",
        benefits: [
          "Fixed APR; no origination fee",
          "Terms up to 84 months",
          "Online application & autopay options",
          "Stable monthly billing"
        ]
      }
    ]
  },
  "Connector+Planner+Realist": {
    combinedName: "Connected, Realistic Planner",
    description:
      `Community-focused values intersect with thorough organization and a conservative 
      approach to risk, forming a calm yet people-centric vision. Collaborative efforts 
      can blossom under systematic goals, ensuring that everyone moves forward together. 
      Each decision is researched, reducing the likelihood of mistakes or unexpected challenges. 
      The result is a measured but caring style that safeguards resources while 
      nurturing shared triumphs.`,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: "You care about people around you but won’t gamble on overdrafts. This checking account ensures transactions never exceed what you have, while the mobile alerts keep group or personal budgets secure.",
        benefits: [
          "Declines over-balance transactions",
          "Online bill pay & mobile deposit for easy usage",
          "Debit card with real-time alerts",
          "Straightforward fee structure"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "A small auto-deposit into savings on each purchase helps you build a resource for collaborative goals or a friend in need. You remain risk-averse by keeping the amounts small and fully visible in the app.",
        benefits: [
          "Micro-savings on every debit purchase",
          "Pause or adjust in the KeyBank app",
          "Low/no monthly fee if linked to checking",
          "Clear deposit logs for each transaction"
        ]
      },
      {
        name: "Key Cashback Credit Card®",
        pitch: "Earn up to 2% cash back on routine spending, which you can methodically direct toward group projects or personal goals. Digital alerts help you stay within safe limits while still supporting others generously.",
        benefits: [
          "Up to 2% back with a qualifying checking relationship",
          "No annual fee; easy cash redemption",
          "Fraud monitoring & card lock/unlock",
          "Online statements for neat expense control"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "Your structured mindset ensures a fixed-rate personal loan lets you assist loved ones or fund a collaborative initiative without risking financial turmoil. KeyBank’s digital payoff tracking keeps every payment clear.",
        benefits: [
          "Fixed APR; no origination fee",
          "Terms from 12–84 months",
          "Online application & e-sign",
          "Autopay to maintain stable repayments"
        ]
      }
    ]
  },
  "Adventurer+Connector+Planner+Realist": {
    combinedName: "Adventurous, Connected, Realistic Planner",
    description:
      `A love of fresh experiences, a generous spirit, structured direction, and factual 
      risk assessment all converge here, weaving excitement and caution into one strategy. 
      Bold ideas are considered through careful planning and validated against collective 
      well-being, so each move feels both thrilling and responsible. Research and collaboration 
      guide your decisions, balancing personal goals with communal benefit. This all-encompassing 
      blend aims to harmonize exploration, empathy, security, and practicality in every 
      financial choice.`,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: "With so many facets—spontaneity, community spirit, structured planning, and caution—you need a checking account that’s flexible yet transparent. Real-time alerts and no monthly fees keep your finances fluid but carefully managed in KeyBank’s app.",
        benefits: [
          "No monthly fee",
          "Online bill pay & mobile deposit",
          "Early Pay (if eligible) for direct deposit",
          "Low opening deposit requirement"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: "Every purchase quietly grows your savings, letting you jump on group plans, lend a hand, or safeguard yourself, all while keeping an eye on risk. The app shows every small deposit, merging all your traits into one neat method.",
        benefits: [
          "Auto micro-deposit on each debit use",
          "Pause or adjust in mobile or online banking",
          "Fee waived with qualifying checking",
          "Real-time balance updates"
        ]
      },
      {
        name: "Key Cashback Credit Card®",
        pitch: "Up to 2% cash back covers your adventurous spur-of-the-moment shopping, your desire to share resources, your organized approach to budgeting, and your caution about hidden fees. Digital alerts and card controls mean everything stays on track.",
        benefits: [
          "Up to 2% cash back with KeyBank checking",
          "No annual fee; straightforward redemption",
          "Online lock/unlock for security",
          "Fraud protection & real-time notifications"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: "When a big opportunity or urgent need arises for your group or personal ambition, a fixed-rate loan provides the lump sum safely. KeyBank’s online payoff schedule merges your bold goals with a stable, cautious repayment structure.",
        benefits: [
          "Fixed APR, no origination fee",
          "Terms up to 84 months",
          "Digital application & e-sign for convenience",
          "Monthly cost is predictable and transparent"
        ]
      }
    ]
  }
};

/****************************************************
 * GLOBAL STATE
 ****************************************************/
let currentQuestionIndex = 0;
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

  const qObj = questions[index];
  questionEl.textContent = qObj.question;
  selectInstrEl.textContent = "(Select all that apply)";

  qObj.answers.forEach((ans, ansIdx) => {
    const card = document.createElement("div");
    card.className = "answer-card";
    card.onclick = () => {
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

  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

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

  let sortedArray = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  return { sortedArray };
}

/****************************************************
 * TIE or SINGLE
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
    return { name: comboName, article, description: comboDesc };
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

  document.getElementById("intro-paragraph").textContent =
    "Finances touch our lives in personal ways and can often feel overwhelming. " +
    "At KeyBank, we celebrate the uniqueness of each individual’s approach to money, " +
    "so we can help you thrive in your financial life.";
 document.getElementById("category-name").textContent = name;
document.getElementById("category-name").classList.add("red-text");

  document.getElementById("category-description").innerHTML = description;

  buildDistributionBars(sortedArray, tiedCats);

  const distributionContainer = document.getElementById("distribution-container");
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const topPct = Math.round((sortedArray[0][1] / total) * 100);

  const distributionTitle = document.createElement("h3");
  // ADD this block in its place:
if (topPct === 100 && tiedCats.length === 1) {
  distributionTitle.innerHTML = `Your <span class="key-span">key</span> money signs:`;
} else {
  distributionTitle.innerHTML = `
    While one money sign leads the way, others add depth to your financial personality!
  `;
}

// Also center it in the middle 50% of the page:
distributionTitle.style.width = "50%";
distributionTitle.style.margin = "0 auto";
distributionTitle.style.textAlign = "center";

  distributionContainer.insertBefore(distributionTitle, document.getElementById("category-bars"));

  const plusCallout = document.createElement("p");
  plusCallout.className = "plus-callout-small";
  plusCallout.textContent = `Click the “+” icons to view more about each non-winning category.`;
  distributionContainer.appendChild(plusCallout);


  const topCatsForBullets = determineTopCats(sortedArray);
  const pctMap = buildPctMap(sortedArray);

  const finalStrengths = buildOutputItems(topCatsForBullets, pctMap, "strengths");
  const finalWeaknesses = buildOutputItems(topCatsForBullets, pctMap, "weaknesses");

  const excelList = document.getElementById("excel-list");
  excelList.innerHTML = "";
  finalStrengths.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = s;
    excelList.appendChild(li);
  });

  const watchoutList = document.getElementById("watchout-box").querySelector("ul");
  watchoutList.innerHTML = "";
  finalWeaknesses.forEach(w => {
    const li = document.createElement("li");
    li.innerHTML = w;
    watchoutList.appendChild(li);
  });

  // Determine if single or tie scenario
  let productsArray;
  if (tiedCats.length === 1) {
    // Single category
    productsArray = categoriesData[tiedCats[0]].products;
    document.getElementById("products-title").textContent =
      categoriesData[tiedCats[0]].headingForProducts;
  } else {
    // Tied scenario - sort to get the tieKey
    const sortedTied = [...tiedCats].sort((a,b)=>a.localeCompare(b));
    const tieKey = sortedTied.join("+");
    if (tieData[tieKey]) {
      productsArray = tieData[tieKey].products;
      document.getElementById("products-title").textContent =
        "A Hybrid Approach to Your Financial Life";
    } else {
      productsArray = [];
      document.getElementById("products-title").textContent =
        "A Mixed Approach to Your Financial Life";
    }
  }

  const productContainer = document.getElementById("product-recommendations");
  productContainer.innerHTML = "";

  productsArray.forEach(prod => {
    // Create the overall card container
const card = document.createElement("div");
card.className = "product-card";

// 1) Top header (10%)
const headerDiv = document.createElement("div");
headerDiv.className = "product-header";

const headerTitle = document.createElement("h5");
headerTitle.textContent = prod.name;

headerDiv.appendChild(headerTitle);

// 2) Content area (90%) with three columns
const contentDiv = document.createElement("div");
contentDiv.className = "product-content";

// Left column (25%): blank or for an image
const leftDiv = document.createElement("div");
leftDiv.className = "product-left";
    + // ADD THIS: Create and append an <img> if 'prod.image' is defined
+ if (prod.image) {
+   const productImage = document.createElement("img");
+   productImage.src = prod.image;
+   productImage.alt = prod.name;
+   productImage.className = "product-image";
+   leftDiv.appendChild(productImage);
+ }

// Middle column (50%): pitch text + "Learn More" button
const middleDiv = document.createElement("div");
middleDiv.className = "product-middle";

const pitchP = document.createElement("p");
pitchP.textContent = prod.pitch;
middleDiv.appendChild(pitchP);

const button = document.createElement("button");
button.className = "product-btn";
button.textContent = "Learn More";
middleDiv.appendChild(button);

// Right column (25%): bullet points
const rightDiv = document.createElement("div");
rightDiv.className = "product-right";

const benefitsUl = document.createElement("ul");
prod.benefits.forEach(b => {
  const li = document.createElement("li");
  li.textContent = b;
  benefitsUl.appendChild(li);
});
rightDiv.appendChild(benefitsUl);

// Put columns together
contentDiv.appendChild(leftDiv);
contentDiv.appendChild(middleDiv);
contentDiv.appendChild(rightDiv);

// Finally, append the header and content to the card
card.appendChild(headerDiv);
card.appendChild(contentDiv);

// And add the card to the container
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
      shortBox.textContent = categoriesData[cat]?.shortDescription?.trim() || "";
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
  // Highest score among topCats
  const topCategoryScore = pctMap[topCats[0]];
  const len = topCats.length;

  if (len === 4) {
    // Each of the 4 categories gets 1 bullet (arr[0])
    return topCats.map(cat => {
      const arr = categoriesData[cat][keyName];
      return craftLineNew(
        cat,
        pctMap[cat] === topCategoryScore,
        arr[0]
      );
    });

  } else if (len === 3) {
    // Each of the 3 categories gets 1 bullet
    return topCats.map(cat => {
      const arr = categoriesData[cat][keyName];
      return craftLineNew(
        cat,
        pctMap[cat] === topCategoryScore,
        arr[0]
      );
    });

  } else if (len === 2) {
    // For 2 categories, we give cat1 two bullets, cat2 one bullet
    const [cat1, cat2] = topCats;
    const arr1 = categoriesData[cat1][keyName];
    const arr2 = categoriesData[cat2][keyName];

    return [
      craftLineNew(cat1, pctMap[cat1] === topCategoryScore, arr1[0]),
      craftLineNew(cat1, pctMap[cat1] === topCategoryScore, arr1[1]),
      craftLineNew(cat2, pctMap[cat2] === topCategoryScore, arr2[0])
    ];

  } else {
    // Single category => 3 bullets
    const cat = topCats[0];
    const arr = categoriesData[cat][keyName];

    // If there's only one topCat, it's automatically "dominant"
    return [
      craftLineNew(cat, true, arr[0]),
      craftLineNew(cat, true, arr[1]),
      craftLineNew(cat, true, arr[2])
    ];
  }
}


/****************************************************
 * TEMPLATES
 ****************************************************/
/****************************************************
 * NEW ARRAYS & FUNCTION for Strength/Weakness bullets
 ****************************************************/

const dominantOpeners = [
  "It looks like you strongly favor [cat]",
  "Since you rank high in [cat]",
  "You display a pronounced [cat] streak",
  "You're mainly leaning [cat]",
  "It's clear you're heavily oriented toward [cat]",
  "A significant part of you is [cat]",
  "You've shown a strong affinity for [cat]",
  "You definitely resonate with [cat]",
  "A big portion of you identifies with [cat]"
];

const secondaryOpeners = [
  "You also carry a bit of [cat]",
  "There's a subtle [cat] influence in you",
  "You do have some [cat] traits",
  "You're partly [cat]",
  "There's a little [cat] side to you",
  "You still show hints of [cat]",
  "A touch of [cat] shines through",
  "You also lean slightly toward [cat]",
  "As a partial [cat]"
];

function stripLeadingClause(text) {
  // Look for the first comma in the first ~25 characters:
  const idx = text.indexOf(",");
  if (idx !== -1 && idx < 25) {
    // Remove everything up to (and including) that comma
    text = text.slice(idx + 1).trim();
  }
  // Capitalize the first letter after removing the clause:
  if (text.length > 0) {
    return text[0].toUpperCase() + text.slice(1);
  }
  return text;
}

/**
 * craftLineNew
 * @param {string} cat - the category name
 * @param {boolean} isDominant - true if this cat is tied for highest score
 * @param {string} originalLine - the full strength/weakness phrase from categoriesData
 * @returns {string} the revised bullet text
 */
let newBulletIndex = 0;
function craftLineNew(cat, isDominant, originalLine) {
  // 1) Choose an opener from the arrays
  const openerArray = isDominant ? dominantOpeners : secondaryOpeners;
  const opener = openerArray[newBulletIndex % openerArray.length];
  newBulletIndex++;

  // 2) Strip out "Because you’re a [cat]," from the original line if present
  const remainder = stripLeadingClause(originalLine);

  // 3) Replace [cat] placeholder in the opener
  const finalOpener = opener.replace("[cat]", cat);

  // 4) Return with an em dash in between
  //    e.g. “It looks like you strongly favor Adventurer—Overthinking can hold you back...”
  return `<span class="opener-text">${finalOpener}</span>—${remainder}`;

}



/****************************************************
 * craftLine
 ****************************************************/


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
/****************************************************
 * AUTO COMPLETE QUIZ BUTTON (For Testing Only)
 * This code automatically selects the first answer for every question
 * and then displays the results page when the "Auto Complete Quiz" button is clicked.
 * Remove this block when you no longer need the testing functionality.
 ****************************************************/
document.getElementById("auto-complete-btn").addEventListener("click", function() {
  // Auto-select the first answer for each question
  for (var i = 0; i < questions.length; i++) {
    selectedAnswers[i] = [0];
  }
  
  // Set currentQuestionIndex to the last question
  currentQuestionIndex = questions.length - 1;
  
  // Update the display (optional) and immediately show results
  displayQuestion(currentQuestionIndex);
  showResults();
});
