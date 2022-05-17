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
Build using HTML, CSS and JS

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