// script.js

/****************************************************
 * GLOBAL STATE
 ****************************************************/
let currentQuestionIndex = 0;
let selectedAnswers = new Array(questions.length).fill([]);

/****************************************************
 * ON WINDOW LOAD
 ****************************************************/
window.onload = function() {
  displayQuestion(currentQuestionIndex);
  document.getElementById("results-btn").style.display = "none";
  document.getElementById("prev-btn").style.display = "none";
};

/****************************************************
 * DISPLAY A QUESTION
 ****************************************************/
function displayQuestion(index) {
  const questionEl = document.getElementById("question-text");
  const selectInstrEl = document.getElementById("select-instructions");
  const answersEl = document.getElementById("answers-container");
  const nextBtn = document.getElementById("next-btn");
  const resultsBtn = document.getElementById("results-btn");
  const prevBtn = document.getElementById("prev-btn");

  answersEl.innerHTML = "";

  const qObj = questions[index];
  questionEl.textContent = qObj.question;
  selectInstrEl.textContent = "(Select all that apply)";

  qObj.answers.forEach((ans, ansIdx) => {
    const card = document.createElement("div");
    card.className = "answer-card";

    card.onclick = () => {
      const cb = card.querySelector("input[type='checkbox']");
      cb.checked = !cb.checked;
      updateCheckedStyle(card, cb.checked);
      saveCurrentAnswer();
    };

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "answer-checkbox";
    checkbox.name = `question_${index}`;
    checkbox.value = ansIdx;
    checkbox.onclick = (ev) => {
      ev.stopPropagation();
      updateCheckedStyle(card, checkbox.checked);
      saveCurrentAnswer();
    };

    if (selectedAnswers[index].includes(ansIdx)) {
      checkbox.checked = true;
      card.classList.add("checked");
    }

    const labelSpan = document.createElement("span");
    labelSpan.textContent = ans.text;

    card.appendChild(checkbox);
    card.appendChild(labelSpan);
    answersEl.appendChild(card);
  });

  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  if (index < questions.length - 1) {
    nextBtn.style.display = "inline-block";
    resultsBtn.style.display = "none";
  } else {
    nextBtn.style.display = "none";
    resultsBtn.style.display = "inline-block";
  }

  updateQuestionTracker(index);
}

/****************************************************
 * updateCheckedStyle
 ****************************************************/
function updateCheckedStyle(cardEl, isChecked) {
  if (isChecked) {
    cardEl.classList.add("checked");
  } else {
    cardEl.classList.remove("checked");
  }
}

/****************************************************
 * UPDATE QUESTION TRACKER
 ****************************************************/
function updateQuestionTracker(index) {
  const trackerEl = document.getElementById("question-tracker");
  trackerEl.textContent = `${index + 1} of ${questions.length}`;
}

/****************************************************
 * GO TO NEXT QUESTION
 ****************************************************/
function goToNextQuestion() {
  saveCurrentAnswer();
  if (selectedAnswers[currentQuestionIndex].length === 0) {
    alert("Please select at least one answer before proceeding.");
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
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  }
}

/****************************************************
 * SAVE CURRENT ANSWER
 ****************************************************/
function saveCurrentAnswer() {
  const checkboxes = document.querySelectorAll(
    `input[name="question_${currentQuestionIndex}"]`
  );
  const chosen = [];
  checkboxes.forEach(cb => {
    if (cb.checked) chosen.push(parseInt(cb.value));
  });
  selectedAnswers[currentQuestionIndex] = chosen;
}

/****************************************************
 * SHOW RESULTS
 ****************************************************/
function showResults() {
  saveCurrentAnswer();
  if (selectedAnswers[currentQuestionIndex].length === 0) {
    alert("Please select at least one answer before seeing results.");
    return;
  }

  let chosenEmotions = [];
  for (let i = 0; i < questions.length; i++) {
    selectedAnswers[i].forEach(idx => {
      chosenEmotions.push(...questions[i].answers[idx].emotions);
    });
  }

  document.getElementById("quiz-section").style.display = "none";
  document.getElementById("results-section").classList.remove("hidden");

  const { sortedArray } = calculateCategoryScores(chosenEmotions);
  const topScore = sortedArray[0][1];
  const tiedCats = sortedArray
    .filter(([, score]) => score === topScore)
    .map(([cat]) => cat);

  displayFinalResults(tiedCats, sortedArray);
}

/****************************************************
 * CALCULATE CATEGORY SCORES
 ****************************************************/
function calculateCategoryScores(emotions) {
  const tally = {};
  emotions.forEach(em => {
    tally[em] = (tally[em] || 0) + 1;
  });

  const catNames = Object.keys(categoriesData);
  let maxScore = 0;
  const scores = {};

  catNames.forEach(cat => {
    let catScore = 0;
    categoriesData[cat].emotions.forEach(e => {
      if (tally[e]) catScore += tally[e];
    });
    scores[cat] = catScore;
    if (catScore > maxScore) {
      maxScore = catScore;
    }
  });

  let sortedArray = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { sortedArray };
}

