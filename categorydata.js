/* categorydata.js */

/****************************************************
 * MAIN CATEGORIES DATA
 ****************************************************/

const categoriesData = {
  Planner: {
    name: "Planner",
    article: "a",
    summary: "You are the master of practicality and preparation.",
  description: `
    You approach financial decisions with thoughtfulness, responsibility, and an eye toward 
    long-term security. While your careful approach keeps you grounded, you might sometimes 
    miss out on spontaneous opportunities. You thrive on structure and routine, preferring 
    to plan each step to avoid surprises. By setting clear goals and budgets, you gain 
    peace of mind and a sense of accomplishment.
  `,
    shortDescription: `
      Planners focus on structured routines and detailed goal-setting to ensure 
      financial stability, excelling at avoiding costly surprises. While a tendency 
      to overthink can slow decisions, this disciplined approach provides peace of 
      mind and fosters steady, long-term security.
    `,
   strengths: [
  "You excel at long-term strategizing—budgets and schedules are your superpower.",
  "You prefer detailed analysis before committing, helping avoid costly pitfalls.",
  "You maintain a structured, organized approach—goals, spreadsheets, and timelines keep you on track."
],
weaknesses: [
  "Overthinking can slow your progress—sometimes a quicker decision is valuable.",
  "Paralysis by analysis can happen if you never trust your instincts.",
  "Sudden changes or surprises may leave you feeling unprepared."
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
    summary: "You prioritize managing risk, avoiding unnecessary spending, and protecting resources.",
  description: `
    While your approach may appear conservative, it helps you navigate challenges with confidence. 
    You prefer stable, dependable strategies over flashy risks, trusting solid data and proven 
    methods. This mindset keeps you prepared, ensuring you can handle both the ups and downs 
    of your financial journey.
  `,
    shortDescription: `
      Realists favor low-risk, dependable strategies to protect resources, guided 
      by caution and clear data. While they may pass up certain prospects, measured 
      openness to calculated risk can uncover worthwhile gains, ensuring security 
      without sacrificing every chance for growth.
    `,
    strengths: [
  "You rely on clear evidence and proven methods, reducing the chance of big mistakes.",
  "You manage risk effectively—staying practical and level-headed in decisions.",
  "You rarely act impulsively, which keeps your finances stable under most conditions."
],
weaknesses: [
  "Being too cautious can mean missing some growth opportunities.",
  "Relying only on proven methods may limit creative solutions.",
  "You may hesitate to adapt quickly, waiting for total certainty."
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
    summary: "You view finances as a tool to support your community and bond with others.",
  description: `
    Whether it’s through generosity or lending a helping hand, you find emotional satisfaction 
    in giving back. Working together toward common goals brings you genuine joy, and you take 
    pride in uplifting those around you. In your mind, money only has true value when it’s used 
    to strengthen relationships and foster goodwill.
  `,
    shortDescription: `
      Connectors treat finances as a means to strengthen bonds and nurture communal 
      goals, emphasizing generosity and shared victories. A highly giving nature 
      can lead to overextension, but mindful boundaries preserve both personal 
      well-being and the desire to uplift others.
    `,
   strengths: [
  "You’re community-focused, supporting others and celebrating shared success.",
  "You thrive on collaboration—pooling resources and expertise for mutual benefit.",
  "Your generous spirit leads you to give back wherever possible."
],
weaknesses: [
  "You risk overextending your own resources by helping everyone.",
  "It can be hard to say no, leaving you vulnerable to financial strain.",
  "Avoiding conflict sometimes means you don’t address necessary money conversations."
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
        name: "Key Active Saver®",
        pitch: `
          You’re all about uplifting others, so a little extra cushion helps you give freely without worrying about your own security. This savings account automatically transfers a small amount each time you make a purchase, and no monthly fee means you can keep more ready to help those around you.
        `,
        benefits: [
          "Auto-deposits per debit purchase, perfect for consistent saving",
          "No monthly fee when linked to a Key checking",
          "Flexible pause or change if group priorities shift",
          "Instant visibility in the mobile app, so you always know your balance"
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
   summary: "Financial decisions for you are often about excitement, curiosity, and seizing new opportunities.",
  description: `
    You embrace risk with a positive mindset, driven by optimism and the thrill of the unknown. 
    Each financial challenge is a chance to explore fresh possibilities, and you rarely shy 
    away from trying something new. You see setbacks as growth opportunities, fueling your 
    eagerness to keep pushing boundaries.
  `,
    shortDescription: `
      Adventurers thrive on excitement and are quick to explore new financial 
      possibilities, guided by an optimistic spirit. Though impulsive choices 
      may arise, balancing spontaneity with prudent planning sustains momentum 
      and protects against the downsides of taking bold risks.
    `,
    strengths: [
  "You’re ready to act decisively—opportunities excite you, and you seize the moment.",
  "You stay curious and open-minded—always seeking new ways to grow.",
  "Your optimism fuels bold moves—trusting your instincts can open doors."
],
weaknesses: [
  "Balancing spontaneous fun with future needs can be tough—you still need a safety net.",
  "Impulse spending can creep up—reserving some ‘fun money’ helps maintain control.",
  "Acting too quickly may lead to regrets—sometimes stepping back is wise."
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
        name: "Key Active Saver®",
        pitch: `
          Every spontaneous purchase can also feed your next adventure. This account automatically transfers a bit into savings each time you swipe, building a fund for your bold moves—all with no monthly fee when linked to checking.
        `,
        benefits: [
          "Automatic micro-deposits per debit card purchase",
          "No monthly fee if you have a Key checking",
          "Pause/change anytime if new adventures pop up",
          "Mobile logs so you see your savings build in real time"
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

/* tieData.js */

// Below are the 11 tie personas, each with their original combinedName and the full, 
// original description text restored. The pitch sections explain why each product 
// suits all facets of the tie. Bullet points remain concise and omit direct “key.com” 
// references. No placeholders are used.

/* tieData.js */

// Below are the 11 tie personas, each with their original combinedName, a restored article,
// a description, and 4 product recommendations. We’ve reintroduced an “article” property
// (e.g., "a" or "an") so grammar is correct when referencing the combinedName persona.
// The pitches explain how each product meets every facet of the tie. Bullet points remain
// concise and omit “key.com” references.

const tieData = {
  "Adventurer+Planner": {
    article: "an",
    combinedName: "Adventurous Planner",
     summary: "An optimistic approach to new possibilities merges seamlessly with meticulous planning and goal-setting.",
  description: `
    Striking a balance between excitement and long-term security. Fresh ideas 
    stay grounded in structured strategies, ensuring you can dream big without 
    losing stability. Confidence comes from thorough research, yet there’s still 
    room for spontaneity. It’s an outlook that lets you relish life’s thrills 
    while steadily building toward future ambitions.
  `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Your adventurer side loves having no monthly fee and wide ATM access for 
          on-the-fly purchases, while your planner side appreciates digital bill pay 
          and alerts to track every transaction. Spontaneous but organized—that’s 
          exactly what this account delivers.
        `,
        benefits: [
          "No monthly fee, ideal for mixed spending habits",
          "Early deposit options for quick moves",
          "Bill pay and real-time alerts for structured tracking",
          "Nationwide ATM network for on-the-fly access"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each adventurous purchase also increments your savings automatically. 
          This suits your thrill-seeking side while ensuring you never skip 
          building a cushion for future goals—perfect for the planner in you.
        `,
        benefits: [
          "Auto-deposits per debit swipe for steady growth",
          "Pause or adjust as priorities evolve",
          "No monthly fee if linked to checking",
          "Easy logs so you see every small addition"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Adventurers love 5x points on all spending, fueling big thrills. 
          Planners like monthly bonus tiers they can strategically aim for. 
          No annual fee means every point goes toward experiences or 
          statement credit—balancing bold outlays and methodical earning.
        `,
        benefits: [
          "5x points on every buy, no rotating categories",
          "Monthly bonus tiers for higher spending surges",
          "No annual fee, simple to keep long-term",
          "Redeem for travel, events, or statement credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          If you spot a major opportunity, your adventurer side wants 
          fast funding, but your planner side demands fixed payments 
          and no hidden fees. This loan’s predictable APR suits your 
          methodical style, and quick access meets your bold impulses.
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
    article: "an",
    combinedName: "Adventurous Connector",
     summary: "An eagerness for bold experiences joins forces with a caring, collaborative mindset.",
  description: `
    Daring choices become more meaningful when they also serve friends, family, 
    or a broader network. Forward momentum comes from embracing new opportunities, 
    all the while celebrating shared wins. Together, it forms a synergy where 
    excitement and social responsibility flourish side by side.
  `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          As someone who jumps into group outings at a moment’s notice, you’ll love 
          no monthly or overdraft fees. If funds run low, transactions simply decline, 
          preventing hidden debt. It’s adventurous freedom with no risk to your 
          community spirit.
        `,
        benefits: [
          "No monthly or overdraft fees, purely digital",
          "Declines charges beyond balance, no surprise debt",
          "Online payments only, easy for group finances",
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
          Earning up to 2% cash back on every spend means your fearless buys can also 
          support communal goals. No annual fee and digital controls keep group 
          spending safe, and real-time cashback helps finance the next shared 
          adventure.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, no complicated categories",
          "Lock/unlock card instantly if misplaced",
          "Straightforward redemption for quick returns"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For a large group trip or a philanthropic gesture, this loan grants quick 
          funding. Your adventurous side can jump right in, and your connector 
          side can rally others—while no origination fee and a fixed APR keep 
          finances safe.
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
    article: "an",
    combinedName: "Adventurous Realist",
      summary: "Creative exploration blends with a fact-driven, cautious perspective, maintaining a healthy tension between passion and pragmatism.",
  description: `
    Bold moves never lose sight of stable outcomes, ensuring enthusiasm 
    doesn’t overshadow sound judgment. Forward motion is fueled by curiosity, 
    yet guided by measured analysis. The result is a mindset that welcomes 
    new ventures but insists on level-headed planning to keep risks in check.
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
          "Simple online bill pay & Zelle",
          "Open with a minimal deposit, no complexity"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          The adventurous side might spend impulsively; the realist side 
          wants a cushion. Each purchase triggers a small deposit to savings, 
          so you gain security without hampering your free spirit.
        `,
        benefits: [
          "Incremental savings each debit purchase",
          "Pause/change if priorities shift",
          "Fee waived with checking",
          "App logs for transparent tracking"
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
          quick funding. A fixed APR and no origination fee check both boxes perfectly.
        `,
        benefits: [
          "Fixed APR, predictable monthly outlay",
          "No origination fee, more funds for your plan",
          "Choose up to 84 months to suit comfort",
          "Fast online process, minimal friction"
        ]
      }
    ]
  },

  "Planner+Connector": {
    article: "a",
    combinedName: "Connected Planner",
    summary: "Practical, long-term strategies align with a genuine desire to see others thrive.",
  description: `
    Weaving personal security and communal benefit into one roadmap. Methodical 
    budgeting and goal-setting not only stabilize your finances but also create 
    pathways for collaborative success. Discipline in planning doesn’t preclude 
    caring deeply about shared outcomes. Ultimately, it’s an approach that merges 
    structure and empathy, leaving room for both prosperity and heartfelt connection.
  `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Your planner side loves no monthly fees and robust digital tools; 
          your connector side appreciates built-in Zelle® for group expenses. 
          Early deposits help you schedule everything on time, combining thorough 
          organization and a caring touch.
        `,
        benefits: [
          "No monthly fees, stable for budget plans",
          "Zelle for immediate group splits or donations",
          "Early deposit options for scheduling",
          "Online bill pay keeps all transactions tracked"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each debit transaction moves a bit into savings, growing a fund you 
          can use to assist friends or secure your own future. No monthly fee 
          with checking maintains your precise budget, supporting both 
          structured and communal goals.
        `,
        benefits: [
          "Small auto-deposits each purchase",
          "Fee waived with checking link",
          "Real-time updates for full control",
          "Unlimited withdrawals if someone needs help"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Planners want straightforward rewards, and connectors might share or 
          donate them. This card gives 2% on all purchases (with checking) and 
          has no annual fee, so every reward can be channeled effectively 
          without eroding your structured budget.
        `,
        benefits: [
          "2% on every purchase, no complicated categories",
          "No annual fee, no hidden costs",
          "Simple redemption—statement credit or deposit",
          "Real-time alerts, lock feature for group usage"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Whether it’s a planned event for friends or your own big project, 
          a fixed monthly cost helps you keep it on schedule. No origination fee 
          means each dollar goes directly to the cause, fitting your organized 
          and caring financial style.
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
    article: "a",
    combinedName: "Realistic Planner",
     summary: "Careful goal-setting pairs with a guarded, data-driven stance on risk.",
  description: `
    Building a foundation of consistent and reliable progress. Impulsive 
    choices rarely gain ground here, as every idea is vetted through 
    proven methods. An orderly framework provides the structure needed 
    to avoid unpleasant surprises. In this environment, measured action 
    leads to steady financial stability, free from unnecessary gambles.
  `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Overdrafts clash with your methodical, risk-averse style. Safe Checking 
          declines over-limit transactions, so no accidental negative balances. 
          A modest monthly fee is completely transparent, matching your 
          well-organized approach.
        `,
        benefits: [
          "No overdrafts—declines if over limit",
          "Modest monthly fee, fully clear",
          "Online bill pay & deposit for easy tracking",
          "Real-time alerts for methodical oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Consistent incremental savings align with your preference for stable 
          progress. Each debit moves a small amount to savings, ensuring you 
          steadily build funds. No monthly fee if linked to checking means no 
          risk of surprise costs.
        `,
        benefits: [
          "Auto-transfer per debit for stable accumulation",
          "Pause or adjust if your plan changes",
          "No monthly fee with checking",
          "Clear logs to see every deposit"
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch: `
          You prize low interest over flashy rewards. Latitude gives you 15 months 
          at 0% APR, then transitions to a more modest rate. No annual fee suits 
          your reserved spending approach, ensuring you keep everything 
          under control.
        `,
        benefits: [
          "15-month 0% intro on buys/transfers",
          "Lower ongoing APR than reward-centric cards",
          "$0 annual fee, easy to keep for emergencies",
          "Straightforward perks, minimal complexity"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For major planned expenses or debt consolidation, a fixed-rate, 
          no-origination-fee loan suits your caution and your methodical 
          approach. No hidden extras—just a transparent way to finance large 
          goals predictably.
        `,
        benefits: [
          "Fixed APR, predictable monthly cost",
          "No origination fee, transparent process",
          "Terms up to 84 months, aligning with your plan",
          "All digital management suits your systematic style"
        ]
      }
    ]
  },

  "Connector+Realist": {
    article: "a",
    combinedName: "Realistic Connector",
    summary: "A strong sense of generosity and collaboration is tempered by cautious financial management, ensuring supportive efforts don’t compromise security.",
  description: `
    Thoughtful teamwork can empower everyone, yet careful analysis remains 
    a guiding principle. Balancing empathy with level-headedness helps 
    avoid overextending resources in the name of kindness. It’s an 
    approach that keeps group goals in sight while protecting everyone’s interests.
  `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You help others but hate the threat of overdrafts. Safe Checking 
          declines charges if you exceed your balance, so you never sink 
          into unwanted debt. A clear monthly fee keeps your prudent side 
          comfortable while you aid friends or family.
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
          Each time you spend, a small amount moves into savings, ensuring 
          you’re prepared to help others without risking your main funds. 
          No monthly fee with checking keeps it realistic, so your altruism 
          stays manageable.
        `,
        benefits: [
          "Small deposit each debit, building a fund",
          "Pause or adjust as finances shift",
          "Fee waived with checking link",
          "Instant visibility in the mobile app"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% cash back on each purchase. It’s simple, with no annual fee, 
          so you can easily share rewards if you like. Card lock/unlock prevents 
          fraudulent group spending. A calm, practical approach to communal finances.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, straightforward redemption",
          "Digital card lock/unlock for security",
          "Fraud alerts keep group transactions safe"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes bigger help requires immediate funds. A fixed APR and no 
          origination fee keep it transparent, so you can support family or 
          friends without endangering your financial stability. Manage it 
          online, staying in full control.
        `,
        benefits: [
          "Fixed APR for predictable monthly cost",
          "No origination fee, all funds go toward the goal",
          "Flexible terms up to 84 months",
          "Apply online, track payments easily"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner": {
    article: "an",
    combinedName: "Adventurous, Connected Planner",
     summary: "Excitement for new possibilities meets structured planning and a caring heart for collective success.",
  description: `
    Bold ideas thrive when carefully mapped out and shared with those around you, 
    letting optimism and discipline work hand in hand. Rather than rushing headlong, 
    there’s a mindful effort to keep progress beneficial for all involved. This synergy 
    nurtures both personal ambition and the well-being of friends or community members.
  `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No fee fosters your adventurous impulses, Zelle® helps you split 
          costs with friends, and digital bill pay plus early deposit 
          satisfy your planner side. Everyone benefits from a stable, flexible 
          checking solution.
        `,
        benefits: [
          "No monthly fee, flexible for group or solo spending",
          "Zelle® for splitting costs among friends",
          "Early deposit for prompt access to funds",
          "Online bill pay for structured oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each purchase, whether spontaneous or shared, automatically feeds savings. 
          There’s no monthly fee (with checking), so your thrifty planner side 
          stays content, while your adventurous or generous impulses remain 
          funded without extra hassle.
        `,
        benefits: [
          "Micro-deposits each time you spend",
          "No monthly fee with linked checking",
          "Pause/change if group needs shift",
          "Unlimited withdrawals for communal events"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Earn 5x points on all buys—perfect for covering adventurous splurges 
          or group outings. Your planner side can strategize monthly bonuses, 
          while no annual fee keeps finances stable for communal or personal 
          goals.
        `,
        benefits: [
          "5x points on every purchase, no categories",
          "Monthly bonus thresholds for higher spending",
          "No annual fee, redeem for travel or credit",
          "Digital tracking aligns with your planning"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For major group ventures or personal leaps, this fixed-rate, 
          no-origination-fee loan offers quick funds. Adventurous enough 
          for bold steps, connector-friendly for communal efforts, 
          and planner-approved with predictable payments.
        `,
        benefits: [
          "Fixed APR, stable repayment schedule",
          "No origination fee, more funds for the idea",
          "Up to 84 months if you prefer long-term planning",
          "All online, easy to share updates with friends"
        ]
      }
    ]
  },

  "Adventurer+Connector+Realist": {
    article: "an",
    combinedName: "Adventurous, Connected Realist",
    summary: "A drive for discovery blends with generous intentions and a no-nonsense eye on risk, creating an outlook that values bold moves but remains firmly grounded.",
  description: `
    Ventures that benefit others are pursued if they fit within sensible 
    guidelines, helping everyone flourish. Growth is fueled by curiosity 
    and collaboration, yet governed by prudent decision-making. It’s a 
    path where excitement, social awareness, and practical strategy 
    maintain equilibrium.
  `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          You crave easy group spending, quick moves, 
          but no hidden debt. This account has no fees, no overdrafts, 
          and purely digital management. If you overshoot, it declines 
          the charge—simple and risk-free.
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
          Each buy also grows a fund, letting you help friends or embark 
          on sudden plans without ignoring financial prudence. No monthly 
          fee if linked to checking means stable, cost-aware savings.
        `,
        benefits: [
          "Auto deposit per debit, building a buffer",
          "Pause/change if financial needs shift",
          "Fee waived with checking link",
          "Transparent logs in the app"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn 2% on shared experiences or impulsive personal buys, no annual fee 
          to weigh you down. Real-time fraud alerts protect group or solo purchases, 
          balancing your adventurous, social, and cautious sides.
        `,
        benefits: [
          "2% cash back (active Key checking) on all spending",
          "No annual fee, straightforward redemption",
          "Lock/unlock if misplaced, safe for group usage",
          "Fraud monitoring keeps finances secure"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          If you spot a communal opportunity or personal dream requiring bigger funds, 
          your realist side wants stable monthly bills, while your adventurous side 
          wants to act fast, and your connector side appreciates helping everyone. 
          This fixed APR loan checks all boxes.
        `,
        benefits: [
          "Fixed APR, consistent monthly payments",
          "No origination fee, maximizing borrowed funds",
          "Terms up to 84 months, flexible approach",
          "Online application for quick access"
        ]
      }
    ]
  },

  "Adventurer+Planner+Realist": {
    article: "an",
    combinedName: "Adventurous, Realistic Planner",
     summary: "An appetite for new adventures runs alongside detailed planning and pragmatic caution.",
  description: `
    Breakthrough ideas feel invigorating, but each step is backed by reliable 
    methods that preserve financial stability. There’s room for spontaneity 
    and fresh perspectives, yet an underlying framework keeps risk in check. 
    This mix shapes an approach that strives for innovative progress without 
    losing sight of security or discipline.
  `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee benefits your adventurous spirit, while digital 
          bill pay and spending alerts satisfy both your planner’s structure 
          and your realist’s caution. Early deposit means you can jump on 
          deals with no hidden costs.
        `,
        benefits: [
          "No monthly fee, fueling spontaneous buys",
          "Bill pay & alerts for well-organized spending",
          "Early deposit for seizing quick opportunities",
          "Nationwide ATMs for your mobile lifestyle"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each purchase auto-deposits a little to savings. That supports 
          the adventurous impetus to spend, your planner’s desire for 
          systematic growth, and your realist’s need for a safety net. 
          No monthly fee keeps it practical.
        `,
        benefits: [
          "Micro-deposits with each debit purchase",
          "Pause/change if plans shift abruptly",
          "No monthly fee when linked to checking",
          "Clear logs for methodical oversight"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          5x points reward bold purchases, while your planner side can 
          strategize monthly bonus thresholds. Your realist side appreciates 
          no annual fee. It’s a strong synergy between high earning potential 
          and stable cost.
        `,
        benefits: [
          "5x points on all spending, no rotating categories",
          "Monthly bonus tiers boost earning potential",
          "No annual fee, simple to keep",
          "Redeem for travel, gifts, or statement credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For bigger goals—maybe a carefully conceived project or a sudden 
          investment—your adventurer side wants immediate funding; your planner 
          side demands clear installments; your realist side needs no hidden fees. 
          This loan’s fixed APR checks every box.
        `,
        benefits: [
          "Fixed APR, stable monthly outlay",
          "No origination fee, transparent cost",
          "Terms up to 84 months for scheduling",
          "All digital application suits your efficient approach"
        ]
      }
    ]
  },

  "Connector+Planner+Realist": {
    article: "a",
    combinedName: "Connected, Realistic Planner",
    summary: "Community-focused values intersect with thorough organization and a conservative approach to risk.",
  description: `
    Methodical goals ensure that everyone moves forward together. Each decision 
    is researched, reducing the likelihood of mistakes or unexpected challenges. 
    The result is a measured but caring style that safeguards resources while 
    nurturing shared triumphs.
  `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You want to help others but won’t risk overdrafts. Safe Checking declines 
          over-limit transactions, protecting your well-structured finances. 
          A transparent monthly fee aligns with your cautious approach, 
          letting group activities flourish securely.
        `,
        benefits: [
          "No overdrafts—charges beyond balance declined",
          "Straightforward monthly fee, no hidden traps",
          "Digital bill pay & deposit, easy for group tasks",
          "Alerts maintain your organized oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each time you spend on personal or communal needs, a small amount moves 
          to savings. Your planner side welcomes the methodical approach, 
          your realist side likes no monthly fee with checking, and your connector 
          side can use it to help friends.
        `,
        benefits: [
          "Automatic micro-deposits each debit",
          "Pause or adjust as group needs shift",
          "No monthly fee with checking",
          "Clear logs for full transparency"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn 2% on every purchase—handy for supporting community expenses 
          or systematic personal buys. No annual fee aligns with your 
          careful planning, and digital lock/unlock plus fraud alerts keep 
          everything safe for group usage.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, easy redemption",
          "Lock/unlock for quick security moves",
          "Fraud monitoring for group transactions"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          If a big community project or family member needs support, 
          this fixed APR, no-origination-fee loan provides the lump sum 
          swiftly. Your connector side helps loved ones, your planner 
          side manages stable monthly payments, and your realist side 
          sees no hidden costs.
        `,
        benefits: [
          "Fixed APR, predictable monthly cost",
          "No origination fee, maximizing loan proceeds",
          "12–84 months for flexible repayment",
          "Online application & tracking for organized process"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner+Realist": {
    article: "an",
    combinedName: "Adventurous, Connected, Realistic Planner",
    summary: "A love of fresh experiences, a generous spirit, structured direction, and factual risk assessment all converge here.",
  description: `
    Weaving excitement and caution into one strategy. Bold ideas are considered 
    through careful planning and validated against collective well-being, so 
    each move feels both thrilling and responsible. Research and collaboration 
    guide your decisions, balancing personal goals with communal benefit. 
    This all-encompassing blend aims to harmonize exploration, empathy, 
    security, and practicality in every financial choice.
  `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          This no-fee checking fits your adventurous spending, group cost-splitting, structured digital organization, and minimal risk. Early deposits and robust bill pay complement every facet of your persona.
        `,
        benefits: [
          "No monthly fee, flexible for any approach",
          "Zelle® for group splits or friend paybacks",
          "Early deposit for faster paycheck access",
          "Mobile bill pay and alerts for a structured view"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each swipe shifts some funds to savings, covering your future 
          ambitions, your communal generosity, 
          your need for caution, and still allowing for 
          adventurous purchases. No monthly fee ensures practical efficiency.
        `,
        benefits: [
          "Incremental deposits per debit purchase",
          "No monthly fee with checking",
          "Transparent app logs, suiting your structured approach",
          "Pause or modify for adventurous shifts or communal needs"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% back on every purchase—serving your impulsive adventures, 
          group expenses, disciplined budgeting, and cost-conscious mindset. 
          No annual fee and digital security features reinforce every side 
          of your four-fold persona.
        `,
        benefits: [
          "2% back if Key checking is active",
          "No annual fee, use it freely or as needed",
          "Fraud monitoring and easy redemption",
          "Lock/unlock to guard group or solo purchases"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Whether it’s personal exploration, a shared project, a carefully plotted 
          plan, or a practical requirement, this loan’s fixed APR and no origination 
          fee address all your angles. You get lump-sum funding with stable monthly 
          payments—fitting your adventurous, connected, realistic, and planning style.
        `,
        benefits: [
          "Fixed APR, no origination fee for stable costs",
          "Terms up to 84 months for flexible repayment",
          "Online application, fast approval for bold goals",
          "Handles major ideas without hidden charges"
        ]
      }
    ]
  }
};

// End of tieData.js
// Each tie persona now has an “article” property for correct grammar (“a” or “an”),
// retains the original detailed description, and includes updated pitches highlighting
// how each product satisfies all aspects of the combined categories.
