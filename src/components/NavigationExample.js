import React from "react";
import HelloWorld from "../hello";
import Todo from "./Todo";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Login";

const NavigationExample = () => {
  return(
    <>
      <BrowserRouter>
        <Route path="/hello">
          <HelloWorld/>
        </Route>
        <Route path="/todo">
          <Todo/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </BrowserRouter>
    </>
  )
};

export default NavigationExample;