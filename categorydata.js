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
    description: `
      Planners are organized and future-focused. They budget carefully, plan for 
      long-term goals, and appreciate tools that help them save money and avoid 
      surprises. They don’t mind meeting requirements to get a reward, as long as 
      they can map out a clear benefit. The following products align with the 
      Planner’s desire for stability, growth, and control:
    `,
    shortDescription: `
      Planners focus on structured routines and detailed goal-setting to ensure 
      financial stability, excelling at avoiding costly surprises. While a tendency 
      to overthink can slow decisions, this disciplined approach provides peace of 
      mind and fosters steady, long-term security.
    `,
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
        pitch: `
          Perfect for your structured style: it rewards you with a clear $100 yearly bonus 
          for meeting direct deposit goals, plus interest on your balance. You can plan each 
          deposit meticulously, knowing exactly how you’ll hit the requirements. No surprises—just 
          steady progress toward your financial blueprint.
        `,
        benefits: [
          "Earn a $100 annual bonus via direct deposits key.com.",
          "Interest-bearing for daily compounding key.com.",
          "Waive $25 fee with $5K/mo deposits or $15K total key.com.",
          "Links seamlessly with Key Select Money Market key.com."
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Since every penny counts in your plan, this account automates saving each time you 
          use your debit card. No monthly fee (with Key checking) keeps your expenses predictable, 
          and you can see each micro-deposit building a tidy nest egg. It’s the perfect 
          “set it and forget it” approach to steady growth.
        `,
        benefits: [
          "No monthly fee if paired with Key checking key.com.",
          "EasyUp® moves $1+ into savings per debit key.com.",
          "Open with just $10; simple start to your plan key.com.",
          "Unlimited withdrawals for planned expenses key.com."
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          As a Planner, you want tangible returns on every purchase. This card gives you 2% 
          back (with Key checking) on anything you buy—no annual fee, no complicated categories. 
          Roll that cash back directly into your carefully structured budget or savings to 
          keep your long-term strategy humming.
        `,
        benefits: [
          "2% cash back if Key checking is active key.com.",
          "$0 annual fee, so rewards stay yours key.com.",
          "0% intro APR on balance transfers (12 mos) key.com.",
          "Auto-deposit cash back to checking/savings key.com."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Larger goals sometimes require extra funds. This loan offers a fixed rate and no 
          origination fee, letting you incorporate its predictable monthly payment right 
          into your budget. It’s ideal for Planners: everything is transparent, so you stay 
          in complete control while tackling major projects.
        `,
        benefits: [
          "Fixed APR—monthly costs never surprise you.",
          "No origination fee, more money for your goals.",
          "Terms up to 84 months—align them with your timeline.",
          "Manage it all online, fitting your organized approach."
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
    description: `
      Realists are pragmatic and down-to-earth about their finances. They want 
      straightforward, no-nonsense products that help them manage necessities, 
      prepare for the unexpected, and improve their financial footing. Low fees, 
      low interest rates, and credit-building opportunities appeal to them more 
      than fancy rewards. The following products match the Realist’s desire for 
      simplicity, security, and solid value:
    `,
    shortDescription: `
      Realists favor low-risk, dependable strategies to protect resources, guided 
      by caution and clear data. While they may pass up certain prospects, measured 
      openness to calculated risk can uncover worthwhile gains, ensuring security 
      without sacrificing every chance for growth.
    `,
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
        pitch: `
          You demand zero nonsense: no monthly fees, no overdraft charges, no guesswork. 
          That’s exactly what this account delivers. If a transaction exceeds your balance, 
          it’s declined—no hidden debt, no surprise fees. It’s the ultimate “straightforward” 
          checking for your practical mindset.
        `,
        benefits: [
          "No monthly/overdraft fees, purely digital key.com.",
          "Declines charges beyond balance, no surprises key.comkey.com.",
          "Online bill pay/Zelle instead of checks key.com.",
          "Open with $10, easy and minimal start key.com."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When you need clear, fixed financing for debt consolidation or major expenses, 
          this no-fee loan keeps costs predictable. You’ll know the rate and term up front, 
          ensuring each payment aligns with your budget. It’s for Realists who don’t tolerate 
          murky interest rates or hidden charges.
        `,
        benefits: [
          "No origination or prepayment fees key.com.",
          "Fixed rate & term, full clarity in budgeting key.com.",
          "Borrow $5k+ with up to 84-month repayment key.com.",
          "Quick funding: solve practical needs fast key.comkey.com."
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch: `
          If you ever carry a balance, low interest matters more than rewards. Latitude starts 
          you with 0% APR for 15 months on purchases/balance transfers, then stays modest 
          afterward. No annual fee ensures there’s no waste. It’s the practical, calm credit 
          card for real-life scenarios.
        `,
        benefits: [
          "15-month 0% intro on buys/transfers key.com.",
          "Lower ongoing APR vs. typical rewards cards key.com.",
          "$0 annual fee—use as needed, no penalty key.com.",
          "Simple perks: ID Theft Protection, Zero Liability key.com."
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You want a dependable way to build savings without fuss. This quietly transfers a small 
          amount to savings each time you buy something. No monthly fee if linked to checking, and 
          you remain in control if you need to pause. Straightforward, unobtrusive security against 
          life’s curveballs.
        `,
        benefits: [
          "Automatic deposits per debit, building a buffer.",
          "Pause/change if budgets shift—flexibility.",
          "Fee waived with Key checking—no extra cost.",
          "All transactions documented for clarity."
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
    description: `
      Connectors are relationship-oriented and community-driven. They manage money 
      to support family, friends, and experiences – whether that’s splitting bills, 
      going to events, or helping others. They value convenient ways to share funds, 
      earn rewards they can use for social activities, and accounts that simplify 
      joint or group finances. The following products resonate with the Connector’s 
      collaborative and experience-focused approach:
    `,
    shortDescription: `
      Connectors treat finances as a means to strengthen bonds and nurture communal 
      goals, emphasizing generosity and shared victories. A highly giving nature 
      can lead to overextension, but mindful boundaries preserve both personal 
      well-being and the desire to uplift others.
    `,
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
        pitch: `
          You often handle group finances and shared bills. Key Smart Checking is fee-free, 
          so you aren’t penalized if contributions arrive late. Zelle® built in for quick 
          cost-splitting, plus optional checks for those who still need them. It simplifies 
          collaboration, letting you focus on bringing people together.
        `,
        benefits: [
          "No monthly fee or minimum, perfect for shifting balances key.comkey.com.",
          "Zelle® for fast group splits or reimbursements key.comkey.com.",
          "Paper checks if older payees need them key.comkey.com.",
          "Small overdraft forgiveness if a friend’s late key.com."
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          If you’re frequently covering communal costs—dinners, events, gifts—why not 
          earn points on every dollar? With 5x points, plus monthly spend bonuses, you 
          can turn group spending into travel or event tickets. No annual fee means 
          more reward value to share with friends.
        `,
        benefits: [
          "5× points on all buys, no cap key.com.",
          "Monthly bonus tiers for bigger spending key.com.",
          "Redeem for experiences or statement credit key.com.",
          "No annual fee, handy lock feature if card misplaced key.com."
        ]
      },
      {
        name: "KeyBank Preferred Line of Credit",
        pitch: `
          Your generous heart loves having a backup plan if someone needs help. This 
          credit line costs nothing unless you draw on it, ensuring you can always step 
          up when unexpected group expenses arise. Link it to checking to cover overdrafts, 
          saving you from surprise fees if reimbursements lag.
        `,
        benefits: [
          "Use funds only when needed, pay interest then.",
          "No annual fee, no collateral required key.com.",
          "Overdraft link covers shortfalls or late paybacks key.com.",
          "Transfer online or in branch, instant availability."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When you’re funding a bigger group event or helping a loved one, a personal 
          loan can quickly provide the amount needed. Fixed APR, no origination fee, 
          and manageable terms let you stay in control. You handle the immediate need, 
          secure in the knowledge that monthly payments won’t unravel your finances.
        `,
        benefits: [
          "Fixed APR, stable monthly cost.",
          "No origination fee, funds go straight to your cause.",
          "Up to 84 months repayment for flexibility.",
          "Apply and monitor easily online."
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
    description: `
      Adventurers are risk-takers and experience-seekers. They are often on the go 
      – traveling, trying new ventures, or embracing spontaneous opportunities. 
      They need financial products that keep up with their pace, offering wide 
      access to funds, flexibility in borrowing, and rewards that cater to their 
      adventurous spending. Importantly, they want to avoid being slowed down by 
      banking hassles or not having money accessible when and where they need it. 
      The following products suit the Adventurer’s dynamic lifestyle:
    `,
    shortDescription: `
      Adventurers thrive on excitement and are quick to explore new financial 
      possibilities, guided by an optimistic spirit. Though impulsive choices 
      may arise, balancing spontaneity with prudent planning sustains momentum 
      and protects against the downsides of taking bold risks.
    `,
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
        pitch: `
          You hate anything that slows you down. This no-fee checking gives you 
          nationwide fee-free ATM access, Early Pay for direct deposits, and an 
          easy-to-use mobile app. No monthly charges means more money for travel, 
          adventures, or spontaneous plans—whenever and wherever they appear.
        `,
        benefits: [
          "$0 fee, $0 min, wide ATM network key.comkey.com.",
          "Early Pay: get deposits up to 2 days sooner key.com.",
          "Mobile app deposits checks, sends money via Zelle key.com.",
          "No hidden costs, pure freedom to roam key.com."
        ]
      },
      {
        name: "KeyBank Preferred Line of Credit",
        pitch: `
          Adventurers never know when opportunity knocks. Keep this line of credit 
          open at no annual fee, and use it only when you need a quick cash infusion. 
          Pay interest solely on what you borrow, and link it to checking to dodge 
          overdrafts if a spur-of-the-moment purchase happens. It’s your go-to safety 
          rope for bold leaps.
        `,
        benefits: [
          "Borrow as needed, no fee if unused key.com.",
          "Overdraft protection for impulsive buys key.com.",
          "No collateral required, easy digital transfers.",
          "Repay, free up credit again for next adventure."
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Whether it’s last-minute flights or thrilling gear purchases, you crave 
          simple rewards. Earn 2% cash back on every transaction (with active Key checking), 
          fueling the next big adventure at no annual cost. You focus on experiences, 
          while the card quietly refunds a piece of every spend to fund the next journey.
        `,
        benefits: [
          "2% cash back on all buys if Key checking active key.comkey.com.",
          "$0 annual fee, no overhead to worry about key.com.",
          "Tap-to-pay, fraud alerts for stress-free travel key.com.",
          "Redeem cash easily for new trips or gear."
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes you need a lump sum for a dream trip, a big leap into a new 
          venture, or a bold personal project. A fixed-rate, no-origination-fee loan 
          delivers immediate funding without hidden strings—giving you the freedom 
          to embrace spontaneity. Manageable monthly payments let you keep exploring, 
          confident in stable finances.
        `,
        benefits: [
          "Fixed APR for predictable budgeting.",
          "No origination fee, use full amount for your goal.",
          "Borrow up to 84 months, suiting your pace.",
          "Apply online, track easily in the KeyBank app."
        ]
      }
    ],
    emotions: [
      "Thrill","Indulgence","Excitement","Spontaneity","Joy",
      "Impulsivity","Exploration","Passion","Risk-taking","Curiosity"
    ]
  }
};

// End of categorydata.js
// Each category now has product pitches explicitly focusing on why the product is ideal
// for that persona's core motivations.


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
