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

/* tieData.js */

// Below are the 11 tie personas, each with their original combinedName and the full, 
// original description text restored. The pitch sections explain why each product 
// suits all facets of the tie. Bullet points remain concise and omit direct “key.com” 
// references. No placeholders are used.

const tieData = {
  "Adventurer+Planner": {
    combinedName: "Adventurous Planner",
    description: `
      An optimistic approach to new possibilities merges seamlessly with 
      meticulous planning and goal-setting, striking a balance between 
      excitement and long-term security. Fresh ideas stay grounded in 
      structured strategies, ensuring you can dream big without losing 
      stability. Confidence comes from thorough research, yet there’s still 
      room for spontaneity. It’s an outlook that lets you relish life’s 
      thrills while steadily building toward future ambitions.
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
          "No monthly fee, flexible for mixed spending habits",
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
    combinedName: "Adventurous Connector",
    description: `
      An eagerness for bold experiences joins forces with a caring, 
      collaborative mindset, fueling both personal growth and communal uplift. 
      Daring choices become more meaningful when they also serve friends, 
      family, or a broader network. Forward momentum comes from embracing 
      new opportunities, all the while celebrating shared wins. Together, 
      it forms a synergy where excitement and social responsibility flourish 
      side by side.
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
          Each adventurous purchase also sets aside a bit for communal or personal 
          future goals. No fee when linked to checking means your desire to help 
          friends or plan spontaneous trips stays funded without extra costs.
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
          Your bold expenditures and communal generosity can earn up to 2% cash 
          back. No annual fee ensures you’re not wasting money—just refueling 
          your next group adventure. Digital card controls keep everything 
          secure for collaborative spending.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, no complicated categories",
          "Lock/unlock card instantly if misplaced",
          "Simple redemption for quick returns"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For a large group trip or a heartfelt cause, this loan grants quick 
          funding. Your adventurous side can jump in, and your connector side 
          can rally others—while no origination fee and a fixed APR keep the 
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
    combinedName: "Adventurous Realist",
    description: `
      Creative exploration blends with a fact-driven, cautious perspective, 
      maintaining a healthy tension between passion and pragmatism. Bold moves 
      never lose sight of stable outcomes, ensuring enthusiasm doesn’t overshadow 
      sound judgment. Forward motion is fueled by curiosity, yet guided by measured 
      analysis. The result is a mindset that welcomes new ventures but insists on 
      level-headed planning to keep risks in check.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          You act quickly on experiences but dislike hidden fees. This account 
          has no monthly charges or overdrafts: if your balance isn’t enough, 
          it simply declines the transaction. Perfect for impulsive moves within 
          rational limits.
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
          The adventurous side keeps spending, while your realist side 
          wants a contingency fund. Each purchase triggers a small deposit 
          to savings, so you gain security without hampering your free spirit.
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
          You appreciate a 15-month 0% intro APR for exciting purchases, 
          then a low ongoing APR for realistic cost control. No annual fee 
          means you keep it purely as a tool for the big moves you analyze 
          and decide to make.
        `,
        benefits: [
          "15-month 0% intro on buys/transfers",
          "Lower ongoing APR than typical rewards cards",
          "$0 annual fee, keep for occasional use",
          "Simple security features"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For bigger leaps, your adventurer side wants quick capital, 
          but your realist side insists on a fixed, predictable repayment. 
          This no-origination-fee loan strikes that balance, letting you 
          explore boldly while knowing exact monthly costs.
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
    combinedName: "Connected Planner",
    description: `
      Practical, long-term strategies align with a genuine desire to see others 
      thrive, weaving personal security and communal benefit into one roadmap. 
      Methodical budgeting and goal-setting not only stabilize your finances but 
      also create pathways for collaborative success. Discipline in planning 
      doesn’t preclude caring deeply about shared outcomes. Ultimately, it’s an 
      approach that merges structure and empathy, leaving room for both prosperity 
      and heartfelt connection.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Your planner side loves the no-fee structure and digital tools; 
          your connector side benefits from easy Zelle® splits and potential 
          check usage. It’s stable for your scheduled budget and effortless 
          for group contributions.
        `,
        benefits: [
          "No monthly fees, stable for any budget plan",
          "Zelle for immediate splits or donations",
          "Early deposit options for scheduling needs",
          "Online bill pay keeps everything tracked"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each purchase subtly grows your savings—great for your organized 
          financial plan—while ensuring you have a cushion to assist others. 
          No fee if linked to checking, so all contributions help your 
          communal or personal goals.
        `,
        benefits: [
          "Small auto-deposits each purchase",
          "Fee waived with checking link",
          "Real-time updates for precise control",
          "Unlimited withdrawals if a friend needs assistance"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Planners love the reliable 2% back (with checking), connectors love 
          sharing or donating that cash. No annual fee keeps your plan stable. 
          It’s a practical reward system that supports your generous spirit 
          and structured mindset.
        `,
        benefits: [
          "2% on every purchase, no rotating categories",
          "No annual fee, no hidden costs",
          "Simple redemption—statement credit or deposit",
          "Real-time alerts, lock feature for secure group usage"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For significant community events or your own projects, a personal 
          loan with fixed monthly payments suits your methodical approach. 
          No origination fee lets you put more toward helping or achieving 
          a well-planned milestone.
        `,
        benefits: [
          "Fixed APR, stable monthly bill",
          "No origination fee, maximizing your loan",
          "Up to 84-month term for a comfortable timeline",
          "Online management for transparent tracking"
        ]
      }
    ]
  },

  "Planner+Realist": {
    combinedName: "Realistic Planner",
    description: `
      Careful goal-setting pairs with a guarded, data-driven stance on risk, 
      building a foundation of consistent and reliable progress. Impulsive 
      choices rarely gain ground here, as every idea is vetted through 
      proven methods. An orderly framework provides the structure needed 
      to avoid unpleasant surprises. In this environment, measured action 
      leads to steady financial stability, free from unnecessary gambles.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Overdrafts clash with your structured, risk-averse nature. Safe 
          Checking declines transactions beyond your balance, preventing 
          negative totals. A modest monthly fee is transparent, fitting 
          your well-organized, no-surprise style.
        `,
        benefits: [
          "No overdrafts—declines over-limit transactions",
          "Modest monthly fee, fully clear",
          "Online bill pay & deposit for easy tracking",
          "Real-time alerts for methodical oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You want consistent, incremental savings. Each debit transaction 
          transfers a small amount to savings, building a steady fund 
          without fuss. No monthly fee if linked to checking maintains 
          your tidy cost structure.
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
          You prefer low, stable interest over complicated reward schemes. 
          Latitude offers 0% APR for 15 months, then stays modest. No annual 
          fee means it can just sit there for emergencies, matching your 
          cautious but prepared outlook.
        `,
        benefits: [
          "15-month 0% intro APR on buys/transfers",
          "Lower ongoing APR than reward-centric cards",
          "$0 annual fee, use as needed",
          "Simple perks, minimal complexity"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Large expenses or debt consolidation fit your orderly approach with 
          this fixed-rate, no origination fee loan. Each payment is locked in, 
          ensuring your careful budgeting remains on track and free from 
          hidden charges.
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
    combinedName: "Realistic Connector",
    description: `
      A strong sense of generosity and collaboration is tempered by cautious 
      financial management, ensuring supportive efforts don’t compromise security. 
      Thoughtful teamwork can empower everyone, yet careful analysis remains a 
      guiding principle. Balancing empathy with level-headedness helps avoid 
      overextending resources in the name of kindness. It’s an approach that 
      keeps group goals in sight while protecting everyone’s interests.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You help others but won’t risk overdrafts. Safe Checking declines 
          charges if you exceed your balance, so no unwanted debt arises. 
          A clear monthly fee keeps everything straightforward, 
          letting you give without fear of hidden fees.
        `,
        benefits: [
          "No overdrafts, if over balance it declines",
          "Simple monthly fee, no hidden extras",
          "Digital payments, easy to coordinate",
          "Real-time alerts for conscientious oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each purchase grows a small reserve, so you’re prepared when 
          family or friends need help. You stay practical—no monthly fee 
          with checking—and build generosity funds without draining 
          your core budget.
        `,
        benefits: [
          "Incremental deposit per debit use",
          "Pause/change if money’s tight",
          "Fee waived with checking link",
          "Instant visibility in app"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          You can earn up to 2% cash back on daily spending, giving you 
          a cushion you could share. No annual fee respects your cautious 
          side, and digital controls protect group or shared expenses from fraud.
        `,
        benefits: [
          "2% cash back with active Key checking",
          "No annual fee, straightforward redemption",
          "Card lock/unlock for quick security",
          "Fraud monitoring for safe group spending"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes bigger help requires immediate funds. This fixed APR, 
          no-origination-fee loan provides that boost while preserving 
          your careful budgeting. You can assist loved ones without 
          jeopardizing your own security.
        `,
        benefits: [
          "Fixed APR, predictable monthly cost",
          "No origination fee, all funds for the need",
          "12–84 month terms for flexible repayment",
          "Online application & autopay for control"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner": {
    combinedName: "Adventurous, Connected Planner",
    description: `
      Excitement for new possibilities meets structured planning and a caring 
      heart for collective success. Bold ideas thrive when carefully mapped 
      out and shared with those around you, letting optimism and discipline 
      work hand in hand. Rather than rushing headlong, there’s a mindful effort 
      to keep progress beneficial for all involved. This synergy nurtures 
      both personal ambition and the well-being of friends or community members.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee supports your spontaneous side, built-in Zelle® 
          and optional checks help your connector mindset, and robust digital 
          management serves your planner detail. Everyone benefits from an 
          easy, no-cost checking solution.
        `,
        benefits: [
          "No monthly fee, flexible for shifting group funds",
          "Zelle® for instant splits among friends",
          "Early deposit if you want quick coverage",
          "Bill pay/online tools for structured oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each time you spend—be it on a whim or with a group—this account 
          auto-saves a bit. It meshes your adventurous impulse, your 
          connector desire to support others, and your planner’s focus on 
          systematic saving.
        `,
        benefits: [
          "Micro-deposits for ongoing savings",
          "No monthly fee when tied to checking",
          "Pause/change if priorities shift",
          "Unlimited withdrawals if the group needs funds"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Earn 5x points on anything—cover adventurous splurges, group dinners, 
          or daily bills. Monthly bonuses reward heavier spending surges, 
          while no annual fee complements your planner sense. Redeem for 
          experiences that connect everyone.
        `,
        benefits: [
          "5x points on all spending, no categories",
          "Monthly bonus thresholds for bigger outlays",
          "No annual fee, redeem for travel or statement credit",
          "Easy digital tracking for a systematic approach"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For major collective goals or personal ambitions, you want fast 
          funding but also a fixed plan. This no-origination-fee loan 
          offers stable monthly costs and quick approvals, suiting your 
          adventurer’s spark, planner’s precision, and connector’s group focus.
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
      A drive for discovery blends with generous intentions and a no-nonsense 
      eye on risk, creating an outlook that values bold moves but remains 
      firmly grounded. Ventures that benefit others are pursued if they fit 
      within sensible guidelines, helping everyone flourish. Growth is fueled 
      by curiosity and collaboration, yet governed by prudent decision-making. 
      It’s a path where excitement, social awareness, and practical strategy 
      maintain equilibrium.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          You want no monthly fees or overdraft threats, especially when 
          handling group finances or sudden adventures. If your balance 
          isn’t enough, it simply declines, so you avoid hidden debt 
          while staying free to say “yes.”
        `,
        benefits: [
          "No monthly/overdraft fees, purely digital",
          "Declines overspending attempts automatically",
          "Easy online payments and Zelle for group costs",
          "Open with minimal deposit"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each time you spend on a fun outing or help a friend, you 
          also stash a bit away. You stay adventurous and giving, 
          while your realist side builds a secure reserve without 
          monthly costs if linked to checking.
        `,
        benefits: [
          "Auto deposit per debit, steady savings",
          "Pause/change if budgets shift",
          "Fee waived with checking link",
          "Transparent logs in the app"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn 2% on every purchase, a simple way to recoup costs from 
          group gatherings or spur-of-the-moment buys. No annual fee 
          meets your practical side, while digital alerts safeguard 
          communal or personal spending.
        `,
        benefits: [
          "2% cash back with active Key checking",
          "No annual fee, straightforward redemption",
          "Lock/unlock for security if misplaced",
          "Fraud monitoring for safe group usage"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When a larger plan emerges—like a group trip or supporting 
          someone in a pinch—this fixed-rate, no-origination-fee loan 
          keeps your finances stable while letting you indulge your 
          collaborative, adventurous spark responsibly.
        `,
        benefits: [
          "Fixed APR, consistent monthly payments",
          "No origination fee, maximizing borrowed funds",
          "Terms up to 84 months, flexible approach",
          "Online application, fast approval"
        ]
      }
    ]
  },

  "Adventurer+Planner+Realist": {
    combinedName: "Adventurous, Realistic Planner",
    description: `
      An appetite for new adventures runs alongside detailed planning and 
      pragmatic caution. Breakthrough ideas feel invigorating, but each step 
      is backed by reliable methods that preserve financial stability. 
      There’s room for spontaneity and fresh perspectives, yet an underlying 
      framework keeps risk in check. This mix shapes an approach that strives 
      for innovative progress without losing sight of security or discipline.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee suits your adventurous side, while digital 
          bill pay and real-time alerts satisfy your planner and 
          realist traits. Early pay helps you act on quick needs, 
          yet you never face hidden costs.
        `,
        benefits: [
          "No monthly fee, more for potential leaps",
          "Bill pay & alerts for structured oversight",
          "Early deposit for quick opportunities",
          "Nationwide ATMs for impulsive travels"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You can indulge in a spontaneous buy but still see a small 
          portion quietly transferred to savings. This arrangement 
          respects your adventurous urges while maintaining the 
          realism and planning you rely on for stability.
        `,
        benefits: [
          "Auto micro-deposits build a cushion",
          "Pause/change if plans shift abruptly",
          "No monthly fee with Key checking",
          "Transparent logs for your systematic style"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          5x points reward your big purchases (adventurer), and 
          monthly thresholds align with your planner’s strategy. 
          Meanwhile, the lower-effort structure (no annual fee) 
          placates your realist side—no forced extra spending.
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
          Major goals or sudden ideas can be funded quickly, with 
          a stable APR and no origination fee. That satisfies 
          your adventurous desire to act now, your planner’s 
          need for clarity, and your realist’s insistence on 
          no hidden fees.
        `,
        benefits: [
          "Fixed APR, stable monthly outlay",
          "No origination fee, keeping costs clear",
          "Terms up to 84 months for precise scheduling",
          "All digital application for minimal hassle"
        ]
      }
    ]
  },

  "Connector+Planner+Realist": {
    combinedName: "Connected, Realistic Planner",
    description: `
      Community-focused values intersect with thorough organization and a 
      conservative approach to risk, forming a calm yet people-centric vision. 
      Collaborative efforts can blossom under systematic goals, ensuring that 
      everyone moves forward together. Each decision is researched, reducing 
      the likelihood of mistakes or unexpected challenges. The result is a 
      measured but caring style that safeguards resources while nurturing 
      shared triumphs.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You manage group efforts but won’t risk overdrafts. Safe Checking 
          declines over-limit transactions, preventing negative balances. 
          A clear monthly fee suits your planner’s desire for structure, 
          your realist caution, and your connector ethos of mindful spending.
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
          Each purchase quietly sets aside savings for personal security 
          or group needs. Your planner side loves the systematic approach, 
          your realist side sees no monthly fee, and your connector side 
          can tap it to help others.
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
          Earn 2% on all purchases—ideal for covering group costs or personal 
          bills, then deciding how best to use those rewards. No annual fee 
          ensures your carefully budgeted approach stays intact, while real-time 
          card controls protect communal spending.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, simple redemption",
          "Digital card lock/unlock for security",
          "Fraud monitoring for safe group transactions"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When a big community project or family emergency arises, a fixed APR 
          and no origination fee satisfy your planner’s structure and your 
          realist’s caution, while letting you help your circle effectively.
        `,
        benefits: [
          "Fixed APR, predictable monthly cost",
          "No origination fee, maximizing loan proceeds",
          "12–84 month terms for flexible repayment",
          "Online application & tracking for an organized process"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner+Realist": {
    combinedName: "Adventurous, Connected, Realistic Planner",
    description: `
      A love of fresh experiences, a generous spirit, structured direction, 
      and factual risk assessment all converge here, weaving excitement 
      and caution into one strategy. Bold ideas are considered through 
      careful planning and validated against collective well-being, so each 
      move feels both thrilling and responsible. Research and collaboration 
      guide your decisions, balancing personal goals with communal benefit. 
      This all-encompassing blend aims to harmonize exploration, empathy, 
      security, and practicality in every financial choice.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          This no-fee checking adapts to your group-oriented, adventurous, 
          detail-focused, and cautious sides equally. You enjoy no monthly 
          costs, Zelle® for group splits, digital bill pay for planning, 
          and minimal risk. Perfect for an all-around approach.
        `,
        benefits: [
          "No monthly fee, fosters flexibility",
          "Zelle® for quick group or friend paybacks",
          "Early deposit for faster paycheck access",
          "Mobile bill pay and alerts for structure"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each card swipe supports future goals or communal funds, 
          satisfying your adventurous spontaneity (you still spend) 
          and your structured caution (you keep saving). No fee if 
          linked to checking, so it remains realistic for daily life.
        `,
        benefits: [
          "Incremental deposits per debit purchase",
          "No monthly fee with checking",
          "Easy logs for clarity, suiting your planning",
          "Pause or modify as group needs shift"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Up to 2% on everything addresses your thrill of spending (adventurer), 
          your desire to help or share (connector), your organized approach 
          (planner), and your cost-awareness (realist). No annual fee keeps it 
          budget-friendly, digital alerts protect shared or solo buys.
        `,
        benefits: [
          "2% back if Key checking is active",
          "No annual fee, keep it for any scenario",
          "Fraud monitoring, simple redemption",
          "Lock/unlock for security in real time"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Whether it’s a personal leap, a communal cause, a precise plan, 
          or a cautious project, this loan’s fixed APR and no origination fee 
          adapt to every aspect of you. Lump-sum funding with stable repayments 
          suits the entire spectrum of your persona.
        `,
        benefits: [
          "Fixed APR, no origination fee",
          "Terms up to 84 months for flexible planning",
          "Fast digital application for quick approval",
          "Covers major goals without hidden costs"
        ]
      }
    ]
  }
};

// End of tieData.js
// Each tie persona retains its original description text, with updated pitches
// explaining how each product suits all sides of the tie (adventurer, connector,
// planner, realist), and bullet points remain concise with no explicit key.com references.
