# To-Do List

A vanilla JavaScript to-do list app. Create multiple projects, add todos to each one, set a priority and due date, and check them off — everything persists in the browser via `localStorage`.

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

## Project structure

```
src/
├── index.js                          # entry point, mounts the app
├── template.html                     # HTML template used by webpack
├── styles.css
└── logic and dom/
    ├── project/
    │   ├── projectData.js            # project/todo state + localStorage persistence
    │   └── projectView.js            # project sidebar (buttons to switch projects)
    └── todo/
        └── todoView.js               # todo list rendering, add/edit/complete, priority & date editing
```

## Getting started

```bash
npm install
npm run dev      # starts a dev server at http://localhost:3000
npm run build     # production build, output goes to dist/
```

## Deploying to GitHub Pages

Deployment is automated with GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)): every push to `main` builds the project and publishes `dist/` to GitHub Pages.

One-time setup:

1. Push this repo to GitHub (already done: `Farid-Ziade/To-Do-List`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically. The site will be live at `https://farid-ziade.github.io/To-Do-List/`.
