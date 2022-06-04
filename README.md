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

Two Ways of creating the components
------------------------------------
1- Using class
    class MyComponent extends Component {
      render() {
        return(
            <div>
            </div>
        );
      }

    }
2- Stateless functional components
    import './App.css';

function App() {
  return (
    <div>
      <h1> Hello Ark </h1>
    </div>
  );
}

Life cycle hooks
-------------------
A- Mount Phase-> Component is created and added to the DOM
    Life cycle hooks (Called in below sequence)
    a-constructor
    b-render
    c-componentDidMount
B-Update -> State or props of a component changes
    a-render
    b-componentDidUpdate
C-Unmount: Component removed from the DOM
    a- componentWillUnmount -will be called just before the component removed from the DOM, used for cleanup


Angular vs React Vs Vue
-----------------------------
Angular JS: Year 2010 (By Google) | Framework
Angualr2 : Year 2016 - Complete Rewrite of Angular JS | Framework | High Learning Curve | Two Way Data Binding |Major Updates Every 6 months (Breaking Changes) |More Popular than Angular in Github
React: 2013 (By Facebook) | Library | Few features so less learning curve | One Way Data Binding |Stable
Vue: 2013 | Framework |Git Hub More popular than React and Angular

GFG Link below for the difference
https://www.geeksforgeeks.org/difference-between-angular-2-and-reactjs/#:~:text=Angular%202%20is%20an%20open,user%20interface%20of%20an%20application.

--------------------------
REACT ADVANCE TOPICS
--------------------------

React Router : Library build on top of react uesd for Single Page Web Applications, used to define routes
------------

Three different packages:
-------------------------
a- react-router: core routing components
b- react-router-native: for mobile apps
c- react-router-dom: web apps

npm install react-router-dom --save   

Types of Router Components:

a- <BrowserRouter> -> for Dynamic URL
b- <HashRouter> -> for Static URL

Example: index.js

const routing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <Route path="/" component={MyApp} />  
      <Route path="/about" component={AboutComponent} />  
      <Route path="/contact" component={ContactComponent} />  
    </div>  
  </Router>  
)  

How to call HTTP End Points using React
------------------------------------------
Use any of the APIs below
a) XmlHttpRequest
b) Axios
c) Windows fetch

npm install –save axios
import Axios from ‘axios’;

Axios.get(‘url’).then((response)=>{console.log(response)});

postdata=()=>{
   const postObject={
      //values
   }
   Axios.post(‘url’, postObject).then(response=>{ //process the response});
}

deleteData=()=>{
   Axios.delete(‘url’).then(response=>{});
}

Refer below link for more details

https://www.tutorialspoint.com/making-http-request-in-react-js


What is React Flux
-------------------
It is architecture pattern for building react apps.
Components Fire of actions and listen to stores
Store more of like a angular service
Actions do only one thing, pipe the actions to dispather, Action might create multiple actions
Dispatcher is a pattern of pub-sub  (differnce is event sends to all stores)

https://www.youtube.com/watch?v=PvjNglsyOHs
https://www.javatpoint.com/react-flux-concept#:~:text=Flux%20is%20an%20application%20architecture,of%20Unidirectional%20Data%20Flow%20model.

What is React Redux
--------------------
https://react-redux.js.org/tutorials/quick-start

Used for app state management, it is a state container for js apps, it provides the single source of truth
, single global object Store, the state of whole application is stored in an object tree with single store. Also the state is read only
it can only be updated by emitting the actions.

