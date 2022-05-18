# reactjs-practice
Learning React JS :)

Introduction: 
---------------
ReactJS is a Javascript library, it is component based library (not a framework) for creating User Interfaces.
React is used to build single-page applications.
It helps us to create reusable components.
It uses Declarative approach instead of imperative

Component:
--------------
Build using HTML, CSS and JS, a Component in React is just a JavaScript function.
They are just functions that return the html code.
Custom component will always uses Upper Case names (camel notation) unlike html defined components.
Like App, CustomItem etc.

Create React App
----------------
Make sure node.js already installed on your machine, if not install it and run the below command
npx create-react-app my-react-app
cd my-react-app
npm start

React JS Project structure
--------------------------
project_root
            -> public
                -> only html file that will be loaded in browser (contains div id="root")
            -> src
                ->App.js
                ->index.js (First file to be run when we start the react project)
                ->index.css
                ->package.json
        
React related libraries
--------------------------
"react": "^18.1.0",
"react-dom": "^18.1.0",

App.js : 
-------
This is the actual component which will be rendered inside the single page html (i.e index.html inside public directory)

import './App.css';

function App() {
  return (
    <div>
      <h1> Hello Ark </h1>
    </div>
  );
}

export default App;

index.js
---------
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Introduction to JSX
---------------------
JSX (Java Script XML)= HTML code inside JavaScript

Component Hierarchy in React
---------------------------
App component is the root of other custom components
Example
App (Rendered directly into single HTML page using ReactDOM.createRoot)
  Component1
        Component1Child1...n
  Component2
         Component2Child1...n
  Componentn

 Using CSS
 ---------
 Create the css file for the component in the same directory where component is defined and import it
 into the component using the import keyword

 To use variable values inside the components
 ------------------------------------------------
 Use {} to evaluate any java code inside the components

 Passing data to component
 --------------------------
 props (Key value pairs are used to pass data to the child component from the root app component)