import { project } from "../project/projectData.js";
import { projectBar } from "../project/projectView";
import { buttonClicked } from "../project/projectView";
import { buttonNumber } from "../project/projectView";
function card() {
  //title of the card
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
  // console.log(project);
  bar.appendChild(titleContainer);
  ///////div container when first creating the card
  let divContainer = document.createElement("div");
  divContainer.className = "div-container";

  ////////bug here ///////////
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      button.addEventListener("click", () => {
        let newTitle = prompt("Todo Title?");
        if (!newTitle) return;
        proj.todos.push({ title: newTitle });
        console.log(proj.todos.length);
      });
    }
  });
  ////////////////////////////
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      console.log(proj.todos.length);

      for (let i = 0; i < buttonNumber; i++) {
        let todoDiv = document.createElement("div");
        let todoP = document.createElement("p");
        todoP.className = "todo-p";
        let squareButton = document.createElement("button");
        squareButton.textContent = `Square`;
        let spanDate = document.createElement("span");
        todoDiv.className = "todo-div";
        todoP.textContent = proj.todos[i].title;
        spanDate.textContent = proj.todos[i].date;
        todoDiv.appendChild(squareButton);
        todoDiv.appendChild(todoP);
        todoDiv.appendChild(spanDate);
        divContainer.appendChild(todoDiv);
      }
    }
  });
  bar.appendChild(divContainer);

  return bar;
}

function updating() {
  console.log(project);
  document.querySelectorAll(".todo-div").forEach((el) => el.remove());
  document.querySelectorAll(".noTask").forEach((el) => el.remove());
  let bar = document.querySelector(".bar-div");
  let divContainer = document.querySelector(".div-container");
  let remaining = document.querySelector(".remaining");
  let update = document.querySelector(".default");
  let todoSelector = document.querySelector(".todo-div");
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      if (buttonNumber == 0) {
        let noTask = document.createElement("p");
        noTask.className = `noTask`;
        noTask.textContent = `No task available, try adding one`;
        divContainer.appendChild(noTask);
      } else {
        for (let i = 0; i < buttonNumber; i++) {
          let todo = document.createElement("div");
          let todoP = document.createElement("p");
          todoP.className = "todo-p";
          let squareButton = document.createElement("button");
          squareButton.textContent = `Square`;
          let spanDate = document.createElement("span");
          todo.className = "todo-div";
          todoP.textContent = proj.todos[i].title;
          spanDate.textContent = proj.todos[i].date;
          todo.appendChild(squareButton);
          todo.appendChild(todoP);
          todo.appendChild(spanDate);
          divContainer.appendChild(todo);
        }
      }
    }
  });

  update.textContent = buttonClicked;
  remaining.textContent = `${buttonNumber} remaining`;
  bar.appendChild(divContainer);
}
export { card, updating };
