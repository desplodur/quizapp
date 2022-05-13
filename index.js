/*function myFunction() {
  var element = document.getElementById("bookmark");
  element.classList.toggle("question__bookmark__style");
  element.classList.toggle("question__bookmark__style__saved");
  element.innerHTML =
    '<path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />';
}*/
let bookmarks = document.querySelectorAll('[data-js="bookmark"]');
console.log(bookmarks);
let answerbuttons = document.querySelectorAll('[data-js="answerbutton"]');
console.log(answerbuttons);

/*
let answers = document.querySelectorAll('[data-js="answer"]');

answerbuttons.forEach((button, index) => {
  console.log(index);

  button.addEventListener("click", () => {
    let answer = answers[index];
    answer.classList.toggle("showanswer");
  });
});
*/
answerbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Show Answer") {
      button.textContent = `Hide Answer`;
    } else {
      button.textContent = `Show Answer`;
    }
  });
});

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
/*
function showAnswer() {
  document.getElementById("answer").style.display = "block";
}*/
