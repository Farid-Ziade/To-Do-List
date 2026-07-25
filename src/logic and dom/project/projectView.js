import { project } from "./projectData.js";
import { card } from "../todo/todoView.js";
let buttonClicked = "";
let update = document.querySelector(".default");
function projectBar() {
  let bar = document.createElement("div");
  bar.className = "project-div";
  let header = document.createElement("h1");
  header.textContent = "Todo";

  bar.appendChild(header);
  let activeCircle = 0;

  function createProjectButton(proj) {
    let button = document.createElement("button");
    let buttonPara = document.createElement("p");
    let buttonSpan = document.createElement("span");
    let circle = document.createElement("span");
    circle.className = "circle";
    button.className = "button";
    let nameText = document.createTextNode(proj.name);
    let valueText = document.createTextNode(proj.todos.length);
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
      buttonClicked = nameText.textContent;

      console.log(card(buttonClicked));
    });
    if (activeCircle === 0) {
      circle.style.backgroundColor = "dodgerblue";
      activeCircle = circle;
      buttonClicked = nameText.textContent;
      console.log(buttonClicked);
    }
    return button;
  }

  project.forEach((proj) => {
    bar.appendChild(createProjectButton(proj));
  });

  let button = document.createElement("button");
  button.innerHTML = `<p><span>+</span> New Project</p>`;
  button.className = "button";
  button.addEventListener("click", () => {
    let name = prompt("Project name ?");
    if (!name) return;
    let newProj = { name, todos: [] };
    project.push(newProj);
    bar.insertBefore(createProjectButton(newProj), button);
  });
  bar.appendChild(button);
  return bar;
}
export { projectBar, buttonClicked };
