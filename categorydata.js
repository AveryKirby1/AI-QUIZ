/* categorydata.js */

// We’re including only the four main categories (Planner, Realist, Connector, Adventurer)
// Each category now has exactly four product recommendations, as requested.
// We have removed any references to “headingForProducts” and “(Optional)” labels,
// and incorporated the fourth product fully into each category.

/****************************************************
 * MAIN CATEGORIES DATA
 ****************************************************/
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
        // 1) Key Select Checking
        name: "Key Select Checking®",
        pitch:
          "“Plan ahead and prosper.” As a Planner, you value a checking account that rewards your foresight. Key Select Checking offers exactly that – you’ll earn interest on your balance and a $100 cash bonus every year for sticking to your plan  key.com. By arranging direct deposits to meet the requirements, you turn your everyday checking into a yearly payday. This account supports your long-term strategy, from automatic savings transfers to waived fees on a premium saver account, so you can systematically grow your money while managing daily finances.",
        benefits: [
          "Annual $100 loyalty bonus for qualifying direct deposits, rewarding you year after year for steady money management key.com.",
          "Interest-bearing checking with daily compounding, so your balance earns a little extra on the side key.com.",
          "$25 monthly fee waived when you maintain $5,000 in deposits per month or $15,000 combined balances (and the fee is automatically waived for the first 3 months) key.com.",
          "Linked savings perks – Pair with Key Select Money Market Savings to waive that account’s fee and get top-tier rates, integrating your checking and savings strategy seamlessly key.com."
        ]
      },
      {
        // 2) Key Active Saver
        name: "Key Active Saver®",
        pitch:
          "“Save first, spend later.” This simple savings account aligns with your Planner mindset by making saving automatic and painless. You can start with just $10, set up EasyUp® to move a dollar (or more) into savings with each debit purchase, and watch your balance grow without a second thought  key.com. Because you also have a KeyBank checking, you won’t pay any monthly fees on this account key.com– every dollar you deposit stays working toward your goals. Key Active Saver helps you plan for the future by building an emergency fund or nest egg in the background while you focus on your monthly budget.",
        benefits: [
          "No monthly fee with your Key checking – the $4 fee is waived for KeyBank checking clients, so it’s free to maintain key.com.",
          "EasyUp® automatic transfers help you painlessly save – e.g. $1 from checking to savings with each transaction – turning everyday spending into consistent savings key.comkey.com.",
          "Open with just $10; no large initial deposit needed, so you can start your saving habit immediately and build up over time key.com.",
          "Unlimited withdrawals – need to move money for a planned expense? No limits or penalties for transferring your own funds between accounts key.com, giving you flexible access when life doesn’t go exactly to plan."
        ]
      },
      {
        // 3) Key Cashback Credit Card
        name: "Key Cashback® Credit Card",
        pitch:
          "“Maximize every dollar.” For a Planner, a credit card isn’t about splurging – it’s about strategy. The Key Cashback card turns all your purchases into cash rewards, with 2% back on everything when you also bank with Key  key.comkey.com. That means your carefully planned grocery runs, gas fill-ups, and recurring bills are earning money for you. With no annual fee, you keep 100% of those rewards. It’s a straightforward, no-nonsense card that fits perfectly into your planned budget – the more you’ve budgeted to spend, the more cash you’ll get back to re-invest in your goals or pay down the balance.",
        benefits: [
          "Unlimited 2% cash back on all purchases for KeyBank clients who meet the simple checking account activity requirement key.comkey.com (otherwise 1% minimum). No caps, no rotating categories – your entire spending plan earns rewards.",
          "$0 annual fee, so you never worry about a fee eating into your cash-back profit key.com.",
          "Intro 0% APR on balance transfers for 12 months, helpful if part of your plan is consolidating debt key.com. (After 12 months, a variable APR applies.)",
          "Easy redemption – cash back can automatically sweep into your Key Active Saver or checking, or just credit your statement key.com."
        ]
      },
      {
        // 4) KeyBank Personal Loan
        name: "KeyBank Personal Loan",
        pitch:
          "Even the best-laid plans sometimes require extra funding—for renovations, debt consolidation, or setting up a new project. A KeyBank Personal Loan gives you a fixed rate and predictable payments, so your monthly budget remains tidy and on track. No origination fee means every dollar borrowed goes toward your goals, not extra fees. It’s a straightforward way to handle big expenses while staying faithful to your carefully mapped-out financial strategy.",
        benefits: [
          "Fixed APR – You’ll know exactly your interest rate from day one, making monthly costs predictable.",
          "No origination fee – No hidden start-up costs, so more funds go toward your actual needs.",
          "Terms up to 84 months – Choose a repayment timeframe that suits your plan without unnecessary strain.",
          "Online application & tracking – Manage the loan within the KeyBank app, aligning with your methodical approach."
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
        // 1) KeyBank Hassle-Free Account
        name: "KeyBank Hassle-Free Account®",
        pitch:
          "“No surprises, no overspending.” The Realist in you will appreciate an account that keeps things simple and safe. The KeyBank Hassle-Free Checking has no monthly fees and never charges overdraft fees – ever  key.com. It’s a purely digital account, which suits your practical nature: you can’t write checks (avoiding bounced check worries), and if you don’t have the funds, the transaction just won’t go through. This account puts guardrails on your spending, helping you live within your means and avoiding the pitfalls of unexpected fees. It’s banking that’s as straightforward as it gets – your money, managed your way, with nothing extra to pay.",
        benefits: [
          "Truly fee-free checking – $0 monthly maintenance fee and $0 overdraft/NSF fees, so you’ll never be dinged for a mistake key.com.",
          "Cannot overdraw – If a charge would overdraw the account, it’s declined rather than approved, preventing hidden debt key.comkey.com.",
          "Digital payments only – Rely on debit card, online bill pay, or Zelle® for a modern, practical lifestyle key.com.",
          "Easy to start – A $10 opening deposit is all you need, lowering barriers and keeping things simple key.com."
        ]
      },
      {
        // 2) KeyBank Personal Loan (Unsecured)
        name: "KeyBank Personal Loan (Unsecured)",
        pitch:
          "“Tackle debt the smart way.” You’re realistic about debt: sometimes you need it for a car, a home project, or to simplify multiple bills. The KeyBank Personal Loan gives you a clear, fixed plan to pay off what you owe, with no origination or prepayment fees  key.com. Consolidating higher-interest debts into this loan could lower your monthly costs and eliminate variable credit card payments. As a Realist, you’ll like that the rate is fixed and the term is set – no surprises. It’s a straightforward way to finance big needs or wipe out costly debt, managed right alongside your other KeyBank accounts.",
        benefits: [
          "No fees at all – No origination or prepayment penalties, so every dollar repaid goes to principal/interest key.com.",
          "Fixed interest rate & term – You can realistically budget each payment and know exactly when you’ll be debt-free key.com.",
          "Flexible amounts & up to 84 months – Borrow as little as $5,000, picking a repayment window that fits your life key.com.",
          "Fast funding – Approval in 1–3 days, with same-day funding possible, helps you promptly tackle obligations key.comkey.com."
        ]
      },
      {
        // 3) KeyBank Latitude® Credit Card
        name: "KeyBank Latitude® Credit Card",
        pitch:
          "“Low interest, for life’s what-ifs.” For a Realist, a credit card is a tool – not for extravagant rewards, but for affordable flexibility. The KeyBank Latitude offers a 15-month 0% intro APR to handle an urgent purchase or balance transfer  key.com. Afterward, it continues with a lower ongoing APR than many rewards cards key.com. There’s no annual fee, so it can sit in your wallet as a safety net. It’s practical credit for practical people—saving you money if you ever need to carry a balance rather than focusing on flashy perks.",
        benefits: [
          "0% APR for 15 months – Plenty of time to pay off a major buy or debt interest-free key.com.",
          "Low ongoing APR – Once the intro ends, it remains more budget-friendly than typical rewards cards key.com.",
          "$0 annual fee – No cost to keep as an emergency fallback key.com.",
          "Simplicity first – Features like ID Theft Protection, Zero Liability fraud coverage, and no rotating categories key.com."
        ]
      },
      {
        // 4) Key Active Saver
        name: "Key Active Saver®",
        pitch:
          "“Build a reliable cushion.” While you keep costs down and weigh each purchase carefully, it never hurts to have extra backup. Key Active Saver automates a small deposit into savings whenever you use your debit card—so you steadily grow an emergency fund without complicated budgeting. You can pause or adjust at any time, and because it’s linked to your KeyBank checking, there’s no monthly fee. In true Realist fashion, it’s straightforward and low-risk, providing peace of mind for life’s unexpected moments.",
        benefits: [
          "Automatic micro-savings – Each transaction triggers a small deposit into your savings.",
          "Pause or adjust anytime – Maintain control if finances tighten or priorities shift.",
          "Fee waived with Key checking – Keep more of your money for that rainy-day buffer.",
          "Full transparency – Every deposit is logged in the app so you always know your balance."
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
        // 1) Key Smart Checking
        name: "Key Smart Checking®",
        pitch:
          "“Shared moments, simplified money.” As a Connector, you’re often the one organizing dinners, trips, or group gifts – you need a checking account that’s flexible and user-friendly. Key Smart Checking has no fees or minimums  key.comkey.com, so you can open and maintain it easily even if group funds ebb and flow. It comes with Zelle® built in, making it a breeze to send and receive money with friends. You can even order paper checks (if Grandma still needs one) without any monthly cost burden. This account puts you in control of group finances without ever getting in the way – all the features, none of the fees, so you can focus on connecting with people, not banking logistics.",
        benefits: [
          "No monthly fees, no minimum balance – Zero cost to keep open, lowering stress around group paybacks key.com.",
          "Full digital toolkit – Instant check deposit, bill pay, and Zelle® for quick money moves key.comkey.com.",
          "Paper checks included – Handy if a landlord or club still needs a physical check key.comkey.com.",
          "No overdraft drama – Overdraft protection or fee forgiveness ensures minor shortfalls don’t become big issues key.com."
        ]
      },
      {
        // 2) Key2More Rewards
        name: "Key2More Rewards® Credit Card",
        pitch:
          "“Earn rewards for the fun stuff.” Your social life can get expensive – but with the Key2More card, every brunch, concert ticket, or vacation flight you charge is racking up points toward the next shared adventure. You get a generous 5x points on every $1 spent  key.com, so pooling expenses on this card can yield big rewards. Take it a step further and you’ll earn bonus points each month you hit certain spend levels key.com– perfect for big events or group trips. Redeem them for travel or tickets key.com and treat your friends (or yourself). With no annual fee, it’s a guilt-free way to turn spending into social wins.",
        benefits: [
          "5× reward points on all purchases – Speedy accumulation for group outings, gifts, or everyday buys key.com.",
          "Monthly bonus thresholds – Earn extra points when spending surpasses certain levels key.com.",
          "Redeem for experiences – Travel, event tickets, or statement credit let you share the fun key.com.",
          "No annual fee – Keep it as long as you want, with security features like quick card lock if lost key.com."
        ]
      },
      {
        // 3) KeyBank Preferred Line of Credit
        name: "KeyBank Preferred Line of Credit",
        pitch:
          "“Be ready to help, no matter what.” As a Connector, you like having the resources to support friends or family—or to handle unexpected group expenses. This line of credit provides a flexible pot of funds you can access anytime, with no fees until you actually use it. Link it to your checking so if group spending overruns your balance, you won’t be charged overdraft fees. You pay interest only on what you borrow, making it a steady safety net that helps you say “yes” without jeopardizing your own finances.",
        benefits: [
          "Revolving access – Borrow and repay repeatedly as needs arise, no annual fee.",
          "Overdraft protection – Automatic cover for your Key checking at no transfer cost.",
          "No collateral required – Approval depends on credit; no need to pledge assets.",
          "Quick digital transfers – Move credit line funds into checking instantly to cover any group or personal expense."
        ]
      },
      {
        // 4) KeyBank Personal Loan
        name: "KeyBank Personal Loan",
        pitch:
          "Sometimes helping others or planning a big communal event calls for substantial funding right away. A KeyBank Personal Loan delivers that lump sum in one go, with predictable monthly payments so you can keep finances clear and calm. There’s no origination fee, so you won’t lose any money upfront. Apply online, monitor progress in the KeyBank app, and repay on a timeline that fits everyone’s situation. It’s a meaningful, controlled way to support your connections or fund group endeavors.",
        benefits: [
          "Fixed APR – Easy budgeting to ensure you can stay generous without chaos.",
          "No origination fee – Every dollar you borrow goes to the cause, not processing fees.",
          "Up to 84 months – Stretch or shorten repayment as the situation demands.",
          "Online application & management – Keep everything transparent for both you and any co-payers."
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
        // 1) Key Smart Checking
        name: "Key Smart Checking®",
        pitch:
          "“Access anywhere, worry nowhere.” For an Adventurer, an ideal checking account is one you never have to think twice about – no fees to monitor and a broad ATM network so you’re never far from your cash. Key Smart Checking fits that bill perfectly with $0 fees and 40,000+ ATMs nationwide (KeyBank + Allpoint network) for fee-free withdrawals  key.comkey.com. Whether you’re backpacking cross-country or hopping between cities, you’ll find an ATM when you need one, and Early Pay ensures your money arrives even if you’re in a new time zone key.com. With robust mobile tools, your account stays effortlessly in reach, leaving you free to roam without surprise charges.",
        benefits: [
          "No monthly fee – Keep your adventures funded without losing money to bank costs key.com.",
          "40,000+ fee-free ATMs – Access your cash anywhere without extra charges key.comkey.com.",
          "Early Pay – Receive direct deposits up to two days early, fueling spontaneous plans key.com.",
          "Mobile convenience – Deposit checks, transfer funds, and use Zelle® on the fly, no waiting around key.com."
        ]
      },
      {
        // 2) KeyBank Preferred Line of Credit
        name: "KeyBank Preferred Line of Credit",
        pitch:
          "“Flexible funds for the next adventure.” Spontaneity is the spice of life, and the Preferred Credit Line ensures you always have financing on tap for last-minute trips or side hustles. Pay interest only on what you use—no annual fee to keep it open. Link it to your checking so a surprise expense never overdrafts your account. Think of it as a bungee cord for your boldest leaps: there when you need it, unobtrusive when you don’t.",
        benefits: [
          "Borrow, repay, borrow again – Revolving credit that adapts to your changing plans.",
          "No collateral, no annual fee – Keep it available at zero cost unless you use it key.com.",
          "Overdraft protection – Protect your checking with automatic transfers if funds dip too low key.com.",
          "Easy access – Transfer line-of-credit funds online or write checks, ensuring you can jump on opportunities fast."
        ]
      },
      {
        // 3) Key Cashback Credit Card
        name: "Key Cashback® Credit Card",
        pitch:
          "“Fuel your adventures (and get paid for it).” This card offers a flat 2% cash back on every purchase (with an active KeyBank account)  key.comkey.com—no categories to juggle, so you can pay for travel, gear, or dining anywhere. No annual fee means it won’t drain your budget, and features like contactless payments keep you moving quickly. If you plan to spend money on new experiences, why not earn some back to fund your next escapade?",
        benefits: [
          "2% cash back – Earn top-tier rewards for every purchase, as long as you meet basic checking requirements key.comkey.com.",
          "No annual fee – Keep it in your wallet for the long haul at zero extra cost key.com.",
          "Digital controls – Freeze or unfreeze the card instantly if you misplace it during your travels key.com.",
          "Worldwide acceptance – A Mastercard with broad usage, plus fraud protection and free FICO® score access."
        ]
      },
      {
        // 4) KeyBank Personal Loan
        name: "KeyBank Personal Loan",
        pitch:
          "Sometimes an exciting project or dream trip needs a bigger infusion of cash. A KeyBank Personal Loan provides that lump sum at a fixed rate, so you’ll have predictable payments and no origination fee cutting into your funds. Apply online for quick approval, then keep track of everything through the KeyBank app. It’s a clean, simple way to finance major adventures without losing control of your budget.",
        benefits: [
          "Fast approval – Don’t let excessive paperwork stall your big plans.",
          "Fixed APR – Know your monthly cost upfront, with no hidden spikes.",
          "No origination fee – 100% of the loan can go toward your trip, startup, or new gear.",
          "Flexible terms – Up to 84 months, letting you manage repayment around future travels."
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
