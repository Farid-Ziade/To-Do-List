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

  button.addEventListener("click", () => {
    let newTitle = prompt("new Todo Title?");
    if (!newTitle) return;
    project.forEach((proj) => {
      if (proj.name == buttonClicked) {
        proj.todos.push({
          title: newTitle,
          description: "",
          priority: "",
          date: "",
        });
      }
    });
    updating();
  });

  bar.appendChild(divContainer);

  // Note: todos are populated by calling updating() once `bar` has been
  // appended to the document (updating() looks elements up via
  // document.querySelector, so it needs to already be in the DOM).
  // See index.js.
  return bar;
}

function updating() {
  console.log("All good");

  document.querySelectorAll(".todo-div").forEach((el) => el.remove());
  document.querySelectorAll(".noTask").forEach((el) => el.remove());
  document.querySelector(".add-button").remove();
  let bar = document.querySelector(".bar-div");
  let divContainer = document.querySelector(".div-container");
  let remaining = document.querySelector(".remaining");
  let update = document.querySelector(".default");

  let todoRemaining = document.querySelectorAll(".todo-remaining");
  let button = document.createElement("button");
  let titleContainer = document.querySelector(".title-container");
  button.textContent = `+ Add todo`;
  button.className = "add-button";
  titleContainer.appendChild(button);
  update.textContent = buttonClicked;

  project.forEach((proj, numbers) => {
    if (proj.name == buttonClicked) {
      if (proj.todos.length == 0) {
        remaining.textContent = `${proj.todos.length} remaining`;
        button.addEventListener("click", () => {
          let newTitle = prompt("new Todo Title?");
          if (!newTitle) return;
          proj.todos.push({
            title: newTitle,
            description: "",
            priority: "",
            date: "",
          });
          updating();
        });
        let noTask = document.createElement("p");
        noTask.className = `noTask`;
        noTask.textContent = `No task available, try adding one`;
        divContainer.appendChild(noTask);
      } else {
        for (let i = 0; i < proj.todos.length; i++) {
          remaining.textContent = `${proj.todos.length} remaining`;
          todoRemaining.forEach((el, index) => {
            if (numbers == index) {
              el.textContent = `${proj.todos.length}`;
            }
          });
          let todo = document.createElement("div");
          let todoP = document.createElement("p");
          todoP.className = "todo-p";
          let squareButton = document.createElement("button");
          squareButton.className = "square";
          let spanDate = document.createElement("p");
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
        button.addEventListener("click", () => {
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
      }
    }
  });
  bar.appendChild(divContainer);

  let allTodo = document.querySelectorAll(".todo-div");
  allTodo.forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(index);
      extraCard(index);
    });
  });
}

function extraCard(index) {
  console.log("extra card");
  let barDiv = document.querySelector(".bar-div");
  let divContainer = document.querySelector(".div-container");
  let todoDiv = document.querySelectorAll(".todo-div");
  let div = document.createElement("div");
  div.className = "card-div";
  let title = document.createElement("input");
  title.type = "text";
  title.id = "titleid";
  title.name = "title";
  todoDiv.forEach((item, number) => {
    if (index == number) {
      title.value = item.textContent;
      console.log(item.textContent);
    }
  });
}

export { card, updating };
