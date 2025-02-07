/* categorydata.js */

/****************************************************
 * MAIN CATEGORIES DATA
 ****************************************************/

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
          deposit meticulously, knowing exactly how you’ll hit the requirements. No surprises—
          just steady progress toward your financial blueprint.
        `,
        benefits: [
          "Earn a $100 annual bonus through direct deposits",
          "Interest-bearing with daily compounding",
          "Waive $25 fee with $5K/mo deposits or $15K total",
          "Links seamlessly with Key Select Money Market"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Since every penny counts in your plan, this account automates saving each time 
          you use your debit card. No monthly fee (with Key checking) keeps your expenses 
          predictable, and you can see each micro-deposit building a tidy nest egg. It’s 
          the perfect “set it and forget it” approach to steady growth.
        `,
        benefits: [
          "No monthly fee when paired with Key checking",
          "EasyUp® moves $1+ into savings per debit",
          "Open with just $10; simple start to your plan",
          "Unlimited withdrawals for planned expenses"
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
          "2% cash back with active Key checking, no rotating categories",
          "$0 annual fee so rewards stay yours",
          "Intro 0% APR on balance transfers (12 months)",
          "Auto-deposit cash back to checking or savings"
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
          "Fixed APR—monthly costs never surprise you",
          "No origination fee, more money for your goals",
          "Terms up to 84 months—align them with your timeline",
          "Manage it all online, fitting your organized approach"
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
          "No monthly/overdraft fees, purely digital",
          "Declines charges beyond balance, no surprises",
          "Online bill pay/Zelle, no paper checks required",
          "Open with $10 for a simple start"
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
          "No origination or prepay fees",
          "Fixed rate & term for full clarity",
          "Borrow $5k+ with up to 84-month repayment",
          "Quick funding to solve needs promptly"
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
          "15-month 0% intro on buys/transfers",
          "Lower ongoing APR vs. typical reward cards",
          "$0 annual fee, keep as needed",
          "Straightforward perks: ID Theft Protection"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You want a dependable way to build savings without fuss. This quietly transfers a 
          small amount to savings each time you buy something. No monthly fee if linked to 
          checking, and you remain in control if you need to pause. Straightforward, unobtrusive 
          security against life’s curveballs.
        `,
        benefits: [
          "Incremental auto-deposits per purchase",
          "Pause/change anytime if budgets shift",
          "Fee waived with Key checking",
          "All deposits tracked for clarity"
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
          so you aren’t penalized if contributions arrive late. Zelle® is built in for quick 
          cost-splitting, plus optional checks for those who still need them. It simplifies 
          collaboration, letting you focus on bringing people together.
        `,
        benefits: [
          "Zero monthly fee or minimum, ideal for shifting balances",
          "Zelle® for instant group splits or reimbursements",
          "Paper checks if certain folks need them",
          "Minor overdraft forgiveness if a friend’s late"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          If you’re frequently covering communal costs—dinners, events, gifts—why not earn 
          points on every dollar? With 5x points plus monthly spend bonuses, you can turn 
          group spending into future travel or event tickets. No annual fee means all value 
          goes into shared experiences.
        `,
        benefits: [
          "5× points on all purchases, no caps",
          "Monthly bonus tiers for higher spending",
          "Redeem for travel, events, or statement credit",
          "No annual fee, card lock if lost"
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
          "Use only if needed, pay interest then",
          "No annual fee, no collateral",
          "Covers overdrafts for late paybacks",
          "Quick transfers for urgent group needs"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When you’re funding a bigger group event or helping a loved one, a personal 
          loan can quickly provide the amount needed. Fixed APR, no origination fee, 
          and manageable terms let you stay in control. You handle the immediate need, 
          secure in stable monthly payments.
        `,
        benefits: [
          "Fixed APR, stable monthly cost",
          "No origination fee—funds go directly to your cause",
          "Repay over up to 84 months",
          "Online application and management for clarity"
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
          You hate anything that slows you down. This no-fee checking offers fee-free ATM 
          access nationwide, Early Pay for direct deposits, and a solid mobile app. No 
          monthly charges means more money for travel, adventures, or spontaneous plans—whenever 
          they pop up.
        `,
        benefits: [
          "$0 fees, nationwide ATM network",
          "Early Pay for faster direct deposits",
          "Mobile deposit, Zelle, all in one app",
          "No hidden costs, pure freedom to roam"
        ]
      },
      {
        name: "KeyBank Preferred Line of Credit",
        pitch: `
          Life can throw exciting curveballs, and this line of credit stands ready. Keep it 
          open at no annual fee, dip in only if that last-minute flight or bold new idea 
          appears. Pay interest on what you use, link it to checking for overdraft cover. 
          It’s your flexible safety rope for each big leap.
        `,
        benefits: [
          "No annual fee, borrow only as needed",
          "Overdraft link if checking falls short",
          "Revolving credit: repay, borrow again",
          "Quick digital transfers to checking"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Whether it’s last-minute flights or thrilling gear, you like straightforward 
          rewards. Earn 2% back on every purchase (with active Key checking), fueling 
          future adventures. No annual fee or fancy categories—just a reliable way to 
          recoup costs for your next spontaneous move.
        `,
        benefits: [
          "2% cash back on all buys (Key checking required)",
          "No annual fee to erode your rewards",
          "Tap-to-pay, fraud alerts for travel security",
          "Redeem cash easily, fueling your next trip"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes you need a lump sum fast—maybe a dream trip or a new venture. A 
          fixed-rate, no-origination-fee loan gets you immediate funding without 
          hidden strings. Manageable monthly payments let you focus on your 
          spontaneity, knowing your finances stay firmly on track.
        `,
        benefits: [
          "Fixed APR, stable repayment schedule",
          "No origination fee, all funds go to your plan",
          "Up to 84-month term if needed",
          "Online application, minimal hassle"
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
/* tieData.js */

// Below are the 11 tie personas (combinations of Adventurer, Connector, Planner, Realist).
// Each tie has a short synergy description and four product recommendations with pitches
// emphasizing WHY they fit that combined persona. In the bullet points, we avoid explicit
// references to “key.com” and keep them short, following all feedback from the chat.

/* tieData.js */

// Below are the 11 tie personas, each with a combinedName, description, and 4 product recommendations.
// The pitches focus on why each product is ideal for that combined persona,
// and the bullet-point benefits have no explicit “key.com” references.
// We’re reintroducing the “combinedName” property and preserving a “description” field.
// All code from prior steps is included, with updated pitch and bullets per your instructions.

const tieData = {
  "Adventurer+Planner": {
    combinedName: "Adventurer + Planner",
    description: `
      You blend spontaneous energy with structured foresight, dreaming big yet 
      staying organized. Bold impulses meet methodical planning, creating a 
      perfect balance between excitement and stability.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Zero monthly fees let you handle spur-of-the-moment buys without penalty, 
          while online bill pay and alerts satisfy your need for order. You can 
          spontaneously jump at opportunities, then track spending precisely 
          to stay on plan.
        `,
        benefits: [
          "No monthly fee, ideal for mixed spending habits",
          "Early deposits available for quick moves",
          "Bill pay and real-time alerts for structured tracking",
          "Nationwide ATM network for on-the-fly access"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each adventurous purchase also increments your savings. This automatic 
          process means you don’t skip building a future cushion, even when you’re 
          caught up in exciting opportunities.
        `,
        benefits: [
          "Auto-deposits per debit swipe for steady growth",
          "Pause or adjust as priorities evolve",
          "No monthly fee if linked to checking",
          "Easy logs, so you see every small addition"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          5x points on every purchase suits your adventurous bursts, while 
          monthly bonus tiers reward bigger spending. No annual fee means 
          you can redeem points for experiences or statement credit—perfect 
          for balancing bold outlays and methodical earning.
        `,
        benefits: [
          "5x points on all buys, no rotating categories",
          "Monthly bonus for higher spending surges",
          "No annual fee, easy to keep long-term",
          "Redeem for travel, events, or statement credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Get fast funding for major plans—a dream project or a calculated 
          risk—without derailing your daily budget. A fixed APR lines up with 
          your planning mindset, while quick approval aligns with your 
          adventurous drive.
        `,
        benefits: [
          "Predictable monthly payments, no origination fee",
          "Fixed APR ensures stable budgeting",
          "Choose terms up to 84 months for flexibility",
          "All online application and management"
        ]
      }
    ]
  },

  "Adventurer+Connector": {
    combinedName: "Adventurer + Connector",
    description: `
      You’re driven by bold experiences and sharing them with others. You love 
      diving into new thrills alongside friends or family, ensuring everyone 
      benefits from your spontaneous nature.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          No monthly fees, no overdraft charges, purely digital—perfect for quick 
          group outings or last-minute plans. If you’re short on funds, transactions 
          just decline, so you never plunge into hidden debt.
        `,
        benefits: [
          "Truly no-fee checking, no monthly or overdraft",
          "Declines charges beyond balance, no surprise debt",
          "Digital payments only, easy for group finances",
          "Open with a small deposit, minimal friction"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Build a small pool of funds automatically with each purchase, so you’re 
          ready to jump on group adventures or help a friend spontaneously. 
          No monthly fee linked to checking means more to share.
        `,
        benefits: [
          "Auto-deposits each time you swipe",
          "Pause/change if group budgets shift",
          "Fee waived with checking, no extra cost",
          "Withdraw anytime for shared opportunities"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earning up to 2% back on every spend means your fearless buys can also 
          support communal goals. No annual fee and digital controls keep group 
          spending safe, and real-time cashback helps finance the next shared 
          adventure.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, so all rewards stay yours",
          "Lock/unlock card instantly if misplaced",
          "Straightforward redemption for quick returns"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes you need immediate funds for a big communal trip or a philanthropic 
          gesture. This loan provides that lump sum fast, with no origination fee, 
          so you can lead the charge while keeping finances in check.
        `,
        benefits: [
          "Fixed APR for predictable group payback",
          "No origination fee, all money goes to the cause",
          "Up to 84 months repayment for flexibility",
          "Online application and tracking for transparency"
        ]
      }
    ]
  },

  "Adventurer+Realist": {
    combinedName: "Adventurer + Realist",
    description: `
      You crave new experiences but watch costs and avoid risky pitfalls. You 
      act quickly on opportunities yet prefer straightforward products with 
      minimal fees or confusion.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          Go anywhere, spend spontaneously. If you try to buy more than your balance, 
          it’s simply declined—no overdraft fees or hidden interest. This safety net 
          keeps you from accidental overspending while fueling your next adventure.
        `,
        benefits: [
          "No monthly or overdraft fees, purely digital",
          "Cannot overdraw, preventing accidental debt",
          "Simple online bill pay & Zelle for daily needs",
          "Open with a minimal deposit, no complexities"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each impulse buy also pads your savings a little. You stay free to explore 
          but always have a small buffer building in the background. No monthly fee 
          if linked to checking—practical security for your adventurous side.
        `,
        benefits: [
          "Incremental saving each debit purchase",
          "Pause/change if adventure calls for funds",
          "Fee waived with Key checking",
          "App-based logs keep it transparent"
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch: `
          Low interest over flashy rewards suits your careful approach. A 15-month 
          0% intro APR helps with occasional big purchases, then you pay a lower 
          rate. No annual fee means you’re not forced into constant spending 
          to justify a card—only use it when needed.
        `,
        benefits: [
          "0% intro APR for 15 months on buys/transfers",
          "Lower ongoing APR, saving you long-term",
          "No annual fee, keep it in reserve",
          "Straightforward security features included"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For larger goals—like a dream travel or crucial purchase—you want quick 
          access without ridiculous fees. A fixed-rate loan with no origination fee 
          fits your cost-conscious outlook, letting you seize the moment while 
          ensuring stable monthly payments.
        `,
        benefits: [
          "Fixed APR, predictable monthly outlay",
          "No origination fee, more funds for your plan",
          "Choose up to 84 months to suit your comfort",
          "Fast online process, minimal friction"
        ]
      }
    ]
  },

  "Planner+Connector": {
    combinedName: "Planner + Connector",
    description: `
      You combine meticulous organization with a desire to help others thrive. 
      You want to ensure finances are structured, but also flexible enough to 
      handle group goals and communal success.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee keeps your budget precise, and Zelle® ensures group or 
          family payments flow smoothly. Early deposit can help you organize 
          bills or group events on time, tying your detailed scheduling with 
          collaborative needs.
        `,
        benefits: [
          "No monthly fee, easy on structured budgets",
          "Zelle® for quick cost splits or reimbursements",
          "Early deposits if direct pay is set up",
          "Bill pay keeps everything tracked methodically"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Every debit card use also boosts your communal or personal fund 
          automatically. No monthly fee if linked to checking means your 
          structured plan remains intact while you’re prepared to help or 
          handle events at any time.
        `,
        benefits: [
          "Small auto-deposits each purchase",
          "Fee waived with Key checking",
          "Real-time updates for precise control",
          "Unlimited withdrawals if a friend needs assistance"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn 2% on all spending (with an active Key checking). Perfect for the 
          structured Planner in you who wants clear returns, and the Connector 
          who might donate or share part of those rewards with friends or family. 
          No annual fee ensures every bit of value remains.
        `,
        benefits: [
          "2% on every purchase, no rotating categories",
          "No annual fee, keep it as a long-term tool",
          "Straightforward redemption to checking or statements",
          "Fraud protection so group finances stay safe"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Group initiatives or personal milestones can require a large sum. This 
          loan’s fixed monthly payments align well with your planning style, and 
          no origination fee means you’re maximizing the funds that go toward 
          shared or personal goals.
        `,
        benefits: [
          "Fixed APR, stable monthly bill",
          "No origination fee, more money for your purpose",
          "Up to 84-month term to match your timeline",
          "Online management for transparent tracking"
        ]
      }
    ]
  },

  "Planner+Realist": {
    combinedName: "Planner + Realist",
    description: `
      You thoroughly map out your finances but also maintain a pragmatic, 
      data-driven perspective. You want everything proven and clear, no hidden 
      risks, no ambiguous fees—just stable progress toward concrete goals.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Overdrafts contradict your structured, cost-conscious style. Safe Checking 
          simply declines transactions beyond your balance, so no negative totals 
          occur. A modest monthly fee is transparent, matching your preference 
          for zero hidden traps.
        `,
        benefits: [
          "No overdrafts—declined if balance not sufficient",
          "Modest monthly fee, fully clear",
          "Online bill pay & deposit for easy tracking",
          "Real-time alerts for methodical oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Consistent, incremental savings match your preference for stable growth. 
          Each debit transaction shifts a small amount to savings, so you remain 
          prepared without frantic efforts. No monthly fee if linked to checking 
          maintains your orderly cost structure.
        `,
        benefits: [
          "Auto-transfer per debit for steady accumulation",
          "Pause or adjust if planning changes",
          "No monthly fee with Key checking",
          "Clear logs keep everything documented"
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch: `
          If you must carry a balance, you want the rate as low as possible. 
          Latitude starts with a 15-month 0% intro APR, then transitions to 
          a lower ongoing APR. No annual fee helps keep it neatly in your 
          financial plan, with no extraneous cost.
        `,
        benefits: [
          "15-month 0% APR on purchases/transfers",
          "Lower ongoing APR than many reward cards",
          "$0 annual fee, keep as a strategic backup",
          "Simple perks, minimal complexity"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For major goals—like consolidating debts or funding a necessary purchase— 
          a fixed-rate personal loan fits your preference for exact budgeting. No 
          origination fee means you know every cost upfront. A neat, all-digital 
          process completes the package.
        `,
        benefits: [
          "Fixed APR, predictable monthly outlay",
          "No origination fee, fully transparent",
          "Terms up to 84 months, aligning with your plan",
          "Manage entirely online, suiting your methodical approach"
        ]
      }
    ]
  },

  "Connector+Realist": {
    combinedName: "Connector + Realist",
    description: `
      You love helping and collaborating but won’t compromise your financial 
      stability. You look for products that let you assist others while keeping 
      spending and risk under tight control.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You can’t afford to go overdraft just because you covered someone else’s 
          expense. Safe Checking automatically declines over-limit transactions, 
          so you stay in the black. Straightforward fees keep your cautious side 
          comfortable.
        `,
        benefits: [
          "No overdrafts, if balance insufficient transaction declines",
          "Simple monthly fee, no surprise extras",
          "Digital tools for everyday needs",
          "Alerts help maintain precise spending"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Your giving side likes to be prepared, and this account quietly grows 
          savings with every purchase. If a friend needs urgent help, you have 
          the funds—no stress. Fee waived with checking, so nothing eats 
          into your goodwill.
        `,
        benefits: [
          "Auto savings, no complicated setup",
          "Pause/adjust if money’s tight",
          "Fee waived with Key checking",
          "Transaction logs for total clarity"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% on every spend—money you can either keep or share. 
          No annual fee ensures the card never becomes a burden, and real-time 
          alerts guard against fraudulent group charges. It’s a straightforward 
          way to support both you and others.
        `,
        benefits: [
          "2% back with an active Key checking relationship",
          "No annual fee, redeem as statement credit or deposit",
          "Card lock/unlock if stolen or misplaced",
          "Fraud alerts protect group spending"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Larger support—like paying a big emergency bill or funding a 
          community effort—might need immediate resources. A fixed APR 
          and no origination fee keep you stable while still enabling 
          significant help. Manage it all online for total transparency.
        `,
        benefits: [
          "Fixed APR, consistent monthly cost",
          "No origination fee, so all funds go to help",
          "Flexible term lengths up to 84 months",
          "Apply, manage, and track fully online"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner": {
    combinedName: "Adventurer + Connector + Planner",
    description: `
      You have an adventurous spark, a caring heart, and an organized mind. 
      You seek new experiences, often shared with friends, while keeping 
      your finances neatly planned.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee, broad ATM access, and built-in Zelle® for 
          communal splitting. Early deposits let you pivot quickly if a 
          group plan forms. Meanwhile, digital bill pay suits your 
          need for structure.
        `,
        benefits: [
          "No monthly fee, flexible for shifting group funds",
          "Zelle® for instant splits among friends",
          "Early deposit if you want immediate coverage",
          "Bill pay/online tools for structured oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You can chase fun or help others, yet still watch your 
          balance grow. Each debit sets aside a little—no monthly 
          fee if linked to checking. Perfect for someone who 
          balances spontaneity, sharing, and planning.
        `,
        benefits: [
          "Auto micro-deposits keep your future in mind",
          "No monthly fee with checking link",
          "Pause or change if group events demand funds",
          "All transactions logged for clarity"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Earn 5x points on every purchase—great for covering both 
          thrilling personal buys and group costs. Monthly bonuses 
          reward bigger monthly spending bursts. No annual fee 
          means you can plan exactly how your points serve you or 
          your friends.
        `,
        benefits: [
          "5x points on all buys, no rotating categories",
          "Monthly bonus if spending crosses thresholds",
          "No annual fee, keep it for the long haul",
          "Redeem for travel, gift cards, statement credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For bigger collective adventures or personal goals, 
          you need upfront money fast but with a tidy repayment plan. 
          This loan has no origination fee and a fixed APR, 
          ensuring you can rally everyone behind an exciting plan 
          without financial chaos.
        `,
        benefits: [
          "Fixed APR, straightforward monthly payment",
          "No origination fee, more funds for the idea",
          "Up to 84 months if you want extended pacing",
          "Online management to keep group in the loop"
        ]
      }
    ]
  },

  "Adventurer+Connector+Realist": {
    combinedName: "Adventurer + Connector + Realist",
    description: `
      You’re keen on exploration and shared experiences but refuse to 
      let costs spiral. You help others but keep a rational lid on 
      finances, ensuring no hidden fees or uncontrolled debt.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          Spontaneous gatherings call for no monthly fees or overdraft costs. 
          This digital account blocks any overspending, so you can say “yes” 
          to group plans without quietly sliding into debt. Straightforward, 
          just how you like it.
        `,
        benefits: [
          "No monthly/overdraft fees, purely digital",
          "Declines overspending attempts automatically",
          "Online pay & Zelle for group cost-sharing",
          "Only $10 needed to open"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each impulsive or charitable purchase also builds a small reserve, 
          balancing your generosity with practicality. No monthly fee 
          (with checking) means it’s a safe, low-cost way to remain 
          financially grounded.
        `,
        benefits: [
          "Auto deposit per debit keeps a buffer growing",
          "Pause/change anytime if cash flow changes",
          "Fee waived with Key checking account",
          "Transparency in the mobile app for each deposit"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Get 2% back on everything, with no annual fee. That means your social 
          outings or adventurous buys return real cash to you—enabling you to 
          share or invest in your next opportunity. Digital alerts protect 
          against fraud, matching your cautious side.
        `,
        benefits: [
          "2% cash back (active Key checking) on all spending",
          "No annual fee, straightforward redemption",
          "Fraud protection and quick card lock/unlock",
          "Simple cash-back method to fund future adventures"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes a bigger plan needs immediate resources—maybe a group trip 
          or a chance to help someone. This loan’s fixed payments and 
          no-origination-fee structure let you fund it responsibly, 
          keeping your adventurous generosity safely anchored in rational 
          repayment schedules.
        `,
        benefits: [
          "Fixed APR, consistent monthly payments",
          "No origination fee, all funds go toward your plan",
          "Terms up to 84 months, flexible approach",
          "Online application for quick access"
        ]
      }
    ]
  },

  "Adventurer+Planner+Realist": {
    combinedName: "Adventurer + Planner + Realist",
    description: `
      You crave fresh experiences but insist on well-researched, stable 
      methods. You strategize each move yet remain ready to adapt if a 
      good opportunity presents itself, ensuring no hidden costs.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          A no-fee checking account suits your adventurous side, 
          while digital bill pay and spending alerts satisfy your 
          planning and realist traits. Early pay gets funds faster, 
          letting you act when needed but keep costs under control.
        `,
        benefits: [
          "No monthly fee, more for potential leaps",
          "Bill pay & alerts for structured oversight",
          "Early deposit for seizing quick opportunities",
          "Nationwide ATMs for impulsive travels"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each purchase nudges money into savings automatically— 
          a hidden advantage for someone who wants a stable foundation 
          while staying free to explore. Pause or adjust if your 
          careful planning says so, or if you need quick funds.
        `,
        benefits: [
          "Auto micro-deposits build a cushion",
          "Pause/change if plans shift abruptly",
          "No monthly fee with Key checking",
          "Transparent logs for your well-researched style"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Earn 5x points for any spending surge—great for big leaps—and no 
          annual fee to weigh down your budget. This matches your blend of 
          planning and caution while still rewarding spontaneous purchases 
          with strategic redemption.
        `,
        benefits: [
          "5x points on all spending, no categories",
          "Monthly bonus thresholds reward bigger outlays",
          "No annual fee, so no forced usage",
          "Redeem points for travel, gift cards, credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For ambitious projects or crucial purchases, a fixed-rate loan 
          aligns with your structured approach. No origination fee means 
          your realist side is satisfied with clear costs, while your 
          adventurer side gets immediate capital to act on ideas.
        `,
        benefits: [
          "Fixed APR, stable monthly outlay",
          "No origination fee, keep costs transparent",
          "Terms up to 84 months for precise scheduling",
          "All digital application for minimal hassle"
        ]
      }
    ]
  },

  "Connector+Planner+Realist": {
    combinedName: "Connector + Planner + Realist",
    description: `
      You harmonize caring about others, methodical organization, and a 
      cautious approach. You want to help, but everything must be researched, 
      clearly budgeted, and free from unpleasant surprises.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Protecting your finances from accidental overdrafts is crucial, 
          especially when helping others. Safe Checking declines over-limit 
          payments, so no one event sinks you into debt. You keep a calm, 
          predictable structure with a modest monthly fee.
        `,
        benefits: [
          "No overdrafts—transactions simply decline",
          "Transparent monthly fee, no hidden traps",
          "Online bill pay & deposit for easy group tracking",
          "Alerts so you see every spend immediately"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each time you or others rely on your debit, a small deposit flows 
          into savings. It’s a quiet, disciplined way to ensure you stay 
          ready to assist, without risking large lumps. No monthly fee 
          if linked to checking.
        `,
        benefits: [
          "Incremental savings with each purchase",
          "Pause or adjust as group or personal budgets shift",
          "Fee waived with checking, no overhead cost",
          "Transaction logs for meticulous records"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn 2% on all purchases (with an active Key checking), ideal 
          if you often cover group expenses or help family. No annual fee 
          means no wasted cost, and real-time fraud alerts keep everything 
          safe for collaborative spending.
        `,
        benefits: [
          "2% cash back, no complicated categories",
          "No annual fee, straightforward redemption",
          "Card lock/unlock for security",
          "Fraud monitoring for shared purchases"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Bigger communal goals or urgent family needs call for stable, 
          transparent financing. A fixed APR, no origination fee, and up 
          to 84-month terms let you plan repayment exactly, so you can 
          offer generous support without undermining your financial safety.
        `,
        benefits: [
          "Fixed APR, predictable monthly bill",
          "No origination fee, maximizing your loan amount",
          "12–84 months for flexible scheduling",
          "Manage online, ensuring total visibility"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner+Realist": {
    combinedName: "Adventurous, Connected, Realistic Planner",
    description: `
      You carry traits from all four core personas: a love of new experiences, 
      a collaborative spirit, a structured outlook, and a rational approach 
      to risk. Your financial tools must handle any scenario—adventurous, 
      communal, planned, or cautious.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          A no-fee checking that handles everything from group cost-splitting 
          to spontaneous purchases or scheduled bills. Early deposits suit 
          adventurous moves, while digital organization delights the planner, 
          and zero hidden fees calm the realist.
        `,
        benefits: [
          "No monthly fee, fosters flexibility",
          "Zelle® for quick group or friend paybacks",
          "Early deposit for fast paycheck access",
          "Mobile bill pay and alerts for structure"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each card swipe also contributes to savings, covering both your 
          forward-thinking side and your readiness to help or fund a new 
          venture. No monthly fee if linked to checking, so it remains 
          practical and aligned with all your traits.
        `,
        benefits: [
          "Incremental deposits per debit purchase",
          "No monthly fee with a linked Key checking",
          "Easy logs for your structured approach",
          "Pause any time if adventure calls for funds"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Up to 2% back on all spending—great for spontaneous outlays, 
          group payments, or planned expenses. No annual fee ensures 
          it’s cost-effective, and digital controls align with your 
          mix of caution, planning, connection, and adventure.
        `,
        benefits: [
          "2% back if Key checking is active",
          "No annual fee, keep it for sporadic or daily use",
          "Fraud monitoring, easy redemption",
          "Lock/unlock for immediate purchase security"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Whether it’s a personal leap, a communal project, a carefully plotted 
          endeavor, or a practical necessity, this fixed-rate loan with no 
          origination fee matches every angle. You get lump-sum freedom with 
          stable monthly repayments—ideal for your all-encompassing style.
        `,
        benefits: [
          "Fixed APR, no origination fee",
          "Terms up to 84 months for flexible planning",
          "Digital application fits your busy pace",
          "Allows big goals without hidden costs"
        ]
      }
    ]
  }
};

// End of tieData.js
// Each combinedName persona has 4 product recommendations,
// with pitches focusing on why they fit that multiple-trait mindset,
// and bullet points kept concise without explicit key.com references.
