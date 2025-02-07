/* categorydata.js */

/****************************************************
 * MAIN CATEGORIES DATA
 ****************************************************/

// Below are the four main categories (Planner, Realist, Connector, Adventurer)
// Each category has exactly four product recommendations.
// Enhancements made per your request:
// 1) Renamed to "KeyBank Hassle-Free Checking Account" where needed
// 2) Reduced bullet text to concise one-liners
// 3) Removed references to "(Unsecured)" or "(Secured)" in loans
// 4) Removed the first sentence in quotes/parentheses at the start of each pitch

const categoriesData = {
  Planner: {
    name: "Planner",
    article: "a",
    description:
      `Planners are organized and future-focused. They budget carefully, plan for 
      long-term goals, and appreciate tools that help them save money and avoid 
      surprises. They don’t mind meeting requirements to get a reward, as long as 
      they can map out a clear benefit. The following products align with the 
      Planner’s desire for stability, growth, and control:`,
    shortDescription:
      `Planners focus on structured routines and detailed goal-setting to ensure 
      financial stability, excelling at avoiding costly surprises. While a tendency 
      to overthink can slow decisions, this disciplined approach provides peace of 
      mind and fosters steady, long-term security.`,
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
        name: "Key Select Checking®",
        pitch:
          "You value a checking account that rewards foresight. Earn interest on your balance and a $100 cash bonus yearly when you set up direct deposits that meet requirements. This supports your long-term strategy with automatic savings options and waived fees on a premium saver, helping you grow your money while handling daily finances.",
        benefits: [
          "Earn a $100 yearly bonus for direct deposits key.com.",
          "Interest-bearing with daily compounding key.com.",
          "Waive $25 fee by $5K monthly deposits or $15K balance key.com.",
          "Link with Key Select Money Market for top-tier rates key.com."
        ]
      },
      {
        name: "Key Active Saver®",
        pitch:
          "This account automates saving. Start with $10, enable EasyUp® to move a dollar (or more) each time you use your debit, and watch your balance grow behind the scenes. No monthly fee if you have KeyBank checking, so every deposit furthers your goals. It’s a simple path to build an emergency fund or nest egg in step with your monthly budget.",
        benefits: [
          "No monthly fee with Key checking key.com.",
          "EasyUp® moves $1+ from checking to savings each debit key.com.",
          "Open with just $10, start saving now key.com.",
          "Unlimited withdrawals if you need funds key.com."
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch:
          "Turn every purchase into a strategic advantage. Get 2% cash back (with an active Key checking) on gas, groceries, and bills—no categories to juggle. No annual fee, so you keep 100% of your rewards. Plan your expenses, and the more you spend according to budget, the more cash you can reinvest or pay down.",
        benefits: [
          "2% cash back with Key checking, no categories key.com.",
          "$0 annual fee; keep all your rewards key.com.",
          "0% intro APR on transfers for 12 months, then variable key.com.",
          "Auto-deposit rewards into Active Saver or checking key.com."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch:
          "Big plans sometimes demand extra funding—renovations, debt consolidation, or new projects. This loan’s fixed rate and predictable payments align with your careful budgeting style, and no origination fee means every dollar goes to your goals. Apply online and track everything in one place, preserving your structured approach.",
        benefits: [
          "Fixed APR for predictable monthly costs.",
          "No origination fee, more funds for your goals.",
          "Choose terms up to 84 months if needed.",
          "Apply and track progress entirely online."
        ]
      }
    ],
    emotions: [
      "Prudence","Security","Forward-thinking","Calculated","Organization",
      "Structure","Stability","Methodical","Preparedness","Responsibility"
    ]
  },

  Realist: {
    name: "Realist",
    article: "a",
    description:
      `Realists are pragmatic and down-to-earth about their finances. They want 
      straightforward, no-nonsense products that help them manage necessities, 
      prepare for the unexpected, and improve their financial footing. Low fees, 
      low interest rates, and credit-building opportunities appeal to them more 
      than fancy rewards. The following products match the Realist’s desire for 
      simplicity, security, and solid value:`,
    shortDescription:
      `Realists favor low-risk, dependable strategies to protect resources, guided by 
      caution and clear data. While they may pass up certain prospects, measured 
      openness to calculated risk can uncover worthwhile gains, ensuring security 
      without sacrificing every chance for growth.`,
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
        name: "KeyBank Hassle-Free Checking Account®",
        pitch:
          "A purely digital, no-fee checking that prevents overdrafts by declining charges beyond your balance. No monthly fee, no checks, no hidden traps. It helps you live within your means, so you never face unexpected bank costs. Perfect for those who want banking to be as straightforward as possible.",
        benefits: [
          "Fully fee-free: $0 monthly, $0 overdraft key.com.",
          "Cannot overdraw: charges decline if over balance key.comkey.com.",
          "Digital payments only: no checks needed key.com.",
          "Open with $10, easy to start key.com."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch:
          "You might need funds for a car, home project, or bill consolidation. This fixed-term loan has no origination or prepayment fees, so every dollar repaid goes to principal or interest. Consolidate high-interest debt to simplify life and lower costs. Quick approvals mean you can tackle necessities promptly, all with stable monthly payments.",
        benefits: [
          "No fees: no origination or prepay penalties key.com.",
          "Fixed rate & set term for total clarity key.com.",
          "Borrow $5k+ with up to 84-month repayment key.com.",
          "Approval in 1–3 days, same-day funding possible key.comkey.com."
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch:
          "Not everyone needs fancy rewards. Latitude keeps it simple with a 15-month 0% intro APR on purchases/balance transfers, then a lower ongoing rate than many reward cards. No annual fee means you can keep it for emergencies without penalty. Ideal for those who value cost-saving over complex perks.",
        benefits: [
          "15-month 0% intro APR on buys/transfers key.com.",
          "Lower ongoing APR than typical reward cards key.com.",
          "$0 annual fee, keep it for emergencies key.com.",
          "Simplicity: ID Theft Protection & Zero Liability key.com."
        ]
      },
      {
        name: "Key Active Saver®",
        pitch:
          "Automate small transfers to savings with every debit card purchase. Pause or adjust anytime if finances shift. No monthly fee when linked to your Key checking. It's a straightforward safeguard for unexpected costs, giving you a steady buffer that grows with each transaction.",
        benefits: [
          "Small auto transfers build a backup fund each purchase.",
          "Pause/change anytime if budgets shift.",
          "Fee waived if you have Key checking.",
          "Every deposit is logged in the app for clarity."
        ]
      }
    ],
    emotions: [
      "Apprehension","Duty","Caution","Skepticism","Reserved",
      "Logic","Restraint","Practical","Realism","Grounded"
    ]
  },

  Connector: {
    name: "Connector",
    article: "a",
    description:
      `Connectors are relationship-oriented and community-driven. They manage money 
      to support family, friends, and experiences – whether that’s splitting bills, 
      going to events, or helping others. They value convenient ways to share funds, 
      earn rewards they can use for social activities, and accounts that simplify 
      joint or group finances. The following products resonate with the Connector’s 
      collaborative and experience-focused approach:`,
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
        pitch:
          "No fees or minimums let you manage group finances easily, even if contributions vary. Comes with Zelle® for instant splits or reimbursements, plus optional paper checks if needed. Overdraft forgiveness helps if a friend repays late. It’s all about simplifying shared money matters so you can focus on experiences together.",
        benefits: [
          "No monthly fees or minimums, perfect for group finances key.comkey.com.",
          "Digital app with Zelle® for quick splitting or sending key.comkey.com.",
          "Paper checks included if needed key.comkey.com.",
          "Overdraft forgiveness for small shortfalls key.com."
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch:
          "A robust 5x points per dollar on everything means group activities pay off in future rewards. Spend thresholds can yield bonus points, great for big events or trips. Redeem points for travel, tickets, or statement credit. No annual fee means you can keep it indefinitely, turning social spending into real perks.",
        benefits: [
          "5× points on all purchases, no caps key.com.",
          "Monthly spend bonuses unlock higher rewards key.com.",
          "Redeem for experiences, travel, or credit key.com.",
          "No annual fee, card lock if lost key.com."
        ]
      },
      {
        name: "KeyBank Preferred Line of Credit",
        pitch:
          "Sometimes you want a safety net for communal projects or urgent help. This line of credit charges no fees unless you draw on it, so it’s ready for surprise group expenses. Link it to checking to avoid overdraft charges. Borrow only what’s needed, repay it, and keep the line open for the next occasion.",
        benefits: [
          "Tap funds anytime, pay interest only if used.",
          "No annual fee, no collateral needed key.com.",
          "Link to checking for overdraft safety net.",
          "Transfer online or in branch for quick help."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch:
          "When it’s time for a bigger initiative—covering a family member’s emergency, planning a large event, or backing a cause—this loan provides a lump sum with stable monthly payments. No origination fee, so the funds go exactly where needed. Manage it in KeyBank’s app for clarity and peace of mind.",
        benefits: [
          "Fixed APR means predictable monthly payment.",
          "No origination fee, all funds go to your goal.",
          "Repay over up to 84 months to fit your budget.",
          "Online application & tracking keeps finances transparent."
        ]
      }
    ],
    emotions: [
      "Generosity","Altruism","Warmth","Compassion","Connection",
      "Harmony","Collaboration","Sharing","Empathy","Community"
    ]
  },

  Adventurer: {
    name: "Adventurer",
    article: "an",
    description:
      `Adventurers are risk-takers and experience-seekers. They are often on the go 
      – traveling, trying new ventures, or embracing spontaneous opportunities. 
      They need financial products that keep up with their pace, offering wide 
      access to funds, flexibility in borrowing, and rewards that cater to their 
      adventurous spending. Importantly, they want to avoid being slowed down by 
      banking hassles or not having money accessible when and where they need it. 
      The following products suit the Adventurer’s dynamic lifestyle:`,
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
        name: "Key Smart Checking®",
        pitch:
          "A no-fee account with 40,000+ fee-free ATMs nationwide, perfect for a traveler’s lifestyle. Early Pay can get your deposits to you two days sooner, and the mobile app supports check deposits and Zelle® on the move. Enjoy your adventures without worrying about hidden charges or limited access.",
        benefits: [
          "$0 fees, $0 minimum, wide ATM network key.comkey.com.",
          "Early Pay direct deposits up to 2 days early key.com.",
          "Full mobile convenience for deposits & Zelle key.com.",
          "Roam free without surprise charges or hidden fees key.com."
        ]
      },
      {
        name: "KeyBank Preferred Line of Credit",
        pitch:
          "Pay interest only on what you use, no annual fee. Great for booking a last-minute trip or seizing a sudden opportunity. Link it to your checking for overdraft protection so you’re never caught off guard. Borrow whenever needed and repay to free it up again—ultimate spontaneity with built-in safety.",
        benefits: [
          "Borrow only what you need, repay & reuse.",
          "No annual fee, no collateral key.com.",
          "Covers overdrafts for checking if you’re short key.com.",
          "Transfer line funds to checking instantly for unexpected costs."
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch:
          "You get 2% cash back on all purchases with an active Key checking, no categories to track. No annual fee keeps more money in your pocket for gear or travel. Fraud protection, contactless pay, and a free FICO® score keep you safe and flexible on the road. Redeem your rewards to fund the next big leap.",
        benefits: [
          "2% on every purchase with Key checking, no category juggling key.comkey.com.",
          "$0 annual fee, contactless pay for speed key.com.",
          "Fraud protection, free FICO® score monitoring key.com.",
          "Use rewards to offset trip costs or gear expenses."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch:
          "Sometimes you need a bigger sum fast—maybe a dream trip or a personal venture that can’t wait. A fixed-rate personal loan ensures stable monthly payments, and no origination fee means all funds go to your plan. Apply online and manage it via KeyBank’s app so you stay focused on the journey, not the financing.",
        benefits: [
          "Fast approval, no hidden fees to stall you.",
          "Fixed APR, stable monthly payment schedule.",
          "No origination fee, put full amount into your plan.",
          "Manage it digitally, focusing energy on your next move."
        ]
      }
    ],
    emotions: [
      "Thrill","Indulgence","Excitement","Spontaneity","Joy",
      "Impulsivity","Exploration","Passion","Risk-taking","Curiosity"
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
