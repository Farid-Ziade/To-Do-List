import { project } from "../project/projectData.js";
import { projectBar } from "../project/projectView";
import { buttonClicked } from "../project/projectView";
function card() {
  let bar = document.createElement("div");
  let header = document.createElement("h1");
  header.className = "default";
  header.textContent = buttonClicked;
  bar.appendChild(header);
  return bar;
}
export { card };
