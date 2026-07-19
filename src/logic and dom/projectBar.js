function projectBar() {
  let bar = document.createElement("div");
  bar.className = "project-div";
  let header = document.createElement("h1");
  header.innerHTML = "Todo";

  let project = [
    { name: "Default", value: 0 },
    { name: "Work", value: 0 },
    { name: "Personal", value: 0 },
  ];
  bar.appendChild(header);
  let activeCircle = 0;
  project.forEach((btn, index) => {
    let button = document.createElement("button");
    let buttonPara = document.createElement("p");
    let buttonSpan = document.createElement("span");
    let circle = document.createElement("span");
    circle.className = "circle";
    button.className = "button";
    let nameText = document.createTextNode(btn.name);
    let valueText = document.createTextNode(btn.value);
    buttonPara.appendChild(circle);
    buttonPara.appendChild(nameText);
    buttonSpan.appendChild(valueText);
    button.appendChild(buttonPara);
    button.appendChild(buttonSpan);
    button.addEventListener("click", () => {
      if (activeCircle) {
        activeCircle.style.backgroundColor = "";
      }
      circle.style.backgroundColor = "dodgerblue";
      activeCircle = circle;
    });
    bar.appendChild(button);
    if (index === 0) {
      circle.style.backgroundColor = "dodgerblue";
      activeCircle = circle;
    }
  });

  return bar;
}
export { projectBar };
