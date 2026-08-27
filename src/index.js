import "./styles.css";

import { card, updating } from "./logic and dom/todo/todoView.js";
import { projectBar } from "./logic and dom/project/projectView.js";
let container = document.createElement("div");
container.className = "container";
container.appendChild(projectBar());
container.appendChild(card());
document.body.appendChild(container);
// card() only builds the skeleton; updating() populates the todos and
// needs `container` to already be attached to the document (it looks
// elements up via document.querySelector).
updating();
const saved = localStorage.getItem("todo");
if (saved) {
  const project = JSON.parse(saved);
  console.log(project);
}
