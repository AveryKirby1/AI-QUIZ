/****************************************************
 * QUIZ DATA (SAME QUESTIONS & CATEGORIES)
 * For brevity, we keep them as previously updated,
 * with each category having exactly 10 emotions
 ****************************************************/

// --- PASTED EXACT SAME DATA AS PREVIOUS EXAMPLE ---

const questions = [ /* ... same content ... */ ];
const categoriesData = { /* ... same content ... */ };

/****************************************************
 * GLOBAL STATE
 ****************************************************/
let currentQuestionIndex = 0;

// Array to store which answer was selected for each question
// (e.g., selectedAnswers[0] = 2 means question 1 had answer index 2 chosen)
let selectedAnswers = new Array(questions.length).fill(null);

/****************************************************
 * ON WINDOW LOAD
 ****************************************************/
window.onload = function() {
  displayQuestion(currentQuestionIndex);

  // Hide 'See Results' button initially
  document.getElementById("results-btn").style.display = "none";

  // Hide 'Previous' button initially if we're on question 0
  document.getElementById("prev-btn").style.display = "none";
};

/****************************************************
 * DISPLAY A QUESTION
 ****************************************************/
function displayQuestion(index) {
  const questionEl = document.getElementById("question-text");
  const answersEl = document.getElementById("answers-container");
  const nextBtn = document.getElementById("next-btn");
  const resultsBtn = document.getElementById("results-btn");
  const prevBtn = document.getElementById("prev-btn");

  // Clear previous answers
  answersEl.innerHTML = "";

  const qObj = questions[index];
  questionEl.textContent = qObj.question;

  // Create radio options
  qObj.answers.forEach((ans, ansIdx) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `question_${index}`;
    radio.value = ansIdx;

    // If user had previously selected an answer for this question,
    // re-check it to reflect saved choice
    if (selectedAnswers[index] === ansIdx) {
      radio.checked = true;
    }

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + ans.text));
    answersEl.appendChild(label);
  });

  // Show or hide the 'Previous' button
  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  // If not on the last question, show Next; hide Results
  if (index < questions.length - 1) {
    nextBtn.style.display = "inline-block";
    resultsBtn.style.display = "none";
  } else {
    // On the last question, hide Next; show Results
    nextBtn.style.display = "none";
    resultsBtn.style.display = "inline-block";
  }

  // Update question tracker: e.g., "1 of 10"
  updateQuestionTracker(index);
}

/****************************************************
 * UPDATE QUESTION TRACKER
 ****************************************************/
function updateQuestionTracker(index) {
  const trackerEl = document.getElementById("question-tracker");
  const totalQ = questions.length;
  trackerEl.textContent = `${index + 1} of ${totalQ}`;
}

/****************************************************
 * GO TO NEXT QUESTION
 ****************************************************/
