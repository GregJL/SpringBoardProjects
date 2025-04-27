/*
=== Terminology for the API ===

Clue: The name given to the structure that contains the question and the answer together.
Category: The name given to the structure containing clues on the same topic.
 */

/*
=== Data Structure of Request the API Endpoints ===

/categories:
[
  {
    "id": <category ID>,
    "title": <category name>,
    "clues_count": <number of clues in the category where each clue has a question, an answer, and a value>
  },
  ... more categories
]

/category:
{
  "id": <category ID>,
  "title": <category name>,
  "clues_count": <number of clues in the category>,
  "clues": [
    {
      "id": <clue ID>,
      "answer": <answer to the question>,
      "question": <question>,
      "value": <value of the question (be careful not all questions have values) (Hint: you can assign your own value such as 200 or skip)>,
      ... more properties
    },
    ... more clues
  ]
}
 */

const API_URL = "https://rithm-jeopardy.herokuapp.com/api/"; // The URL of the API.
const NUMBER_OF_CATEGORIES = 6; // The number of categories you will be fetching. You can change this number.
const NUMBER_OF_CLUES_PER_CATEGORY = 5; // The number of clues you will be displaying per category. You can change this number.

let categories = []; // The categories with clues fetched from the API.
/*
[
  {
    "id": <category ID>,
    "title": <category name>,
    "clues": [
      {
        "id": <clue ID>,
        "value": <value (e.g. $200)>,
        "question": <question>,
        "answer": <answer>
      },
      ... more clues
    ]
  },
  ... more categories
]
 */

let activeClue = null; // Currently selected clue data.
let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, 
// and displaying the answer to the question.
/*
0: Empty. Waiting to be filled. If a clue is clicked, it shows the question (transits to 1).
1: Showing a question. If the question is clicked, it shows the answer (transits to 2).
2: Showing an answer. If the answer is clicked, it empties (transits back to 0).
 */

let isPlayButtonClickable = true; // Only clickable when the game haven't started yet or ended. Prevents the button to be clicked during the game.

$("#play").on("click", handleClickOfPlay);

/**
 * Manages the behavior of the play button (start or restart) when clicked.
 * Sets up the game.
 *
 * Hints:
 * - Sets up the game when the play button is clickable.
 */
function handleClickOfPlay ()
{
  if (isPlayButtonClickable)
  {
    isPlayButtonClickable = false;
    $("#play").text("Loading...");
    setupTheGame();
    $("#play").text("Game in Progress!");
    
  }
  else
  {
    console.log("The game is already in progress!");
  }
}

/**
 * Sets up the game.
 *
 * 1. Cleans the game since the user can be restarting the game.
 * 2. Get category IDs
 * 3. For each category ID, get the category with clues.
 * 4. Fill the HTML table with the game data.
 *
 * Hints:
 * - The game play is managed via events.
 */
async function setupTheGame ()
{
  // shows the spinner while setting up the game
  $("#spinner").removeClass("disabled");
  
  // reset the DOM (table, button text, the end text)
  $("#active-clue").html(null);


  // fetch the game data (categories with clues)
  const retrievedCategories = await axios.get(`${API_URL}categories?count=100`)
  const cats = getCategories(retrievedCategories);
 
  for (cat of cats)
  {
    const resCategory = await axios.get(`${API_URL}category?id=${cat.id}`);
    categories.push(getCategoryData(resCategory));
  }

  // hide the spinner
  $("#spinner").addClass("disabled");
  // fill the table
  fillTable(categories);
  $(".clue").on("click", handleClickOfClue);

}

/**
 * Gets as many category IDs as in the `NUMBER_OF_CATEGORIES` constant.
 * Returns an array of numbers where each number is a category ID.
 *
 * Hints:
 * - Use /categories endpoint of the API.
 * - Request as many categories as possible, such as 100. Randomly pick as many categories as given in the `NUMBER_OF_CATEGORIES` constant, if the number of clues in the category is enough (<= `NUMBER_OF_CLUES` constant).
 */
function getCategories (retrievedCategories)
{
  const categories = retrievedCategories.data;
  const categoryClueCounts = categories.map(category => category.clues_count);
  const filteredCategories = categories.filter((category, index) => {
    // Check if the category has enough clues
    return categoryClueCounts[index] >= NUMBER_OF_CLUES_PER_CATEGORY;
  });
  const randomCategories = [];
  while (randomCategories.length < NUMBER_OF_CATEGORIES) {
    const randomIndex = Math.floor(Math.random() * filteredCategories.length);
    const randomCategory = filteredCategories[randomIndex];
    if (!randomCategories.includes(randomCategory)) {
      randomCategories.push(randomCategory);
    }
  }
  return randomCategories;
}

/**
 * Gets category with as many clues as given in the `NUMBER_OF_CLUES` constant.
 * Returns the below data structure:
 *  {
 *    "id": <category ID>
 *    "title": <category name>
 *    "clues": [
 *      {
 *        "id": <clue ID>,
 *        "value": <value of the question>,
 *        "question": <question>,
 *        "answer": <answer to the question>
 *      },
 *      ... more clues
 *    ]
 *  }
 *
 * Hints:
 * - You need to call this function for each category ID returned from the `getCategoryIds` function.
 * - Use /category endpoint of the API.
 * - In the API, not all clues have a value. You can assign your own value or skip that clue.
 */
