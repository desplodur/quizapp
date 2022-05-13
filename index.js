import jsbookmark from "./js/bookmarks.js";
import jsbutton from "./js/buttons.js";

let bookmarks = document.querySelectorAll('[data-js="bookmark"]');
console.log(bookmarks);
let answerbuttons = document.querySelectorAll('[data-js="answerbutton"]');
console.log(answerbuttons);

answerbuttons.forEach(jsbutton);
bookmarks.forEach(jsbookmark);

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