function goToNextQuestion() {
  saveCurrentAnswer();

  // Move forward only if an answer is chosen
  if (selectedAnswers[currentQuestionIndex] === null) {
    alert("Please select an answer before proceeding.");
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

  // Move backward if not already at index 0
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
}

/****************************************************
 * SAVE CURRENT ANSWER
 * (Stores the user's selection for the current Q)
 ****************************************************/
function saveCurrentAnswer() {
  // Check if a radio option is selected
  const selectedOption = document.querySelector(
    `input[name="question_${currentQuestionIndex}"]:checked`
  );

  if (selectedOption) {
    // Save the index of the chosen answer
    selectedAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
  }
}

/****************************************************
 * SHOW RESULTS
 ****************************************************/
function showResults() {
  // Make sure we save the final question's selection
  saveCurrentAnswer();

  // Check if user answered last question
  if (selectedAnswers[currentQuestionIndex] === null) {
    alert("Please select an answer before seeing results.");
    return;
  }

  // Build the user's chosenEmotions array from final selections
  let chosenEmotions = [];
  for (let i = 0; i < questions.length; i++) {
    const ansIndex = selectedAnswers[i];
    if (ansIndex !== null) {
      chosenEmotions.push(...questions[i].answers[ansIndex].emotions);
    }
  }

  // Hide quiz, show results section
  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  // Calculate final category & display
  const { sortedArray, winner } = calculateCategoryScores(chosenEmotions);
  displayFinalResults(winner, sortedArray);
}

/****************************************************
 * CALCULATE & SORT SCORES
 ****************************************************/
function calculateCategoryScores(emotions) {
  // Tally how many times each emotion appears
  const tally = {};
  emotions.forEach(em => {
    tally[em] = (tally[em] || 0) + 1;
  });

  // For each category, sum up the relevant emotions
  const catNames = Object.keys(categoriesData);
  const scores = {};
  let maxScore = 0;

  catNames.forEach(cat => {
    let catScore = 0;
    categoriesData[cat].emotions.forEach(e => {
      if (tally[e]) {
        catScore += tally[e];
      }
    });
    scores[cat] = catScore;
    if (catScore > maxScore) {
      maxScore = catScore;
    }
  });

  // Tie-break
  const winners = catNames.filter(cat => scores[cat] === maxScore);
  let winner = winners.length > 1
    ? winners[Math.floor(Math.random() * winners.length)]
    : winners[0];

  // Sort high → low
  const sortedArray = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { sortedArray, winner };
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(winner, sortedArray) {
  const catData = categoriesData[winner];

  // Title
  const resultsTitle = document.getElementById("results-title");
  resultsTitle.textContent = `you are ${catData.article} `;

  // Category name
  const catNameEl = document.getElementById("category-name");
  catNameEl.textContent = catData.name;

  // Description
  const catDescEl = document.getElementById("category-description");
  catDescEl.innerHTML = catData.description;

  // Distribution bars
  buildDistributionBars(sortedArray, winner);

  // Where you excel / watch out for
  const excelList = document.getElementById("excel-list");
  const watchoutList = document.getElementById("watchout-list");
  excelList.innerHTML = "";
  watchoutList.innerHTML = "";

  catData.excel.forEach(pt => {
    const li = document.createElement("li");
    li.textContent = pt;
    excelList.appendChild(li);
  });

  catData.watchOut.forEach(pt => {
    const li = document.createElement("li");
    li.textContent = pt;
    watchoutList.appendChild(li);
  });

  // Product recommendations
  const productsTitle = document.getElementById("products-title");
  productsTitle.textContent = catData.headingForProducts;

  const productContainer = document.getElementById("product-recommendations");
  productContainer.innerHTML = "";
  catData.products.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";

    const title = document.createElement("h5");
    title.textContent = prod.split("–")[0].trim();

    const detail = document.createElement("p");
    detail.textContent = prod.split("–")[1]
      ? prod.split("–")[1].trim()
      : "";

    const button = document.createElement("button");
    button.className = "product-btn";
    button.textContent = "Learn More";

    card.appendChild(title);
    card.appendChild(detail);
    card.appendChild(button);
    productContainer.appendChild(card);
  });
}

/****************************************************
 * BUILD DISTRIBUTION BARS
 ****************************************************/
function buildDistributionBars(sortedArray, winner) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0);
  const catBarContainer = document.getElementById("category-bars");
  catBarContainer.innerHTML = "";

  sortedArray.forEach(([cat, score]) => {
    const barRow = document.createElement("div");
    barRow.className = "category-bar";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = cat.toUpperCase();

    if (cat !== winner) {
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

    let pct = total === 0 ? 0 : Math.round((score / total) * 100);
    fill.style.width = pct + "%";

    const barPercent = document.createElement("div");
    barPercent.className = "bar-percent";
    barPercent.textContent = pct + "%";

    barBg.appendChild(fill);
    barRow.appendChild(label);
    barRow.appendChild(barBg);
    barRow.appendChild(barPercent);

    catBarContainer.appendChild(barRow);

    // Short summary for non-winners
    if (cat !== winner) {
      const shortBox = document.createElement("div");
      shortBox.id = `short-${cat}`;
      shortBox.className = "short-summary";
      shortBox.textContent = categoriesData[cat].shortDescription;
      catBarContainer.appendChild(shortBox);
    }
  });
}

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