/****************************************************
 * TIE or SINGLE
 ****************************************************/
function getCombinedNameAndDesc(tiedCats) {
  if (tiedCats.length === 1) {
    const cat = tiedCats[0];
    return {
      name: categoriesData[cat].name,
      article: categoriesData[cat].article,
      description: categoriesData[cat].description
    };
  }
  const sortedTied = [...tiedCats].sort((a, b) => a.localeCompare(b));
  const tieKey = sortedTied.join("+");
  if (tieData[tieKey]) {
    const comboName = tieData[tieKey].combinedName;
    const comboDesc = tieData[tieKey].description;
    const article = isVowel(comboName[0]) ? "an" : "a";
    return { name: comboName, article, description: comboDesc };
  }
  return {
    name: "Mixed",
    article: "a",
    description: "You have a unique blend of multiple categories."
  };
}

function isVowel(ch) {
  return ["A", "E", "I", "O", "U"].includes(ch.toUpperCase());
}

/****************************************************
 * DISPLAY FINAL RESULTS
 ****************************************************/
function displayFinalResults(tiedCats, sortedArray) {
  const { name, article, description } = getCombinedNameAndDesc(tiedCats);

  document.getElementById("intro-paragraph").textContent =
    "Finances touch our lives in personal ways and can often feel overwhelming. " +
    "At KeyBank, we celebrate the uniqueness of each individual’s approach to money, " +
    "so we can help you thrive in your financial life.";
  document.getElementById("category-name").textContent = name;
  document.getElementById("category-name").classList.add("red-text");

  document.getElementById("category-description").innerHTML = description;

  buildDistributionBars(sortedArray, tiedCats);

  const distributionContainer = document.getElementById("distribution-container");
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const topPct = Math.round((sortedArray[0][1] / total) * 100);

  const distributionTitle = document.createElement("h3");
  // ADD this block in its place:
  if (topPct === 100 && tiedCats.length === 1) {
    distributionTitle.innerHTML = `Your <span class="key-span">key</span> money signs:`;
  } else {
    distributionTitle.innerHTML = `
      While one money sign leads the way, others add depth to your financial personality!
    `;
  }

  // Also center it in the middle 50% of the page:
  distributionTitle.style.width = "50%";
  distributionTitle.style.margin = "0 auto";
  distributionTitle.style.textAlign = "center";

  distributionContainer.insertBefore(
    distributionTitle,
    document.getElementById("category-bars")
  );

  const plusCallout = document.createElement("p");
  plusCallout.className = "plus-callout-small";
  plusCallout.textContent = `Click the “+” icons to view more about each non-winning category.`;
  distributionContainer.appendChild(plusCallout);

  const topCatsForBullets = determineTopCats(sortedArray);
  const pctMap = buildPctMap(sortedArray);

  const finalStrengths = buildOutputItems(topCatsForBullets, pctMap, "strengths");
  const finalWeaknesses = buildOutputItems(topCatsForBullets, pctMap, "weaknesses");

  const excelList = document.getElementById("excel-list");
  excelList.innerHTML = "";
  finalStrengths.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = s;
    excelList.appendChild(li);
  });

  const watchoutList = document
    .getElementById("watchout-box")
    .querySelector("ul");
  watchoutList.innerHTML = "";
  finalWeaknesses.forEach(w => {
    const li = document.createElement("li");
    li.innerHTML = w;
    watchoutList.appendChild(li);
  });

  // Determine if single or tie scenario
  let productsArray;
  if (tiedCats.length === 1) {
    // Single category
    productsArray = categoriesData[tiedCats[0]].products;
    document.getElementById("products-title").textContent =
      categoriesData[tiedCats[0]].headingForProducts;
  } else {
    // Tied scenario - sort to get the tieKey
    const sortedTied = [...tiedCats].sort((a, b) => a.localeCompare(b));
    const tieKey = sortedTied.join("+");
    if (tieData[tieKey]) {
      productsArray = tieData[tieKey].products;
      document.getElementById("products-title").textContent =
        "A Hybrid Approach to Your Financial Life";
    } else {
      productsArray = [];
      document.getElementById("products-title").textContent =
        "A Mixed Approach to Your Financial Life";
    }
  }

  const productContainer = document.getElementById("product-recommendations");
  productContainer.innerHTML = "";

  productsArray.forEach(prod => {
    // Create the overall card container
    const card = document.createElement("div");
    card.className = "product-card";

    // 1) Top header (10%)
    const headerDiv = document.createElement("div");
    headerDiv.className = "product-header";

    const headerTitle = document.createElement("h5");
    headerTitle.textContent = prod.name;
    headerDiv.appendChild(headerTitle);

    // 2) Content area (90%) with three columns
    const contentDiv = document.createElement("div");
    contentDiv.className = "product-content";

    // Left column (25%): blank or for an image
    const leftDiv = document.createElement("div");
    leftDiv.className = "product-left";

    // NEW: Derive which image to show based on product name
    let imageSrc = "";
    const lowerName = prod.name.toLowerCase();

    if (lowerName.includes("checking")) {
      imageSrc = "images/checking.png";
    } else if (lowerName.includes("saver") || lowerName.includes("savings")) {
      imageSrc = "images/savings.png";
    } else if (
      lowerName.includes("credit") ||
      lowerName.includes("latitude") ||
      lowerName.includes("rewards")
    ) {
      imageSrc = "images/creditcard.png";
    } else if (lowerName.includes("loan")) {
      imageSrc = "images/loans.png";
    }

    // If we found a match, create an <img> in the left column
    if (imageSrc) {
      const productImage = document.createElement("img");
      productImage.src = imageSrc;
      productImage.alt = prod.name;
      productImage.className = "product-image";
      leftDiv.appendChild(productImage);
    }

    const middleDiv = document.createElement("div");
    middleDiv.className = "product-middle";

    const pitchP = document.createElement("p");
    pitchP.textContent = prod.pitch;
    middleDiv.appendChild(pitchP);

    const button = document.createElement("button");
    button.className = "product-btn";
    button.textContent = "Learn More";
    middleDiv.appendChild(button);

    // Right column (25%): bullet points
    const rightDiv = document.createElement("div");
    rightDiv.className = "product-right";

    const benefitsUl = document.createElement("ul");
    prod.benefits.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      benefitsUl.appendChild(li);
    });
    rightDiv.appendChild(benefitsUl);

    // Put columns together
    contentDiv.appendChild(leftDiv);
    contentDiv.appendChild(middleDiv);
    contentDiv.appendChild(rightDiv);

    // Finally, append the header and content to the card
    card.appendChild(headerDiv);
    card.appendChild(contentDiv);

    // And add the card to the container
    productContainer.appendChild(card);
  });
}

