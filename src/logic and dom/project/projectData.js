let today = new Date();
function month(variable) {
  switch (variable) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}
let project = [
  {
    name: "Default",
    todos: [
      {
        title: "Finish the odin project",
        description: "Become a software developer already",
        priority: "High",
        date: ` ${month(today.getMonth())} ${today.getUTCDate()}`,
      },
      {
        title: "zabre",
        description: "b",
        priority: "High",
        date: ` ${month(today.getMonth())} ${today.getUTCDate()}`,
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
