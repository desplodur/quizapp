function myFunction() {
  var element = document.getElementById("bookmark");
  element.classList.toggle("question__bookmark__style");
  element.classList.toggle("question__bookmark__style__saved");
  element.innerHTML =
    '<path fill="currentColor" d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />';
}

function showAnswer() {
  document.getElementById("answer").style.display = "block";
}
