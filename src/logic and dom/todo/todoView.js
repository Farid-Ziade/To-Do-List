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
  remaining.textContent = `X remaining`;
  header.className = "default";
  header.textContent = buttonClicked;
  headerContainer.appendChild(header);
  headerContainer.appendChild(remaining);
  titleContainer.appendChild(headerContainer);
  titleContainer.appendChild(button);
  bar.appendChild(titleContainer);

  return bar;
}
function updating() {
  let update = document.querySelector(".default");
  if (update) {
    update.textContent = buttonClicked;
  }
  console.log(project);
}
export { card, updating };
