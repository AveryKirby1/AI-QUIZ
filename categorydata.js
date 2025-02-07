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

/* tieData.js */

// Below are the 11 tie personas, each with a combinedName, description, and 4 product recommendations.
// The pitches now explicitly address each facet of the tie (e.g., “Adventurous” + “Planner”), explaining
// why the product appeals to both sides. No placeholders or references to “key.com” in bullet points.

const tieData = {
  "Adventurer+Planner": {
    combinedName: "Adventurous Planner",
    description: `
      You blend spontaneous energy with structured foresight, dreaming big yet 
      staying organized. Bold impulses meet methodical planning, creating a 
      perfect balance between excitement and stability.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Your adventurous side loves no monthly fees and freedom to spend on a whim, 
          while your planner side appreciates the digital bill pay and real-time alerts. 
          You can jump on sudden deals without losing track of each transaction.
        `,
        benefits: [
          "No monthly fee, ideal for mixed spending habits",
          "Early deposits for quick moves",
          "Bill pay and alerts for structured tracking",
          "Nationwide ATM network for on-the-fly access"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          This hits your spontaneity by letting you spend freely, yet it automatically 
          saves a bit each time—perfect for the planner in you who wants future security. 
          You remain impulsive but still build a cushion for tomorrow.
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
          The adventurer in you enjoys 5x points on any purchase, fueling big thrills, 
          while your planner side likes monthly spend bonuses that you can strategically 
          aim for. No annual fee ensures each point you earn goes toward future ventures.
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
          If you spot a major opportunity, your adventurer side wants fast funding, but 
          the planner in you demands fixed payments and no hidden fees. A predictable APR 
          meets your methodical style, and quick access satisfies your bold impulses.
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
    combinedName: "Adventurous Connector",
    description: `
      You’re driven by bold experiences and sharing them with others. You love 
      diving into new thrills alongside friends or family, ensuring everyone 
      benefits from your spontaneous nature.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          Your adventurous side wants no surprise fees, and your connector side 
          wants a simple way to handle group finances. If you overspend, it’s 
          declined—no overdraft drama. You can seize group outings worry-free.
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
          You often treat friends spontaneously, but this saver ensures each 
          purchase also builds a small fund. Adventurer? You still get to spend 
          freely. Connector? You’ll be ready if someone needs help. All with no 
          extra monthly fee.
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
          Earn up to 2% back on every impulsive buy (adventurer), which you 
          can then channel into group experiences (connector). No annual fee 
          keeps it simple, and digital controls safeguard communal spending.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, no complicated rewards categories",
          "Lock/unlock card instantly if misplaced",
          "Straightforward redemption for quick returns"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes your group needs a quick infusion of funds for a grand 
          adventure or a joint cause. This loan’s speedy approval and no origination 
          fee help you lead the charge (adventurer) while supporting everyone else 
          (connector) responsibly.
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
    combinedName: "Adventurous Realist",
    description: `
      You crave new experiences but watch costs and avoid risky pitfalls. You 
      act quickly on opportunities yet prefer straightforward products with 
      minimal fees or confusion.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          Your adventurer side loves the freedom of no monthly fees, while your 
          realist side wants guaranteed no overdrafts. Charges are declined beyond 
          your balance, so you don’t slip into unwanted debt after a spur-of-the-moment buy.
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
          Adventurers often spend impulsively; realists want a cushion. This 
          quietly saves a little every time you buy, ensuring you keep building 
          a safety net, even as you chase new thrills.
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
          You want quick credit for bold opportunities but minimal interest 
          if you carry a balance. Latitude’s 15-month 0% intro satisfies 
          adventure plans, while its lower ongoing APR respects your 
          cost-conscious realism.
        `,
        benefits: [
          "15-month 0% intro APR on buys/transfers",
          "Lower ongoing APR than many reward cards",
          "$0 annual fee, keep it in reserve",
          "Straightforward security features included"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For bigger leaps—like that dream trip—your realist side needs stable 
          payments and no hidden fees, while your adventurous side appreciates 
          quick funding. A fixed APR, no origination fee, and online ease check 
          both boxes perfectly.
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
    combinedName: "Connected Planner",
    description: `
      You meticulously organize your finances but also enjoy supporting and 
      uplifting those around you. You need products that create order while 
      letting you share resources and plan group goals smoothly.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Your planner side loves no monthly fees and robust bill pay. 
          Your connector side appreciates built-in Zelle® for group splits 
          and easy reimbursements. It’s a stable, communal-friendly account 
          with digital convenience.
        `,
        benefits: [
          "No monthly fees, stable for any budget plan",
          "Zelle for immediate splits or donations",
          "Early deposit options for better scheduling",
          "Online bill pay keeps everything tracked"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          As a planner, you value consistent savings; as a connector, you might 
          also need funds to help others. This automatically sets aside a little 
          each time you buy, ensuring your nest egg or communal support pool 
          grows without fuss.
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
          Planners want clear rewards, connectors want to share them. 
          2% cash back on all spending (with checking) plus no annual fee 
          fits both goals: systematically earn while easily redistributing 
          or reinvesting if you choose.
        `,
        benefits: [
          "2% on every purchase, no rotating categories",
          "No annual fee, so no hidden cost to your plan",
          "Simple redemption—statement credit or deposit",
          "Real-time alerts, lock feature for secure group spending"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For larger group initiatives or your own projects, a fixed monthly 
          cost keeps it tidy in your planner mindset, while no origination fee 
          means more money can go to helping others or building out your 
          structured goals.
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
    combinedName: "Realistic Planner",
    description: `
      You thoroughly map out your finances but also maintain a pragmatic, 
      data-driven perspective. You want everything proven and clear, no hidden 
      risks, no ambiguous fees—just stable progress toward concrete goals.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Overdrafts break your system, and hidden fees annoy your realism. 
          Safe Checking declines payments beyond your balance, so you never 
          slip into unexpected debt. Everything is methodical and upfront, 
          just as you prefer.
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
          You want consistent growth that fits your precise plans. Each debit 
          triggers a small deposit into savings. No monthly fee keeps the 
          cost structure simple, so your carefully designed budget remains 
          on track.
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
          You prefer a lower interest rate to gimmicky rewards. Latitude offers 
          a 15-month 0% intro APR, then transitions to a consistently modest rate. 
          No annual fee ensures it aligns with your measured, organized approach.
        `,
        benefits: [
          "15-month 0% intro APR on buys/transfers",
          "Lower ongoing APR than many reward cards",
          "$0 annual fee, no forced usage",
          "Straightforward perks, minimal complexity"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Large, planned goals—debt consolidation or a critical purchase— 
          deserve fixed, transparent financing. This loan’s fixed APR and 
          no origination fee let you integrate it neatly into your budget 
          without any messy cost surprises.
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
    combinedName: "Realistic Connector",
    description: `
      You love helping and collaborating but won’t compromise your financial 
      stability. You look for products that let you assist others while keeping 
      spending and risk under tight control.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Your connector side might cover someone’s bill, but your realist side 
          refuses overdraft fees. Safe Checking declines transactions over your 
          balance, so you can help without incurring surprise debt.
        `,
        benefits: [
          "No overdrafts—charges beyond balance are declined",
          "Low, predictable monthly fee structure",
          "Online bill pay & deposit for ease",
          "Real-time alerts to watch each transaction"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Your caring nature wants an emergency fund for friends, yet you remain 
          cost-conscious. Each purchase adds a bit to savings, building a safety net. 
          No monthly fee with checking ensures you’re not wasting resources.
        `,
        benefits: [
          "Small deposit each debit, building a fund",
          "Pause or adjust as finances shift",
          "Fee waived with Key checking",
          "Instant visibility in the mobile app"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% back on each purchase—use it to further your own stability 
          or lend a hand to others. No annual fee suits your practicality, and 
          card lock/unlock keeps communal spending safe if you help a friend.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, simple redemption",
          "Digital card lock/unlock for security",
          "Fraud alerts keep group transactions safe"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes bigger generosity or a group initiative calls for substantial funds. 
          A fixed APR and no origination fee keep it stable and transparent, so you 
          can help loved ones or fund communal projects without jeopardizing your 
          financial ground.
        `,
        benefits: [
          "Fixed APR for predictable monthly cost",
          "No origination fee, all funds go toward the goal",
          "Flexible terms up to 84 months",
          "Online application for clear, quick setup"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner": {
    combinedName: "Adventurous, Connected Planner",
    description: `
      You have an adventurous spark, a caring heart, and an organized mind. 
      You seek new experiences, often shared with friends, while keeping 
      your finances neatly planned.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Your adventurous side loves no fees and broad ATM access, your connector 
          side likes Zelle® for group cost-splitting, and your planner side enjoys 
          the digital bill pay and early deposit scheduling. All angles covered, 
          no monthly cost.
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
          Enjoy spontaneous fun or helping others, yet still systematically save. 
          A small deposit goes into savings each time you use your card, 
          satisfying both your caring and organized sides, with no monthly fee 
          to hamper your sense of adventure.
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
          Your adventurous side makes purchases freely, the connector side often 
          covers group bills, and your planner side wants structured rewards. 
          With 5x points and monthly bonuses, no annual fee, it satisfies all 
          three perspectives at once.
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
          For big collective adventures or personal expansions, you want quick funds, 
          stable repayment, and zero hidden fees. This loan checks all boxes: 
          immediate lumpsum for your bold moves, no origination fee for your 
          structured budget, and a safe space to help your group too.
        `,
        benefits: [
          "Fixed APR, stable monthly payment",
          "No origination fee, more funds for the idea",
          "Up to 84 months if you want extended pacing",
          "Online management to keep group in the loop"
        ]
      }
    ]
  },

  "Adventurer+Connector+Realist": {
    combinedName: "Adventurous, Connected Realist",
    description: `
      You love exploring new ideas and helping friends but remain firmly grounded 
      in cost awareness. You’ll chase excitement if it fits your practical, 
      community-centered outlook, always balancing risk with real-world caution.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          You want no monthly fees or overdrafts (realist), but also a quick, 
          digital way to handle group contributions (connector) and spontaneous 
          outings (adventurer). Declines if over balance, so no hidden charges 
          hamper your communal fun.
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
          Each time you indulge or pitch in for friends, a small portion lands 
          in savings. Your adventurous side spends freely, your connector side 
          helps others, your realist side is comforted by building a 
          no-fee safety net.
        `,
        benefits: [
          "Auto deposit per debit keeps a buffer growing",
          "Pause/change if cash flow changes",
          "Fee waived with checking link",
          "Real-time logs to keep it transparent"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn 2% back on your adventurous group buys. Connector? You can share 
          the rewards. Realist? No annual fee or complicated categories. 
          Everyone wins, with fraud protection safeguarding each purchase.
        `,
        benefits: [
          "2% cash back (active Key checking) on all spending",
          "No annual fee, straightforward redemption",
          "Lock/unlock card quickly if misplaced",
          "Simple cash-back method to fund future adventures"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          If a big communal opportunity or personal dream comes along, 
          a fixed-rate loan satisfies your adventurous spark and connector’s 
          desire to help, while your realist side likes stable payments 
          and no origination fee.
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
    combinedName: "Adventurous, Realistic Planner",
    description: `
      You crave fresh experiences but insist on well-researched, stable 
      methods. You strategize each move yet remain ready to adapt if a 
      good opportunity presents itself, ensuring no hidden costs.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No fees suit your adventurous flair, while your planning side 
          benefits from digital bill pay and budgeting tools, and the 
          realist in you likes real-time alerts. Early pay gets funds 
          quicker, fitting all facets of your personality.
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
          Adventurous moves might deplete funds, but each purchase 
          automatically saves a bit. Your realist side feels secure 
          with a growing buffer, while your planner side appreciates 
          the gentle, consistent build.
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
          Earn 5x points whether you buy spontaneously or in line 
          with a careful plan, then redeem them strategically. 
          No annual fee matches your practical side, while you 
          still enjoy big-point thrills for your adventurer spirit.
        `,
        benefits: [
          "5x points on all spending, no categories",
          "Monthly bonus thresholds reward bigger outlays",
          "No annual fee, no forced usage",
          "Redeem for travel, gift cards, credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          If you find a significant opportunity, your adventurer side 
          wants immediate funding. Your planner side demands a fixed APR, 
          and your realist side rejects hidden fees. This loan hits all points, 
          letting you confidently seize big goals.
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
    combinedName: "Connected, Realistic Planner",
    description: `
      You love coordinating group goals but also insist on solid financial 
      foundations and transparent, dependable methods. You keep everyone 
      on track, merging structure and caution with a warm heart for community.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Your planner side demands clarity, your realist side hates overdrafts, 
          and your connector side might occasionally front group costs. Safe 
          Checking declines over-limit transactions, so you avoid random debt 
          while staying inclusive.
        `,
        benefits: [
          "No overdrafts—charges beyond balance are declined",
          "Straightforward monthly fee, no hidden traps",
          "Digital bill pay & deposit for easy group tracking",
          "Alerts so you see every spend immediately"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each community purchase also grows a small buffer, which you can 
          use for personal security or future group needs. No monthly fee 
          if checking is linked, satisfying your caution and your desire 
          to help.
        `,
        benefits: [
          "Automatic micro-deposits per debit",
          "Pause or adjust as priorities shift",
          "No monthly fee with checking",
          "Clear transaction logs for total oversight"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          You often cover costs for others but keep a careful eye on finances. 
          Earn 2% back on each purchase, no annual fee, and real-time alerts. 
          Planner + Realist: it’s stable and easy to track, Connector: you can 
          share or donate rewards.
        `,
        benefits: [
          "2% cash back with active Key checking",
          "No annual fee, simple redemption",
          "Digital card lock/unlock for security",
          "Fraud monitoring for safe group transactions"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When a big group event or family emergency arises, you step in 
          but won’t compromise stable finances. A fixed APR and no origination 
          fee let you plan repayment meticulously, ensure realistic budgeting, 
          and still offer genuine support.
        `,
        benefits: [
          "Fixed APR, predictable monthly cost",
          "No origination fee, all funds go toward the goal",
          "12–84 month terms for flexible repayment",
          "Digital tracking keeps everything organized"
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
          This no-fee checking flexes for your adventurous spending, 
          your connector group-splits (Zelle®), your planner’s desire 
          for digital organization, and your realist’s need for no hidden 
          costs. It’s a universal fit for all four traits.
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
          Adventurous? Keep spending. Connector? Ready to help others. 
          Planner? Automatic contributions. Realist? No monthly fee if 
          linked to checking. It incrementally grows your safety net 
          across all your varied motivations.
        `,
        benefits: [
          "Incremental deposits per debit purchase",
          "No monthly fee with a linked Key checking",
          "Easy logs for your structured approach",
          "Pause or modify at will as goals change"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          2% back on everything addresses your thirst for spontaneous 
          buys (adventurer), group expenses (connector), thorough 
          budgeting (planner), and cost-consciousness (realist). 
          No annual fee, straightforward redemption, robust security— 
          it checks all boxes.
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
          Whether it’s personal exploration, communal needs, carefully 
          planned goals, or rational budgeting, this loan’s fixed APR 
          and no origination fee adapt to your every angle. Lump-sum 
          funding with stable payments means you can handle big ideas 
          responsibly.
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
// Each tie persona now explicitly references both (or all) traits in the pitch,
// explaining how that product meets their combined motivations.
// Bullet points remain concise and free of “key.com” placeholders.