function getCategoryData (categoryId)
{
  const category = categoryId.data;
  const clues = category.clues.slice(0, NUMBER_OF_CLUES_PER_CATEGORY).map(clue => {
    return {
      id: clue.id,
      value: clue.value || 200,
      question: clue.question,
      answer: clue.answer
    }
  });
  const categoryWithClues = {
    id: categoryId.data.id,
    title: categoryId.data.title, 
    clues: clues
  };

  return categoryWithClues;
}

/**
 * Fills the HTML table using category data.
 *
 * Hints:
 * - You need to call this function using an array of categories where each element comes from the `getCategoryData` function.
 * - Table head (thead) has a row (#categories).
 *   For each category, you should create a cell element (th) and append that to it.
 * - Table body (tbody) has a row (#clues).
 *   For each category, you should create a cell element (td) and append that to it.
 *   Besides, for each clue in a category, you should create a row element (tr) and append it to the corresponding previously created and appended cell element (td).
 * - To this row elements (tr) should add an event listener (handled by the `handleClickOfClue` function) and set their IDs with category and clue IDs. This will enable you to detect which clue is clicked.
 */
function fillTable(categories) {
  const tableHead = $("#categories");
  const tableBody = $("#clues");
  tableHead.empty(); // Clear previous content
  tableBody.empty(); // Clear previous content
  for (let i = 0; i < NUMBER_OF_CATEGORIES; i++) {
    const categoryTitle = document.createElement("th");
    categoryTitle.setAttribute("id", categories[i].id);
    categoryTitle.innerHTML = categories[i].title;
    $("#categories").append(categoryTitle);
  }
  for (let y = 0; y < NUMBER_OF_CLUES_PER_CATEGORY; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < NUMBER_OF_CATEGORIES; x++) {
      const category = categories[x];
      const clues = category.clues;
      const cell = document.createElement("td");
      const clue = clues[y];
      cell.innerHTML = `<div class=clue id=${category.id}-${clue.id}>${clue.value}</div>`;
      row.append(cell);
    }
    $("#clues").append(row);
  }
}


/**
 * Manages the behavior when a clue is clicked.
 * Displays the question if there is no active question.
 *
 * Hints:
 * - Control the behavior using the `activeClueMode` variable.
 * - Identify the category and clue IDs using the clicked element's ID.
 * - Remove the clicked clue from categories since each clue should be clickable only once. Don't forget to remove the category if all the clues are removed.
 * - Don't forget to update the `activeClueMode` variable.
 *
 */
function handleClickOfClue(event) {
  // todo find and remove the clue from the categories
  const clueElement = event.target;
  const clueId = clueElement.id.split("-")[1];
  const categoryId = clueElement.id.split("-")[0];
  const category = categories.find(cat => cat.id == categoryId);
  const clue = category.clues.find(clue => clue.id == clueId);
  if (activeClueMode === 0) {
    activeClueMode = 1;
    activeClue = clue;
    clueElement.classList.add("question");
    clueElement.innerHTML = clue.question;
    $("#active-clue").text(clue.question).attr("data-clue-element-id", clueElement.id).addClass("active-question");

    categories.forEach(cat => {
      cat.clues = cat.clues.filter(c => c.id.toString() !== clueId);

      if (cat.clues.length === 0) {
        $(`#${cat.id}`).html(null);
        categories = categories.filter(c => c.id.toString() !== categoryId);
      }
    });
  }
  else {
    return;
  }
}

$("#active-clue").on("click", handleClickOfActiveClue);

/**
 * Manages the behavior when a displayed question or answer is clicked.
 * Displays the answer if currently displaying a question.
 * Clears if currently displaying an answer.
 *
 * Hints:
 * - Control the behavior using the `activeClueMode` variable.
 * - After clearing, check the categories array to see if it is empty to decide to end the game.
 * - Don't forget to update the `activeClueMode` variable.
 */
function handleClickOfActiveClue (event)
{
  // todo after clear end the game when no clues are left
  const activeClueElement = document.getElementById("active-clue");
  const activeClueElementId = activeClueElement.getAttribute("data-clue-element-id");
  if (activeClueMode === 1)
  {
    activeClueMode = 2;
    activeClueElement.innerHTML = activeClue.answer;
    $("#" + activeClueElementId).html(activeClue.answer);

  }
  else if (activeClueMode === 2)
  {
    activeClueMode = 0;
    activeClueElement.innerHTML = "";
    activeClueElement.classList.remove("active-question");
    $("#" + activeClueElementId).html(null);
    activeClueElement.removeAttribute("data-clue-element-id");

    if (categories.length === 0)
    {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#categories").empty();
      $("#clues").empty();
      window.alert("Game Over! You have answered all the questions!");
    }
  }
}