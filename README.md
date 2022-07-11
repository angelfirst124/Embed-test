# Embed Frontend Assignment

## Author

### Name: Denis Nishikawa
### Email: denishikawa1226@gmail.com

### Live Demo: https://frontend-assignmentapp.herokuapp.com/


## Description

Created by using [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with following libraries including:

  - React v17.0.2
  - Type Checker - TypeScript
  - State management - Redux Thunk & Toolkit
  - Style system - SCSS
  - Format & Lint - ESLint & Prettier

Custom Templates, format, and ESlint configurations.

## Setup Environments
  - Node 16.2.0
  - npm 1.22.17

  ```
  npm install
  ```

  or
  ```
  yarn install
  ```

## Run Scripts

Inside the project directory run:

- `npm start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm build` - builds the app for production to the `build` folder.
- `npm build:serve` - run a local static build using the production build using serve library. Install `npm install -g serve`.
- `npm eject` - exposes content of `react-script` package
- `npm lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `npm fix` - fix lint errors.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.