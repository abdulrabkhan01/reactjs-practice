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
 Note: These values are immutable, we cannot assign them directly in the code.

 Virtual DOM in react
 --------------------
 Most of the JS fremeworks rely to update the browser DOM, but it is time consuming operations, for creating Fast User interfaces, the concept of Virtual DOM is used in React
 For every DOM object there is there is corresponding lightweight virtual dom object in reacjs.
 It is faster to manipulate virtual DOM instead of the real DOM

 React maintains the Virtual DOM snapshots and uses it to compare the changes, once difference are identified then React modifies only the changed Object in Real DOM, thus making it much faster than other frameworks.

  Why React is Called as React?
  -------------------------------
  When using react we don't need to manipulate DOM elements directly neither need to add even handlers, all these stuff are taken care by React implicitly. We just update the state of the components and react will
  automatically do the stuff for updating the DOM elements. So REACT JS actually React to these changes in the components, that reason it is called as REACT JS :)

 Looping through elements in React
 -----------------------------------
Unlike angular where we have *ngFor there is no equivalent construct in react, instead
we need to use map operation as shown in the below example

class Xyz extends Component {
  myState= {
    cnt: 0,
    values: ['val1','val2','val3','val4']
  };

  render() {
    return (
      <div>
          <ul>
            { this.myState.values.map( val => <li key={val}>{val}</li>) }
          </ul>
      </div>

    );
  }

  handleClickEvent() {

  }

}

How to conditionally render the content
---------------------------------------
As ReactJS does not provide templating engine so we need to use our own logic to render components conditionally

<div>
  {this.myState.values.length===0 && "Please create a new value"}
</div>

Handling Events
-----------------
Use the event methods names in camelNotation like onClick, onBlur etc. & call the appropriate handler function
<button>
  onClick={this.handleClickEvent}
</button>

Binding Event Handlers
----------------------
In the event method the access is not available for the object state, you cannot use 'this' keyword inside
the event handler method, you need to call the bind method of the function from the constructor and pass
the value of 'this' instance there

For Example:

class Xyz extends Component {
  myState= {
    cnt: 0,
    values: ['val1','val2','val3','val4']
  };

 constructor() {
   super();
   this.handleClickEvent = this.handleClickEvent.bind(this);
   //now this keyword can be used inside handleClickEvent method
 }
  render() {
    return (
      <div>
          <ul>
            { this.myState.values.map( val => <li key={val}>{val}</li>) }
          </ul>
      </div>

    );
  }

  handleClickEvent() {
    console.log(this)
  }

Another alternative way of using this keyword inside the event handler -> Use the arrow function
handleClickEvent = () => {
  console.log(this);
};


Updating the State
-------------------
The below code does not work in react for changing the state
this.myState.cnt++; //This will not update the state 

Use setState method as shown below

handleClickEvent = () => {
  this.setState({cnt: this.myState.cnt+1});

};

Passing arguements to the Event Functions
-----------------------------------------
Create a wrapper method
//Actual Method
handleEvent = item => {
  console.log(item);
}

doHandleEvent = () => {
  this.handleEvent({id:1});
}

<button onClick={this.doHandleEvent()}/>

BETTER approach -> Pass the inline wrapper function directly as below
<button onClick={() => {  this.handleEvent({id:1});}}/>


Note: The key attribute was set in the li tag as react want all elements to be unique

Q1- When to extend ReactJS.Component? Just complete full youtube course and then we will think.

