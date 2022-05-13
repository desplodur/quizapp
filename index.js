import jsbookmark from "./js/bookmarks.js";
import jsbutton from "./js/buttons.js";

let bookmarks = document.querySelectorAll('[data-js="bookmark"]');
let answerbuttons = document.querySelectorAll('[data-js="answerbutton"]');
let footer = document.querySelectorAll('[data-js="footer"]');

answerbuttons.forEach(jsbutton);
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
  document
    .querySelector('[data-js="homepage"]')
    .classList.add("wrapper--displaynone");
  document
    .querySelector('[data-js="bookmarkpage"]')
    .classList.add("wrapper--displaynone");
  document
    .querySelector('[data-js="createpage"]')
    .classList.add("wrapper--displaynone");
  document
    .querySelector('[data-js="profilepage"]')
    .classList.add("wrapper--displaynone");
}

function remove(x) {
  document.querySelector(x).classList.remove("wrapper--displaynone");
}

document.querySelector('[data-js="gotohome"]').onclick = reply_click;
document.querySelector('[data-js="gotobookmark"]').onclick = reply_click;
document.querySelector('[data-js="gotocreate"]').onclick = reply_click;
document.querySelector('[data-js="gotoprofile"]').onclick = reply_click;

/*
footer.children[0].addEventListener("click", () => {
  alert("test");
});

footer.children[1].addEventListener("click", () => {
  alert("test1");
});

footer.children[2].addEventListener("click", () => {
  alert("test2");
});

footer.children[3].addEventListener("click", () => {
  alert("test3");
});

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
