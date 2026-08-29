import { format } from "date-fns";

let today = new Date();
const defaultProject = [
  {
    name: "Default",
    todos: [
      {
        title: "Finish the odin project",
        description: "Become a software developer already",
        priority: "low",
        date: format(today, "yyyy-MM-dd"),
      },
      {
        title: "Go to basketball practice",
        description: "Every Tuesday and Thursday",
        priority: "high",
        date: format(today, "yyyy-MM-dd"),
      },
    ],
  },
  {
    name: "Work",
    todos: [],
  },
  {
    name: "Personal",
    todos: [],
  },
];


let saved = localStorage.getItem("todo");
let project = saved ? JSON.parse(saved) : defaultProject;

function saveProject() {
  localStorage.setItem("todo", JSON.stringify(project));
}


if (!saved) saveProject();

export { project, saveProject };
