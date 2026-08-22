import { project } from "../project/projectData.js";
import { buttonClicked } from "../project/projectView";
import { buttonNumber } from "../project/projectView";
import { format, parseISO, isValid } from "date-fns";

function formatDate(dateStr) {
  if (!dateStr) return "No date";
  const parsed = parseISO(dateStr);
  return isValid(parsed) ? format(parsed, "MMM d, yyyy") : "No date";
}

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

  return bar;
}

function updating() {
  document.querySelectorAll(".todo-div").forEach((el) => el.remove());
  document.querySelectorAll(".noTask").forEach((el) => el.remove());
  document.querySelectorAll(".card-div").forEach((el) => {
    el.remove();
  });
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
          let smallContainer = document.createElement("div");
          smallContainer.className = "smallContainer";
          let squareButton = document.createElement("input");
          squareButton.type = "checkbox";
          squareButton.className = "square";
          let circle = document.createElement("span");
          circle.className = "todocircle";
          smallContainer.appendChild(squareButton);
          smallContainer.appendChild(circle);
          let spanDate = document.createElement("p");
          todo.className = "todo-div";
          todoP.textContent = proj.todos[i].title;
          spanDate.textContent = formatDate(proj.todos[i].date);

          todo.appendChild(smallContainer);
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
      let next = el.nextElementSibling;
      if (next && next.classList.contains("card-div")) {
        next.remove();
      } else {
        extraCard(index);
      }
    });
  });
}

function extraCard(index) {
  let todoDiv = document.querySelectorAll(".todo-div");
  let todoP = document.querySelectorAll(".todo-p");
  let div = document.createElement("div");
  div.className = "card-div";
  let circle = document.querySelector(".todocircle");
  let title = document.createElement("input");
  title.type = "text";
  title.id = "titleid";
  title.name = "title";
  title.maxLength = "50";
  let label = document.createElement("label");
  label.htmlFor = "titleid";
  label.textContent = "Title";
  label.className = "todo-title-label";
  let description = document.createElement("input");
  description.type = "text";

  let dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "dateid";
  dateInput.name = "date";
  let dateLabel = document.createElement("label");
  dateLabel.htmlFor = "dateid";
  dateLabel.textContent = "Due date";
  dateLabel.className = "todo-date-label";

  let select = document.createElement("select");
  select.name = "select";
  select.id = "selectid";
  let arrayOption = ["low", "medium", "high"];
  arrayOption.forEach((el) => {
    let option = document.createElement("option");
    option.htmlFor = "selectid";
    option.textContent = el.toUpperCase();
    option.value = el.toLowerCase();
    if (option.value == "low") {
      circle.style.backgroundColor = "red";
    }
    ////bug here

    select.appendChild(option);
  });

  let selectLabel = document.createElement("label");
  selectLabel.htmlFor = "selectid";
  selectLabel.textContent = "Priority";
  selectLabel.className = "todo-priority-label";

  let currentTodo;
  todoP.forEach((item, number) => {
    if (index == number) {
      title.value = item.textContent;
      currentTodo = item;
    }
  });
  title.addEventListener("input", () => {
    currentTodo.textContent = title.value;
    project.forEach((proj) => {
      if (proj.name == buttonClicked) {
        proj.todos[index].title = currentTodo.textContent;
      }
    });
  });

  project.forEach((proj) => {
    if (proj.name == buttonClicked) {
      dateInput.value = proj.todos[index].date || "";
    }
  });
  dateInput.addEventListener("change", () => {
    project.forEach((proj) => {
      if (proj.name == buttonClicked) {
        proj.todos[index].date = dateInput.value;
      }
    });

    todoDiv.forEach((item, number) => {
      if (index == number) {
        console.log(item.children[2]);
        let spanDate = item.children[2];
        spanDate.textContent = formatDate(dateInput.value);
      }
    });
  });

  todoDiv.forEach((item, number) => {
    if (index == number) {
      div.appendChild(label);
      div.appendChild(title);
      div.appendChild(dateLabel);
      div.appendChild(dateInput);
      div.appendChild(selectLabel);
      div.appendChild(select);
      item.insertAdjacentElement("afterend", div);
    }
  });
}

export { card, updating };
