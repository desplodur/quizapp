export default function jsbutton(button) {
  button.addEventListener("click", () => {
    //.includes
    if (button.textContent.includes("Show Answer")) {
      button.textContent = `Hide Answer`;
    } else {
      button.textContent = `Show Answer`;
    }
  });
}
