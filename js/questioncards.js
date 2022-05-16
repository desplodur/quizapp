export default function jsquestion() {
  let button = document.querySelector('[data-js="answerbutton"]');
  let answer = document.querySelector('[data-js="answer"]');

  button.addEventListener("click", () => {
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer";
      answer.classList.remove("showanser");
    } else {
      button.textContent = "Show Answer";
      answer.classList.add("showanswer");
    }
  });
}
