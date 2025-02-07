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

const tieData = {
  "Adventurer+Planner": {
    name: "Adventurer + Planner",
    description: `
      You blend spontaneous energy with structured foresight, seeking excitement 
      while still desiring a sensible roadmap. You can dream big yet stay organized, 
      balancing bold impulses with methodical planning.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Perfect for quick leaps and careful budgeting: zero fees let you handle impulsive 
          buys without monthly costs, while digital tools (bill pay, real-time alerts) 
          satisfy your planning side.
        `,
        benefits: [
          "No monthly fee, flexible for shifting balances",
          "Early deposit option so money’s ready sooner",
          "Mobile bill pay for organized finances on the go",
          "Nationwide ATM access for impromptu purchases"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each time you spend spontaneously, a small amount auto-saves in the background. 
          This automated cushion lets you embrace new adventures without neglecting 
          your future plan.
        `,
        benefits: [
          "Auto-deposits each debit, steady savings growth",
          "Pause/change amounts for changing goals",
          "No monthly fee when linked to checking",
          "Simple way to build a safety net for big ideas"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Earn points on every whimsical buy, then redeem them strategically. Monthly 
          bonus tiers reward bigger purchases, matching your adventurous bursts, while 
          no annual fee keeps it planner-friendly.
        `,
        benefits: [
          "5x points on all spending, no categories",
          "Monthly spend bonuses for bigger leaps",
          "No annual fee, easy to keep long-term",
          "Redeem for travel, gift cards, or statement credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          A fast lump sum for major undertakings—maybe a dream project or a calculated 
          risk. A fixed rate appeals to your planning instincts, and quick funding 
          matches your adventurous spirit.
        `,
        benefits: [
          "Predictable payments with a fixed APR",
          "No origination fee, more funds for your project",
          "Up to 84-month term to fit your timeline",
          "Online application keeps planning hassle-free"
        ]
      }
    ]
  },

  "Adventurer+Connector": {
    name: "Adventurer + Connector",
    description: `
      You pursue bold, thrilling opportunities but also love sharing them with friends 
      and family. You want financial products that let you explore spontaneously 
      while still staying connected to your community.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          No fees or checks means you can spontaneously fund group outings without 
          worrying about overdrafts or hidden costs. It’s digital, easy to manage, 
          and ideal for quick communal spends.
        `,
        benefits: [
          "No monthly or overdraft fees, purely digital",
          "Declines transactions beyond balance, no surprises",
          "Send/receive money seamlessly with no check overhead",
          "Open with minimal deposit, perfect for group funds"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each spur-of-the-moment purchase also builds a small group fund or emergency stash. 
          You can pause or adjust anytime, so you can help friends or jump into new activities 
          without draining your balance.
        `,
        benefits: [
          "Auto transfers per debit, slow-and-steady saving",
          "Link to checking for fee-free setup",
          "Withdraw anytime if a friend needs quick help",
          "Track progress easily in the banking app"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% cash back on everything—from shared dinners to adventurous trips 
          with friends. No annual fee keeps it simple, and real-time card controls protect 
          your communal finances on the go.
        `,
        benefits: [
          "2% cash back with an active Key checking",
          "No annual fee, no complicated rewards categories",
          "Lock/unlock card instantly for security",
          "Fraud monitoring so group funds stay safe"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes you and your friends need a bigger pot for travel or a community project. 
          This loan offers fast access to funds, stable monthly payments, and no origination 
          fee. Embrace shared adventures or causes without chaotic financial surprises.
        `,
        benefits: [
          "Fixed APR, clear monthly payments",
          "No origination fee, keeps costs down",
          "Apply and track online for group transparency",
          "Up to 84 months repayment if needed"
        ]
      }
    ]
  },

  "Adventurer+Realist": {
    name: "Adventurer + Realist",
    description: `
      You’re daring but grounded, chasing new experiences while still keeping an 
      eye on costs and risks. You want flexible, fast options yet no surprise 
      fees or ballooning debt.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          This checkless, fee-free setup suits your drive to seize opportunities 
          without random fees. If you overshoot your balance, the transaction is declined— 
          so you stay safe from accidental debt while exploring.
        `,
        benefits: [
          "No monthly fees, purely digital approach",
          "Declines charges that exceed balance",
          "Simple bill pay & Zelle for daily needs",
          "Open with a low deposit, no overhead"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each impulsive buy also nudges money into savings. You keep your thrill-seeking 
          edge but grow a buffer in case reality demands it. No monthly fee keeps your 
          security costs low.
        `,
        benefits: [
          "Auto-saving each time you swipe",
          "Pause if you need more spending flexibility",
          "Fee waived with Key checking",
          "Everything tracked in one place"
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch: `
          You want a fallback credit option that doesn’t penalize you with high interest if 
          you carry a balance occasionally. This card’s 0% intro APR and lower ongoing rates 
          ensure minimal risk. No annual fee means you keep it around purely for practical 
          spending or unexpected needs.
        `,
        benefits: [
          "15-month 0% intro APR on purchases/transfers",
          "Lower ongoing APR than many rewards cards",
          "$0 annual fee for cost efficiency",
          "Solid fraud protection & zero liability"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For bigger leaps—like a bucket-list trip or a vital purchase—this loan’s fixed payments 
          let you act boldly without risking spiraling interest. No origination fee means 
          you’re maximizing every borrowed dollar, honoring your mix of adventurousness 
          and realism.
        `,
        benefits: [
          "Fixed rate ensures monthly payment stability",
          "No origination fee, money goes straight to your plan",
          "Up to 84 months to manage repayment comfortably",
          "Apply online, quick approval to act fast"
        ]
      }
    ]
  },

  "Planner+Connector": {
    name: "Planner + Connector",
    description: `
      You meticulously organize your finances but also enjoy supporting and uplifting 
      those around you. You need products that create order while letting you share 
      resources and plan group goals smoothly.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          Zero fees suit your structured budget, and built-in Zelle helps you coordinate 
          shared costs. You can schedule bills meticulously and still handle group 
          transactions seamlessly. It’s the perfect foundation for your thoughtful, 
          community-oriented approach.
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
          Every time you or your friends spend, you can funnel a small amount into savings. 
          No monthly fee if linked to checking, ensuring each bit goes straight to your 
          communal or personal goals. A calm, methodical way to grow funds for shared 
          projects or personal safety nets.
        `,
        benefits: [
          "Auto micro-savings per debit purchase",
          "No monthly fee with Key checking",
          "Manage and adjust easily in the app",
          "Unlimited withdrawals if group needs funds"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Ideal for your consistent spending: 2% back on all purchases (with Key checking). 
          Use it for day-to-day or group expenses, then funnel the cashback into 
          personal milestones or charitable efforts. It’s a methodical reward system 
          that complements your giving nature.
        `,
        benefits: [
          "2% on all purchases, no rotating categories",
          "$0 annual fee, so no hidden cost to your plan",
          "Simple redemption—statement credit or deposit",
          "Real-time alerts, lock feature for secure group spending"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When a bigger joint initiative or personal milestone needs funding, this 
          fixed-payment loan keeps everything orderly. No origination fee ensures 
          your entire borrowed sum benefits the project or loved ones. You get to 
          combine methodical repayment with heartfelt support.
        `,
        benefits: [
          "Fixed APR for predictable monthly costs",
          "No origination fee, maximizing the loan value",
          "Up to 84-month term if planning a lengthy payoff",
          "Online application & tracking for easy oversight"
        ]
      }
    ]
  },

  "Planner+Realist": {
    name: "Planner + Realist",
    description: `
      You excel at methodical strategies but keep both eyes on practical, concrete 
      outcomes. You appreciate structure, proven methods, and transparent fees. 
      Everything must fit neatly into your well-researched budget.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          Overdrafts violate both your sense of order and your pragmatic approach. 
          This account simply declines any over-limit transaction, protecting you 
          from negative balances. The modest monthly fee is transparent, so your 
          budget remains meticulously intact.
        `,
        benefits: [
          "No overdraft risk—declined if over limit",
          "Straightforward monthly fee, no hidden extras",
          "Online bill pay & deposits keep it tidy",
          "Alerts & statements for constant clarity"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Reliable saving suits your data-driven style. Each debit card use triggers 
          a small deposit into savings—no surprises, just methodical growth. You can 
          tweak or pause as your calculations change, ensuring it always aligns 
          with your carefully laid plans.
        `,
        benefits: [
          "Auto-transfer each debit purchase",
          "Pause/change settings easily",
          "No monthly fee with linked checking",
          "Full digital logs for exact tracking"
        ]
      },
      {
        name: "KeyBank Latitude® Credit Card",
        pitch: `
          You prefer low, stable rates to flashy rewards. Latitude offers a 15-month 
          0% intro APR, then shifts to a consistently lower rate. No annual fee 
          means it can sit in your wallet as a strategic tool for needed purchases, 
          perfectly fitting your cautious but structured mindset.
        `,
        benefits: [
          "15-month 0% intro APR on buys/transfers",
          "Lower ongoing APR than many reward cards",
          "$0 annual fee, keep as a prudent backup",
          "Alerts & fraud monitoring for peace of mind"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          You want a predictable, clear-cut way to finance bigger goals or consolidate 
          debt. This loan’s fixed APR locks in stable monthly payments, perfect for 
          your carefully planned budgets. No origination fee ensures exact cost 
          calculations remain accurate.
        `,
        benefits: [
          "Fixed APR—plan each month precisely",
          "No origination fee, full transparency",
          "Flexible terms up to 84 months",
          "All managed digitally for a neat process"
        ]
      }
    ]
  },

  "Connector+Realist": {
    name: "Connector + Realist",
    description: `
      You’re caring and collaborative yet also keep a cautious eye on finances. 
      While you love supporting others, you won’t compromise stability or risk 
      hidden fees. You want no-nonsense products that protect your generosity.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You won’t let overdrafts or surprise fees undermine your ability to help. 
          This account declines transactions that exceed your balance, removing 
          the risk of unexpected charges. Straightforward fees mean you can budget 
          compassion without fear of penalty.
        `,
        benefits: [
          "No overdrafts—payments decline if over limit",
          "Low, predictable monthly fee structure",
          "Online bill pay & deposit for ease",
          "Real-time alerts to watch each transaction"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          A steady, incremental saving approach keeps you ready to lend a hand 
          without draining your resources. Each purchase moves a little into savings, 
          so you’re always prepared when someone needs assistance or if an emergency arises.
        `,
        benefits: [
          "Small deposit each debit, building a fund",
          "Pause or adjust as finances shift",
          "Fee waived with Key checking",
          "Clear logs so you know your exact cushion"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% back on every purchase—an easy way to keep some extra money 
          for yourself or to share. No annual fee ensures nothing cuts into those 
          rewards. Lock/unlock features and fraud monitoring keep you safe when 
          making purchases on behalf of others.
        `,
        benefits: [
          "2% cash back with active Key checking",
          "No annual fee, simple redemption",
          "Digital lock/unlock for security",
          "Fraud monitoring protects group spending"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes bigger generosity or community projects require quick, 
          substantial funds. This loan covers that need while keeping your 
          budget intact: a fixed APR, no origination fee, and flexible terms 
          let you give freely without risking financial chaos.
        `,
        benefits: [
          "Fixed APR for predictable monthly cost",
          "No origination fee, so all funds go to helping",
          "12–84 month terms for flexible repayment",
          "Apply online, track payments easily"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner": {
    name: "Adventurer + Connector + Planner",
    description: `
      You fuse bold enthusiasm, a giving nature, and organized foresight. 
      You dive into new experiences but keep them well-structured, making 
      sure friends join the fun and finances stay aligned with long-term plans.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fees let you funnel resources into both spontaneous outings 
          and group events, while the robust digital platform helps you plan bills 
          or schedule deposits. Zelle® ensures cost-splitting is painless for 
          everyone involved.
        `,
        benefits: [
          "No monthly fee, ideal for fluid spending",
          "Zelle for effortless group expense sharing",
          "Early deposit for those spontaneous plans",
          "Online bill pay keeps your planning side happy"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Each purchase also seeds your future. You can confidently fund trips, 
          help friends, and still watch your balance grow. There’s no monthly fee 
          if linked to checking, making it a comfortable, efficient part of 
          your overall budget.
        `,
        benefits: [
          "Auto micro-deposits with each debit",
          "No monthly fee paired with checking",
          "Adjust or pause if financial goals shift",
          "Unlimited withdrawals for quick communal plans"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Earn 5x points on all spending, perfect for covering group adventures 
          or personal splurges. Monthly bonus thresholds match your occasional 
          big spends, and no annual fee preserves your careful planning. Redeem 
          for travel or statement credit—whatever fits your triple-threat persona.
        `,
        benefits: [
          "5× points on all buys, no rotating categories",
          "Monthly spend bonuses for bigger months",
          "No annual fee, redeem for travel or gifts",
          "Simple online tracking, good for planning"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For larger projects, group ventures, or personal dreams, this loan 
          provides a lump sum without an origination fee. The fixed rate 
          satisfies your planner side, while quick funding lets you seize 
          adventurous goals. Your connector side can rest assured everyone’s 
          contributions stay organized.
        `,
        benefits: [
          "Fixed APR, predictable payments",
          "No origination fee, maximize borrowed amount",
          "Up to 84-month term for flexible pacing",
          "Fully online management to keep group in sync"
        ]
      }
    ]
  },

  "Adventurer+Connector+Realist": {
    name: "Adventurer + Connector + Realist",
    description: `
      You love exploring new ideas and helping friends but remain firmly grounded 
      in cost awareness. You’ll chase excitement if it fits your practical, 
      community-centered outlook, always balancing risk with real-world caution.
    `,
    products: [
      {
        name: "KeyBank Hassle-Free Checking Account®",
        pitch: `
          Ideal when you’re juggling group plans but don’t want hidden fees. 
          It never charges overdraft fees—over-limit attempts are just declined. 
          That means you can say “yes” to adventures and communal expenses 
          without risking nasty financial surprises.
        `,
        benefits: [
          "No monthly fee or overdraft charges",
          "Transactions beyond balance are declined",
          "Fully digital, easy for group coordination",
          "Open with minimal deposit"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          While you’re spontaneous and generous, you still want a backup plan. 
          This saver draws a small amount into savings each debit, so you build 
          funds for bigger ideas or to help a friend—without complicated budgeting.
        `,
        benefits: [
          "Incremental savings each time you buy",
          "Pause or adjust if cash flow tightens",
          "Fee waived with checking link",
          "Real-time logs to keep it transparent"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Perfect if your group outings or personal adventures rack up charges— 
          earn up to 2% cash back, then either share it or reinvest it in future fun. 
          No annual fee, plus strong fraud monitoring for safe group usage.
        `,
        benefits: [
          "2% back (with Key checking) on all spending",
          "No annual fee, so no wasted money",
          "Lock/unlock card quickly if misplaced",
          "Simple cash redemption for next adventure"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          When a collective plan or personal must-do calls for larger funds, 
          this loan delivers without hidden fees. Fixed APR means stable 
          payments, satisfying your realistic caution, while you still get 
          the thrill of immediate funding for your group or personal pursuits.
        `,
        benefits: [
          "Stable monthly cost, no origination fee",
          "Fixed APR for calm repayment",
          "Terms up to 84 months, pick your pace",
          "All-digital application for quick approval"
        ]
      }
    ]
  },

  "Adventurer+Planner+Realist": {
    name: "Adventurer + Planner + Realist",
    description: `
      You combine an appetite for new experiences with methodical strategy and 
      level-headed caution. You crave excitement but want to ensure each step 
      stays financially secure and well-organized.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee supports your free-spirited ventures, while robust digital 
          tools keep your budgets precise. Early Pay delivers funds faster, matching 
          your adventurous side, yet the real-time alerts satisfy your cautious, 
          organized streak.
        `,
        benefits: [
          "No monthly fee, free up funds for new ideas",
          "Early deposit, perfect for spontaneous buys",
          "Bill pay & alerts to maintain structured spending",
          "Nationwide ATMs for on-the-go convenience"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You can indulge in impulsive purchases but still want a safety net. 
          This saver automatically sets aside a small amount whenever you use 
          your debit. It won’t disrupt your planning or caution—it quietly 
          strengthens your financial foundation.
        `,
        benefits: [
          "Auto-saving each debit without extra effort",
          "Pause or adjust contributions anytime",
          "No monthly fee with Key checking",
          "App-based logs for total visibility"
        ]
      },
      {
        name: "Key2More Rewards® Credit Card",
        pitch: `
          Whether it’s a big purchase or a series of smaller ones, 
          you earn 5x points on everything. That’s a thrill for 
          your adventurous side, while your planner/cautious side 
          appreciates no annual fee and easy redemption. 
          Spend responsibly, reap the rewards.
        `,
        benefits: [
          "5x points on all spending, no rotating categories",
          "Monthly bonus thresholds reward bigger outlays",
          "No annual fee, so no wasted funds",
          "Redeem points for travel, gift cards, or credit"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes you spot a major opportunity or need a chunk of cash for a 
          carefully forecasted project. This loan offers fixed-rate certainty 
          (for your realist/planner side) while funding your next bold step 
          (adventurer side). No origination fee keeps it straightforward.
        `,
        benefits: [
          "Fixed APR, stable monthly payments",
          "No origination fee for a cleaner budget",
          "Up to 84-month term to fit your plan",
          "Fast online process matches your efficiency"
        ]
      }
    ]
  },

  "Connector+Planner+Realist": {
    name: "Connector + Planner + Realist",
    description: `
      You love coordinating group goals but also insist on solid financial 
      foundations and transparent, dependable methods. You keep everyone 
      on track, merging structure and caution with a warm heart for community.
    `,
    products: [
      {
        name: "Key Safe Checking®",
        pitch: `
          You protect your finances from overdrafts while guiding group budgets. 
          This account automatically declines transactions that exceed your balance, 
          ensuring no surprise debt. Clear monthly fees keep it organized, so 
          your community efforts remain stable.
        `,
        benefits: [
          "No overdrafts—charges beyond balance are declined",
          "Straightforward monthly fee, no hidden extras",
          "Digital bill pay, easy deposit for group obligations",
          "Alerts for each transaction, perfect oversight"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          You’re mindful about building a reserve for both personal needs and communal 
          support. Each debit moves a bit into savings, ensuring you’re ready when 
          a friend or family member needs help. Fee waived with checking, so all 
          your contributions matter.
        `,
        benefits: [
          "Automatic micro-deposits per debit",
          "Pause or adjust as priorities shift",
          "No monthly fee with checking link",
          "Clear logs maintain financial transparency"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Earn up to 2% on every purchase—ideal if you pay for group events or help 
          loved ones frequently. No annual fee ensures your collective budget 
          isn’t eroded. Lock/unlock features protect shared spending from fraud 
          or misuse.
        `,
        benefits: [
          "2% cash back with active Key checking",
          "No annual fee, simple redemption options",
          "Real-time card controls for quick security",
          "Fraud alerts keep group transactions safe"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          Sometimes a big community project or family emergency requires immediate 
          funding. A fixed-rate loan ensures stable repayment, no origination fee 
          maximizes the actual support you can offer, and you can manage it all 
          online to stay organized without surprises.
        `,
        benefits: [
          "Fixed APR, easy-to-plan monthly bills",
          "No origination fee, funds go directly to needs",
          "12–84 month terms for flexible repayment",
          "All digital: quick application and tracking"
        ]
      }
    ]
  },

  "Adventurer+Connector+Planner+Realist": {
    name: "Adventurer + Connector + Planner + Realist",
    description: `
      You combine the daring impulse to seize fresh opportunities, a caring desire 
      to uplift others, a methodical approach to finances, and a pragmatic 
      appreciation for risk management. You want products that can handle 
      everything from bold jumps to group costs and long-term plans.
    `,
    products: [
      {
        name: "Key Smart Checking®",
        pitch: `
          No monthly fee suits your varied approach—sometimes spontaneous, 
          sometimes collaborative, always mindful of stability. Zelle® enables 
          instant group splits, while Early Pay helps when you’re eager 
          to jump on an opportunity.
        `,
        benefits: [
          "No monthly fees, letting funds flow freely",
          "Zelle® for group or friend reimbursements",
          "Early deposit for direct paychecks",
          "Robust mobile app, suiting quick or planned moves"
        ]
      },
      {
        name: "Key Active Saver®",
        pitch: `
          Whenever you buy something—be it a fun splurge or a practical expense—
          a small portion drops into savings. This covers your sense of 
          responsibility and future planning without stifling your adventurous spirit.
        `,
        benefits: [
          "Auto micro-deposits into savings per purchase",
          "No monthly fee if linked to Key checking",
          "Track each deposit in the app for clarity",
          "Pause or modify at will as goals change"
        ]
      },
      {
        name: "Key Cashback® Credit Card",
        pitch: `
          Grab 2% back on purchases (with Key checking), fueling the next adventure 
          or group event, all while incurring no annual fee. Fraud protection and 
          real-time alerts give you the caution needed to keep shared or personal 
          spending safe.
        `,
        benefits: [
          "2% on all buys, no rotating categories or fee",
          "Quick lock/unlock for spur-of-the-moment security",
          "Redeem cash back easily for new plans",
          "Digital controls to watch every transaction"
        ]
      },
      {
        name: "KeyBank Personal Loan",
        pitch: `
          For big leaps—community events, personal dreams, or methodical expansions—
          this loan grants a lump sum at a fixed APR. No origination fee ensures 
          the entire loan supports your goals. It’s flexible enough for any persona 
          facet you lean into at the moment.
        `,
        benefits: [
          "Fixed monthly payments, no hidden fees",
          "No origination fee, so full funds go to you",
          "Terms up to 84 months for comfortable pacing",
          "Online application, fast access to your plan"
        ]
      }
    ]
  }
};

// End of tieData.js
// All 11 tie personas, each with four product recommendations. The pitches focus on
// why each product suits the combined persona, and benefits omit explicit “key.com” references.
