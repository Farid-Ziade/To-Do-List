# To-Do List

A vanilla JavaScript to-do list app. Create multiple projects, add todos to each one, set a priority and due date, and check them off everything persists in the browser via `localStorage`.

**Live demo:** https://farid-ziade.github.io/To-Do-List/

## Features

- Multiple projects (e.g. Default, Work, Personal), each with its own todo list
- Add, edit, and complete todos
- Set a priority (low / medium / high, shown as a color dot) and a due date per todo
- Data is saved to `localStorage` and reloaded on next visit

## Tech stack

- Plain JavaScript (DOM APIs, no framework)
- [date-fns](https://date-fns.org/) for date formatting
- Webpack for bundling
