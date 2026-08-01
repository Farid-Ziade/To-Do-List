import { project } from "../project/projectData.js";
import { projectBar } from "../project/projectView";
import { buttonClicked } from "../project/projectView";
import { buttonNumber } from "../project/projectView";
function card() {
  let bar = document.createElement("div");
  bar.className = "bar-div";
  let titleContainer = document.createElement("div");
  let headerContainer = document.createElement("div");
  let header = document.createElement("h1");
  let remaining = document.createElement("p");
  let button = document.createElement("button");
  button.textContent = `+ Add todo`;
  button.className = "add-button";
  titleContainer.className = "title-container";
  remaining.className = "remaining";
  header.className = "default";
  remaining.textContent = `${buttonNumber} remaining`;

  header.textContent = buttonClicked;
  headerContainer.appendChild(header);
  headerContainer.appendChild(remaining);
  titleContainer.appendChild(headerContainer);
  titleContainer.appendChild(button);
  bar.appendChild(titleContainer);
  let divContainer = document.createElement("div");
  divContainer.className = "div-container";
  bar.appendChild(divContainer);
  let todo = document.createElement("div");
  let todoP = document.createElement("p");
  todoP.className = "todo-p";
  let squareButton = document.createElement("button");
  squareButton.textContent = `Square`;
  let spanDate = document.createElement("span");
  todo.className = "todo-div";
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      for (let i = 0; i < buttonNumber; i++) {
        todoP.textContent = proj.todos[i].title;
        spanDate.textContent = proj.todos[i].date;
        todo.appendChild(squareButton);
        todo.appendChild(todoP);
        todo.appendChild(spanDate);
      }
      divContainer.appendChild(todo);
    }
  });
  console.log(project);
  console.log("updating");
  return bar;
}

function updating() {
  let bar = document.querySelector(".bar-div");
  let divContainer = document.querySelector(".div-container");
  let remaining = document.querySelector(".remaining");
  let update = document.querySelector(".default");

  let todo = document.createElement("div");
  let todoP = document.createElement("p");
  todoP.className = "todo-p";
  let squareButton = document.createElement("button");
  squareButton.textContent = `Square`;
  let spanDate = document.createElement("span");
  todo.className = "todo-div";
  let divSelector = document.querySelector(".todo-div");
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      for (let i = 0; i < buttonNumber; i++) {
        todoP.textContent = proj.todos[i].title;
        spanDate.textContent = proj.todos[i].date;
        todo.appendChild(squareButton);
        todo.appendChild(todoP);
        todo.appendChild(spanDate);
        divContainer.appendChild(todo);
      }
    }
  });
  if (divContainer.hasChildNodes()) {
    divContainer.removeChild(divSelector);
  }
  console.log(buttonClicked);
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      for (let i = 0; i < buttonNumber; i++) {
        todo.textContent = proj.todos[i].title;
      }
    }
  });

  update.textContent = buttonClicked;

  let todoDiv = document.querySelector(".todo-div");
  remaining.textContent = `${buttonNumber} remaining`;
  if (buttonNumber > 0) {
    for (let i = 0; i < buttonNumber; i++) {
      bar.appendChild(todo);
    }
    divContainer.appendChild(todo);
  }
}
export { card, updating };

///bug while clicking from updating to default
// also bug if you click twice on default the button and date dissapear
