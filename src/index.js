import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import HelloWorld from "./hello";
import Todo from "./components/Todo";
import todos from './components/todos.json';
import NavigationExample from "./components/NavigationExample";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <NavigationExample/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
