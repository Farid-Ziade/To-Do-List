import { project } from "../project/projectData.js";
import { projectBar } from "../project/projectView";
import { buttonClicked } from "../project/projectView";
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
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      remaining.textContent = `${proj.todos.length} remaining`;
    }
  });
  header.textContent = buttonClicked;
  headerContainer.appendChild(header);
  headerContainer.appendChild(remaining);
  titleContainer.appendChild(headerContainer);
  titleContainer.appendChild(button);
  bar.appendChild(titleContainer);
  let divContainer = document.createElement("div");
  divContainer.className = "div-container";
  bar.appendChild(divContainer);

  return bar;
}
function updating() {
  let bar = document.querySelector(".bar-div");
  let divContainer = document.querySelector(".div-container");
  let remaining = document.querySelector(".remaining");
  let update = document.querySelector(".default");
  let div = document.createElement("div");
  div.className = "todo-div";

  div.textContent = "hello world";
  if (update) {
    update.textContent = buttonClicked;
    project.forEach((proj) => {
      let todoDiv = document.querySelector(".todo-div");
      if (proj.name == buttonClicked) {
        remaining.textContent = `${proj.todos.length} remaining`;
        console.log(proj.todos.length);
        if (divContainer.hasChildNodes()) {
          for (let i = 0; i < proj.todos.length; i++) {
            bar.removeChild(div);
          }
        }
        ////// bug here while creating and removing divs
        for (let i = 0; i < proj.todos.length; i++) {
          bar.appendChild(div);
        }
      }
    });
  }
  console.log(project);
}
export { card, updating };
