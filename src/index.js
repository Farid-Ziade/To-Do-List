import "./styles.css";
import { todo } from "./logic and dom/todo/todo.js";
import { card } from "./logic and dom/todo/todoView.js";
import { projectBar } from "./logic and dom/project/projectView.js";
let container = document.createElement("div");
container.className = "container";
container.appendChild(projectBar());
container.appendChild(card());
document.body.appendChild(container);
