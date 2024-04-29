# Base MUI4 and React 17 Applications

The goal of this lab is to build a React 17 application that uses MUI version 4.  This is the base of the Luminate Components.
We will use this React App to experiment with Github Co Pilot.

## Expectations:
1. Copilot will need to be prompted into creating the proper configuration
2. Copilot does not know everything, there is a part below, I had to manually change the code, even after I gave CoPilot the error message. It gave me the wrong advice on how to render the App.
3. Feel free to paste my version of the prompt into your CoPilot Chat window --- but please experiment with your own prompts

## Disclaimer:
1. I am not a UI developer, I craft UI's to test my backend code

### Safety Valve:
1. In the Appendix, is a working package.json.  Assuming you have node/npm installed, feel free to "npm install" the package.json

---

**Co Pilot Chat Prompt**: show the steps to create a sample react application with material-ui version 4 components using react 17 using create-react-app. Use the react test library compatible with react 17.

GitHub Copilot: Here are the steps to create a sample React application with Material-UI version 4 components using React 17 and Create React App. We'll also set up the React Testing Library compatible with React 17.

1. First, we need to create a new React application using Create React App. We'll call this application "my-app".

```bash
npx create-react-app my-app
```

2. Once the application is created, navigate into the new directory.

```bash
cd my-app
```

3. Now, we need to install Material-UI version 4. 

```bash
npm install @material-ui/core@4
```

4. This causes an error due to imcompatibility with React 18, so lets run what we have and clean it up before we downgrade the implementation

5. To run, you can use the command:

```bash
npm start
```

6. We see a warning in the development server we want to clean up, enter the following error

---

**Co Pilot Chat Prompt**: One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

GitHub Copilot: To add "@babel/plugin-proposal-private-property-in-object" to your devDependencies and work around this error, you can use the following command:

```bash
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

This command will add the "@babel/plugin-proposal-private-property-in-object" package to your devDependencies in your package.json file, ensuring that it's available for babel-preset-react-app to use, and making the error message go away.

---

**Co Pilot Chat Prompt**: The commands provided were for MUI version 5 and React 18. Uninstall React 18 and install react 17. Uninstall the current version of the react test library and install the test library compatible with React 17. Uninstall MUI 5 and install MUI 4  

GitHub Copilot: To uninstall React 18, the current version of the React Testing Library, and MUI 5, and then install React 17, the React Testing Library compatible with React 17, and MUI 4, you can use the following commands:

1. First, uninstall React 18, the current version of the React Testing Library, and MUI 5:

```bash
npm uninstall react react-dom @testing-library/react @mui/material
```

2. Then, install React 17:

```bash
npm install react@17 react-dom@17
```

3. Install the React Testing Library compatible with React 17:

```bash
npm install --save-dev @testing-library/react@11
```

4. Finally, install MUI 4:

```bash
npm install @material-ui/core@4
```

Now, your project should be set up with React 17, the React Testing Library compatible with React 17, and MUI 4.

---

### Programmers note:
***Copilot is just a helper and does not know everything***.  We need to make a change to index.js to complete our downgrade in how this renders
Make the changes below to your src/index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

**Co Pilot Chat Prompt**: add mui 4 components for  3 text fields first name, last name, and hobby with submit button

GitHub Copilot: First, you need to install Material-UI in your project. You can do this by running the following command in your terminal:

```bash
npm install @material-ui/core
```

Then, you can add the Material-UI components to your `App` component. Here's how you can do it:

```javascript
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <TextField label="First Name" variant="outlined" />
      <TextField label="Last Name" variant="outlined" />
      <TextField label="Hobby" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default App;
```

This code adds three text fields for first name, last name, and hobby, and a submit button. The `variant="outlined"` prop gives the text fields and button an outlined style, and the `color="primary"` prop gives the button a primary color.

---

**Co Pilot Chat Prompt**: change the app.css to center the new components, give them a yellow background with blue font, and the background canvas, give a light blue background

GitHub Copilot: First, you need to import your `App.css` file in your `App.js` file. You can do this by adding the following line at the top of your `App.js` file:

```javascript
import './App.css';
```

Then, you can add the following CSS to your `App.css` file to style your components:

```css
body {
  background-color: lightblue;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: yellow;
  color: blue;
}

.MuiTextField-root,
.MuiButton-root {
  margin: 10px;
}
```

This CSS will center your components, give them a yellow background with blue font, and give the background canvas a light blue color. The `.MuiTextField-root` and `.MuiButton-root` classes are used to target the Material-UI text fields and button.

---

**Co Pilot Chat Prompt**: ERROR in ./src/index.js 19:33-36
export 'default' (imported as 'App') was not found in './App' (module has no exports)

GitHub Copilot: This error typically occurs when you're trying to import a default export from a module that doesn't have one. In your `App.js` file, you need to add a default export for the `App` component. 

Here's how you can do it:

```javascript
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextField label="First Name" variant="outlined" />
      <TextField label="Last Name" variant="outlined" />
      <TextField label="Hobby" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default App;
```

This code adds a default export for the `App` component at the bottom of the file. Now, you should be able to import the `App` component in your `index.js` file without any errors.

---

**Co Pilot Chat Prompt**: create an on submit action for the button that displays all values in the text boxes in an MUI textbox

GitHub Copilot: To handle form submission, you can use React's state and event handling. Here's how you can modify your `App` component to handle form submission:

```javascript
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hobby, setHobby] = useState('');
  const [submittedData, setSubmittedData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(`First Name: ${firstName}, Last Name: ${lastName}, Hobby: ${hobby}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField label="First Name" variant="outlined" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <TextField label="Last Name" variant="outlined" value={lastName} onChange={e => setLastName(e.target.value)} />
        <TextField label="Hobby" variant="outlined" value={hobby} onChange={e => setHobby(e.target.value)} />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      {submittedData && <TextField label="Submitted Data" variant="outlined" value={submittedData} InputProps={{readOnly: true}} />}
    </div>
  );
}

export default App;
```

This code adds state variables for the first name, last name, and hobby, and a state variable for the submitted data. The `handleSubmit` function sets the submitted data when the form is submitted. The `onChange` prop is used to update the state variables when the text fields are changed. The submitted data is displayed in a read-only text field.

---

**Co Pilot Chat Prompt**: Update the app.css to center the text boxes in a single vertical column and style the pop-up  textbox with a red background center the submit button under the text boxed with a space of 20 pixels

GitHub Copilot: You can update your `App.css` file as follows to center the text boxes in a single vertical column, style the pop-up textbox with a red background, and center the submit button under the text boxes with a space of 20 pixels:

```css
body {
  background-color: lightblue;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: yellow;
  color: blue;
}

.MuiTextField-root,
.MuiButton-root {
  margin: 10px;
}

.MuiTextField-root {
  color: blue;
}

.MuiTextField-root.Mui-focused {
  background-color: red;
}

.MuiButton-root {
  margin-top: 20px;
}
```

In this CSS, `.MuiTextField-root.Mui-focused` targets the text field when it is focused (i.e., when the pop-up textbox is displayed), and `.MuiButton-root` targets the submit button. The `margin-top: 20px;` gives the submit button a space of 20 pixels from the text boxes.

# Appendix

The package.json file that you can drop on your computer and "npm install"

```jsx
{
  "name": "mynew-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.12.4",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@testing-library/react": "^11.2.7"
  }
}

```