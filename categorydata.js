/* categorydata.js */

// Categories Data
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
      "You excel at long-term strategizing—budgets and schedules are your superpower.",
      "You stay risk-averse—you’d rather carefully analyze than leap blindly into decisions.",
      "You maintain an organized approach—spreadsheets, lists, and well-defined goals keep you on track."
    ],
    weaknesses: [
      "Overthinking can hold you back—sometimes it’s okay to act on impulse.",
      "Paralysis by analysis can stall your forward progress.",
      "Limited adaptability can be an issue—last-minute changes or surprises may feel uncomfortable."
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
      "You’re a bold decision-maker—you jump on opportunities before they slip away.",
      "You’re curious and open-minded—always seeking new ways to grow.",
      "You’re an optimistic risk-taker—trusting your instincts even when stepping into the unknown."
    ],
    weaknesses: [
      "Balancing fun with goals can be tricky—it’s still important to save for the future.",
      "Impulse spending can be a challenge—a set “fun money” budget can help you stay in control.",
      "FOMO-fueled choices may arise—fear of missing out can rush your decisions."
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
      "You’re community-focused—caring deeply about helping others succeed.",
      "You stay collaborative—pooling resources and sharing wins is your ideal approach.",
      "A generous spirit guides your choices—giving is part of who you are."
    ],
    weaknesses: [
      "Overextending yourself can become a problem—your finances need protection too.",
      "Difficulty saying no can arise—it’s impossible to help everyone all the time.",
      "Conflict avoidance can overshadow tough but necessary conversations."
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
      "You’re a clear-eyed investor—you see facts over hype and follow what works.",
      "You’re an expert risk manager—you keep spending and investing decisions grounded.",
      "You maintain a level-headed approach—rarely impulsive, you weigh outcomes before acting."
    ],
    weaknesses: [
      "Missing opportunities can happen—a small risk might sometimes pay off.",
      "Over-caution can hold you back—progress often requires stepping out of your comfort zone.",
      "A rigid mindset may develop—preferring only proven methods can limit innovative solutions."
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
 * TIE CATEGORY DATA
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
