import jsbookmark from "./js/bookmarks.js";

const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
const questionCards = document.querySelectorAll('[data-js="questionCard"]');

questionCards.forEach((card) => {
  const answerButton = card.querySelector('[data-js="answerbutton"]');
  const answer = card.querySelector('[data-js="answer"]');

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("showAnswer");
    if (answerButton.textContent.includes("Show Answer")) {
      answerButton.textContent = `Hide Answer`;
    } else {
      answerButton.textContent = `Show Answer`;
    }
  });
});

const formQuestions = document.querySelectorAll('[data-js="createForm"]');
console.log(formQuestions);

formQuestions.forEach((formQuestion) => {
  const inputField = formQuestion.querySelector('[data-js="textArea"]');
  const characterCounter = formQuestion.querySelector(
    '[data-js="totalCharacters"]'
  );

  inputField.addEventListener("input", () => {
    console.log("click");
    let value = textArea.value.length;
    document.querySelector('[data-js="totalCharacters"]').innerHTML =
      "Characters: " + value;
  });
});

//answerbuttons.forEach(jsbutton);
bookmarks.forEach(jsbookmark);

let reply_click = function () {
  let x;
  console.log(this.id);
  if (this.id == 0) {
    x = '[data-js="homepage"]';
    add();
    remove(x);
  } else if (this.id == 1) {
    x = '[data-js="bookmarkpage"]';
    add();
    remove(x);
  } else if (this.id == 2) {
    x = '[data-js="createpage"]';
    add();
    remove(x);
  } else if (this.id == 3) {
    x = '[data-js="profilepage"]';
    add();
    remove(x);
  }
};

function add() {
  document.querySelector('[data-js="homepage"]').classList.add("hidden");
  document.querySelector('[data-js="bookmarkpage"]').classList.add("hidden");
  document.querySelector('[data-js="createpage"]').classList.add("hidden");
  document.querySelector('[data-js="profilepage"]').classList.add("hidden");
}

function remove(x) {
  document.querySelector(x).classList.remove("hidden");
}

document.querySelector('[data-js="gotohome"]').onclick = reply_click;
document.querySelector('[data-js="gotobookmark"]').onclick = reply_click;
document.querySelector('[data-js="gotocreate"]').onclick = reply_click;
document.querySelector('[data-js="gotoprofile"]').onclick = reply_click;

const cards = [
  {
    title: "Lorem20",
    question: "",
  },
];

/* --------- Import Export function ausgelagert
bookmarks.forEach((bookmark) => {
  var change;
  bookmark.addEventListener("click", () => {
    if (change === true) {
      bookmark.innerHTML = `<path fill="currentColor" 
      d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />`;
      change = false;
    } else {
      bookmark.innerHTML = `<path fill="currentColor"
      d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"/>`;
      change = true;
    }
  });
});

answerbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    if (button.textContent === "Show Answer") {
      button.textContent = `Hide Answer`;
    } else {
      button.textContent = `Show Answer`;
    }
  });
});

*/

/* Alte Funktion -- muss noch ersetzt werden
function showAnswer() {
  document.getElementById("answer").style.display = "block";
}*/
