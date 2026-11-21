const buttons = Array.from(
  document.querySelectorAll(".accordion")
);

buttons.forEach((button, index) => {
  const panel = document.getElementById(
    button.getAttribute("aria-controls")
  );

  button.addEventListener("click", () => {
    const willOpen =
      button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(willOpen));
    panel.hidden = !willOpen;
    button.classList.toggle("is-open", willOpen);
  });

  button.addEventListener("keydown", (event) => {
    let nextIndex;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % buttons.length;
        break;

      case "ArrowUp":
        nextIndex = (index - 1 + buttons.length) % buttons.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = buttons.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    buttons[nextIndex].focus();
    
  });
});