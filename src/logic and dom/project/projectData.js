import { format } from "date-fns";

let today = new Date();
let project = [
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

export { project };