/****************************************************
 * BUILD DISTRIBUTION BARS
 ****************************************************/
function buildDistributionBars(sortedArray, tiedCats) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const catBarContainer = document.getElementById("category-bars");
  catBarContainer.innerHTML = "";

  sortedArray.forEach(([cat, score]) => {
    const barRow = document.createElement("div");
    barRow.className = "category-bar";

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = cat.toUpperCase();

    let pct = Math.round((score / total) * 100);

    if (!tiedCats.includes(cat)) {
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
    fill.style.width = pct + "%";

    const barPercent = document.createElement("div");
    barPercent.className = "bar-percent";
    barPercent.textContent = pct + "%";

    barBg.appendChild(fill);
    barRow.appendChild(label);
    barRow.appendChild(barBg);
    barRow.appendChild(barPercent);

    catBarContainer.appendChild(barRow);

    if (!tiedCats.includes(cat)) {
      const shortBox = document.createElement("div");
      shortBox.id = `short-${cat}`;
      shortBox.className = "short-summary";
      shortBox.textContent =
        categoriesData[cat]?.shortDescription?.trim() || "";
      catBarContainer.appendChild(shortBox);
    }
  });
}

/****************************************************
 * DETERMINE TOP CATS UNTIL >= 80
 ****************************************************/
function determineTopCats(sortedArray) {
  const total = sortedArray.reduce((acc, [_, score]) => acc + score, 0) || 1;

  const topCatScore = sortedArray[0][1];
  if ((topCatScore / total) * 100 >= 80) {
    return [sortedArray[0][0]];
  }

  const allTied =
    sortedArray.length === 4 &&
    sortedArray[0][1] > 0 &&
    sortedArray.every(([, s]) => s === sortedArray[0][1]);

  if (allTied) {
    return sortedArray.map(([cat]) => cat);
  }

  let runningPct = 0;
  let result = [];
  for (let i = 0; i < sortedArray.length; i++) {
    const [cat, score] = sortedArray[i];
    runningPct += (score / total) * 100;
    result.push(cat);
    if (runningPct >= 80) break;
  }
  if (result.length === 4) {
    result.pop();
  }
  return result;
}

/****************************************************
 * BUILD PCT MAP
 ****************************************************/
function buildPctMap(sortedArray) {
  const total = sortedArray.reduce((acc, [_, val]) => acc + val, 0) || 1;
  const map = {};
  sortedArray.forEach(([cat, score]) => {
    const pct = Math.round((score / total) * 100);
    map[cat] = pct;
  });
  return map;
}

/****************************************************
 * BUILD OUTPUT (strengths or weaknesses)
 ****************************************************/
