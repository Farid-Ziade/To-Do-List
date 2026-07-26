let today = new Date();
let project = [
  {
    name: "Default",
    todos: [
      {
        title: "Finish the odin project",
        description: "Become a software developer already",
        priority: "High",
        date: `${today.getDay()} - ${today.getFullYear()}`,
      },
    ],
  },
  {
    name: "Work",
    title: "",
    description: "",
    priority: "",
    date: "",
    todos: [],
  },
  {
    name: "Personal",
    title: "",
    description: "",
    priority: "",
    date: "",
    todos: [],
  },
];

export { project };
