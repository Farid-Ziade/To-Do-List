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
  bar.appendChild(titleContainer);
  ///////div container when first creating the card
  let divContainer = document.createElement("div");
  divContainer.className = "div-container";

  /////bug here if I am in another project name it doesnt add the add todo because it is pushing

  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      button.addEventListener("click", () => {
        console.log(proj.name);
        console.log(project);
        let newTitle = prompt("Todo Title?");
        if (!newTitle) return;
        proj.todos.push({
          title: newTitle,
          description: "",
          priority: "",
          date: "",
        });
        updating();
      });
      //////////// bug is above because the button is staying in the card section so it only sees the proj.name of default
      for (let i = 0; i < proj.todos.length; i++) {
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
  console.log("All good");
  document.querySelectorAll(".todo-div").forEach((el) => el.remove());
  document.querySelectorAll(".noTask").forEach((el) => el.remove());
  let bar = document.querySelector(".bar-div");
  let divContainer = document.querySelector(".div-container");
  let remaining = document.querySelector(".remaining");
  let update = document.querySelector(".default");
  let todoSelector = document.querySelector(".todo-div");
  let todoRemaining = document.querySelector(".todo-remaining");
  let button = document.querySelector(".add-button");
  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      // console.log(proj);
      // console.log(proj.name);
      if (proj.todos.length == 0) {
        remaining.textContent = `${proj.todos.length} remaining`;
        // button.addEventListener("click", () => {
        //   console.log(proj.name);
        //   console.log(project);
        //   let newTitle = prompt("Todo Title?");
        //   if (!newTitle) return;
        //   proj.todos.push({
        //     title: newTitle,
        //     description: "",
        //     priority: "",
        //     date: "",
        //   });
        // });
        let noTask = document.createElement("p");
        noTask.className = `noTask`;
        noTask.textContent = `No task available, try adding one`;
        divContainer.appendChild(noTask);
      } else {
        for (let i = 0; i < proj.todos.length; i++) {
          remaining.textContent = `${proj.todos.length} remaining`;
          todoRemaining.textContent = proj.todos.length;
          let todo = document.createElement("div");
          let todoP = document.createElement("p");
          todoP.className = "todo-p";
          let squareButton = document.createElement("button");
          squareButton.textContent = `Square`;
          let spanDate = document.createElement("span");
          todo.className = "todo-div";
          todoP.textContent = proj.todos[i].title;
          if (proj.todos[i].date == "") {
            spanDate.textContent = `No date`;
          } else {
            spanDate.textContent = proj.todos[i].date;
          }
          todo.appendChild(squareButton);
          todo.appendChild(todoP);
          todo.appendChild(spanDate);
          divContainer.appendChild(todo);
        }
      }
    }
  });

  update.textContent = buttonClicked;
  bar.appendChild(divContainer);
}
export { card, updating };