function buildOutputItems(topCats, pctMap, keyName) {
  // Highest score among topCats
  const topCategoryScore = pctMap[topCats[0]];
  const len = topCats.length;

  if (len === 4) {
    // Each of the 4 categories gets 1 bullet (arr[0])
    return topCats.map(cat => {
      const arr = categoriesData[cat][keyName];
      return craftLineNew(
        cat,
        pctMap[cat] === topCategoryScore,
        arr[0]
      );
    });
  } else if (len === 3) {
    // Each of the 3 categories gets 1 bullet
    return topCats.map(cat => {
      const arr = categoriesData[cat][keyName];
      return craftLineNew(
        cat,
        pctMap[cat] === topCategoryScore,
        arr[0]
      );
    });
  } else if (len === 2) {
    // For 2 categories, we give cat1 two bullets, cat2 one bullet
    const [cat1, cat2] = topCats;
    const arr1 = categoriesData[cat1][keyName];
    const arr2 = categoriesData[cat2][keyName];

    return [
      craftLineNew(cat1, pctMap[cat1] === topCategoryScore, arr1[0]),
      craftLineNew(cat1, pctMap[cat1] === topCategoryScore, arr1[1]),
      craftLineNew(cat2, pctMap[cat2] === topCategoryScore, arr2[0])
    ];
  } else {
    // Single category => 3 bullets
    const cat = topCats[0];
    const arr = categoriesData[cat][keyName];

    // If there's only one topCat, it's automatically "dominant"
    return [
      craftLineNew(cat, true, arr[0]),
      craftLineNew(cat, true, arr[1]),
      craftLineNew(cat, true, arr[2])
    ];
  }
}

/****************************************************
 * TEMPLATES
 ****************************************************/
/****************************************************
 * NEW ARRAYS & FUNCTION for Strength/Weakness bullets
 ****************************************************/
const dominantOpeners = [
  "It looks like you strongly favor [cat]",
  "Since you rank high in [cat]",
  "You display a pronounced [cat] streak",
  "You're mainly leaning [cat]",
  "It's clear you're heavily oriented toward [cat]",
  "A significant part of you is [cat]",
  "You've shown a strong affinity for [cat]",
  "You definitely resonate with [cat]",
  "A big portion of you identifies with [cat]"
];

const secondaryOpeners = [
  "You also carry a bit of [cat]",
  "There's a subtle [cat] influence in you",
  "You do have some [cat] traits",
  "You're partly [cat]",
  "There's a little [cat] side to you",
  "You still show hints of [cat]",
  "A touch of [cat] shines through",
  "You also lean slightly toward [cat]",
  "As a partial [cat]"
];

/**
 * Removes any leading phrase like “Because you’re a [cat], ...” up to the comma,
 * if that comma appears within the first ~25 characters.
 */
function stripLeadingClause(text) {
  const idx = text.indexOf(",");
  if (idx !== -1 && idx < 25) {
    text = text.slice(idx + 1).trim();
  }
  if (text.length > 0) {
    return text[0].toUpperCase() + text.slice(1);
  }
  return text;
}

/**
 * craftLineNew
 * @param {string} cat - the category name
 * @param {boolean} isDominant - true if this cat is tied for highest score
 * @param {string} originalLine - the full strength/weakness phrase from categoriesData
 * @returns {string} the revised bullet text
 */
let newBulletIndex = 0;
function craftLineNew(cat, isDominant, originalLine) {
  // 1) Choose an opener from the arrays
  const openerArray = isDominant ? dominantOpeners : secondaryOpeners;
  const opener = openerArray[newBulletIndex % openerArray.length];
  newBulletIndex++;

  // 2) Strip out "Because you’re a [cat]," from the original line if present
  const remainder = stripLeadingClause(originalLine);

  // 3) Replace [cat] placeholder in the opener
  const finalOpener = opener.replace("[cat]", cat);

  // 4) Return with an em dash in between
  // e.g. “It looks like you strongly favor Adventurer—Overthinking can hold you back...”
  return `<span class="opener-text">${finalOpener}</span>—${remainder}`;
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

/****************************************************
 * AUTO COMPLETE QUIZ BUTTON (For Testing Only)
 * This code automatically selects the first answer for every question
 * and then displays the results page when the "Auto Complete Quiz" button is clicked.
 * Remove this block when you no longer need the testing functionality.
 ****************************************************/
document.getElementById("auto-complete-btn").addEventListener("click", function() {
  // Auto-select the first answer for each question
  for (let i = 0; i < questions.length; i++) {
    selectedAnswers[i] = [0];
  }
  
  // Set currentQuestionIndex to the last question
  currentQuestionIndex = questions.length - 1;
  
  // Update the display (optional) and immediately show results
  displayQuestion(currentQuestionIndex);
  showResults();
});
